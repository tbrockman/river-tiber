import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MusicVideo from '../components/MusicVideo';
import SocialButtons from '../components/SocialButtons';
import { useState } from 'react';

function FakeHeader({ socialButtonsHeight }) {
	return (
		<div
			style={{
				minHeight: socialButtonsHeight,
				maxHeight: socialButtonsHeight,
				margin: '2rem 0',
			}}
		></div>
	);
}

export default function FitScreen() {
	const [socialButtonsHeight, setSocialButtonsHeight] = useState(0);

	return (
		<div className={styles.app}>
			<Head>
				<title>river tiber</title>
				<meta
					name="description"
					content="canadian singer, songwriter, multi-instrumentalist and record producer. 👁👁"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.content}>
					<FakeHeader socialButtonsHeight={socialButtonsHeight} />
					<MusicVideo />
					<SocialButtons
						setSocialButtonsHeight={setSocialButtonsHeight}
					/>
				</div>
			</main>
		</div>
	);
}
