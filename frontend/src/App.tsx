import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import LandingPage from "@/page/LandingPage";

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<LandingPage />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
