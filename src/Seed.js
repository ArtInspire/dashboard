const DUMMY = {
	prompts: [
		{
			id: 'post1',
			text: 'A castle with several dragons flying over it. It is surrounded by a moat of frozen ice, and the outer lands are filled with trees.',
			likes: 5,
			tags: ['dragon', 'ice', 'castle'],
			username: 'KiranUser',
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
					title: 'The Ice Castle 2',
					likes: 2,
					description: 'I made this castle based off the ice castle from Game of Thrones. I wanted to make it unique by using a pastel art style. I made this castle based off the ice castle from Game of Thrones. I wanted to make it unique by using a pastel art style.',
					image: 'https://i.imgur.com/BnH9umG.jpeg',
					username: 'TestUser',
					liked: false
				},
				{
					id: 'response3',
					title: 'The Ice Castle 3',
					likes: 5,
					description: 'I made this castle based off the ice castle from Game of Thrones. I wanted to make it unique by using a pastel art style.',
					image: 'https://i.imgur.com/BnH9umG.jpeg',
					username: 'KiranUser',
					liked: false
				},
				{
					id: 'response4',
					title: 'The Ice Castle 4',
					description: 'I made this castle based off the ice castle from Game of Thrones. I wanted to make it unique by using a pastel art style.',
					image: 'https://i.imgur.com/BnH9umG.jpeg',
					username: 'KiranUser',
					likes: 6,
					liked: false
				}
			]
		},
		{
			text: 'A group of superheroes flying over a big city. Each of the heroes has a costume corresponding to their different powers. The city is filled with tall skyscrapers.',
			likes: 6,
			tags: ['hero', 'powers', 'city','flying'],
			username: 'KiranUser',
			responses: [
				{id:'response4',
				title:"underwater city",
				description:" ",
				username: "Cloverain",
				image:'https://i.imgur.com/ZWOMGEM.png',
				likes: 2,
				liked: false}
			]
		},
		{
			text: 'Can someone create something that has a bunch of different animals eating dinner at a table in a restaurant. Their food can be something they typically eat in the wild and they can be wearing suits/clothes.',
			likes: 2,
			tags: ['animal', 'food'],
			username: 'KiranUser',
			responses: []
		},
		{
			text: 'One idea I would like to see is drawing cartoon characters in styles from other cartoon shows.',
			likes: 14,
			tags: ['cartoon', 'show', 'character'],
			username: 'KiranUser',
			responses: []
		},
		{
			text: 'A city in a bubble underwater, like Atlantis in a way.',
			likes: 5,
			tags: ['water', 'city'],
			username: 'KiranUser',
			responses: []
		},
		{
			text: 'Art where there are people, but their shadows are different from how they are standing. The shadows can just be different poses or can show something deeper depending on who is creating it.',
			likes: 8,
			tags: ['people', 'shadow', 'pose'],
			username: 'KiranUser',
			responses: []
		}
	],
	users: [
		{
			username: 'TestUser',
			image: 'https://i.imgur.com/A45Gg4c.jpg'
		},
		{
			username: 'KiranUser',
			image: 'https://i.imgur.com/BwxFL7M.jpeg'
		},
		{username: "Cloverain",
		image:'https://i.imgur.com/L0coBkP.jpg'}
	]
}

export default DUMMY;
