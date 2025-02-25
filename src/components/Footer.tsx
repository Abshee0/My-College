import React from 'react'

import {
    GraduationCap,
    Phone,
    Mail,
    MapPin,
  } from 'lucide-react';

function Footer() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');
    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
      };
    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'programs', label: 'Programs' },
        { id: 'admissions', label: 'Admissions' },
        { id: 'news', label: 'News & Events' },
        { id: 'contact', label: 'Contact' },
      ];
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">My College</span>
              </div>
              <p className="text-gray-400">
                Empowering students with quality education and practical skills since 1999.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Business Administration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Information Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tourism & Hospitality
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    View All Programs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Male' City, Maldives</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">+960 332 0000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h- 5 w-5 text-blue-400" />
                  <span className="text-gray-400">info@mycollege.edu.mv</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} My College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
