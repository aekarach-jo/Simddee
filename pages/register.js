import React, { Fragment } from 'react'
import Layout_register from '../components/layouts/Layout_register'
import Register from '../components/signin/Register'

export default function register() {
  return (
    <Fragment>
      <Register />
    </Fragment>
  )
}

Register.getLayout = function PageLayout(page) {
  return (
    <Layout_register>
      {page}
    </Layout_register>
  )
}