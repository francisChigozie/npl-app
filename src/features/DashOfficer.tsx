import React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Chip,
  CssBaseline,
  Divider,
  Drawer,
  Fab,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
//import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
// @ts-ignore
import heroBuildings from '/calvaz_logo.jpeg';
import LogoutButton from '../components/LogoutButton';

type DashboardProps = {
  onNavChange?: (key: string) => void;
  onToggleTheme?: () => void;
};

const drawerWidth = 260;

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { key: 'analytics', label: 'Analytics', icon: <InsightsIcon /> },
  // { key: 'loans', label: 'NP Loans', icon: <ShoppingCartIcon /> },
  { key: 'clients', label: 'Clients', icon: <PeopleIcon /> },
  // { key: 'reports', label: 'Reports', icon: <BarChartIcon /> },
  { key: 'profiles', label: 'Profiles', icon: <SettingsIcon /> },
];

const StatCard: React.FC<{
  title: string;
  value: string;
  change: number;
  loading?: boolean;
}> = ({ title, value, change, loading }) => {
  const positive = change >= 0;

    return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        height: '100%',
        border: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Stack spacing={1}>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        {loading ? (
          <>
            <Skeleton width="60%" />
            <Skeleton width="30%" />
          </>
        ) : (
          <>
            <Typography variant="h5" fontWeight={700}>
              {value}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Chip
                size="small"
                color={positive ? 'success' : 'error'}
                  // @ts-ignore
                variant="soft" // v6; falls back to filled in v5
                icon={positive ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                label={`${positive ? '+' : ''}${change}%`}
                sx={{ fontWeight: 600 }}
              />
              <Typography variant="caption" color="text.secondary">
                vs last period
              </Typography>
            </Stack>
          </>
        )}
      </Stack>
    </Paper>
  );
};

const ChartPlaceholder: React.FC<{ title: string; height?: number; loading?: boolean }> = ({
  title,
  height = 280,
  loading,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        height,
        border: (t) => `1px solid ${t.palette.divider}`,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="subtitle1" fontWeight={700}>
          {title}
        </Typography>
        <IconButton size="small" aria-label="More actions">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Stack>
      {loading ? (
        <Box sx={{ flex: 1, pt: 1 }}>
          <Skeleton variant="rounded" height={height - 64} />
        </Box>
      ) : (
        <Box
          role="img"
          aria-label={`${title} chart placeholder`}
          sx={{
            flex: 1,
            borderRadius: 1,
            background: (t) =>
              `linear-gradient(135deg, ${t.palette.action.hover}, ${t.palette.action.selected})`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Fake plot lines */}
          <Box sx={{ position: 'absolute', inset: 0, p: 1 }}>
            <Skeleton variant="text" width="20%" />
            <Skeleton variant="text" width="25%" />
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="text" width="22%" />
            <Skeleton variant="text" width="18%" />
          </Box>
        </Box>
      )}
    </Paper>
  );
};

const ListCard: React.FC<{
  title: string;
  loading?: boolean;
  items: { id: string; title: string; subtitle: string; avatarText?: string }[];
}> = ({ title, items, loading }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        border: (t) => `1px solid ${t.palette.divider}`,
        height: '100%',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="subtitle1" fontWeight={700}>
          {title}
        </Typography>
        <IconButton size="small" aria-label={`More ${title} actions`}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Divider sx={{ mb: 1 }} />
      <List disablePadding>
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <Box key={i} sx={{ py: 1.25 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Skeleton variant="circular" width={36} height={36} />
                  <Box sx={{ flex: 1 }}>
                    <Skeleton width="60%" />
                    <Skeleton width="30%" />
                  </Box>
                </Stack>
              </Box>
            ))
          : items.map((it) => (
              <ListItemButton key={it.id} sx={{ px: 0, borderRadius: 1 }}>
                <ListItemIcon sx={{ minWidth: 44 }}>
                  <Avatar sx={{ width: 36, height: 36, fontWeight: 700 }}>{it.avatarText ?? it.title[0]}</Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={it.title}
                  secondary={it.subtitle}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            ))}
      </List>
    </Paper>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ onNavChange, onToggleTheme }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((p) => !p);
//sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontWeight: 700 }}
  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ px: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <img src={heroBuildings}
               alt="Calvaz Prime Logo"
               width="52" height="52"
          />

          <Typography variant="h6" fontWeight={800} style={{ objectFit: 'contain', color: 'darkgreen' }}>
            Calvaz Prime
          </Typography>
        </Stack>
      </Toolbar>
      <Divider />
      <Box sx={{ px: 1, py: 1, overflowY: 'auto' }}>
        <List>
          {navItems.map((n) => (
            <ListItemButton
              key={n.key}
              onClick={() => {
                onNavChange?.(n.key);
                if (!isMdUp) setMobileOpen(false);
              }}
              sx={{
                borderRadius: 1,
                '&.Mui-selected, &:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
              selected={n.key === 'dashboard'}
            >
              <ListItemIcon sx={{ color: 'text.secondary' }}>{n.icon}</ListItemIcon>
              <ListItemText primary={n.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Box sx={{ mt: 'auto', p: 2 }}>
        <Paper
          variant="outlined"
          sx={{ p: 1.5, borderRadius: 2, backgroundColor: 'background.default' }}
        >
          <Typography variant="subtitle2" fontWeight={700}>
            Need help?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Visit the docs or contact support.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh', bgcolor: 'background.default' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          backgroundColor: 'background.paper',
          ...(isMdUp && {
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }),
        }}
      >
        <Toolbar sx={{ gap: 1 }}>
          {!isMdUp && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              aria-label="Open navigation"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 800, display: { xs: 'none', sm: 'block' } }}
          >
            Officer Dashboard
          </Typography>
          <Box sx={{ flex: 1 }} />
          <TextField
            size="small"
            placeholder="Search"
            sx={{
              minWidth: { xs: 140, sm: 240, md: 320 },
              '& .MuiInputBase-root': { borderRadius: 999 },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <IconButton color="inherit" aria-label="Notifications">
            <Badge color="error" variant="dot" overlap="circular">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            sx={{ ml: 0.5 }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Avatar sx={{ width: 32, height: 32, ml: 0.5 }}>U</Avatar>
            <LogoutButton />
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} aria-label="Navigation">
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              borderRight: (t) => `1px solid ${t.palette.divider}`,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flex: 1,
          width: '100%',
          p: { xs: 2, sm: 3 },
          mt: { xs: 7, sm: 8 }, // offset AppBar height
        }}
      >
        {/* KPI cards */}
        <Grid container spacing={2}>
          <Grid >
            <StatCard title="Revenue" value="$84,120" change={12.4} loading={loading} />
          </Grid>
          <Grid >
            <StatCard title="Orders" value="1,245" change={-3.1} loading={loading} />
          </Grid>
          <Grid >
            <StatCard title="Avg. Order" value="$67.56" change={5.9} loading={loading} />
          </Grid>
          <Grid >
            <StatCard title="New Customers" value="312" change={8.2} loading={loading} />
          </Grid>

          {/* Charts */}
          <Grid >
            <ChartPlaceholder title="Revenue (Last 12 months)" loading={loading} />
          </Grid>
          <Grid >
            <ChartPlaceholder title="Conversion Funnel" height={280} loading={loading} />
          </Grid>

          {/* Lists */}
          <Grid >
            <ListCard
              title="Top Concessions"
              loading={loading}
              items={[
                { id: '1', title: 'Julius Berger', subtitle: '1,240 sold', avatarText: 'WH' },
                { id: '2', title: 'Coca Cola', subtitle: '980 sold', avatarText: 'SW' },
                { id: '3', title: 'LASU', subtitle: '612 sold', avatarText: '4K' },
                { id: '4', title: 'Young Shall Grow Transport', subtitle: '588 sold', avatarText: 'MK' },
                { id: '5', title: 'USB-C Hub', subtitle: '541 sold', avatarText: 'UH' },
              ]}
            />
          </Grid>
          <Grid >
            <ListCard
              title="Recent Clients"
              loading={loading}
              items={[
                { id: '1', title: 'Jamie Fox', subtitle: 'Joined 2h ago', avatarText: 'JF' },
                { id: '2', title: 'Priya Kumar', subtitle: 'Joined yesterday', avatarText: 'PK' },
                { id: '3', title: 'Lucas Wang', subtitle: 'Joined 2 days ago', avatarText: 'LW' },
                { id: '4', title: 'Olivia Smith', subtitle: 'Joined 3 days ago', avatarText: 'OS' },
                { id: '5', title: 'Marta Ruiz', subtitle: 'Joined last week', avatarText: 'MR' },
              ]}
            />
          </Grid>
        </Grid>

        {/* Mobile FAB */}
        <Fab
          color="primary"
          aria-label="Quick add"
          sx={{
            position: 'fixed',
            right: 16,
            bottom: 16,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default Dashboard;