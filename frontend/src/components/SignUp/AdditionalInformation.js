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


function AdditionalInformation({ dataState }) {

  const [data, setData] = dataState;

  const handleChange = (event) => {
    setData(data => ({
      ...data,
      [event.target.id || event.target.name]: event.target.value
    }));
  };


  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="highSchool" required>
          Colegio
        </FormLabel>
        <OutlinedInput
          required
          id="highSchool"
          name="highSchool"
          type="text"
          placeholder="Institución Educativa Ejemplo"
          value={data.highSchool}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address" required>
          Dirección de residencia
        </FormLabel>
        <OutlinedInput
          required
          id="address"
          name="direccion"
          type="address1"
          placeholder="Calle 10 # 10 - 10"
          autoComplete="shipping address-line1"
          value={data.address}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="phone">Número de teléfono</FormLabel>
        <OutlinedInput
          required
          id="phone"
          name="telefono"
          placeholder="3012345678"
          autoComplete="telefono"
          value={data.phone}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="inscriptionType" required>
          Tipo de inscripción
        </FormLabel>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>

            <Select
              labelId="demo-simple-select-label"
              id="inscriptionType"
              name="inscriptionType"
              value={data.inscriptionType}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={'Pregrado Cali'}>Pregrado Cali</MenuItem>
              <MenuItem value={'Pregrado sedes'}>Pregrado sedes</MenuItem>
              <MenuItem value={'Auxiliares salud oral'}>Auxiliares salud oral</MenuItem>
              <MenuItem value={'Internado rotatorio'}>Internado rotatorio</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="program" required>
          Programa académico
        </FormLabel>
        <OutlinedInput
          required
          id="program"
          name="programa"
          type="state"
          placeholder="Ingeniería de sistemas"
          autoComplete="Ingenieria"
          value={data.program}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="email" required>
          Correo electrónico
        </FormLabel>
        <OutlinedInput
          required
          id="email"
          name="correo"
          type="address1"
          placeholder="nombre.apellido@ejemplo.com"
          autoComplete="correo"
          value={data.email}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <OutlinedInput
          required
          id="password"
          name="contraseña"
          type="password"
          placeholder="xxxxxxxx"
          autoComplete="contraseña"
          value={data.password}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="passwordConfirmation" required>
          Confirmar contraseña
        </FormLabel>
        <OutlinedInput
          required
          id="passwordConfirmation"
          name="confirmar"
          type="password"
          placeholder="xxxxxxxx"
          autoComplete="confirmar contraseña"
          value={data.passwordConfirmation}
          onChange={handleChange}
        />
      </FormGrid>
    </Grid>
  );
}

export { AdditionalInformation };
export default AdditionalInformation;