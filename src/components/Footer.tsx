import React from 'react';
import { Calendar, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative z-[20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-8 w-8 text-[#c1ff72]" />
              <span className="text-2xl font-inter font-bold">Events Z Vision</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ние сме новото поколение създатели на събития – с душа, посока и визия. Създаваме преживявания, които доказват, че животът е красив, когато се споделя с готини хора, в правилната среда и по вълнуващ, автентичен и неподправен начин. В основата ни стоят новаторството, страстта и професионализмът.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#c1ff72] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c1ff72] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c1ff72] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакти</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#c1ff72]" />
                <span className="text-gray-300">+359 888 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#c1ff72]" />
                <span className="text-gray-300">info@eventszv.bg</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#c1ff72]" />
                <span className="text-gray-300">София, бул. Витоша 100</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#c1ff72] transition-colors">Тиймбилдинги</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#c1ff72] transition-colors">Корпоративни събития</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#c1ff72] transition-colors">Лични събития</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#c1ff72] transition-colors">Други</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2025 Events Z Vision. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;