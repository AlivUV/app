import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { login } from "services/UserService"

const defaultTheme = createTheme();

function SignIn() {
    const [status, setStatus] = useState(0);
    const [userData, setUserData] = useState({
        personalId: "",
        password: "",
    })

    const signin = async () => {
        setStatus(1);
        login(userData)
            .then(res => res.json())
            .then(credentials => {
                if (credentials.access_token) {
                    sessionStorage.setItem('userToken', credentials.access_token)
                    sessionStorage.setItem('username', credentials.user.username)
                    sessionStorage.setItem('userId', credentials.user.id)
                    sessionStorage.setItem('staff', credentials.user.is_staff)
                    if (credentials.user.is_staff)
                        navigate('/')
                    else
                        navigate('/applicant')
                } else {
                    setStatus(-1)
                }
            })
            .catch(err => { setStatus(-2) })
    }

    let navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        signin()
    };

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="personalId"
                            label="Identification number"
                            name="personalId"
                            onChange={handleInputChange}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleInputChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Typography component="p" variant="body2">
                                    Don't have an account? <Link href="/signup" >Sign Up</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignIn;
export { SignIn };