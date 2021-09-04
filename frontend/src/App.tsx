import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import LandingPage from "@/page/LandingPage";
import Login from "@/page/Login";
import Register from "./page/Register";

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route path="/user/login">
					<Login />
				</Route>
				<Route path="/user/signup">
					<Register />
				</Route>

			</Switch>
		</Router>
	);
};

export default App;
