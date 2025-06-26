import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo-motoguro.jpeg" alt="Motoguro" className="w-12 h-12 rounded-full object-cover" />
              <h3 className="text-xl font-bold text-yellow-400">MOTOGURO</h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              Solusi cuci motor premium dengan layanan antar jemput terpercaya di Bandung dan sekitarnya.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Cuci Motor Standar</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Cuci Motor Premium</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Cuci + Servis Ringan</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Antar Jemput Gratis</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Area Layanan</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">🏙️ Kota Bandung</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">🌆 Cimahi</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">🏘️ Kabupaten Bandung</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">🌄 Bandung Barat</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">📍 Radius 10km dari Bandung</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Dan sekitarnya</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-lg">📞</span>
                <span className="hover:text-yellow-400 transition-colors cursor-pointer">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-lg">📱</span>
                <span className="hover:text-yellow-400 transition-colors cursor-pointer">WhatsApp: +62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-lg">⏰</span>
                <span>08:00 - 17:00 (Sen-Sab)</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-30 rounded-full flex items-center justify-center text-lg hover:bg-yellow-500 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">📘</a>
              <a href="#" className="w-10 h-10 bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-30 rounded-full flex items-center justify-center text-lg hover:bg-yellow-500 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">📷</a>
              <a href="https://wa.me/6281234567890" className="w-10 h-10 bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-30 rounded-full flex items-center justify-center text-lg hover:bg-yellow-500 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">💬</a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 Motoguro. Semua hak cipta dilindungi.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Beranda</a>
              <a href="#layanan" className="text-gray-400 hover:text-yellow-400 transition-colors">Layanan</a>
              <a href="#tentang" className="text-gray-400 hover:text-yellow-400 transition-colors">Tentang</a>
              <a href="#kontak" className="text-gray-400 hover:text-yellow-400 transition-colors">Kontak</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
