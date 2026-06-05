import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="bg-slate-900 text-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-sky-400 mb-6">
                    Contact Me
                </h2>

                <p className="text-gray-300 mb-10">
                    Looking for a Full Stack Developer? Let's connect and build
                    something amazing.
                </p>

                <div className="flex justify-center gap-6 text-3xl">
                    <a
                        href="https://github.com/abhishekgupta1907"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="linkedin.com/in/abhishek-gupta-1a7923253"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishekgupta8967@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                <div className="mt-10">
                    <a
                        href="/Resume_ABHISHEK_MERN.pdf"
                        download="Abhishek_Gupta_Resume.pdf"
                        className="bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600 transition"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
