import styles from './SocialButtons.module.css';
import { SocialIcon } from 'react-social-icons';
import { useEffect, useRef, useState } from 'react';

function TiberIcon(props: any) {
	const [fgColor, setFgColor] = useState('#fff');
	const [bgColor, setBgColor] = useState('#000');

	const onEnter = () => {
		setFgColor('#000');
		setBgColor('#fff');
	};

	const onLeave = () => {
		setFgColor('#fff');
		setBgColor('#000');
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
	setSocialButtonsHeight?: (height: number) => any;
	[rest: string]: any;
};

export default function SocialButtons({
	setSocialButtonsHeight,
	...rest
}: SocialButtonsProps) {
	const ref = useRef<HTMLDivElement>();

	useEffect(() => {
		if (ref.current && setSocialButtonsHeight) {
			setSocialButtonsHeight(ref.current.offsetHeight);
		}
	}, [setSocialButtonsHeight]);

	return (
		<div className={styles['social-buttons']} ref={ref} {...rest}>
			<TiberIcon url="https://open.spotify.com/artist/1FHDMgGdmIP4IsoFkAwbS0"></TiberIcon>
			<TiberIcon url="https://www.instagram.com/rivertiber"></TiberIcon>
			<TiberIcon url="https://twitter.com/rivertiber"></TiberIcon>
			<TiberIcon url="mailto:bookings@rivertiber.com"></TiberIcon>
		</div>
	);
}
