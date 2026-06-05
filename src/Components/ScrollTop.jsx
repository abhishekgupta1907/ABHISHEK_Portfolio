import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        show && (
            <button
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }
                className="fixed bottom-6 right-6 bg-sky-500 p-4 rounded-full shadow-lg"
            >
                <FaArrowUp />
            </button>
        )
    );
};

export default ScrollTop;
