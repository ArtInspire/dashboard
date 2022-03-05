import './Navbar.css'
import DUMMY from '../Seed'

function Navbar(props) {
	return (
		<div>
			<nav className="navbar">
				<ul className="navbar__list">
					<div className="navbar__left">
						<div className="navbar__item" key="title">
							<b>Art Inspire</b>
						</div>
					</div>
					<div className="navbar__center">
						{/* <div className="navbar__item button--view button--view--selected">Journal View</div>
						<div className="navbar__item button--view">Statistics View</div> */}
					</div>
					<div className="navbar__right">
						<div className="navbar__item">{DUMMY.users[0].username}</div>
					</div>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
