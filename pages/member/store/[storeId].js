import Router from 'next/router'
import React from 'react'

export default function StoreId() {
    const idStore = Router.query
    console.log(idStore);
  return (
    <div>{idStore}</div>
  )
}
