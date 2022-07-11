import styles from './MusicVideo.module.css';

export default function MusicVideo() {
	return (
		<iframe
			src="https://player.vimeo.com/video/501033487?h=2a169805a5&autoplay=1&loop=1&title=0&byline=0&muted=1"
			allow="autoplay"
			allowFullScreen={true}
			frameBorder="0"
			className={styles['music-video']}
		></iframe>
	);
}
