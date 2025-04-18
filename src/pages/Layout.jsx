import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<div className="container mx-auto">
			<div>
				<Toaster></Toaster>
			</div>
			<Navbar></Navbar>
			<div className="min-h-dvh">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Layout;
