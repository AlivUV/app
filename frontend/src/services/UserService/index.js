import {
    API_URL
} from 'utils';


/**
 * Login to the API with a username and password.
 *
 * @param {object} data - An object containing the personal ID and password.
 * @param {string} data.personalId - The personal ID to login with.
 * @param {string} data.password - The password to login with.
 * @returns {Promise} A promise resolving to the API response.
 *
 * @example
 * login({ personalId: '1234567890', password: 'ysecretpassword' })
 */
export const login = (data) => {
    return fetch(`${API_URL}/users/login/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": String(data.personalId),
            "password": String(data.password),
        })
    })
        .then(response => response.json())
        .catch(error => console.error(error.message))
}


/**
 * Register a new user with the API.
 *
 * @param {object} data - An object containing the registration data.
 * @param {string} data.personalId - The personal ID to register with.
 * @param {string} data.firstName - The first name of the user.
 * @param {string} data.lastName - The last name of the user.
 * @param {string} data.email - The email address of the user.
 * @param {string} data.password - The password to register with.
 * @param {string} data.passwordConfirmation - The password confirmation.
 * @returns {Promise} A promise resolving to an object with a status property.
 *
 * @example
 * register({
 *   personalId: '1234567890',
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'johndoe@example.com',
 *   password: 'ysecretpassword',
 *   passwordConfirmation: 'ysecretpassword'
 * })
 */
export const register = (data) => {
    return fetch(`${API_URL}/users/signup/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': String(data.personalId).replaceAll(".", ""),
            'first_name': String(data.firstName),
            'last_name': String(data.lastName),
            'email': String(data.email),
            'password': String(data.password),
            'password_confirmation': String(data.passwordConfirmation)
        })
    })
        .then(response => ({ status: response.status }))
        .catch(error => console.error(error.message))
}


/**
 * Get the full name of a user by their username.
 *
 * @param {string} username - The username to retrieve the full name for.
 * @returns {Promise} A promise resolving to the full name of the user.
 *
 * @example
 * getFullName('johndoe').then(fullName => console.log(fullName))
 */
export const getFullName = async (username) => {
    return await fetch(`${API_URL}/user/get/firstName/${username}`, {
        method: "GET",
    })
        .then(response => response.json())
        .catch(error => console.error(error.message))
}


/**
 * Get a user by their personal ID.
 *
 * @param {string} personalId - The personal ID to retrieve the user for.
 * @returns {Promise} A promise resolving to the user object.
 *
 * @example
 * getUserById('1234567890').then(user => console.log(user))
 */
export const getUserById = async (personalId) => {
    return await fetch(`${API_URL}/user/get/userById/${personalId}`, {
        method: "GET",
    })
        .then(response => response.json())
        .catch(error => console.error(error.message))
}


export const createSession = (credentials) => {
    sessionStorage.setItem('userToken', credentials.access_token)
    sessionStorage.setItem('username', credentials.user.username)
    sessionStorage.setItem('userId', credentials.user.id)
    sessionStorage.setItem('staff', credentials.user.is_staff)
}


export const endSession = () => {
    sessionStorage.clear()
}