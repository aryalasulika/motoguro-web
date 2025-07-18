import React from 'react';

const Hero = () => {
return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 flex items-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-white bg-opacity-20 z-10"></div>
        <div className="max-w-6xl mx-auto px-8 relative z-20">
            <div className="grid md:grid-cols-2 gap-16 items-center text-blue-700">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-900">
                        <span className="text-yellow-400 drop-shadow-lg">MOTOGURO</span><br />
                        Layanan Cuci Motor Premium dengan Antar Jemput
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed opacity-90 text-blue-800">
                        Motor kotor? Tidak ada waktu? Tenang! Motoguro hadir dengan layanan cuci motor 
                        berkualitas tinggi yang akan menjemput motor Anda di rumah atau kantor, 
                        mencucinya hingga bersih mengkilap, dan mengantarnya kembali.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur-lg px-6 py-3 rounded-full border border-yellow-400 border-opacity-30 text-blue-800">
                            <span className="text-2xl">🚗</span>
                            <span className="font-medium">Antar Jemput Gratis</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur-lg px-6 py-3 rounded-full border border-yellow-400 border-opacity-30 text-blue-800">
                            <span className="text-2xl">⚡</span>
                            <span className="font-medium">Cuci Cepat & Bersih</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur-lg px-6 py-3 rounded-full border border-yellow-400 border-opacity-30 text-blue-800">
                            <span className="text-2xl">💧</span>
                            <span className="font-medium">Produk Berkualitas</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="https://wa.me/6285129356047?text=Halo%20admin,%20saya%20tertarik%20dengan%20layanan%20mobile%20service%20cuci%20motor." className="btn-yellow inline-flex items-center gap-2 text-blue-900" target='_blank' rel="noopener noreferrer">
                            📞 Pesan Sekarang
                        </a>
                        <a href="#layanan" className="btn-secondary inline-flex items-center gap-2 text-blue-800">
                            Lihat Layanan
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center relative">
                    <div className="relative">
                        {/* Enhanced Animated Motorcycle SVG */}
                        <div className="animate-float drop-shadow-2xl">
                            <svg width="300" height="180" viewBox="0 0 300 180" className="text-yellow-400">
                                {/* Speed lines background */}
                                <g className="opacity-30">
                                    <line x1="0" y1="70" x2="40" y2="70" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" className="animate-pulse"/>
                                    <line x1="0" y1="80" x2="30" y2="80" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                                    <line x1="0" y1="90" x2="35" y2="90" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                                    <line x1="0" y1="100" x2="25" y2="100" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                                    <line x1="0" y1="110" x2="40" y2="110" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                                </g>
                                
                                {/* Motorcycle Body */}
                                <g className="motorcycle-body transform hover:scale-105 transition-transform duration-300">
                                    {/* Main Frame - Enhanced */}
                                    <path d="M60 90 L120 75 L180 80 L210 90 L180 95 L120 100 Z" 
                                          fill="currentColor" stroke="#1e40af" strokeWidth="3"/>
                                    
                                    {/* Tank */}
                                    <ellipse cx="140" cy="85" rx="35" ry="15" fill="#1e40af" stroke="#1d4ed8" strokeWidth="2"/>
                                    
                                    {/* Seat */}
                                    <ellipse cx="120" cy="75" rx="20" ry="8" fill="#374151" stroke="#1f2937" strokeWidth="1"/>
                                    
                                    {/* Handlebars */}
                                    <path d="M180 80 L195 75 M185 77 L200 72" 
                                          stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
                                    <circle cx="195" cy="75" r="3" fill="#6b7280"/>
                                    <circle cx="200" cy="72" r="3" fill="#6b7280"/>
                                    
                                    {/* Engine Block */}
                                    <rect x="110" y="85" width="35" height="20" rx="5" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
                                    <rect x="115" y="90" width="25" height="8" rx="2" fill="#6b7280"/>
                                    
                                    {/* Exhaust Pipe */}
                                    <path d="M145 100 Q165 105 190 100 Q200 98 205 95" 
                                          stroke="#6b7280" strokeWidth="5" fill="none" strokeLinecap="round"/>
                                    <ellipse cx="205" cy="95" rx="3" ry="6" fill="#ef4444" className="animate-pulse"/>
                                    
                                    {/* Fork */}
                                    <line x1="190" y1="80" x2="195" y2="110" stroke="#374151" strokeWidth="6" strokeLinecap="round"/>
                                    <line x1="185" y1="82" x2="190" y2="112" stroke="#374151" strokeWidth="6" strokeLinecap="round"/>
                                </g>
                                
                                {/* Front Wheel - Enhanced */}
                                <g className="front-wheel">
                                    <circle cx="195" cy="115" r="25" fill="#1f2937" stroke="#fbbf24" strokeWidth="3"/>
                                    <circle cx="195" cy="115" r="18" fill="none" stroke="#fbbf24" strokeWidth="2"/>
                                    <circle cx="195" cy="115" r="10" fill="#fbbf24"/>
                                    {/* Rim design */}
                                    <circle cx="195" cy="115" r="15" fill="none" stroke="#374151" strokeWidth="1"/>
                                    {/* Spokes with rotation */}
                                    <g className="animate-spin" style={{transformOrigin: '195px 115px', animationDuration: '1.5s'}}>
                                        <line x1="195" y1="90" x2="195" y2="140" stroke="#fbbf24" strokeWidth="2"/>
                                        <line x1="170" y1="115" x2="220" y2="115" stroke="#fbbf24" strokeWidth="2"/>
                                        <line x1="177" y1="98" x2="213" y2="132" stroke="#fbbf24" strokeWidth="2"/>
                                        <line x1="177" y1="132" x2="213" y2="98" stroke="#fbbf24" strokeWidth="2"/>
                                        <line x1="183" y1="93" x2="207" y2="137" stroke="#fbbf24" strokeWidth="1"/>
                                        <line x1="183" y1="137" x2="207" y2="93" stroke="#fbbf24" strokeWidth="1"/>
                                    </g>
                                    {/* Brake disc */}
                                    <circle cx="195" cy="115" r="12" fill="none" stroke="#9ca3af" strokeWidth="3"/>
                                </g>
                                
                                {/* Rear Wheel - Enhanced */}
                                <g className="rear-wheel">
                                    <circle cx="80" cy="115" r="25" fill="#1f2937" stroke="#fbbf24" strokeWidth="3"/>
                                    <circle cx="80" cy="115" r="18" fill="none" stroke="#fbbf24" strokeWidth="2"/>
                                    <circle cx="80" cy="115" r="10" fill="#fbbf24"/>
                                    {/* Rim design */}
                                    <circle cx="80" cy="115" r="15" fill="none" stroke="#374151" strokeWidth="1"/>
                                    {/* Spokes with rotation */}
                                    <g className="animate-spin" style={{transformOrigin: '80px 115px', animationDuration: '1.5s'}}>
                                        <line x1="80" y1="90" x2="80" y2="140" stroke="#fbbf24" strokeWidth="2"/>
                                        <line x1="55" y1="115" x2="105" y2="115" stroke="#fbbf24" strokeWidth="2"/>
                                        <line x1="62" y1="98" x2="98" y2="132" stroke="#fbbf24" strokeWidth="2"/>
                                        <line x1="62" y1="132" x2="98" y2="98" stroke="#fbbf24" strokeWidth="2"/>
                                        <line x1="68" y1="93" x2="92" y2="137" stroke="#fbbf24" strokeWidth="1"/>
                                        <line x1="68" y1="137" x2="92" y2="93" stroke="#fbbf24" strokeWidth="1"/>
                                    </g>
                                    {/* Brake disc */}
                                    <circle cx="80" cy="115" r="12" fill="none" stroke="#9ca3af" strokeWidth="3"/>
                                </g>
                                
                                {/* Headlight with glow effect */}
                                <circle cx="200" cy="85" r="6" fill="#fef3c7" className="animate-pulse"/>
                                <circle cx="200" cy="85" r="3" fill="#ffffff"/>
                                <circle cx="200" cy="85" r="8" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.5" className="animate-ping"/>
                                
                                {/* Taillight */}
                                <circle cx="55" cy="88" r="3" fill="#ef4444" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                                
                                {/* Mirror */}
                                <circle cx="192" cy="70" r="2" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1"/>
                                
                                {/* License plate */}
                                <rect x="50" y="125" width="15" height="8" rx="1" fill="#ffffff" stroke="#374151" strokeWidth="1"/>
                                <text x="57.5" y="131" fontSize="3" fill="#374151" textAnchor="middle">MG</text>
                                
                                {/* Chain */}
                                <path d="M110 105 Q130 108 150 105" stroke="#6b7280" strokeWidth="2" fill="none" strokeDasharray="2,2"/>
                                
                                {/* Foot pegs */}
                                <rect x="125" y="105" width="8" height="3" rx="1" fill="#374151"/>
                                <rect x="85" y="105" width="8" height="3" rx="1" fill="#374151"/>
                            </svg>
                        </div>
                        
                        {/* Enhanced Speed Lines with dynamic animation */}
                        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2">
                            <div className="flex flex-col space-y-2">
                                <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 animate-speed-lines" style={{width: '40px', animationDelay: '0s'}}></div>
                                <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50 animate-speed-lines" style={{width: '35px', animationDelay: '0.2s'}}></div>
                                <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70 animate-speed-lines" style={{width: '30px', animationDelay: '0.4s'}}></div>
                                <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40 animate-speed-lines" style={{width: '38px', animationDelay: '0.6s'}}></div>
                                <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 animate-speed-lines" style={{width: '42px', animationDelay: '0.8s'}}></div>
                                <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 animate-speed-lines" style={{width: '25px', animationDelay: '1s'}}></div>
                                <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-65 animate-speed-lines" style={{width: '33px', animationDelay: '1.2s'}}></div>
                            </div>
                        </div>
                        
                        {/* Additional speed trails */}
                        <div className="absolute -left-32 top-1/3 transform -translate-y-1/2">
                            <div className="flex flex-col space-y-3">
                                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 animate-speed-lines" style={{width: '20px', animationDelay: '0.3s'}}></div>
                                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-25 animate-speed-lines" style={{width: '15px', animationDelay: '0.7s'}}></div>
                                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 animate-speed-lines" style={{width: '18px', animationDelay: '1.1s'}}></div>
                            </div>
                        </div>
                        
                        {/* Enhanced Cleaning Elements with advanced animations */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Water drops */}
                            <div className="absolute top-1/4 left-1/4 text-4xl animate-cleaning opacity-70 transform hover:scale-110 transition-transform">💧</div>
                            <div className="absolute top-2/5 left-1/3 text-3xl animate-cleaning opacity-60" style={{animationDelay: '0.8s'}}>💧</div>
                            
                            {/* Sparkles */}
                            <div className="absolute top-3/5 right-1/4 text-4xl animate-sparkle opacity-70 transform hover:scale-110 transition-transform" style={{animationDelay: '1.5s'}}>✨</div>
                            <div className="absolute top-1/3 right-1/3 text-3xl animate-sparkle opacity-60" style={{animationDelay: '2.8s'}}>✨</div>
                            <div className="absolute bottom-2/5 left-1/4 text-3xl animate-sparkle opacity-65" style={{animationDelay: '4.2s'}}>✨</div>
                            
                            {/* Cleaning tools */}
                            <div className="absolute bottom-1/3 left-1/5 text-4xl animate-bubble opacity-70 transform hover:scale-110 transition-transform" style={{animationDelay: '3s'}}>🧽</div>
                            <div className="absolute top-3/4 right-2/5 text-3xl animate-bubble opacity-60" style={{animationDelay: '1.2s'}}>🧽</div>
                            
                            {/* Soap bubbles */}
                            <div className="absolute top-1/2 right-1/3 text-3xl animate-cleaning opacity-60 transform hover:scale-110 transition-transform" style={{animationDelay: '2.5s'}}>🫧</div>
                            <div className="absolute top-1/5 left-2/5 text-2xl animate-cleaning opacity-50" style={{animationDelay: '3.7s'}}>🫧</div>
                            <div className="absolute bottom-1/5 right-1/5 text-3xl animate-cleaning opacity-65" style={{animationDelay: '1.8s'}}>🫧</div>
                            
                            {/* Speed/wind effects */}
                            <div className="absolute bottom-1/4 right-1/5 text-3xl animate-bubble opacity-60 transform hover:scale-110 transition-transform" style={{animationDelay: '4s'}}>💨</div>
                            <div className="absolute top-2/3 left-2/5 text-2xl animate-bubble opacity-50" style={{animationDelay: '5.1s'}}>💨</div>
                            
                            {/* Shampoo/soap */}
                            <div className="absolute bottom-2/5 right-2/5 text-2xl animate-cleaning opacity-55" style={{animationDelay: '3.3s'}}>🧴</div>
                            
                            {/* Additional cleaning effects */}
                            <div className="absolute top-1/6 right-1/6 text-xl animate-sparkle opacity-40" style={{animationDelay: '4.5s'}}>⭐</div>
                            <div className="absolute bottom-1/6 left-1/3 text-xl animate-sparkle opacity-45" style={{animationDelay: '2.2s'}}>⭐</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default Hero;