import './app.css';
import BlogContainer from './components/BlogContainer';
import Footer from './components/Footer';
import HeroComponent from './components/HeroComponent';
import ProjectContact from './components/ProjectContact';
import WorkingGrid from './components/WorkingGrid';

function App() {
	return (
		<div>
			<section id="hero">
				<HeroComponent />
			</section>
			<section id="working">
				<WorkingGrid />
			</section>
			<section id="blogs">
				<BlogContainer />
			</section>
			<section id="proj">
				<ProjectContact />
			</section>
			<section id="footer">
				<Footer />
			</section>
		</div>
	);
}

export default App;
