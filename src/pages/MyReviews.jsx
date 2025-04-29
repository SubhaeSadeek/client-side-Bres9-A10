import { useContext, useEffect, useState } from "react";
import MyReviewsCard from "../components/MyReviewsCard";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../utils/useTitle";

const MyReviews = () => {
	useTitle("My Review");
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

	return (
		<div>
			<h1 className="text-center text-2xl font-bold text-cyan-700 mt-8">
				My Review Total -
				<span className="text-cyan-700"> {myReviews.length}</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{myReviews.map((myReview) => (
					<MyReviewsCard
						key={myReview._id}
						myReview={myReview}
						myReviews={myReviews}
						setMyReviews={setMyReviews}
					></MyReviewsCard>
				))}
			</div>
		</div>
	);
};

export default MyReviews;
