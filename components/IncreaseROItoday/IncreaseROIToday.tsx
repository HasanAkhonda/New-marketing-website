
const cardData = [
  { title: 'Data+', image: '/data.svg' },
  { title: 'Design+', image: '/design.svg' },
  { title: 'Research+', image: '/research.svg' },
  { title: 'PPC+', image: '/ppc.svg' },
];

const IncreaseROIToday = () => {
  return (
    <section className="w-full flex flex-col justify-center bg-white md:px-6">
    <div className="max-w-6xl flex flex-col md:mx-auto my-8 mx-5 md:my-24 gap-5 md:gap-6">
      <h2 className="text-3xl md:text-5xl text-center font-bold text-gray-900 md:mb-12">
        Increase ROI Today
      </h2>

      <div className="flex flex-col md:flex-row w-full gap-5 md:gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
              className="md:w-full w-full bg-white rounded-xl shadow-lg overflow-hidden  flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6">
                <h1 className="text-[28px] md:text-2xl font-semibold">{card.title}</h1>
                <img src={card.image} alt={card.title} className="w-16 h-16" />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-4">
                <p className="text-gray-600 text-[16px] md:text-sm leading-relaxed">
                  We are driven by the data. We ensure all major marketing decisions are driven by data analytics.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncreaseROIToday;
