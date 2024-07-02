import { useState } from 'react';

// MUI Components
import { Box, Button, CssBaseline, Grid, Step, StepLabel, Stepper } from '@mui/material';

import { ArrowBackRounded, ArrowBackOutlined, ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom Components
import { AdditionalInformation, GetSignUpTheme, SuccessfulSignUp, ToggleColorMode, UploadDocuments } from 'components/SignUp';

// Services
import { register } from 'services/ApplicantService';


const steps = ['Sube tus documentos', 'Información adicional'];


function SignUp() {
  const [mode, setMode] = useState('light');
  const [showCustomTheme,] = useState(true);
  const checkoutTheme = createTheme(GetSignUpTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({
    personalId: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
    address: '',
    program: 'Ingeniería de Sistemas',
    mathScore: '',
    highSchool: '',
    globalScore: '',
    socialScore: '',
    englishScore: '',
    readingScore: '',
    scienceScore: '',
    inscriptionType: ''
  });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleBack = () => {
    setActiveStep(step => step - 1);
  };

  const handleNext = () => {
    setActiveStep(step => step + 1);
  };

  const handleSubmit = () => {
    register(userData)
      .then((status) => {
        if (status === 201) {
          handleNext();
        }
      })
      .catch((error) => { console.error(error.message) });
  }

  return (
    <ThemeProvider theme={showCustomTheme ? checkoutTheme : defaultTheme}>
      <CssBaseline />
      <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
        <Grid
          item
          xs={12}
          sm={5}
          lg={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: 4,
            px: 10,
            gap: 4,
            backgroundImage: 'url(https://images.unsplash.com/photo-1507537417841-81e85feb9bd2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
              variant='text'
              component='a'
              href='/'
              sx={{
                display: { xs: 'none', sm: 'flex' },
                ml: '-40px',
                color: 'white',
              }}

            >
              Regresar al inicio

            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: 500,
            }}
          >

          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          lg={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'center',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
            }}
          >
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Button
                startIcon={<ArrowBackRounded />}
                component='a'
                href='/'
                sx={{ alignSelf: 'start' }}
              >
                Regresar al inicio

              </Button>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexGrow: 1,
                height: 150,
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Stepper
                id='desktop-stepper'
                activeStep={activeStep}
                sx={{
                  width: '100%',
                  height: 40,
                  '& .MuiStepIcon-root.Mui-active': { color: '#7FADE8' },
                  '& .MuiStepIcon-root.Mui-completed': { color: '#7FADE8' },
                }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{
                      ':first-child': { pl: 0 },
                      ':last-child': { pr: 0 },
                    }}
                    key={label}
                  >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
              maxHeight: '720px',
              gap: { xs: 5, md: 'none' },
            }}
          >
            <Stepper
              id='mobile-stepper'
              activeStep={activeStep}
              alternativeLabel
              sx={{
                display: { sm: 'flex', md: 'none' },
                '& .MuiStepIcon-root.Mui-active': { color: 'blue' },
                '& .MuiStepIcon-root.Mui-completed': { color: 'blue' },
              }}
            >
              {steps.map((label) => (
                <Step
                  sx={{
                    ':first-child': { pl: 0 },
                    ':last-child': { pr: 0 },
                    '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                  }}
                  key={label}
                >
                  <StepLabel
                    sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <SuccessfulSignUp />
            ) : (
                <>
                  {(activeStep === 0) ? <UploadDocuments dataState={[userData, setUserData]} /> : <></>}
                  {(activeStep === 1) ? <AdditionalInformation dataState={[userData, setUserData]} /> : <></>}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column-reverse', sm: 'row' },
                      justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
                      alignItems: 'end',
                      flexGrow: 1,
                      gap: 1,
                      pb: { xs: 12, sm: 0 },
                      mt: { xs: 2, sm: 0 },
                      mb: '60px',
                    }}
                  >
                    {activeStep !== 0 && (
                      <Button
                        startIcon={<ChevronLeftRounded />}
                        onClick={handleBack}
                        variant='text'
                        sx={{
                          display: { xs: 'none', sm: 'flex' },
                        }}
                      >
                        Anterior
                      </Button>
                    )}

                    <Button
                      variant='contained'
                      endIcon={<ChevronRightRounded />}
                      onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                      sx={{
                        width: { xs: '100%', sm: 'fit-content' },
                      }}
                    >
                      {activeStep === steps.length - 1 ? 'Registrarse' : 'Siguiente'}
                    </Button>
                  </Box>
                </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export { SignUp };
export default SignUp;