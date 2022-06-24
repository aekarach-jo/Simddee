import Router, { useRouter } from 'next/router';
import React, { Fragment } from 'react'

export default function productId() {
  const router = useRouter()
  const productId  = router.query
    console.log(productId);
  return (
    <Fragment>
        {/* < /> */}
    </Fragment>
  )
}


export async function getServerSideProps({params}){
console.log(params)
  return {
    props : { data : [] }
  }
}

