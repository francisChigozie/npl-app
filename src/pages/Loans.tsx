import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api/client';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import dayjs from 'dayjs';
import type {FormEvent} from 'react';

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

export default function LoanDetail() {
    const {id} = useParams<{ id: string }>();
    const queryClient = useQueryClient();

    // Guard early to keep the rest of the code strictly typed
    if (!id) {
        return <Typography variant="body1">Missing loan id.</Typography>;
    }

    // Query key helpers
    const loanKey = (loanId: string) => ['loan', loanId] as const;
    const logsKey = (loanId: string) => ['logs', loanId] as const;

    // API helpers
    const fetchLoan = async (loanId: string) =>
        (await api.get<Loan>(`/loans/${loanId}`)).data;

    const fetchRecoveryLogs = async (loanId: string) =>
        (await api.get<RecoveryLog[]>(`/loans/${loanId}/recovery-logs`)).data;

    type NewRecoveryLogPayload = {
        channel: 'visit';
        timestamp: string;
        notes: string;
        outcome: 'promise';
        promiseToPay: { amount: number; date: string };
    };

    const createRecoveryLog = (loanId: string, payload: NewRecoveryLogPayload) =>
        api.post(`/loans/${loanId}/recovery-logs`, payload);

    // Queries
    const {data: loan} = useQuery<Loan, Error>({
        queryKey: loanKey(id),
        queryFn: () => fetchLoan(id),
        enabled: !!id,
    });

    const {data: logs = []} = useQuery<RecoveryLog[], Error>({
        queryKey: logsKey(id),
        queryFn: () => fetchRecoveryLogs(id),
        enabled: !!id,
        initialData: [],
    });

    // Mutation
    const addLogMutation = useMutation<unknown, Error, NewRecoveryLogPayload>({
        mutationFn: (payload) => createRecoveryLog(id, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: logsKey(id)});
        },
    });

    // Handlers
    const handleAddLog = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);

        const notes = String(fd.get('notes') ?? '');
        const amount = Number(fd.get('amount') ?? 0);
        const date = String(fd.get('date') ?? '');

        const payload: NewRecoveryLogPayload = {
            channel: 'visit',
            timestamp: new Date().toISOString(),
            notes,
            outcome: 'promise',
            promiseToPay: {amount, date},
        };

        addLogMutation.mutate(payload);
        e.currentTarget.reset();
    };

    return (
        <Container sx={{mt: 2}}>
            <Typography variant="h6">Loan: {loan?.accountNumber}</Typography>
            <Typography>Principal: {loan?.principal}</Typography>

            <Typography variant="subtitle1" sx={{mt: 3}}>
                Recovery Logs
            </Typography>

            {logs.map((r) => (
                <Box key={r._id} sx={{border: '1px solid #eee', p: 1, my: 1}}>
                    <Typography>{dayjs(r.timestamp).format('YYYY-MM-DD HH:mm')}</Typography>
                    <Typography>{r.notes}</Typography>
                </Box>
            ))}

            <Box component="form" onSubmit={handleAddLog} sx={{mt: 2}}>
                <TextField name="notes" label="Notes" fullWidth margin="dense"/>
                <TextField name="amount" label="Promise Amount" type="number" margin="dense"/>
                <TextField
                    name="date"
                    label="Date"
                    type="date"
                    margin="dense"
                    InputLabelProps={{shrink: true}}
                />
                <Button type="submit" variant="contained" sx={{mt: 1}} disabled={addLogMutation.isPending}>
                    Add Recovery Log
                </Button>
            </Box>
        </Container>
    );
}