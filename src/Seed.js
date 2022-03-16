const DUMMY = {
	prompts: [
		{
			id: 'post1',
			text: 'A castle with several dragons flying over it. It is surrounded by a moat of frozen ice, and the outer lands are filled with trees.',
			likes: 53,
			tags: ['dragon', 'ice', 'castle'],
			username: 'Kiran',
			responses: [
				{
					id: 'response1',
					title: 'Pastel Dragons',
					likes: 33,
					description: 'I hand painted this castle based off using a more cartoony and abstract art style. I scanned the image to maintain its texture quality!',
					image: 'https://i.imgur.com/Axd9t4P.jpg',
					username: 'FantasyArtist',
					liked: false
				},
				{
					id: 'response2',
					likes: 12,
					title: 'The Ice Castle',
					description: 'I made this castle based off the ice castle from Game of Thrones. I wanted to make it unique by using a pastel art style.',
					image: 'https://i.imgur.com/BnH9umG.jpeg',
					username: 'PastelGuy',
					liked: false
				},
				{
					id: 'response3',
					title: 'The Dragons Attack!',
					likes: 7,
					description: 'I made this castle based off the ice castle from Game of Thrones. I wanted to make it unique by having the dragons attack the castle using a bright fire breath against the icy mountains.',
					image: 'https://i.imgur.com/brox2sf.jpg',
					username: 'JackTheArtist',
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
			id: 'post2',
			text: 'What would a robot dog look in the future? We already have robotics like Spot from Boston Dyanmics, so show us your take on the classic robotic dog!',
			likes: 42,
			tags: ['robot', 'dog', 'future'],
			username: 'JackTheArtist',
			responses: [
				{ id: 'response1', title: 'Giant Robot Monster Dog!', description: 'I thought it would be fun to show a kaiju/monster style robot that could be attacking a city with the military trying to stop it.', username: 'FantasyArtist', image: 'https://i.imgur.com/yyq2AgA.jpg', likes: '12', liked: false },
				{ id: 'response2', title: 'Militarized Attack Dog', description: 'I tried to imagine what a police dog would look like as a robot. I wanted to show the inner mechanics without covering up the robotics to make it look more interesting.', username: 'Kiran', image: 'https://i.imgur.com/7c6OhJD.jpg', likes: '4', liked: false },
				{ id: 'response3', title: 'Mechanical Travel Assist Dog', description: 'I was thinking of how a robot could be used to carry items during travels or hiking. This style is very simplistic with spider-like legs but has a lot of storage space on its back.', username: 'Cloverain', image: 'https://i.imgur.com/P6hCOZk.jpg', likes: '3', liked: false }
			]
		},
		{
			id: 'post3',
			text: 'A group of superheroes flying over a big city. Each of the heroes has a costume corresponding to their different powers. The city is filled with tall skyscrapers.',
			likes: 9,
			tags: ['hero', 'powers', 'city', 'flying'],
			username: 'Cloverain',
			responses: []
		},
		{
			id: 'post4',
			text: 'Can someone create something that has a bunch of different animals eating dinner at a table in a restaurant. Their food can be something they typically eat in the wild and they can be wearing suits/clothes.',
			likes: 22,
			tags: ['animal', 'food'],
			username: 'FantasyArtist',
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
			id: 'post6',
			text: 'One idea I would like to see is drawing cartoon characters in styles from other cartoon shows.',
			likes: 14,
			tags: ['cartoon', 'show', 'character'],
			username: 'PastelGuy',
			responses: []
		},
		{
			id: 'post5',
			text: 'Outer space racing! What if there were roads in the middle of outer space that connected different planets with each other? Or perhaps between space stations and space ships?',
			likes: 23,
			tags: ['space', 'race', 'ship', 'speed'],
			username: 'FantasyArtist',
			responses: [
				{ id: 'response1', title: 'Milky Way Road', description: 'I drew a road surrounding a cluster of space stations. People could use the roads to go from one station to another.', username: 'AstralArt', image: 'https://i.imgur.com/SZfdwQj.jpg', likes: 2, liked: false },
				{ id: 'response2', title: 'Winding Energy Roads', description: 'For spaceships, physical roads did not make sense so I thought about creating roads that were made of some sort of guiding electrical energy, almost like a rail system.', username: 'JackTheArtist', image: 'https://i.imgur.com/DvNz334.png', likes: 32, liked: false },
				{ id: 'response3', title: 'Video Game Energy Roads', description: "I really liked Jack's idea of the energy roads so I made my own version of it. I tried to draw it in a video game style.", username: 'Cloverain', image: 'https://i.imgur.com/Qcr71Ie.png', likes: 24, liked: false },
				{ id: 'response4', title: 'Vertical race to the top!', description: 'If rockets raced, I wanted to make them look like they were racing to reach the top instead of making them look like they were racing horizontally.', username: 'PastelGuy', image: 'https://i.imgur.com/oorvNvI.jpg', likes: 14, liked: false },
				{ id: 'response5', title: 'Astronaut vs Alien', description: 'I thought it was funny for an astronaut to race an alien in UFOs', username: 'FantasyArtist', image: 'https://i.imgur.com/VYBUELt.png', likes: 12, liked: false }
			]
		},
		{
			id: 'post7',
			text: 'A city in a bubble underwater, like Atlantis in a way.',
			likes: 23,
			tags: ['water', 'city'],
			username: 'FantasyArtist',
			responses: [{ id: 'response5', title: 'underwater city', description: ' ', username: 'Cloverain', image: 'https://i.imgur.com/ZWOMGEM.png', likes: 2, liked: false }]
		},
		{
			id: 'post8',
			text: 'Art where there are people, but their shadows are different from how they are standing. The shadows can just be different poses or can show something deeper depending on who is creating it.',
			likes: 8,
			tags: ['people', 'shadow', 'pose'],
			username: 'JackTheArtist',
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
		{
			username: 'PastelGuy',
			image: 'https://i.imgur.com/SYcEaia.jpg'
		},
		{
			username: 'AstralArt',
			image: 'https://i.imgur.com/4LJKqUI.jpg'
		},

	]
}

export default DUMMY
