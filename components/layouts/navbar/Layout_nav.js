import Link from 'next/link'
import { Fragment } from 'react'
import styles from '../../../styles/layouts/nav.module.scss'

export default function Nav() {

  return (
    <Fragment>

    <nav className={`${styles.nav_bg} navbar navbar-light bg-light`}>
        <div className="container-fluid">
          <a className="navbar-brand">FILLFIN</a>
          <form className="d-flex ">
            <Link href='/login'>
            <button className=" btn-xs btn-dark rounded-pill me-md-2 h-6 w-32 text-sm" type="submit">เข้าสู่ระบบ</button>
            </Link>
            <button className=" btn-light rounded-pill h-6 w-32 text-sm  me-md-2" type="submit">สมัครร้านค้า</button>
            <img className='text-white' src="https://img.icons8.com/ios-glyphs/30/favorite-cart.png" alt="" />
          </form>
        </div>
      </nav>
    </Fragment>
  )
}
