import { Fragment, useState } from "react";
import { Modal } from '@mantine/core';

function Image(props) {

	const [opened, setOpened] = useState(false);

	const imageClickHandler = () => {
		setOpened(true)
	}

	return (
		<Fragment>
			<Modal size="min(120vh, 85vw)" opened={opened} onClose={() => setOpened(false)} title="Image Response">
				<img style={{height: "100%", width: "100%", objectFit: "contain"}} src={props.src} alt={props.alt} />
			</Modal>
			<img style={{cursor: "pointer"}} onClick={imageClickHandler} className={props.className} src={props.src} alt={props.alt} />
		</Fragment>
	);
}

export default Image;