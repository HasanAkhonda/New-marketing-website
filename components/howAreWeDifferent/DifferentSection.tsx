import { LayoutTemplate, TrendingUp, DollarSign } from "lucide-react";

const DifferentSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#ede3fe99] via-white to-[#ede3fe99] py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute  w-full aspect-square bg-[#4C2F814D] rounded-xl -rotate-2 z-0" />
          <img
            src="/different1.jpg" // replace with your actual image path
            alt="Different"
            className="rounded-xl  rotate-1 object-cover w-full aspect-square"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How Are We Different?</h2>
          <p className="text-gray-700 mb-6">
            At SJO MARKETING, we strive to create bold solutions for small businesses trying to
            compete in an ever-evolving digital world. We’re passionate about driving your online growth.
          </p>
          <p className="text-gray-700 mb-10 ">
            We go a level beyond cookie-cutter services. We deeply care about every client’s goals,
            strategically tailor your marketing plan, and tie it directly to your online presence and
            return on investment (ROI).
          </p>

          {/* Icons Section */}

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div className="flex flex-col items-center">
              <LayoutTemplate className="w-16 h-16 text-[#4c2f81] mb-2" />
              <p className="text-sm font-medium text-nowrap">We customize each<br/>website for you</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-16 h-16 text-[#4c2f81] mb-2" />
              <p className="text-sm font-medium text-nowrap">We use data drive<br/>techniques.</p>
            </div>
            <div className="flex flex-col items-center">
              <DollarSign className="w-16 h-16 text-[#4c2f81] mb-2" />
              <p className="text-sm font-medium text-nowrap">We offer<br/>competitive pricing.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DifferentSection;
