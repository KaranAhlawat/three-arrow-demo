import { useState } from "react";

function NavLinks() {

	const [menuState, setMenuState] = useState(false);

	return (

		menuState ?
			<div>
				<ul className="flex flex-row space-x-3 uppercase text-sm">
					<li>Services</li>
					<li>Clients</li>
					<li>Careers</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
			: null
	);
}

export default NavLinks;