import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-slate-950 text-white flex items-center"
        >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-5xl md:text-7xl font-bold"
                    >
                        Abhishek Gupta
                    </motion.h1>

                    <h2 className="text-sky-400 text-2xl mt-4">
                        Full Stack Developer
                    </h2>

                    <p className="text-gray-300 mt-6">
                        Building scalable web applications using MongoDB,
                        Express.js, React.js and Node.js.
                    </p>
                </div>

                {/* Right Side Photo */}
                <div className="flex justify-center">
                    <img
                        src={profile}
                        alt="Abhishek Gupta"
                        className="w-80 h-80 object-cover rounded-full border-4 border-sky-400 shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
