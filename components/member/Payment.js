import Head from "next/head";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import nextConfig from "../../next.config";
import FormData from "form-data";
import Swal from "sweetalert2";

const apiUrl = nextConfig.apiPath;

export default function Payment() {
    let formData = new FormData();
    const inputImage = useRef(null);
    const [image, setImage] = useState(null);

    const [bankList, setBankList] = useState([]);
    const [bank, setBank] = useState("")

    const [isLoadSuccess, setIsLoadSuccess] = useState(false);

    const [memberData, setMemberData] = useState([])
    const [packageData, setpackageData] = useState([])
    const [toggleShowPass, setSoggleShowPass] = useState(true)
    useEffect(() => {
        getPay()
    }, [])


    function handleSendClick() {
        formData.append('image', image)

        if (bank == "") {
            Swal.fire({
                icon: 'warning',
                title: 'กรุณาเลือกบัญชี',

            })
            return false;
        }
        if (!image) {
            Swal.fire({
                icon: 'warning',
                title: 'กรุณาอัฟโหลดสลิป',

            })
            return false;
        }

        console.log('success');
        // payment(formPayment)
    }

    function inputImageOnChange(e) {
        if (["image/jpeg", "iamge/jpg", "image/png"].includes(e.target.files[0].type)) {
            const URLs = URL.createObjectURL(e.target.files[0])
            setImage(URLs)
        } else {
            Swal.fire({
                title: 'กรุณาอัฟโหลดเฉพาะไฟล์รูปภาพ',
                icon: 'warning',
                position: "center",
            })
        }
    }

    const getPay = async () => {
        // const payData = await fetch(`${apiUrl}/getPay`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // const data = payData.json()
        const formTest = [
            {
                id: '1',
                names: 'SCB Siam Commercial Bank / 0000000000 / Mr.Fillfin Thailand'
            },
            {
                id: '2',
                names: 'KTB Siam Commercial Bank / 0000000000 / Mr.Fillfin Thailand'
            }
        ]
        setBankList(formTest);

        getMemberId()
        setTimeout(() => setIsLoadSuccess(true), 2000)
    }

    const getMemberId = async () => {
        const formMember = [
            {
                id: 1,
                username: 'นายสมหมาย',
                password: 'lnwza007',
                package: 1
            }]
        setMemberData(formMember)
        getPackagetId(1)
        // try {
        //     const id = localStorage.getItem("memberId")
        //     const memberId = await fetch(`${apiUrl}/getMemberById`, {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     })
        //     const data = memberId.json()

        // } catch (err) { };
    };

    const getPackagetId = async (id) => {
        const formPackage = [{
            id: 1,
            packageType: 'premium',
            packageDetail: 365,
            price: 1500,
            totalPrice: 1500
        }]
        setpackageData(formPackage)

        // try {
        //     const detail = await fetch(`${apiUrl}/package`, {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });
        //     const data = detail.json();
        // } catch (err) { }
    };

    const createPayment = async (param) => {
        try {
            const pay = await fetch(`${apiUrl}/payment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(param),
            });
        } catch (err) { }
    }

    return (
        <Fragment>
            <Head>
                <title>Payment</title>
                <link rel="stylesheet" href="/assets/css/global.min.css" />
                <link rel="stylesheet" href="/assets/css/detail-pay.min.css" />
            </Head>
            <header>
                <div className="column-left">
                    <Link href="/">
                        <img
                            style={{ cursor: "pointer" }}
                            src="/assets/images/logo-fillfin.png"
                            alt
                        />
                    </Link>
                </div>
                <div className="column-right">
                    <Link href="/login">
                        <button className="btn-login">เข้าสู่ระบบ</button>
                    </Link>
                    <Link href="/store/register">
                        <button className="btn-apply">สมัครร้านค้า</button>
                    </Link>
                    <button className="btn">
                        <i className="fa-solid fa-cart-shopping" />
                    </button>
                    <button className="btn">
                        <i className="fa-solid fa-bars" />
                    </button>
                </div>
            </header>
            <div>
                <div className="detail-pay">
                    <div className="column-detail-pay">
                        <div className="text-top">
                            <h2>รายละเอียดการชำระค่าสมาชิก</h2>
                        </div>
                        <div className="column-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>รายละเอียดแพ็กเกจ</th>
                                        <th />
                                    </tr>
                                    {packageData?.map((data, index) => (
                                        <Fragment key={index}>
                                            <tr>
                                                <td>{data.packageType}</td>
                                                <td className="td-right">{data.price} BTH</td>
                                            </tr>
                                            <tr>
                                                <td>ระยะเวลาสมาชิกแพ็กเก็จ {data.packageType} ({data.packageDetail} วัน)</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td>รวมทั้งหมด</td>
                                                <td>{data.totalPrice} BTH</td>
                                            </tr>
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="column-detail-member">
                            <h2>ข้อมูลผู้สมัครสมาชิก</h2>
                            {memberData?.map((data, index) => (
                                <div key={index} className="text-column">
                                    <div className="column-left">
                                        <p>
                                            ชื่อผู้ใช้<span>(User)</span>
                                        </p>
                                        <p>{data.username}</p>
                                    </div>
                                    <div className="column-right">
                                        <p>
                                            รหัสผ่าน<span>(Password)</span>
                                        </p>
                                        {toggleShowPass
                                            ? <p >
                                                ***********
                                                <button>
                                                    <i onClick={() => setSoggleShowPass(false)} className="fa-solid fa-eye" />
                                                </button>
                                            </p>
                                            : <p >
                                                {data.password}
                                                <button>
                                                    <i onClick={() => setSoggleShowPass(true)} className="fa-solid fa-eye" />
                                                </button>
                                            </p>
                                        }

                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="column-pay-subscription">
                            <h2>ชำระค่าสมัครสมาชิก</h2>
                            <div className="column-pay">
                                <select onChange={(e) => setBank(e.target.value)} >
                                    <option value="">กรุณาเลือกข้อมูล</option>
                                    {bankList?.map((data, index) => (
                                        <option key={index} value={data.id}>
                                            {data.names}
                                        </option>
                                    ))}
                                </select>
                                <div className="column-img-pay">
                                    <div className="column-left" style={{ height: '300px', width: '250px' }}>
                                        {image ? (
                                            <img
                                                src={image}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        ) : (
                                            <i className="fa-solid fa-image" />
                                        )}
                                        <input style={{ display: "none" }} type="file" accept=".jpeg,.jpg,.png" ref={inputImage} onChange={(e) => inputImageOnChange(e)} />
                                    </div>
                                    <div className="column-right">
                                        <h3>อัฟโหลดสลิป</h3>
                                        <p>ขนาดอัฟโหลดไฟล์ภาพ ไม่เกิน 5 Mb</p>
                                        <button onClick={() => inputImage.current.click()}>อัฟโหลด</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-bottom">
                            {
                                isLoadSuccess
                                    ? <button onClick={() => handleSendClick()} className="btn-out">ส่ง</button>
                                    : <p>กำลังโหลดข้อมูล</p>
                            }
                        </div>
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
