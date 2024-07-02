// React imports
import { useState } from 'react';

// MUI components
import { CssBaseline, Box, Toolbar, Container } from '@mui/material';

// Custom components
import { AppBar, Drawer, ReportsPanel, UsersPanel } from 'components/Dashboard';


function Home() {
    const [open, setOpen] = useState(false);
    const [openTab, setOpenTab] = useState('reports');
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} changeTab={setOpenTab} toggleDrawer={toggleDrawer} />
            <Drawer variant="permanent" open={open} changeTab={setOpenTab} toggleDrawer={toggleDrawer} />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) => theme.palette.grey[100],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {openTab === 'reports' && <ReportsPanel />}
                    {openTab === 'users' && <UsersPanel />}
                </Container>
            </Box>
        </Box>
    );
}

export default Home;
export { Home };