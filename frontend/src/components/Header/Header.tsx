import React, { useState } from "react";
import { connect } from "react-redux";
import { IStoreState } from "@/interface/Redux";
import EportText from "@/asset/icon/EportText.svg";
import EportTextWhite from "@/asset/icon/EportText-white.svg";
import Toggler from "./components/Toggler";
import styles from "./Header.less";

interface IHeaderProps {
	userId: string;
	userName: string;
	isLogoWhite: boolean;
}

const Header: React.FC<IHeaderProps> = ({
	userId,
	userName,
	isLogoWhite
}) => {
	const [visible, setVisible] = useState<boolean>(false);

	const renderLoginSignUpButtons = () => (
		<>
			<a
				className={styles.button}
				href="/user/login"
			>
				LOG IN
			</a>
			<span>|</span>
			<a
				className={styles.button}
				href="/user/signup"
			>
				SIGN UP
			</a>
		</>
	);

	const renderHomeLogoutButtons = () => (
		<>
			<a
				className={styles.button}
				href={`/user/${userName}`}
			>
				HOME
			</a>
			<span>|</span>
			<a
				className={styles.button}
				href="/user/signup"
			>
				LOG OUT
			</a>
		</>
	);
	
	const toggler = () => {
		setVisible(prev => !prev);
	};
	return (
		<header className={styles.headerContainer}>
			{isLogoWhite?
					<img src={EportTextWhite} className={`${styles.logoIcon}`} alt="Eport Icon" /> :
					<img src={EportText} className={`${styles.logoIcon}`} alt="Eport Icon" />
			}
			<div className={styles.rightContainer}>
				<div className={`${styles.buttonContainer} ${visible? styles.visible : ""}`}>
					{userId !== "" ? renderHomeLogoutButtons() : renderLoginSignUpButtons()}
				</div>
				<div className={styles.togglerContainer}>
					<Toggler toggle={toggler} />
				</div>
			</div>
		</header>
	);
};

export default connect(({ user }: IStoreState) => ({
	userId: user.userId,
	userName: user.userName
}))(Header);