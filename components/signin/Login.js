import Head from 'next/head';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function Login() {
  const [pathLogin, setPathLogin] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showForm, setShowForm] = useState('member')

  useEffect(() => {
    if (showForm) {
      setPathLogin(showForm == "member" ? "member" : "store")
    }
  }, [showForm])

  function onSigninClick() {
    if (username == "" || password == "") {
      Swal.fire({
        icon: 'warning',
        position: 'center',
        title: 'กรุณากรอกข้อมูลให้ครบ',
      })
      return false;
    }

    let formLogin = { username, password }
    // login(formLogin,pathLogin);
  }

  async function login(formLogin, pathLogin) {
    try {
      const onLogin = await fetch(`${apiUrl}/${pathLogin}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formLogin)
      })
      const data = onLogin.json()
      if (data.status) {
        setCookies('access_token', data.access_token)
        setCookies('refresh_token', data.refresh_token)
        await Swal.fire({
          title: response.description,
          icon: 'success',
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false
        })
        Router.push('/')
      } else {
        Swal.fire({
          title: response.description,
          icon: 'error',
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false
        })
      }
    }
    catch (err) {

    }

  }

  return (
    <Fragment>
      <Head>
        <title>Login</title>
        <link rel="stylesheet" href="/assets/css/global.min.css" />
        <link rel="stylesheet" href="/assets/css/login.min.css" />
      </Head>
      <div>
        <header>
          <div className="column-left">
            <img src="/assets/images/logo-fillfin.png" alt />
          </div>
          <div className="column-right">
            <button className="btn-login">เข้าสู่ระบบ</button>
            <button className="btn-apply">สมัครร้านค้า</button>
            <button className="btn"><i className="fa-solid fa-cart-shopping" /></button>
            <button className="btn"><i className="fa-solid fa-bars" /></button>
          </div>
        </header>
        <div className="detil-login">
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
          <div className="column-login">
            <div className="column-img-top">
              <img src="/assets/images/sale.png" alt />
            </div>
            <div className="column-text-login">
              <h2>เข้าสู่ระบบ</h2>
              <div className="box-column-login">
                <div className="menu-navbar" id="menu-navbar">
                  {showForm == 'member'
                    ?
                    <>
                      <button className="btn-navbar active" onClick={() => setShowForm('member')}>สำหรับผู้ซื้อสินค้า</button>
                      <button className="btn-navbar " onClick={() => setShowForm('store')}>สำหรับร้านค้า</button>
                    </>
                    :
                    <>
                      <button className="btn-navbar " onClick={() => setShowForm('member')}>สำหรับผู้ซื้อสินค้า</button>
                      <button className="btn-navbar active" onClick={() => setShowForm('store')}>สำหรับร้านค้า</button>
                    </>
                  }
                </div>
                {
                  showForm == 'member' ?
                    <div className="form-user-login active" id="user">
                      <div className="form">
                        <div className="label-top">
                          <div className="text-left">ชื่อผู้ใช้ <p>(User)</p></div>
                          <div className="text-right">(กรุณากรอกเป็นเบอร์โทรศัพท์)</div>
                        </div>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" id placeholder="User Name" />
                      </div>
                      <div className="form">
                        <div className="label-top">
                          <div className="text-left">รหัสผ่าน <p>(Password)</p></div>
                          <div className="text-right">(กรุณากรอกเป็นไอดีไลน์)</div>
                        </div>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id placeholder="User Name" />
                        <a className="text-bottom">ลืมชื่อผู้ใช้ หรือ รหัสผ่าน</a>
                      </div>
                    </div> :
                    <div className="form-admin-login active" id="admin">
                      <div className="form">
                        <div className="label-top">
                          <div className="text-left">ชื่อผู้ใช้ <p>(User)</p></div>
                          <div className="text-right">(กรุณากรอกเป็นเบอร์โทรศัพท์)</div>
                        </div>
                        <input type="text" id placeholder="User Name" />
                      </div>
                      <div className="form">
                        <div className="label-top">
                          <div className="text-left">รหัสผ่าน <p>(Password)</p></div>
                          <div className="text-right">(กรุณากรอกเป็นไอดีไลน์)</div>
                        </div>
                        <input type="password" id placeholder="User Name" />
                        <a className="text-bottom">ลืมชื่อผู้ใช้ หรือ รหัสผ่าน</a>
                      </div>
                    </div>
                }
                <button onClick={() => onSigninClick()} className="btn-login">เข้าระบบ</button>
              </div>
            </div>
            <h2>หรือ</h2>
            <p>หากคุณยังไม่มีบัญชีผู้ใช้ สามารถเข้าไปสมัครได้ที่ด้านล้างนี้เลย</p>
            {showForm == 'member'
              ?
              <Link href='/member/register'>
                <button className="btn-menbar" >สมัครสมาชิก</button>
              </Link>
              :
              <Link href='/store/register'>
                <button className="btn-menbar" >สมัครร้านค้า</button>
              </Link>
            }
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
  )
}
