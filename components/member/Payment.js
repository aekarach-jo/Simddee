import React, { Fragment, useEffect, useRef, useState } from "react";
import nextConfig from "../../next.config";
import FormData from "form-data";
import Swal from "sweetalert2";
import Image from "next/image";
import ContactUs from "../subComponent/contactUs";
import { getCookie } from "cookies-next";

const apiUrl = nextConfig.apiPath;

export default function Payment() {
  let formData = new FormData();
  const inputImage = useRef(null);
  const [image, setImage] = useState(null);

  const [bankList, setBankList] = useState([]);
  const [bank, setBank] = useState("");

  const [isLoadSuccess, setIsLoadSuccess] = useState(false);

  const [toggleShowPass, setSoggleShowPass] = useState(true);

  const [packageData, setpackageData] = useState([]);
  const [member, setMember] = useState([])

  useEffect(() => {
    apiGetMember(),
      apiGetpackage()
  }, []);

  function clickTest() {
    console.log(members)
  }

  async function apiGetMember() {
    try {
      const mcode = getCookie("member_code")
      const access_token = getCookie("access_token")
      const getMember = await fetch(`${apiUrl}/member/get/${mcode}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      const memberJson = await getMember.json()
      setMember(memberJson.data)
    }
    catch (err) {
    }
  }

  async function apiGetpackage() {
    try {
      const mcode = getCookie("member_code")
      const getPackage = await fetch(`${apiUrl}/package/getOrder/${mcode}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const packageJson = await getPackage.json()
      setpackageData(packageJson.data)
    }
    catch (err) {
      console.log(err);
    }

  }


  function handleSendClick() {
    formData.append("image", image);

    if (bank == "") {
      Swal.fire({
        icon: "warning",
        title: "กรุณาเลือกบัญชี",
      });
      return false;
    }
    if (!image) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาอัฟโหลดสลิป",
      });
      return false;
    }

    // payment(formPayment)
  }

  function inputImageOnChange(e) {
    if (
      ["image/jpeg", "iamge/jpg", "image/png"].includes(e.target.files[0].type)
    ) {
      const URLs = URL.createObjectURL(e.target.files[0]);
      setImage(URLs);
    } else {
      Swal.fire({
        title: "กรุณาอัฟโหลดเฉพาะไฟล์รูปภาพ",
        icon: "warning",
        position: "center",
      });
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
        id: "1",
        names: "SCB Siam Commercial Bank / 0000000000 / Mr.Fillfin Thailand",
      },
      {
        id: "2",
        names: "KTB Siam Commercial Bank / 0000000000 / Mr.Fillfin Thailand",
      },
    ];
    setBankList(formTest);

    getMemberId();
    setTimeout(() => setIsLoadSuccess(true), 2000);
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
  };

  return (
    <Fragment>
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
                  <tr>
                    <td>แพ็กเก็จ {packageData.name}</td>
                    <td className="td-right">{packageData.price} BTH</td>
                  </tr>
                  <tr>
                    <td>
                      ระยะเวลาสมาชิกแพ็กเก็จ {packageData.name}
                      ({packageData.day} วัน)
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td>รวมทั้งหมด</td>
                    <td>{packageData.price} BTH</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column-detail-member">
              <h2>ข้อมูลผู้สมัครสมาชิก</h2>
              <div className="text-column">
                <div className="column-left">
                  <p>
                    ชื่อผู้ใช้<span>(User)</span>
                  </p>
                  <p>{member.username}</p>
                </div>
                <div className="column-right">
                  <p>
                    รหัสผ่าน<span>(Password)</span>
                  </p>
                  {toggleShowPass ? (
                    <p>
                      ***********
                      <button>
                        <i
                          onClick={() => setSoggleShowPass(false)}
                          className="fa-solid fa-eye"
                        />
                      </button>
                    </p>
                  ) : (
                    <p>
                      {member.password}
                      <button>
                        <i
                          onClick={() => setSoggleShowPass(true)}
                          className="fa-solid fa-eye"
                        />
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="column-pay-subscription">
              <h2>ชำระค่าสมัครสมาชิก</h2>
              <div className="column-pay">
                <select onChange={(e) => setBank(e.target.value)}>
                  <option value="">กรุณาเลือกข้อมูล</option>
                  {bankList?.map((data, index) => (
                    <option key={index} value={data.id}>
                      {data.names}
                    </option>
                  ))}
                </select>
                <div className="column-img-pay">
                  <div
                    className="column-left"
                    style={{ height: "300px", width: "250px" }}
                  >
                    {image ? (
                      <Image
                        src={image}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <i className="fa-solid fa-image" />
                    )}
                    <input
                      style={{ display: "none" }}
                      type="file"
                      accept=".jpeg,.jpg,.png"
                      ref={inputImage}
                      onChange={(e) => inputImageOnChange(e)}
                    />
                  </div>
                  <div className="column-right">
                    <h3>อัฟโหลดสลิป</h3>
                    <p>ขนาดอัฟโหลดไฟล์ภาพ ไม่เกิน 5 Mb</p>
                    <button onClick={() => inputImage.current.click()}>
                      อัฟโหลด
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-bottom">
              {isLoadSuccess ? (
                <button onClick={() => handleSendClick()} className="btn-out">
                  ส่ง
                </button>
              ) : (
                <p>กำลังโหลดข้อมูล</p>
              )}
            </div>
            <button onClick={() => clickTest()}>Test</button>
          </div>
          <ContactUs />
        </div>
      </div>
    </Fragment>
  );
}
