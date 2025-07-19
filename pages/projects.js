import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Movie Explorer Web",
      image: "/files/movieweb.jpeg",
      description: "Movie and celebrity search platform with detailed views, favorites, authentication, and real-time data integration using TMDB API.",
      tech: ["React", "React Router DOM", "Context API", "JavaScript", "JSX", "TMDB API", "Vercel"],
      codeLink: "https://github.com/Hitao1623/movie-explorer",
      demoLink: "https://movie-explorer-web.vercel.app",
    },
    {
      title: "Vehicle Rental System",
      image: "/files/javafx.jpeg",
      description:
        "Full-featured rental system supporting vehicle management (Car, Truck, Bike), search, rent, return, and view rental history, designed with JOINED inheritance strategy.",
      tech: ["Java", "JavaFX", "Spring Boot", "JPA(Hibernate)", "MySQL", "Azure Database", "FXML"],
      codeLink: "https://github.com/Hitao1623/VehicleRentalSystem",
      demoLink: "",
    },
    {
      title: "Personal Portfolio Web",
      image: "/files/portfolio.png",
      description: "A responsive multi-page personal portfolio website showcasing skills, projects, and contact information, built with Next.js and React, styled quickly using Tailwind CSS, enhanced with React Icons for UI elements, and deployed on Vercel.",
      tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      codeLink: "https://github.com/Hitao1623/portfolio-nextjs-haitao",
      demoLink: "https://portfolio-nextjs-haitaowang.vercel.app",
    },
    {
      title: "Car Rental Management System",
      image: "/files/carweb.png",
      description: "A full-featured web app for booking and managing car rentals with user authentication, vehicle listings, and admin controls.",
      tech: ["Node.js", "Express.js", "MySQL", "Azure Database", "Bootstrap", "Render"],
      codeLink: "https://github.com/RituArora-DevOps/RentnDrive",
      demoLink: "https://carrentalmanagement.onrender.com",
    },
       {
      title: "E-Commerce Web",
      image: "/files/ecommerce.jpg",
      description: "Secure two-sided e-commerce platform with seller dashboards (CRUD) and buyer features including product search, cart, orders, and reviews.",
      tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Vite", "JavaScript", "Blade", "Eloquent ORM", "JWT", "MVC", "InfinityFree"],
      codeLink: "https://github.com/dyln-n/webdev-project",
      demoLink: "https://e-commerce-web.infinityfreeapp.com",
    },
  ];

  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] py-12 px-2 flex flex-col items-center">
      <h1 className="text-4xl font-semibold mb-10">Projects</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-[#161b22] border border-[#4d5155] rounded-xl overflow-hidden mb-10 shadow-lg max-w-5xl w-full gap-x-6">
          {/* Image */}
          <div className="md:w-1/2 p-2">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl" />
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
              <p className="text-sm mb-4">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-[#c9d1d9] px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                <FaGithub className="mr-2" />
                Code
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center border border-[#c9d1d9] px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                  <FaExternalLinkAlt className="mr-2" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
