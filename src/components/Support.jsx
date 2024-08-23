import { FaWhatsapp } from "react-icons/fa6";
const Support = () => {
  return (
    <div className="py-16">
      <div className="flex justify-center mx-auto items-center w-1/2 border rounded-full ">
       
        <div className="flex gap-5 py-6">
        <FaWhatsapp className="text-4xl text-green-500" />
          <h1 className="text-3xl font-bold text-center">0nline Support</h1>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    WhatsApp Us
  </span>
</button>
        </div>
      </div>
      
    </div>
  );
};

export default Support;
