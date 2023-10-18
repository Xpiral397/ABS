'use client'
import {ReactNode} from 'react'
import {Provider} from 'react-redux'
import {Store} from '../store'

const Wrapper = ({children}: {children: ReactNode}) => {
    return <Provider store={Store}>
        {children}
    </Provider>
}

export default Wrapper;