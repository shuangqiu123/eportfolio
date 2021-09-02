import React, { useState } from "react";
import { connect } from "react-redux";
import { IStoreState } from "@/interface/Redux";
import EportIcon from "@/asset/icon/EportIcon.svg";
import Toggler from "./components/Toggler";
import styles from "./Header.less";

interface IHeaderProps {
	isLogin: boolean;
	userName: string;
}

const Header: React.FC<IHeaderProps> = (
	isLogin,
	userName
) => {
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
		<div className={styles.headerContainer}>
			<img src={EportIcon} className={styles.logoIcon} alt="Eport Icon" />
			<div className={styles.rightContainer}>
				<div className={`${styles.buttonContainer} ${visible? styles.visible : ""}`}>
					{isLogin? renderHomeLogoutButtons() : renderLoginSignUpButtons()}
				</div>
				<div className={styles.togglerContainer}>
					<Toggler toggle={toggler} />
				</div>
			</div>
		</div>
	);
};

export default connect(({ user }: IStoreState) => ({
	isLogin: user.userId !== "",
	userName: user.userName
}))(Header);