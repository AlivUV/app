// MUI components
import { Box, FormLabel, OutlinedInput, Stack } from '@mui/material';

// MUI styles
import { styled } from '@mui/system';

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


function AcademicInformation({ applicantState }) {
  const [applicant, setApplicant] = applicantState;

  const handleChange = (event) => {
    setApplicant(actualData => ({
      ...actualData,
      [event.target.id]: event.target.value
    }));
  };

  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            gap: 2,
          }}
        >
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel htmlFor="card-number" required>
              Número de identificación
            </FormLabel>
            <OutlinedInput
              required
              disabled
              id="username"
              placeholder="xxxxxxxxx"
              onChange={handleChange}
              value={applicant.username || ''}
              autoComplete="Número de identificacion"
            />
          </FormGrid>
          <FormGrid sx={{ maxWidth: '20%' }}>
            <FormLabel htmlFor="global">
              Puntaje global
            </FormLabel>
            <OutlinedInput
              required
              id="globalScore"
              placeholder="XXX"
              onChange={handleChange}
              autoComplete="Puntaje global"
              value={applicant.globalScore || ''}
            />
          </FormGrid>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Lectura crítica
            </FormLabel>
            <OutlinedInput
              required
              id="readingScore"
              placeholder="XXX"
              onChange={handleChange}
              autoComplete="Lectura Crítica"
              value={applicant.readingScore || ''}
            />
          </FormGrid>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Matemáticas
            </FormLabel>
            <OutlinedInput
              required
              id="mathScore"
              placeholder="XXX"
              onChange={handleChange}
              autoComplete="Matemáticas"
              value={applicant.mathScore || ''}
            />
          </FormGrid>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Inglés
            </FormLabel>
            <OutlinedInput
              required
              id="englishScore"
              placeholder="XXX"
              autoComplete="Inglés"
              onChange={handleChange}
              value={applicant.englishScore || ''}
            />
          </FormGrid>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Ciencias naturales
            </FormLabel>
            <OutlinedInput
              required
              id="scienceScore"
              placeholder="XXX"
              onChange={handleChange}
              value={applicant.scienceScore || ''}
              autoComplete="Ciencias naturales"
            />
          </FormGrid>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Ciencias sociales
            </FormLabel>
            <OutlinedInput
              required
              id="socialScore"
              placeholder="XXX"
              onChange={handleChange}
              autoComplete="Ciencias sociales"
              value={applicant.socialScore || ''}
            />
          </FormGrid>
        </Box>
      </Box>
    </Stack>
  );
}

export { AcademicInformation };
export default AcademicInformation;