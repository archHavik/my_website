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
					<p> I started working with computers at about the age of 12, when my Dad got me interested in programming with Python. I've loved working with computers ever since. In High School I competed in the VEX Robotics competition, and actually made it to Nationals. We weren't able to go because of COVID. During High School I also attended Bridgerland Technical College and earned a 900 hour certificate in Information Technology. Along the way I completed the CompTIA A+, Network+, and Security+ certificates. I have also completed several other certificates including Splunk's Certified Power User, HAM Radio technician license, Microsoft Office 2016 Suite certified user, and several Testout certifications. I attended my first Cybersecurity competition in my Junior year of High School, and since have competed in about 10 different competitions. My latest competition was in April of 2023. At this competition, my team at SUU made it to nationals! We will be going to Chicago in September to compete in the national competition.
					</p>
				</div>
				<Image
					src="/images/arrow2.png"
					width={100}
					height={200}
				/>
				<div className={careerStyles.past}>
					<h3>Where I am</h3>
					<p> Right now I am attending Southern Utah University studying Cybersecurity. I have about 2 years until I graduate. I currently work at Hill Air Force Base for the Air Force as a Cybersecurity intern. I am enjoying serving my country as a civilian and being able to put my skills to good use. I am also slowly but surely studying for the OSCP certificate, and I hope to get that before I graduate.
					</p>
				</div>
				<Image
					src="/images/arrow2.png"
					width={100}
					height={200}
				/>
				<div className={careerStyles.past}>
					<h3>Where I'm going</h3>
					<p> My projected graduation date is in Spring of 2025! After that I plan on jumping right in to the Cybersecurity field. I have a dream of joining the NSA, FBI, or CIA. I have also thought about working on similar projects to what I'm doing right now at HAFB. I've always loved tanks, and I would love to work on the M1 Abrams project.
					</p>
				</div>
			</div>
		</Layout>
	)
}