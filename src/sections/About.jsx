import { Code2, Lightbulb, Rocket, Users, Palette } from "lucide-react";
import Hexagon from "../assets/hexgon.svg"


const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clear, maintainable code that scales over time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast, responsive experiences optimized for speed.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to turn ideas into reality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring modern technologies and best development practices.",
  },
    {
    icon: Palette,
    title: "Designing",
    description:
      "Creating intuitive, user-focused interfaces with purpose.",
  }
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Hi !
              <span className="font-normal text-white">
                {" "}
                Im Cheroshena.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
             <p>
              I am a frontend-focused Associate Full Stack Web Developer with 2 years of professional industry experience. Beyond my formal work experience, I have over 4 years of hands-on experience in web development and 5 years of self-driven experience in UI/UX and visual design, gained through personal projects, freelance work, and continuous learning.
             </p>
             <p>
              I have strong experience in HTML, CSS, and JavaScript, along with hands-on experience working with React in CMS-driven production systems. I enjoy building responsive, user-friendly interfaces and optimizing performance through clean code, lazy loading, and modern frontend best practices.
             </p>
             <p>
              Alongside development, I actively work on UI/UX design, UI development, logo design, and 3D modeling, using tools such as Figma and Blender. This allows me to contribute to both the design and development sides of a project, ensuring cohesive, user-centric, and scalable web applications.
             </p>
             <p>
              I am currently expanding my backend skills with Node.js and Express, and I am motivated to grow as a React-focused developer who can bridge design and engineering to build high-quality digital products.
             </p>
  
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium text-foreground">
                "My mission is to craft digital experiences that go beyond functionality products that feel intuitive to users and elegant for developers to build and maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};