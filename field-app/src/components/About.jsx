import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
	return (
		<div id="About" className="ml-[2rem] mb-2 border shadow-lg p-8">
			<h1 className="text-4xl  font-bold">
				ABOUT <span className="text-green-500"> US</span>
			</h1>
			<div>
				<p className="mt-8 mb-5">
					Welcome to 'THE FIELD', a platform that connects talented
					individuals with sports organizations around the world. We
					believe that there are many skilled athletes out there who are
					not getting the recognition they deserve, and we want to change
					that. Our mission is to provide a space where all amateur and
					non-amateur athletes can share and showcase their skills, with
					the hope of being discovered by organizations looking for talent.
					<br /> <br />
					At 'THE FIELD', we are passionate about sports and believe in the
					power of technology to create new opportunities for athletes and
					sports organizations. Our platform is designed to be easy to use,
					accessible, and effective in connecting talented individuals with
					the right organizations. We believe that everyone should have the
					opportunity to achieve their dreams in the sports industry, and
					we are committed to making that a reality.
				</p>

				<div className="max-w-[1240px] mx-auto p-1 rounded-[30px] bg-black mb-[3rem] shadow-2xl shadow-black">
					<div className="flex relative justify-center">
						<div className="absolute bg-black/70 w-full top-0 left-0 right-0 bottom-0 rounded-[30px] z-[2]" />
						<Image
							width="1440"
							height="600"
							src={
								"https://images.unsplash.com/photo-1649513786103-91257b1a9a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
							}
							className="rounded-[30px] max-h-[400px]"
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4 text-justify">
					<p className="p-2">
						Our platform offers a range of features that allow athletes to
						create a profile, showcase their skills, connect with other
						professionals in the industry, and discover new opportunities.
						For sports organizations, we offer a simple and effective way
						to discover and recruit talented individuals from around the
						world. Our platform is designed to be a one-stop-shop for all
						your sports talent needs. We are a team of passionate
						professionals with experience in both the sports and
						technology industries.
						<br /> <br />
					</p>
					<p className="bg-black text-white p-4">
						We believe in the power of collaboration and are committed to
						working with our users to improve our platform and provide the
						best possible experience for everyone. We are excited to be
						part of the sports community and to help athletes and
						organizations alike achieve their goals.
						<br /> <br />
					</p>
				</div>
				<p className=" font-bold mt-[2rem]">
					Join us today and take the first step towards achieving your
					dreams in the sports industry. Together, we can make a difference
					and create a brighter future for all athletes.
					<Link href="/" className="ml-4 underline">
						Register Now
					</Link>
				</p>
			</div>
		</div>
	);
};

export default About;