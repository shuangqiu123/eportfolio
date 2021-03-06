import { all, AllEffect, fork, ForkEffect } from "redux-saga/effects";
import user from "./User/saga";
import oauth from "./OAuth/saga";

export default function* rootSaga(): Generator<AllEffect<ForkEffect<void>>> {
	yield all([
		fork(user),
		fork(oauth)
	]);
}