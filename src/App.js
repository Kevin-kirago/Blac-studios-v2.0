import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// component
import Navigation from "./components/Navigation/navigation.component";
import Footer from "./components/Footer/footer.component";

// pages
import HomePage from "./pages/Home/home.component";
import WorkPage from "./pages/Work/work.component";
import AboutPage from "./pages/About/about.component";
import ContactPage from "./pages/Contact/contact.component";

class App extends Component {
	componentDidMount() {
		switch (this.props.location.pathname) {
			case "/":
				document.title = "Home | Blac Studios";
				return;
			case "/work":
				document.title = "Work | Blac Studios";
				return;
			case "/about":
				document.title = "About | Blac Studios";
				return;
			case "/contact":
				document.title = "Contact | Blac Studios";
				return;
			default:
				document.title = "Work | Blac Studios";
				return;
		}
	}

	render() {
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
	}
}

export default withRouter(App);
