import {CREATE_USER, READ_USERS, UPDATE_USER, DELETE_USER, FILTER_USERS, SEARCH_USER} from './types'


const initialState = {
    users: []
}

export const usersReducer = (state=initialState, action) => {
    switch (action.type){
        case CREATE_USER:
            return {
            ...state, users: [...state.users, action.payload]
        }
        case READ_USERS:
            return {
               ...state, users: action.payload
            }
        case UPDATE_USER:
            return {
               ...state, users: action.payload
            }
        case DELETE_USER:
            return {
               ...state, users: action.payload
            }
        case FILTER_USERS:
            return {
                ...state, users: action.payload
            }
        case SEARCH_USER:
            return {
                ...state, users: action.payload
            }
        default: return state
    }    
}