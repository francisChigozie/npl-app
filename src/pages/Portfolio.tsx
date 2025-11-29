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
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBank,
    faClipboardCheck,
    faTimeline,
    faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const portfolioItems = [
    {
        icon: faBank,
        title: "Deposit Money Bank Engagements",
        summary:
            "Collaborative recovery assignments with bank recovery departments to reduce NPL exposures.",
        outcomes: [
            "Structured escalation playbooks per exposure type.",
            "Improved repayment commitments through guided negotiations.",
        ],
        tags: ["Collaboration", "Governance", "Reporting"],
    },
    {
        icon: faClipboardCheck,
        title: "Security Realization & Asset Tracing",
        summary:
            "Diligent pursuit of collateral realization and identification of attachable assets when applicable.",
        outcomes: [
            "Expedited enforcement timelines.",
            "Better coverage of delinquent balances.",
        ],
        tags: ["Enforcement", "Coverage", "Timeliness"],
    },
    {
        icon: faTimeline,
        title: "Portfolio Stabilization in Volatile Conditions",
        summary:
            "Post‑pandemic portfolio actions to arrest deterioration in asset quality and restore performance.",
        outcomes: [
            "Risk‑aligned incentives (subject to lender approval).",
            "Reduced roll‑rates via proactive monitoring and contact strategies.",
        ],
        tags: ["NPL Reduction", "Early Warning", "Restructuring"],
    },
    {
        icon: faUserShield,
        title: "Compliance‑Aligned Escalations",
        summary:
            "Appropriate collaboration with relevant authorities and litigation paths where inevitable.",
        outcomes: [
            "Legally sound recoveries with documented audit trails.",
            "Protecting lender reputation while pursuing outcomes.",
        ],
        tags: ["Compliance", "Legal", "Reputation"],
    },
];

export default function PortfolioPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" fontWeight={700} mb={1}>
                    Portfolio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Representative engagements and capabilities aligned with our NPL proposal.
                </Typography>
            </Box>

            <Grid container spacing={2}>
                {portfolioItems.map((item) => (
                    <Grid  key={item.title}>
                        <Card variant="outlined" sx={{ height: "100%" }}>
                            <CardContent>
                                <Stack direction="row" spacing={1.5} alignItems="center" mb={1}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <Typography variant="h6" fontWeight={700}>
                                        {item.title}
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" mb={1.25}>
                                    {item.summary}
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={700} mb={0.5}>
                                    Outcomes
                                </Typography>
                                {item.outcomes.map((o) => (
                                    <Typography key={o} variant="body2" mb={0.5}>
                                        - {o}
                                    </Typography>
                                ))}
                                <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                                    {item.tags.map((t) => (
                                        <Chip key={t} label={t} size="small" />
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}