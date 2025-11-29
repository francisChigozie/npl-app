// @ts-expect-error React is used for JSX
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';

import Nav from './components/Nav';
import Footer from './components/Footer';

import LoanDetail from './features/LoanDetail';

import Login from './pages/Login';
//import LogoutButton from "./components/LogoutButton";
import DashOfficer from './features/DashOfficer';
import DashAdmin from './features/DashAdmin';
import DashAgent from './features/DashAgent';
import DashSupervisor from './features/DashSupervisor';
import Loans from './pages/Loans';
import Privacy from './pages/PrivacyPage';
import Terms from './pages/TermsPage';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
// New imports:
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

import { Box, Container, Stack, Typography, Link } from '@mui/material';
import heroBuildings from '/images/hero_buildings_cbn_lagos.jpg';

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services'},
  { href: '/portfolio', label: 'Portfolio'},
  { href: '/about', label: 'About'}
];

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav items={navItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
              path="/admin/dash-officer"
              element={
                  <ProtectedRoute roles={["Officer"]}>
                      <DashOfficer />
                  </ProtectedRoute>
              }
          />
          <Route
            path="/admin/dash-admin"
            element={
              <ProtectedRoute roles={["Admin"]}>
                <DashAdmin />
              </ProtectedRoute>
            }
          />
            <Route
                path="/admin/dash-agent"
                element={
                    <ProtectedRoute roles={["Agent"]}>
                        <DashAgent />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/dash-supervisor"
                element={
                    <ProtectedRoute roles={["Supervisor"]}>
                        <DashSupervisor />
                    </ProtectedRoute>
                }
            />
          <Route
            path="/admin/loans"
            element={
              <ProtectedRoute>
                <Loans />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/loans/:id"
            element={
              <ProtectedRoute>
                <LoanDetail />
              </ProtectedRoute>
            }
          />
            <Route
                path="/admin/blog"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/settings"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/analytics"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/concessions"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/concessions:id"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/debtors"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/debtors:id"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/delinquency"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/delinquency:id"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/payments"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/payments:id"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/recover-logs"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/recover-logs:id"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/documents"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/documents:id"
                element={
                    <ProtectedRoute>
                        <Loans />
                    </ProtectedRoute>
                }
            />
        </Routes>
        <Footer />
          {/*<LogoutButton />*/}
      </BrowserRouter>
    </AuthProvider>
  );
}

function Home() {
  return (
    <main>
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          background: 'linear-gradient(135deg,#0B6E4F11,#F59E0B11)'
        }}
      >
        <Container>
          <Stack spacing={3} alignItems="flex-start">
            <Typography variant="h3" fontWeight={800} style={{ marginTop: '-40px' }}>
              CALVAZ PRIME CONCEPTS
            </Typography>

            <Typography variant="body1" color="text.secondary" maxWidth={600}>
              Web, mobile, and brand experiences that drive results.
            </Typography>

            <Link variant="h6" color="primary" href="/contact" aria-label="Contact">
              Start a project →
            </Link>

            <div
              style={{
                marginTop: 24,
                position: 'relative',
                width: '100%',
                height: 320
              }}
            >
              <Box
                component="img"
                src={heroBuildings}
                alt="Hero"
                loading="eager"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 12
                }}
              />
            </div>

            <Typography variant="h3" fontWeight={800}>
              Debt Recovery Consultants
            </Typography>

            <Typography variant="body1" color="text.secondary" maxWidth={600}>
              CALVAZ PRIME CONCEPTS provides reliable, high‑quality services from Lagos, Nigeria.
              9B Rasheed Alatishe Street, Isheri, Magodo, Lagos.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Link color="primary" href="/services" aria-label="Services">
                View services →
              </Link>
              <Link href="/portfolio" aria-label="Portfolio">
                View portfolio →
              </Link>
              <Link href="/blog" aria-label="Blogs">
                Read the blog →
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </main>
  );
}