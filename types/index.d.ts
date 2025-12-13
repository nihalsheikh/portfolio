export interface NAVLINKPROPS {
	id: string;
	name: string;
	href: string;
}

export interface PROJECTPROPS {
	title: string;
	description: string;
	githubLink: string;
	liveLink?: string;
	tags: Array<{
		id: string;
		name: string;
		path: string;
	}>;
}

export interface SCREENSIZEPROPS {
	isSmall: boolean;
	isMobile: boolean;
	isTablet: boolean;
}

export interface SCREENPOSITIONPROPS {
	deskScale: number;
	deskPosition: [number, number, number];
	cubePosition: [number, number, number];
	reactLogoPosition: [number, number, number];
	githubLogoPosition: [number, number, number];
	ringPosition: [number, number, number];
	targetPosition: [number, number, number];
}

export interface WORKEXPERIENCEPROPS {
	id: string;
	name: string;
	pos: string;
	duration: string;
	title: string;
	icon: string;
	animation: string;
}

export interface CERTIFICATEPROPS {
	id: string;
	title: string;
	platform: string;
	certificateImg?: string;
	certificateUrl?: string;
}

export interface EDUCATIONPROPS {
	id: string;
	uniName: string;
	courseName: string;
	fromYear: string;
	toYear: string;
	location: string;
}
