import { useRef, useState,useEffect, useCallback } from 'react';
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
	//const autoFocus = useCallback(el => el ? el.focus() : null, [])
	const newPromptHandler = () => {
		DUMMY.prompts.unshift({
			text: inputPrompt.current.value,
			likes: 0,
			tags: inputTags.current.props.tags,
			username: DUMMY.users[0].username,
			responses: []
		})
		setOpened(false);
	}
	useEffect(()=>{
			
		setTimeout(
			()=>{	
			
			if(inputPrompt.current){
			inputPrompt.current.focus();
			}
		},300);
		
	
	},[opened]);
	return (
		<div className="home">
			{/* New Prompt Modal */}
			<Modal centered size="55%" opened={opened} onClose={() => setOpened(false)} title="Create a new prompt">
				<Textarea autoFocus={true} ref={inputPrompt} placeholder="Write your prompt here!" label="Your art prompt" autosize minRows={2} 
				 />
				<p className="label">Tags</p>
				<ReactTagInput ref={inputTags} removeOnBackspace={true} className="tag-input" tags={tags} onChange={(newTags) => setTags(newTags)} />
				<br></br>
				<Group position="apart">
					<Button variant="light" color="gray" onClick={() => setOpened(false)}>
						Cancel
					</Button>
					<Button color="grape" className="button--new-prompt" onClick={newPromptHandler}>
						Submit
					</Button>
				</Group>
			</Modal>

			{/* New Prompt Button */}
			

			{/* Post Lists */}
			<div className="home__content">
				{/* New Prompt Button */}
				<Button color="grape" className="button--new-prompt" onClick={() => setOpened(true)}>
					+ Post a prompt
				</Button>

				<div className="post-list">
					{DUMMY.prompts.map((prompt) => (
						<Post key={prompt.text} {...prompt}></Post>
					))}
				</div>
				{/* <div className="right-bar"></div> */}
			</div>
		</div>
	)
}

export default Home;