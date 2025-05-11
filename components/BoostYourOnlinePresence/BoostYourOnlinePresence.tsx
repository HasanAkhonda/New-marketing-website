import React from 'react'

const  BoostYourOnlinePresence = () => {
    return (
        <section className="w-full  bg-[#21184a] py-40 px-6">
            <div className="max-w-5xl mx-5 px-5 my-32 md:mx-auto md:-my-12 flex flex-col md:flex-row items-center gap-12">
                <div className="w-full flex flex-col  gap-2 md:gap-6 items-center text-center  ">
                    <h2 className="text-[32px] md:text-5xl text-white  font-bold">Boost Your Online Presence</h2>
                    <p className="text-gray-50 text-[18px] md:text-[20px] font-light ">
                        See how our data driven marketing strategies can help you boost
                        long term sales growth.
                    </p>

                    {/* button */}
                    <a
                        href="#schedule"
                        className="inline-block bg-orange-400 mt-6 md:mt-0 hover:bg-orange-500 text-white text-center font-semibold py-3 px-6 rounded-[4px] w-fit text-base sm:text-lg transition"
                    >
                        Schedule Call →
                    </a>
                </div>

            </div>
        </section>
    )
}

export default BoostYourOnlinePresence
