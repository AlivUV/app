// MUI components
import { Box, FormControl, FormLabel, Grid, MenuItem, OutlinedInput, Select } from '@mui/material';

// MUI styles
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


function PersonalInformation({ applicantState }) {
  const [applicant, setApplicant] = applicantState;

  const handleChange = (event) => {
    setApplicant(actualData => ({
      ...actualData,
      [(event.target.id || event.target.name)]: event.target.value
    }));
  };

  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12}>
        <FormLabel htmlFor='identificacion' required>
          Número de identificación
        </FormLabel>
        <OutlinedInput
          required
          disabled
          id='username'
          name='identificacion'
          placeholder='xxxxxxx'
          value={applicant?.username || ''}
          autoComplete='Numero de identificacion'
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor='first-name' required>
          Nombres
        </FormLabel>
        <OutlinedInput
          required
          type='name'
          name='Nombre'
          id='first_name'
          placeholder='John'
          autoComplete='Nombre'
          value={applicant?.first_name || ''}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor='last-name' required>
          Apellidos
        </FormLabel>
        <OutlinedInput
          required
          id='last_name'
          name='Apellidos'
          type='last-name'
          placeholder='Snow'
          autoComplete='Apellidos'
          value={applicant?.last_name || ''}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor='address1' required>
          Dirección de residencia
        </FormLabel>
        <OutlinedInput
          required
          id='address'
          type='address1'
          name='direccion'
          value={applicant?.address || ''}
          autoComplete='shipping address-line1'
          placeholder='1234 Elm Street, Apt 5B, Springfield, IL 62704'
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor='address2'>Número de teléfono</FormLabel>
        <OutlinedInput
          required
          id='phone'
          name='telefono'
          type='address2'
          autoComplete='telefono'
          placeholder='3012345678'
          value={applicant?.phone || ''}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor='correo' required>
          Correo electrónico
        </FormLabel>
        <OutlinedInput
          required
          id='email'
          name='correo'
          autoComplete='correo'
          value={applicant?.email || ''}
          placeholder='nombre.apellido@ejemplo.com'
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor='city' required>
          Tipo de inscripción
        </FormLabel>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>

            <Select
              label='Age'
              id='registrationType'
              name='registrationType'
              onChange={handleChange}
              value={applicant?.registrationType || ''}
              labelId='demo-simple-select-label'
            >
              <MenuItem id='registrationType' value={'Pregrado Cali'}>Pregrado Cali</MenuItem>
              <MenuItem id='registrationType' value={'Pregrado sedes'}>Pregrado sedes</MenuItem>
              <MenuItem id='registrationType' value={'Auxiliares salud oral'}>Auxiliares salud oral</MenuItem>
              <MenuItem id='registrationType' value={'Internado rotatorio'}>Internado rotatorio</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor='state' >
          Programa académico
        </FormLabel>
        <OutlinedInput
          required
          type='state'
          id='program'
          name='programa'
          autoComplete='Ingenieria'
          value={applicant?.program || ''}
          placeholder='Ingeniería de sistemas'
          onChange={handleChange}
        />
      </FormGrid>
    </Grid>
  );
}

export { PersonalInformation };
export default PersonalInformation;