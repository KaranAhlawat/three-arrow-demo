import FeaturedProject from "./FeaturedProject";
import Navbar from "./Navbar";

function HeroComponent() {
	return (<div className="px-4 py-7 bg-gray-100">
		<Navbar />
		<FeaturedProject title="Reuters News App" content="News On The Move" />
		<h2 className="py-10 text-center text-gray-500 text-xl md:text-3xl font-thin font-serif">Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.</h2>
		<a href="#" className="flex flex-row justify-end font-bold text-black pb-10 md:text-lg"> <span className="text-gray-800 px-2">+</span> Contact Us</a>
	</div>);
}

export default HeroComponent;