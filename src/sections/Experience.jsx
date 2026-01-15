import Hexagon from "../assets/hexgon.svg"


const experiences = [
  {
    period: "11/2024 — Present",
    role: "Full-Stack Web Developer",
    company: "eBeyonds(PVT)Ltd",
    description:
      "Developed and maintained CMS-based web applications using React and Node.js for global hotel brands. Built reusable UI components, integrated REST APIs, fixed bugs, and optimized performance through lazy loading and image optimization while working in an Agile environment.",
    technologies: ["React.js", "Node.js", "SASS", "CSS", "JavaScript"],
    current: true,
  },
  {
    period: "11/2023 — 11/2024",
    role: "Associate Full-Stack Web Developer",
    company: "eBeyonds(PVT)Ltd",
    description:
      "Worked on frontend and backend features using React, Node.js, HTML, CSS, and JavaScript in a CMS-driven environment for global hotel projects. Integrated REST APIs, fixed UI and backend bugs, and improved performance through lazy loading and image optimization while following Agile workflows.",
    technologies: ["React.js", "Node.js", "SASS", "CSS", "JavaScript"],
    current: false,
  },
  {
    period: "05/2023 — 11/2023",
    role: "Trainee Software Developer",
    company: "CyberTec Innovation (PVT)Ltd",
    description:
      "Designed UI in Figma and implemented responsive web and mobile applications using React, Next.js, and React Native. Assisted with backend development using Node.js and SQL while gaining hands-on experience with the MERN stack and Agile practices.",
    technologies: ["React.js", "Next.js", "Node.js", "ReactNative", "Tailwind CSS", "JavaScript", "MYSQL", "MongoDB"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = 12 + Math.random() * 20;

          return (
            <img
              key={i}
              src={Hexagon}
              alt=""
              className="absolute opacity-80"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                filter: "drop-shadow(0 0 6px #af32f2)",

                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,

                animation: `slow-drift ${25 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foregroundanimate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                    }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};