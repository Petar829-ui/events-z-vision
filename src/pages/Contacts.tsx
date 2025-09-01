import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Контакти
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свържете се с нас по удобния за вас начин. Нашият екип е готов да отговори на всички ваши въпроси.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Информация за контакт</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефони</h3>
                    <p className="text-gray-600">+359 888 123 456</p>
                    <p className="text-gray-600">+359 877 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-lime-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email адреси</h3>
                    <p className="text-gray-600">info@eventszv.bg</p>
                    <p className="text-gray-600">office@eventszv.bg</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      бул. Витоша 100<br />
                      1000 София, България
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Работно време</h3>
                    <p className="text-gray-600">
                      Понеделник - Петък: 9:00 - 18:00<br />
                      Събота: 10:00 - 15:00<br />
                      Неделя: Почивен ден
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Следете ни в социалните мрежи</h2>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com/eventszv"
                  className="flex items-center space-x-3 bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-6 w-6 text-blue-600" />
                  <span className="font-medium text-blue-600">Facebook</span>
                </a>
                <a
                  href="https://instagram.com/eventszv"
                  className="flex items-center space-x-3 bg-pink-50 hover:bg-pink-100 p-4 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6 text-pink-600" />
                  <span className="font-medium text-pink-600">Instagram</span>
                </a>
                <a
                  href="https://linkedin.com/company/eventszv"
                  className="flex items-center space-x-3 bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-blue-700" />
                  <span className="font-medium text-blue-700">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Изпратете ни съобщение</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Име *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Фамилия *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email адрес *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Тема *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Съобщение *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors resize-vertical"
                  placeholder="Напишете вашето съобщение тук..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Изпратете съобщението</span>
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Нашето местоположение</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Google Maps</p>
                <p className="text-sm">бул. Витоша 100, София 1000</p>
                <p className="text-xs mt-2 text-gray-500">
                  *Тук ще бъде вградена интерактивна карта с нашето местоположение
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;