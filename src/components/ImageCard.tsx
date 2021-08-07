interface Prop {
	link: string;
	caption: string;
}

function ImageCard(props: Prop) {
	return (
		<div>
			<img className="image-cards transition duration-500 ease-in-out transform hover:scale-90 mx-auto block max-w-full h-auto" src={props.link} />
			<p className="text-center pt-4 pb-10 text-lg md:text-2xl text-gray-600">{props.caption}</p>
		</div>
	)
}

export default ImageCard;