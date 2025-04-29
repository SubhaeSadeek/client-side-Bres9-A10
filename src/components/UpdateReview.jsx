import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../utils/useTitle";

const UpdateReview = () => {
	useTitle("Update Review");
	const { user } = useContext(AuthContext);

	const currentReview = useLoaderData();
	/* const { title, image, yearOfPublished, ratingOfGame, genre, review, _id } =
		currentReview; */
	const [title, setTitle] = useState(currentReview.title);
	const [image, setImage] = useState(currentReview.image);
	const [yearOfPublished, setYearOfPublished] = useState(
		currentReview.yearOfPublished
	);
	const [ratingOfGame, setRatingOfGame] = useState(currentReview.ratingOfGame);
	const [genre, setGenre] = useState(currentReview.genre);
	const [review, setReview] = useState(currentReview.review);
	const { _id } = currentReview;

	const updateReviewHandler = (e) => {
		e.preventDefault();

		const userName = user.displayName;
		const email = user.email;

		const updatedReview = {
			title,
			image,
			yearOfPublished,
			ratingOfGame,
			genre,
			review,
			userName,
			email,
		};
		fetch(`https://server-side-bres9-a10.onrender.com/review/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedReview),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					Swal.fire({
						title: "Success!",
						text: "Your Review Updated successfully",
						icon: "success",
						confirmButtonText: "Ok",
					});
				}
			});
	};

	return (
		<div>
			<h1 className="text-4xl font-semibold text-fuchsia-700 mt-8 text-center">
				Please Update Your Review
			</h1>
			<h3 className="text-xl font-medium text-center">Please update below:</h3>
			<form
				onSubmit={updateReviewHandler}
				className="w-11/12  mx-auto mt-12 bg-blue-900/50 mb-8 rounded-2xl"
			>
				<div className="flex justify-around">
					<fieldset className="fieldset rounded-box w-xs border-t-2 p-4">
						<legend className="fieldset-legend">General Info about Game</legend>

						<label className="label">Game Title</label>
						<input
							type="text"
							className="input"
							placeholder="name of the game"
							name="gameTitle"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<label className="label">Cover Image URL</label>
						<input
							type="text"
							className="input"
							placeholder="Cover Image URL"
							name="imageURL"
							value={image}
							onChange={(e) => setImage(e.target.value)}
						/>
						<label className="label">Publishing Year</label>
						<input
							type="text"
							className="input"
							placeholder="publishing year, eg. 2025"
							name="yearPublished"
							value={yearOfPublished}
							onChange={(e) => setYearOfPublished(e.target.value)}
						/>
						<label className="label">Rating</label>
						<input
							type="number"
							min="0"
							max="10"
							step="1"
							className="input"
							placeholder="rating"
							name="rating"
							value={ratingOfGame}
							onChange={(e) => setRatingOfGame(e.target.value)}
						/>
						<label className="label">Genre</label>
						<select
							className="select"
							name="genre"
							value={genre}
							onChange={(e) => setGenre(e.target.value)}
						>
							<option disabled={true}>Pick a Genre</option>
							<option>Action</option>
							<option>RPG</option>
							<option>Adventure</option>
						</select>
					</fieldset>
					<fieldset className="fieldset rounded-box w-xs border-t-2 p-4">
						<legend className="fieldset-legend">Your Review</legend>

						<label className="label">Give Your Review</label>
						<textarea
							placeholder="your Review..."
							className="textarea textarea-sm h-44"
							name="review"
							value={review}
							onChange={(e) => setReview(e.target.value)}
						></textarea>

						<label className="label">User Name</label>
						<input
							type="text"
							className="input text-amber-800 font-semibold"
							value={user.displayName}
							readOnly
						/>

						<label className="label">Email</label>
						<input
							type="text"
							className="input text-amber-800 font-semibold"
							value={user.email}
							readOnly
						/>
					</fieldset>
				</div>
				<div className="flex justify-center py-8">
					<button className="btn w-5/6">Update</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateReview;
