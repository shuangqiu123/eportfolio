import { EUserActionTypes } from "@/common/User";
import { IAction } from "@/interface/Redux";
import { IUserLoginRequest, IUserPostRequest, User } from "@/interface/User";
import { login, signup } from "@/service/User";
import { call, ForkEffect, put, takeEvery } from "@redux-saga/core/effects";
import { setUser } from "./action";

function* loginEffect({ payload, callback }: IAction<IUserLoginRequest>) {
	if (!payload) {
		return;
	}
	const user: User = yield call(login, payload);
	if (user !== null) {
		yield put(setUser(user));
		callback?.();
	}
}

function* signupEffect({ payload }: IAction<IUserPostRequest>) {
	if (!payload) {
		return;
	}
	const user: User = yield call(signup, payload);
	yield put(setUser(user));	
}


export default function* watchUser(): Generator<ForkEffect<never>, void, unknown> {
	yield takeEvery(EUserActionTypes.login, loginEffect);
	yield takeEvery(EUserActionTypes.signup, signupEffect);
}