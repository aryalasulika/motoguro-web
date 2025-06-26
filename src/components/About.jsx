import React from 'react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Motor Dilayani' },
    { number: '100+', label: 'Pelanggan Setia' },
    { number: '2+', label: 'Tahun Pengalaman' },
    { number: '5km', label: 'Radius Layanan' }
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tentang Motoguro</h2>
              <p className="text-xl text-gray-600">
                Solusi terpercaya untuk perawatan motor Anda
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                <strong className="text-blue-600 font-bold">Motoguro</strong> lahir dari kepedulian kami terhadap kebutuhan para pemilik motor 
                yang sibuk namun tetap ingin menjaga kebersihan dan performa kendaraan mereka. 
                Kami memahami bahwa waktu adalah hal yang berharga, sehingga kami menghadirkan 
                solusi praktis dengan layanan antar jemput.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Dengan tim yang berpengalaman dan peralatan yang lengkap, kami berkomitmen 
                memberikan layanan cuci motor terbaik di Jakarta Selatan. Setiap motor yang 
                kami tangani diperlakukan dengan perhatian khusus, menggunakan produk pembersih 
                berkualitas tinggi yang aman untuk semua jenis motor.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Visi kami adalah menjadi penyedia layanan cuci motor terdepan yang memberikan 
                kemudahan, kualitas, dan kepuasan pelanggan terbaik. Kepercayaan Anda adalah 
                motivasi terbesar bagi kami untuk terus berkembang dan memberikan pelayanan prima.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Nilai-Nilai Kami</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-2">
                  <span className="text-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">🎯</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Profesional</h4>
                    <p className="text-gray-600">Bekerja dengan standar tinggi dan konsisten</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-2">
                  <span className="text-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">❤️</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Kepercayaan</h4>
                    <p className="text-gray-600">Menjaga kepercayaan pelanggan adalah prioritas utama</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-2">
                  <span className="text-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">⚡</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Efisiensi</h4>
                    <p className="text-gray-600">Memberikan layanan cepat tanpa mengorbankan kualitas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-2">
                  <span className="text-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">🌟</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Kualitas</h4>
                    <p className="text-gray-600">Selalu mengutamakan hasil terbaik untuk setiap motor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-semibold mb-6 text-center">Pencapaian Kami</h3>
              <div className="grid grid-cols-2 gap-6 text-blue-900">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-yellow-400 border-opacity-20">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-semibold mb-6 text-center">Cara Kerja Kami</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-yellow-400 border-opacity-20">
                  <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-1 text-blue-900">Hubungi Kami</h4>
                    <p className="text-sm opacity-90 text-blue-900">Telepon atau WhatsApp untuk booking jadwal</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-yellow-400 border-opacity-20">
                  <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-1 text-blue-900">Kami Jemput</h4>
                    <p className="text-sm opacity-90 text-blue-900">Tim kami datang ke lokasi Anda sesuai jadwal</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-yellow-400 border-opacity-20">
                  <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-1 text-blue-900">Cuci Premium</h4>
                    <p className="text-sm opacity-90 text-blue-900">Motor dicuci dengan produk berkualitas tinggi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-yellow-400 border-opacity-20">
                  <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-1 text-blue-900">Antar Kembali</h4>
                    <p className="text-sm opacity-90 text-blue-900">Motor bersih diantar kembali ke lokasi Anda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
