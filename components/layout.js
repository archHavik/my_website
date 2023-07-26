import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import Navbar from './navbar.js'

const name = 'Hayden Robbins'
export const siteTitle = 'HRobbinsweb'

export default function Layout({ children, color }) {
  return (
    <div>
      <Head>
        <Link rel="icon" href="/images/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <header className={styles.header}>
			<Navbar color>
			</Navbar>
      </header>
    	<div>
			<main>{children}</main>
		</div>
    </div>
  )
}
