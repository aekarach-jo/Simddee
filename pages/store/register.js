import React, { Fragment } from 'react'
import Layout_register from '../../components/layouts/Layout_register'
import StoreRegister from '../../components/signin/StoreRegister'
export default function register() {
  return (
    <Fragment>
        <StoreRegister />
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