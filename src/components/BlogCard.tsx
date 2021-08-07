interface Prop {
	title: string;
	date: string;
	type: string;
}

function BlogCard(props: Prop) {
	return (
		<div className="flex justify-between pt-10 pb-1 border-b-2 border-gray-400">
			<h2 className="mr-8 text-xl text-gray-500 font-serif font-thin">{props.title}</h2>
			<p className="min-w-max">{props.date} | {props.type}</p>
		</div>
	)
}

export default BlogCard;