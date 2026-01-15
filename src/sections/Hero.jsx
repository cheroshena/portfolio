import { ArrowRight } from "lucide-react";
import Hexagon from "../assets/hexgon.svg"
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Download } from "lucide-react";
import { Github, Linkedin, } from "lucide-react";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "GraphQL",
  "MongoDB",
  "Tailwind CSS",
  "SASS",
  "Redux",
  "Git",
  "GitHub Action",
]

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background "></div>
      </div>

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



      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animmate-fade-in">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer | React Specialists
              </span>
            </div>
            {/* HeadLine */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                Design driven.<span className="text-primary glow-text"> Performance focused. </span>
                <br />
                Built for real users.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Frontend-focused Associate Full Stack Web Developer with over two years of experience in HTML, CSS, and JavaScript, and hands-on experience working with React in CMS-driven production environments. Skilled in building responsive UI components, integrating REST APIs, and optimizing performance through lazy loading and clean code practices. Experienced in translating Figma designs into pixel-perfect, user-friendly interfaces with a strong focus on UI/UX and UI engineering. Currently expanding backend skills with Node.js and Express, and motivated to grow as a React-focused developer in modern, scalable web applications.
              </p>
            </div>
            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">Contact Me <ArrowRight className="w-5 h-5" /></Button>
              <AnimatedBorderButton><Download />DownLoad</AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Follow Me :
              </span>
              {[
                { icon: Github, href: "https://github.com/cheroshena" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/fernando-cheroshena-264447250/" },

              ].map((social, idx) => (
                <a className="p-2 rounded-full glass hover:primary/10 hover:text-primary transition-all duration-300" key={idx} href={social.href}>{<social.icon className="w-7 h-7" />}</a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md max-auto">

              {/* BG Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to primary/10 blur-2x animate-pulse-glow"/>
              <div className="relative ">
                <img src="/profile-photo.png" alt="Fernando Cheroshena" className="w-full aspect-[4/5] object-cover" />

                {/* Floating Badge */}
                <div className="absolute -top-0 -right-4 glass-strong rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">

                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping" />
                    <span className="text-sm font-medium">Available For Work</span>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute -bottom-4 -left-4 glass-strong rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skill Section  */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I Work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div className="flex-shrink-0 px-8 py-4" key={idx}>
                  <span className="text-xl font-semibold text-primary/50 hover:text-primary transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}