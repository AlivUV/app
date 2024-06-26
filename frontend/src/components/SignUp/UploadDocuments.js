import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import DropZone from 'components/DropZone';

import { styled } from '@mui/system';

import { getIdData, getIcfesData } from 'services/AssistantService';


const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


export default function UploadDocuments() {
  const [idFile, setIdFile] = useState();
  const [icfesFile, setIcfesFile] = useState();
  const [paginaRegistro, setPaginaRegistro] = React.useState('id');

  const handlePaginaRegistro = (event) => {
    setPaginaRegistro(event.target.value);
  };



  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap >
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="identificacion"
          name="identificacion"
          value={paginaRegistro}
          onChange={handlePaginaRegistro}
          sx={{
            flexDirection: { sm: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Card
            raised={paginaRegistro === 'id'}
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
              outlineColor:
                paginaRegistro === 'id' ? 'primary.main' : 'divider',
              backgroundColor:
                paginaRegistro === 'id' ? 'background.default' : '',
            }}
          >
            <CardActionArea onClick={() => setPaginaRegistro('id')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <BadgeRoundedIcon color="primary" fontSize="small" />
                <Typography fontWeight="medium">Documento de identificación</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            raised={paginaRegistro === 'icfes'}
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
              outlineColor:
                paginaRegistro === 'icfes' ? 'primary.main' : 'divider',
              backgroundColor:
                paginaRegistro === 'icfes' ? 'background.default' : '',
            }}
          >
            <CardActionArea onClick={() => setPaginaRegistro('icfes')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolRoundedIcon color="primary" fontSize="small" />
                <Typography fontWeight="medium">Resultados Icfes</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </RadioGroup>
      </FormControl>
      {paginaRegistro === 'id' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >

          <DropZone title="Documento de identificación" propFileState={[idFile, setIdFile]} extractDataFunction={getIdData} />

          <Box
            sx={{
              mt: 5,
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
                id="identificacion"
                autoComplete="Numero de identificacion"
                placeholder="xxxxxxxxx"
                required
                disabled
              />
            </FormGrid>

          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="card-name" required>
                Nombres
              </FormLabel>
              <OutlinedInput
                id="nombre"
                autoComplete="Nombre"
                placeholder="John"
                required
                disabled
              />
            </FormGrid>
            <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="card-expiration" required>
                Apellidos
              </FormLabel>
              <OutlinedInput
                id="apellidos"
                autoComplete="Apellidos"
                placeholder="Smith"
                required
                disabled
              />
            </FormGrid>
          </Box>
        </Box>
      )
      }


      {
        paginaRegistro === 'icfes' && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >

            <DropZone title="Resultados Icfes" propFileState={[icfesFile, setIcfesFile]} extractDataFunction={getIcfesData} />

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
                  id="identificacion"
                  autoComplete="Número de identificacion"
                  placeholder="xxxxxxxxx"
                  required
                  disabled
                />
              </FormGrid>
              <FormGrid sx={{ maxWidth: '20%' }}>
                <FormLabel htmlFor="cvv" required>
                  Puntaje global
                </FormLabel>
                <OutlinedInput
                  id="puntaje"
                  autoComplete="Puntaje global"
                  placeholder="XXX"
                  required
                  disabled
                />
              </FormGrid>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel required>
                  Lectura crítica
                </FormLabel>
                <OutlinedInput
                  id="lectura"
                  autoComplete="Lectura Crítica"
                  placeholder="XXX"
                  required
                  disabled
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel required>
                  Matemáticas
                </FormLabel>
                <OutlinedInput
                  id="matematicas"
                  autoComplete="Matemáticas"
                  placeholder="XXX"
                  required
                  disabled
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel required>
                  Inglés
                </FormLabel>
                <OutlinedInput
                  id="ingles"
                  autoComplete="Inglés"
                  placeholder="XXX"
                  required
                  disabled
                />
              </FormGrid>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel required>
                  Ciencias naturales
                </FormLabel>
                <OutlinedInput
                  id="naturales"
                  autoComplete="Ciencias naturales"
                  placeholder="XXX"
                  required
                  disabled
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel required>
                  Ciencias sociales
                </FormLabel>
                <OutlinedInput
                  id="sociales"
                  autoComplete="Ciencias sociales"
                  placeholder="XXX"
                  required
                  disabled
                />
              </FormGrid>
            </Box>
          </Box>
        )
      }
    </Stack>
  );
}