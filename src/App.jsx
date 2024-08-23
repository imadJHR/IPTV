
import Swiper from "./components/Swiper/Swiper"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Desc from "./components/Desc";
import Movies from "./components/Movies";
import Plan from "./components/Plan";
import HowWork from "./components/HowWork";
import Faq from "./components/Faq";
import Support from "./components/Support";
import Footer from "./Footer";


const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Swiper/>
      <Desc/>
      <Movies/>
      <Plan/>
      <HowWork/>
      <Faq/>
      <Support/>
      <Footer/>
      
    </div>
  );
};

export default App;
