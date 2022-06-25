import React, { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";

export default function Layout_main({ children }) {
  return (
    <Fragment>
      <Head>
        <title>FillFin</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>{children}</main>
      <Script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></Script>
    </Fragment>
  );
}
