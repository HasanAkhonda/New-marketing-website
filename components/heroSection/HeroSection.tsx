import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[737px] bg-gradient-to-br from-[#170B1C] to-[#241529] overflow-hidden px-5 sm:px-8"
    >
      {/* ✅ Background Vector Layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/hero-bg.svg')] bg-no-repeat bg-contain bg-center"
      />

      {/* ✅ Decorative Ellipses */}
      <div className="absolute w-[744px] h-[444px] left-[-576px] top-[-3px] bg-[#2F0F6A] blur-[130px] sm:w-[500px] sm:h-[300px] sm:left-[-250px] sm:top-[-50px]" />
      <div className="absolute w-[691px] h-[483px] left-[-715px] top-[642px] bg-[#180B24] blur-[130px] sm:w-[480px] sm:h-[320px] sm:left-[-240px] sm:top-[500px]" />

      {/* ✅ Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto pb-16 pt-24 lg:py-32 gap-16 lg:gap-12">
        {/* Left Content */}
        <div className="text-white w-full lg:w-1/2 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl leading-tight lg:leading-[110%] font-bold mb-6">
            Website<br />
            <span className="text-orange-400">Creation & SEO </span><br />
            Made Easy
          </h1>
          <p className="text-[#E9E9EA] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8">
            Optimize Your Online Presence
          </p>
          <a href="#schedule">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FA931A] rounded text-white font-medium text-base sm:text-lg w-full lg:w-auto">
              Schedule Call <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>

        {/* Right Video Content */}
        <div className="relative w-full lg:w-1/2 aspect-video rounded-[16px] overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover"
            src="/whatsappvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Gradients */}
          <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-b from-transparent to-black opacity-50" />
          <div className="absolute top-0 w-full h-[100px] bg-gradient-to-b from-transparent to-black opacity-30 rotate-180" />

          {/* Top Bar */}
          <div className="absolute top-4 left-0 w-full px-4 flex justify-between items-center text-white">
            <span className="font-semibold text-sm sm:text-base">SJO Marketing Video</span>
            <div className="flex gap-4">
              <div className="flex flex-col items-center text-[#E9E9EA] text-xs font-medium">
                <div className="w-6 h-6 bg-[#E9E9EA] rounded" />
                <span>Watch</span>
              </div>
              <div className="flex flex-col items-center text-[#E9E9EA] text-xs font-medium">
                <div className="w-6 h-6 bg-[#E9E9EA] rounded" />
                <span>Share</span>
              </div>
            </div>
          </div>

          {/* Play Icon Centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[url('/youtubePlay.png')] bg-contain bg-no-repeat z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
