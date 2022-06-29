import React from 'react'

export default function Content() {
  return (
    <div>[id]</div>
  )
}

export async function getServerSideProps(){
    return { 
        prop : { data : []}
    }
}