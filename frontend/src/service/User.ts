import { User, UserLoginRequest, UserPostRequest } from "@/interface/User";
import request from "@/util/request";

export async function login(userLoginRequest :UserLoginRequest): Promise<User> {
	return request.post("/auth/login", userLoginRequest);
}

export async function signup(userPostRequest :UserPostRequest): Promise<User> {
	return request.post("/auth/signup", userPostRequest);
}