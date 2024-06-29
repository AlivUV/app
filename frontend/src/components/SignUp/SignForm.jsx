import $ from 'jquery';
import { useEffect, useState } from 'react';

// MUI
import { TextField, Grid, Box, } from '@mui/material';

// Components
import { DropZone } from 'components/DropZone';

// Services
import { getIdData } from 'services/AssistantService';


function SignForm({ dataState, handleSubmit, children }) {
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

        $('#firstName')[0].value = idFile.nombres || "";
        $('#lastName')[0].value = idFile.apellidos || "";
        $('#personalId')[0].value = idFile.numeroIdentificacion || "";

        setData(data => ({
            ...data,
            firstName: idFile.nombres || "",
            lastName: idFile.apellidos || "",
            personalId: idFile.numeroIdentificacion || ""
        }));

    }, [idFile, setData]);

    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DropZone title="Upload id document" fileState={[idFile, setIdFile]} extractDataFunction={getIdData} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=" "
                        id="personalId"
                        name="personalId"
                        label="Personal Id"
                        autoComplete="personalId"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=" "
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        autoComplete="given-name"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        required
                        fullWidth
                        defaultValue=" "
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        autoComplete="family-name"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                        autoComplete="email"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="new-password"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        type="password"
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        label="Password Confirmation"
                        autoComplete="current-password"
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            {children}
        </Box>
    )
}

export { SignForm };
export default SignForm;