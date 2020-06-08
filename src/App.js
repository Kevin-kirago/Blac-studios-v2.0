import React from "react";
import { Switch, Route } from "react-router-dom";

// component
import Navigation from "./components/Navbar/navigation.component";
import Footer from "./components/Footer/footer.component";

// pages
import HomePage from "./pages/Home/home.component";
import WorkPage from "./pages/Work/work.component";
import AboutPage from "./pages/About/about.component";
import ContactPage from "./pages/Contact/contact.component";

const App = () => {
	return (
		<>
			<Navigation />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/work" component={WorkPage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/contact" component={ContactPage} />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
