import Head from 'next/head'
import React, { Fragment } from 'react'
import Nav from './navbar/Layout_nav'

export default function Layout_login({ children }) {
    return (
        <Fragment>
            <Head>
                <title>Login</title>
            </Head>
            <Nav />
            <main>
                {children}
            </main>
        </Fragment>
    )
}
