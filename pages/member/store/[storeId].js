import Head from 'next/head';
import React, { Fragment } from 'react'
import Store_member from '../../../components/member/store/store_member';
import Cover from '../../../components/subComponent/cover';
import nextConfig from '../../../next.config';

export default function StoreId({ store_post, store_detail, product ,member_detail}) {
console.log("MEMBER",member_detail);
  return (
    <Fragment>
      <Head>Store</Head>
      <Cover />
      <Store_member
        store_post={store_post}
        store_detail={store_detail}
        product={product}
      />
    </Fragment>
  )
}

export async function getServerSideProps({ res, params }) {
  const apiUrl = nextConfig.apiPath;
  const access_token = res.req.cookies.access_token;
  const gender = res.req.cookies.gender;
  const store_code = params.storeId
  const member_code = res.req.cookies.member_code
  const [getStorebyStoreCode, member] = await Promise.all([
    fetch(`${apiUrl}/product/${gender}/store/${store_code}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }),
    fetch(`${apiUrl}/member/get/${member_code}`, { // รอ response member_code จาก login
      method: 'GET',
      headers : {
        Authorization : `Bearer ${access_token}`
      }
    })
  ]);
  const [store, memberJson] = await Promise.all([
    getStorebyStoreCode.json(),
    member.json()
  ])
  return {
    props: {
      store_post: store.data.store_post,
      product: store.data.all_product,
      store_detail: store.data.store_detail,
      member_detail : memberJson
    }
  }
}