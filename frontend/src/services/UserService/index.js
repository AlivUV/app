import {
    API_URL
} from 'utils';

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
}

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

export const getFullName = async (username) => {
    return await fetch(`${API_URL}/user/get/firstName/${username}`, {
        method: "GET",
    }).then(response => response.json())
}

export const getUserById = async (personalId) => {
    return await fetch(`${API_URL}/user/get/userById/${personalId}`, {
        method: "GET",
    }).then(response => response.json())
}