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
			<div className={hobbyStyles.container}>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<div>
					<h2 className={`${utilStyles.headingLg} ${utilStyles.horizCenter}`}>Here are some of my hobbies:</h2>
					<section className={`${hobbyStyles.textsection}`}>
						<h3>Bowling</h3>
					</section>
				</div>
			</div>
		</Layout>
	);
}