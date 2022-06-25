import  { useRouter } from 'next/router'
import React from 'react'

export default function StoreId() {
    const router = useRouter()
  return (
    <div>{idStore}</div>
  )
}


