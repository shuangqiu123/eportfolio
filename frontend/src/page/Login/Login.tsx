import React from "react";
import { Form, Input } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import BasicLayout from "@/layout/BasicLayout";
import Button from "@/components/Button";
import styles from "./Login.less";

const Login: React.FC = () => (
	<BasicLayout hasBorder={false}>
		<div className={styles.loginContainer}>
			<h1 className={styles.title}>Sign In</h1>
			<Form
				layout={"vertical"}
			>
				<Form.Item
					label="Username / Email Address"
					className={styles.formItem}
				>
					<Input
						className={styles.input}
						placeholder="Enter your username or email here"
					/>
				</Form.Item>
				<Form.Item
					label="Password"
					className={styles.formItem}
				>
					<Input
						className={styles.input}
						placeholder="Enter your password here"
						type="password"
					/>
				</Form.Item>
			</Form>
			<div className={styles.otherlink}>
				<a href="/user/signup">Sign Up</a>
			</div>
			<p>Or you can sign in with:</p>
			<div className={styles.iconContainer}>
				<GoogleOutlined width="50px" className={styles.icon} />
			</div>
			<Button name="Continue" onClick={() => {console.log("h1llo");}} />
		</div>
	</BasicLayout>
);

export default Login;