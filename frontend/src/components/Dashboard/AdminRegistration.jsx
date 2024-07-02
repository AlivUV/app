// React imports
import { useState } from 'react';

// MUI components
import { Box, Button, CssBaseline, Grid, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom components
import { AdditionalInformation, GetSignUpTheme, ToggleColorMode, UploadDocuments } from 'components/SignUp';

// Services
import { register } from 'services/ApplicantService';


const steps = ['Sube tus documentos', 'Información adicional'];


function AdminRegistration() {
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

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
          alignItems: 'center',
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
              id="desktop-stepper"
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
                    ':first-of-type': { pl: 0 },
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
            id="mobile-stepper"
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
                  ':first-of-type': { pl: 0 },
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
            <Stack spacing={2} useFlexGap>
              <Typography variant="h1">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 120 120">
                  <circle cx="60" cy="64" r="48" opacity=".35"></circle><circle cx="60" cy="60" r="48" fill="#44bf00"></circle><polygon points="53.303,89 26.139,61.838 33.582,54.395 53.303,74.116 86.418,41 93.861,48.443" opacity=".35"></polygon><polygon fill="#fff" points="53.303,84 26.139,56.838 33.582,49.395 53.303,69.116 86.418,36 93.861,43.443"></polygon>
                </svg></Typography>
              <Typography variant="h5">¡Registro exitoso!</Typography>
              <Button
                variant="contained"
                onClick={handleReset}
                sx={{
                  mb: 10,
                  alignSelf: 'start',
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                Registrar nuevo usuario
              </Button>
            </Stack>
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
                    variant="text"
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                    }}
                  >
                    Anterior
                  </Button>
                )}

                {activeStep !== 0 && (
                  <Button
                    startIcon={<ChevronLeftRounded />}
                    onClick={handleBack}
                    variant="outlined"
                    fullWidth
                    sx={{
                      display: { xs: 'flex', sm: 'none' },
                    }}
                  >
                    Anterior
                  </Button>
                )}

                <Button
                  variant="contained"
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
    </ThemeProvider>
  );
}

export { AdminRegistration };
export default AdminRegistration;