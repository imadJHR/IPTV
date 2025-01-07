import { Play, Tv, Film, Monitor } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Tv className="w-5 h-5" />, text: "18,000+ Channels" },
    { icon: <Film className="w-5 h-5" />, text: "88,000+ VOD" },
    { icon: <Monitor className="w-5 h-5" />, text: "100% Uptime" },
  ];

  return (
    <div className="relative bg-gradient-to-b from-black to-gray-900 min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Main heading with animated gradient */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              All-In-One Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient-x">
                IPTV
              </span>{" "}
              Service
            </h1>

            {/* Description with fade-in animation */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Enjoy exceptional image quality up to 4K on any device, anytime and anywhere. 
              Access a world of entertainment at your fingertips.
            </p>

            {/* Stats section with pop-up animation */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-gray-300 transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  {stat.icon}
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>

            {/* CTA button with hover animation */}
            <div className="mt-10">
              <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-primary rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <Play className="w-5 h-5 mr-2" />
                <span className="relative">Start Free Trial</span>
              </button>
            </div>

            {/* Image section with fade-up animation */}
            <div className={`mt-16 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="IPTV Experience"
                  className="rounded-2xl shadow-2xl w-full object-cover max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;