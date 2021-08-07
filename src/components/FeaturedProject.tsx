import React from "react";

interface Props {
	title: string;
	content: string;
}

function FeaturedProject(props: Props) {
	return (
		<div className="py-16">
			<p className="font-semibold text-gray-500">Featured project</p>
			<h1 className="pt-8 text-3xl text-gray-600 font-serif font-thin">{props.title}</h1>
			<h1 className="pt-2 text-3xl text-gray-600 font-serif font-thin">{props.content}</h1>
			<p className="font-semibold text-gray-500 pt-8">More projects</p>
			<a href="#working">+</a>
			<img className="pt-20 " src="https://picsum.photos/400/500"></img>
		</div>
	);
}

export default FeaturedProject;