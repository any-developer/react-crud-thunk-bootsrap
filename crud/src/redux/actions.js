import { CREATE_USER, READ_USERS, UPDATE_USER, DELETE_USER, FILTER_USERS, SEARCH_USER } from './types'


export function createUser(user) {
    return async dispatch => {
        const response = await JSON.parse(localStorage.getItem('users'))
        response.push(user)
        localStorage.setItem('users', JSON.stringify(response))
        dispatch({ type: CREATE_USER, payload: user })
    }
}
export function readUsers() {
    return async dispatch => {
        if (localStorage.getItem('users')) {
            const response = await JSON.parse(localStorage.getItem('users'))
            dispatch({ type: READ_USERS, payload: response })
        } else {
            localStorage.setItem('users', JSON.stringify([]))
        }
    }
}
export function updateUser(id, user) {
    return async dispatch => {
        const response = await JSON.parse(localStorage.getItem('users'))
        console.log(id)
        console.log(response)
        dispatch({ type: UPDATE_USER, payload: response.map(item => item.creationDate === id ? user : item) })
        localStorage.setItem('users', JSON.stringify(response.map(item => item.creationDate === id ? user : item)))
    }
}
export function deleteUser(id) {
    return async dispatch => {
        const response = await JSON.parse(localStorage.getItem('users'))
        dispatch({ type: DELETE_USER, payload: response.filter(item => item.creationDate !== id) })
        let index = response.indexOf(id)
        response.splice(index, 1)
        localStorage.setItem('users', JSON.stringify(response))
    }
}
export function filterUsers(value) {
    return async dispatch => {
        const response = await JSON.parse(localStorage.getItem('users'))
        dispatch({
            type: FILTER_USERS, payload: value.role === 'all' ? response : response.filter(item => item.role === value.role)
        })
    }
}
export function searchUser(value) {
    return async dispath => {
        const response = await JSON.parse(localStorage.getItem('users'))
        dispath({
            type: SEARCH_USER, payload: value.search === '' ? response : response.filter(item => item.phone === value.search || item.email === value.search)
        })
    }
}

