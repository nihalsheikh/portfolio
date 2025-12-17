"use client";

import { navLinks } from "@/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = resolvedTheme === "dark";
	const iconSrc = isDark ? "/sun.svg" : "/moon.svg";

	return (
		<div className="flex items-center justify-between gap-10">
			{/* Name */}
			<Link
				href="/"
				className="text-sky-600 dark:text-emerald-700 font-bold text-xl hover:text-sky-950 dark:hover:text-emerald-300 transition duration-200 uppercase"
			>
				<span className="text-sky-900 dark:text-emerald-300 animate-pulse">
					{">"}
				</span>
				Nihal.
			</Link>

			{/* Nav Links */}
			<div className="flex item-center gap-10">
				{navLinks.map(({ title, href }) => (
					<Link
						key={title}
						href={href}
						className={`${isDark ? "hover:text-zinc-50" : "hover:text-zinc-950" } text-md text-zinc-500 transition duration-200`}
					>
						{title}
					</Link>
				))}
			</div>

			{/* Nav CTA and Theme */}
			<div className="flex items-center justify-center gap-2">
				<button className="cursor-pointer p-2 rounded-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 border border-sky-800 hover:border-cyan-900 dark:border-emerald-700 dark:hover:border-green-600 bg-sky-300 dark:bg-emerald-950">
					Contact Me
				</button>

				<div className="h-8 w-px bg-zinc-800 dark:bg-zinc-600" />

				<button
					onClick={() => setTheme(isDark ? "light" : "dark")}
					className="cursor-pointer"
					aria-label="Theme Toggle"
				>
					<Image
						src={iconSrc}
						alt="themeBtnImg"
						width={25}
						height={25}
						draggable={false}
						className="hover:animate-spin"
					/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
