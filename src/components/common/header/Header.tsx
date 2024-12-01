import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo.png";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

type NavItemWithChildren = {
    label: string;
    children: { href: string; label: string }[];
};

type NavItemWithoutChildren = {
    href: string;
    label: string;
};

type NavItem = NavItemWithChildren | NavItemWithoutChildren;
const navItems: NavItem[] = [
    { href: "/", label: "home" },
    { href: "/gallery", label: "gallery" },
    { href: "/about-us", label: "about us" },
    { href: "/contact-us", label: "Contact Us" },
];

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => {
        // If the href is "/" and the current path is exactly "/", return true
        if (href === "/" && location.pathname === "/") {
            return true;
        }
        // For other hrefs, check if the path starts with the given href
        if (href !== "/" && location.pathname.startsWith(href)) {
            return true;
        }
        // Default case: return false
        return false;
    };
    return (
        <nav
            className={ `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${hasScrolled ? "bg-white shadow-md" : "backdrop-blur-md bg-black/40"
                }` }
        >
            <div className="relative py-3 font-primary">
                <nav className="container mx-auto">
                    <div className="max-w-6xl h-12 md:h-16 mx-auto flex justify-between items-center align-stretch px-4">
                        <div id="logo" className="flex items-center">
                            <a href="/" className="mr-10">
                                <img
                                    src={ Logo }
                                    alt="Logo"
                                    width={ 130 }
                                    height={ 50 }
                                    className={ `transition duration-300 ${hasScrolled ? "" : "filter brightness-200"}` }
                                />
                            </a>
                            <ul
                                id="nav-links"
                                className="hidden md:flex md:relative fixed md:align-stretch md:justify-end md:py-0 w-48 md:w-auto h-auto z-10 shadow md:shadow-none"
                            >
                                { navItems.map((item) => (
                                    <li key={ item.label }>
                                        { "children" in item ? (
                                            item.children.map((child) => (
                                                <Link
                                                    key={ child.label }
                                                    to={ child.href }
                                                    className={ `px-4 py-2 ${isActive(child.href)
                                                        ? "text-blue-500"
                                                        : hasScrolled
                                                            ? "text-black"
                                                            : "text-white"
                                                        } hover:bg-gray-100 uppercase text-xs` }
                                                >
                                                    { child.label }
                                                </Link>
                                            ))
                                        ) : (
                                            <Link
                                                to={ item.href }
                                                className={ `px-4 py-2 ${isActive(item.href)
                                                    ? "text-blue-500"
                                                    : hasScrolled
                                                        ? "text-black hover:bg-gray-100"
                                                        : "text-white hover:bg-gray-800"
                                                    }  uppercase text-xs` }
                                            >
                                                { item.label }
                                            </Link>
                                        ) }
                                    </li>
                                )) }
                            </ul>
                        </div>

                        <button className="border px-4 py-2 text-xs uppercase text-white font-semibold bg-gray-700">
                            Book Now
                        </button>
                        <div className="md:hidden flex items-center">
                            <button
                                id="menu-button"
                                onClick={ () => setIsMenuOpen(!isMenuOpen) }
                                className="p-1 rounded-full focus:outline-none"
                            >
                                <MdMenu className={ `${hasScrolled ? "text-black" : "text-white"}` } />
                            </button>
                        </div>
                    </div>
                </nav>
                { isMenuOpen && (
                    <ul
                        id="nav-links"
                        className="fixed inset-0 bg-white h-screen z-50 flex flex-col items-center px-6 space-y-4 shadow-lg"
                    >
                        <li className="w-full mt-4 flex justify-end pl-6">
                            <button
                                onClick={ () => setIsMenuOpen(false) }
                                className="py-2 text-lg focus:outline-none"
                            >
                                <IoMdClose className="h-8 w-8" />
                            </button>
                        </li>
                        { navItems.map((item) => (
                            <li key={ item.label } className="w-full">
                                { "children" in item ? (
                                    item.children.map((child) => (
                                        <Link
                                            key={ child.label }
                                            to={ child.href }
                                            onClick={ () => setIsMenuOpen(false) }
                                            className={ `block w-full px-4 py-2 mt-3 ${isActive(child.href)
                                                ? "text-blue-500 font-bold"
                                                : hasScrolled
                                                    ? "text-black"
                                                    : "text-black"
                                                } hover:bg-gray-100 uppercase text-xl` }
                                        >
                                            { child.label }
                                        </Link>
                                    ))
                                ) : (
                                    <Link
                                        to={ item.href }
                                        onClick={ () => setIsMenuOpen(false) }
                                        className={ `block w-full px-4 py-2 mt-3 ${isActive(item.href)
                                            ? "text-blue-500 font-bold"
                                            : hasScrolled
                                                ? "text-black"
                                                : "text-black"
                                            } hover:bg-gray-100 uppercase text-xl` }
                                    >
                                        { item.label }
                                    </Link>
                                ) }
                            </li>
                        )) }
                    </ul>
                ) }
            </div>
        </nav>
    );
};
