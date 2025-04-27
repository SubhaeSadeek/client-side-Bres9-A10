import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const ReviewDetail = () => {
	const { user } = useContext(AuthContext);
	const reviewData = useLoaderData();
	const {
		ratingOfGame,
		review,
		title,
		userName,
		yearOfPublished,
		genre,
		image,
		email,
	} = reviewData;

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
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Watch List added to your Profile",
						icon: "success",
						confirmButtonText: "Ok",
					});
				}
			});
	};
	return (
		<div>
			<div className="card bg-base-300 shadow-sm">
				<figure className="px-4 pt-4">
					<img
						src={image}
						alt={`image showing cover of ${title}`}
						className="rounded-xl"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{title}</h2>
					<p>Published year: {yearOfPublished}</p>
					<p>rating: {ratingOfGame}</p>
					<p>Genre: {genre}</p>
					<p>{review}</p>
				</div>
			</div>
			<div className=" bg-accent/50 flex flex-col md:flex-row justify-around mb-4">
				<p>Reviewed by: {userName}</p>
				<p>Reviewer's Email: {email}</p>
			</div>
			{user && (
				<div className="flex justify-center mb-8">
					<button className="btn btn-accent" onClick={handleAddWatchList}>
						Add to Watch List
					</button>
				</div>
			)}
		</div>
	);
};

export default ReviewDetail;
