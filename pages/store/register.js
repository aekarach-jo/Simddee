import Head from "next/head";
import React, { Fragment } from "react";
import Layout_register from "../../components/layouts/Layout_register";
import StoreRegister from "../../components/signin/StoreRegister";
import Footer from "../../components/subComponent/footer";
import Nav from "../../components/subComponent/nav";
export default function register() {
  return (
    <Fragment>
       <Head>
        <title>Register</title>
      </Head>
      <Nav />
      <StoreRegister />
      <Footer />
    </Fragment>
  );
}

register.getLayout = function PageLayout(page) {
  return <Layout_register>{page}</Layout_register>;
};
