const Faq = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              question: "Available payment methods?",
              answer: (
                <>
                  • Paypal<br/>
                  • Credit card
                </>
              )
            },
            {
              question: "Which devices can be used for IPTV?",
              answer: "Our IPTV services are accessible via all smart TV devices (Samsung, Sony, LG…), all Android devices (phones), Apple TV, iPhone, Google Chromecast, MAG box in the STB emulator app and FireStick."
            },
            {
              question: "Recommended internet speed?",
              answer: "If your download speed is not less than 30 mbps, then everything will work smoothly in the highest quality. If you are not sure, ask for 1 day trial to test the quality first."
            },
            {
              question: "How many connections at once?",
              answer: "You may install your account on multiple devices, but keep in mind that it works on 1 at a time."
            },
            {
              question: "How can I test the IPTV service?",
              answer: "Watch [WEBSITE] offers you a 24h free trial. With this you can watch all the channels available on our IPTV packages, adult (excl. on demand) channels movies and series."
            }
          ].map((faq, index) => (
            <details 
              key={index}
              className="group bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 ease-in-out"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white hover:text-gray-200">
                <h2 className="text-xl font-medium">{faq.question}</h2>
                <div className="relative size-6">
                  <div className="transform transition-transform duration-300 group-open:rotate-180">
                    <svg
                      className="absolute inset-0 size-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </summary>

              <div className="p-6 pt-0">
                <p className="text-gray-300 leading-relaxed animate-fade-in">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;