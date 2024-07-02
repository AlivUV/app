import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  'https://cdn.worldvectorlogo.com/logos/google-1-1.svg',
  'https://cdn.worldvectorlogo.com/logos/google-bard-1.svg',

];

const darkLogos = [
  'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  'https://cdn.worldvectorlogo.com/logos/google-1-1.svg',
  'https://cdn.worldvectorlogo.com/logos/google-bard-1.svg',
];

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 1.5,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Desarrollado con las mejores tecnologías
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 4, opacity: 0.8 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}