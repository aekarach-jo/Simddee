import Link from "next/link";
import React, { Fragment, useRef } from "react";
import nextConfig from "../../next.config";
import FormData from "form-data";
import styles from "../../styles/storeRegister.module.scss"

const apiUrl = nextConfig.apiPath;

export default function StoreRegister() {
    let formData = new FormData()
    const storeName = useRef()
    const age = useRef()
    const image = useRef()
    const username = useRef()
    const password = useRef()
    const confirmPassword = useRef()


    function handleRegis() {
        formData.append('storeName', storeName.current.value)
        formData.append('age', age.current.value)
        formData.append('image', image.current.value)
        formData.append('username', username.current.value)
        formData.append('password', password.current.value)

        for (var item of formData.entries()) {
            console.log(item[0]+ ', ' + item[1]); 
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
            <div className="container bg-white flex flex-col space-y-10 justify-center items-center mt-4">
                <div className="row">
                    <div className="col ">
                        <iframe className="float-right" width="480" height="255" src="https://www.youtube.com/embed/ZhDNtEe0kGM"
                            title="​Ed Sheeran, Dua Lipa, Kygo, Avicii, Martin Garrix, The Chainsmokers Style - Feeling Me"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="col">
                        <div className="space-y-4 text-black-500 bg-pink-200 rounded-lg border w-full max-w-xl h-64 p-6 overflow-y-scroll scrollbar">
                            <p className="text-center text-xl m-0 font-black">ข้อกำหนดการสมัครร้านค้า</p>
                            <p className="text-center text-lg m-0">(ดู VDO ประกอบ)</p>
                            <p className="indent-7 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className="space-y-4">
                                <div className="h-24 bg-gray-100" />
                                <div className="h-24 bg-gray-100" />
                                <div className="h-24 bg-gray-100" />
                                <div className="h-24 bg-gray-100" />
                                <div className="h-24 bg-gray-100" />
                                <div className="h-24 bg-gray-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white flex flex-col space-y-10 justify-center items-center overflow-hidden">
                <form className="px-5">
                    <div className="row px-5 mt-5">
                        <h3 className="text-center">กรอกข้อมูลผู้สมัคร</h3>
                        <div className="col">
                            <div className="bg-white h-36 w-120 rounded">
                                <div className="space-y-5 mt-5">
                                    <div className="col">
                                        <label>*ชื่อผู้ใช้ </label>
                                        <label className="text-xs float-right mt-1 text-danger">(กรุณากรอกเป็นภาษาอังกฤษและตัวเลขเท่านั้น)</label>
                                    </div>
                                    <input ref={storeName} type="text" className="form-control border border-gray-800 rounded px-3 mt-1" placeholder="storename" />
                                    <div className="col">
                                        <label>*รหัสผ่าน</label>
                                        <label className="text-xs float-right mt-1 text-danger">(กรุณากรอกเป็นไอดีไลน์)</label>
                                    </div>
                                    <input ref={password} type="password" className="form-control mt-1" placeholder="********" />
                                    <div className="col">
                                        <label>*ยืนยัน รหัสผ่าน</label>
                                        <label className="text-xs float-right mt-1 text-danger">(กรุณากรอกเป็นไอดีไลน์)</label>
                                    </div>
                                    <input ref={confirmPassword} type="password" className="form-control mt-1" placeholder="********" />
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="checkSubmit" defaultChecked />
                                        <label className="form-check-label text-sm" htmlFor="checkSubmit">
                                            ยืนยันการสมัคร
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bg-white h-45 w-120 rounded">
                                <div className="space-y-5 mt-5">
                                    <div className="col">
                                        <label >*ชื่อผู้ใช้</label>
                                        <label className="text-xs float-right mt-1 text-danger">(กรุณากรอกเป็นเบอร์โทรศัพท์)</label>
                                    </div>
                                    <input ref={username} type="text" className="form-control border border-gray-800 rounded px-3 mt-1" placeholder="username" />
                                    <label >*อายุ</label>
                                    <input ref={age} type="text" className="form-control border border-gray-800 rounded px-3 mt-1" placeholder="age" />
                                    <div className="row">
                                        <div className="col-5 border border-gray-300 rounded pt-4 ml-3">
                                            <img className="flex flex-col m-auto z-10" src="https://img.icons8.com/material-outlined/100/image.png" alt="" width={40} height={40} />
                                            <input type="file" ref={image} className="opacity-0 w-36 z-0" />
                                        </div>
                                        <div className="col-6 ">
                                            <label className="text-md">อัฟโหลดภาพโปรไฟล์ร้าน</label>
                                            <label className="text-xs">ขนาดอัฟโหลดไฟล์ภาพ ไม่เกิน 2 Mb</label>
                                            <button type="button" className={`${styles.btn_color} rounded-pill w-36 m-2`}>อัฟโหลด</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col content-around grid">
                            <div className="row bg-gray-300 h-52 w-96 content-around gri rounded">
                                <div className="col">
                                    <h5 className="space-y-5 p-3">ติดต่อ Admin เพื่ออัฟโหลด Clip VDO</h5>
                                </div>
                                <div className="col">
                                    <img src="https://img.icons8.com/officel/100/qr-code.png" alt="" />
                                </div>
                            </div>

                        </div>
                        <hr className="m-4" />
                        <div className="row mt-3">
                            <div className="col">
                                <button type="button" onClick={handleRegis} className={`${styles.btn_color} rounded btn float-right border`}>สมัครร้านค้า</button>
                            </div>
                            <div className="col">
                                <Link href='/login'>
                                    <button className="btn btn-secondary float-left">ยกเลิก</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
