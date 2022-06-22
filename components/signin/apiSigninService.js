import React from 'react'
import nextConfig from '../../next.config'

export default function apiSigninService() {
    const apiUrl = nextConfig.apiPath


    async function login(formLogin) {
        const onLogin = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formLogin)
        })
        const data = onLogin.json()
        if (data.status) {
            setCookies('access_token', data.data.access_token)
            setCookies('refresh_token', data.data.refresh_token)
            await Swal.fire({
                title: response.description,
                icon: 'success',
                timer: 1000,
                showCancelButton: false,
                showConfirmButton: false
            })
            Router.push('/')
        } else {
            Swal.fire({
                title: response.description,
                icon: 'error',
                timer: 1000,
                showCancelButton: false,
                showConfirmButton: false
            })
        }
    }

}
