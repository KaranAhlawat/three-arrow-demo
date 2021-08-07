import React from "react";
import MobileNavLinks from "./MobileNavLinks";
import NavLinks from "./NavLinks";

function Navbar() {
	return (
		<nav>
			<div className="mx-auto">
				<div className="flex justify-between">
					<div>
						<a className="text-2xl md:text-3xl font-bold" href="#">ueno.</a>
					</div>
					<NavLinks />
					<MobileNavLinks />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;