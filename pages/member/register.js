import React, { Fragment } from 'react'
import Layout_register from '../../components/layouts/Layout_register'
import MemberRegister from '../../components/signin/memberRegister'
import Footer from '../../components/subComponent/footer'
import Nav from '../../components/subComponent/nav'
export default function register() {
  return (
    <Fragment>
      <Nav/>
      <MemberRegister />
      <Footer/>
    </Fragment>
  )
}

register.getLayout = function PageLayout(page) {
  return (
    <Layout_register>
      {page}
    </Layout_register>
  )
}