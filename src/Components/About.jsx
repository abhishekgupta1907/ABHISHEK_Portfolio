import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="bg-slate-900 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center text-sky-400 mb-12"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">
                            Full Stack Developer
                        </h3>

                        <p className="text-gray-300 leading-8">
                            I am Abhishek Gupta, a Full Stack Developer with
                            experience in building responsive and scalable web
                            applications. I specialize in MongoDB, Express.js,
                            React.js and Node.js.
                        </p>

                        <p className="text-gray-300 leading-8 mt-4">
                            Currently working at TCS, where I contribute to
                            application development, API integration, debugging
                            and performance optimization.
                        </p>

                        <p className="text-gray-300 leading-8 mt-4">
                            I enjoy solving real-world problems through
                            technology and continuously learning new tools and
                            frameworks.
                        </p>
                    </div>

                    {/* Right Side Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-slate-800 p-6 rounded-xl text-center">
                            <h3 className="text-4xl font-bold text-sky-400">
                                4+
                            </h3>
                            <p className="mt-2">Projects</p>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-xl text-center">
                            <h3 className="text-4xl font-bold text-sky-400">
                                1+
                            </h3>
                            <p className="mt-2">Years Experience</p>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-xl text-center">
                            <h3 className="text-4xl font-bold text-sky-400">
                                MERN
                            </h3>
                            <p className="mt-2">Stack</p>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-xl text-center">
                            <h3 className="text-4xl font-bold text-sky-400">
                                100%
                            </h3>
                            <p className="mt-2">Responsive UI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
