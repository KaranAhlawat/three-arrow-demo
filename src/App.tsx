import './app.css';
import Navbar from './components/Navbar';
import FeaturedProject from './components/FeaturedProject'
import { images } from './data/gridImages';
import ImageCard from './components/ImageCard';
import BlogCard from './components/BlogCard';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<section id="hero">
				<div className="px-4 py-7 bg-gray-100">
					<Navbar />
					<FeaturedProject title="Reuters News App" content="News On The Move" />
					<h2 className="py-10 text-center text-gray-500 text-xl font-thin font-serif">Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.</h2>
					<a href="#" className="flex flex-row justify-end font-bold text-black pb-10"> <span className="text-gray-800 px-2">+</span> Contact Us</a>
				</div>
			</section>
			<section id="working">
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
			</section>
			<section id="blogs">
				<div className="px-4 py-20 bg-gray-100">
					<div className="flex flex-col justify-start align-middle font-serif font-thin text-3xl text-gray-500">
						<h2>What's new?</h2>
						<h2>Our blog and news</h2>
					</div>
					<div className="py-4">
						<BlogCard title="24,895 hours later" date="Jan 06" type="Blog" />
						<BlogCard title="Figma wanted our CEO's insights for some reason" date="Oct 19" type="News" />
						<BlogCard title="This guy really won't shut up" date="Oct 12" type="News" />
					</div>
				</div>
			</section>
			<section id="proj">
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
			</section>
			<section id="footer">
				<Footer />
			</section>
		</div>
	);
}

export default App;
