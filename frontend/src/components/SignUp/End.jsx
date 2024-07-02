import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


function End() {

  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          Correo electrónico
        </FormLabel>
        <OutlinedInput
          id="correo"
          name="correo"
          type="address1"
          placeholder="nombre.apellido@ejemplo.com"
          autoComplete="correo"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address2">Contraseña</FormLabel>
        <OutlinedInput
          id="contraseña"
          name="contraseña"
          type="password"
          placeholder="xxxxxxxx"
          autoComplete="contraseña"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="state" required>
          Confirmar contraseña
        </FormLabel>
        <OutlinedInput
          id="confirmar_contraseña"
          name="confirmar"
          type="password"
          placeholder="xxxxxxxx"
          autoComplete="confirmar contraseña"
          required
        />
      </FormGrid>
    </Grid>
  );
}

export { End };
export default End;