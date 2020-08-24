import HomePage from "../pages/home.component";
import WorkPage from "../pages/work.component";
import AboutPage from "../pages/about.component";
import ContactPage from "../pages/contact.component";

const Routes = [
	{
		path: "/",
		component: HomePage,
		page_title: "Home",
		exact: true,
	},
	{
		path: "/archive",
		component: WorkPage,
		page_title: "Archive",
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
