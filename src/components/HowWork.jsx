const HowWork = () => {
  return (
    <div className="bg-gray-900 p-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20 animate-pulse">
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700 animate-gradient-x"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600 animate-gradient-y"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section with animated star icon */}
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
          <div className="animate-bounce-slow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-primary transform hover:scale-110 transition-transform duration-300"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl animate-fade-in">
            How does it work?
          </h2>
        </div>

        {/* Cards grid with hover animations */}
        <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {[
            {
              img: "https://i0.wp.com/iptvtemplate.shop/wp-content/uploads/2023/04/g1839.png?fit=100%2C101&ssl=1",
              title: "1. Place your order",
              description: "Place your order by choosing your preferred subscription period: 1, 3, 6 or 12 months.",
            },
            {
              img: "https://i0.wp.com/iptvtemplate.shop/wp-content/uploads/2023/04/g10332.png?fit=100%2C101&ssl=1",
              title: "2. Get your order",
              description: "This process can take 15 to 30 minutes. Please check your inbox and your spam folder.",
            },
            {
              img: "https://i0.wp.com/iptvtemplate.shop/wp-content/uploads/2023/04/television-1.png?fit=100%2C101&ssl=1",
              title: "3. Enjoy your IPTV service!",
              description: "Enjoy all channels, films and series now!",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl transition-all duration-300 transform hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-gray-600/10 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={card.img}
                  alt=""
                  className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-blue-400">
                    {card.title}
                  </h5>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWork;