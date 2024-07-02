// React imports
import { useState } from 'react';

// MUI components
import { Grid, Paper } from '@mui/material';

// Custom components
import { StudentsTable } from 'components/Dashboard';
import { DropZone } from 'components/DropZone';

// Services
import { getIdData, getIcfesData } from 'services/AssistantService'

function UsersPanel() {
    const [idFile, setIdFile] = useState();
    const [icfesFile, setIcfesFile] = useState();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={6}>
                <Paper sx={{ position: 'relative', textAlign: 'center', margin: 'auto', padding: '1em' }} >
                    <DropZone title="Documento de identificación" propFileState={[idFile, setIdFile]} extractDataFunction={getIdData} />
                </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <DropZone title="Resultados ICFES" propFileState={[icfesFile, setIcfesFile]} extractDataFunction={getIcfesData} />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <StudentsTable />
                </Paper>
            </Grid>
        </Grid>
    )
}

export { UsersPanel }
export default UsersPanel;