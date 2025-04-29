const Subscribe = () => {
	return (
		<div>
			{/* subscribe section */}
			<div className="p-4 rounded-2xl w-3/4 mx-auto border-white bg-white/20 border-2">
				<div className="card bg-base-100 bg-gradient-to-tr from-blue-400/10 to-fuchsia-300/20 py-16">
					<form className="card-body flex items-center">
						<h1 className="text-2xl lg:text-4xl font-bold">
							Subscribe to our Newsletter
						</h1>
						<p className="px-12 text-xl">
							Get the latest updates and news right in your inbox!
						</p>
						<div className=" flex  justify-center gap-3 w-3/4">
							<input
								type="email"
								placeholder=" enter your email"
								className="input input-bordered w-2/3"
								required
							/>
							<button className="btn w-1/4 bg-gradient-to-l from-orange-400 to-fuchsia-400 border-none">
								Subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
