import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import bein from "../../assets/bein.png";
import prime from "../../assets/prime.png";
import apple from "../../assets/apple.png";
import netflix from "../../assets/netflix.png";
import hbo from "../../assets/hbo.png";
import shahid from "../../assets/shahid.png";
import disnep from "../../assets/disnep.png";

const BrandMarquee = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const brands = [
    bein,
    prime,
    apple,
    netflix,
    hbo,
    shahid,
    disnep,
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-center text-2xl font-semibold mb-8 text-white/80">Trusted by Leading Brands</h3>
        
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="py-4"
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="mx-4 transform transition-all duration-300 hover:scale-110"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-800/70 
                             transition-all duration-300 hover:shadow-lg hover:shadow-primary/10
                             group relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
                              duration-1000 ease-in-out"></div>
                
                {/* Brand logo */}
                <div className="relative w-[150px] h-[46px] flex items-center justify-center">
                  <img
                    src={brand}
                    alt="Brand"
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 
                               group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BrandMarquee;