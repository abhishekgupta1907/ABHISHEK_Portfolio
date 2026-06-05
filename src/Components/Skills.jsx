import { motion } from "framer-motion";

const skillsData = [
    {
        title: "Frontend",
        skills: [
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
        ],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
        title: "Database",
        skills: ["MongoDB", "MySQL", "Mongoose"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-slate-950 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center text-sky-400 mb-12"
                >
                    Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="bg-slate-800 rounded-xl p-6 hover:scale-105 transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-sky-400 mb-4">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
