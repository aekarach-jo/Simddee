import React, { Fragment } from 'react'
import Head from 'next/head'
import Nav from './navbar/Layout_nav'


export default function Layout_main({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Gender</title>
      </Head>
      <Nav />
      <main>
        <div className="main-content px-5">
          {children}
        </div>
      </main>
    </Fragment>
  )
}
