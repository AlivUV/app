// React imports
import { useEffect, useState } from 'react';

// MUI components
import { CssBaseline, Box, Toolbar, Container, Grid, Paper } from '@mui/material';

// Custom components
import { AppBar } from 'components/Home/AppBar';
import { Drawer } from 'components/Home/Drawer';
import { DropZone } from 'components/Home/DropZone';
import { StudentsList } from 'components/Home/StudentsList';

// Services
import { getIdData, getIcfesData } from 'services/AssistantService'


function Home() {
    const [open, setOpen] = useState(false);
    const [idFile, setIdFile] = useState();
    const [icfesFile, setIcfesFile] = useState();
    const toggleDrawer = () => {
        setOpen(!open);
    };


    useEffect(() => {
        if (!idFile)
            return;

        console.log(idFile);
    }, [idFile])


    useEffect(() => {
        if (!icfesFile)
            return;

        console.log(icfesFile);
    }, [icfesFile])


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} toggleDrawer={toggleDrawer} />
            <Drawer variant="permanent" open={open} toggleDrawer={toggleDrawer} />
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
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={6}>
                            <Paper sx={{ position: 'relative', textAlign: 'center', margin: 'auto', padding: '1em' }} >
                                <DropZone title="Documento de identificación" fileState={[idFile, setIdFile]} extractDataFunction={getIdData} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <DropZone title="Resultados ICFES" fileState={[icfesFile, setIcfesFile]} extractDataFunction={getIcfesData} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <StudentsList />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Home;
export { Home };