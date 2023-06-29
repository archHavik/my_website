import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Date from '../components/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import hobbyStyles from '../styles/hobbies.module.css'

export default function hobbies() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>			
		</Layout>
	)
}