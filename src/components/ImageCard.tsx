interface Prop {
	link: string;
	caption: string;
}

function ImageCard(props: Prop) {
	return (
		<div>
			<img className="mx-auto block max-w-full h-auto" src={props.link} />
			<p className="text-center py-4 text-lg text-gray-600">{props.caption}</p>
		</div>
	)
}

export default ImageCard;