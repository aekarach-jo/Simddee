import { useEffect } from 'react'
import Layout_main from '../components/layouts/Layout_main'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    // typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
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
