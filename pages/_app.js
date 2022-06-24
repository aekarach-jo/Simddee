import { useEffect } from 'react'
import Layout_main from '../components/layouts/Layout_main'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
  }, [])

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <Layout_main>
      <Component {...pageProps} />
    </Layout_main>
  )
}

export default MyApp
