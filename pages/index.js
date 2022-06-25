import { Fragment } from 'react'
import Index from '../components/index/Index';
import Footer from '../components/subComponent/footer';
import Nav from '../components/subComponent/nav';
import nextConfig from '../next.config';

export default function Home({ banners, videos }) {

  return (
    <Fragment>
      <Nav />
      <Index banner={banners} video={videos} />
      <Footer />
    </Fragment>
  )
}

export async function getServerSideProps() {
  const apiUrl = nextConfig.apiPath

  const [bannerRes, videoRes] = await Promise.all([
    fetch("https://reqres.in/api/users/"),
    fetch("https://reqres.in/api/users?page=2")
    // fetch() cover
  ]);

  const [banners, videos] = await Promise.all([
    bannerRes.json(),
    videoRes.json()
  ])
  return {
    props: { banners, videos }
  }
}

