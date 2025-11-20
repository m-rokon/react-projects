const SocialLink = ({ socialNetworks, itemClass }) => {
	return (
		<li>
			<a
				href={socialNetworks.href}
				target="_blank"
				rel="noreferrer"
				className={itemClass}
			>
				<i className={socialNetworks.icon}></i>
			</a>
		</li>
	);
};
export default SocialLink;
