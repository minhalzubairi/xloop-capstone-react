"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Instagram, Twitter, Facebook } from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/header";

// Sample Data
const products = [
	{
		id: 1,
		name: "Fresh Avocados",
		price: "$2.99 / lb",
		image: "/product-img.jpg",
	},
	{
		id: 2,
		name: "Organic Bananas",
		price: "$1.29 / lb",
		image: "/product-img.jpg",
	},
	{
		id: 3,
		name: "Cherry Tomatoes",
		price: "$3.49 / box",
		image: "/product-img.jpg",
	},
	{
		id: 4,
		name: "Baby Spinach",
		price: "$2.49 / bag",
		image: "/product-img.jpg",
	},
	{
		id: 5,
		name: "Whole Wheat Bread",
		price: "$2.99",
		image: "/product-img.jpg",
	},
	{
		id: 6,
		name: "Almond Milk",
		price: "$3.99",
		image: "/product-img.jpg",
	},
];

const categories = [
	{
		id: 1,
		title: "Fresh Produce",
		image: "/product-img.jpg",
	},
	{
		id: 2,
		title: "Bakery",
		image: "/product-img.jpg",
	},
	{
		id: 3,
		title: "Dairy & Eggs",
		image: "/product-img.jpg",
	},
	{
		id: 4,
		title: "Pantry Staples",
		image: "/product-img.jpg",
	},
];

const testimonials = [
	{
		id: 1,
		name: "Sam Patel",
		avatar: "/product-img.jpg",
		text: "The produce is always fresh and the delivery is quick. My go-to grocery store!",
	},
	{
		id: 2,
		name: "Maria Gomez",
		avatar: "/product-img.jpg",
		text: "Love the organic options and friendly service. Highly recommended!",
	},
	{
		id: 3,
		name: "Chris Lee",
		avatar: "/product-img.jpg",
		text: "Easy to order and great selection. The bakery items are delicious!",
	},
];

const accent = "bg-[#0058A3] text-white hover:bg-[#003B64]";

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
			<Button className="bg-[#0058A3] text-white hover:bg-[#003B64] px-8 py-6 text-lg rounded-full shadow transition-all duration-200">
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
						<CardFooter className="px-4 pb-0">
							<Button className="bg-[#0058A3] text-white hover:bg-[#003B64] w-full rounded-md transition-all duration-200">
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

function Footer() {
	return (
		<footer className="w-full py-10 mt-12 border-t border-green-100 bg-white flex flex-col items-center">
			<div className="flex flex-wrap gap-8 mb-6">
				<a
					href="/about"
					className="text-black hover:text-[#0058A3] transition-colors"
				>
					About
				</a>
				<a
					href="/contact"
					className="text-black hover:text-[#0058A3] transition-colors"
				>
					Contact
				</a>
				<a
					href="/privacy"
					className="text-black hover:text-[#0058A3] transition-colors"
				>
					Privacy
				</a>
			</div>
			<div className="flex gap-6 mb-4">
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#0058A3] hover:text-[#0058A3] transition-colors"
				>
					<Instagram size={22} />
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#0058A3] hover:text-[#0058A3] transition-colors"
				>
					<Twitter size={22} />
				</a>
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#0058A3] hover:text-[#0058A3] transition-colors"
				>
					<Facebook size={22} />
				</a>
			</div>
			<span className="text-xs text-[#0058A3]">
				&copy; {new Date().getFullYear()} FreshMart. All rights reserved.
			</span>
		</footer>
	);
}

export default function Home() {
	return (
		<div className="font-sans min-h-screen bg-[#E6F0FA] flex flex-col items-center justify-center">
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
