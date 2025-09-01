import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    const backgroundClasses: Record<string, string> = {
        "/": "bg-[url('/home/background-home-mobile.jpg')] sm:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')] h-screen",
        "/destination": "bg-[url('/destination/background-destination-mobile.jpg')] sm:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')] h-full",
        "/crew": "bg-[url('/crew/background-crew-mobile.jpg')] sm:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')] h-full",
        "/technology": "bg-[url('/technology/background-technology-mobile.jpg')] sm:bg-[url('/technology/background-technology-tablet.jpg')] lg:bg-[url('/technology/background-technology-desktop.jpg')] h-full",
    };

    const backgroundClass =
        backgroundClasses[location.pathname] ||
        "bg-[url('/home/background-home-mobile.jpg')] sm:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')]";

    return (
        <div
            className={` md:h-[1024px]  w-full bg-no-repeat bg-cover bg-fixed ${backgroundClass}`}
        >
            {children}
        </div>
    );
};

export default Layout;
