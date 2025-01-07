import { FaWhatsapp } from "react-icons/fa6";

const Support = () => {
  return (
    <div id="contact" className="py-16 relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20 animate-pulse">
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700 animate-gradient-x"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600 animate-gradient-y"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <FaWhatsapp className="text-6xl text-green-500 animate-bounce" />
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Online Support
          </h1>
          <p className="text-lg text-white max-w-lg">
            Need assistance? We're here to help! Connect with us instantly via
            WhatsApp.
          </p>
          <button className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300">
            <span className="absolute inset-0 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-25 rounded-full"></span>
            <a href="https://alvo.chat/5ryw" target="_blank">
              <span className="relative z-10">WhatsApp Us</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
