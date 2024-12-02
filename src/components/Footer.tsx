import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation

const footerSections = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '/Hero' },
      { name: 'About', href: '/AboutUs' },
      { name: 'Menu', href: '/menu' },
      { name: 'Reservations', href: '/BookingForm' },
      { name: 'Order Online', href: '/UnderConstruction' },
      { name: 'Login', href: '/LoginForm' }
    ]
  },
  {
    title: 'Contact',
    links: [
      { type: 'text', text: 'Address: Chicago, IL' },
      { type: 'tel', text: 'Phone: (123) 456-7890', href: 'tel:+11234567890' },
      { type: 'mailto', text: 'Email: info@littlelemon.com', href: 'mailto:info@littlelemon.com' }
    ]
  },
  {
    title: 'Social Media',
    links: [
      { name: 'Facebook', href: 'https://www.facebook.com' },
      { name: 'Instagram', href: 'https://www.instagram.com' },
      { name: 'Twitter', href: 'https://www.twitter.com' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-[#495E57] text-white py-6"> {/* Adjusted padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex flex-col md:w-[30%] order-1"> {/* Adjusted width to move more left */}
            <img src="/logo.png" alt="Little Lemon Logo" className="h-12 w-auto" />
            <p className="mt-4 text-gray-300">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </div>
          <div className="md:w-1/2 order-2">
            {footerSections[0].title === 'Navigation' && (
              <div key={footerSections[0].title}>
                <h3 className="text-lg font-semibold mb-4">{footerSections[0].title}</h3>
                <ul className="grid grid-cols-3 gap-2 space-y-2">
                  {footerSections[0].links.map(link => (
                    <li key={link.name} className="col-span-1">
                      <Link to={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col md:w-1/4 order-3"> {/* Adjusted width to balance layout */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                {footerSections[1].links.map(link => (
                  <li key={link.text}>
                    {link.type === 'text' ? (
                      <span className="text-gray-300">{link.text}</span>
                    ) : (
                      <a href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                        {link.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center md:w-1/4 md:justify-end order-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <ul className="space-y-2">
                {footerSections[2].links.map(link => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Little Lemon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
