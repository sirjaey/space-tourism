import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
	return (
		<>
			<section>
				{/* <Navbar /> */}
				<main>
					<div className="flex flex-col md:flex-col lg:flex-row justify-center items-center text-center lg:text-left md:text-left md:justify-between mx-auto h-full px-6 lg:px-40 lg:pt-60">
						<div className="text-center pt-20 lg:pt-0 px-3 lg:text-left">
							<h2 className="text-[#D0D6F9] text-sm sm:text-lg lg:text-xl uppercase font-barlow-condensed tracking-widest">
								So, you want to travel to
							</h2>
							<h1 className="text-white text-6xl sm:text-8xl lg:text-9xl uppercase font-bellefair mt-4">
								Space
							</h1>
							<p className="text-[#D0D6F9] text-base sm:text-lg text-[14px]  lg:text-[12px] leading-relaxed mt-4 max-w-md mx-auto">
								Let’s face it; if you want to go to space, you might as well
								genuinely go to outer space and not hover kind of on the edge of
								it. Well sit back, and relax because we’ll give you a truly out of
								this world experience!
							</p>
						</div>
						{/* <div className="mt-20 flex justify-center">
							<button 
								className="bg-white hover:bg-red-400 cursor-pointer text-black rounded-full w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 uppercase font-bellefair text-xl sm:text-2xl lg:text-3xl  lg:hover:h-150
								   hover:text-white hover:scale-110 hover:shadow-amber-500/50 hover:shadow-2xl
								   transition duration-300 ease-in-out"
							>
								<Link to="/destination">Explore</Link>
							</button>
						</div> */}
						<div className="flex h-1/2 items-center mt-20 justify-center">
							<motion.div
								className="relative w-32 h-32 md:w-45 md:h-45 lg:w-47 lg:h-47 flex items-center justify-center rounded-full bg-white"
								whileHover="hover"
								initial="rest"
								animate="rest"
							>
								<motion.div
									className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
									variants={{
										rest: { scale: 0 },
										hover: { scale: 2 },
									}}
									transition={{
										type: "spring",
										mass: 1,
										stiffness: 80,
										damping: 20,
									}}
								/>

								<Link to="/destination" className="cursor-pointer">
									<motion.span
										className="relative z-10 bellefair text-lg uppercase tracking-[0px] "
										variants={{
											rest: { color: "#000000" },
											hover: { color: "#0B0D17" },
										}}
									>
										EXPLORE
									</motion.span>
								</Link>
							</motion.div>
						</div>
					</div>
				</main>
			</section>

		</>
	);
}
export default Home;