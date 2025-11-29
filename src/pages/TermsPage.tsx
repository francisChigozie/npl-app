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
  faFileContract,
  faCircleInfo,
  faScaleBalanced,
  faHandshake,
  faGavel,
  faShield,
  faListCheck,
  faChartLine,
  faEnvelope,
  faLocationDot,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export default function TermsPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 } }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <FontAwesomeIcon icon={faFileContract} />
          <Typography variant="h4" fontWeight={700}>
            Terms of Engagement
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Effective date: 29 October 2025
        </Typography>

        {/* Company Identity */}
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <FontAwesomeIcon icon={faCircleInfo} />
              <Typography variant="h6" fontWeight={700}>
                Company
              </Typography>
            </Stack>
            <Typography variant="subtitle1" fontWeight={700}>
              Calvaz Prime Concepts
            </Typography>
            <Stack spacing={0.25} sx={{ mt: 0.5 }}>
              <Typography variant="body2">
                <FontAwesomeIcon icon={faLocationDot} /> 9B Rasheed Alatishe
                Street, Isheri, Magodo, Lagos
              </Typography>
              <Typography variant="body2">
                <FontAwesomeIcon icon={faEnvelope} /> emekaezekwem5@gmail.com
              </Typography>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2">
              Our team comprises experienced professional bankers with over four
              decades of cognate credit and debt recovery experience across
              Internal Audit, Human Resources, Retail Banking, Credit &
              Marketing, Branch/Regional Management, and recovery leadership.
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
              <Chip label="NPL Management" size="small" />
              <Chip label="Debt Recovery" size="small" />
              <Chip label="Bank-Grade Governance" size="small" />
            </Stack>
          </CardContent>
        </Card>

        {/* Scope & Services */}
        <Accordion disableGutters defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <FontAwesomeIcon icon={faListCheck} />
              <Typography fontWeight={700}>Scope of Engagement</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" mb={0.75}>
              We act as Credit & Debt Recovery Consultants/Agents to deposit
              money banks to assist in the management and reduction of
              Non‑Performing Loans (NPLs).
            </Typography>
            <Typography variant="body2" mb={0.5}>
              Our scope includes:
            </Typography>
            <Stack component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                Portfolio reviews with client recovery leadership.
              </Typography>
              <Typography component="li" variant="body2">
                Negotiations and moral suasion to secure sustainable repayment
                commitments.
              </Typography>
              <Typography component="li" variant="body2">
                Incentive‑aligned workouts (e.g., interest waiver where merited
                and expressly approved by the lender).
              </Typography>
              <Typography component="li" variant="body2">
                Field operations and diligent security realization;
                identification of attachable assets where applicable.
              </Typography>
              <Typography component="li" variant="body2">
                Litigation support where escalation becomes inevitable and
                authorized by the client.
              </Typography>
              <Typography component="li" variant="body2">
                Periodic reviews and reporting aligned with client deliverables.
              </Typography>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Methodology */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <FontAwesomeIcon icon={faChartLine} />
              <Typography fontWeight={700}>Methodology Overview</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={0.75}>
              <Typography variant="body2">
                • Collaboration with relevant authorities (e.g., EFCC, Police)
                when lawful and necessary.
              </Typography>
              <Typography variant="body2">
                • Negotiation and moral suasion as primary paths to resolution.
              </Typography>
              <Typography variant="body2">
                • Interest‑waiver incentives subject to lender’s explicit
                approval.
              </Typography>
              <Typography variant="body2">
                • Litigation options exercised when inevitable and authorized.
              </Typography>
              <Typography variant="body2">
                • Diligent pursuit of security realization and attachable assets
                where applicable.
              </Typography>
              <Typography variant="body2">
                • Periodic portfolio reviews with client recovery heads.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
              <Chip
                icon={<FontAwesomeIcon icon={faHandshake} />}
                label="Negotiation‑First"
                size="small"
              />
              <Chip
                icon={<FontAwesomeIcon icon={faGavel} />}
                label="Escalate When Needed"
                size="small"
              />
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Compliance & Conduct */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <FontAwesomeIcon icon={faScaleBalanced} />
              <Typography fontWeight={700}>
                Compliance & Professional Conduct
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={0.75}>
              <Typography variant="body2">
                • All recovery activities are conducted in accordance with
                applicable laws and client policies.
              </Typography>
              <Typography variant="body2">
                • Collaboration with authorities (EFCC/Police) is pursued only
                where lawful, proportionate, and approved.
              </Typography>
              <Typography variant="body2">
                • No harassment: interactions are professional and respectful;
                we do not engage in conduct intended to embarrass or endanger
                any party. Visits are conducted in a lawful, safety‑first
                manner.
              </Typography>
              <Typography variant="body2">
                • Confidential information received from clients is handled in
                line with our Privacy Policy and client NDAs.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
              <Chip icon={<FontAwesomeIcon icon={faShield} />} label="Lawful" size="small" />
              <Chip icon={<FontAwesomeIcon icon={faUserTie} />} label="Professional" size="small" />
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Responsibilities & Limitations */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <FontAwesomeIcon icon={faShield} />
              <Typography fontWeight={700}>
                Responsibilities & Limitations
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2" fontWeight={700} mb={0.5}>
              Our Responsibilities
            </Typography>
            <Stack component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                Execute agreed recovery strategies and provide periodic reports.
              </Typography>
              <Typography component="li" variant="body2">
                Seek approvals for incentive‑based workouts or escalations (e.g.,
                litigation).
              </Typography>
              <Typography component="li" variant="body2">
                Maintain confidentiality of client data per Privacy
                Policy/NDAs.
              </Typography>
            </Stack>

            <Typography variant="subtitle2" fontWeight={700} mt={2} mb={0.5}>
              Client Responsibilities
            </Typography>
            <Stack component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                Provide accurate and complete account, credit, and collateral
                information.
              </Typography>
              <Typography component="li" variant="body2">
                Confirm policy constraints and authorize incentives or
                litigation where applicable.
              </Typography>
            </Stack>

            <Typography variant="subtitle2" fontWeight={700} mt={2} mb={0.5}>
              Limitations
            </Typography>
            <Stack component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                We do not guarantee recovery outcomes; results depend on debtor
                circumstances and legal processes.
              </Typography>
              <Typography component="li" variant="body2">
                We operate only within the mandate and legal frameworks agreed
                with the client.
              </Typography>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Contact */}
        <Card variant="outlined" sx={{ mt: 3 }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <FontAwesomeIcon icon={faEnvelope} />
              <Typography variant="h6" fontWeight={700}>
                Contact
              </Typography>
            </Stack>
            <Typography variant="body2" mb={0.5}>
              For questions about these Terms, please contact:
            </Typography>
            <Typography variant="body2">
              Calvaz Prime Concepts • 9B Rasheed Alatishe Street, Isheri,
              Magodo, Lagos
            </Typography>
            <Typography variant="body2">
              Email: emekaezekwem5@gmail.com
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}