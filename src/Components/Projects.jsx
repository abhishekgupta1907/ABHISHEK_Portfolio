import { motion } from "framer-motion";

const projects = [
    {
        title: "NVMart",
        description:
            "Full MERN E-Commerce platform with authentication, product management, cart functionality and order processing.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "#",
        demo: "#",
    },
    {
        title: "Food Ordering Website",
        description:
            "Responsive food ordering platform featuring modern UI, category filtering and GSAP animations.",
        tech: ["React", "CSS", "GSAP"],
        github: "#",
        demo: "#",
    },
    {
        title: "Movie Database App",
        description:
            "Movie management system with CRUD operations, search and genre filtering.",
        tech: ["MongoDB", "Express", "React", "Node"],
        github: "#",
        demo: "#",
    },
    {
        title: "Blog Website",
        description:
            "Modern blogging platform with dynamic content and responsive design.",
        tech: ["React", "Tailwind CSS"],
        github: "#",
        demo: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="bg-slate-950 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center text-sky-400 mb-14"
                >
                    Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
                        >
                            {/* Project Image */}
                            <div className="h-56 bg-slate-700 flex items-center justify-center">
                                <span className="text-gray-300">
                                    Project Screenshot
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-sky-400">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-5 py-2 bg-sky-500 rounded-lg hover:bg-sky-600"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-5 py-2 border border-sky-500 rounded-lg hover:bg-sky-500"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
