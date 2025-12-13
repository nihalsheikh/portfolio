import {
	CERTIFICATEPROPS,
	EDUCATIONPROPS,
	NAVLINKPROPS,
	PROJECTPROPS,
	SCREENPOSITIONPROPS,
	SCREENSIZEPROPS,
	WORKEXPERIENCEPROPS,
} from "@/types";

// Navabr links
export const navLinks: NAVLINKPROPS[] = [
	{
		id: "01",
		name: "Home",
		href: "#home",
	},
	{
		id: "02",
		name: "About",
		href: "#about",
	},
	{
		id: "03",
		name: "Work",
		href: "#work",
	},
	{
		id: "04",
		name: "Techstack",
		href: "#techstack",
	},
	{
		id: "05",
		name: "Projects",
		href: "#projects",
	},
];

// Work Exp
export const workExperiences: WORKEXPERIENCEPROPS[] = [
	{
		id: "02",
		name: "Soft The Next",
		pos: "Python Developer Intern",
		duration: "July 2023 - Dec 2023",
		title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
		icon: "/assets/figma.svg",
		animation: "clapping",
	},
];

// Project Details
export const myProjects: PROJECTPROPS[] = [
	{
		title: "CodeOverflow - A StackOverflow Clone",
		description: "NaN",
		githubLink: "",
		liveLink: "",
		tags: [
			{
				id: "01",
				name: "Next.js",
				path: "/assets/react.svg",
			},
			{
				id: "02",
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: "03",
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
		],
	},
	{
		title: "Realtime Chat",
		description: "NaN",
		githubLink: "",
		liveLink: "",
		tags: [
			{
				id: "01",
				name: "Next.js",
				path: "/assets/react.svg",
			},
			{
				id: "02",
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: "03",
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
		],
	},
	{
		title: "Book Recommender LLM",
		description: "NaN",
		githubLink: "",
		liveLink: "",
		tags: [
			{
				id: "01",
				name: "Python",
				path: "/assets/react.svg",
			},
			{
				id: "02",
				name: "Gradio",
				path: "assets/tailwindcss.png",
			},
			{
				id: "03",
				name: "HuggingFace",
				path: "/assets/typescript.png",
			},
			{
				id: "04",
				name: "Langchain",
				path: "/assets/framer.png",
			},
		],
	},
	{
		title: "Blog Application",
		description: "NaN",
		githubLink: "",
		liveLink: "",
		tags: [
			{
				id: "01",
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: "02",
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
		],
	},
	{
		title: "v0 Clone",
		description: "NaN",
		githubLink: "",
		liveLink: "",
		tags: [
			{
				id: "01",
				name: "Next.js",
				path: "/assets/react.svg",
			},
			{
				id: "02",
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: "03",
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
		],
	},
];

// Screen Sizes
export const calculateSizes = ({
	isSmall,
	isMobile,
	isTablet,
}: SCREENSIZEPROPS): SCREENPOSITIONPROPS => {
	return {
		deskScale: isSmall ? 0.7 : isMobile ? 1 : 1.1,
		deskPosition: isMobile
			? [1.5, -4.0, 2]
			: isTablet
			? [1.5, -7.0, 2]
			: [2, -5, 10],
		cubePosition: isSmall
			? [4, -6.5, 5]
			: isMobile
			? [5, -7, 8]
			: isTablet
			? [8, -7, 9]
			: [8, -4.5, 15],
		reactLogoPosition: isSmall
			? [1, 4, -5]
			: isMobile
			? [2, 6, -5]
			: isTablet
			? [3, 3, -2]
			: [12, 4, 1],
		githubLogoPosition: isSmall
			? [-7.5, -1, -10]
			: isMobile
			? [-8.5, -1.2, -8]
			: isTablet
			? [-10, -1.5, -3]
			: [-11, -1.5, 0],
		ringPosition: isSmall
			? [-10, 7, -5]
			: isMobile
			? [-11, 6.5, 0]
			: isTablet
			? [-16, 12, 0]
			: [-25, 13, 0],
		targetPosition: isSmall
			? [-9, -11.5, -8]
			: isMobile
			? [-7, -7.5, 8]
			: isTablet
			? [-10, -9.5, 8]
			: [-13.5, -9.5, 8],
	};
};

// Eduation Props
export const myEducation: EDUCATIONPROPS[] = [
	{
		id: "01",
		uniName: "G H RAISONI COLLEGE OF ENGINEERING AND MANAGEMENT",
		courseName: "BTECH",
		fromYear: "2020",
		toYear: "2024",
		location: "Pune, India",
	},
	{
		id: "02",
		uniName: "SHREE MAHARISHI VIDYA MANDIR",
		courseName: "HSC",
		fromYear: "2019",
		toYear: "2020",
		location: "Chandrapur, India",
	},
	{
		id: "03",
		uniName: "BJM CARMEL ACADEMY",
		courseName: "SSC",
		fromYear: "2016",
		toYear: "2017",
		location: "Chandrapur, India",
	},
];

// Certificates
export const myCertificates: CERTIFICATEPROPS[] = [
	{
		id: "01",
		title: "Harvard's CS50 Python",
		platform: "edX",
		certificateImg: "",
		certificateUrl: "",
	},
	{
		id: "02",
		title: "React and Nextjs with AI Powered Projetcs",
		platform: "Udemy",
		certificateImg: "",
		certificateUrl: "",
	},
	{
		id: "03",
		title: "Harvard's CS50 Python",
		platform: "Udemy",
		certificateImg: "",
		certificateUrl: "",
	},
];
