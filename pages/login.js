import React, { Fragment } from 'react'
import Layout_login from '../components/layouts/Layout_login';
import Login from '../components/signin/Login';

export default function login() {
    return (
        <Fragment>
            <Login />
        </Fragment>
    )
}

Login.getLayout = function PageLayout(page) {
    return (
        <Layout_login>
            {page}
        </Layout_login>
    )
}
