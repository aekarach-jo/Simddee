import Head from 'next/head'
import React, { Fragment } from 'react'

export default function Layout_login({ children }) {
    return (
        <Fragment>
            <div >
                <Head>
                    <title>Login</title>
                </Head>
                <main>
                    {children}
                </main>
            </div>
        </Fragment>
    )
}
