// @ts-ignore
import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGavel,
    faShield,
    faHandshake,
    // @ts-ignore
    faUserCheck,
    faMagnifyingGlass,
    faScaleBalanced,
    faListCheck,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const services = [
    {
        icon: faShield,
        title: "Lawful Recovery Engagements",
        points: [
            "Collaboration with relevant authorities (e.g., EFCC, Police) when appropriate and lawful.",
            "Diligent security realization and identification of attachable assets.",
        ],
        chips: ["Compliance‑First", "Risk‑Managed"],
    },
    {
        icon: faGavel,
        title: "Legal & Litigation Support",
        points: [
            "Escalation to litigation where inevitable to secure and enforce repayment.",
            "Documentation support and lender coordination.",
        ],
        chips: ["Structured Escalation", "Enforcement"],
    },
    {
        icon: faHandshake,
        title: "Negotiation & Moral Suasion",
        points: [
            "Constructive debtor dialogue to extract sustainable commitments.",
            "Targeted visits to business premises for expedited proposals and repayments.",
        ],
        chips: ["Pragmatic", "Relationship‑Led"],
    },
    {
        icon: faScaleBalanced,
        title: "Incentive‑Driven Workouts",
        points: [
            "Interest‑waiver incentives to accelerate repayments (subject to lender approval).",
            "Tailored restructurings aligned with bank policy.",
        ],
        chips: ["Policy‑Aligned", "Outcome‑Focused"],
    },
    {
        icon: faMagnifyingGlass,
        title: "Asset & Exposure Reviews",
        points: [
            "Periodic reviews of delinquent exposures with client recovery leadership.",
            "Portfolio‑level insights to arrest asset quality deterioration.",
        ],
        chips: ["Portfolio View", "Early Warning"],
    },
    {
        icon: faListCheck,
        title: "Field Operations",
        points: [
            "Planned visitations (including off‑hours if justified) to expedite resolution.",
            "On‑site engagements to verify operations and secure agreements.",
        ],
        chips: ["On‑Site", "Time‑Bound"],
    },
];

export default function ServicesPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" fontWeight={700} mb={1}>
                    Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Bank‑grade NPL management designed for rapid, compliant recoveries and measurable outcomes.
                </Typography>
            </Box>

            <Grid container spacing={2}>
                {services.map((svc) => (
                    <Grid  key={svc.title}>
                        <Card variant="outlined" sx={{ height: "100%" }}>
                            <CardContent>
                                <Stack direction="row" spacing={1.5} alignItems="center" mb={1}>
                                    <FontAwesomeIcon icon={svc.icon} />
                                    <Typography variant="h6" fontWeight={700}>
                                        {svc.title}
                                    </Typography>
                                </Stack>
                                {svc.points.map((p) => (
                                    <Typography key={p} variant="body2" mb={0.75}>
                                        - {p}
                                    </Typography>
                                ))}
                                <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                                    {svc.chips.map((c) => (
                                        <Chip key={c} label={c} size="small" />
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Methodology accordion for mobile compactness */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" fontWeight={700} mb={1}>
                    Methodology at a Glance
                </Typography>

                <Accordion disableGutters>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <FontAwesomeIcon icon={faChartLine} />
                            <Typography fontWeight={600}>End‑to‑End Flow</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" mb={0.75}>
                            1) Triage and portfolio review with client recovery heads.
                        </Typography>
                        <Typography variant="body2" mb={0.75}>
                            2) Engagement strategy: negotiation, structured incentives, or escalation.
                        </Typography>
                        <Typography variant="body2" mb={0.75}>
                            3) Field operations and security realization as needed.
                        </Typography>
                        <Typography variant="body2">
                            4) Periodic reviews and reporting to align with deliverables.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}
