import HomePage from "../pages/Home/home.component";
import WorkPage from "../pages/Work/work.component";
import AboutPage from "../pages/About/about.component";
import ContactPage from "../pages/Contact/contact.component";

const Routes = [
	{
		path: "/",
		component: HomePage,
		page_title: "Home",
		exact: true,
	},
	{
		path: "/work",
		component: WorkPage,
		page_title: "Work",
		exact: false,
	},
	{
		path: "/about",
		component: AboutPage,
		page_title: "About",
		exact: true,
	},
	{
		path: "/contact",
		component: ContactPage,
		page_title: "Contact",
		exact: true,
	},
];

export default Routes;
