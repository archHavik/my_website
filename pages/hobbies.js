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
					<h2 className={`${utilStyles.headingLg} ${utilStyles.horizCenter}`}>Hobbies</h2>
					<section className={`${hobbyStyles.textsection} ${hobbyStyles.tech}`}>
						<Image
							src="/images/car.jpg"
							width={1200}
							height={600}
						/>
						<div>
							<h3>Technology</h3>
							<p>I love technology. Anything from cars to electronics to robotics to aeronautics, I love learning about, building, repairing, and breaking technology. I have taken apart things to learn about them for as long as I can remember, and I am always excited to learn more about everything that drives technology in our world.
							</p>
						</div>
					</section>
					<section className={`${hobbyStyles.textsection} ${hobbyStyles.shooting}`}>
						<h3>Long Range Shooting</h3>
						<p>In 2019 I custom built my own AR-10 chambered in 6.5 creedmoor. I am working on getting my groupings smaller and smaller. I have theoretical knowledge of shooting, but have never actually shot past about 400 yards. I am excited to spend more time learning and actually shooting in the future.
						</p>
					</section>
					<section className={`${hobbyStyles.textsection} ${hobbyStyles.bowling}`}>
						<div>
							<h3>Bowling</h3>
							<p>I have been practicing bowling for about 6 months now, and I enjoy playing in my spare time. I usually make it to the alley once or twice a week, and am competing in a league! My current top score is 228.
							</p>
						</div>
						<Image
							src="/images/bowling.avif"
							width={700}
							height={625}
						/>
					</section>
					<section className={`${hobbyStyles.textsection} ${hobbyStyles.mil}`}>
						<Image
							src="/images/spliced1.png"
							width={1000}
							height={800}
						/>
						<div>
							<h3>Military vehicles/history</h3>
							<p>I love learning about military vehicles. I know most about tanks and armor from WW2, but love learning about any type of vehicle. I have built scale models of vehicles for about 10 years now, and enjoy working on them in free time.
							</p>
						</div>
					</section>
					<section className={`${hobbyStyles.textsection} ${hobbyStyles.airsoft}`}>
						<h3>Airsoft</h3>
						<p>This is probably my most recent hobby. Airsoft is fun with a group of friends, and it's fun to build and mod airsoft rifles. I'm still learning about it, and die more often then not, but I have a lot of fun!
						</p>
					</section>
				</div>
			</div>
		</Layout>
	);
}