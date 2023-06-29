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
				<section className={`${utilStyles.headingMd} ${hobbyStyles.textsection}`}>
					<p>Hi. I'm Hayden Robbins, and I am a Programmer Engineer 1.</p>
					<p>Thanks for coming to my website! I hope you enjoy learning about Me.</p>
				</section>
				<div className={hobbyStyles.imagesection}/>
			</div>
		</Layout>
	);
}