import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import React, { Fragment, useEffect, useState } from 'react'
import nextConfig from '../../next.config';

export default function Index() {
    const apiUrl = nextConfig.apiPath
    const [men, setMen] = useState('men')
    const [women, setWomen] = useState('women')

    useEffect(() => {

    }, [])

    function setGender(gender) {
        console.log(gender);
        localStorage.setItem("gender", gender)
        Router.push('/login')
    }

    const getBanner = async () => {
        const banner = await fetch(`${apiUrl}/getBanner`, {
            method: 'GET',
        })
    }

    return (
        <Fragment>
            <Head>
                <title>FillFin</title>
                <link rel="stylesheet" href="/assets/css/global.min.css" />
                <link rel="stylesheet" href="/assets/css/index.min.css" />
            </Head>
            <header>
                <div className="column-right">
                    <Link href='/'>
                        <img style={{ cursor: 'pointer' }} src="/assets/images/logo-fillfin.png" alt />
                    </Link>
                </div>
                <div className="column-right">
                    <Link href='/login'>
                        <button className="btn-login">เข้าสู่ระบบ</button>
                    </Link>
                    <Link href='/store/register'>
                        <button className="btn-apply">สมัครร้านค้า</button>
                    </Link>
                    <button className="btn"><i className="fa-solid fa-cart-shopping" /></button>
                    <button className="btn"><i className="fa-solid fa-bars" /></button>
                </div>
            </header>
            <div className="detil-index">
                <div className="img-background">
                    <img className="img-left" src="/assets/images/man.png" alt />
                    <img className="img-right" src="/assets/images/woman.png" alt />
                </div>
                <div className="contact-us">
                    <div className="column-contact-us">
                        <div className="text-contact-us">
                            <p>ติดต่อเรา</p>
                        </div>
                        <div className="img-contact-us">
                            <img src="/assets/images/contact.jpg" alt />
                        </div>
                    </div>
                </div>
                <div className="column-shadow">
                    <div className="shadow-left" />
                    <div className="shadow-right" />
                </div>
                <div className="column-detil-index">
                    <div className="column-vedio">
                        <iframe width={460} height={260} src="https://www.youtube.com/embed/CUfPYWtydgk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        <p className="text-vedio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore dolore id porro quos maxime, fugiat sint minus odit dolores repudiandae! Dolore nostrum dolor libero est? Officiis ratione est vel.</p>
                    </div>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="/assets/images/sale.png" alt />
                            </div>
                            <div className="swiper-slide">
                                <img src="/assets/images/sale.png" alt />
                            </div>
                            <div className="swiper-slide">
                                <img src="/assets/images/sale.png" alt />
                            </div>
                        </div>
                        <div className="swiper-pagination" />
                    </div>
                    <div className="column-text">
                        <h2>หมวดหมู่สินค้า</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra, mattis quam volutpat.</p>
                    </div>
                    <div className="column-btn">
                        <button onClick={() => setGender(men)}>ผู้ชาย</button>
                        <button onClick={() => setGender(women)}>ผู้หญิง</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra, mattis quam volutpat. Cursus leo, nec sit massa, euismod elementum. Massa euismod penatibus semper cursus nisi. Sit sed feugiat elementum amet. Sit eget bibendum mauris, mauris nisi ut neque.</p>
                </div>
            </div>
            <footer>
                <div className="footer-column">
                    <div className="column-left">
                        © 2022 Fillfin.com All Rights Reserved
                    </div>
                    <div className="column-right">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
