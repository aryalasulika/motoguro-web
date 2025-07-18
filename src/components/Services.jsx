import React from 'react';
import whatsappLogo from '../assets/whatsapp.png';


const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🧽',
      title: 'Premium Wash (Cuci & Wax)',
      description: 'Layanan cuci motor dengan wax untuk perlindungan ekstra.',
      price: 'Ukuran M (50cc - 149cc): Rp 40.000 | Ukuran L (150cc - 249cc): Rp 45.000 | Ukuran XL (250cc UP): Rp 50.000',
      features: ['Cuci Body & Mesin', 'Wax Perlindungan', 'Lap Kering', 'Antar Jemput Gratis*']
    },
    {
      id: 2,
      icon: '✨',
      title: 'Extra Wash (Cuci & Polish)',
      description: 'Layanan cuci motor dengan polish untuk kilau maksimal.',
      price: 'Ukuran M (50cc - 149cc): Rp 150.000 | Ukuran L (150cc - 249cc): Rp 175.000 | Ukuran XL (250cc UP): Rp 200.000',
      features: ['Cuci Body & Mesin', 'Polish Kilau Maksimal', 'Lap Kering', 'Antar Jemput Gratis*']
    }
  ];

  const whyChooseUs = [
    {
      icon: '🚗',
      title: 'Antar Jemput Gratis',
      description: 'Kami jemput motor Anda di rumah/kantor dalam radius 5km'
    },
    {
      icon: '⏰',
      title: 'Hemat Waktu',
      description: 'Tidak perlu antri, motor dikerjakan dengan cepat dan profesional'
    },
    {
      icon: '💧',
      title: 'Produk Berkualitas',
      description: 'Menggunakan produk pembersih terbaik yang aman untuk motor Anda'
    },
    // {
    //   icon: '👨‍🔧',
    //   title: 'Teknisi Berpengalaman',
    //   description: 'Tim yang berpengalaman dan terlatih menangani berbagai jenis motor'
    // },
    {
      icon: '💰',
      title: 'Harga Terjangkau',
      description: 'Harga kompetitif dengan kualitas layanan yang memuaskan'
    },
    {
      icon: '📱',
      title: 'Mudah Dipesan',
      description: 'Pesan via telepon atau WhatsApp, langsung dijadwalkan'
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Paket Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan motor Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {services.map(service => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden border border-gray-200">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-yellow-500"></div>
              <div className="text-5xl mb-6 text-blue-600">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="text-left mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Harga:</h4>
                <ul className="space-y-2">
                  {service.price.split('|').map((priceItem, index) => (
                    <li key={index} className="text-gray-600">{priceItem.trim()}</li>
                  ))}
                </ul>
              </div>
              <ul className="text-left mb-8 space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="tel:+6281234567890" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block text-center">
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mengapa Pilih Motoguro?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keunggulan layanan yang membuat kami berbeda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                <div className="text-4xl mb-4 text-blue-600">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="kontak" className="bg-gradient-to-r from-blue-900 to-blue-800 p-12 rounded-2xl text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">Siap Melayani Anda!</h3>
              <p className="text-lg mb-8 opacity-90">Hubungi kami sekarang untuk jadwalkan pencucian motor Anda</p>
              <div className="space-y-6">
                {/* <div className="flex items-center gap-4">
                  <span className="text-2xl bg-yellow-500 bg-opacity-20 p-3 rounded-lg w-14 h-14 flex items-center justify-center">📞</span>
                  <div>
                    <div className="font-semibold text-yellow-400">Telepon</div>
                    <div className="opacity-90">+62 812-3456-7890</div>
                  </div>
                </div> */}
                <div className="flex items-center gap-4">
                  <span className="text-2xl bg-yellow-500 bg-opacity-20 p-3 rounded-lg w-14 h-14 flex items-center justify-center">
                    <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8 object-contain" />
                  </span>
                  <div>
                    <div className="font-semibold text-yellow-400">WhatsApp</div>
                    <div className="opacity-90">+62 812-3456-7890</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl bg-yellow-500 bg-opacity-20 p-3 rounded-lg w-14 h-14 flex items-center justify-center">📍</span>
                  <div>
                    <div className="font-semibold text-yellow-400">Area Layanan</div>
                    <div className="opacity-90">Bandung & Sekitarnya</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl bg-yellow-500 bg-opacity-20 p-3 rounded-lg w-14 h-14 flex items-center justify-center">⏰</span>
                  <div>
                    <div className="font-semibold text-yellow-400">Jam Operasional</div>
                    <div className="opacity-90">09:00 - 17:00 (Senin - Jumat)</div>
                    <div className="opacity-90">08:00 - 17:00 (Sabtu - Minggu)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">Dapatkan Motor Bersih Tanpa Repot!</h4>
              <p className="text-lg mb-8 opacity-80 italic">* Gratis antar jemput untuk area Bandung dan sekitarnya</p>
              <div className="space-y-4">
                <a href="https://wa.me/6285129356047?text=Halo%20admin,%20saya%20tertarik%20dengan%20layanan%20mobile%20service%20cuci%20motor." className="btn-whatsapp w-full max-w-xs mx-auto block" target="_blank" rel="noopener noreferrer">
                  💬 Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;