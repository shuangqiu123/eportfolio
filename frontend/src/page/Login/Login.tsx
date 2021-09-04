import React from "react";
import { Form, Input } from "antd";
import BasicLayout from "@/layout/BasicLayout";
import CustomForm from "@/components/Form";
import styles from "./Login.less";
import { IUserLoginForm } from "@/interface/User";

const Login: React.FC = () => {
	const [form] = Form.useForm();

	// const submit = (values: IUserLoginForm) => {
	// };

	return (
		<BasicLayout hasBorder={false}>
			<CustomForm title="Sign In" onSubmit={()=> {console.log("dada");}}>
				<Form
					layout={"vertical"}
				>
					<Form.Item
						label="Username / Email Address"
						name="usernameOrEmail"
						className={styles.formItem}
						rules={[{ required: true, message: "Please enter a username or password" }]}
					>
						<Input
							className={styles.input}
							placeholder="Enter your username or email here"
						/>
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						className={styles.formItem}
						rules={[{ required: true, message: "Please enter a password" }]}
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
			</CustomForm>
		</BasicLayout>
	);
};

export default Login;