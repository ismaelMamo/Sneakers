function Home() {
	function navigate(params: string) {
		window.location.href = `${window.location.origin}/${params}`;
	}
	return (
		<div>
			<div id='side_menu' className='side_menu'>
				<ul className='nav_menu'>
					<li
						onClick={() => navigate("Collection")}
						id='Collection'
						className='Collection'
					>
						Collection
					</li>
					<li onClick={() => navigate("Men")} id='Men' className='Men'>
						Men
					</li>
					<li onClick={() => navigate("Women")} id='Women' className='Women'>
						Women
					</li>
					<li onClick={() => navigate("About")} id='About' className='About'>
						About
					</li>
					<li
						onClick={() => navigate("Contact")}
						id='Contact'
						className='Contact'
					>
						Contact
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Home;
