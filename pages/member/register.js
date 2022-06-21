import React, { Fragment } from 'react'
import Layout_register from '../../components/layouts/Layout_register'
import UserRegister from '../../components/signin/UserRegister'
export default function register() {
  return (
    <Fragment>
      <UserRegister />
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