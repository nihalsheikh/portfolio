import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";

const Page = () => {
	return (
		<div className="bg-white dark:bg-zinc-950 justify-center items-center">
			<Navbar />
			<main className="flex flex-col font-mono w-full max-w-7xl sm:items-start">
				<Hero />
				<About />
				<WorkExperience />
				<Education />
				<TechStack />
				<Contact />
				<Projects />
			</main>
			<Footer />
		</div>
	);
};

export default Page;
