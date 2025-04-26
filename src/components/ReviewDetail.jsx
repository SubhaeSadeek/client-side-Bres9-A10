import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ReviewDetail = () => {
	const { user } = useContext(AuthContext);
	const reviewData = useLoaderData();
	const { ratingOfGame, review, title, userName, yearOfPublished } = reviewData;

	const handleAddWatchList = () => {
		const addWatchListData = {
			...reviewData,
			watchListUser: user.displayName || "Anonymous",
			watchListEmail: user.email,
			addedAt: new Date(),
		};
		fetch("http://localhost:5001/addWatchList", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(addWatchListData),
		});
	};
	return (
		<div>
			<p>{ratingOfGame}</p>
			<p>{review}</p>
			<p>{title}</p>
			<p>{userName}</p>
			<p>{yearOfPublished}</p>
			{user && (
				<>
					<button className="btn btn-accent" onClick={handleAddWatchList}>
						Add to Watch List
					</button>
				</>
			)}
		</div>
	);
};

export default ReviewDetail;
