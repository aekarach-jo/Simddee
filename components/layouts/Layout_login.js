import Head from 'next/head'
import React, { Fragment } from 'react'

export default function Layout_login({ children }) {
    return (
        <Fragment>
            <Head>
                <div>
                    <title>Login</title>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                    <link rel="stylesheet" href="/assets/css/global.min.css" />
                    <link rel="stylesheet" href="/assets/css/login.min.css" />
                </div>
            </Head>
            <main>
                {children}
                <script src="/assets/js/login.js"></script>
            </main>
        </Fragment>
    )
}
