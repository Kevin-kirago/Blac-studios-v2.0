import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./routes/routes";

// component
import Navigation from "./components/Navbar/navigation.component";
import Footer from "./components/footer.component";

const App = () => {
	const routeComponents = Routes.map(({ path, component, exact }, key) => {
		return <Route key={key} exact={exact ? true : false} path={path} component={component} />;
	});

	return (
		<>
			<Navigation />
			<Switch>{routeComponents}</Switch>
			<Footer />
		</>
	);
};

export default App;
