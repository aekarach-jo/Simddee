import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Member({ data }) {
  const url = useRouter()
  const [storeId, setStoreId] = useState('store')
  return (
    <div>
      <h1>Member page</h1><br />

      <Link href={{
        pathname: `${url.asPath}/${storeId}`
      }}>Store</Link><br />

      <Link href={{
        pathname: `${url.asPath}/cart`
      }}>Cart</Link><br />

      <Link href={{
        pathname: `${url.asPath}/product`
      }}>Product</Link><br />

      <Link href={{
        pathname: `${url.asPath}/order`
      }}>Order</Link><br />

      <Link href={{
        pathname: `${url.asPath}/payment`
      }}>Payment</Link><br />
    </div>
  )
}
