import { TAGSPROPS } from "@/types";
import Image from "next/image";

const Tag = ({ title, iconImg, tagStyles }: TAGSPROPS) => {
	const theme = "dark";

	return (
		<div
			className={`${
				tagStyles
					? tagStyles
					: theme === "dark"
					? "bg-emerald-950 border-2 border-emerald-600 hover:bg-emerald-900"
					: "bg-blue-950 border-2 border-blue-600 hover:bg-blue-600"
			}  text-zinc-300 hover:text-white cursor-pointer rounded-full w-fit h-fit p-2 ml-2 mr-2 font-semibold uppercase text-center text-xs`}
		>
			<div className="flex flex-row justify-between items-center">
				<div className="mr-2">
					<Image src={iconImg} alt={title} width={10} height={10} />
				</div>
				<div>{title}</div>
			</div>
		</div>
	);
};

export default Tag;
