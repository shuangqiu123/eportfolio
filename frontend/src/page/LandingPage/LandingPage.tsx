import React from "react";
import LandingPageLayout from "@/layout/LandingPageLayout";
import EportText from "@/asset/icon/EportText.svg";
import styles from "./LandingPage.less";

const LandingPage: React.FC = () => {
	return (
		<LandingPageLayout>
			<div className={styles.landingPage}>
				<img src={EportText} className={styles.eportText} alt="The eport logo" />
				<h1 className={styles.eportDescription}>Kick start your professional life with ePort</h1>
			</div>
		</LandingPageLayout>
	);
};

export default LandingPage;