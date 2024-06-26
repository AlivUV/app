import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Avatar, CssBaseline, Box, Button, Grid, Link, Typography, Container } from '@mui/material';

// Components
import { SignForm } from 'components/SignUp/SignForm'

// Services
import { register } from 'services/UserService';


const defaultTheme = createTheme();

function SignUp() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        personalId: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        register(data)
            .then((response) => {
                if (response.status === 201) {
                    navigate('/login');
                }
            })
            .catch((error) => { console.error(error.message) });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
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
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <SignForm dataState={[data, setData]} handleSubmit={handleSubmit} >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Typography component="p" variant="body2">
                                    Already have an account? <Link href="/login" >Sign in</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </SignForm>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;
export { SignUp };