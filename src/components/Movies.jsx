import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Play, Film } from "lucide-react";

const Movies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("movies-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const movies = [
    {
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=250&h=400&fit=crop&q=80",
      title: "Action Movie",
      rating: "4.8",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=250&h=400&fit=crop&q=80",
      title: "Drama Series",
      rating: "4.7",
    },
    {
      image:
        "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=250&h=400&fit=crop&q=80",
      title: "Thriller",
      rating: "4.9",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=250&h=400&fit=crop&q=80",
      title: "Documentary",
      rating: "4.6",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=250&h=400&fit=crop&q=80",
      title: "Comedy",
      rating: "4.5",
    },
  ];

  return (
    <section
      id="movies-section"
      className="relative bg-gradient-to-b from-black to-gray-900 py-20 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            In Demand Movies, Shows, News &
            <span className="text-primary"> Sports</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access thousands of premium channels and on-demand content
          </p>
        </div>

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              className="mx-4 transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative group">
                {/* Card Container */}
                <div className="relative w-[250px] h-[400px] rounded-xl overflow-hidden">
                  {/* Image */}
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Film className="w-4 h-4 mr-2 text-primary" />
                          <span className="text-sm text-gray-300">
                            Rating: {movie.rating}
                          </span>
                        </div>
                        <button className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors duration-300">
                          <a href="https://alvo.chat/5ryw"target="_blank">
                            <Play className="w-4 h-4" />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Movies;
