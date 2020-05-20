import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";

import App from "./App";
import "./global.styles.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</Provider>,
	document.getElementById("container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
