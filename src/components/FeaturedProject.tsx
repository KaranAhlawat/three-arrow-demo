import React from "react";

interface Props {
	title: string;
	content: string;
}

function FeaturedProject(props: Props) {
	return (
		<div className="py-16 flex flex-col lg:flex-row lg:align-middle">
			<div>
				<p className="font-semibold md:text-2xl text-gray-500">Featured project</p>
				<h1 className="pt-8 text-3xl md:text-5xl text-gray-600 font-serif font-thin">{props.title}</h1>
				<h1 className="pt-2 text-3xl md:text-5xl text-gray-600 font-serif font-thin">{props.content}</h1>
				<p className="font-semibold md:text-2xl text-gray-500 pt-8">More projects</p>
				<a href="#working">+</a>
			</div>
			<img className="transition duration-500 ease-in-out transform hover:scale-125 pt-20 mx-auto h-mdscreen lg:pt-0 px-5 lg:px-0 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl fade-in-slow" src="https://ueno.co/static/e28e0e34acc9e67279406d1604fbf8d2/8fc1f/af5a8967-cf90-46f0-b241-5537faeda98f_reuters-news-app-home.webp"></img>
		</div>
	);
}

export default FeaturedProject;