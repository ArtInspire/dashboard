import { useRef, useState,useEffect } from 'react';
import Post from './PostPreview';
import './Home.css'
import { Group, Button, Modal, Textarea } from '@mantine/core';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import DUMMY from '../../Seed';

function Home(props) {

	const [opened, setOpened] = useState(false);
	const [tags, setTags] = useState([]);
	const [textAreaRendered, settextAreaRendered] = useState(false);
	const inputPrompt = useRef(null);
	const inputTags = useRef(null);

	const newPromptHandler = () => {
		DUMMY.prompts.push({
			text: inputPrompt.current.value,
			likes: 0,
			tags: inputTags.current.props.tags,
			username: DUMMY.users[0].username,
			responses: []
		})
		setOpened(false);
	}
	
	return (
		<div className="home">
			
			{/* New Prompt Modal */}
			<Modal centered size="55%" opened={opened} onClose={() => setOpened(false)} title="Create a new prompt">
				<Textarea autofocus ref={inputPrompt} placeholder="Write your prompt here!" label="Your art prompt" autosize minRows={2} onLoad={
					()=>{console.log(inputPrompt.current);}
				} />
				<p className="label">Tags</p>
				<ReactTagInput ref={inputTags} removeOnBackspace={true} className="tag-input" tags={tags} onChange={(newTags) => setTags(newTags)} />
				<br></br>
				<Group position="apart">
					<Button variant="light" color="red" onClick={() => setOpened(false)}>Cancel</Button>
					<Button color="grape" className="button--new-prompt" onClick={newPromptHandler}>Submit</Button>
				</Group>
			</Modal>

			{/* New Prompt Button */}
			<Button color="grape" className="button--new-prompt" onClick={() => {setOpened(true);
			//console.log(inputPrompt.current);
			}}>
				+ Post a prompt
			</Button>

			{/* Post Lists */}
			<div className="post-list">
				{DUMMY.prompts.map((prompt) => (
					<Post key={prompt.text} {...prompt}></Post>
				))}
			</div>
			<div className="right-bar"></div>
		</div>
	)
}

export default Home;