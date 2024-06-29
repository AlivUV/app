import {
    API_URL
} from 'utils';


/**
 * A generic fetcher function that sends a POST request to the API with the provided model and body.
 * 
 * @param {string} model The model to use for the API request.
 * @param {string} body The JSON stringified body to send with the request.
 * @returns {Promise} A promise that resolves to the parsed JSON response data.
 */
const fetcher = (model, body) => {
    return fetch(`${API_URL}/assistant/${model}/`, {
        method: "POST",
        body: body
    })
        .then(response => response.json())
        .then(({ data }) => (JSON.parse(data)))
        .catch((error) => (console.error(error)));
}


/**
 * Retrieves ID data from an image file.
 * 
 * @param {File} file The image file to extract data from.
 * @param {string} fileType The type of the file (e.g. 'jpg', 'png', etc.).
 * @returns {Promise} A promise that resolves to the extracted ID data in JSON format.
 * 
 * @example:
 * const file = new File(['image data'], 'image.jpg', 'image/jpeg');
 * const fileType = 'jpg';
 * getIdData(file, fileType).then((data) => console.log(data));
 */
export const getIdData = (file, fileType) => {
    const body = JSON.stringify({
        prompt: 'Entregame los datos de esta imagen en un json de la forma ```json{"numeroIdentificacion": "0.000.000.000", "nombres": "Nombres", "apellidos": "Apellidos"}```',
        file: file,
        fileType: fileType
    })
    return fetcher("gemini", body)
}


/**
 * Retrieves ICFES data from an image file.
 * 
 * @param {File} file The image file to extract data from.
 * @param {string} fileType The type of the file (e.g. 'jpg', 'png', etc.).
 * @returns {Promise} A promise that resolves to the extracted ICFES data in JSON format.
 * 
 * @example:
 * const file = new File(['image data'], 'image.jpg', 'image/jpeg');
 * const fileType = 'jpg';
 * getIcfesData(file, fileType).then((data) => console.log(data));
 */
export const getIcfesData = (file, fileType) => {
    const body = JSON.stringify({
        prompt: 'Entregame los datos de esta imagen en un json de la forma ```json{"numeroIdentificacion": "0000000000", "puntajeGlobal": "000", "lecturaCritica": "00", "matematicas": "00", "socialesYCiudadanas": "00", "cienciasNaturales": "00", "ingles": "00"}```',
        file: file,
        fileType: fileType
    })
    return fetcher("gemini", body)
}