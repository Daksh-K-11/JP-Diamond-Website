import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import heroDiamonds from '@/assets/hero-diamonds.jpg';
import labTesting from '@/assets/lab-testing.jpg';
import diamondCertification from '@/assets/diamond-certification.jpg';

const carouselItems = [
  {
    image: heroDiamonds,
    title: "Precision Diamond Certification",
    subtitle: "Industry-leading accuracy and reliability",
    description: "Advanced analysis with state-of-the-art equipment and certified professionals."
  },
  {
    image: labTesting,
    title: "Professional Testing Laboratory",
    subtitle: "Advance and modern facility",
    description: "Cutting-edge technology meets traditional expertise for unparalleled precision."
  },
  {
    image: diamondCertification,
    title: "Trusted Certification Standards",
    subtitle: "Internationally recognized reports",
    description: "Your diamonds deserve the highest standards of certification and authentication."
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel Items */}
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in duration-700">
                {item.title}
              </h1>
              <p className="text-xl sm:text-2xl font-light mb-4 text-yellow-200 animate-in slide-in-from-bottom-8 duration-700 delay-200">
                {item.subtitle}
              </p>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-in slide-in-from-bottom-8 duration-700 delay-300">
                {item.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in zoom-in-95 duration-500 delay-500">
                <Link to="/services">
                  <Button className="btn-gold text-lg px-8 py-4 h-auto">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-primary scale-125'
                : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;