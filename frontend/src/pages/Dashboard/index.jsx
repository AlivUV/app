// React imports
import { useState } from 'react';

// MUI components
import { CssBaseline, Box, Toolbar, Container } from '@mui/material';

// Custom components
import { AdminRegistration, AppBar, Drawer, ReportsPanel, StudentsTable } from 'components/Dashboard';


function Dashboard() {
    const [open, setOpen] = useState(false);
    const [currentContent, setCurrentContent] = useState('reports');
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} toggleDrawer={toggleDrawer} />
            <Drawer variant="permanent" open={open} toggleDrawer={toggleDrawer} changeTab={setCurrentContent} />
            <Box
                component="main"
                sx={{
                    backgroundColor: 'white',
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {(currentContent === 'studentsList') ? <StudentsTable /> : <></>}
                    {(currentContent === 'adminRegistration') ? <AdminRegistration /> : <></>}
                    {(currentContent === 'reports') ? <ReportsPanel /> : <></>}
                </Container>
            </Box>
        </Box>
    );
}

export default Dashboard;
export { Dashboard };