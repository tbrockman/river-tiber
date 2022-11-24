import Image from 'next/image';
import RiverTiberLogo from '../static/river-tiber-logo.svg';

export default function Title() {
	return (
		<div style={{ maxWidth: '50ch', textAlign: 'center' }}>
			<Image src={RiverTiberLogo} alt="dreaming eyes" />
		</div>
	);
}
