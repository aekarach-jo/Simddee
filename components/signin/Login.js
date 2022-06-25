import Head from "next/head";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";
import ContactUs from "../subComponent/contactUs";
import { useRouter } from 'next/router'

export default function Login({ banner }) {
  const router = useRouter()
  const [pathLogin, setPathLogin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState("member");

  useEffect(() => {
    if (showForm) {
      setPathLogin(showForm == "member" ? "member" : "store");
      setUsername("");
      setPassword("");
    }
  }, [showForm]);

  function onSigninClick() {
    if (username == "" || password == "") {
      Swal.fire({
        icon: "warning",
        position: "center",
        title: "กรุณากรอกข้อมูลให้ครบ",
      });
      return false;
    }
    let formLogin = { username, password };
    if (showForm == "member") {
      // login(formLogin,pathLogin);
      router.push("/member");
    }
    if (showForm == "store") {
      // login(formLogin,pathLogin);
      router.push("/store");
    }
  }

  async function login(formLogin, pathLogin) {
    try {
      const onLogin = await fetch(`${apiUrl}/${pathLogin}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formLogin),
      });
      const data = onLogin.json();
      //
      if (data.status) {
        setCookies("access_token", data.access_token);
        setCookies("refresh_token", data.refresh_token);
        await Swal.fire({
          title: response.description,
          icon: "success",
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false,
        });
        Router.push("/");
      } else {
        Swal.fire({
          title: response.description,
          icon: "error",
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    } catch (err) {}
  }

  return (
    <Fragment>
      <div>
        <div className="detil-login">
          <div className="img-background">
            <img className="img-left" src="/assets/images/man.png"  />
            <img className="img-right" src="/assets/images/woman.png"  />
          </div>
          <ContactUs />
          <div className="column-shadow">
            <div className="shadow-left" />
            <div className="shadow-right" />
          </div>
          <div className="column-login">
            <div className="column-img-top">
              <img src="/assets/images/sale.png"  />
            </div>
            <div className="column-text-login">
              <h2>เข้าสู่ระบบ</h2>
              <div className="box-column-login">
                <div className="menu-navbar" id="menu-navbar">
                  {showForm == "member" ? (
                    <>
                      <button
                        className="btn-navbar active"
                        onClick={() => setShowForm("member")}
                      >
                        สำหรับผู้ซื้อสินค้า
                      </button>
                      <button
                        className="btn-navbar "
                        onClick={() => setShowForm("store")}
                      >
                        สำหรับร้านค้า
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn-navbar "
                        onClick={() => setShowForm("member")}
                      >
                        สำหรับผู้ซื้อสินค้า
                      </button>
                      <button
                        className="btn-navbar active"
                        onClick={() => setShowForm("store")}
                      >
                        สำหรับร้านค้า
                      </button>
                    </>
                  )}
                </div>
                <div className="form-user-login active" id="user">
                  <div className="form">
                    <div className="label-top">
                      <div className="text-left">
                        ชื่อผู้ใช้ <p>(User)</p>
                      </div>
                      <div className="text-right">
                        (กรุณากรอกเป็นเบอร์โทรศัพท์)
                      </div>
                    </div>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      value={username}
                      placeholder="User Name"
                    />
                  </div>
                  <div className="form">
                    <div className="label-top">
                      <div className="text-left">
                        รหัสผ่าน <p>(Password)</p>
                      </div>
                      <div className="text-right">(กรุณากรอกเป็นไอดีไลน์)</div>
                    </div>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      value={password}
                      placeholder="User Name"
                    />
                    <a className="text-bottom">ลืมชื่อผู้ใช้ หรือ รหัสผ่าน</a>
                  </div>
                </div>
                <button onClick={() => onSigninClick()} className="btn-login">
                  เข้าระบบ
                </button>
              </div>
            </div>
            <h2>หรือ</h2>
            <p>
              หากคุณยังไม่มีบัญชีผู้ใช้ สามารถเข้าไปสมัครได้ที่ด้านล้างนี้เลย
            </p>
            {showForm == "member" ? (
              <Link href="/member/register">
                <button className="btn-menbar">สมัครสมาชิก</button>
              </Link>
            ) : (
              <Link href="/store/register">
                <button className="btn-menbar">สมัครร้านค้า</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
