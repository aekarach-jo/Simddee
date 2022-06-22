import  Router  from 'next/router';
import React, { Fragment, useState } from 'react'

export default function Index() {
    const [men, setMen] = useState('men')
    const [women, setWomen] = useState('women')

    function setGender(gender) {
        console.log(gender);
        localStorage.setItem("gender", gender)
        Router.push('/login')
    }

    return (
        <Fragment>
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-info' onClick={() => setGender(men)}> ผู้ชาย</button>
                    </div>
                    <div className="col">
                        <button className='btn btn-warning' onClick={() => setGender(women)}> ผู้หญิง</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
