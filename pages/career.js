import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Date from '../components/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/home.module.css'

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
		</Layout>
	)
}