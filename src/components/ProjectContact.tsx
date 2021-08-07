function ProjectContact() {
	return (
		<div className="py-24 px-10">
			<div>
				<img className="mx-auto max-w-full h-auto" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
			</div>
			<div className="border-b-2 border-gray-400">
				<div className="flex flex-col pt-10 pb-20 md:text-center">
					<h2 className="text-3xl text-gray-500 font-thin font-serif">Join us</h2>
					<h2 className="text-3xl text-gray-400 font-thin font-serif">Open positions</h2>
				</div>
				<div className="flex md:flex-row flex-col justify-center md:justify-around md:my-auto text-center space-y-4  md:space-y-0 text-gray-500 font-semibold pb-20">
					<p>New Delhi, India</p>
					<p>San Fransisco, USA</p>
					<p>Reykjavik, Iceland</p>
				</div>
			</div>
			<div className="border-b-2 border-gray-400 md:flex md:flex-row md:justify-between">
				<div className="flex flex-col pt-20 pb-10">
					<h2 className="text-3xl text-gray-500 font-thin font-serif">Got a project?</h2>
					<h2 className="text-3xl text-gray-400 font-thin font-serif">Let's talk</h2>
					<a href="#" className="flex flex-row justify-start font-bold text-black pt-4"> <span className="text-gray-800 px-2">+</span> Tell us everything</a>
				</div>
				<div className="pb-10 md:py-10">
					<div className="flex justify-around md:gap-x-40 text-sm text-gray-500">
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
		</div>
	);
}

export default ProjectContact;