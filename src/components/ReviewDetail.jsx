import { useLoaderData } from "react-router-dom";

const ReviewDetail = () => {
	const reviewData = useLoaderData();
	const { ratingOfGame, review, title, userName, yearOfPublished } = reviewData;
	return (
		<div>
			<p>{ratingOfGame}</p>
			<p>{review}</p>
			<p>{title}</p>
			<p>{userName}</p>
			<p>{yearOfPublished}</p>
		</div>
	);
};

export default ReviewDetail;
