const DUMMY = {
	prompts: [
		{
			id: 'post1',
			text: 'A castle with several dragons flying over it. It is surrounded by a moat of frozen ice, and the outer lands are filled with trees.',
			likes: 5,
			tags: ['dragon', 'ice', 'castle'],
			username: 'Kiran',
			responses: [
				{
					id: 'response1',
					likes: 12,
					title: 'The Ice Castle',
					description: 'I made this castle based off the ice castle from Game of Thrones. I wanted to make it unique by using a pastel art style.',
					image: 'https://i.imgur.com/BnH9umG.jpeg',
					username: 'TestUser',
					liked: false
				},
				{
					id: 'response2',
					title: 'The Dragons Attack!',
					likes: 2,
					description: 'I made this castle based off the ice castle from Game of Thrones. I wanted to make it unique by having the dragons attack the castle using a bright fire breath against the icy mountains.',
					image: 'https://i.imgur.com/brox2sf.jpg',
					username: 'JackTheArtist',
					liked: false
				},
				{
					id: 'response3',
					title: 'Pastel Dragons',
					likes: 5,
					description: 'I hand painted this castle based off using a more cartoony and abstract art style. I scanned the image to maintain its texture quality!',
					image: 'https://i.imgur.com/Axd9t4P.jpg',
					username: 'FantasyArtist',
					liked: false
				},
				{
					id: 'response4',
					title: 'Dark Castle Sketch',
					description: 'I made a black and white rendition of a castle to give it a more dark style theme. I wanted to have the dragon perched at the top of the castle as if it is the guardian.',
					image: 'https://i.imgur.com/vbzu3i1.jpg',
					username: 'Cloverain',
					likes: 6,
					liked: false
				}
			]
		},
		{
			text: 'Draw your OC as a meme',
			likes: 3,
			tags: ['OC', 'meme'],
			username: 'TestUser',
			responses: [{ id: 'response9', title: 'poppop', deescription: '', username: 'TestUser', image: 'https://i.imgur.com/6F9z5Mb.png', likes: '3', liked: false }]
		},
		{
			text: 'A group of superheroes flying over a big city. Each of the heroes has a costume corresponding to their different powers. The city is filled with tall skyscrapers.',
			likes: 6,
			tags: ['hero', 'powers', 'city', 'flying'],
			username: 'Kiran',
			responses: []
		},
		{
			text: 'Can someone create something that has a bunch of different animals eating dinner at a table in a restaurant. Their food can be something they typically eat in the wild and they can be wearing suits/clothes.',
			likes: 2,
			tags: ['animal', 'food'],
			username: 'Kiran',
			responses: [
				{
					id: 'response6',
					title: 'animal restaurant',
					description: 'panda, cat, bunny',
					username: 'Cloverain',
					image: 'https://i.imgur.com/l9GRhNM.png',
					likes: 1,
					liked: false
				}
			]
		},
		{
			text: 'One idea I would like to see is drawing cartoon characters in styles from other cartoon shows.',
			likes: 14,
			tags: ['cartoon', 'show', 'character'],
			username: 'Kiran',
			responses: []
		},
		{
			text: 'A city in a bubble underwater, like Atlantis in a way.',
			likes: 5,
			tags: ['water', 'city'],
			username: 'Kiran',
			responses: [{ id: 'response5', title: 'underwater city', description: ' ', username: 'Cloverain', image: 'https://i.imgur.com/ZWOMGEM.png', likes: 2, liked: false }]
		},
		{
			text: 'Art where there are people, but their shadows are different from how they are standing. The shadows can just be different poses or can show something deeper depending on who is creating it.',
			likes: 8,
			tags: ['people', 'shadow', 'pose'],
			username: 'Kiran',
			responses: []
		}
	],
	users: [
		{
			username: 'TestUser',
			image: 'https://i.imgur.com/A45Gg4c.jpg'
		},
		{
			username: 'Kiran',
			image: 'https://i.imgur.com/BwxFL7M.jpeg'
		},
		{ 
			username: 'Cloverain', 
			image: 'https://i.imgur.com/L0coBkP.jpg' 
		},
		{
			username: 'JackTheArtist',
			image: 'https://i.imgur.com/hS0BMnx.png'
		},
		{
			username: 'FantasyArtist',
			image: 'https://i.imgur.com/ewXh6pF.jpg'
		},
	]
}

export default DUMMY
