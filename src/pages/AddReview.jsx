const AddReview = () => {
	return (
		<div>
			<h1 className="text-4xl font-semibold text-fuchsia-700 mt-8 text-center">
				Here is the Playground for Awsome Reviews
			</h1>
			<h3 className="text-xl font-medium text-black/65 text-center">
				Please Give Review Below:
			</h3>
			<form action="" className="w-11/12 bg-fuchsia-100/50 mx-auto mt-12">
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">Page details</legend>

					<label className="label">Title</label>
					<input type="text" className="input" placeholder="My awesome page" />

					<label className="label">Slug</label>
					<input type="text" className="input" placeholder="my-awesome-page" />

					<label className="label">Author</label>
					<input type="text" className="input" placeholder="Name" />
				</fieldset>
			</form>
		</div>
	);
};

export default AddReview;
