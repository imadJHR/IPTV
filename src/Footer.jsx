import logo from "./assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 text-white">
           
            <img src={logo} alt="" className="w-28 h-28" />
            <span className="text-xl text-purple-400 font-mono font-bold">Rk Services</span>
          </div>

          {/* Copyright */}
          <p className="mt-4 text-sm text-center text-gray-400 sm:mt-0 sm:text-right">
            &copy; {new Date().getFullYear()} Rk Services. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-6 sm:justify-end">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
