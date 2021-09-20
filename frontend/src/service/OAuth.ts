import request from "@/util/request";

export async function google(): Promise<string> {
	return request
		.get("/auth/oauth/google")
		.then(res => res.data);
}