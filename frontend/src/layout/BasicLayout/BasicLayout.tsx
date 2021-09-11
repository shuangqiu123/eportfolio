import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useViewport } from "@/hook/useViewport";
import styles from "./BasicLayout.less";

interface IBasicLayoutProps {
	hasBorder: boolean;
}

const BasicLayout: React.FC<IBasicLayoutProps> = ({hasBorder, children}) => {
	const [width] = useViewport();

	return (
		<div className={styles.basicLayout}>
			<Header isLogoWhite={width > 1600} />
			<div className={`${styles.childrenContainer} ${hasBorder? styles.border : ""}`}>
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default BasicLayout;