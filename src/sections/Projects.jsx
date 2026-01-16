import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import Hexagon from "../assets/hexgon.svg"

const projects = [
  {
    title: "MedHUB",
    description:
      "Final Year Project – E-Channeling & Drug Distribution System MedHub is a full-stack e-channeling and online pharmacy platform designed to improve access to healthcare services and medical products during time-critical situations. Patients often face uncertainty regarding medicine availability and delays in doctor appointments, which can significantly impact health outcomes. Identifying this real-world problem, I designed and implemented a scalable digital solution to enhance reliability, efficiency, and trust in healthcare service delivery.Built using the MERN Stack with Machine Learning integration, MedHub enables patients to create accounts, book doctor appointments, and purchase prescription medicines and pharmaceutical products online. Users can add products to a wishlist and shopping cart, securely complete payments, track order status until delivery, and provide ratings and reviews. To ensure authenticity and trust, only verified purchasers are allowed to submit product ratings and comments, helping other users make informed decisions.The doctor channeling module allows patients to select doctors and receive channeling details, including time and channeling number, via automated email notifications. In cases where a doctor is unavailable, administrators can review channeling records and notify patients in advance using contact details collected during registration.The admin panel centralizes system management, enabling administrators to manage doctors, products, blogs, and coupon campaigns, monitor orders and channeling records, and view income and order analytics through graphical dashboards. This streamlined workflow improves operational efficiency and supports data-driven decision-making.By seamlessly integrating technology with healthcare services, MedHub enhances patient experience, improves accessibility, and empowers users to take control of their health through a secure, user-friendly, and maintainable web application.",
    image: "/projects/project1.png",
    tags: ["React.js", "NodeJS", "Express.js", "Redux", "Axios", "Python", "RazorPay", "Figma"],
    link: "https://www.linkedin.com/posts/fernando-cheroshena-264447250_ai-technology-experience-activity-7082649427840020480-J9vV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4AZKwBsuuyH77M4PQdMZqmNAsliXoZeSo",
    github: "https://github.com/cheroshena/E-Channeling-and-drugs-distribution",
  },
  {
    title: "Cyber Mart – Shopping Mobile Application",
    description:
      "Cyber Mart is a hybrid mobile shopping application developed for an online marketplace, tailored to meet specific client requirements. Built using React Native, TypeScript, and Tailwind CSS, the application delivers a seamless, responsive, and intuitive user experience across both iOS and Android platforms.I designed the UI/UX using Figma and created the logo and visual identity based on client requirements. Smooth animations were implemented to enhance usability and user engagement. The frontend development focused on performance, accessibility, and modern mobile design standards, ensuring consistency, scalability, and a high-quality user experience across devices.",
    image: "/projects/project2.png",
    tags: ["Next.js", "ReactNative", "Figma", "Tailwind CSS"],
    link: "https://www.linkedin.com/posts/fernando-cheroshena-264447250_reactnative-mobileapplication-typescript-activity-7114942655142264832-zrSz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4AZKwBsuuyH77M4PQdMZqmNAsliXoZeSo",
    github: "https://github.com/cheroshena/POS-mobileApp",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => {
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
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};