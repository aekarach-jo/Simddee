import { Tab } from '@headlessui/react';
import { data } from 'autoprefixer';
import { setCookies } from 'cookies-next';
import Link from 'next/link';
import { Router } from 'next/router';
import React, { Fragment, useRef, useState } from 'react'
import Swal from 'sweetalert2';
import nextConfig from '../../next.config'

const apiUrl = nextConfig.apiPath;

export default function Login() {
  const [permission, setPermission] = useState()
  const username = useRef()
  const password = useRef()


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function signin() {
    let formLogin = {
      username: username.current.value,
      password: password.current.value,
    }
    console.log("formLogin : ",formLogin);
    console.log("path : ",permission);
    // Login(formLogin);
  }

  const Login = async (param) => {
    const onLogin = await fetch(`${apiUrl}/${permission}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    })
    const response = await onLogin.json();
    if (response.status) {
      setCookies('access_token', data.data.access_token)
      setCookies('refresh_token', data.data.refresh_token)
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

  return (
    <Fragment>
      <div className=" w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            } onChange={() => setPermission("userLogin")}>
              <p>1</p>
            </Tab>
            <Tab className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            } onChange={() => setPermission("shopLogin")}>
              <p>2</p>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className=" bg-white flex flex-col space-y-10 justify-center items-center">
                <div className="bg-white w-96 shadow-xl rounded p-5">
                  <h1 className="text-3xl font-medium">สำหรับผู้ซื้อสินค้า</h1>
                  <form className="space-y-5 mt-5">
                    <input ref={username} type="text" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="username" />
                    <div className="w-full flex items-center border border-gray-800 rounded px-3">
                      <input ref={password} type="password" className="w-4/5 h-12" placeholder="Password" />
                      <span className="text-blue-700 hover:bg-blue-400 rounded-md px-3">Show</span>
                    </div>
                    <div >
                      <a href="#!" className="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">Forgot Password ?</a>
                    </div>
                    <button type='button' onClick={signin} className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">Login</button>
                  </form>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className=" bg-white flex flex-col space-y-10 justify-center items-center">
                <div className="bg-white w-96 shadow-xl rounded p-5">
                  <h1 className="text-3xl font-medium">สำหรับร้านค้า</h1>
                  <form className="space-y-5 mt-5">
                    <input ref={username} type="text" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="username" />
                    <div className="w-full flex items-center border border-gray-800 rounded px-3">
                      <input ref={password} type="password" className="w-4/5 h-12" placeholder="Password" />
                      <span className="text-blue-700 hover:bg-blue-400 rounded-md px-3">Show</span>
                    </div>
                    <div>
                      <a href="#!" className="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">Forgot Password ?</a>
                    </div>
                    <button type='button' onClick={signin} className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">Login</button>
                  </form>
                </div>
              </div>
            </Tab.Panel>
            <Link href={{ pathname: `/register` }}>
              <button className='btn btn-danger'>สมัครสมาชิก</button>
            </Link>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Fragment>
  )
}
