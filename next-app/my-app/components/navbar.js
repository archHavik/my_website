import Head from 'next/head'
import styles from './layout.module.css'
//import utilStyles from '../styles/utils.module.css'
import navbarStyles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={navbarStyles.navBar}>
			<ul>
			  <li>Home</li>
			  <li>News</li>
			  <li>Contact</li>
			  <li>About</li>
			</ul>
    </div>
  )
}
