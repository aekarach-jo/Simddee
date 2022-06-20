import { Fragment } from 'react'
import styles from '../../../styles/layouts/nav.module.scss'

export default function Nav() {

  return (
    <Fragment>
      <nav className="navbar sticky-top bg-pink-400 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">FILLFIN</a>
        </div>
      </nav>
    </Fragment>
  )
}
