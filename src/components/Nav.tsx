// @ts-ignore
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Link as MUILink,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// @ts-ignore
import heroBuildings from '/calvaz_logo.jpeg';

export type NavItem = {
  label: string;
  href: string;
};

export type Brand = {
  title?: string;
  description?: string;
  href?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHeight?: number;
};

type NavProps = {
  items: NavItem[];
  brand?: Brand;
  contactEmailHref?: string;
  whatsappHref?: string;
};

export default function Nav({
  items,
  brand = {
    title: 'CALVAZ PRIME',
    description: 'Professional solutions by CALVAZ PRIME CONCEPTS, Lagos.',
    href: '/',
    logoSrc: `${heroBuildings}`,
    logoAlt: 'Logo',
    logoHeight: 80,
  },
  contactEmailHref = 'mailto:support@example.com',
  whatsappHref = 'https://wa.me/000000000000',
}: NavProps) {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar sx={{ gap: 1, minHeight: { xs: 64, md: 72 } }}>
          {/* Left: Burger on mobile */}
          {!mdUp && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open navigation menu"
              onClick={handleOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, minWidth: 0 }}>
            <MUILink
              href={brand.href ?? '/'}
              underline="none"
              color="inherit"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5 }}
            >
              {brand.logoSrc && (
                <Box
                  component="img"
                  src={brand.logoSrc}
                  alt={brand.logoAlt ?? 'Logo'}
                  sx={{ height: brand.logoHeight ?? 40, width: 'auto', display: 'block' }}
                />
              )}
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                style={{ objectFit: 'contain', color: 'darkgreen' }}
              >
                {brand.title ?? 'CALVAZ PRIME CONCEPTS'}
              </Typography>
            </MUILink>
          </Box>

          {/* Right: Actions and horizontal nav on md+ */}
          {mdUp && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {items.map((item) => (
                  <Button
                    key={item.href}
                    color="inherit"
                    component={MUILink}
                    href={item.href}
                    sx={{ textTransform: 'none' }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
              <IconButton
                component={MUILink}
                href={contactEmailHref}
                aria-label="Email"
                color="primary"
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                component={MUILink}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                color="success"
              >
                <WhatsAppIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                component={MUILink}
                href="/contact"
                sx={{ ml: 0.5, textTransform: 'none' }}
              >
                Contact
              </Button>
            </Box>
          )}

          {/* Burger on md+ if you prefer it always visible (optional) */}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile nav */}
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box
          role="presentation"
          sx={{ width: 300, display: 'flex', flexDirection: 'column', height: '100%' }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') handleClose();
          }}
        >
          <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {brand.logoSrc && (
              <Box
                component="img"
                src={brand.logoSrc}
                alt={brand.logoAlt ?? 'Logo'}
                sx={{ height: 32, width: 'auto', display: 'block' }}
              />
            )}
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {brand.title ?? 'CALVAZ PRIME CONCEPTS'}
            </Typography>
          </Box>
          <Divider />

          <List sx={{ py: 0 }}>
            {items.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={MUILink}
                  href={item.href}
                  onClick={handleClose}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 'auto' }}>
            <Divider />
            <Box sx={{ p: 1, display: 'flex', gap: 1, justifyContent: 'space-between' }}>
              <IconButton
                component={MUILink}
                href={contactEmailHref}
                aria-label="Email"
                color="primary"
                onClick={handleClose}
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                component={MUILink}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                color="success"
                onClick={handleClose}
              >
                <WhatsAppIcon />
              </IconButton>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                component={MUILink}
                href="/contact"
                onClick={handleClose}
                sx={{ textTransform: 'none' }}
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}