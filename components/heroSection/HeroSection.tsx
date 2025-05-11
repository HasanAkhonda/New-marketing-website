const HeroSection = () => {
    return (
      <section className="w-full flex flex-col gap-12 bg-gradient-to-br from-[#1a0533] to-[#0a0118] text-white">
        <div className="max-w-7xl mx-5 md:mx-auto flex flex-col md:flex-row gap-5 my-16 md:my-32">
          {/* Left Text Content */}
          <div className="text-left">
            <h1 className="font-inter font-bold text-5xl sm:text-6xl md:text-8xl leading-[110%] tracking-normal mb-6">
              Website <br />
              <span className="text-orange-400">Creation & SEO</span> <br />
              Made Easy
            </h1>
            <p className="text-gray-300 text-[18px] sm:text-[20px] md:text-[24px] leading-[160%] mb-6">
              Optimize Your Online Presence
            </p>
            <a
              href="#schedule"
              className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-center font-semibold py-3 px-6 rounded-[4px] w-full md:w-fit text-base sm:text-lg transition"
            >
              Schedule Call →
            </a>
          </div>
  
          {/* Right Side: Video */}
          <div className="relative w-full mt-16  md:max-w-3xl">
            {/* Decorative starburst */}
            <div className="absolute -top-4 -left-4 text-orange-400 text-3xl md:text-4xl rotate-12 z-10">
              ★
            </div>
            <div className="aspect-video rounded-[16px] overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                src="/whatsappvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  