import React from "react";
const Footer = () => {
  return (
    <footer className="bg-[#2a317d] text-white">
      <div className="flex justify-between p-10">
        {/* Shop Section */}
        <div>
          <h3 className="font-bold text-3xl mb-4">SHOP</h3>
          <ul className="space-y-2 text-xl">
            <li>
              <a href="#" className="hover:underline">
                Variety Packs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Flavors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Subscribe & Save
              </a>
            </li>
          </ul>
          <div className="mt-20">
            <h3 className="font-bold text-3xl mb-4">WHOLESALE</h3>
            <p className="mb-4">
              <a
                href="mailto:sales@drinkwildwonder.com"
                className="hover:underline"
              >
                sales@drinkwildwonder.com
              </a>
            </p>
            <a
              href="#"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 inline-block"
            >
              Shop wholesale products on Faire →
            </a>
          </div>
        </div>
        {/* Support Section */}
        <div>
          <h3 className="font-bold text-3xl mb-4">SUPPORT</h3>
          <ul className="space-y-2 text-xl">
            <li>
              <a href="#" className="hover:underline">
                Find Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility Statement
              </a>
            </li>
          </ul>
        </div>
        {/* Questions Section */}
        <div className="mr-40">
          <h3 className="font-bold text-3xl mb-4">QUESTIONS</h3>
          <p>
            <a
              href="mailto:hello@drinkwildwonder.com"
              className="hover:underline"
            >
              hello@drinkwildwonder.com
            </a>
          </p>
        </div>
        {/* Wholesale Section */}
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Wildwonder
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:opacity-80">
            <img
              src="/path-to-instagram-icon.svg"
              alt="Instagram"
              className="h-6"
            />
          </a>
          <a href="#" className="hover:opacity-80">
            <img src="/path-to-tiktok-icon.svg" alt="TikTok" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
