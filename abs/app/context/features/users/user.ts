import {createSlice} from '@reduxjs/toolkit'

const initialUserStateValue: UserSliceProps = {
    value: {
        name: '',
        email: '',
        age: 0
    }
}
export interface UserSliceProps {
    value: {
        name: String
        email: string
        age: number
    }
}


const userSlice = createSlice({
    name: 'user',
    initialState:
        initialUserStateValue,
    reducers: {
        login: (state, actions) => {
            state.value = actions.payload
        },
        logout: (state, action) => {

        }
    }
})

export const {login} = userSlice.actions
export default userSlice.reducer