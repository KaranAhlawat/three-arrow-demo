function NavLinks() {
	return (
		<div>
			<ul className="hidden sm:flex flex-row space-x-3 uppercase text-sm">
				<li className="nav-links transition-colors duration-300 ease-in-out hover:text-gray-600 font-bold px-2 py-1">Services</li>
				<li className="nav-links transition-colors duration-300 ease-in-out hover:text-gray-600 font-bold px-2 py-1">Clients</li>
				<li className="nav-links transition-colors duration-300 ease-in-out hover:text-gray-600 font-bold px-2 py-1">Careers</li>
				<li className="nav-links transition-colors duration-300 ease-in-out hover:text-gray-600 font-bold px-2 py-1">About</li>
				<li className="nav-links transition-colors duration-300 ease-in-out hover:bg-blue-400 bg-pink-600 text-white rounded-2xl px-4 py-1 font-bold">Contact</li>
			</ul>
		</div>
	);
}

export default NavLinks;