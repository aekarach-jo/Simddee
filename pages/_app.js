import { useEffect } from 'react'
import Layout_main from '../components/layouts/Layout_main'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css';

//#region style 
// import '../styles/css/apply.min.css'
// import '../styles/css/detail-pay.min.css'
// import '../styles/css/detail-stone.min.css'
// import '../styles/css/global.min.css'
// import '../styles/css/index.min.css'
// import '../styles/css/login.min.css'
// import '../styles/css/product.min.css'
// import '../styles/css/stone-exclusive.min.css'
// import '../styles/css/stone-premiem.min.css'
//#endregion

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
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
