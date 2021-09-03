import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./BasicLayout.less";

interface IBasicLayoutProps {
	hasBorder: boolean;
}

const BasicLayout: React.FC<IBasicLayoutProps> = ({hasBorder, children}) => (
	<div className={styles.basicLayout}>
		<Header isLogoWhite={true} />
		<div className={`${styles.childrenContainer} ${hasBorder? styles.border : ""}`}>
			{children}
		</div>
		<Footer />
	</div>
);

export default BasicLayout;