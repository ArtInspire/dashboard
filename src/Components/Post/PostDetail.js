import { useState, useRef, Fragment } from 'react';
import { Text, Button, TextInput, Textarea } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import './PostDetail.css'
import Image from '../UI/Image'
import DUMMY from '../../Seed';

import { MdDelete } from "react-icons/md"
import User from '../../User';
import {AiOutlineFileImage,AiFillHeart} from "react-icons/ai";


function PostDetail(props) {

	const [submitting, setSubmitting] = useState(false);
	const inputTitle = useRef(null);
	const inputDescription = useRef(null);
	const dropzoneImage = useRef(null);
	const fileDropzone = useRef(null);
	const ImagePreview = useRef(null);
	
	const [updatingLikes, setupdatingLikes] = useState(false);
	const [toggleLiked, setLiked] = useState(false);
	const getResponses = () => {
		return DUMMY.prompts[DUMMY.prompts.findIndex((prompt) => prompt.text === props.text)].responses
	}

	const fileUploadHandler = (files) => {
		ImagePreview.current.style.display = "block";
		dropzoneImage.current.src = URL.createObjectURL(files[0])
		dropzoneImage.current.style.display= "block";
		fileDropzone.current.style.display = "none";
		
	}
	const removeUpload =()=> {
		dropzoneImage.current.style.display= "none";
		ImagePreview.current.style.display = "none";
		fileDropzone.current.style.display = "block";
	}
	const responseSubmitHandler = () => {
		const index = DUMMY.prompts.findIndex((prompt) => prompt.text === props.text)
		DUMMY.prompts[index].responses.push({
			id: inputTitle.current.value,
			title: inputTitle.current.value,
			description: inputDescription.current.value,
			image: dropzoneImage.current.src,
			username: DUMMY.users[0].username,
			likes: 0,
			liked:false
		})
		setSubmitting(false)
	}

	return (
		<div>
			{/* Info */}
			<User username={props.username}></User>
			<p className='post-detail__description'>{props.text}</p>
			<div className="post-detail__info">
				<p>
					{props.likes} likes, {props.responses.length} responses
				</p>
				<p>{props.tags.map((tag) => `#${tag} `)}</p>
			</div>

			{/* New response form */}
			{!submitting && <Button className="button--new-prompt" onClick={() => setSubmitting(true)}>Submit a response</Button>}
			{submitting && <div className="response response--form">
				<div className="response__text-content">
					<div className='col'>
						<TextInput ref={inputTitle} placeholder="Title your piece" label="Response Title" required /> <br></br>
						<Textarea ref={inputDescription} placeholder="Describe your art piece" label="Art Description" autosize minRows={2} required />
					</div>
					<div>

					<Text size="sm" weight ="500" mb={5} mt={12}>Upload your art</Text>
					
					<div className="dropzone__image" ref={ImagePreview}>
					<button className='removeImage' onClick={removeUpload}><MdDelete />Delete Image</button>
						<img ref={dropzoneImage} style={{display:"none"}}/>
					
					</div>
					<Dropzone ref={fileDropzone} onDrop={fileUploadHandler} onReject={(files) => console.log('rejected files', files)} maxSize={3 * 1024 ** 2} accept={[MIME_TYPES.jpeg, MIME_TYPES.png]}>
						{(status) => (
							<Fragment>
								
								<Text size="sm" color="dimmed" className='dropzonetext'>
									Drag your image or click here to upload.
								</Text>
							</Fragment>
						)}
					</Dropzone>
					</div>
					<Button onClick={() => setSubmitting(false)} mt={12} mr={15} color="gray">Cancel</Button>
					<Button mt={12} color="green" onClick={responseSubmitHandler}>Submit</Button>
				</div>
			</div>}

			{/* List of responses */}
			<div className="response-list">
				{getResponses().map((response) => (
					<div key={response.title} className="response">
						<div className="response__image">
							<Image src={response.image} alt="art" />
						</div>
						<div className="response__text-content">
							<div className='row'>
							<User username={response.username}></User>
							<button onClick={
								()=>{
									response.liked = !response.liked;
									if(response.liked){
									response.likes ++;
									}else{
										response.likes --;
									}
									
									setLiked(!toggleLiked);
									setupdatingLikes(!updatingLikes);
								}
							} className="heartImage"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="-2 -5 35 35"><path 
							 className={`heart ${response.liked ? "fill":""}`} stroke="black" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg> {response.likes}
							 </button>
							 </div>
							<h1>{response.title}</h1>
							<p>{response.description}</p>
						
						</div>
					</div>
				))}
			</div>
			{(getResponses().length==0)?<div className='noResponse'><AiOutlineFileImage />No response yet, be the first one to share your response</div>:''}
		</div>
	)
}

export default PostDetail;