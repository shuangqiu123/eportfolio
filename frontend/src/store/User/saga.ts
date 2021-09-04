import { EUserActionTypes } from "@/common/User";
import { IAction } from "@/interface/Redux";
import { IUserLoginRequest, User } from "@/interface/User";
import { login } from "@/service/User";
import { call, ForkEffect, put, takeEvery } from "@redux-saga/core/effects";
import { setUser } from "./action";

function* loginEffect({ payload }: IAction<IUserLoginRequest>) {
	if (!payload) {
		return;
	}
	const user: User = yield call(login, payload);
	yield put(setUser(user));	
}


export default function* watchUser(): Generator<ForkEffect<never>, void, unknown> {
	yield takeEvery(EUserActionTypes.login, loginEffect);
}