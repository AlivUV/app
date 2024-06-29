// React imports
import { useState } from 'react';

// MUI components
import { CssBaseline, Box, Toolbar, Container, Grid, Paper } from '@mui/material';

// Custom components
import { AppBar } from 'components/Dashboard/AppBar';
import { Drawer } from 'components/Dashboard/Drawer';
import AdminRegistration from 'components/AdminRegistration';
import StudentsTable from './Students';


function Dashboard() {
    const [open, setOpen] = useState(false);
    const [idFile, setIdFile] = useState();
    const [icfesFile, setIcfesFile] = useState();
    const [currentContent, setCurrentContent] = useState('AdminRegistration');
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const renderContent = () => {
        switch (currentContent) {
            case 'StudentsList':
                return <StudentsTable />;
            case 'AdminRegistration':
            default:
                return <AdminRegistration />;
        }
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} toggleDrawer={toggleDrawer} />
            <Drawer variant="permanent" open={open} toggleDrawer={toggleDrawer} setCurrentContent={setCurrentContent} />
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
                    {renderContent()}
                </Container>
            </Box>
        </Box>
    );
}

export default Dashboard;
export { Dashboard };