"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./theme/ThemeToggle";
import { navLinks } from "@/constants";
import Link from "next/link";

interface NavbarProps {
	activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Threshold: 20px for faster reaction
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div
				className={`
          fixed z-50 left-1/2 -translate-x-1/2
          transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          ${
				isScrolled
					? "top-6 w-[90%] md:w-2xl rounded-full border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md"
					: "top-0 w-full rounded-none border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
			}
        `}
			>
				<nav className="flex items-center justify-between px-6 py-3">
					{/* Logo / Brand */}
					<div className="shrink-0 font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-100 transition-transform duration-300 hover:scale-105 cursor-pointer">
						Nihal<span className="text-zinc-400">.</span>
					</div>

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex items-center space-x-1">
						{navLinks.map(({ name, href }) => {
							const isActive =
								activeSection === href.replace("#", "");
							return (
								<Link
									key={name}
									href={href}
									className={`
                    relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full
                    ${
						isActive
							? "text-zinc-900 dark:text-zinc-50"
							: "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
					}
                  `}
								>
									{/* Active Indicator Background */}
									<span
										className={`absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full -z-10 transition-all duration-300 ease-out ${
											isActive
												? "opacity-100 scale-100"
												: "opacity-0 scale-90"
										}`}
									/>
									{name}
								</Link>
							);
						})}
					</div>

					{/* Actions: Theme Toggle + Mobile Menu Button */}
					<div className="flex items-center gap-2">
						<ThemeToggle />

						{/* Mobile Menu Toggle */}
						<button
							className="md:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								{isMobileMenuOpen ? (
									<path d="M18 6L6 18M6 6l12 12" />
								) : (
									<path d="M3 12h18M3 6h18M3 18h18" />
								)}
							</svg>
						</button>
					</div>
				</nav>

				{/* Mobile Navigation Dropdown */}
				<div
					className={`
          absolute left-0 right-0 top-[120%] mx-auto w-full p-2 rounded-2xl
          bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl
          flex flex-col space-y-1 md:hidden overflow-hidden
          transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] origin-top
          ${
				isMobileMenuOpen
					? "opacity-100 scale-100 translate-y-0 max-h-96"
					: "opacity-0 scale-95 -translate-y-4 max-h-0"
			}
        `}
				>
					{navLinks.map(({ name, href }) => (
						<Link
							key={name}
							href={href}
							onClick={() => setIsMobileMenuOpen(false)}
							className={`
                block px-4 py-3 rounded-xl text-sm font-medium transition-colors
                ${
					activeSection === href.replace("#", "")
						? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
						: "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
				}
              `}
						>
							{name}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Navbar;
