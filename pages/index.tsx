import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SocialButtons from '../components/SocialButtons';
import Title from '../components/Title';
export default function FitScreen() {
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
					<Title />
					<SocialButtons />
				</div>
			</main>
		</div>
	);
}
