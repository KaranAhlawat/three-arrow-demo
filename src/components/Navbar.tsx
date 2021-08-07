import React from "react";
import NavLinks from "./NavLinks";

function Navbar() {
	return (
		<header className="flex flex-row justify-between">
			<h1 className="text-2xl md:text-3xl font-bold">ueno.</h1>

			<NavLinks />
		</header>
	);
}

export default Navbar;