import { useEffect, useState } from "react";

type technology = {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
};

const Data: technology[] = [
    {
        "name": "Launch vehicle",
        "images": {
            "portrait": "/technology/image-launch-vehicle-portrait.jpg",
            "landscape": "/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        "name": "Spaceport",
        "images": {
            "portrait": "/technology/image-spaceport-portrait.jpg",
            "landscape": "/technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        "name": "Space capsule",
        "images": {
            "portrait": "/technology/image-space-capsule-portrait.jpg",
            "landscape": "/technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
];

const tech = Data.map((tech) => ({
    name: tech.name,
    images: tech.images,
    description: tech.description
}));

const Technology: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState(tech[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [desktopView, setDesktopView] = useState(true);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };
    useEffect(() => {
        const handleResize = () => {
            setDesktopView(window.innerWidth >= 1024);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section>
            <main>
                <div className="flex flex-col md:flex-col md:justify-between text-center lg:text-left mx-auto px-0 md:px-0 lg:px-40 lg:pt-20 text-white">
                    <div className="md:justify-left md:items-left pt-10 lg:pt-0 px-10 md:align-left lg:text-left ">
                        <h2 className="text-[16px] lg:text-[32px] text-center md:text-start sm:text-lg lg:text-xl uppercase pt-5 pb-10 font-barlow-condensed tracking-widest"><span className="mr-2 text-gray-400">03</span>SPACE LAUNCH 101</h2>
                    </div>
                    <section className="lg:flex lg:flex-row-reverse lg:justify-between px-0">
                        <div>
                            <div className="flex item-center relative justify-center lg:justify-end w-full mx-auto px-0">
                                <img className="h-80 md:h-120 lg:h-full w-auto " src={desktopView ? selectedTech.images.portrait : selectedTech.images.landscape} alt={selectedTech.name} />
                            </div>
                            
                        </div>
                        <div className="lg:flex lg:flex-row lg:justify-between">
                            <div className="flex flex-col  lg:px-0 lg:pt-50 lg:mx-0 my-0 justify-center lg:justify-between text-white items-center text-center lg:text-left lg:mt-0">
                                <div className="">
                                    <div className="mt-10 mb-4 md:mb-0 lg:mt-0 lg:mb-0">
                                        <ul className="flex flexd-row lg:flex-col space-x-2   text-[#D0D6F9] uppercase font-barlow-condensed text-sm lg:text-lg tracking-widest justify-center lg:justify-start">
                                            {tech.map((member, i) => (
                                                <li
                                                    key={i}
                                                    className={`relative flex items-center justify-center  cursor-pointer  text-[20px] md:text-[25px] lg:text-[40px] h-10 w-10 md:h-15 md:w-15 lg:h-20 lg:w-20 mb-10 rounded-full border border-gray-400  ${hoveredIndex === i ? 'text-gray-400 border-white transition duration-300 ease-in-out' : ""} ${activeIndex === i ? 'text-black bg-white' : ""}`}
                                                    onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => setHoveredIndex(null)}
                                                    onClick={() => { setSelectedTech(member); setActiveIndex(i); }}
                                                >
                                                    {i + 1}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-50 lg:w-[500px] lg:mx-0 pb-10 px-6">
                                <h1 className="text-gray-400 md:text-2xl lg:text-6xl lg:text-left text-[1.2rem] lg:text-[32px] mb-1.5 lg:mb-0 font-bellefair leading-relaxed uppercase max-w-md lg:mx-0 mx-auto">THE TERMINOLOGY...</h1>
                                <h1 className="text-2xl sm:text-3xl lg:text-5xl uppercase md:text-4xl font-bellefair mb-6 lg:mt-5">{selectedTech.name}</h1>
                                <p className="text-[#D0D6F9] text-base md:text-lg text-[14px] md:text-[14px]  lg:text-[16px] leading-loose mt-4 max-w-md mx-auto lg:mx-0 lg:max-w-[600px] ">
                                    {selectedTech.description}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </section>
    );
};

export default Technology;