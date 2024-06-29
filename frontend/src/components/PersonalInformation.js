import * as React from 'react';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


export default function PersonalInformation() {

  const [inscription, setInscription] = React.useState('');

  const handleChange = (event) => {
    setInscription(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="identificacion" required>
          Número de identificación
        </FormLabel>
        <OutlinedInput
          id="identificacion"
          name="identificacion"
          placeholder="xxxxxxx"
          autoComplete="Numero de identificacion"
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          Nombres
        </FormLabel>
        <OutlinedInput
          id="nombre"
          name="Nombre"
          type="name"
          placeholder="John"
          autoComplete="Nombre"
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>
          Apellidos
        </FormLabel>
        <OutlinedInput
          id="apellidos"
          name="Apellidos"
          type="last-name"
          placeholder="Snow"
          autoComplete="Apellidos"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          Dirección de residencia
        </FormLabel>
        <OutlinedInput
          id="direccion"
          name="direccion"
          type="address1"
          placeholder="1234 Elm Street, Apt 5B, Springfield, IL 62704"
          autoComplete="shipping address-line1"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address2">Número de teléfono</FormLabel>
        <OutlinedInput
          id="telefono"
          name="telefono"
          type="address2"
          placeholder="(123) 456-7890"
          autoComplete="telefono"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="correo" required>
          Correo electrónico
        </FormLabel>
        <OutlinedInput
          id="correo"
          name="correo"
          placeholder="nombre.apellido@ejemplo.com"
          autoComplete="correo"
          required
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="city" required>
          Tipo de inscripción
        </FormLabel>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={inscription}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Pregrado Cali</MenuItem>
              <MenuItem value={20}>Pregrado sedes</MenuItem>
              <MenuItem value={30}>Auxiliares salud oral</MenuItem>
              <MenuItem value={40}>Internado rotatorio</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="state" >
          Programa académico
        </FormLabel>
        <OutlinedInput
          id="programa"
          name="programa"
          type="state"
          placeholder="Ingeniería de sistemas"
          autoComplete="Ingenieria"
          required
        />
      </FormGrid>
    </Grid>
  );
}