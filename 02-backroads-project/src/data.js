import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
	{
		id: 1,
		href: "#home",
		text: "home",
	},
	{
		id: 2,
		href: "#about",
		text: "about",
	},
	{
		id: 3,
		href: "#services",
		text: "services",
	},
	{
		id: 4,
		href: "#tours",
		text: "tours",
	},
];

export const socialLinks = [
	{
		id: 1,
		href: "https://facebook.com/",
		text: "facebook",
	},
	{
		id: 1,
		href: "https://x.com/",
		text: "twitter",
	},
	{
		id: 1,
		href: "https://instagram.com/",
		text: "instagram",
	},
];

// services
export const services = [
	{
		id: 1,
		title: "saving money",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
		icon: "fas fa-wallet fa-fw",
	},
	{
		id: 2,
		title: "endless hiking",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
		icon: "fas fa-tree fa-fw",
	},
	{
		id: 3,
		title: "amazing comfort",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
		icon: "fas fa-socks fa-fw",
	},
];

// tours
export const tours = [
	{
		id: 1,
		img: tour1,
		date: "august 26th, 2020",
		title: "Tibet Adventure",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		icon: "fas fa-map",
		country: "china",
		tripTime: "6 days",
		price: "from $2100",
	},
	{
		id: 2,
		img: tour2,
		date: "october 1st, 2020",
		title: "best of java",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		icon: "fas fa-map",
		country: "indonesia",
		tripTime: "11 days",
		price: "from $1400",
	},
	{
		id: 3,
		img: tour3,
		date: "september 15th, 2020",
		title: "explore hong kong",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		icon: "fas fa-map",
		country: "hong kong",
		tripTime: "8 days",
		price: "from $5000",
	},
	{
		id: 4,
		img: tour4,
		date: "december 5th, 2020",
		title: "kenya highlights",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		icon: "fas fa-map",
		country: "kenya",
		tripTime: "20 days",
		price: "from $3300",
	},
];
