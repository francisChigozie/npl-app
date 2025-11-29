// @ts-ignore
import React from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Stack,
    Chip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserShield,
    faDatabase,
    faShieldHalved,
    faShareNodes,
    faScaleBalanced,
    faClockRotateLeft,
    faAddressCard,
    faEnvelope,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function PrivacyPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 } }}>
            {/* Header */}
            <Box sx={{ mb: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <FontAwesomeIcon icon={faUserShield} />
                    <Typography variant="h4" fontWeight={700}>
                        Privacy Policy
                    </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    Effective date: 29 October 2025
                </Typography>
            </Box>

            {/* Identity */}
            <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                        <FontAwesomeIcon icon={faAddressCard} />
                        <Typography variant="h6" fontWeight={700}>
                            Who We Are
                        </Typography>
                    </Stack>
                    <Typography variant="subtitle1" fontWeight={700}>
                        Calvaz Prime Concepts
                    </Typography>
                    <Stack spacing={0.25} sx={{ mt: 0.5 }}>
                        <Typography variant="body2">
                            <FontAwesomeIcon icon={faLocationDot} /> 9B Rasheed Alatishe Street, Isheri, Magodo, Lagos
                        </Typography>
                        <Typography variant="body2">
                            <FontAwesomeIcon icon={faEnvelope} /> emekaezekwem5@gmail.com
                        </Typography>
                    </Stack>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2">
                        We provide NPL management and debt recovery consulting for deposit money banks and operate under bank‑grade
                        governance and lawful recovery practices.
                    </Typography>
                </CardContent>
            </Card>

            {/* Data We Collect */}
            <Accordion disableGutters defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FontAwesomeIcon icon={faDatabase} />
                        <Typography fontWeight={700}>Data We Collect</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" mb={0.5}>Depending on the engagement, we may process:</Typography>
                    <Stack component="ul" sx={{ pl: 2, m: 0 }}>
                        <Typography component="li" variant="body2">
                            Client‑provided account data, exposure details, collateral/security documentation.
                        </Typography>
                        <Typography component="li" variant="body2">
                            Debtor and related‑party contact information and communications relevant to recovery.
                        </Typography>
                        <Typography component="li" variant="body2">
                            Operational records of engagements, field visits, repayment commitments, and enforcement steps.
                        </Typography>
                        <Typography component="li" variant="body2">
                            Documentation supporting litigation where authorized by the client.
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                        <Chip label="Bank-Sourced" size="small" />
                        <Chip label="Case Records" size="small" />
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* How We Use Data */}
            <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FontAwesomeIcon icon={faShieldHalved} />
                        <Typography fontWeight={700}>How We Use Data</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack component="ul" sx={{ pl: 2, m: 0 }}>
                        <Typography component="li" variant="body2">
                            To perform recovery services, including negotiations, incentive‑aligned workouts, and security realization.
                        </Typography>
                        <Typography component="li" variant="body2">
                            To coordinate with client recovery teams and provide periodic reports.
                        </Typography>
                        <Typography component="li" variant="body2">
                            To support lawful escalations (e.g., litigation) when inevitable and approved by the client.
                        </Typography>
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* Legal Bases & Compliance */}
            <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FontAwesomeIcon icon={faScaleBalanced} />
                        <Typography fontWeight={700}>Legal Bases & Compliance</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" mb={0.75}>
                        We process data based on contractual necessity (to fulfill our engagement with the client),
                        legitimate interests of recovery and risk management, and compliance with applicable laws.
                    </Typography>
                    <Typography variant="body2">
                        Collaboration with relevant authorities (e.g., EFCC, Police) is pursued only where lawful, necessary,
                        and authorized by the client. We maintain professional conduct and do not engage in harassment or actions
                        that violate rights or safety.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Sharing & Disclosure */}
            <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FontAwesomeIcon icon={faShareNodes} />
                        <Typography fontWeight={700}>Sharing & Disclosure</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack component="ul" sx={{ pl: 2, m: 0 }}>
                        <Typography component="li" variant="body2">
                            With the client’s designated recovery teams and authorized stakeholders for case execution.
                        </Typography>
                        <Typography component="li" variant="body2">
                            With authorities or courts where legally required or authorized (e.g., litigation, enforcement).
                        </Typography>
                        <Typography component="li" variant="body2">
                            With professional advisers (e.g., legal counsel) under confidentiality where relevant.
                        </Typography>
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* Retention */}
            <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FontAwesomeIcon icon={faClockRotateLeft} />
                        <Typography fontWeight={700}>Data Retention</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                        We retain data for the duration of the engagement and as required by applicable laws, regulations,
                        and client policies. We may retain limited records to evidence lawful activity and compliance.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Security */}
            <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FontAwesomeIcon icon={faShieldHalved} />
                        <Typography fontWeight={700}>Security</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                        We apply governance and procedural safeguards appropriate to bank‑grade engagements. Specific security
                        controls may be set by the client’s policies and NDAs and are observed accordingly.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Your Rights & Contact */}
            <Card variant="outlined" sx={{ mt: 3 }}>
                <CardContent>
                    <Typography variant="h6" fontWeight={700} mb={1}>
                        Your Rights and Contact
                    </Typography>
                    <Typography variant="body2" mb={1}>
                        Depending on applicable law and client policies, you may have rights to access, correct, or restrict processing
                        of your personal data. Requests are handled in coordination with the client as data controller (where applicable).
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="subtitle2" fontWeight={700} mb={0.5}>
                        Contact
                    </Typography>
                    <Typography variant="body2">
                        Calvaz Prime Concepts • 9B Rasheed Alatishe Street, Isheri, Magodo, Lagos
                    </Typography>
                    <Typography variant="body2">Email: emekaezekwem5@gmail.com</Typography>
                </CardContent>
            </Card>
        </Container>
    );
}