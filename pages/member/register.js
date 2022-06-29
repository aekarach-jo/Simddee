import Head from 'next/head'
import React, { Fragment } from 'react'
import Layout_register from '../../components/layouts/Layout_register'
import MemberRegister from '../../components/signin/memberRegister'
import nextConfig from '../../next.config'

const apiUrl = nextConfig.apiPath

export default function register({packageJson}) {

  return (
    <Fragment>
       <Head>
        <title>Register</title>
      </Head>
      <MemberRegister packageData={packageJson.data} />
    </Fragment>
  )
}

export async function getServerSideProps({ req, res }) {
  const fetchPackage = await fetch(`${apiUrl}/package/get`, {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    }
  })
  const packageJson = await fetchPackage.json()
  return{
    props : { packageJson }
  }
}
// register.getLayout = function PageLayout(page) {
//   return (
//     <Layout_register>
//       {page}
//     </Layout_register>
//   )
// }