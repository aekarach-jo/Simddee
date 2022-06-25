import React, { Fragment } from 'react'
import Layout_login from '../components/layouts/Layout_login';
import Login from '../components/signin/Login';
import Footer from '../components/subComponent/footer';
import Nav from '../components/subComponent/nav';

export default function login({ bannerJson }) {
    return (
        <Fragment>
            <Nav />
            <Login banner={bannerJson} />
            <Footer />
        </Fragment>
    )
}


login.getLayout = function PageLayout(page) {
    return (
        <Layout_login>
            {page}
        </Layout_login>
    )
}

export async function getServerSideProps() {
    const [getBanner] = await Promise.all([
        fetch("https://reqres.in/api/users/")
    ])

    const [bannerJson] = await Promise.all([
        getBanner.json()
    ])
    return {
        props: { bannerJson }
    }

}