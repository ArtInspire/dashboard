import DUMMY from "./Seed";
import './User.css'

function User(props) {

	const user = DUMMY.users[DUMMY.users.findIndex((user) => user.username === props.username)]
	console.log(user.image);

	return (
		<div className="user">
			<img src={user.image} alt="Profile" />
			<div className="user__text">
				<p className="username">{props.username}</p>
				<p className="userinfo">10 posts, 5 likes</p>
			</div>
		</div>
	);
}

export default User;