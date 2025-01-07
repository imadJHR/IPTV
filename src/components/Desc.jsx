import { useState, useEffect } from "react";
import { Globe, Shield, Tv } from "lucide-react";

const Description = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Global Coverage",
      subtitle: "115+ Countries Worldwide",
      desc: "Access TV channels from around the world including Netherlands, Belgium, Germany, UK, Spain, Portugal, Poland, Italy, Israel, Ex-Yu, Hindi, Arabic, Turkey, and many more.",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Money-Back Guarantee",
      subtitle: "7 Days Risk-Free Trial",
      desc: "Try our IPTV subscription with confidence. Not satisfied? Cancel within 7 days of purchase and receive a full refund, no questions asked.",
    },
    {
      icon: <Tv className="w-12 h-12 text-primary" />,
      title: "Premium Quality",
      subtitle: "HD/FHD/4K/8K Support",
      desc: "Experience crystal-clear streaming with support for all image qualities. Perfect viewing on any device - Mobile, TV, Android box, or PC, regardless of network speed.",
    },
  ];

  return (
    <section 
      id="features-section"
      className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 
                           transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card Highlight Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon with floating animation */}
                  <div className="p-3 inline-block rounded-xl bg-gray-800/50 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-primary/80">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Hover line animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;