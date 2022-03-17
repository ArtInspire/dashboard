import { Fragment, useState } from "react";
import { Modal } from '@mantine/core';
import '../Post/PostDetail.css'

function Image(props) {

	const [opened, setOpened] = useState(false);

	const imageClickHandler = () => {
		setOpened(true)
	}

	return (
		<Fragment>
			{/* size="max(70vh, 85vw)" */}
			<Modal className="image-modal" opened={opened} onClose={() => setOpened(false)} title="Image Response">
				<img style={{width: "100%", objectFit: "contain"}} src={props.src} alt={props.alt} />
			</Modal>
			<img style={{cursor: "pointer"}} onClick={imageClickHandler} className={props.className} src={props.src} alt={props.alt} />
		</Fragment>
	);
}

export default Image;