import { useState } from "react";

const Destination: React.FC = () => {
    const [selectedDestination, setSelectedDestination] = useState("MOON");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const imageUrl: string = `/destination/image-${selectedDestination.toLowerCase()}.${"png" || "webp"}`;

    type DestinationData = {
        name: string;
        description: string;
        distance: string;
        travel: string;
    };

    function handleMouseEnter(index: number) {
        setHoveredIndex(index);
    }
    function handleMouseLeave() {
        setHoveredIndex(null);
    }
    function handleClick(item: string, i: number) {
        setActiveIndex(i);
        setSelectedDestination(item);
        console.log(activeIndex)
    }

    const menuItems: string[] = ["MOON", "MARS", "EUROPA", "TITAN"];

    const data: Record<string, DestinationData> = {
        MOON: {
            name: "MOON",
            description:
                "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 KM",
            travel: "3 DAYS",
        },
        MARS: {
            name: "MARS",
            description:
                "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            travel: "9 months"
        },
        EUROPA: {
            name: "EUROPA",
            description:
                "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            travel: "3 YEARS",
        },
        TITAN: {
            name: "TITAN",
            description:
                "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            travel: "7 YEARS",
        },
    };
    return (
        <section>
            <main>
                <div className="flex flex-col md:flex-col md:justify-between mx-auto px-6 md:px-6 lg:px-40 lg:pt-20 text-white">
                    <div className="md:justify-left md:items-left pt-10 lg:pt-0 px-3 md:align-left lg:text-left ">
                        <h2 className="text-[16px] lg:text-[32px] text-center md:text-start sm:text-lg lg:text-xl uppercase pt-5 pb-10 font-barlow-condensed tracking-widest"><span className="mr-2 text-gray-400">01</span>PICK YOUR DESTINATION</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:px-30 my-10 justify-center lg:justify-between text-white items-center text-center lg:text-left">
                        <div className="item-center">
                            <img className="h-40 md:h-60 lg:h-90" src={imageUrl} alt="moon" />
                        </div>
                        <div>
                            <div className="mt-10 mb-4 lg:mt-0 ">
                                <ul className="flex flexd-row space-x-8  text-[#D0D6F9] uppercase font-barlow-condensed text-sm lg:text-lg tracking-widest justify-center lg:justify-start">
                                    {menuItems.map((item, i) => (
                                        <li
                                            key={i}
                                            className={`relative hover:border-b-4 border-blue-500 cursor-pointer`}
                                            onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={handleMouseLeave}
                                            onClick={() => handleClick(item, i)}
                                        >
                                            {item}
                                            <span
                                                className={`absolute -bottom-[16px] left-0 w-full h-1 block ${hoveredIndex === i ? 'bg-gray-400 transition duration-300 ease-in-out' : ""} ${activeIndex === i ? 'bg-white' : ""} cursor-pointer `}
                                            ></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-6xl sm:text-8xl lg:text-9xl uppercase font-bellefair mt-15 mb-6 lg:mt-15">{data[selectedDestination].name}</h1>
                                <p className="text-[#D0D6F9] text-base sm:text-lg text-[14px] md:text-[12px]  lg:text-[16px] leading-relaxed mt-4 max-w-md mx-auto ">
                                    {data[selectedDestination].description}
                                </p>
                                <div className="flex flex-col md:flex-row justify-center lg:justify-start  mt-8 border-t border-gray-600 pt-8">
                                    <div className="mb-4 md:mb-0 md:mr-20">
                                        <h3 className="text-[#D0D6F9] text-base sm:text-lg text-[14px]  lg:text-[12px] leading-relaxed max-w-md mx-auto">AVG.              DISTANCE</h3>
                                        <p className="text-3xl md:text-1xl lg:text-1xl uppercase font-barlow-condensed">{data[selectedDestination].distance}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <h3 className="text-[#D0D6F9] text-base sm:text-lg text-[14px]  lg:text-[12px] leading-relaxed max-w-md mx-auto">EST. TRAVEL TIME</h3>
                                        <p className="text-3xl md:text-1xl lg:text-1xl uppercase font-barlow-condensed">{data[selectedDestination].travel}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </section>

    )
}

export default Destination;