import { GiConfirmed } from "react-icons/gi";

const plansData = [
  { title: "1 Month", price: "$5.00", link: "https://alvo.chat/5rym" },
  { title: "3 Months", price: "$9.00", link: "https://alvo.chat/5ryn" },
  { title: "6 Months", price: "$15.00", featured: true, link: "https://alvo.chat/5ryq" },
  { title: "12 Months", price: "$30.00", link: "https://alvo.chat/5ryv" },
];

const features = [
  "HD/4K/8K/ IPTV",
  "+20.000 Channels",
  "24/7 Customer support",
  "+100.000 VOD",
  "7 days money back guarantee",
];

const Plan = () => {
  return (
    <section id="pricing" className="py-24 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">
            Choose your <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">Plan</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-500 hover:scale-105 ${
                plan.featured
                  ? 'bg-gradient-to-b from-indigo-50 to-white scale-105 shadow-xl'
                  : 'bg-white hover:shadow-xl'
              } rounded-2xl overflow-hidden animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-b-lg text-sm font-semibold">
                  Popular
                </div>
              )}
              <div className="p-6 xl:p-8">
                <h3 className="font-manrope text-primary text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                  {plan.title}
                </h3>
                <div className="flex items-center mb-6">
                  <span className="font-manrope text-6xl font-semibold group-hover:text-indigo-600 transition-colors">
                    {plan.price}
                  </span>
                </div>

                <ul className="mb-8 space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx}>
                      <div className="flex items-center space-x-4 group-hover:transform group-hover:translate-x-1 transition-transform">
                        <GiConfirmed className="text-indigo-600 flex-shrink-0" size={25} />
                        <span className="font-semibold text-gray-800">{feature}</span>
                      </div>
                      {idx < features.length - 1 && <hr className="mt-4 border-gray-100" />}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.open(plan.link, "_blank")}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:translate-y-[-2px] ${
                    plan.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg'
                      : 'bg-gray-100 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;