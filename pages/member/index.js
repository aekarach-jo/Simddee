import React, { Fragment } from 'react'
import ShowProduct from '../../components/member/ShowProduct'
import Layout_product from '../../components/layouts/Layout_product'
import Cover from '../../components/subComponent/cover'
import Nav from '../../components/subComponent/Nav'
import ContactUs from '../../components/subComponent/ContactUs'
import Footer from '../../components/subComponent/Footer'

export default function showProduct({ products, stores , covers }) {
  return (
    <Fragment>
      <Nav />
      <Cover data={covers.data}/>
      <ShowProduct product={products} store={stores} />
      <Footer />
    </Fragment>
  )
}

export async function getServerSideProps() {
  const [getProductRecommend, getAllStore, cover] = await Promise.all([
    fetch("https://reqres.in/api/users/"),
    fetch("https://reqres.in/api/users/"),
    fetch("https://reqres.in/api/users/2")  // fetch cover and send to cover component
  ])
  const [products, stores, covers] = await Promise.all([
    getProductRecommend.json(),
    getAllStore.json(),
    cover.json()
  ])
  return {
    props: { products, stores, covers }
  }
}

showProduct.getLayout = function PageLayout(page) {
  return (
    <Layout_product>
      {page}
    </Layout_product>
  )
}