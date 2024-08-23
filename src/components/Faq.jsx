
const Faq = () => {
  
  return (
   <div className="py-16 space-y-4">
     <h1 className="text-3xl text-white text-center  ">Frequently Asked Questions (FAQ)</h1>
    <div className="space-y-6 flex justify-center flex-col w-1/2 mx-auto">
      
    <details className="group [&_summary::-webkit-details-marker]:hidden " open>
      <summary
        className=" flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">Available payment methods?</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-white">
        . Paypal<br/>
        . Credit card <br/>
       
      </p>
    </details>
  
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">Wich devices can be used for IPTV ?</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-white">
      Our IPTV services are accessible via all smart TV devices (Samsung, Sony, LG…), all Android devices (phones), Apple TV, iPhone, Google Chromecast, MAG box in the STB emulator app and FireStick.

      </p>
    </details>
    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">Recommended internet speed?</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-white">
      If your download speed is not less than 30 mbps, then everything will work smoothly in the highest quality. If you are not sure, ask for 1 day trial to test the quality first.

       
      </p>
    </details>
    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">How many connections at once?</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-white">
      You may install your account on multiple devices, but keep in mind that it works on 1 at a time.

       
      </p>
    </details>  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">How can I test the IPTV service?</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-white">
      Watch [WEBSITE] offers you a 24h free trial. With this you can watch all the channels available on our IPTV packages, adult (excl. on demand) channels movies and series.





       
      </p>
    </details>
  </div>
   </div>
  );
};

export default Faq;
