const MyWatchListCard = ({ watchList }) => {
	const { title, yearOfPublished, ratingOfGame, genre, userName, _id } =
		watchList;

	const handleWatchListDelete = (id) => {
		fetch(`http://localhost:5001/myWatchList/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => console.log(data));

		/* Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete review!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5001/myWatchList/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount) {
							Swal.fire({
								title: "Deleted!",
								text: "Your Review has been deleted.",
								icon: "success",
							}); */
		/* const remainingWatchList = myWatchList.filter(
								(list) => list._id != id
							);
							setMyWatchList(remainingWatchList); */
		/* 			}
					});
			}
		}); */
	};

	return (
		<>
			<tr className="hover:bg-base-300" key={_id}>
				<th></th>
				<td>{title}</td>
				<td>{yearOfPublished}</td>
				<td>{ratingOfGame}</td>
				<td>{genre}</td>
				<td>{userName}</td>
				<td>
					<button className="btn bg-blue-600 mr-2">E</button>
					<button
						onClick={() => handleWatchListDelete(_id)}
						className="btn bg-red-400"
					>
						X
					</button>
				</td>
			</tr>
		</>
	);
};

export default MyWatchListCard;
