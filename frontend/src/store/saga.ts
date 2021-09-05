import { all, AllEffect, fork, ForkEffect } from "redux-saga/effects";
import user from "./User/saga";

export default function* rootSaga(): Generator<AllEffect<ForkEffect<void>>> {
	yield all([
		fork(user)
	]);
}