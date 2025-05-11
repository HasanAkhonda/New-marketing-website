import { Mail, Phone, MapPin, Linkedin, Instagram, Dribbble } from "lucide-react";

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
                            <div key={i} className="border rounded-xl p-2.5 w-10 h-10 flex items-center justify-center text-[#fa931a] hover:text-[#08050F] hover:bg-[#fa931a]">
                                <Icon className="w-5 h-5" />
                            </div>
                        ))}
                        <div className="rounded-xl w-10  h-10 flex items-center justify-center  hover:bg-[#fa931a]">
                            <svg className="text-[#FA931A] hover:text-[#08050F]  " width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="1.32178" width="47" height="47" rx="11.5" stroke="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.834 18.9886C14.834 18.5284 15.2071 18.1553 15.6673 18.1553H20.1673C22.2621 18.1553 24.0007 19.8122 24.0007 21.9053C24.0007 23.0918 23.442 24.1381 22.5765 24.8219C23.442 25.5058 24.0007 26.5521 24.0007 27.7386C24.0007 29.8317 22.2621 31.4886 20.1673 31.4886H15.6673C15.2071 31.4886 14.834 31.1155 14.834 30.6553V18.9886ZM20.1673 23.9886C21.3862 23.9886 22.334 23.0339 22.334 21.9053C22.334 20.7767 21.3862 19.8219 20.1673 19.8219H16.5007V23.9886H20.1673ZM16.5007 25.6553H20.1673C21.3862 25.6553 22.334 26.61 22.334 27.7386C22.334 28.8672 21.3862 29.8219 20.1673 29.8219H16.5007V25.6553Z" fill="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.5007 20.6551C26.5007 20.1949 26.8737 19.8218 27.334 19.8218H30.6673C31.1276 19.8218 31.5007 20.1949 31.5007 20.6551C31.5007 21.1153 31.1276 21.4884 30.6673 21.4884H27.334C26.8737 21.4884 26.5007 21.1153 26.5007 20.6551ZM24.834 26.4884C24.834 24.3497 26.6772 22.3218 29.0007 22.3218C31.3242 22.3218 33.1673 24.3497 33.1673 26.4884C33.1673 26.9487 32.7942 27.3218 32.334 27.3218H26.5007C26.5007 28.7025 27.6199 29.8218 29.0007 29.8218C29.925 29.8218 30.7332 29.3206 31.1667 28.5712C31.3972 28.1728 31.9069 28.0367 32.3053 28.2671C32.7037 28.4975 32.8398 29.0074 32.6094 29.4057C31.8902 30.6489 30.544 31.4884 29.0007 31.4884C26.6995 31.4884 24.834 29.6229 24.834 27.3218V26.4884ZM26.6628 25.6551H31.3385C30.9771 24.732 30.0541 23.9884 29.0007 23.9884C27.9472 23.9884 27.0242 24.732 26.6628 25.6551Z" fill="currentColor" />
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
