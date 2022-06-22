import FormData from "form-data";
import Link from "next/link";
import Router from "next/router";
import React, { Fragment, useEffect, useRef } from "react";
import nextConfig from "../../next.config";
import styles from "../../styles/storeRegister.module.scss"

const apiUrl = nextConfig.apiPath;

export default function UserRegister() {
    const username = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const packages = useRef()

    useEffect(() => {
        // if(packages){
        //     console.log('ok');
        // }
    }, [packages])


    function handleRegis() {
        let formRegis = {
            username: username.current.value,
            password: password.current.value,
            // packages: packages.current.value,
        }
        console.log(formRegis);
        // register(formRegis)
    }

    const register = async (formRegis) => {
        const fetchRegis = await fetch(`${apiUrl}/store/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formRegis)
        })
           Router.push('/member/payment')
    }


    return (
        <Fragment>
            <div className=" bg-white justify-center items-center mt-4">
                <div className="row">
                    <div className="col-5">
                        <iframe className="d-block float-right px-5" width="580" height="255" src="https://www.youtube.com/embed/ZhDNtEe0kGM"
                            title="​Ed Sheeran, Dua Lipa, Kygo, Avicii, Martin Garrix, The Chainsmokers Style - Feeling Me"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="col-7">
                        <div className=" space-y-4 text-black-500 bg-pink-200 rounded-lg border w-max max-w-3xl h-64 p-6 overflow-y-scroll scrollbar">
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
                        <div className="col-5">
                            <p className="text-center text-xl font-black">กรอกข้อมูลผู้สมัคร</p>
                            <div className="bg-white h-36 w-auto rounded  d-block mx-auto">
                                <div className="space-y-5 mt-5">
                                    <div className="col">
                                        <label>*ชื่อผู้ใช้
                                            <p className="text-xs float-right m-1">(User)</p>
                                        </label>
                                        <label className="text-xs float-right mt-1 text-danger">(กรุณากรอกเป็นเบอร์โทรศัพท์)</label>
                                    </div>
                                    <input ref={username} type="text" className="form-control border border-gray-800 rounded px-3 mt-1" placeholder="storename" />
                                    <div className="col">
                                        <label>*รหัสผ่าน
                                            <p className="text-xs float-right m-1">(Password)</p>
                                        </label>
                                        <label className="text-xs float-right mt-1 text-danger">(กรุณากรอกเป็นไอดีไลน์)</label>
                                    </div>
                                    <input ref={password} type="password" className="form-control mt-1" placeholder="********" />
                                    <div className="col">
                                        <label>*ยืนยัน รหัสผ่าน
                                            <p className="text-xs float-right m-1">(Confirm Password)</p>
                                        </label>
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
                        <div className="col-7">
                            <div className="bg-white h-45 w-120 rounded">
                                <div className="row flex justify-center">
                                    <p className="text-xl font-black px-5 ml-5">เลือกแพ็กเก็จ</p>
                                    <div className="col-3  m-2">
                                        <button  type="button" className="card px-2 hover:bg-gray-200" style={{ width: '10rem', height: '15rem' }}>
                                            <img src="https://img.icons8.com/color/344/wedding-photo.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text text-sm">Member...</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="col-3  m-2">
                                        <button  type="button" className="card px-2 hover:bg-gray-200" style={{ width: '10rem', height: '15rem' }}>
                                            <img src="https://img.icons8.com/color/344/wedding-photo.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text text-sm">Premium...</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="col-3  m-2">
                                        <button type="button" className="card px-2 hover:bg-gray-200" style={{ width: '10rem', height: '15rem' }}>
                                            <img src="https://img.icons8.com/color/344/wedding-photo.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text text-sm">Exclusive...</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="m-4" />
                        <div className="row mt-3">
                            <div className="col">
                                <button type="button" onClick={handleRegis} className={`${styles.btn_color} rounded btn float-right border`}>สมัครสมาชิก</button>
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
