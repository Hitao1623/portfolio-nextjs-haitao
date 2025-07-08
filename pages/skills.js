export default function Skills() {
  const frontEnd = [
    { name: "HTML", icon: "/images/html.png" },
    { name: "CSS", icon: "/images/css.png" },
    { name: "JavaScript", icon: "/images/javascript.png" },
    { name: "React", icon: "/images/react.png" },
    { name: "Tailwind", icon: "/images/tailwind.png" },
    { name: "jQuery", icon: "/images/jquery.png" },
    { name: "Scene Builder", icon: "/images/scenebuilder.png" },
    { name: "Bootstrap", icon: "/images/bootstrap.png" },
  ];

  const backEnd = [
    { name: "Node.js", icon: "/images/node.png" },
    { name: "Express", icon: "/images/express.png" },
    { name: "Spring Boot", icon: "/images/springboot.png" },
    { name: "Laravel", icon: "/images/laravel.png" },
    { name: "MySQL", icon: "/images/mysql.png" },
    { name: "SQL Server", icon: "/images/sql.png" },
    { name: "MongoDB", icon: "/images/mongodb.png" },
    { name: "PostgreSQL", icon: "/images/postgresql.png" },
  ];

  const programming = [
    { name: "Java", icon: "/images/java.png" },
    { name: "C#", icon: "/images/csharp.png" },
    { name: "PHP", icon: "/images/php.png" },
    { name: "JavaScript", icon: "/images/javascript.png" },
  ];

  const tools = [
    { name: "GitHub", icon: "/images/github1.png" },
    { name: "VS Code", icon: "/images/vscode.png" },
    { name: "Postman", icon: "/images/postman.png" },
    { name: "AWS", icon: "/images/amazon.png" },
    { name: "Azure", icon: "/images/azure.png" },
    { name: "Trello", icon: "/images/trello.png" },
    { name: "Netlify", icon: "/images/netlify.png" },
    { name: "Figma", icon: "/images/figma.png" },
  ];

  const Section = ({ title, skills }) => (
    <div className="mb-10 w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center max-w-2xl mx-auto gap-x-8 gap-y-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-24 h-24 bg-[#1f2937] rounded-lg text-[#c9d1d9] transition-transform transform hover:scale-105 hover:brightness-125 group overflow-hidden shadow-md">
            <img src={skill.icon} alt={skill.name} className="h-10 mb-2 relative z-10" />
            <span className="text-sm relative z-10">{skill.name}</span>
            <div className="absolute w-20 h-20 bg-purple-600 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] px-4 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-semibold mb-10">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto gap-x-40 gap-y-5">
        <Section title="Front-End" skills={frontEnd} />
        <Section title="Back-End" skills={backEnd} />
        <Section title="Programming" skills={programming} />
        <Section title="Tech & Tools" skills={tools} />
      </div>
    </div>
  );
}
