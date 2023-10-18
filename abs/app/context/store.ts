import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/users/user'

export const Store = configureStore({
    reducer: {
        user: userReducer
    }
})