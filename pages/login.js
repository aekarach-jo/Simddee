import Head from "next/head";
import React, { Fragment } from "react";
import Login from "../components/signin/Login";

export default function login({ bannerJson }) {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <Login banner={bannerJson} />
    </Fragment>
  );
}

// login.getLayout = function PageLayout(page) {
//   return <Layout_login>{page}</Layout_login>;
// };

export async function getServerSideProps() {
  // const [getBanner] = await Promise.all([
  //   fetch("https://reqres.in/api/users/"),
  // ]);

  // const [bannerJson] = await Promise.all([getBanner.json()]);
  return {
    props: { data : [] },
  };
}
