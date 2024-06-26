import $ from 'jquery';
import { useEffect, useState } from 'react';

// MUI
import { TextField, Grid, Box } from '@mui/material';

// Components
import { DropZone } from 'components/DropZone';

// Services
import { getIcfesData } from 'services/AssistantService';


function RegisterForm({ dataState, handleSubmit, children }) {
    const [idFile, setIdFile] = useState();
    const [, setData] = dataState;

    const handleInputChange = (event) => {
        setData(data => ({
            ...data,
            [event.target.id]: event.target.value
        }));
    };

    useEffect(() => {
        if (!idFile) {
            return;
        }

        $('#englishScore')[0].value = idFile.ingles || "";
        $('#mathScore')[0].value = idFile.matematicas || "";
        $('#globalScore')[0].value = idFile.puntajeGlobal || "";
        $('#readingScore')[0].value = idFile.lecturaCritica || "";
        $('#personalId')[0].value = idFile.numeroIdentificacion || "";
        $('#scienceScore')[0].value = idFile.cienciasNaturales || "";
        $('#socialScore')[0].value = idFile.socialesYCiudadanas || "";

        setData(data => ({
            ...data,
            englishScore: idFile.ingles || "",
            mathScore: idFile.matematicas || "",
            globalScore: idFile.puntajeGlobal || "",
            readingScore: idFile.lecturaCritica || "",
            personalId: idFile.numeroIdentificacion || "",
            scienceScore: idFile.cienciasNaturales || "",
            socialScore: idFile.socialesYCiudadanas || ""
        }));

    }, [idFile, setData]);

    return (
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DropZone title='Upload id document' fileState={[idFile, setIdFile]} extractDataFunction={getIcfesData} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=' '
                        id='personalId'
                        name='personalId'
                        label='Personal Id'
                        autoComplete='personalId'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=' '
                        id='globalScore'
                        name='globalScore'
                        label='Puntaje Global'
                        autoComplete='given-name'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=' '
                        id='readingScore'
                        name='readingScore'
                        label='Lectura Critica'
                        autoComplete='given-name'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=' '
                        id='mathScore'
                        name='mathScore'
                        label='Matematicas'
                        autoComplete='given-name'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=' '
                        id='socialScore'
                        name='socialScore'
                        label='Sociales y Ciudadanas'
                        autoComplete='given-name'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=' '
                        id='scienceScore'
                        name='scienceScore'
                        label='Ciencias Naturales'
                        autoComplete='given-name'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=' '
                        id='englishScore'
                        name='englishScore'
                        label='Ingles'
                        autoComplete='given-name'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id='inscriptionType'
                        name='inscriptionType'
                        label='Inscription Type'
                        autoComplete='inscriptionType'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id='program'
                        name='program'
                        label='Program'
                        autoComplete='given-name'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id='address'
                        name='address'
                        label='Address'
                        autoComplete='family-name'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id='phone'
                        name='phone'
                        label='Phone Number'
                        autoComplete='phone'
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id='highSchool'
                        name='highSchool'
                        label='High School'
                        type='highSchool'
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            {children}
        </Box>
    )
}

export default RegisterForm;
export { RegisterForm };