import React, { Fragment } from 'react'
import ShowProduct from '../../components/member/ShowProduct'
import Layout_product from '../../components/layouts/Layout_product'

export default function showProduct() {
  return (
    <Fragment>
      <ShowProduct />
    </Fragment>
  )
}

showProduct.getLayout = function PageLayout(page) {
    return (
      <Layout_product>
        {page}
      </Layout_product>
    )
  }