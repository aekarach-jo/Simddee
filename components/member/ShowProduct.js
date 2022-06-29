import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import ContactUs from "../subComponent/contactUs";

export default function ShowProduct({ product, store }) {
  const productList = product;
  const storeList = store;
  useEffect(() => {

  }, []);

  return (
    <Fragment>
      <Head>
        <title>FillFin</title>
      </Head>
      <div>
        <div className="product">
          <ContactUs />
          <div className="col-product">
            <div className="column-left">
              <h2>สินค้าแนะนำ</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <div className="column-product-recommend">
                {productList?.map((data, index) => (
                  <Fragment key={index}>
                    <Link href={`/member/store/${data.product_code}`}>
                      <div className="recommend-column">
                        <Image
                            src="/assets/images/product.png" // {data.product_img[0]}
                            style={{ cursor: "pointer" }}
                          width={170}
                          height={170}
                          alt="image-product"
                        />
                        <div className="column-img-bottom">
                          <Image
                            src="/assets/images/product.png"  // {data.product_img[0]}
                            style={{ cursor: "pointer" }}
                            width={35}
                            height={35}
                            alt="image-product"
                          />
                          <Image
                            src="/assets/images/product.png"  // {data.product_img[1]}
                            style={{ cursor: "pointer" }}
                            width={35}
                            height={35}
                            alt="image-product"
                          />
                        </div>
                        <div className="column-text-bottom">
                          <h4>{data.name_product}</h4>
                          <p>{data.content_product}</p>
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
                {storeList?.map((data, index) => (
                  <div key={index} className="column">
                    <Link href={`/member/store/${data.store_code}`}>
                      <div>
                        <div
                          className="column-top"
                          style={{ cursor: "pointer" }}
                        >
                          <Image
                            src="/assets/images/product.png" // src={data.store_profile}
                            style={{ cursor: "pointer" }}
                            width={50}
                            height={50}
                            alt="store_profile"
                          />
                          <p>{data.store_name}</p>
                        </div>
                        <div
                          className="column-center"
                          style={{ cursor: "pointer" }}
                        >
                          <Image
                            src="/assets/images/product.png" //src={data.product_img}
                            style={{ cursor: "pointer" }}
                            width={170}
                            height={170}
                            alt="product_img"
                          />
                          <p>{data.content_product}</p>
                        </div>
                      </div>
                    </Link>
                    <div className="column-bottom">
                      <button>
                        <i className="fa-regular fa-clock" />
                        {data.price}
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
