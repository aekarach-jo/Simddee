import Head from 'next/head'
import React, { Fragment } from 'react'

export default function Layout_register({ children }) {
    return (
        <Fragment>
            <div className="h-full">
                <Head>
                    <title>Register</title>
                </Head>
                <main>
                    {children}
                </main>
            </div>
        </Fragment>
    )
}
