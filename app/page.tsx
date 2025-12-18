"use client";

import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div
			className={`${
				theme === "dark"
					? "bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-700"
					: "[background:radial-gradient(125%_100%_at_50%_0%,#fff_6.32%,#e0f0ff_29.28%,#e7effd_68.68%,#fff_100%)]"
			} flex flex-col items-center h-screen relative`}
		>
			<div
				className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>
			<div className="max-w-7xl w-full h-full mx-auto absolute inset-0">
				<div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-zinc-950 via-zinc-400 to-transparent opacity-15 dark:bg-gradient-to-b dark:from-zinc-50 dark:via-zinc-400 dark:to-zinc-950" />
				<div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-zinc-950 via-zinc-400 to-transparent opacity-15 dark:bg-gradient-to-b dark:from-zinc-50 dark:via-zinc-400 dark:to-zinc-950" />
			</div>
			<Container className="z-10 w-full">
				<Navbar />
				<Hero />
			</Container>
		</div>
	);
}
