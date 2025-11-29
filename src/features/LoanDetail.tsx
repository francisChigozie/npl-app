import { useParams } from 'react-router-dom';
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import dayjs from 'dayjs';
import type { FormEvent } from 'react';
import api from '../api/client';

type Loan = {
    id: string;
    accountNumber: string;
    principal: number;
};

type RecoveryLog = {
    _id: string;
    timestamp: string;
    notes: string;
};

// Payload type for creating a new recovery log
export type CreateRecoveryLogPayload = {
    channel: string;
    timestamp: string;
    notes: string;
    outcome: string;
    promiseToPay: {
        amount: number;
        date: string;
    };
};

const loanQueryKey = (id?: string) => ['loan', id] as const;
const recoveryLogsQueryKey = (id?: string) => ['logs', id] as const;

const DISPLAY_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm';

const fetchLoan = async (id: string) =>
    (await api.get<Loan>(`/loans/${id}`)).data;

const fetchRecoveryLogs = async (id: string) =>
    (await api.get<RecoveryLog[]>(`/loans/${id}/recovery-logs`)).data;

const createRecoveryLog = (
    id: string,
    payload: CreateRecoveryLogPayload,
) => api.post(`/loans/${id}/recovery-logs`, payload);

export default function LoanDetail() {
    const { id } = useParams<{ id: string }>();
    const queryClient = useQueryClient();

    const { data: loan } = useQuery<Loan>({
        queryKey: loanQueryKey(id),
        queryFn: () => fetchLoan(id!),
        enabled: Boolean(id),
    });

    const { data: logs = [] } = useQuery<RecoveryLog[]>({
        queryKey: recoveryLogsQueryKey(id),
        queryFn: () => fetchRecoveryLogs(id!),
        enabled: Boolean(id),
        initialData: [],
    });

    const createLogMutation = useMutation<void, unknown, CreateRecoveryLogPayload>(
        {
            mutationFn: async (payload) => {
                if (!id) return;
                await createRecoveryLog(id, payload);
            },
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: recoveryLogsQueryKey(id),
                });
            },
        },
    );

    const handleAddLog = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!id) return;

        const formData = new FormData(e.currentTarget);
        const notes = String(formData.get('notes') ?? '');
        const amount = Number(formData.get('amount') ?? 0);
        const date = String(formData.get('date') ?? '');

        createLogMutation.mutate({
            channel: 'visit',
            timestamp: new Date().toISOString(),
            notes,
            outcome: 'promise',
            promiseToPay: { amount, date },
        });

        e.currentTarget.reset();
    };

    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant="h6">
                Loan: {loan?.accountNumber}
            </Typography>

            <Typography>
                Principal: {loan?.principal}
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 3 }}>
                Recovery Logs
            </Typography>

            {logs.map((log) => (
                <Box
                    key={log._id}
                    sx={{ border: '1px solid #eee', p: 1, my: 1 }}
                >
                    <Typography>
                        {dayjs(log.timestamp).format(DISPLAY_DATETIME_FORMAT)}
                    </Typography>
                    <Typography>{log.notes}</Typography>
                </Box>
            ))}

            <Box
                component="form"
                onSubmit={handleAddLog}
                sx={{ mt: 2 }}
            >
                <TextField
                    name="notes"
                    label="Notes"
                    fullWidth
                    margin="dense"
                />
                <TextField
                    name="amount"
                    label="Promise Amount"
                    type="number"
                    margin="dense"
                />
                <TextField
                    name="date"
                    label="Date"
                    type="date"
                    margin="dense"
                    InputLabelProps={{ shrink: true }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 1 }}
                >
                    Add Recovery Log
                </Button>
            </Box>
        </Container>
    );
}