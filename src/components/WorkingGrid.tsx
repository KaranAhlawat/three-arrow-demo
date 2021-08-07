import { images } from "../data/gridImages";
import ImageCard from "./ImageCard";

function WorkingGrid() {
	return (
		<div className="workingGrid px-4 pb-48 bg-white">
			<header className="workingGridHead flex flex-col pb-10 text-center text-gray-500 text-2xl font-thin font-serif">
				<h2>All work, all play</h2>
				<h2>Selected projects</h2>
			</header>
			<div className="grid grid-cols-2 gap-x-4">
				{images.map(item => {
					return <ImageCard link={item.link} caption={item.caption} />
				})}
			</div>
		</div>
	);
}

export default WorkingGrid;