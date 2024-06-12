import $ from 'jquery';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';

// Components
import { DropZone } from 'components/Home/DropZone';

// Services
import { register } from 'services/UserService';


const defaultTheme = createTheme();

function SignUp() {
    const navigate = useNavigate();
    const [idFile, setIdFile] = useState();
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
                console.log(response);
                if (response.status === 201) {
                    navigate('/login');
                }
            })
            .catch((error) => { console.error(error) });
    };

    const handleInputChange = (event) => {
        setData(data => ({
            ...data,
            [event.target.id]: event.target.value
        }));
    };

    useEffect(() => {
        if (!idFile) {
            return;
        }

        $('#firstName')[0].value = idFile.nombres || "";
        $('#lastName')[0].value = idFile.apellidos || "";
        $('#personalId')[0].value = idFile.numeroIdentificacion || "";

        setData(data => ({
            ...data,
            firstName: idFile.nombres || "",
            lastName: idFile.apellidos || "",
            personalId: idFile.numeroIdentificacion || ""
        }));

    }, [idFile]);

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
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <DropZone title="Upload id document" fileState={[idFile, setIdFile]} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    disabled
                                    required
                                    fullWidth
                                    defaultValue=" "
                                    id="personalId"
                                    name="personalId"
                                    label="Personal Id"
                                    autoComplete="personalId"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    disabled
                                    required
                                    fullWidth
                                    defaultValue=" "
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    autoComplete="given-name"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    disabled
                                    required
                                    fullWidth
                                    defaultValue=" "
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    autoComplete="family-name"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="new-password"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    margin="normal"
                                    type="password"
                                    id="passwordConfirmation"
                                    name="passwordConfirmation"
                                    label="Password Confirmation"
                                    autoComplete="current-password"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
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
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;
export { SignUp };