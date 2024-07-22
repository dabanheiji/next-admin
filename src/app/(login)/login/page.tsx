"use client"

import LoginForm from './components/LoginForm';

export default function Login() {

    const onSubmit = (values) => {
        console.log('values', values);
    }

    return <>
        <LoginForm onSubmit={onSubmit} />
    </>
}