import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

/**/

const Navbar = () => {
	const navImages = {
		plane: "https://cdn-icons-png.flaticon.com/512/1145/1145338.png",
		planeBlack: "https://cdn-icons-png.flaticon.com/512/1145/1145277.png",
		color: "https://cdn-icons-png.flaticon.com/512/817/817460.png",
	};
	const [nav, setNav] = useState(false);

	const [navIcon, setNavIcon] = useState("opacity-0");

	const handleNav = () => {
		setNav(!nav);
	};

	const [color, setColor] = useState("transparent");
	const [textColor, setTextColor] = useState("white");
	const [navTitle, setNavTitle] = useState("white");

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
	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
		>
			<div className="text-white flex justify-between items-center max-w-[1240px] p-4 m-auto">
				<Link href="/" className="flex items-center">
					<h1
						style={{ color: `${navTitle}` }}
						className="font-bold text-4xl"
					>
						THE FIELD
					</h1>
					<Image
						src={navImages.color}
						width={50}
						height={50}
						className={navIcon}
					/>
				</Link>
				<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
					<li className="p-2">
						<Link
							href="#Home"
							className="p-4 text-2xl hover:text-gray-300"
						>
							Home
						</Link>
					</li>
					<li className="p-2">
						<Link href="/" className="p-4 text-2xl hover:text-gray-300">
							Login
						</Link>
					</li>
					<li className="p-2">
						<Link href="/" className="p-4 text-2xl hover:text-gray-300">
							Register
						</Link>
					</li>
					<li className="p-2">
						<Link href="#About" className="p-4 text-2xl hover:text-gray-300">
							About
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
						<li className="p-4 text-4xl transition-all hover:bg-white hover:text-green-500">
							<Link href="#Home" className="p-4">
								Home
							</Link>
						</li>
						<li className="p-4 text-4xl transition-all hover:bg-white hover:text-green-500">
							<Link href="/" className="p-4">
								Login
							</Link>
						</li>
						<li className="p-4 text-4xl transition-all hover:bg-white hover:text-green-500">
							<Link href="/" className="p-4">
								Register
							</Link>
						</li>
						
						<li className="p-4 text-4xl transition-all hover:bg-white hover:text-green-500">
							<Link
								onClick={handleNav}
								href="#About"
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
