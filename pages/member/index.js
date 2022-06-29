import React, { Fragment } from "react";
import Cover from "../../components/subComponent/cover";
import Nav from "../../components/subComponent/nav";
import Footer from "../../components/subComponent/footer";
import Head from "next/head";
import nextConfig from "../../next.config";
import ShowProduct from "../../components/member/showProduct";

export default function showProduct({ storeList, productList }) {
  return (
    <Fragment>
      <Head>
        <title>FillFin</title>
      </Head>
      <Cover />
      <ShowProduct store={storeList} product={productList} />
    </Fragment>
  );
}

export async function getServerSideProps({ req, res }) {
  const apiUrl = nextConfig.apiPath
  const access_token = res.req.cookies.access_token
  const gender = res.req.cookies.gender;
  const [getAllStore] = await Promise.all([
    fetch(`${apiUrl}/product/${gender}/allStore`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
  ]);
  const [stores] = await Promise.all([
    getAllStore.json()
  ]);
  return {
    props: {
      storeList: stores.data.store_all,
      productList: stores.data.product_recom
    }
  };
}
