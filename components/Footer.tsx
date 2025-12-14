"use client";

import { socialMediaLinks } from "@/constants";
import Link from "next/link";
import SocialTag from "./ui/social-tag";
import { useTheme } from "next-themes";

const Footer = () => {
	const { theme } = useTheme();

	return (
		<footer>
			<div className="flex justify-between p-4 bg-zinc-300 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-200">
				<div>
					<span className="order-last block text-center text-sm md:order-first">
						© {new Date().getFullYear()} Nihal Sheikh, All rights
						reserved
					</span>
				</div>

				<div className="flex gap-8">
					<Link
						href="#home"
						className="cursor-pointer hover:text-zinc-950 dark:hover:text-zinc-50"
					>
						Home
					</Link>
					<Link
						href="#projects"
						className="cursor-pointer hover:text-zinc-950 dark:hover:text-zinc-50"
					>
						Projects
					</Link>
				</div>

				<div>
					<div className="flex gap-8">
						{socialMediaLinks.map(
							({
								title,
								socialLink,
								iconImg,
								iconImgDark,
								iconImgLight,
							}) => {
								const iconSrc =
									theme === "dark"
										? iconImgLight || iconImg
										: iconImgDark || iconImg;

								return (
									<div key={title}>
										<SocialTag
											title={title}
											socialLinkUrl={socialLink}
											iconUrl={iconSrc}
										/>
									</div>
								);
							}
						)}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
