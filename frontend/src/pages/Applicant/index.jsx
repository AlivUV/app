import { useState } from 'react';

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Avatar, Box, Button, Container, CssBaseline, Typography } from '@mui/material';

// Components
import { RegisterForm } from 'components/ApplicantRegister/RegisterForm';

// Services
import { register } from 'services/ApplicantService';


const defaultTheme = createTheme();


function Applicant(props) {
    const personalId = sessionStorage.getItem('username');
    const [data, setData] = useState({
        phone: '',
        address: '',
        program: '',
        mathScore: '',
        highSchool: '',
        personalId: '',
        globalScore: '',
        socialScore: '',
        englishScore: '',
        readingScore: '',
        scienceScore: '',
        inscriptionType: '',
        userId: sessionStorage.getItem('userId')
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);

        if (data.personalId !== personalId) {
            console.log("El número de identificación no coincide con el usuario actual.");
            return;
        }

        register(data)
            .then((response) => {
                if (response.status === 201) {
                    console.log('Nice');
                }
            })
            .catch((error) => { console.error(error.message) });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component='main' maxWidth='xs' style={{ paddingBottom: '5rem' }} >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Applicant register
                    </Typography>
                    <RegisterForm dataState={[data, setData]} handleSubmit={handleSubmit}>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send Data
                        </Button>
                    </RegisterForm>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Applicant;
export { Applicant };