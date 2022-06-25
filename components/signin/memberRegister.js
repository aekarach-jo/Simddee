import React, { Fragment, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import nextConfig from "../../next.config";
import { useRouter } from "next/router";
const apiUrl = nextConfig.apiPath;

export default function MemberRegister() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [packages, setPackage] = useState(0);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {}, []);

  function handleRegis() {
    if (username == "" || password == "" || confirmPassword == "") {
      Swal.fire({
        icon: "warning",
        position: "center",
        title: "กรุณากรอกข้อมูลให้ครบ",
      });
      return false;
    }

    if (password != confirmPassword) {
      Swal.fire({
        icon: "warning",
        position: "center",
        title: "รหัสผ่านไม่ตรงกัน",
      });
      return false;
    }
    if (packages == 0) {
      Swal.fire({
        icon: "warning",
        position: "center",
        title: "กรุณาเลือกแพ็กเกจ",
      });
      return false;
    }

    const formRegis = {
      username: username,
      password: password,
      packages: packages,
    };
    // register(formRegis);
  }

  const register = async (formRegis) => {
    try {
      const fetchRegis = await fetch(`${apiUrl}/member/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formRegis),
      });
      const resJson = fetchRegis.json();
      if (resJson.status == "ok") {
        Swal.fire({
          icon: "success",
          title: "บันทึกเรียบร้อย",
          position: "center",
          showConfirmButton: false,
          timer: 1000,
        }).then((res) => {
          localStorage.setItem("memberId", resJson.data.memberId); // เก็บ id ไว้ดึงข้อมูลในหน้า payment
        });
      } else {
        // alert error
      }
    } catch (err) {
    }

    // router.push('/member/payment')
  };

  function onClickCancel() {
    Swal.fire({
      icon: "warning",
      title: "ยกเลิกการสมัครหรือไม่",
      position: "center",
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      showConfirmButton: true,
      confirmButtonText: "ยืนยัน",
    }).then((res) => {
      if (res.isConfirmed) {
        router.push("/login");
      }
    });
  }

  return (
    <Fragment>
      <div>
        <div className="apply">
          <div className="column-apply">
            <div className="column-top-apply">
              <div className="column-left">
                <iframe
                  width={536}
                  height={300}
                  src="https://www.youtube.com/embed/CUfPYWtydgk"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="column-right">
                <h2>ข้อกำหนดการสมัครสมาชิก</h2>
                <h3>(ดู VDO ประกอบ)</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  fuga nulla accusantium eum quis facilis commodi maxime rerum
                  iste itaque repellendus consequatur, error assumenda quo nisi
                  ipsa suscipit consectetur quia. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Unde fuga nulla accusantium eum
                  quis facilis commodi maxime rerum iste itaque repellendus
                  consequatur, error assumenda quo nisi ipsa suscipit
                  consectetur quia. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Unde fuga nulla accusantium eum quis facilis
                  commodi maxime rerum iste itaque repellendus consequatur,
                  error assumenda quo nisi ipsa suscipit consectetur quia.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  fuga nulla accusantium eum quis facilis commodi maxime rerum
                  iste itaque repellendus consequatur, error assumenda quo nisi
                  ipsa suscipit consectetur quia.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  fuga nulla accusantium eum quis facilis commodi maxime rerum
                  iste itaque repellendus consequatur, error assumenda quo nisi
                  ipsa suscipit consectetur quia.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  fuga nulla accusantium eum quis facilis commodi maxime rerum
                  iste itaque repellendus consequatur, error assumenda quo nisi
                  ipsa suscipit consectetur quia. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Unde fuga nulla accusantium eum
                  quis facilis commodi maxime rerum iste itaque repellendus
                  consequatur, error assumenda quo nisi ipsa suscipit
                  consectetur quia.
                </p>
              </div>
            </div>
            <div className="column-center-apply">
              <div className="column-left">
                <div className="column-text-login">
                  <h2>กรอกข้อมูลผู้สมัคร</h2>
                  <div className="box-column-login">
                    <div className="form-user-login">
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
                          onChange={(e) => setUsername(e.target.value.trim())}
                          type="text"
                          placeholder="User Name"
                        />
                      </div>
                      <div className="form">
                        <div className="label-top">
                          <div className="text-left">
                            รหัสผ่าน <p>(Password)</p>
                          </div>
                          <div className="text-right">
                            (กรุณากรอกเป็นไอดีไลน์)
                          </div>
                        </div>
                        <input
                          onChange={(e) => setPassword(e.target.value.trim())}
                          type="password"
                          placeholder="************"
                        />
                      </div>
                      <div className="form">
                        <div className="label-top">
                          <div className="text-left">
                            ยืนยัน รหัสผ่าน<p>(Confirm Password)</p>
                          </div>
                          <div className="text-right">
                            (กรุณากรอกเป็นไอดีไลน์)
                          </div>
                        </div>
                        <input
                          onChange={(e) =>
                            setConfirmPassword(e.target.value.trim())
                          }
                          type="password"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-check">
                  <input
                    onClick={() => setIsRegister(true)}
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna felis id nulla eget. Sed donec faucibus enim in
                  </label>
                </div>
              </div>
              <div className="column-right">
                <h2>เลือกแพ็กเก็จ</h2>
                <div className="column">
                  <button
                    onClick={() => setPackage(1)}
                    className="column-detail"
                  >
                    <img src="/assets/images/product.png" />
                    <div className="text-line">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Assumenda, eos.
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => setPackage(2)}
                    className="column-detail"
                  >
                    <img src="/assets/images/product.png" />
                    <div className="text-line">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Assumenda, eos.
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => setPackage(3)}
                    className="column-detail"
                  >
                    <img src="/assets/images/product.png" />
                    <div className="text-line">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Assumenda, eos.
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="btn-column">
              {isRegister ? (
                <button onClick={() => handleRegis()} className="btn-left">
                  สมัครสมาชิก
                </button>
              ) : (
                <button
                  className="btn-left"
                  style={{ backgroundColor: "#e3e3e3", cursor: "not-allowed" }}
                >
                  สมัครสมาชิก
                </button>
              )}
              <button onClick={() => onClickCancel()} className="btn-right">
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
