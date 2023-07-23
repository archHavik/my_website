import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import careerStyles from '../styles/career.module.css'

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<div className = {careerStyles.container}>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<h1>My Career</h1>
				<div className={careerStyles.past}>
					<h3>Where I've Been</h3>
					<p> aslkdjfa asdlkfas dsadss ss dsds sds ds dfwefd
					</p>
				</div>
				<div className={careerStyles.past}>
					<h3>Where I am</h3>
					<p> aslkdjfa asdlkfas dsadss ss dsds sds ds dfwefd
					</p>
				</div>
				<div className={careerStyles.past}>
					<h3>Where I'm going</h3>
					<p> aslkdjfa asdlkfas dsadss ss dsds sds ds dfwefd
					</p>
				</div>
			</div>
		</Layout>
	)
}