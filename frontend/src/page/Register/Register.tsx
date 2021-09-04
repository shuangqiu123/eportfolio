import Icon from "@/components/Icon";
import { IStoreState } from "@/interface/Redux";
import BasicLayout from "@/layout/BasicLayout";
import Form from "@/components/Form";
import GoogleOutlined from "@ant-design/icons/GoogleOutlined";
import { Form as AntForm, Input } from "antd";
import React from "react";
import { connect } from "react-redux";
import styles from "./Register.less";
import TagInput from "@/components/TagInput";

interface IRegisterProps {
	isLogin: boolean;
}

const Register: React.FC<IRegisterProps> = ({
	isLogin
}) => {
	return (
		<BasicLayout hasBorder={false}>
			<Form
				title="Sign Up"
				onSubmit={()=>{console.log("submit");}}
			>
				<AntForm
					layout={"vertical"}
				>
					<AntForm.Item
						label="Your name"
						className={styles.formItem}
					>
						<Input
							className={`${styles.short} ${styles.input}`}
							placeholder="First Name"
						/>
						<Input
							className={`${styles.short} ${styles.input}`}
							placeholder="Last Name"
						/>

					</AntForm.Item>
					<AntForm.Item
						label="Username"
						className={styles.formItem}
					>
						<Input
							className={styles.input}
							placeholder="Enter your username"
						/>
					</AntForm.Item>
					<AntForm.Item
						label="Email"
						className={styles.formItem}
					>
						<Input
							className={styles.input}
							placeholder="Enter your Email"
						/>
					</AntForm.Item>
					<AntForm.Item
						label="Password"
						className={styles.formItem}
					>
						<Input
							className={styles.input}
							placeholder="Enter your password here"
							type="password"
						/>
					</AntForm.Item>
					<AntForm.Item
						label="Tags"
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