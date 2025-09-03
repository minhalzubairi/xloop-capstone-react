"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Instagram, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

// Sample Data
const products = [
	{
		id: 1,
		name: "Fresh Avocados",
		price: "$2.99 / lb",
		image: "/products/avocado.jpg",
	},
	{
		id: 2,
		name: "Organic Bananas",
		price: "$1.29 / lb",
		image: "/products/banana.jpg",
	},
	{
		id: 3,
		name: "Cherry Tomatoes",
		price: "$3.49 / box",
		image: "/products/tomato.jpg",
	},
	{
		id: 4,
		name: "Baby Spinach",
		price: "$2.49 / bag",
		image: "/products/spinach.jpg",
	},
	{
		id: 5,
		name: "Whole Wheat Bread",
		price: "$2.99",
		image: "/products/bread.jpg",
	},
	{
		id: 6,
		name: "Almond Milk",
		price: "$3.99",
		image: "/products/almond-milk.jpg",
	},
];

const categories = [
	{
		id: 1,
		title: "Fresh Produce",
		image: "/categories/produce.jpg",
	},
	{
		id: 2,
		title: "Bakery",
		image: "/categories/bakery.jpg",
	},
	{
		id: 3,
		title: "Dairy & Eggs",
		image: "/categories/dairy.jpg",
	},
	{
		id: 4,
		title: "Pantry Staples",
		image: "/categories/pantry.jpg",
	},
];

const testimonials = [
	{
		id: 1,
		name: "Sam Patel",
		avatar: "/avatars/sam.jpg",
		text: "The produce is always fresh and the delivery is quick. My go-to grocery store!",
	},
	{
		id: 2,
		name: "Maria Gomez",
		avatar: "/avatars/maria.jpg",
		text: "Love the organic options and friendly service. Highly recommended!",
	},
	{
		id: 3,
		name: "Chris Lee",
		avatar: "/avatars/chris.jpg",
		text: "Easy to order and great selection. The bakery items are delicious!",
	},
];

// Accent color (fresh green)
const accent = "bg-[#43B581] text-white hover:bg-[#36996B]";

// Components
function HeroSection() {
	return (
		<section className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-8 bg-white rounded-xl shadow-sm mb-12">
			<h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 text-center">
				Fresh Groceries Delivered to Your Door
			</h1>
			<p className="text-lg sm:text-xl text-black mb-8 text-center max-w-xl">
				Shop the best in organic produce, bakery, and pantry essentials. Healthy,
				local, and always fresh.
			</p>
			<Button className="bg-[#43B581] text-white hover:bg-[#36996B] px-8 py-6 text-lg rounded-full shadow transition-all duration-200">
				Start Shopping
			</Button>
		</section>
	);
}

function FeaturedProducts() {
	return (
		<section className="w-full mb-16">
			<h2 className="text-2xl font-semibold text-black mb-8 text-center">
				Featured Products
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
				{products.slice(0, 6).map((product) => (
					<Card
						key={product.id}
						className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border-0"
					>
						<CardHeader className="p-0">
							<div className="relative w-full h-48 rounded-t-xl overflow-hidden">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 33vw"
								/>
							</div>
						</CardHeader>
						<CardContent className="pt-4 pb-2 px-4">
							<h3 className="text-lg font-medium text-black">
								{product.name}
							</h3>
							<p className="text-md text-black">{product.price}</p>
						</CardContent>
						<CardFooter className="px-4 pb-4">
							<Button className="bg-[#43B581] text-white hover:bg-[#36996B] w-full rounded-md transition-all duration-200">
								Add to Cart
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}

function CategoriesSection() {
	return (
		<section className="w-full mb-16">
			<h2 className="text-2xl font-semibold text-black mb-8 text-center">
				Shop by Category
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
				{categories.map((cat) => (
					<Card
						key={cat.id}
						className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border-0 cursor-pointer"
					>
						<CardHeader className="p-0">
							<div className="relative w-full h-32 rounded-t-xl overflow-hidden">
								<Image
									src={cat.image}
									alt={cat.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-200"
									sizes="(max-width: 768px) 100vw, 25vw"
								/>
							</div>
						</CardHeader>
						<CardContent className="pt-3 pb-4 px-4 flex items-center justify-center">
							<span className="text-md font-medium text-black">
								{cat.title}
							</span>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}

function TestimonialsSection() {
	return (
		<section className="w-full mb-16">
			<h2 className="text-2xl font-semibold text-black mb-8 text-center">
				What Our Customers Say
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{testimonials.map((t) => (
					<Card className="bg-white rounded-xl shadow-md border-0 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200">
						<Avatar className="mb-4 w-16 h-16">
							<AvatarImage src={t.avatar} alt={t.name} />
							<AvatarFallback>{t.name[0]}</AvatarFallback>
						</Avatar>
						<h4 className="font-semibold text-black mb-2">{t.name}</h4>
						<p className="text-black text-md">{t.text}</p>
					</Card>
				))}
			</div>
		</section>
	);
}

function Header() {
	return (
		<header className="w-full bg-white shadow-sm mb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
				<div className="flex items-center gap-2">
					<Image src="/logo.svg" alt="FreshMart Logo" width={40} height={40} />
					<span className="font-bold text-2xl text-black">FreshMart</span>
				</div>
				<nav className="hidden md:flex gap-8">
					<a
						href="/"
						className="text-black hover:text-[#43B581] transition-colors font-medium"
					>
						Home
					</a>
					<a
						href="/products"
						className="text-black hover:text-[#43B581] transition-colors font-medium"
					>
						Products
					</a>
					<a
						href="/about"
						className="text-black hover:text-[#43B581] transition-colors font-medium"
					>
						About
					</a>
					<a
						href="/contact"
						className="text-black hover:text-[#43B581] transition-colors font-medium"
					>
						Contact
					</a>
				</nav>
				<Button className="bg-[#43B581] text-white hover:bg-[#36996B] rounded-full px-5 py-2 font-semibold transition-all duration-200">
					Cart
				</Button>
			</div>
		</header>
	);
}

function Footer() {
	return (
		<footer className="w-full py-10 mt-12 border-t border-green-100 bg-white flex flex-col items-center">
			<div className="flex flex-wrap gap-8 mb-6">
				<a
					href="/about"
					className="text-black hover:text-[#43B581] transition-colors"
				>
					About
				</a>
				<a
					href="/contact"
					className="text-black hover:text-[#43B581] transition-colors"
				>
					Contact
				</a>
				<a
					href="/privacy"
					className="text-black hover:text-[#43B581] transition-colors"
				>
					Privacy
				</a>
			</div>
			<div className="flex gap-6 mb-4">
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-green-400 hover:text-[#43B581] transition-colors"
				>
					<Instagram size={22} />
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-green-400 hover:text-[#43B581] transition-colors"
				>
					<Twitter size={22} />
				</a>
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-green-400 hover:text-[#43B581] transition-colors"
				>
					<Facebook size={22} />
				</a>
			</div>
			<span className="text-xs text-green-400">
				&copy; {new Date().getFullYear()} FreshMart. All rights reserved.
			</span>
		</footer>
	);
}

export default function Home() {
	return (
		<div className="font-sans min-h-screen bg-[#F3FFF2] flex flex-col items-center justify-center">
			<Header />
			<div className="w-full max-w-7xl px-4 sm:px-8 mx-auto">
				<HeroSection />
				<FeaturedProducts />
				<CategoriesSection />
				<TestimonialsSection />
			</div>
			<Footer />
		</div>
	);
}
