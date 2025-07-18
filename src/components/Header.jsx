import React, { useState } from 'react';
import logo from '../assets/logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Motoguro" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-xl font-bold text-yellow-400">MOTOGURO</span>
        </div>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 right-0 bg-blue-900 md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-0 md:gap-8 p-4 md:p-0">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-3 md:py-2 px-4 md:px-0 hover:text-yellow-400 transition-colors duration-300 border-b border-blue-700 md:border-none">Beranda</a></li>
            <li><a href="#layanan" onClick={() => setIsMenuOpen(false)} className="block py-3 md:py-2 px-4 md:px-0 hover:text-yellow-400 transition-colors duration-300 border-b border-blue-700 md:border-none">Layanan</a></li>
            <li><a href="#tentang" onClick={() => setIsMenuOpen(false)} className="block py-3 md:py-2 px-4 md:px-0 hover:text-yellow-400 transition-colors duration-300 border-b border-blue-700 md:border-none">Tentang Kami</a></li>
            <li><a href="#kontak" onClick={() => setIsMenuOpen(false)} className="block py-3 md:py-2 px-4 md:px-0 hover:text-yellow-400 transition-colors duration-300">Kontak</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/6285129356047?text=Halo%20admin,%20saya%20tertarik%20dengan%20layanan%20mobile%20service%20cuci%20motor." className="hidden md:flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
            💬 Hubungi Kami
          </a>
          <button 
            className="md:hidden flex flex-col space-y-1 p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;