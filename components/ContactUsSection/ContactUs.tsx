import React from 'react';

const ContactUs = () => {
  return (
    <section
    id='Contact'
      className="w-full"
      style={{
        background: `linear-gradient(130.48deg, rgba(237, 227, 254, 0.6) 0.52%, rgba(255, 255, 255, 0.6) 51.91%, rgba(237, 227, 254, 0.6) 100.01%)`,
      }}
    >
      <div className="bg-white rounded shadow-md max-w-4xl mx-5 lg:mx-auto my-8 md:my-24 px-4 py-6 md:py-12 md:px-16">
        <h2 className="font-bold text-center text-[32px] sm:text-[40px] md:text-[48px] mb-12">
          Contact Us Today
        </h2>

        <form className="space-y-4 text-black-400">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                First Name <i className="required text-red-500">*</i>
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4c2f81]"
              />
            </div>
            <div className="w-full">
              <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                Last Name<i className="required text-red-500">*</i>
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4c2f81]"
              />
            </div>
          </div>

          {/* Company, Email, Phone */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company<i className="required text-red-500">*</i>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4c2f81]"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email<i className="required text-red-500">*</i>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4c2f81]"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone<i className="required text-red-500">*</i>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4c2f81]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              How can we help you?<i className="required text-red-500">*</i>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4c2f81]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-start sm:justify-center">
            <button
              type="submit"
              className="sm:w-fit w-full bg-[#4c2f81] hover:bg-[#3a2465] text-white font-semibold py-3 px-8 rounded-md transition"
            >
              Submit
            </button>
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
