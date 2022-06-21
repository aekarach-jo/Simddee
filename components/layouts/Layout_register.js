import Head from 'next/head'
import React, { Fragment } from 'react'
import Nav from './navbar/Layout_nav'

export default function Layout_register({ children }) {
    return (
        <Fragment>
            <div >
                <Head>
                    <title>Register</title>
                </Head>
                <Nav />
                <main>
                    {children}
                </main>
            </div>
        </Fragment>
    )
}
