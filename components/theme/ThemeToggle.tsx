import Image from "next/image";
import React, { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Check system preference or logic on mount
		if (document.documentElement.classList.contains("dark")) {
			setIsDark(true);
		}
	}, []);

	const toggleTheme = () => {
		const html = document.documentElement;
		if (html.classList.contains("dark")) {
			html.classList.remove("dark");
			setIsDark(false);
		} else {
			html.classList.add("dark");
			setIsDark(true);
		}
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
			aria-label="Toggle Theme"
		>
			{isDark ? (
				<Image
					src="/assets/sun-art-2.svg"
					alt="light"
					width={30}
					height={30}
				/>
			) : (
				<Image
					src="/assets/moon-art.svg"
					alt="light"
					width={30}
					height={30}
				/>
			)}
		</button>
	);
};
