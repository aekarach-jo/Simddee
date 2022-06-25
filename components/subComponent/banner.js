import React, { Fragment } from 'react'

export default function Banner({ data }) {
    return (
        <Fragment>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="/assets/images/sale.png"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="/assets/images/sale.png"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="/assets/images/sale.png"/>
                    </div>
                </div>
                <div className="swiper-pagination" />
            </div>
        </Fragment>
    )
}
