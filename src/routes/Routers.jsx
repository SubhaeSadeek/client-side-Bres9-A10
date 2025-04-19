import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = createBrowserRouter([
	{
		path: "/",
		element: <Layout></Layout>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("/coupon.json"),
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
		],
	},
]);

export default Routers;
