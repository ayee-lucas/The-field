// Importing necessary modules

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

/**/
// Declare Navbar component
const Navbar = () => {
	// Object containing image urls
	const navImages = {
		color: "https://cdn-icons-png.flaticon.com/512/817/817460.png",
	};

	// State for navbar toggle
	const [nav, setNav] = useState(false);
	// State for mobile navbar button toggle
	const [navIcon, setNavIcon] = useState("opacity-0");

	// State for navbar color
	const [color, setColor] = useState("transparent");

	// State for navbar text color
	const [textColor, setTextColor] = useState("white");

	// State for navbar title color
	const [navTitle, setNavTitle] = useState("white");

	// NavBar Toggler function

	const handleNav = () => {
		setNav(!nav);
	};

	// Change navbar color and text color based on scroll position

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor("#ffff");
				setTextColor("#109d00");
				setNavTitle("#03b50f");
				setNavIcon(
					"opacity-100 transition-all absolute translate-x-[390%] sm:opacity-0 md:opacity-100"
				);
			} else {
				setColor("transparent");
				setTextColor("#ffff");
				setNavTitle("#ffff");
				setNavIcon("opacity-0");
			}
		};
		window.addEventListener("scroll", changeColor);
	}, []);

	// Return JSX

	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
		>
			<div className="text-white flex justify-between items-center max-w-[1240px] p-4 m-auto">
				{/* Logo */}

				<Link href="/" className="flex items-center">
					<h1
						style={{ color: `${navTitle}` }}
						className="font-bold text-4xl"
					>
						THE <span style={{color: "#03b50f"}}>FIELD</span>
					</h1>
					<Image
						src={navImages.color}
						width={50}
						height={50}
						className={navIcon}
					/>
				</Link>

				{/* Desktop navigation menu */}

				<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
					<li className="p-2">
						<Link href="/" className="p-4 text-2xl hover:text-green-900">
							Home
						</Link>
					</li>
					<li className="p-2">
						<Link
							href="/#About"
							className="p-4 text-2xl hover:text-green-900"
						>
							About
						</Link>
					</li>
					<li className="p-2">
						<Link
							href="/Register"
							className="p-4 text-2xl hover:text-green-900"
						>
							Register
						</Link>
					</li>

					<li className="p-2">
						<Link
							href="/Login"
							className="p-4 text-2xl hover:text-green-900"
						>
							Login
						</Link>
					</li>
				</ul>

				{/**Mobile Button */}

				<div onClick={handleNav} className="block sm:hidden z-10">
					{nav ? (
						<AiOutlineClose size={40} className="text-white" />
					) : (
						<AiOutlineMenu size={40} style={{ color: `${textColor}` }} />
					)}
				</div>
				<div
					className={
						nav
							? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-out duration-300"
							: "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-out duration-300"
					}
				>
					{/* MobileView */}

					<ul className="w-full">
						<li className="p-4 select-none text-4xl transition-all hover:bg-white hover:text-green-500">
							<Link href="/" className="p-4">
								Home
							</Link>
						</li>
						<li className="p-4 select-none text-4xl transition-all hover:bg-white hover:text-green-500">
							<Link href="/Login" className="p-4">
								Login
							</Link>
						</li>
						<li className="p-4 select-none text-4xl transition-all hover:bg-white hover:text-green-500">
							<Link href="/Register" className="p-4">
								Register
							</Link>
						</li>

						<li className="p-4 select-none text-4xl transition-all hover:bg-white hover:text-green-500">
							<Link
								onClick={handleNav}
								href="/#About"
								className="p-4 hover:text-gray-300"
							>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
