import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import nextConfig from "../../next.config";
import FormData from "form-data";
import Head from "next/head";
import Swal from "sweetalert2";

const apiUrl = nextConfig.apiPath;

export default function StoreRegister() {
    let formData = new FormData()
    const [image, setImage] = useState(null)
    const inputImage = useRef(null)

    const [storeName, setStorename] = useState("")
    const [age, setAge] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isRegister, setIsRegister] = useState(false)

    function inputIamgeOnchange(e) {
        const URLs = URL.createObjectURL(e.target.files[0]);
        setImage(URLs)
    }


    function handleRegis() {
        formData.append('storeName', storeName)
        formData.append('age', age)
        formData.append('image', image)
        formData.append('username', username)
        formData.append('password', password)

        if (storeName == "" || age == "" || image == "" || username == "" || password == "") {
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

        // register(formRegis)
    }



    const register = async (param) => {
        const fetchRegis = await fetch(`${apiUrl}/store/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }


    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/assets/css/global.min.css" />
                <link rel="stylesheet" href="/assets/css/apply-stone.min.css" />
            </Head>
            <div>
                <header>
                    <div className="column-left">
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
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa suscipit consectetur quia.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa suscipit consectetur quia.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa suscipit consectetur quia.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa suscipit consectetur quia.
                                </p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa suscipit consectetur quia.
                                </p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa suscipit consectetur quia.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fuga nulla accusantium eum quis facilis commodi maxime rerum iste itaque repellendus consequatur, error assumenda quo nisi ipsa suscipit consectetur quia.</p>
                            </div>
                        </div>
                        <div className="column-center-apply">
                            <div className="column-left">
                                <h2>กรอกข้อมูลสมัครร้านค้า</h2>
                                <div className="column">
                                    <div className="left">
                                        <div className="box-column-login">
                                            <div className="form-user-login">
                                                <div className="form">
                                                    <div className="label-top">
                                                        <div className="text-left">*ชื่อร้านค้า</div>
                                                        <div className="text-right">(กรุณากรอกเป็นภาษาอังกฤษและตัวเลขเท่านั้น)</div>
                                                    </div>
                                                    <input onChange={(e) => setStorename(e.target.value)} type="text" id placeholder="User Name" />
                                                </div>
                                                <div className="form">
                                                    <div className="label-top">
                                                        <div className="text-left">*รหัสผ่าน <p>(Password)</p></div>
                                                        <div className="text-right">(กรุณากรอกเป็นไอดีไลน์)</div>
                                                    </div>
                                                    <input onChange={(e) => setPassword(e.target.value)} type="password" id placeholder="************" />
                                                </div>
                                                <div className="form">
                                                    <div className="label-top">
                                                        <div className="text-left">*ยืนยัน รหัสผ่าน<p>(Confirm Password)</p></div>
                                                        <div className="text-right">(กรุณากรอกเป็นไอดีไลน์)</div>
                                                    </div>
                                                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" id placeholder="************" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <input onClick={() => setIsRegister(true)} className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna felis id nulla eget. Sed donec faucibus enim in
                                            </label>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="box-column-login">
                                            <div className="form-user-login">
                                                <div className="form">
                                                    <div className="label-top">
                                                        <div className="text-left">*ชื่อผู้ใช้ <p>(User)</p></div>
                                                        <div className="text-right">(กรุณากรอกเป็นเบอร์โทรศัพท์)</div>
                                                    </div>
                                                    <input onChange={(e) => setUsername(e.target.value)} type="text" id placeholder="Lorem ipsum dolor sit amet, consectetur" />
                                                </div>
                                                <div className="form">
                                                    <div className="label-top">
                                                        <div className="text-left">*อายุ</div>
                                                    </div>
                                                    <input onChange={(e) => setPassword(e.target.value)} type="password" id placeholder="Lorem ipsum dolor sit amet, consectetur" />
                                                </div>
                                                <div className="column-upload-img">
                                                    <div className="column-left">
                                                        {
                                                            image
                                                                ? <img src={image} alt="" />
                                                                : <i className="fa-solid fa-image" />
                                                        }
                                                        <input style={{ display: "none" }} type="file" ref={inputImage} onChange={(e) => inputIamgeOnchange(e)} />
                                                    </div>
                                                    <div className="column-right">
                                                        <h3>อัฟโหลดภาพโปรไฟล์ร้าน</h3>
                                                        <p>ขนาดอัฟโหลดไฟล์ภาพ ไม่เกิน 2 Gb</p>
                                                        <button className="btn-upload" onClick={(e) => inputImage.current.click()}>อัฟโหลด</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column-qr-right">
                                <div className="left">
                                    <h3>ติดต่อ Admin
                                        เพื่ออัฟโหลด
                                        Clip VDO</h3>
                                    <p>Line ID : line 1</p>
                                </div>
                                <div className="right">
                                    <img src="/assets/images/qr.png" alt />
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
