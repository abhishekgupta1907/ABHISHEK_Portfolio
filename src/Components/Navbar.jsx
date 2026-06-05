import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        "Home",
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Contact",
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-sky-400">
                    Abhishek Gupta
                </h1>

                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="hover:text-sky-400 transition duration-300"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-slate-800">
                    <ul className="flex flex-col items-center gap-6 py-6">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className="hover:text-sky-400"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
