import React from "react";
import { useDispatch } from "react-redux";
import Button from "@/components/Button";
import styles from "./Form.less";
import Icon from "../Icon";
import GoogleOutlined from "@ant-design/icons/GoogleOutlined";
import { EOAuthActionTypes } from "@/common/OAuth";

interface IFormProps {
	title: string;
	onSubmit: () => void;
}

const Form: React.FC<IFormProps> = ({
	title,
	onSubmit,
	children
}) => {
	const dispatch = useDispatch();

	const googleOnClick = () => {
		dispatch({
			type: EOAuthActionTypes.googleSignIn,
			callback: (url: string) => {
				openWindow(url, "Google", 600, 700);
			}
		});
	};

	const openWindow = (url: string, name: string, iWidth: number, iHeight: number) => {
		const iTop = (window.screen.height - 30 - iHeight) / 2;
		const iLeft = (window.screen.width - 10 - iWidth) / 2;
		window.open(url, name, "height=" + iHeight + ",innerHeight=" + iHeight
	　　　　+ ",width=" + iWidth + ",innerWidth=" + iWidth + ",top=" + iTop + ",left=" + iLeft
	　　　　+ ",toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no");
	};

	return (
		<div className={styles.formContainer}>
			<h1 className={styles.title}>{title}</h1>
			{children}
			<Button name="Continue" onClick={onSubmit} />
			<p className={styles.text}>Or you can sign in with:</p>
			<div className={styles.iconContainer} onClick={googleOnClick}>
				<Icon title="google">
					<GoogleOutlined />
				</Icon>
			</div>
		</div>
	);
};


export default Form;