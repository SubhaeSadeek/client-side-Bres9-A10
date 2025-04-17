import PropTypes from "prop-types";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return <span className="loading loading-bars loading-lg"></span>;
	}
	user ||
		toast.success("Oops! Please log in first", {
			style: {
				border: "1px solid #713200",
				padding: "16px",
				color: "#713200",
			},
			iconTheme: {
				primary: "#713200",
				secondary: "#FFFAEE",
			},
		});
	return <div>{user ? children : <Navigate to={"/login"}></Navigate>}</div>;
};

PrivateRoute.propTypes = {
	children: PropTypes.any,
};
export default PrivateRoute;
