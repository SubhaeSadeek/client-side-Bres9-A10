import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		children: [{}],
	},
]);

export default Routes;
