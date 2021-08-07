import { useState } from "react";

function MobileNavLinks() {

	const [hidden, setHidden] = useState(true);


	const handleOnClick = () => {
		setHidden(!hidden);
	}

	return (
		<div className="sm:hidden">
			<div className="sm:hidden flex px-8">
				<button onClick={handleOnClick}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>

			{hidden && <div className="py-8 text-center fade-in">
				<a className="block px-4 py-2 text-xl font-thin font-serif hover:bg-gray-500" href="">Services</a>
				<a className="block px-4 py-2 text-xl font-thin font-serif hover:bg-gray-500" href="">Clients</a>
				<a className="block px-4 py-2 text-xl font-thin font-serif hover:bg-gray-500" href="">Careers</a>
				<a className="block px-4 py-2 text-xl font-thin font-serif hover:bg-gray-500" href="">About</a>
				<a className="block px-4 py-2 text-xl font-thin font-serif hover:bg-gray-500" href="">Contact</a>
			</div>
			}
		</div>
	);
}

export default MobileNavLinks;