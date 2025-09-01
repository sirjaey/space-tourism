import { useState } from "react";

type CrewMember = {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    role: string;
    bio: string;
};

const Data: CrewMember[] = [
    {
        "name": "Douglas Hurley",
        "images": {
            "png": "/crew/image-douglas-hurley.png",
            "webp": "/crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        "name": "Mark Shuttleworth",
        "images": {
            "png": "/crew/image-mark-shuttleworth.png",
            "webp": "/crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        "name": "Victor Glover",
        "images": {
            "png": "/crew/image-victor-glover.png",
            "webp": "/crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        "name": "Anousheh Ansari",
        "images": {
            "png": "/crew/image-anousheh-ansari.png",
            "webp": "/crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];

const crewMembers = Data.map((member) => ({
    name: member.name,
    images: member.images,
    role: member.role,
    bio: member.bio
}));

const Crew: React.FC = () => {
    const [selectedCrewMember, setSelectedCrewMember] = useState(crewMembers[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    return (
        <section>
            <main>
                <div className="flex flex-col md:flex-col md:justify-between text-center lg:text-left mx-auto px-6 md:px-6 lg:px-40 lg:pt-20 text-white">
                    <div className="md:justify-left md:items-left pt-10 lg:pt-0 px-3 md:align-left lg:text-left ">
                        <h2 className="text-[16px] lg:text-[32px] text-center md:text-start sm:text-lg lg:text-xl uppercase pt-5 pb-10 font-barlow-condensed tracking-widest"><span className="mr-2 text-gray-400">02</span>MEET YOUR CREW</h2>
                    </div>
                    <section className="lg:flex lg:flex-row lg:justify-between ">
                        <div>
                            <div className="lg:pt-50 lg:w-[500px] lg:mx-0">
                                <h1 className="text-gray-400 md:text-2xl lg:text-6xl lg:text-left text-[1.2rem] lg:text-[32px] mb-1.5 lg:mb-0 font-bellefair leading-relaxed uppercase max-w-md lg:mx-0 mx-auto">{selectedCrewMember.role}</h1>
                                <h1 className="text-2xl sm:text-3xl lg:text-5xl uppercase md:text-4xl font-bellefair mb-6 lg:mt-5">{selectedCrewMember.name}</h1>
                                <p className="text-[#D0D6F9] text-base md:text-lg text-[14px] md:text-[14px]  lg:text-[16px] leading-relaxed mt-4 max-w-md mx-auto lg:mx-0 lg:max-w-[600px]">
                                    {selectedCrewMember.bio}
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:px-0 my-0 justify-center lg:justify-between text-white items-center text-center lg:text-left lg:mt-50">
                                <div className="">
                                    <div className="mt-10 mb-4 md:mb-0 lg:mt-0 ">
                                        <ul className="flex flexd-row space-x-2  text-[#D0D6F9] uppercase font-barlow-condensed text-sm lg:text-lg tracking-widest justify-center lg:justify-start">
                                            {crewMembers.map((member, i) => (
                                                <li
                                                    key={i}
                                                    className={`relative  cursor-pointer  text-[50px] md:text-[50px] lg:text-[60px] text-gray-400  ${hoveredIndex === i ? 'text-gray-400 transition duration-300 ease-in-out' : ""} ${activeIndex === i ? 'text-white' : ""}`}
                                                    onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => setHoveredIndex(null)}
                                                    onClick={() => { setSelectedCrewMember(member); setActiveIndex(i); }}
                                                >
                                                    •
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex item-center relative justify-center lg:justify-end w-full mx-auto">
                            <img className="h-80 md:h-120 lg:h-full w-auto " src={selectedCrewMember.images.png} alt={selectedCrewMember.name} />
                            <div className="absolute bottom-0 left-0 w-full lg:h-1/14 lg:bg-gradient-to-t from-black/90 to-transparent" />
                        </div>
                    </section>
                </div>
            </main>
        </section>
    );
};

export default Crew;