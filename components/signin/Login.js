import { data } from 'autoprefixer';
import { setCookies } from 'cookies-next';
import Router from 'next/router';
import React, { Fragment, useState } from 'react'
import Swal from 'sweetalert2';
import apiSigninService from './apiSigninService';

const apiService = apiSigninService

export default function Login() {
  const [pathLogin, setPathLogin] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function onSignin() {
    let formLogin = {
      username: username.current.value,
      password: password.current.value,
    }
    console.log(formLogin);
    console.log(pathLogin);
    // userLogin(formLogin);
  }

  const userLogin = async (params) => {
    const onLogin = apiService.login(params)
  }

  return (
    <Fragment>
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
                  <button onClick={() => setPathLogin('userLogin')} className="btn-navbar active" onclick="showForm('user')">สำหรับผู้ซื้อสินค้า</button>
                  <button onClick={() => setPathLogin('womenLogin')} className="btn-navbar" onclick="showForm('admin')">สำหรับร้านค้า</button>
                </div>
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
                </div>
                <div className="form-admin-login" id="admin">
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
                <button onClick={() => onSignin()} className="btn-login">เข้าระบบ</button>
              </div>
            </div>
            <h2>หรือ</h2>
            <p>หากคุณยังไม่มีบัญชีผู้ใช้ สามารถเข้าไปสมัครได้ที่ด้านล้างนี้เลย</p>
            <button className="btn-menbar">สมัครสมาชิก</button>
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
      {/* <script src="/assets/js/login.js"></script> */}


    </Fragment>
  )
}
