import HomePage from "../pages/home.component";
import WorkPage from "../pages/work.component";
import AboutPage from "../pages/about.component";
import CareerPage from "../pages/career.component";

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
		path: "/career",
		component: CareerPage,
		page_title: "Careers",
		exact: true,
	},
	{
		path: "/about",
		component: AboutPage,
		page_title: "About",
		exact: true,
	},
];

export default Routes;
