import {
	Navbar,
	Hero,
	Footer,
	About,
	WorkExperience,
	Education,
	TechStack,
	Projects,
	Contact,
} from "@/components";

export default function Home() {
	return (
		<main className="flex flex-col font-mono w-full max-w-7xl bg-zinc-50 dark:bg-zinc-950 sm:items-start">
			<Navbar />
			<Hero />
			<About />
			<WorkExperience />
			<Education />
			<TechStack />
			<Contact />
			<Projects />
			<Footer />
		</main>
	);
}
