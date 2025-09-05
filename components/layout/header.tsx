import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
	return (
		<header className="w-full bg-white shadow-sm mb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
				<div className="flex items-center gap-2 pt-2">
          <Link
						href="/"
					>
						<Image src="/logo.png" alt="FreshMart Logo" width={180} height={50} />
					</Link>
				</div>
				<nav className="hidden md:flex gap-8">
					<Link
						href="/"
						className="text-black hover:text-[#68ae3c] transition-colors font-medium"
					>
						Home
					</Link>
					<Link
						href="/products"
						className="text-black hover:text-[#68ae3c] transition-colors font-medium"
					>
						Products
					</Link>
					<Link
						href="/about"
						className="text-black hover:text-[#68ae3c] transition-colors font-medium"
					>
						About
					</Link>
					<Link
						href="/contact"
						className="text-black hover:text-[#68ae3c] transition-colors font-medium"
					>
						Contact
					</Link>
				</nav>
				<Button className="bg-[#68ae3c] text-white hover:bg-[#36996B] rounded-full px-5 py-2 font-semibold transition-all duration-200">
					<Link href="/login">
						Login
					</Link>
				</Button>
			</div>
		</header>
	);
}