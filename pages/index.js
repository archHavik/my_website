import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Date from '../components/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/home.module.css'
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

function Dustcloud() {
	
	const[show, setShow] = useState(false);
	const refRef = useRef(null);
	
	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
		
		const botPos = window.scrollY + window.innerHeight;

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;

			// Element scrolled above
			if (botPos > scrollPos) {				
				setShow(true);
			}
			// Scrolled to or past
			else if (botPos <= scrollPos) {
				setShow(false);
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
		
	return(
		<Div animate={show} ref={refRef} className={homeStyles.dustcloud}>
			<Image
				id='dustcloud'
				src="/images/dustcloud.png"
				width={450}
				height={350}
			/>
		</Div>
	);
}

const Div = styled.div`
	opacity: ${({ animate }) => animate ? 1 : 0};
	transition: opacity .5s;
	`;

export default function Home() {

	return (
		<Layout home>
			<div className={homeStyles.container}>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<div className={homeStyles.starsection}>
					<h2 className={`${utilStyles.headingLg} ${utilStyles.horizCenter}`}>Visit my other pages to find out more about me!</h2>
					<br/><br/><br/>
					<div className={`${homeStyles.imagesection}  ${homeStyles.textsection}`}>
						<section className={utilStyles.headingMd}>
							<ul>
								<li>Learner: If I don't know something, I know where I can find answers, and I learn very quickly!</li>
								<li>Physical hardware: I have built my own PC, and have experience with server and networking racks. I also dabble with electronics as one of my hobbies.</li>
								<li>Red teaming: Although I'm still learning the basics, I'm getting familiar with general topics, and I can run most basic scripts like nmap and gobuster.</li>
								<li>Systems Administration: I'm very familiar and comfortable with LAMP stacks, *nux and windows, and general network and security.</li>
								<li>Programming: Obviously I can handle html, javascript, and css (This website is built with nextjs). I also know python, java, and c/c++/c#.</li>
							</ul>
							<h2 className={`${utilStyles.headingLg} ${utilStyles.horizCenter}`}>What are my skillsets?</h2>
						</section>
					</div>
					<section className={`${utilStyles.headingMd} ${homeStyles.textsection}`}>
						<ul>
							<li>Lover: Spending time with my wife and family is what I dedicate my life to, and I hope to have kids one day.</li>
							<li>Worker: I believe in doing a job efficiently, and correctly. You can count on me to get it done right!</li>
							<li>Believer: I'm a religious man. I"m a member of the church of Jesus Christ of Latter Day Saints.</li>
							<li>Hobbyist: I spend a lot of my free time tinkering with technology. I do everything from building PC's to small motor repair to robotics.</li>
							<li>Hacker: I'm majoring in Cybersecurity at SUU, and I hope to build a career on that very thing.</li>
							<li>Student: I currently attend Southern Utah University.</li>
						</ul>
						<h2 className={utilStyles.headingLg}>Who am I?</h2>
					</section>
				</div>
				<div className={`${homeStyles.imagesection} ${homeStyles.textsection}`}>
					<section className={utilStyles.headingMd}>
						<p>Hi! I'm Hayden Robbins, and I'm a full stack developer/hacker/hobbyist. Thanks for visiting my webpage! I hope you enjoy learning about me.
						</p>
					</section>
				</div>
				<div className={homeStyles.imagesection}>
					<section className={`${utilStyles.headingMd} ${homeStyles.textsection}`}>
						<h2 className={utilStyles.headingLg}>Welcome! Explore?</h2>
					</section>
					<Image className={homeStyles.cloud2}
						src="/images/cloud1.png"
						width={200}
						height={150}
					/>
					<Image className={homeStyles.flame}
						src="/images/flames.gif"
						width={75}
						height={150}
					/>
					<div className={homeStyles.ground}/>
					<Image className={homeStyles.launchpad}
						src="/images/launchpad.png"
						width={350}
						height={350}
					/>					
					<Image className={homeStyles.spaceship}
						src="/images/Spaceship.png"
						width={40}
						height={200}
					/>
					<Image className={homeStyles.cloud1}
						src="/images/cloud1.png"
						width={200}
						height={150}
					/>
					<Image className={homeStyles.cloud3}
						src="/images/cloud1.png"
						width={200}
						height={150}
					/>
					<Image className={homeStyles.cloud4}
						src="/images/cloud1.png"
						width={200}
						height={150}
					/>
					<Image className={homeStyles.cloud5}
						src="/images/cloud1.png"
						width={200}
						height={150}
					/>
					<Image className={homeStyles.cloud6}
						src="/images/cloud1.png"
						width={200}
						height={150}
					/>
					<Image className={homeStyles.cloud7}
						src="/images/cloud1.png"
						width={200}
						height={150}
					/>
					<Dustcloud />					
				</div>
			</div>			
		</Layout>
	)
}