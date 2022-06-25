import Head from "next/head";
import React, { Fragment } from "react";

export default function Layout_login({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>{children}</main>
    </Fragment>
  );
}
