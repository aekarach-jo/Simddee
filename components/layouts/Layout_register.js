import Head from "next/head";
import Script from "next/script";
import React, { Fragment } from "react";

export default function Layout_register({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Register</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>{children}</main>
      <Script></Script>
    </Fragment>
  );
}
