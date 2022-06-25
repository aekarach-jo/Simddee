import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react'
import Banner from '../subComponent/banner';
import ContactUs from '../subComponent/contactUs';
import { useRouter } from 'next/router'


export default function Index({ banner, video }) {
    const router = useRouter()
    const [men, setMen] = useState('men')
    const [women, setWomen] = useState('women')

    useEffect(() => {

    }, [])

    function setGender(gender) {
        localStorage.setItem("gender", gender)
        router.push('/login')
    }

    return (
        <Fragment>
            <Head>

            </Head>
            <div className="detil-index">
                <div className="img-background">
                    <img className="img-left" src="/assets/images/man.png"  />
                    <img className="img-right" src="/assets/images/woman.png"  />
                </div>
                <ContactUs />
                <div className="column-shadow">
                    <div className="shadow-left" />
                    <div className="shadow-right" />
                </div>
                <div className="column-detil-index">
                    <div className="column-vedio">
                        <iframe width={460} height={260} src="https://www.youtube.com/embed/CUfPYWtydgk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        <p className="text-vedio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore dolore id porro quos maxime, fugiat sint minus odit dolores repudiandae! Dolore nostrum dolor libero est? Officiis ratione est vel.</p>
                    </div>
                    <Banner />
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
        </Fragment>
    )
}
