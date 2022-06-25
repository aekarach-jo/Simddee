import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import ContactUs from "../subComponent/ContactUs";

export default function ShowProduct({ product, store }) {
  const productList = product.data;
  const storeList = store.data;
  useEffect(() => {}, []);

  async function showRecommended() {
    const formProduct = [
      {
        id: 1,
        productName: "image1",
        description: "น้อน 1",
        price: 1000,
      },
      {
        id: 2,
        productName: "image2",
        description: "น้อน 2",
        price: 2000,
      },
      {
        id: 3,
        productName: "image3",
        description: "น้อน 3",
        price: 3000,
      },
      {
        id: 4,
        productName: "image4",
        description: "น้อน 4",
        price: 4000,
      },
      {
        id: 5,
        productName: "image5",
        description: "น้อน 5",
        price: 5000,
      },
      {
        id: 6,
        productName: "image6",
        description: "น้อน 6",
        price: 6000,
      },
    ];
    setProductRecommend(formProduct);
  }
  async function showAllStore() {
    const formStore = [
      // รอชุดข้อมูล
      {
        id: 1,
        storeName: "ร้านส้ม 1",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "กลิ่นรุนแรงแสบจมูก",
      },
      {
        id: 2,
        storeName: "ร้านส้ม 2",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "ใช้ซ้ำไม่ซัก 7 วัน!!",
      },
      {
        id: 3,
        storeName: "ร้านส้ม 3",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "ละมุน กลิ่นอ่อนๆ",
      },
      {
        id: 4,
        storeName: "ร้านส้ม 4",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "ของคนแก่ รับรอง...",
      },
      {
        id: 5,
        storeName: "ร้านส้ม 5",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "กลิ่นดี มีแถมหมออ้อย",
      },
      {
        id: 6,
        storeName: "ร้านส้ม 6",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "กลิ่นรุนแรงแสบจมูก",
      },
      {
        id: 7,
        storeName: "ร้านส้ม 7",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "กลิ่นรุนแรงแสบจมูก",
      },
      {
        id: 8,
        storeName: "ร้านส้ม 8",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "กลิ่นรุนแรงแสบจมูก",
      },
      {
        id: 9,
        storeName: "ร้านส้ม 9",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "กลิ่นรุนแรงแสบจมูก",
      },
      {
        id: 10,
        storeName: "ร้านส้ม 10",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "กลิ่นรุนแรงแสบจมูก",
      },
      {
        id: 11,
        storeName: "ร้านส้ม 11",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "กลิ่นรุนแรงแสบจมูก",
      },
      {
        id: 12,
        storeName: "ร้านส้ม 12",
        image: ["image1", "image2"],
        thumbnail: ["image1", "image2"],
        description: "กลิ่นรุนแรงแสบจมูก",
      },
    ];
    setStoreList(formStore);
  }

  return (
    <Fragment>
      <Head>
        <title>FillFin</title>
        <link rel="stylesheet" href="/assets/css/global.min.css" />
        <link rel="stylesheet" href="/assets/css/product.min.css" />
      </Head>
      <div>
        <div className="product">
          <ContactUs />
          <div className="col-product">
            <div className="column-left">
              <h2>สินค้าแนะนำ</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <div className="column-product-recommend">
                {productList.map((data, index) => (
                  <Fragment key={index}>
                    <Link href={`/member/store/product/${data.id}`}>
                      <div className="recommend-column">
                        <Image
                          src={data.avatar}
                          style={{ cursor: "pointer" }}
                          width={170}
                          height={170}
                        />
                        <div className="column-img-bottom">
                          <Image
                            src="/assets/images/product.png"
                            style={{ cursor: "pointer" }}
                            width={35}
                            height={35}
                          />
                          <Image
                            src="/assets/images/product.png"
                            style={{ cursor: "pointer" }}
                            width={35}
                            height={35}
                          />
                        </div>
                        <div className="column-text-bottom">
                          <h4>{data.first_name}</h4>
                          <p>{data.last_name}</p>
                          <button>
                            <i className="fa-solid fa-cart-shopping " />
                            {data.price}
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="column-right">
              <div className="text-column-top">
                <h2>WOMEN</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              <form className="search">
                <input type="text" placeholder="ค้นหาชื่อร้าน" name="search" />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
              <div className="column-product">
                {storeList.map((data, index) => (
                  <div key={index} className="column">
                    <Link href={`/member/store/${data.id}`}>
                      <div>
                        <div
                          className="column-top"
                          style={{ cursor: "pointer" }}
                        >
                          <Image
                            src={data.avatar}
                            style={{ cursor: "pointer" }}
                            width={50}
                            height={50}
                          />
                          <p>{data.first_name}</p>
                        </div>
                        <div
                          className="column-center"
                          style={{ cursor: "pointer" }}
                        >
                          <Image
                            src={data.avatar}
                            style={{ cursor: "pointer" }}
                            width={170}
                            height={170}
                          />
                          <p>{data.last_name}</p>
                        </div>
                      </div>
                    </Link>
                    <div className="column-bottom">
                      <button>
                        <i className="fa-regular fa-clock" />
                        สั่งจองเท่านั้น 99,999 รายการ
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                <button>
                  <i className="fa-solid fa-angle-left" />
                </button>
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#" className="center">
                  ...
                </a>
                <a href="#">7</a>
                <a href="#">8</a>
                <a href="#">9</a>
                <a href="#">10</a>
                <button>
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
