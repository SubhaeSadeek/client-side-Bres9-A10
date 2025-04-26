import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyReviews = () => {
	const [myReviews, setMyReviews] = useState([]);
	const { user } = useContext(AuthContext);
	const email = user?.email;

	useEffect(() => {
		if (email) {
			fetch("http://localhost:5001/review", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ email }),
			})
				.then((res) => res.json())
				.then((data) => setMyReviews(data))
				.catch((error) => console.error("Error Fetching My Review", error));
		}
	}, [email]);

	console.log("here is my all reviews", myReviews);
	return <div>my reviews pages</div>;
};

export default MyReviews;
