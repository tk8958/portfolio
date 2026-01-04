import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Projects() {

    const projects = [
        {
            title: "Employee Management",
            description:
                "I create  this project during my learning. ",
            link: "https://github.com/tk8958/EmployeeManagement",
            tech: "Spring Boot, React, MySQL",
        },
        {
            title: "Airlines Management System",
            description:
                "This project was developed as part of my final year BCA curriculum by a team of four members, where I was responsible for designing and developing the complete backend architecture.",
            link: "https://github.com/tk8958/AirlinesManagementSystem",
            tech: "Spring Boot, MySQL, HTML, CSS, Javascript",
        },
        {
            title: "Furniture House ",
            description:
                "This website was developed for a client, providing me with valuable real-world, hands-on experience in building and delivering production-ready applications.",
            link: "https://tk8958.github.io/furniture_house/",
            tech: "HTML, CSS, Javascript",
        },

        {
            title: "Tic-Tac-Toe",
            description:
                "This Tic Tac Toe project was developed purely for learning purposes to strengthen my frontend development skills and understanding of core UI concepts.",
            link: "https://tushargame.netlify.app/",
            tech: "HTML, CSS, Javascript",
        },

        {
            title: "Secure Passwords",
            description:
                "This website was developed to securely store users’ passwords, enabling them to manage and access all their credentials safely in one centralized place.",
            link: "https://tushargame.netlify.app/",
            tech: "HTML, CSS, Javascript, SpringBoot, MySQL",
        },

        {
            title: "Dealer Vechile Management",
            description:
                "Developed as a learning project to strengthen my Spring Boot expertise and gain practical experience in backend development.",
            link: "https://github.com/tk8958/DealerVechileManagement",
            tech: "SpringBoot, MySQL",
        },
    ];
    

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-black px-4 sm:px-6 lg:px-12 py-20">

                {/* Heading */}
                <div className="max-w-6xl mx-auto text-center mb-14">
                    <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
                        My Projects
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base">
                        A collection of projects I have worked on using modern technologies
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition duration-300 hover:-translate-y-1"
                        >
                            <h2 className="text-xl font-semibold text-orange-500 mb-3">
                                {project.title}
                            </h2>

                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            <p className="text-gray-400 text-xs mb-4">
                                <span className="text-orange-400 font-semibold">Tech:</span>{" "}
                                {project.tech}
                            </p>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 text-sm font-semibold hover:underline"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Projects;
