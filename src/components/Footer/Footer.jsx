import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Copyright */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-6">
              <Logo width="120px" />
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} DevUI. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="text-base hover:text-blue-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="text-base hover:text-blue-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="text-base hover:text-blue-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
