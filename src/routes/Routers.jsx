import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import ReviewDetail from "../components/ReviewDetail";
import UpdateReview from "../components/UpdateReview";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
import Register from "../pages/Register";
import WatchList from "../pages/WatchList";
import PrivateRoute from "./PrivateRoute";

const Routers = createBrowserRouter([
	{
		path: "/",
		element: <Layout></Layout>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "",
				element: <Home></Home>,
				loader: () => fetch("/coupon.json"),
			},
			{
				path: "/allReviews",
				element: <AllReviews></AllReviews>,
				loader: () => fetch("http://localhost:5001/review"),
			},
			{
				path: "/details/:id",
				element: <ReviewDetail></ReviewDetail>,
				loader: ({ params }) =>
					fetch(`http://localhost:5001/review/${params.id}`),
			},

			{
				path: "addReview",
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
				path: "/watchList",
				element: (
					<PrivateRoute>
						<WatchList></WatchList>
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
