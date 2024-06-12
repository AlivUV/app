import {
    API_URL
} from 'utils';


const fetcher = async (model, body) => {
    return await fetch(`${API_URL}/assistant/${model}/`, {
        method: "POST",
        body: body
    })
        .then(response => response.json())
        .then(({ data }) => (JSON.parse(data)))
        .catch((error) => (console.error(error)));
}


export const gemini = async (image) => {
    const body = JSON.stringify({
        image: image
    })
    return await fetcher("gemini", body)
}