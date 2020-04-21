import React, { useState, createContext } from 'react'


export const LoginContext = createContext()


export const LoginProvider = props => {
    const [isLoginOpen, setLoginOpen] = useState(false)
    const [formType, setFormType] = useState('sign-up')
    return (
        <LoginContext.Provider
            value={{ isLoginOpen, setLoginOpen, formType, setFormType }}>
            {props.children}
        </LoginContext.Provider>
    )
}