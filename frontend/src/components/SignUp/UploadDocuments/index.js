import { useState } from 'react';

import { Card, CardActionArea, CardContent, FormControl, RadioGroup, Stack, Typography } from '@mui/material';

import { BadgeRounded, SchoolRounded } from '@mui/icons-material';

import { IdPanel } from 'components/SignUp/UploadDocuments/IdPanel';
import { IcfesPanel } from 'components/SignUp/UploadDocuments/IcfesPanel';


function UploadDocuments({ dataState }) {
  const [paginaRegistro, setPaginaRegistro] = useState('id');
  const [idFile, setIdFile] = useState();
  const [icfesFile, setIcfesFile] = useState();

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
                <BadgeRounded color="primary" fontSize="small" />
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
                <SchoolRounded color="primary" fontSize="small" />
                <Typography fontWeight="medium">Resultados Icfes</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </RadioGroup>
      </FormControl>
      {paginaRegistro === 'id' && <IdPanel dataState={dataState} fileState={[idFile, setIdFile]} />}
      {paginaRegistro === 'icfes' && <IcfesPanel dataState={dataState} fileState={[icfesFile, setIcfesFile]} />}
    </Stack>
  );
}

export { UploadDocuments };
export default UploadDocuments;