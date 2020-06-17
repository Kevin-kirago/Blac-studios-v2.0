import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./routes/routes";
import { gsap, CSSPlugin } from "gsap/all";

// component
import Navigation from "./components/navigation.component";
import Footer from "./components/footer.component";

gsap.registerPlugin(CSSPlugin);
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
