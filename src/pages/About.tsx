// @ts-ignore
import React from "react";
import {
    Box,
    Container,
    Typography,
    Stack,
    Card,
    CardContent,
    Avatar,
    Chip,
    Divider,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faUserTie,
    faAward,
    faFlag,
    faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 } }}>
            {/* Hero */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: 2,
                    mb: 3,
                }}
            >
                <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
                    <FontAwesomeIcon icon={faBuilding} />
                </Avatar>
                <Box>
                    <Typography variant="h4" fontWeight={700}>
                        Calvaz Prime Concepts
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        9B Rasheed Alatishe Street, Isheri, Magodo, Lagos • emekaezekwem5@gmail.com
                    </Typography>
                </Box>
            </Box>

            {/* Mission / Value Proposition */}
            <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                        <FontAwesomeIcon icon={faFlag} />
                        <Typography variant="h6" fontWeight={700}>
                            Mission & Value Proposition
                        </Typography>
                    </Stack>
                    <Typography variant="body1" mb={1.5}>
                        We help deposit money banks manage and reduce Non‑Performing Loans (NPLs) by combining
                        decades of banking, credit, and recovery expertise with pragmatic, lawful, and results‑driven
                        strategies tailored to Nigeria’s operating environment.
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        <Chip label="NPL Reduction" size="small" />
                        <Chip label="Credit Risk Experience" size="small" />
                        <Chip label="Bank-Grade Governance" size="small" />
                        <Chip label="Outcome Focused" size="small" />
                    </Stack>
                </CardContent>
            </Card>

            {/* Leadership */}
            <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                        <FontAwesomeIcon icon={faUserTie} />
                        <Typography variant="h6" fontWeight={700}>
                            Leadership
                        </Typography>
                    </Stack>
                    <Typography variant="subtitle1" fontWeight={700}>
                        Chukwuemeka Alvan Ezekwem — Principal
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                        Former Group Head/Deputy General Manager, Corporate Banking (Union Bank of Nigeria PLC).
                    </Typography>
                    <Typography variant="body1" mb={1.5}>
                        Over 35 years of cognate banking and finance experience spanning Internal Audit, Human
                        Resources, Retail Banking, Credit & Marketing, Branch and Regional Management, and Debt
                        Recovery oversight. Education includes HND (Business Administration, YABATECH) and MBA
                        (Marketing, LASU), with further training from Columbia University, University of Chicago
                        Booth, and Ashridge Management College.
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" fontWeight={700}>
                        Recovery Operations Lead — Mrs. Vivian Echefu‑Louis
                    </Typography>
                    <Typography variant="body1" mb={1}>
                        10+ years as Recovery Agent, Risk Management Certification Fellow (CVLRMN), Bachelor’s in
                        Languages (University of Calabar), PGD (National Open University of Nigeria). Recipient of
                        Best Recovery Agent awards in 2021 and 2023.
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        <Chip icon={<FontAwesomeIcon icon={faAward} />} label="Award‑Winning" size="small" />
                        <Chip icon={<FontAwesomeIcon icon={faPeopleGroup} />} label="Experienced Team" size="small" />
                    </Stack>
                </CardContent>
            </Card>

            {/* Why Us */}
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" fontWeight={700} mb={1}>
                        Why Banks Choose Us
                    </Typography>
                    <Typography variant="body1" mb={0.75}>
                        - Four decades of combined credit and recovery leadership within Tier‑1 banking.
                    </Typography>
                    <Typography variant="body1" mb={0.75}>
                        - Deep familiarity with Nigeria’s post‑pandemic credit realities and regulatory context.
                    </Typography>
                    <Typography variant="body1">
                        - Collaborative approach with client recovery heads to hit agreed deliverables.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}