import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (

    <Layout home>
			<script id="scroll-bottom">
				{`$(document).ready(function() {window.scrollTo(0, document.body.scrollHeight);})`}
			</script>
      <Head>
        <title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hi. I am Hayden Robbins, and I am a Programmer Engineer 1.</p>
				<p>Thanks for coming to my website! I hope you enjoy learning about Me.</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Welcome! Explore?</h2>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
/*
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
					<li className={utilStyles.listItem} key={id}>
					  <Link href={`/posts/${id}`}>
    					<a>{title}</a>
					  </Link>
					  <br />
					  <small className={utilStyles.lightText}>
					    <Date dateString={date} />
				  </small>
					</li>
					))}
				</ul>
				*/
