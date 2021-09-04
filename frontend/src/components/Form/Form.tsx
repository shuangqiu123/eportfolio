import React from "react";
import Button from "@/components/Button";
import styles from "./Form.less";
import Icon from "../Icon";
import GoogleOutlined from "@ant-design/icons/GoogleOutlined";

interface IFormProps {
	title: string;
	onSubmit: () => void;
}

const Form: React.FC<IFormProps> = ({
	title,
	onSubmit,
	children
}) => (
	<div className={styles.formContainer}>
		<h1 className={styles.title}>{title}</h1>
		{children}
		<Button name="Continue" onClick={onSubmit} />
		<p className={styles.text}>Or you can sign in with:</p>
		<div className={styles.iconContainer}>
			<Icon title="google" href="/">
				<GoogleOutlined />
			</Icon>
		</div>
	</div>
);


export default Form;