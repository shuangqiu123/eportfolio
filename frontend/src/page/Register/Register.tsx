import { IStoreState } from "@/interface/Redux";
import BasicLayout from "@/layout/BasicLayout";
import Form from "@/components/Form";
import { Form as AntForm, Input } from "antd";
import React from "react";
import { connect, useDispatch } from "react-redux";
import styles from "./Register.less";
import TagInput from "@/components/TagInput";
import { IUserPostRequest } from "@/interface/User";
import { EUserActionTypes } from "@/common/User";

interface IRegisterProps {
	isLogin: boolean;
}

const Register: React.FC<IRegisterProps> = ({
	isLogin
}) => {
	const [form] = AntForm.useForm();
	const dispatch = useDispatch();

	const onSubmit = () => {
		form.validateFields().then(value => {
			const payload: IUserPostRequest = {
				...value
			};
			dispatch({
				type: EUserActionTypes.signup,
				payload: payload
			});
			form.resetFields();
		});
	};

	return (
		<BasicLayout hasBorder={false}>
			<Form
				title="Sign Up"
				onSubmit={onSubmit}
			>
				<AntForm
					layout={"vertical"}
					form={form}
					validateTrigger="onFinish"
				>
					<AntForm.Item
						label="Your name"
						name="name"
						className={styles.formItem}
						rules={[
							{ required: true, message: "Please enter a name" },
						]}
					>
						<Input
							className={styles.input}
							placeholder="Enter your name"
						/>
					</AntForm.Item>
					<AntForm.Item
						label="Username"
						name="username"
						className={styles.formItem}
						rules={[
							{ required: true, message: "Please enter a username" },
							{ min: 4, message: "Username must be minimum of 4 characters" },
							{
								pattern: /^[a-z]*[0-9]*$/,
								message: "Username should be consist of lowercase characters or digits"
							}
						]}
					>
						<Input
							className={styles.input}
							placeholder="Enter your username"
						/>
					</AntForm.Item>
					<AntForm.Item
						label="Email"
						name="email"
						className={styles.formItem}
						rules={[
							{ required: true, message: "Please enter an email" },
							{
								pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
								message: "Incorrect Email Format"
							}
						]}
					>
						<Input
							className={styles.input}
							placeholder="Enter your Email"
						/>
					</AntForm.Item>
					<AntForm.Item
						label="Password"
						name="password"
						className={styles.formItem}
						rules={[
							{ required: true, message: "Please enter a password" },
							{ min: 8, message: "Password must be minimum 8 characters" },
							{
								pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/,
								message: "Password should contain digits, uppercase and lowercase characters "
							}
						]}
					>
						<Input
							className={styles.input}
							placeholder="Enter your password here"
							type="password"
						/>
					</AntForm.Item>
					<AntForm.Item
						label="Tags"
						name="tags"
						className={styles.formItem}
					>
						<TagInput />
					</AntForm.Item>
				</AntForm>
			</Form>
			
		</BasicLayout>
	);
};

export default connect(({ user }: IStoreState) => ({
	isLogin: user.userId === ""
}))(Register);