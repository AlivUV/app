import {
    API_URL
} from 'utils';

export const register = (data) => {
    return fetch(`${API_URL}/applicants/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            period: '2024-2',
            phone: String(data.phone),
            program: String(data.program),
            address: String(data.address),
            highSchool: String(data.highSchool),
            mathScore: Number(data.mathScore),
            globalScore: Number(data.globalScore),
            socialScore: Number(data.socialScore),
            englishScore: Number(data.englishScore),
            readingScore: Number(data.readingScore),
            scienceScore: Number(data.scienceScore),
            registrationType: String(data.inscriptionType),
            user_id: String(data.userId).replaceAll(".", "")
        })
    })
}

export const getApplicant = async (applicantId) => {
    return await fetch(`${API_URL}/applicants/get/applicantById/${applicantId}`, {
        method: "GET",
    }).then(response => response.json())
}