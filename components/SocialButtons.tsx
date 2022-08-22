import styles from './SocialButtons.module.css';
import { SocialIcon } from 'react-social-icons';
import { useRef, useState } from 'react';

function TiberIcon(props: any) {
	const [fgColor, setFgColor] = useState('#fff');
	const [bgColor, setBgColor] = useState('transparent');

	const onEnter = () => {
		setFgColor('#000');
		setBgColor('#fff');
	};

	const onLeave = () => {
		setFgColor('#fff');
		setBgColor('transparent');
	};

	return (
		<SocialIcon
			{...props}
			bgColor={bgColor}
			fgColor={fgColor}
			onMouseEnter={onEnter}
			onMouseLeave={onLeave}
		/>
	);
}

type SocialButtonsProps = {
	[rest: string]: any;
};

export default function SocialButtons({ ...rest }: SocialButtonsProps) {
	const ref = useRef<HTMLDivElement>();

	return (
		<div className={styles['social-buttons']} ref={ref} {...rest}>
			<TiberIcon url="https://open.spotify.com/artist/1FHDMgGdmIP4IsoFkAwbS0" />
			<TiberIcon url="https://www.instagram.com/rivertiber" />
			<TiberIcon url="https://twitter.com/rivertiber" />
			<TiberIcon url="mailto:bookings@rivertiber.com" />
		</div>
	);
}
