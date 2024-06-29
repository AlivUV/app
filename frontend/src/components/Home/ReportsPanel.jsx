// MUI components
import { Grid, Paper } from '@mui/material';

// Power BI tokens
import { EMBED_URL } from 'utils';

function ReportsPanel() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
                <Paper sx={{ position: 'relative', textAlign: 'center', margin: 'auto', padding: '1em' }} >
                    <iframe title="PowerBI" width="100%" height={window.innerHeight} src={EMBED_URL} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export { ReportsPanel };
export default ReportsPanel;