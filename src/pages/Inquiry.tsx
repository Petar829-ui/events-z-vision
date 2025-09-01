import React, { useState } from 'react';
import { Send, MessageCircle, FileText, Calendar, Users, DollarSign } from 'lucide-react';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    location: '',
    additionalServices: []
  });

  const eventTypes = [
    'Тиймбилдинг',
    'Корпоративно събитие',
    'Сватба',
    'Рожден ден',
    'Юбилей',
    'Конференция',
    'Семинар',
    'Продуктово лансиране',
    'Друго'
  ];

  const additionalServices = [
    'Кетъринг',
    'Декорация',
    'Фотография',
    'Видеозаснемане',
    'DJ/Музика',
    'Аниматор',
    'Транспорт',
    'Хотел',
    'Подаръци'
  ];

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Изпратете запитване
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Попълнете формата по-долу и ние ще се свържем с вас в рамките на 24 часа 
            с персонализирана оферта за вашето събитие.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                Детайли за събитието
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Име и фамилия *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Компания/Организация
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email адрес *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Тип събитие *
                  </label>
                  <select
                    id="eventType"
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData(prev => ({...prev, eventType: e.target.value}))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Изберете тип събитие</option>
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Дата на събитието
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      value={formData.eventDate}
                      onChange={(e) => setFormData(prev => ({...prev, eventDate: e.target.value}))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="inline h-4 w-4 mr-1" />
                      Брой гости
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      placeholder="например 50"
                      value={formData.guestCount}
                      onChange={(e) => setFormData(prev => ({...prev, guestCount: e.target.value}))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="inline h-4 w-4 mr-1" />
                      Ориентировъчен бюджет
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({...prev, budget: e.target.value}))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Изберете бюджет</option>
                      <option value="под 2000">Под 2000 лв</option>
                      <option value="2000-5000">2000 - 5000 лв</option>
                      <option value="5000-10000">5000 - 10000 лв</option>
                      <option value="10000-20000">10000 - 20000 лв</option>
                      <option value="над 20000">Над 20000 лв</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Желано място/регион
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="например София, Банско, морето..."
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Допълнителни услуги
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {additionalServices.map(service => (
                      <label key={service} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Описание на събитието
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    placeholder="Разкажете ни повече за вашата визия за събитието, специални изисквания, предпочитания..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Изпратете запитването</span>
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alternative Contact Methods */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Алтернативни начини за контакт</h3>
              
              {/* Messenger Chat */}
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-800">Messenger чат</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Пишете ни директно в Messenger за бърз отговор
                </p>
                <a
                  href="https://m.me/eventpro"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Започнете чат
                </a>
              </div>

              {/* Google Form */}
              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="font-semibold text-emerald-800">Google форма</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Попълнете нашата подробна Google форма
                </p>
                <a
                  href="https://forms.google.com/eventpro-inquiry"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Отворете формата
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Директен контакт</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Телефон:</span>
                  <p className="text-blue-600">+359 888 123 456</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <p className="text-blue-600">info@eventpro.bg</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Време за отговор:</span>
                  <p className="text-gray-600">В рамките на 24 часа</p>
                </div>
              </div>
            </div>

            {/* Process Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Какво следва?</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">1</span>
                  <span className="text-gray-600">Получаваме вашето запитване</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">2</span>
                  <span className="text-gray-600">Свързваме се с вас за подробности</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">3</span>
                  <span className="text-gray-600">Подготвяме персонализирана оферта</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">4</span>
                  <span className="text-gray-600">Започваме работа по проекта</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;