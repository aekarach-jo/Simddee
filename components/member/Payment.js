import React, { useRef } from 'react'
import styles from '../../styles/payment.module.scss'


export default function Payment() {

    const paymentImage = useRef()

    function handlePayment() {
        let formPayment = {
            paymentImage: paymentImage.current.files
        }
        console.log(formPayment)
        payment(formPayment)
    }

    const payment = async (param) => {
        const pay = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    return (
        <div>
            <div className="container justify-center items-center">
                <div className="col">
                    <p className="text-center text-lg font-black">รายละเอียดการชำระค่าสมาชิก</p>
                    <div className="card">
                        <div className="col">
                            <div className="row text-center">รายละเอียดแพ็กเก็จ</div>
                            <div className="row">แพ็กเก็จ</div>
                            <div className="row">รวมทั้งหมดๆ </div>
                        </div>
                    </div>
                </div>
                <div className="col w-96">
                    <p className="text-center text-lg font-black">ข้อมูลผู้สมัคร</p>
                    <div className="card">2</div>
                </div>
                <div className="col w-96">
                    <p className="text-center text-lg font-black">ชำระค่าสมัครสมาชิก</p>
                    <div className="card">
                        <div className="row">
                            <p className="text-xs">*บัญชีของทางเว็ปไซต์</p>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>-------------------------</option>
                                <option value="1">One</option>
                            </select>
                            <div className="col-5 border border-gray-300 rounded pt-4 ml-3">
                                <img className="flex flex-col m-auto z-10" src="https://img.icons8.com/material-outlined/100/image.png" alt="" width={40} height={40} />
                                <input type="file" className="opacity-0 w-36 z-0" />
                            </div>
                            <div className="col-6 ">
                                <label className="text-md">อัฟโหลดภาพโปรไฟล์ร้าน</label>
                                <label className="text-xs">ขนาดอัฟโหลดไฟล์ภาพ ไม่เกิน 2 Mb</label>
                                <button type="button" className={`${styles.btn_send} rounded-pill w-36 m-2 text-white`}>อัฟโหลด</button>
                            </div>
                        </div>
                    </div>
                    <button className={`${styles.btn_send} btn w-full text-white`}>ส่ง</button>
                </div>
            </div>
        </div>
    )
}

