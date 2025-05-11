'use client'
import { Dribbble, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white w-full">
            <div className="max-w-7xl flex flex-col gap-7 md:gap-0  md:flex-row justify-between mx-5   md:mx-auto  text-sm">


                {/* Logo (left) */}
                <div className=" w-full md:max-w-1/4 mt-8 space-y-4">
                    <img src="/FooterLogo.svg" alt="Logo" className=" max-w-44   " />
                    <p className="text-[18px]">At our marketing company, we believe that marketing is more than just advertising.</p>
                    <div className="flex max-w-fit items-center justify-between gap-3 text-center">
                        <div className="flex flex-col items-center">
                            <Dribbble className="border rounded-xl  stroke-1 p-2.5 w-10 h-10 text-[#fa931a]" />
                        </div>
                        <div className="flex flex-col items-center">
                            <Instagram className="border stroke-1 rounded-xl p-2.5 w-10 h-10 text-[#fa931a]" />
                        </div>
                        <div className="flex flex-col items-center">
                            <Linkedin className="border stroke-1 rounded-xl p-2.5 w-10 h-10 text-[#fa931a] " />
                        </div>
                        <div className="flex flex-col items-center">
                            <svg width="40" height="40" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="1.32178" width="47" height="47" rx="11.5" stroke="#FA931A" />
                                <path fillRule="evenodd" clip-rule="evenodd" d="M14.834 18.9886C14.834 18.5284 15.2071 18.1553 15.6673 18.1553H20.1673C22.2621 18.1553 24.0007 19.8122 24.0007 21.9053C24.0007 23.0918 23.442 24.1381 22.5765 24.8219C23.442 25.5058 24.0007 26.5521 24.0007 27.7386C24.0007 29.8317 22.2621 31.4886 20.1673 31.4886H15.6673C15.2071 31.4886 14.834 31.1155 14.834 30.6553V18.9886ZM20.1673 23.9886C21.3862 23.9886 22.334 23.0339 22.334 21.9053C22.334 20.7767 21.3862 19.8219 20.1673 19.8219H16.5007V23.9886H20.1673ZM16.5007 25.6553H20.1673C21.3862 25.6553 22.334 26.61 22.334 27.7386C22.334 28.8672 21.3862 29.8219 20.1673 29.8219H16.5007V25.6553Z" fill="#FA931A" />
                                <path fillRule="evenodd" clip-rule="evenodd" d="M26.5007 20.6551C26.5007 20.1949 26.8737 19.8218 27.334 19.8218H30.6673C31.1276 19.8218 31.5007 20.1949 31.5007 20.6551C31.5007 21.1153 31.1276 21.4884 30.6673 21.4884H27.334C26.8737 21.4884 26.5007 21.1153 26.5007 20.6551ZM24.834 26.4884C24.834 24.3497 26.6772 22.3218 29.0007 22.3218C31.3242 22.3218 33.1673 24.3497 33.1673 26.4884C33.1673 26.9487 32.7942 27.3218 32.334 27.3218H26.5007C26.5007 28.7025 27.6199 29.8218 29.0007 29.8218C29.925 29.8218 30.7332 29.3206 31.1667 28.5712C31.3972 28.1728 31.9069 28.0367 32.3053 28.2671C32.7037 28.4975 32.8398 29.0074 32.6094 29.4057C31.8902 30.6489 30.544 31.4884 29.0007 31.4884C26.6995 31.4884 24.834 29.6229 24.834 27.3218V26.4884ZM26.6628 25.6551H31.3385C30.9771 24.732 30.0541 23.9884 29.0007 23.9884C27.9472 23.9884 27.0242 24.732 26.6628 25.6551Z" fill="#FA931A" />
                            </svg>
                        </div>
                    </div>


                </div>

                {/* Contact */}
                <div className="md:max-w-1/4 space-y- ">
                    <h4 className="font-semibold mb-4 text-lg">Contact</h4>
                    <p>
                        <svg className='inline-block ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.5C7.313 2.5 3.5 6.313 3.5 11C3.5 15.983 8.129 19.041 11.192 21.064L11.722 21.416C11.806 21.472 11.903 21.5 11.999 21.5C12.095 21.5 12.192 21.472 12.276 21.416L12.806 21.064C15.869 19.041 20.498 15.983 20.498 11C20.5 6.313 16.687 2.5 12 2.5ZM12 13.5C10.619 13.5 9.5 12.381 9.5 11C9.5 9.619 10.619 8.5 12 8.5C13.381 8.5 14.5 9.619 14.5 11C14.5 12.381 13.381 13.5 12 13.5Z" fill="#FEFEFE" />
                        </svg>
                        66 Road Brokiyn Street, 600
                    </p>
                    <p>
                        <svg className='inline-block ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6252 14.1742L20.2682 15.7502C20.8142 16.0762 21.0961 16.7102 20.9711 17.3342C20.4601 19.8932 17.8902 21.5332 15.3732 20.8422C9.4342 19.2122 4.79509 14.5872 3.15909 8.63524C2.46709 6.11724 4.10519 3.54522 6.66519 3.03322L6.68204 3.03023C7.30704 2.90523 7.94419 3.18823 8.26919 3.73723L9.83218 6.37624C10.3882 7.31524 10.112 8.52422 9.20303 9.12822L7.54214 10.2332C8.71414 13.0402 10.9541 15.2892 13.7531 16.4592L14.8681 14.7942C15.4771 13.8872 16.6872 13.6152 17.6252 14.1742Z" fill="#FEFEFE" />
                        </svg>

                        (509) 562-1912
                    </p>
                    <p>
                        <svg className='inline-block ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 5H6C4 5 3 6 3 8V17C3 19 4 20 6 20H18C20 20 21 19 21 17V8C21 6 20 5 18 5ZM17.9409 9.606L13.0291 13.178C12.7211 13.402 12.36 13.514 12 13.514C11.64 13.514 11.2779 13.402 10.9709 13.179L6.05908 9.606C5.72408 9.363 5.65004 8.893 5.89404 8.558C6.13704 8.224 6.60389 8.14801 6.94189 8.39301L11.854 11.965C11.942 12.028 12.059 12.029 12.147 11.965L17.0591 8.39301C17.3961 8.14801 17.8639 8.224 18.1069 8.558C18.3509 8.894 18.2759 9.363 17.9409 9.606Z" fill="white" />
                        </svg>
                        contact@sjomarketing.com
                    </p>
                    
                </div>

                {/* Company */}
                <div className="md:max-w-1/4 ">
                    <h4 className="font-semibold mb-4 text-lg">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Brand Guide</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="md:max-w-1/4 ">
                    <h4 className="font-semibold mb-4 text-lg">Resources</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">E Book</a></li>
                        <li><a href="#" className="hover:underline">Advertising</a></li>
                        <li><a href="#" className="hover:underline">Articles</a></li>
                    </ul>
                </div>

                {/* About Blurb */}
                {/* <div>
                    <h4 className="font-semibold mb-4 text-lg">About</h4>
                    <p>At our marketing company, we believe that marketing is more than just advertising.</p>
                </div> */}
            </div>

            {/* Bottom bar */}
            {/* <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400 space-y-2">
                <p>Copyright © 2025 SJO Marketing. All Rights Reserved.</p>
                <p>
                    <a href="#" className="hover:underline">Terms & Conditions</a> · <a href="#" className="hover:underline">Privacy Policy</a>
                </p>
            </div> */}
        </footer>
    );
};

export default Footer;
