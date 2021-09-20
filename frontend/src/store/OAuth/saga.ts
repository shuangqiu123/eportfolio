import { EOAuthActionTypes } from "@/common/OAuth";
import { IAction } from "@/interface/Redux";
import { google } from "@/service/OAuth";
import { call, ForkEffect, put, takeEvery } from "@redux-saga/core/effects";
import { setURL } from "./action";

function* googleSignInEffect({ callback }: IAction<string>) {
	const url: string = yield call(google);
	callback?.(url);
	yield put(setURL(url));
}

export default function* watchUser(): Generator<ForkEffect<never>, void, unknown> {
	yield takeEvery(EOAuthActionTypes.googleSignIn, googleSignInEffect);
}