import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Precisión" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/precision-1468391-1242719.png" />,
    name: 'Precisión',
    testimonial:
      "Tecnología avanzada para una extracción de datos precisa.",
  },
  {
    avatar: <Avatar alt="Velocidad" src="https://cdn-icons-png.flaticon.com/512/11628/11628169.png" />,
    name: 'Velocidad',
    testimonial:
      "Procesamiento rápido para ahorrar tiempo.",
  },
  {
    avatar: <Avatar alt="Interfaz" src="https://cdn-icons-png.flaticon.com/512/546/546473.png" />,
    name: 'Interfaz intuitiva',
    testimonial:
      'Fácil de usar, sin curva de aprendizaje.',
  },
  {
    avatar: <Avatar alt="tiempo" src="/time.png" />,
    name: 'Ahorro de tiempo',
    testimonial:
      "Automatiza la extracción de datos para centrarse en tareas importantes.",
  },
  {
    avatar: <Avatar alt="errores" src="/error.png" />,
    name: 'Reducción de errores',
    testimonial:
      "Minimiza los errores humanos con nuestra precisión de IA.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/compatibilidad.png" />,
    name: 'Compatibilidad',
    testimonial:
      " Soporte para múltiples formatos de documentos.",
  },
];

const whiteLogos = [
  'https://cdn.worldvectorlogo.com/logos/google-bard-1.svg',
  'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  'https://cdn.worldvectorlogo.com/logos/google-bard-1.svg',
  'https://cdn.worldvectorlogo.com/logos/react-2.svg',
];

const darkLogos = [
  'https://cdn.worldvectorlogo.com/logos/google-bard-1.svg',
  'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  'https://cdn.worldvectorlogo.com/logos/google-bard-1.svg',
  'https://cdn.worldvectorlogo.com/logos/react-2.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Características
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Descubre las potentes funcionalidades de DataExtract AI.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}