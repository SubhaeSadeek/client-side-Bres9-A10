import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyWatchListCard = ({ watchList, myWatchList, setMyWatchList }) => {
	const { title, yearOfPublished, ratingOfGame, genre, userName, _id } =
		watchList;
	const navigate = useNavigate();

	const handleWatchListDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete review!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://server-side-bres9-a10.onrender.com/myWatchList/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount) {
							Swal.fire({
								title: "Deleted!",
								text: "Your Review has been deleted.",
								icon: "success",
							});
							const remainingWatchList = myWatchList.filter(
								(list) => list._id != id
							);
							setMyWatchList(remainingWatchList);
						}
					});
			}
		});
	};
	const handleDetailClick = (id) => {
		navigate(`/details/${id}`);
	};
	return (
		<>
			<tr className="hover:bg-base-300 text-blue-700 font-semibold" key={_id}>
				<th></th>
				<td>{title}</td>
				<td className="text-blue-700">{yearOfPublished}</td>
				<td className="text-blue-700">{ratingOfGame}</td>
				<td className="text-blue-700">{genre}</td>
				<td className="text-amber-700">{userName}</td>
				<td>
					<button
						className="btn bg-green-600 mr-2"
						onClick={() => handleDetailClick(_id)}
					>
						Detail
					</button>
					<button
						onClick={() => handleWatchListDelete(_id)}
						className="btn bg-red-400"
					>
						Delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default MyWatchListCard;
