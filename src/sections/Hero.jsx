import Hexagon from "../assets/hexgon.svg"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background "></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
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

                animation: `slow-drift ${25 + Math.random() * 60}s ease-in-out infinite`,
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer . React Specialists
              </span>
            </div>
          </div>
          {/* Right Column - Profile Image */}
        </div>
      </div>
    </section>
  )

}