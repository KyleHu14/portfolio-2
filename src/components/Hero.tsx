import Icon from "./Icon";
import Styles from "../styles/Hero.module.css";

const Hero = () => {
	return (
		<div className={Styles.heroContainer}>
			<div className={Styles.intro}>
				Hello! I'm <div className={Styles.introName}>Kyle.</div>
				<div className={Styles.desc}>
					I am a undergraduate student studying Computer Science at
					University of California Irvine who is interested in web
					development.
				</div>
			</div>
			<div className={Styles.contactIcons}>
				<div className={Styles.gridItem1}>
					<Icon
						desc="Resume"
						svgLink="doc.svg"
						link="https://drive.google.com/file/d/1OrVLXR9363-fSlaJHppOuOSUk9nCv9DH/view?usp=share_link"
					/>
				</div>
				<div className={Styles.gridItem2}>
					<Icon
						desc="Email"
						svgLink="envelope-at.svg"
						link="mailto:kylebusiness1688@gmail.com"
					/>
				</div>
				<div className={Styles.gridItem3}>
					<Icon
						desc="Github"
						svgLink="github.svg"
						link="https://github.com/KyleHu14"
					/>
				</div>
				<div className={Styles.gridItem4}>
					<Icon
						desc="LinkedIn"
						svgLink="linkedin.svg"
						link="https://www.linkedin.com/in/kyle-vic-hu/"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
