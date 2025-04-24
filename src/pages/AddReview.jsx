import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddReview = () => {
	const { user } = useContext(AuthContext);
	const addReviewHandler = (e) => {
		e.preventDefault();
		const title = e.target.gameTitle.value;
		const image = e.target.imageURL.value;
		const yearOfPublished = e.target.yearPublished.value;
		const ratingOfGame = e.target.rating.value;
		const genre = e.target.genre.value;
		const review = e.target.review.value;
		const userName = user.displayName;
		const email = user.email;

		const addedReview = {
			title,
			image,
			yearOfPublished,
			ratingOfGame,
			genre,
			review,
			userName,
			email,
		};
		console.log(addedReview);
		fetch("http://localhost:5001/review", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(addedReview),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Your Review added successfully",
						icon: "success",
						confirmButtonText: "Ok",
					});
				}
			});

		e.target.reset();
	};

	return (
		<div>
			<h1 className="text-4xl font-semibold text-fuchsia-700 mt-8 text-center">
				Here is the Playground for Awsome Reviews
			</h1>
			<h3 className="text-xl font-medium text-center">
				Please Give Review Below:
			</h3>
			<form
				onSubmit={addReviewHandler}
				className="w-11/12  mx-auto mt-12 bg-fuchsia-900/50 mb-8 rounded-2xl"
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
						/>
						<label className="label">Cover Image URL</label>
						<input
							type="text"
							className="input"
							placeholder="Cover Image URL"
							name="imageURL"
						/>
						<label className="label">Publishing Year</label>
						<input
							type="text"
							className="input"
							placeholder="publishing year, eg. 2025"
							name="yearPublished"
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
						/>
						<label className="label">Genre</label>
						<select defaultValue="Pick a Genre" className="select" name="genre">
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
						></textarea>

						<label className="label">User Name</label>
						<input
							type="text"
							className="input"
							value={user.displayName}
							readOnly
						/>

						<label className="label">Email</label>
						<input type="text" className="input" value={user.email} readOnly />
					</fieldset>
				</div>
				<div className="flex justify-center py-8">
					<button className="btn w-5/6">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default AddReview;
