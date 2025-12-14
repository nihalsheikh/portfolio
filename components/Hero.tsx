import Tag from "./ui/tags";

const Hero = () => {
	return (
		<section id="hero">
			Hero
			<Tag
				title="portfolio"
				tagStyles="bg-red-950 border-2 border-red-700 hover:bg-red-900"
				iconImg="/assets/cloud/Vercel_dark.svg"
			/>
		</section>
	);
};

export default Hero;
