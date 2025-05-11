import { Dribbble, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#08050F] text-white px-6 md:px-16 xl:px-[300px] py-16">
            <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between gap-10 text-sm">
                {/* Left Column - Logo + Description + Icons */}
                <div className="flex flex-col gap-5 md:max-w-xs">
                    <img src="/FooterLogo.svg" alt="Logo" className="w-[172px] h-[47px]" />
                    <p className="text-[#D2D2D5] text-[18px] leading-[27px]">
                        At our marketing company, we believe that marketing is more than just advertising.
                    </p>
                    <div className="flex gap-3">
                        {[Dribbble, Instagram, Linkedin].map((Icon, i) => (
                            <div key={i} className="border  rounded-xl p-2.5 w-10 h-10 flex items-center justify-center text-[#fa931a] hover:text-[#08050F] hover:bg-[#fa931a]">
                                <Icon className="w-5 h-5" />
                            </div>
                        ))}
                        <div className="rounded-xl w-10  h-10 flex items-center justify-center   ">
                            <svg className="text-[#FA931A] rounded-xl  hover:text-[#08050F] hover:fill-[#fa931a]  " width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="1.32178" width="47" height="47" rx="11.5" stroke="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.834 18.9886C14.834 18.5284 15.2071 18.1553 15.6673 18.1553H20.1673C22.2621 18.1553 24.0007 19.8122 24.0007 21.9053C24.0007 23.0918 23.442 24.1381 22.5765 24.8219C23.442 25.5058 24.0007 26.5521 24.0007 27.7386C24.0007 29.8317 22.2621 31.4886 20.1673 31.4886H15.6673C15.2071 31.4886 14.834 31.1155 14.834 30.6553V18.9886ZM20.1673 23.9886C21.3862 23.9886 22.334 23.0339 22.334 21.9053C22.334 20.7767 21.3862 19.8219 20.1673 19.8219H16.5007V23.9886H20.1673ZM16.5007 25.6553H20.1673C21.3862 25.6553 22.334 26.61 22.334 27.7386C22.334 28.8672 21.3862 29.8219 20.1673 29.8219H16.5007V25.6553Z" fill="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.5007 20.6551C26.5007 20.1949 26.8737 19.8218 27.334 19.8218H30.6673C31.1276 19.8218 31.5007 20.1949 31.5007 20.6551C31.5007 21.1153 31.1276 21.4884 30.6673 21.4884H27.334C26.8737 21.4884 26.5007 21.1153 26.5007 20.6551ZM24.834 26.4884C24.834 24.3497 26.6772 22.3218 29.0007 22.3218C31.3242 22.3218 33.1673 24.3497 33.1673 26.4884C33.1673 26.9487 32.7942 27.3218 32.334 27.3218H26.5007C26.5007 28.7025 27.6199 29.8218 29.0007 29.8218C29.925 29.8218 30.7332 29.3206 31.1667 28.5712C31.3972 28.1728 31.9069 28.0367 32.3053 28.2671C32.7037 28.4975 32.8398 29.0074 32.6094 29.4057C31.8902 30.6489 30.544 31.4884 29.0007 31.4884C26.6995 31.4884 24.834 29.6229 24.834 27.3218V26.4884ZM26.6628 25.6551H31.3385C30.9771 24.732 30.0541 23.9884 29.0007 23.9884C27.9472 23.9884 27.0242 24.732 26.6628 25.6551Z" fill="currentColor" />
                            </svg>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833984 4.98861C0.833984 4.52837 1.20708 4.15527 1.66732 4.15527H6.16732C8.26213 4.15527 10.0007 5.81223 10.0007 7.90527C10.0007 9.09176 9.44199 10.1381 8.57649 10.8219C9.44199 11.5058 10.0007 12.5521 10.0007 13.7386C10.0007 15.8317 8.26213 17.4886 6.16732 17.4886H1.66732C1.20708 17.4886 0.833984 17.1155 0.833984 16.6553V4.98861ZM6.16732 9.98861C7.38622 9.98861 8.33398 9.03389 8.33398 7.90527C8.33398 6.77666 7.38622 5.82194 6.16732 5.82194H2.50065V9.98861H6.16732ZM2.50065 11.6553H6.16732C7.38622 11.6553 8.33398 12.61 8.33398 13.7386C8.33398 14.8672 7.38622 15.8219 6.16732 15.8219H2.50065V11.6553Z" fill="#FA931A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5007 6.65511C12.5007 6.19488 12.8737 5.82178 13.334 5.82178H16.6673C17.1276 5.82178 17.5007 6.19488 17.5007 6.65511C17.5007 7.11534 17.1276 7.48844 16.6673 7.48844H13.334C12.8737 7.48844 12.5007 7.11534 12.5007 6.65511ZM10.834 12.4884C10.834 10.3497 12.6772 8.32178 15.0007 8.32178C17.3242 8.32178 19.1673 10.3497 19.1673 12.4884C19.1673 12.9487 18.7942 13.3218 18.334 13.3218H12.5007C12.5007 14.7025 13.6199 15.8218 15.0007 15.8218C15.925 15.8218 16.7332 15.3206 17.1667 14.5712C17.3972 14.1728 17.9069 14.0367 18.3053 14.2671C18.7037 14.4975 18.8398 15.0074 18.6094 15.4057C17.8902 16.6489 16.544 17.4884 15.0007 17.4884C12.6995 17.4884 10.834 15.6229 10.834 13.3218V12.4884ZM12.6628 11.6551H17.3385C16.9771 10.732 16.0541 9.98844 15.0007 9.98844C13.9472 9.98844 13.0242 10.732 12.6628 11.6551Z" fill="#FA931A" />
                            </svg>


                        </div>
                    </div>
                </div>

                {/* Middle Column - Contact Info */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[24px] font-medium">Contact</h3>
                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#E9E9EA] text-[18px]"
                    >
                        <MapPin className="w-6 h-6" />
                        66 Road Brokiyn Street, 600
                    </a>
                    <div className="flex items-center gap-2 text-[#E9E9EA] text-[18px]">
                        <Phone className="w-6 h-6" />
                        (509) 562-1912
                    </div>
                    <div className="flex items-center gap-2 text-[#E9E9EA] text-[18px]">
                        <Mail className="w-6 h-6" />
                        contact@sjomarketing.com
                    </div>
                </div>

                {/* Right Columns - Links */}
                <div className="flex flex-col gap-4 w-[110px]">
                    <h3 className="text-[24px] font-medium">Company</h3>
                    <ul className="flex flex-col gap-[17px] text-[#D2D2D5] text-[18px]">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Brand Guide</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 w-[122px]">
                    <h3 className="text-[24px] font-medium">Resources</h3>
                    <ul className="flex flex-col gap-[17px] text-[#D2D2D5] text-[18px]">
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">E Book</a></li>
                        <li><a href="#" className="hover:underline">Advertising</a></li>
                        <li><a href="#" className="hover:underline">Articles</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
