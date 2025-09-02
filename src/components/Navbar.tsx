import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";


const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const location = useLocation();
	const pathToIndex: { [key: string]: number } = {
		"/": 0,
		"/destination": 1,
		"/crew": 2,
		"/technology": 3
	};
	const [activeIndex, setActiveIndex] = useState<number | null>(
		pathToIndex[location.pathname] ?? 0
	);

	
	function handleMouseEnter(index: number) {
		setHoveredIndex(index);
	}
	function handleMouseLeave() {
		setHoveredIndex(null);
	}
	function handleClick(index: number) {
		setActiveIndex(index);
		console.log(activeIndex)
	}

	const menuItems:string[] = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

	return (
		<nav className="text-white w-full mx-auto md:mx-0 top-0 left-0 shadow-md lg:pt-5 relative z-10">
			<div className="max-w-7xl lg:max-w-full md:max-w-full mx-auto md:mx-0 md:px-0 px-4 lg:px-0">
				<div className="flex md:hidden lg:flex lg:flex-row justify-between lg:justify-between pt-4 h-16 items-center lg:pt-10">
					{/* Logo */}
					<div className="text-2xl font-bold md:pl-12 sm:pl-22">
						<img src={logo} alt="Logo" className="h-8 w-auto" />
					</div>

					

					{/* Desktop Menu */}
					<ul className="hidden  md:flex space-x-6 backdrop-blur-3xl md:py-8 md:pl-70 md:pr-20">
						{menuItems.map((NavItem, i) => (
							<li
								key={i}
								className="relative  cursor-pointer"
								onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={handleMouseLeave}
								onClick={() => handleClick(i)}
							>
								<Link to={NavItem === "HOME" ? "/" : `/${NavItem.toLowerCase()}`} className="tracking-widest">
									<span className="font-bold pr-3 inline-block">{`0${i}` }</span>
									{NavItem}
								</Link>
								<span
									className={`absolute -bottom-[31.5px] left-0 w-full h-1 block ${hoveredIndex === i ? 'bg-gray-400 transition duration-300 ease-in-out' : ""} ${activeIndex === i ? 'bg-white' : ""} cursor-pointer `}
								></span>
							</li>
						))}
					</ul>
					<hr className="bg-gray-950 cursor-pointer h-0.5 w-2xl left-40 absolute hidden md:hidden lg:flex" />	

					{/* Hamburger (Mobile) */}
					<button
						className="md:hidden flex flex-col space-y-1 focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}>
						{!isOpen && 
							<img src={hamburger} alt="Menu" className="h-6 w-6" />
						}
					</button>

				</div>

				{/* Tab View Navbar */}
				<div className="hidden lg:hidden md:px-0  md:flex space-x-6 md:max-w-[100%] pt-4 h-16 items-center ">
					{/* Logo */}
					<div className="text-2xl font-bold md:pl-12 sm:pl-22 w-[20%]">
						<img src={logo} alt="Logo" className="h-8 w-auto" />
					</div>

					{/* TabView Menu */}
					<ul className="hidden md:flex space-x-6 bg-blue md:py-8 md:pr-0 w-[80%] align-middle items-center justify-center mr-0 bg-zinc-900 tracking-widest">
						{menuItems.map((NavItem, i) => (
							<li
								key={i}
								className="relative hover:border-b-4 border-blue-500 cursor-pointer"
								onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={handleMouseLeave}
								onClick={() => handleClick(i)}
							>
								<Link to={NavItem === "HOME" ? "/" : `/${NavItem.toLowerCase()}`} className="hover:text-yellow-400">
									<span className="font-bold pr-3 inline-block">{`0${i}`}</span>
									{NavItem}
								</Link>
								<div
									className={`absolute -bottom-[31.5px] left-0 w-full h-1 block ${hoveredIndex === i ? 'bg-gray-400' : ""} ${activeIndex === i ? 'bg-white' : ""} cursor-pointer `}
								></div>
							</li>
						))}
					</ul>

					{/* Hamburger (Mobile) */}
					<button
						className="md:hidden flex flex-col space-y-1 focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}>
						{!isOpen &&
							<img src={hamburger} alt="Menu" className="h-6 w-6" />
						}
					</button>

				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="mobileMenu"
						initial={{ x: "100%" }}          // off-screen right
						animate={{ x: 0 }}               // slide in
						exit={{ x: "100%" }}             // slide out
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="md:hidden flex flex-col backdrop-blur-3xl px-4 py-2 space-y-4 h-[100%] w-[70%] fixed top-0 right-0 z-50"
					>
						<div onClick={() => setIsOpen(false)} className="self-end pt-4 px-0">
							<img src={close} alt="Close" className="h-6 w-6" />
						</div>
						<ul className="flex flex-col pt-15 ">
							<li className="mb-6 tracking-widest" onClick={() => setIsOpen(false)}>
								<Link to="/" className="hover:text-yellow-400">
									<span className="font-bold px-4">00</span> HOME
								</Link>
							</li>
							<li className="mb-6 tracking-widest" onClick={() => setIsOpen(false)}>
								<Link to="/destination" className="hover:text-yellow-400">
									<span className="font-bold px-4">01</span> DESTINATION
								</Link>
							</li>
							<li className="mb-6 tracking-widest" onClick={() => setIsOpen(false)}>
								<Link to="/crew" className="hover:text-yellow-400">
									<span className="font-bold px-4">02</span> CREW
								</Link>
							</li>
							<li className="mb-6 tracking-widest" onClick={() => setIsOpen(false)}>
								<Link to="/technology" className="hover:text-yellow-400">
									<span className="font-bold px-4">03</span> TECHNOLOGY
								</Link>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>

		</nav>
	);
};

export default Navbar;
