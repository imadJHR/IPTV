import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/95 backdrop-blur-sm text-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center space-x-2 group">
            <Rocket className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-wider">
              NOVA<span className="text-primary">TECH</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {["Pricing", "Contact Us", "FAQ"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white px-1 py-2 text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </div>
            <button className="bg-primary hover:bg-primary/90 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5">
              <a href="https://alvo.chat/5ryk" target="_blank">Free Trial</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black/50 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
          {["Pricing", "Contact Us", "FAQ"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium hover:bg-black/50 rounded-md transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-primary hover:bg-primary/90 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 my-2">
            Free Trial
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
