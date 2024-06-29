import * as React from 'react';
import $ from 'jquery';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';


import { styled } from '@mui/system';

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


export default function AcademicInformation() {

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
              id="identificacion"
              autoComplete="Número de identificacion"
              placeholder="xxxxxxxxx"
              required
              disabled
            />
          </FormGrid>
          <FormGrid sx={{ maxWidth: '20%' }}>
            <FormLabel htmlFor="global">
              Puntaje global
            </FormLabel>
            <OutlinedInput
              id="puntaje"
              autoComplete="Puntaje global"
              placeholder="XXX"
              required
            />
          </FormGrid>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Lectura crítica
            </FormLabel>
            <OutlinedInput
              id="lectura"
              autoComplete="Lectura Crítica"
              placeholder="XXX"
              required
            />
          </FormGrid>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Matemáticas
            </FormLabel>
            <OutlinedInput
              id="matematicas"
              autoComplete="Matemáticas"
              placeholder="XXX"
              required
            />
          </FormGrid>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Inglés
            </FormLabel>
            <OutlinedInput
              id="ingles"
              autoComplete="Inglés"
              placeholder="XXX"
              required
            />
          </FormGrid>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Ciencias naturales
            </FormLabel>
            <OutlinedInput
              id="naturales"
              autoComplete="Ciencias naturales"
              placeholder="XXX"
              required
            />
          </FormGrid>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel >
              Ciencias sociales
            </FormLabel>
            <OutlinedInput
              id="sociales"
              autoComplete="Ciencias sociales"
              placeholder="XXX"
              required
            />
          </FormGrid>
        </Box>
      </Box>
    </Stack >
  );
}