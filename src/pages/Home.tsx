import { useEffect } from "react";
import up_divider from "../images/up_divider.png";
import down_divider from "../images/down_divider.png";
import FlipText from "../components/flipText";
import ScrollTopBtn from "../components/scrollTopBtn";

import "../style/home.css";

import Carousel from "../components/carousel";
function Home() {
	useEffect(() => {
		window.addEventListener("scroll", scroll_1_event_down);
	});

	function scroll_1_event_down() {
		if (window.pageYOffset > 400) {
			window.removeEventListener("scroll", scroll_1_event_down);
			window.addEventListener("scroll", scroll_1_event_up);
			let element = document.getElementById("scroll_btn")!;
			element.classList.remove("hidden");
		}
	}
	function scroll_1_event_up() {
		if (window.pageYOffset < 100) {
			window.removeEventListener("scroll", scroll_1_event_up);
			window.addEventListener("scroll", scroll_1_event_down);
			let element = document.getElementById("scroll_btn")!;
			element.classList.add("hidden");
		}
	}

	return (
		<div className='home_container'>
			<Carousel
				data={[
					"https://cms-static.asics.com/media-libraries/54842/file.jpg?1612484303015?",
					"https://cdna.artstation.com/p/assets/images/images/047/520/028/large/rahul-chandra-nike-show.jpg?1647799767",
					"https://ca-cdn.runningroom.com/pub/media/catalog/category/m-shoes_banner-S2021.jpg",
				]}
			/>
			<FlipText
				data={[
					["W", "E", "L", "C", "O", "M", "E"],
					["T", "O"],
					["S", "N", "E", "A", "K", "E", "R", "S"],
				]}
			/>
			<div>
				<div id='home_body_1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
					vulputate tellus sed nisi varius, in ultricies lacus porta. Curabitur
					bibendum nisi purus, non facilisis lacus pulvinar vel. Nunc ligula
					ipsum, cursus id porta ut, vehicula ut risus. Sed vitae nisi a nibh
					luctus luctus. Vestibulum ut volutpat lorem, sed dapibus erat.
					Vestibulum sit amet tortor odio. Class aptent taciti sociosqu ad
					litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
					eget dapibus magna. Mauris rhoncus quam vel quam semper venenatis.
					Curabitur dictum ex nisi, eget sagittis nibh tincidunt at. Fusce
					auctor arcu eget lacus interdum pellentesque. Mauris consequat eu
					turpis id mattis. Nullam sollicitudin auctor lobortis. Sed tempus
					justo in ligula fringilla malesuada. Nam vitae dui eu quam condimentum
					luctus id at neque. Donec imperdiet vehicula mattis. Maecenas
					hendrerit lacus erat, quis ullamcorper lacus eleifend sit amet.
					Vestibulum posuere dui eu neque pulvinar, eu sagittis purus interdum.
					Aenean volutpat ex non sapien placerat, quis lacinia libero volutpat.
					Vivamus non mi rhoncus nulla pretium congue eget vitae felis.
					Phasellus quis facilisis nisi, vel faucibus elit. Fusce convallis,
					urna et commodo tristique, dolor turpis facilisis orci, vitae accumsan
					velit urna iaculis ex. Ut vitae enim neque. Morbi quis quam ut felis
					rutrum ultrices. Curabitur consequat sapien ut metus elementum, a
					euismod nulla maximus. Etiam in ullamcorper magna, eget iaculis orci.
					Maecenas feugiat auctor lectus, quis fermentum quam finibus vel.
					Vivamus ac felis quis erat fermentum malesuada. Suspendisse eget quam
					sed lectus tristique cursus id a lacus. Suspendisse venenatis ligula
					in nulla imperdiet aliquam. Donec eget felis id purus dapibus mattis.
					Maecenas eleifend risus enim, vel rutrum lectus mollis ac. Aenean
					pretium, enim at sagittis mattis, massa lectus porttitor massa, ut
					euismod erat nisl ut ipsum. Nam vitae erat convallis, tincidunt nisl
					in, suscipit odio. Mauris nec porta libero. Vestibulum et lectus
					blandit, dictum magna vel, aliquet neque. Curabitur malesuada enim id
					tincidunt vehicula. Sed eget finibus quam. Nunc non odio ut ante
					ultricies facilisis. Proin orci arcu, varius eu dictum id, rutrum
					scelerisque leo. Mauris neque est, molestie imperdiet rutrum
					fringilla, pulvinar lobortis ipsum. Morbi facilisis dolor lacus, vitae
					interdum magna rhoncus vel. Suspendisse quis vestibulum arcu, et
					rhoncus ex. Cras ac eros id odio volutpat ultrices. Nunc sapien nisi,
					vehicula quis neque non, semper interdum mauris. Aenean dui velit,
					laoreet eget eleifend in, placerat id dolor. Maecenas sed ornare nunc,
					quis consectetur nisl. Proin faucibus eros semper lectus facilisis
					convallis. Quisque molestie molestie felis. Curabitur sagittis turpis
					orci, non dapibus mi tempus id. Phasellus lorem elit, interdum eget
					eros quis, consequat dapibus lorem. Duis tincidunt mauris porta est
					faucibus, auctor dictum lorem sodales. Duis accumsan est in cursus
					ultrices. Maecenas vestibulum, magna sed viverra commodo, nisi lectus
					tempor ligula, a iaculis augue purus at sem. Aenean blandit erat
					imperdiet nisi sagittis, nec dictum lacus sodales. Suspendisse semper
					pretium libero, vestibulum pulvinar nisi ullamcorper et. Maecenas
					euismod lorem eget dui lobortis fermentum. Cras scelerisque magna
					eros, quis vehicula sapien ornare et. Integer gravida, neque in
					sodales scelerisque, ante leo imperdiet libero, at finibus arcu lorem
					non orci. Donec iaculis hendrerit orci vitae pharetra.
				</div>
				<div id='home_body_2'>
					<img id='up_divider' alt='' src={up_divider} />
					<div id='sub_home_body_2'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
						vulputate tellus sed nisi varius, in ultricies lacus porta.
						Curabitur bibendum nisi purus, non facilisis lacus pulvinar vel.
						Nunc ligula ipsum, cursus id porta ut, vehicula ut risus. Sed vitae
						nisi a nibh luctus luctus. Vestibulum ut volutpat lorem, sed dapibus
						erat. Vestibulum sit amet tortor odio. Class aptent taciti sociosqu
						ad litora torquent per conubia nostra, per inceptos himenaeos.
						Curabitur eget dapibus magna. Mauris rhoncus quam vel quam semper
						venenatis. Curabitur dictum ex nisi, eget sagittis nibh tincidunt
						at. Fusce auctor arcu eget lacus interdum pellentesque. Mauris
						consequat eu turpis id mattis. Nullam sollicitudin auctor lobortis.
						Sed tempus justo in ligula fringilla malesuada. Nam vitae dui eu
						quam condimentum luctus id at neque. Donec imperdiet vehicula
						mattis. Maecenas hendrerit lacus erat, quis ullamcorper lacus
						eleifend sit amet. Vestibulum posuere dui eu neque pulvinar, eu
						sagittis purus interdum. Aenean volutpat ex non sapien placerat,
						quis lacinia libero volutpat. Vivamus non mi rhoncus nulla pretium
						congue eget vitae felis. Phasellus quis facilisis nisi, vel faucibus
						elit. Fusce convallis, urna et commodo tristique, dolor turpis
						facilisis orci, vitae accumsan velit urna iaculis ex. Ut vitae enim
						neque. Morbi quis quam ut felis rutrum ultrices. Curabitur consequat
						sapien ut metus elementum, a euismod nulla maximus. Etiam in
						ullamcorper magna, eget iaculis orci. Maecenas feugiat auctor
						lectus, quis fermentum quam finibus vel. Vivamus ac felis quis erat
						fermentum malesuada. Suspendisse eget quam sed lectus tristique
						cursus id a lacus. Suspendisse venenatis ligula in nulla imperdiet
						aliquam. Donec eget felis id purus dapibus mattis. Maecenas eleifend
						risus enim, vel rutrum lectus mollis ac. Aenean pretium, enim at
						sagittis mattis, massa lectus porttitor massa, ut euismod erat nisl
						ut ipsum. Nam vitae erat convallis, tincidunt nisl in, suscipit
						odio. Mauris nec porta libero. Vestibulum et lectus blandit, dictum
						magna vel, aliquet neque. Curabitur malesuada enim id tincidunt
						vehicula. Sed eget finibus quam. Nunc non odio ut ante ultricies
						facilisis. Proin orci arcu, varius eu dictum id, rutrum scelerisque
						leo. Mauris neque est, molestie imperdiet rutrum fringilla, pulvinar
						lobortis ipsum. Morbi facilisis dolor lacus, vitae interdum magna
						rhoncus vel. Suspendisse quis vestibulum arcu, et rhoncus ex. Cras
						ac eros id odio volutpat ultrices. Nunc sapien nisi, vehicula quis
						neque non, semper interdum mauris. Aenean dui velit, laoreet eget
						eleifend in, placerat id dolor. Maecenas sed ornare nunc, quis
						consectetur nisl. Proin faucibus eros semper lectus facilisis
						convallis. Quisque molestie molestie felis. Curabitur sagittis
						turpis orci, non dapibus mi tempus id. Phasellus lorem elit,
						interdum eget eros quis, consequat dapibus lorem. Duis tincidunt
						mauris porta est faucibus, auctor dictum lorem sodales. Duis
						accumsan est in cursus ultrices. Maecenas vestibulum, magna sed
						viverra commodo, nisi lectus tempor ligula, a iaculis augue purus at
						sem. Aenean blandit erat imperdiet nisi sagittis, nec dictum lacus
						sodales. Suspendisse semper pretium libero, vestibulum pulvinar nisi
						ullamcorper et. Maecenas euismod lorem eget dui lobortis fermentum.
						Cras scelerisque magna eros, quis vehicula sapien ornare et. Integer
						gravida, neque in sodales scelerisque, ante leo imperdiet libero, at
						finibus arcu lorem non orci. Donec iaculis hendrerit orci vitae
						pharetra.
					</div>
					<img id='down_divider' alt='' src={down_divider} />
				</div>
			</div>
			<ScrollTopBtn />
		</div>
	);
}

export default Home;
