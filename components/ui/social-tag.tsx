import { SOCIALTAGPROPS } from "@/types";
import Image from "next/image";
import Link from "next/link";

const SocialTag = ({ title, socialLinkUrl, iconUrl }: SOCIALTAGPROPS) => {
	return (
		<div id={title}>
			<div className="p-2 bg-transparent hover:bg-zinc-100 rounded-full">
				<Link href={socialLinkUrl} target="_blank" className="">
					<Image src={iconUrl} alt={title} width={20} height={20} />
				</Link>
			</div>
		</div>
	);
};

export default SocialTag;
