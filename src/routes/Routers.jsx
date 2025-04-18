import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Layout from "../pages/Layout";

const Routers = createBrowserRouter([
	{
		path: "/",
		element: <Layout></Layout>,
		errorElement: <Error></Error>,
		children: [{}],
	},
]);

export default Routers;
