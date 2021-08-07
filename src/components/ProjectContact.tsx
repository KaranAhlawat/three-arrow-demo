function ProjectContact() {
	return (
		<div className="py-24 px-4">
			<div>
				<img className="mx-auto max-w-full h-auto" src="https://picsum.photos/300/174" alt="" />
			</div>
			<div className="flex flex-col pt-10 pb-20 border-b-2 border-gray-400">
				<h2 className="text-3xl text-gray-500 font-thin font-serif">Join us</h2>
				<h2 className="text-3xl text-gray-400 font-thin font-serif">Open positions</h2>
			</div>
			<div className="flex flex-col pt-20 pb-10">
				<h2 className="text-3xl text-gray-500 font-thin font-serif">Got a project?</h2>
				<h2 className="text-3xl text-gray-400 font-thin font-serif">Let's talk</h2>
				<a href="#" className="flex flex-row justify-start font-bold text-black pt-4"> <span className="text-gray-800 px-2">+</span> Tell us everything</a>
			</div>
			<div className="border-b-2 border-gray-400 pb-10">
				<div className="flex justify-around text-sm text-gray-500">
					<ul className="list-none space-y-2">
						<li>Clients</li>
						<li>About</li>
						<li>News</li>
						<li>Contact</li>
						<li>Careers</li>
					</ul>
					<ul className="list-none space-y-2">
						<li>Blog</li>
						<li>Bueno.co</li>
						<li>Ueno.design</li>
						<li>Ueno.stor</li>
						<li>Ueno.events</li>
						<li>Ueno.playground</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProjectContact;