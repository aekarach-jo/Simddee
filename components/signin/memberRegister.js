import Head from "next/head";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import nextConfig from "../../next.config";

const apiUrl = nextConfig.apiPath;

export default function MemberRegister() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [packages, setPackage] = useState(0)
    const [isRegister, setIsRegister] = useState(false)

    useEffect(() => {

    }, [])


    function handleRegis() {
        console.log(username, password, confirmPassword)
        if (username == "" || password == "" || confirmPassword == "") {
            Swal.fire({
                icon: 'warning',
                position: 'center',
                title: 'กรุณากรอกข้อมูลให้ครบ',
            })
            return false;
        }

        if (password != confirmPassword) {
            Swal.fire({
                icon: 'warning',
                position: 'center',
                title: 'รหัสผ่านไม่ตรงกัน',
            })
            return false;
        }
        if (packages == 0) {
            Swal.fire({
                icon: 'warning',
                position: 'center',
                title: 'กรุณาเลือกแพ็กเกจ',
            })
            return false;
        }

        console.log('pass')
    }

    const register = async (formRegis) => {
        try {
            const fetchRegis = await fetch(`${apiUrl}/member/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formRegis)
            })
            const resJson = fetchRegis.json()
            if (resJson.status) {

            } else {
                // alert
            }
        }
        catch (err) {
            console.log(err)
        }

        // Router.push('/member/payment')
    }




    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/assets/css/global.min.css" />
                <link rel="stylesheet" href="/assets/css/apply.min.css" />
            </Head>
            <div>
                <header>
                    <div className="column-left">
                        <img src="/assets/images/logo-fillfin.png" alt />
                    </div>
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
                <div className="apply">
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
                    <div className="column-apply">
                        <div className="column-top-apply">
                            <div className="column-left">
                                <iframe width={536} height={300} src="https://www.youtube.com/embed/CUfPYWtydgk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="column-right">
                                <h2>ข้อกำหนดการสมัครสมาชิก</h2>
                                <h3>(ดู VDO ประกอบ)</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis
                                    facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa
                                    suscipit consectetur quia.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis
                                    facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa
                                    suscipit consectetur quia.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis
                                    facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa
                                    suscipit consectetur quia.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis
                                    facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa
                                    suscipit consectetur quia.
                                </p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis
                                    facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa
                                    suscipit consectetur quia.
                                </p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis
                                    facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa
                                    suscipit consectetur quia.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis
                                    facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa
                                    suscipit consectetur quia.</p>
                            </div>
                        </div>
                        <div className="column-center-apply">
                            <div className="column-left">
                                <div className="column-text-login">
                                    <h2>เข้าสู่ระบบ</h2>
                                    <div className="box-column-login">
                                        <div className="form-user-login">
                                            <div className="form">
                                                <div className="label-top">
                                                    <div className="text-left">ชื่อผู้ใช้ <p>(User)</p>
                                                    </div>
                                                    <div className="text-right">(กรุณากรอกเป็นเบอร์โทรศัพท์)</div>
                                                </div>
                                                <input onChange={(e) => setUsername(e.target.value.trim())} type="text" id placeholder="User Name" />
                                            </div>
                                            <div className="form">
                                                <div className="label-top">
                                                    <div className="text-left">รหัสผ่าน <p>(Password)</p>
                                                    </div>
                                                    <div className="text-right">(กรุณากรอกเป็นไอดีไลน์)</div>
                                                </div>
                                                <input onChange={(e) => setPassword(e.target.value.trim())} type="password" id placeholder="************" />
                                            </div>
                                            <div className="form">
                                                <div className="label-top">
                                                    <div className="text-left">ยืนยัน รหัสผ่าน<p>(Confirm Password)</p>
                                                    </div>
                                                    <div className="text-right">(กรุณากรอกเป็นไอดีไลน์)</div>
                                                </div>
                                                <input onChange={(e) => setConfirmPassword(e.target.value.trim())} type="password" id placeholder="************" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-check">
                                    <input onClick={() => setIsRegister(true)} className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna felis id nulla eget. Sed
                                        donec faucibus enim in
                                    </label>
                                </div>
                            </div>
                            <div className="column-right">
                                <h2>เลือกแพ็กเก็จ</h2>
                                <div className="column">
                                    <button onClick={() => setPackage(1)} className="column-detail">
                                        <img src="/assets/images/product.png" alt />
                                        <div className="text-line">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, eos.</p>
                                        </div>
                                    </button>
                                    <button onClick={() => setPackage(2)} className="column-detail">
                                        <img src="/assets/images/product.png" alt />
                                        <div className="text-line">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, eos.</p>
                                        </div>
                                    </button>
                                    <button onClick={() => setPackage(3)} className="column-detail">
                                        <img src="/assets/images/product.png" alt />
                                        <div className="text-line">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, eos.</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                        </div>
                        <div className="btn-column">
                            {
                                isRegister ?
                                    <button onClick={() => handleRegis()} className="btn-left">สมัครสมาชิก</button>
                                    : <button className="btn-left" style={{ backgroundColor: '#e3e3e3', cursor: "not-allowed" }}>สมัครสมาชิก</button>
                            }
                            <button className="btn-right">ยกเลิก</button>
                        </div>
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
            </div>
        </Fragment>
    );
}