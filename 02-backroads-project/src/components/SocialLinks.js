import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, itemClass }) => {
	return (
		<ul className={parentClass}>
			{socialLinks.map((socialNetworks) => {
				return (
					<SocialLink
						key={socialNetworks.id}
						itemClass={itemClass}
						socialNetworks={socialNetworks}
					/>
				);
			})}
		</ul>
	);
};
export default SocialLinks;
