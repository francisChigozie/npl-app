'use client';

import {
    Container,
    TextField,
    Button,
    Stack,
    Alert,
    Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    message: z.string().min(10),
});

type FormValues = z.infer<typeof schema> & {
    file?: FileList;
};

// If you're using Vite, this is the typical way:
const api = import.meta.env.VITE_API_BASE;

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    const [ok, setOk] = useState(false);

    const onSubmit = async (data: FormValues) => {
        setOk(false);

        const res = await fetch(`${api}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone ?? '',
                message: data.message,
            }),
        });

        setOk(res.ok);

        if (res.ok) {
            // clears back to defaultValues (empty strings)
            reset();
        }
    };

    return (
        <Container sx={{ py: 6 }}>
            <h2>Contact</h2>

            <Typography variant="h6" fontWeight={600}>
                Tell us about your case. We’ll reply by email.
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    {ok && (
                        <Alert severity="success">
                            Thank you! We’ll reach out shortly.
                        </Alert>
                    )}

                    <TextField
                        label="Name"
                        {...register('name')}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />

                    <TextField
                        label="Email"
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

                    <TextField
                        label="Phone"
                        {...register('phone')}
                    />

                    <TextField
                        label="Message"
                        multiline
                        rows={5}
                        {...register('message')}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                    />

                    <label>
                        Attachment (optional)
                        <input
                            type="file"
                            {...register('file')}
                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        />
                    </label>

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                    >
                        Send Contacts
                    </Button>
                </Stack>
            </form>
        </Container>
    );
}