import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
	const { user, signOutUser } = useContext(AuthContext);
	const signOutUsers = () => {
		signOutUser()
			.then(() => {
				console.log("signed out successfully");
			})
			.catch((error) => {
				console.log("Error while signed out", error);
			});
	};
	const navigationLink = (
		<>
			<li>
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li>
				<NavLink to={"/brands"}>Brands</NavLink>
			</li>
			<li>
				<NavLink to={"/myprofile"}>My Profile</NavLink>
			</li>
			<li>
				<NavLink to={"/aboutDev"}>About Dev</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						{navigationLink}
					</ul>
				</div>
				<a className="text-xl font-bold cursor-pointer hover:scale-110  hover:bg-white/30 hover:p-2 hover:rounded-badge duration-500">
					Chill Gamers
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navigationLink}</ul>
			</div>
			<div className="navbar-end gap-1.5">
				<ThemeToggle></ThemeToggle>
				{user ? (
					<>
						<p>{user.email}</p>
						<button
							onClick={signOutUsers}
							className="btn btn-neutral rounded-4xl"
						>
							Logout
						</button>
					</>
				) : (
					<>
						<Link to={"/login"}>
							<button className="btn btn-outline rounded-4xl">Login</button>
						</Link>
						<Link to={"/register"}>
							<button className="btn btn-accent rounded-4xl">Register</button>
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
