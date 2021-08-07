function Footer() {
	return (
		<div className="px-4 py-0">
			<div className="flex flex-col text-gray-400 text-center">
				<p className="text-center text-gray-600 pb-4 font-bold">ueno.</p>
				<div className="flex flex-row justify-evenly">
					<i className="fab fa-facebook-f"></i>
					<i className="fab fa-github"></i>
					<i className="fab fa-twitter"></i>
				</div>
				<div className="flex flex-row justify-evenly py-4">
					<i className="fab fa-instagram"></i>
					<i className="fab fa-linkedin-in"></i>
					<i className="fab fa-slack"></i>
				</div>
				<p className="text-center text-gray-400 py-4">Privacy</p>
			</div>
		</div>
	);
}

export default Footer;