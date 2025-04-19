import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import UpdateReview from "../components/UpdateReview";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
				path: "/reviews",
				element: <AllReviews></AllReviews>,
			},

			{
				path: "addreview",
				element: (
					<PrivateRoute>
						<AddReview></AddReview>
					</PrivateRoute>
				),
			},
			{
				path: "myReview",
				element: (
					<PrivateRoute>
						<MyReviews></MyReviews>
					</PrivateRoute>
				),
			},
			{
				path: "/updateReview/:id",
				element: (
					<PrivateRoute>
						<UpdateReview></UpdateReview>
					</PrivateRoute>
				),
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
