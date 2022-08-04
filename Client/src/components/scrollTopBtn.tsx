import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../style/scrollTopBtn.css";
function ScrollTopBtn() {
	return (
		<div
			onClick={() =>
				window.scroll({
					top: 0,
					behavior: "smooth",
				})
			}
			id='scroll_btn'
			className='scroll_btn hidden'
		>
			<ExpandLessIcon id='up_arrow' />
		</div>
	);
}
export default ScrollTopBtn;
