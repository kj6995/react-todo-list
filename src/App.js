import {useState, useReducer} from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import NotFoundPage from "./components/NotFoundPage";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/aboutus" component={AboutUs} />
				<Route exact path="/404" component={NotFoundPage} />
				<Redirect to="/404" />
			</Switch>
		</Router>
	);
}

export default App;
