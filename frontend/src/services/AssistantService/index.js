import {
    API_URL
} from 'utils';


const fetcher = (model, body) => {
    return fetch(`${API_URL}/assistant/${model}/`, {
        method: "POST",
        body: body
    })
        .then(response => response.json())
        .then(({ data }) => (JSON.parse(data)))
        .catch((error) => (console.error(error)));
}


export const getIdData = (file, fileType) => {
    const body = JSON.stringify({
        prompt: 'Entregame los datos de esta imagen en un json de la forma ```json{"numeroIdentificacion": "0.000.000.000", "nombres": "Nombres", "apellidos": "Apellidos"}```',
        file: file,
        fileType: fileType
    })
    return fetcher("gemini", body)
}

export const getIcfesData = (file, fileType) => {
    const body = JSON.stringify({
        prompt: 'Entregame los datos de esta imagen en un json de la forma ```json{"numeroIdentificacion": "0000000000", "puntajeGlobal": "000", "lecturaCritica": "00", "matematicas": "00", "socialesYCiudadanas": "00", "cienciasNaturales": "00", "ingles": "00"}```',
        file: file,
        fileType: fileType
    })
    return fetcher("gemini", body)
}