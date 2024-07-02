import { useEffect } from 'react';

import { Box, FormLabel, OutlinedInput } from '@mui/material';

import { styled } from '@mui/system';

import DropZone from 'components/DropZone';

import { getIdData } from 'services/AssistantService';

import $ from 'jquery';



const FormGrid = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));


function IdPanel({ dataState, fileState }) {
    const [idFile, setIdFile] = fileState;
    const [data, setData] = dataState

    useEffect(() => {
        if (!idFile) {
            return;
        }

        setData(data => ({
            ...data,
            firstName: idFile.nombres || "",
            lastName: idFile.apellidos || "",
            personalId: idFile.numeroIdentificacion || ""
        }));

    }, [idFile, setData]);

    useEffect(() => {
        if (!data) {
            return;
        }

        $('#nombre')[0].value = data.firstName || "";
        $('#apellidos')[0].value = data.lastName || "";
        $('#identificacion')[0].value = data.personalId || "";
    }, [data])

    return (
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
                        placeholder="xxxx"
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
                        placeholder="xxxxx"
                        required
                        disabled
                    />
                </FormGrid>
            </Box>
        </Box>
    )
}

export { IdPanel };
export default IdPanel;