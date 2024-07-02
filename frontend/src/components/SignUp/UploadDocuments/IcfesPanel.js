import { useEffect } from 'react';

import { Box, FormLabel, OutlinedInput } from '@mui/material';

import { styled } from '@mui/system';

import DropZone from 'components/DropZone';

import { getIcfesData } from 'services/AssistantService';

import $ from 'jquery';


const FormGrid = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));


function IcfesPanel({ dataState, fileState }) {
    const [icfesFile, setIcfesFile] = fileState;
    const [data, setData] = dataState

    useEffect(() => {
        if (!icfesFile) {
            return;
        }

        setData(data => ({
            ...data,
            englishScore: icfesFile.ingles || "",
            mathScore: icfesFile.matematicas || "",
            globalScore: icfesFile.puntajeGlobal || "",
            readingScore: icfesFile.lecturaCritica || "",
            personalId: icfesFile.numeroIdentificacion || "",
            scienceScore: icfesFile.cienciasNaturales || "",
            socialScore: icfesFile.socialesYCiudadanas || ""
        }));

    }, [icfesFile, setData]);

    useEffect(() => {
        if (!data) {
            return;
        }

        $('#ingles')[0].value = data.englishScore || "";
        $('#matematicas')[0].value = data.mathScore || "";
        $('#puntaje')[0].value = data.globalScore || "";
        $('#lectura')[0].value = data.readingScore || "";
        $('#identificacion')[0].value = data.personalId || "";
        $('#naturales')[0].value = data.scienceScore || "";
        $('#sociales')[0].value = data.socialScore || "";
    }, [data])

    return (
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

export { IcfesPanel };
export default IcfesPanel;