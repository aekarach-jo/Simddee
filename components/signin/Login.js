import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";
import ContactUs from "../subComponent/contactUs";
import { useRouter } from "next/router";
import Image from "next/image";
import nextConfig from "../../next.config";
import { setCookies } from "cookies-next";

export default function Login({ banner }) {
  const apiUrl = nextConfig.apiPath
  const router = useRouter();
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
    const formLogin = { username, password };
    login(formLogin, pathLogin);
  }

  async function onCheckPackage(member_code, access_token) {
    const getPackage = await fetch(`${apiUrl}/package/getOrder/${member_code}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    const data = await getPackage.json()
    const status_payment = data.data.status_payment
    console.log(data.data)
    console.log(status_payment)

    if(status_payment == "pending"){
      router.push(`/member/payment`)
    }
    else{
      router.push(`/member`)
    }
    
  }

  async function login(formLogin, pathLogin) {
    console.log(apiUrl + "/" + pathLogin);
    try {
      const onLogin = await fetch(`${apiUrl}/${pathLogin}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formLogin),
      });
      const data = await onLogin.json();
      if (data.status) {
        console.log(data);
        setCookies("access_token", data.data.access_token);
        setCookies("refresh_token", data.data.refresh_token);
        setCookies("member_code", data.data.member_code);

        Swal.fire({
          title: data.description,
          icon: "success",
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => { 
          if(data.data.member_code){
            onCheckPackage(data.data.member_code, data.data.access_token);
          }
        })

      } else {
        await Swal.fire({
          title: response.description,
          icon: "error",
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    } catch (err) { }
  }

  return (
    <Fragment>
      <div>
        <div className="detil-login">
          <div className="img-background">
            <Image
              width={404}
              height={1050}
              alt="image-gender"
              className="img-left"
              src="/assets/images/man.png"
              layout="fixed"
            />
            <Image
              width={404}
              height={1050}
              alt="image-gender"
              className="img-right"
              src="/assets/images/woman.png"
              layout="fixed"
            />
          </div>
          <ContactUs />
          <div className="column-shadow">
            <div className="shadow-left" />
            <div className="shadow-right" />
          </div>
          <div className="column-login">
            <div className="column-img-top">
              <Image width={1096} height={300} src="/assets/images/sale.png" alt="image-banner" />
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
                      type="text"
                      value={username}
                      placeholder="User Name"
                      onChange={(e) => {
                        // if (
                        //   /^[0-9]+$/.test(
                        //     e.target.value.trim() || e.target.value == ""
                        //   )
                        // ) {
                        setUsername(e.target.value.trim());
                        // }
                      }}
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
