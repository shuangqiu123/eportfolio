import { AnyAction } from "redux";
import { ILoadingStoreState } from "./Loading";
import { IUserStoreState } from "./User";

export interface IAction<T = unknown> extends AnyAction {
	payload?: T;
	callback?: () => unknown;
}
export interface IStoreState {
	user: IUserStoreState;
	loading: ILoadingStoreState;
}