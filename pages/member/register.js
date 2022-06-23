import React, { Fragment } from 'react'
import Layout_register from '../../components/layouts/Layout_register'
import MemberRegister from '../../components/signin/memberRegister'
export default function register() {
  return (
    <Fragment>
      <MemberRegister />
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