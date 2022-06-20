import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

function Gender({data}) {
  const url = useRouter()

  return (
    <div>
      <h1>Type </h1><br />

      <Link href={{
        pathname: `${url.asPath}/member`
      }}>go to Member</Link> <br />
       <Link href={{
        pathname: `${url.asPath}/store`
      }}>go to Store</Link>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          gender: 'men'
        }
      },
      {
        params: {
          gender: 'women'
        }
      },
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
     props : { data : params.gender},
     revalidate: 60,
  }
}


export default Gender;
