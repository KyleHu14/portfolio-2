import Styles from "../styles/Icon.module.css";

const Icon = ({
	svgLink,
	desc,
	link,
}: {
	svgLink: string;
	desc: string;
	link: string;
}) => {
	return (
		<a href={link}>
			<div className={Styles.iconContainer}>
				<div className={Styles.iconDesc}>{desc}</div>
				<div className={Styles.icon}>
					<img src={svgLink}></img>
				</div>
			</div>
		</a>
	);
};

export default Icon;
