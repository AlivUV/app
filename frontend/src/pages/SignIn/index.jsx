import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Avatar, Box, Button, CssBaseline, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LockOutlined, ArrowBackOutlined } from '@mui/icons-material';

import GetSignUpTheme from 'components/SignUp/GetSignUpTheme';

import { login, createSession } from "services/UserService"


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        DataExtract AI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const checkoutTheme = createTheme(GetSignUpTheme('light'));;


function SignIn() {
  const [, setStatus] = useState(0);

  let navigate = useNavigate();

  const signin = async (userData) => {
    setStatus(1);
    login(userData)
      .then(credentials => {
        if (credentials.access_token) {
          createSession(credentials);
          if (credentials.user.is_staff)
            navigate('/home');
          else
            navigate('/applicant');
        } else
          setStatus(-1);
      })
      .catch(err => { setStatus(-2) })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);

    data = {
      personalId: data.get('personalId'),
      password: data.get('password')
    }

    signin(data)
  };

  return (
    <ThemeProvider theme={checkoutTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignItems: 'start',
            pt: 4,
            px: 10,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'end',
              height: 150,
            }}
          >
            <Button
              style={{
                backgroundColor: 'rgba(0, 125, 255, .7)'
              }}
              startIcon={<ArrowBackOutlined />}
              color='primary'
              variant="text"
              component="a"
              href="/"
              sx={{
                ml: '-40px',
                color: 'white',
              }}

            >
              Regresar al inicio

            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#7FADE8' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar sesión
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="personalId"
                name="personalId"
                label="Número de identificación"
                autoComplete="identificacion"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                label="Contraseña"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar sesión
              </Button>
              <Grid container>

                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"¿Quieres aplicar como estudiante? Registrate con nosotros"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export { SignIn };
export default SignIn;