import {
    API_URL
} from 'utils';


/**
 * Adds a new applicant to the system.
 *
 * @param {object} data - Applicant data
 * @param {string} data.phone - Applicant's phone number
 * @param {string} data.program - Applicant's program
 * @param {string} data.address - Applicant's address
 * @param {string} data.highSchool - Applicant's high school
 * @param {number} data.mathScore - Applicant's math score
 * @param {number} data.globalScore - Applicant's global score
 * @param {number} data.socialScore - Applicant's social score
 * @param {number} data.englishScore - Applicant's English score
 * @param {number} data.readingScore - Applicant's reading score
 * @param {number} data.scienceScore - Applicant's science score
 * @param {string} data.registrationType - Applicant's registration type
 * @param {string} data.userId - Applicant's user ID
 *
 * @returns {Promise} - Promise resolving to the API response
 *
 * @example
 * const data = {
 *   phone: '3211232112',
 *   program: 'Ingeniería de Sistemas',
 *   address: '123 Main St',
 *   highSchool: 'Lincoln High',
 *   mathScore: 90,
 *   globalScore: 400,
 *   socialScore: 80,
 *   englishScore: 95,
 *   readingScore: 90,
 *   scienceScore: 85,
 *   registrationType: 'Pregrado Cali',
 *   userId: '1001234567'
 * };
 * addApplicant(data).then(response => console.log(response));
 */
export const addApplicant = (data) => {
    return fetch(`${API_URL}/applicants/addApplicant/`, {
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
        .then(response => response.json())
        .catch(error => console.error(error.message))
}


/**
 * Registers a new user for an applicant.
 *
 * @param {object} data - User data
 * @param {string} data.personalId - Applicant's personal ID
 * @param {string} data.firstName - Applicant's first name
 * @param {string} data.lastName - Applicant's last name
 * @param {string} data.email - Applicant's email
 * @param {string} data.password - Applicant's password
 * @param {string} data.passwordConfirmation - Applicant's password confirmation
 * @param {string} data.phone - Applicant's phone number
 * @param {string} data.program - Applicant's program
 * @param {string} data.address - Applicant's address
 * @param {string} data.highSchool - Applicant's high school
 * @param {number} data.mathScore - Applicant's math score
 * @param {number} data.globalScore - Applicant's global score
 * @param {number} data.socialScore - Applicant's social score
 * @param {number} data.englishScore - Applicant's English score
 * @param {number} data.readingScore - Applicant's reading score
 * @param {number} data.scienceScore - Applicant's science score
 * @param {string} data.registrationType - Applicant's registration type
 *
 * @returns {Promise} - Promise resolving to the API response
 *
 * @example
 * const data = {
 *   personalId: '1001234567',
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'johndoe@example.com',
 *   password: 'password123',
 *   passwordConfirmation: 'password123',
 *   phone: '3211232112',
 *   program: 'Ingeniería de Sistemas',
 *   address: '123 Main St',
 *   highSchool: 'Lincoln High',
 *   mathScore: 90,
 *   globalScore: 400,
 *   socialScore: 80,
 *   englishScore: 95,
 *   readingScore: 90,
 *   scienceScore: 85,
 *   registrationType: 'Pregrado Cali'
 * };
 * register(data).then(response => console.log(response));
 */
export const register = (data) => {
    return fetch(`${API_URL}/applicants/createApplicantUser/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: String(data.personalId).replaceAll(".", ""),
            first_name: String(data.firstName),
            last_name: String(data.lastName),
            email: String(data.email),
            password: String(data.password),
            password_confirmation: String(data.passwordConfirmation),
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
            registrationType: String(data.inscriptionType)
        })
    })
        .then(response => response.status)
        .catch(error => console.error(error.message))
}


/**
 * Modifies an applicant with the given data.
 *
 * @param {object} data - User data
 * @param {string} data.personalId - Applicant's personal ID
 * @param {string} data.firstName - Applicant's first name
 * @param {string} data.lastName - Applicant's last name
 * @param {string} data.email - Applicant's email
 * @param {string} data.password - Applicant's password
 * @param {string} data.passwordConfirmation - Applicant's password confirmation
 * @param {string} data.phone - Applicant's phone number
 * @param {string} data.program - Applicant's program
 * @param {string} data.address - Applicant's address
 * @param {string} data.highSchool - Applicant's high school
 * @param {number} data.mathScore - Applicant's math score
 * @param {number} data.globalScore - Applicant's global score
 * @param {number} data.socialScore - Applicant's social score
 * @param {number} data.englishScore - Applicant's English score
 * @param {number} data.readingScore - Applicant's reading score
 * @param {number} data.scienceScore - Applicant's science score
 * @param {string} data.registrationType - Applicant's registration type
 *
 * @returns {Promise} - Promise resolving to the API response
 *
 * @example
 * const data = {
 *   personalId: '1001234567',
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'johndoe@example.com',
 *   password: 'password123',
 *   passwordConfirmation: 'password123',
 *   phone: '3211232112',
 *   program: 'Ingeniería de Sistemas',
 *   address: '123 Main St',
 *   highSchool: 'Lincoln High',
 *   mathScore: 90,
 *   globalScore: 400,
 *   socialScore: 80,
 *   englishScore: 95,
 *   readingScore: 90,
 *   scienceScore: 85,
 *   registrationType: 'Pregrado Cali'
 * };
 * updateApplicant(data).then(response => console.log(response));
 */
export const updateApplicant = async (data) => {
    return await fetch(`${API_URL}/applicants/updateApplicantUser/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            applicant_id: Number(data.applicant_id),
            user_id: Number(data.user_id),
            username: String(data.username),
            first_name: String(data.first_name),
            last_name: String(data.last_name),
            email: String(data.email),
            period: String(data.period),
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
            registrationType: String(data.registrationType)
        })
    })
        .then(response => response.status)
        .catch(error => console.error(error.message))
}


/**
 * Retrieves an applicant by ID.
 *
 * @param {string} applicantId - Applicant ID
 *
 * @returns {Promise} - Promise resolving to the API response
 *
 * @example
 * getApplicant('1234567890').then(response => console.log(response));
 */
export const getApplicant = async (applicantId) => {
    return await fetch(`${API_URL}/applicants/get/applicantById/${applicantId}`, {
        method: "GET",
    })
        .then(response => response.json())
        .catch(error => console.error(error.message))
}


/**
 * Retrieves all the applicants.
 *
 * @returns {Promise} - Promise resolving to the API response
 *
 * @example
 * getAllApplicants().then(response => console.log(response));
 */
export const getAllApplicants = async () => {
    return await fetch(`${API_URL}/applicants/get/allApplicants`, {
        method: "GET",
    })
        .then(response => response.json())
        .catch(error => console.error(error.message))
}