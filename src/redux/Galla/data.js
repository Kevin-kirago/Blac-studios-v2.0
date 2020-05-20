import toycar_img1 from "../../assets/products/toyCar.jpg";
import toycar_img2 from "../../assets/products/toyCar-2.jpg";
import black_img1 from "../../assets/products/black.png";
import valon_img1 from "../../assets/products/Valon_Familly_Pack.jpg";
import valon_img2 from "../../assets/products/Valon_Familly_Pack_Amb.png";
import smirnoff_img1 from "../../assets/products/smirnoff_Hi_Res01.jpg";
import smirnoff_img2 from "../../assets/products/smirnoff_Hi_Res.jpg";
import whiskey_img1 from "../../assets/products/whiskey.png";
import iria_img1 from "../../assets/products/iria.png";
import iria_img2 from "../../assets/products/Iria_fresh_milk01.png";

export default {
	toycar: {
		id: 0,
		routeName: "work/toycar",
		title: "ToyCar",
		thumbnail: toycar_img1,
		reel: null,
		gallery: [toycar_img1, toycar_img2],
	},
	black: {
		id: 1,
		routeName: "work/black",
		title: "Black",
		thumbnail: black_img1,
		reel: "link",
		gallery: [black_img1],
	},
	valon: {
		id: 2,
		routeName: "work/valon",
		title: "Valon Product shot",
		thumbnail: valon_img1,
		reel: null,
		gallery: [valon_img1, valon_img2],
	},
	smirnoff: {
		id: 3,
		routeName: "work/smirnoff",
		title: "Smirnoff",
		thumbnail: smirnoff_img1,
		reel: null,
		gallery: [smirnoff_img1, smirnoff_img2],
	},
	whiskey: {
		id: 4,
		routeName: "work/whiskey",
		title: "Whiskey",
		thumbnail: whiskey_img1,
		reel: null,
		gallery: [whiskey_img1],
	},
	fresh_iria: {
		id: 5,
		routeName: "work/fresh-iria",
		title: "Fresh Iria Milk",
		thumbnail: iria_img1,
		reel: "link",
		gallery: [iria_img1, iria_img2],
	},
};
