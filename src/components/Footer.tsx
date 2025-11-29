// @ts-ignore
import React from 'react';
import {
  Container,
  Grid,
  Link as MUILink,
  Typography,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterRoot = styled('footer')(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#0f172a',
  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : '#e5e7eb',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(3),
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
}));

const InlineIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
  width: 16,
}));

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

const adminLinks = [
  { label: 'Dashboard', href: '/login' },
  { label: 'Portfolio Admin', href: '/admin/loans' },
  { label: 'Blog Admin', href: '/admin/blog' },
  { label: 'Services Admin', href: '/admin/loans/:id' },
  { label: 'Settings', href: '/admin/settings' },
];

type AppFooterProps = {
  domain?: string; // e.g., https://www.calvazprimeconcepts.com
};

const COMPANY_NAME = 'CALVAZ PRIME CONCEPTS';
const COMPANY_STREET = '9B Rasheed Alatishe Street, Isheri, Magodo, Lagos';
const COMPANY_EMAIL = 'emekaezekwem5@gmail.com';
// Optional phone; update if you want it displayed
const COMPANY_PHONE = '';

export default function AppFooter({
  domain = 'https://www.calvazprimeconcepts.com',
}: AppFooterProps) {
  const year = new Date().getFullYear();

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: domain,
    email: COMPANY_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_STREET,
      addressCountry: 'NG',
    },
    sameAs: [
      // Update with real social URLs when available
      `${domain}/#facebook`,
      `${domain}/#instagram`,
      `${domain}/#twitter`,
      `${domain}/#linkedin`,
    ],
  };

  return (
    <FooterRoot>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid >
            <FooterHeading variant="h6">{COMPANY_NAME}</FooterHeading>
            <Stack spacing={1.2}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                We craft modern, reliable digital solutions — web, mobile, and brand experiences that
                drive business results.
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <InlineIcon icon={faLocationDot} />
                <Typography variant="body2">{COMPANY_STREET}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <InlineIcon icon={faEnvelope} />
                <MUILink href={`mailto:${COMPANY_EMAIL}`} underline="hover" color="inherit" aria-label="Email us">
                  {COMPANY_EMAIL}
                </MUILink>
              </Stack>
              {COMPANY_PHONE ? (
                <Stack direction="row" spacing={1} alignItems="center">
                  <InlineIcon icon={faPhone} />
                  <MUILink href={`tel:${COMPANY_PHONE}`} underline="hover" color="inherit">
                    {COMPANY_PHONE}
                  </MUILink>
                </Stack>
              ) : null}
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
              <IconButton
                aria-label="Facebook"
                color="inherit"
                size="small"
                href="#facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                color="inherit"
                size="small"
                href="#instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                color="inherit"
                size="small"
                href="#twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                size="small"
                href="#linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </IconButton>
            </Stack>
          </Grid>

          <Grid>
            <FooterHeading variant="subtitle1">Company</FooterHeading>
            <Stack spacing={1}>
              {footerLinks.slice(0, 5).map((l) => (
                <MUILink key={l.href} href={l.href} color="inherit" underline="hover" sx={{ opacity: 0.9 }}>
                  {l.label}
                </MUILink>
              ))}
            </Stack>
          </Grid>

          <Grid >
            <FooterHeading variant="subtitle1">Resources</FooterHeading>
            <Stack spacing={1}>
              {footerLinks.slice(5).map((l) => (
                <MUILink key={l.href} href={l.href} color="inherit" underline="hover" sx={{ opacity: 0.9 }}>
                  {l.label}
                </MUILink>
              ))}
            </Stack>
          </Grid>

          <Grid >
            <FooterHeading variant="subtitle1">Admin</FooterHeading>
            <Stack spacing={1}>
              {adminLinks.map((l) => (
                <MUILink key={l.href} href={l.href} color="inherit" underline="hover" sx={{ opacity: 0.9 }}>
                  {l.label}
                </MUILink>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.12)' }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={1.5}
        >
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            © {year} {COMPANY_NAME}. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <MUILink href="/privacy" color="inherit" underline="hover">
              Privacy
            </MUILink>
            <MUILink href="/terms" color="inherit" underline="hover">
              Terms
            </MUILink>
          </Stack>
        </Stack>
      </Container>

      {/* JSON-LD for Organization */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </FooterRoot>
  );
}