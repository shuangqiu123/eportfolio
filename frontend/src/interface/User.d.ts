export interface User {
	userId: string;
	userName: string;
	tags: string[];
	email: string;
	name: string;
	description?: string;
	isVerified?: boolean;
}

export interface UserLoginRequest {
	userName?: string;
	email?: string;
	password: string;
}

export interface UserPostRequest {
	userId?: string;
	userName: string;
	email: string;
	password: string;
	tags: string[];
	name: string;
	description?: string;
}