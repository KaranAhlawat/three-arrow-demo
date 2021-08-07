import BlogCard from "./BlogCard";

function BlogContainer() {
	return (
		<div className="px-10 py-20 bg-gray-100">
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
	);
}

export default BlogContainer;