'use client'
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface MenuProps {
  item: string;
  link: string;
}

const menuItem: MenuProps[] = [
  { item: "Home", link: "home" },
  { item: "Portfolio", link: "ortfolio" },
  { item: "FAQ", link: "faq" },
  { item: "Contact", link: "contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 relative">
        {/* Logo (left) */}
        <div className="flex items-center space-x-2">
          <img src="/CompanyLogo.svg" alt="Logo" className="w-full" />
           
        </div>

        {/* Centered Menu (desktop only) */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <ul className="flex space-x-6 font-semibold text-gray-800">
            {menuItem.map((menu, index) => (
              <li key={index}>
                <a
                  href={`#${menu.link}`}
                  className={`pb-1 transition border-b-2 ${
                    // use usestate to slicked nav
                    menu.link === "" 
                      ? "text-purple-700 border-purple-700"
                      : "border-transparent hover:text-purple-600 hover:border-purple-600"
                  }`}
                >
                  {menu.item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Get Started button (right) */}
        <div className="hidden md:block">
          <a
            href="#get-started"
            className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
          >
            Get Started
          </a>
        </div>

        {/* Hamburger icon (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
  <div className="md:hidden bg-white shadow-md w-full absolute z-60 px-6 py-4">
    <ul className="flex flex-col space-y-4 font-semibold text-gray-800">
      {menuItem.map((menu, index) => (
        <li key={index}>
          <a
            href={`#${menu.link}`}
            className="block w-full text-left py-2 px-2 rounded  border-gray-200 border-b-2 transition"
            onClick={() => setIsOpen(false)}
          >
            {menu.item}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#get-started"
          className="block w-full text-center bg-purple-700 hover:text-purple-800 text-white py-3 rounded-md hover:bg-purple-800 transition"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </a>
      </li>
    </ul>
  </div>
)}

    </header>
  );
};

export default Navigation;
