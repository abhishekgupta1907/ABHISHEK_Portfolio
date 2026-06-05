import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section id="experience" className="bg-slate-900 text-white py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center text-sky-400 mb-16"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l-4 border-sky-500 pl-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-10"
                    >
                        <div className="absolute -left-[14px] w-6 h-6 bg-sky-500 rounded-full"></div>

                        <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                            <span className="text-sky-400 font-semibold">
                                Dec 2024 – Present
                            </span>

                            <h3 className="text-2xl font-bold mt-2">
                                Full Stack Developer
                            </h3>

                            <p className="text-gray-400 mt-1">
                                Tata Consultancy Services (TCS)
                            </p>

                            <ul className="mt-4 space-y-2 text-gray-300">
                                <li>
                                    • Developed and maintained scalable web
                                    applications.
                                </li>

                                <li>• Designed and integrated RESTful APIs.</li>

                                <li>
                                    • Worked with MongoDB and relational
                                    databases.
                                </li>

                                <li>
                                    • Implemented authentication and
                                    authorization.
                                </li>

                                <li>
                                    • Participated in debugging and performance
                                    optimization.
                                </li>

                                <li>
                                    • Collaborated using Git and Agile
                                    methodologies.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
