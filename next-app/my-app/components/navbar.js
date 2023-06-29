import Head from 'next/head'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import navbarStyles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar({color}) {
  return (
    <div className={navbarStyles.navBar}>
			<ul>
			  <Link href="/"><li>Home</li></Link>
			  <Link href="hobbies"><li>Hobbies</li></Link>
			  <Link href="career"><li>Career</li></Link>
			  <Link href="family"><li>Family</li></Link>
			</ul>
    </div>
  )
}
