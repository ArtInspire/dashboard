import './PostPreview.css'
import { useState, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { Group, Button, Modal, TextInput, Textarea } from '@mantine/core';
import PostDetail from '../Post/PostDetail';

function imagesFromResponses(responses) {
	if (responses.length === 0) return;
	return (
		<div className="post-preview__image">
			<img src={responses[0].image} alt="art" />
		</div>
	)
}

function Post(props) {
	
	const [opened, setOpened] = useState(false);

	const postPreviewClickHandler = () => {
		setOpened(true)
	}

	// const responseSubmitHandler = () => {
	// 	console.log('response submitted');
	// }

	return (
		<Fragment>
			<Modal size="60%" opened={opened} onClose={() => setOpened(false)} title="Art prompt">
				<PostDetail {...props} ></PostDetail>
			</Modal>

			<div className="post-preview" onClick={postPreviewClickHandler}>
				<p>{props.text}</p>
				<div className="post-preview__info">
					<p>
						{props.likes} likes, {props.responses.length} responses
					</p>
					<div>
						<p className="post-preview__tags">{props.tags.map((tag) => `#${tag} `)}</p>
					</div>
				</div>
				{imagesFromResponses(props.responses)}
			</div>
		</Fragment>
	)
}

export default Post;