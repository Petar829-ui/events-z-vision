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
  setFormData(prev => {
    const list: string[] = prev.additionalServices ?? [];
    return {
      ...prev,
      additionalServices: list.includes(service)
        ? list.filter(s => s !== service)
        : [...list, service],
    };
  });
};

  return (
    <div className="min-h-screen py-16 bg-[#075994]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-white mb-6">
           <span className='text-[#c1ff72]'>Направи</span> запитване
          </h1>
          <p className="text-xl text-white font-inter font-semibold max-w-2xl mx-auto">
            Попълнете формата по-долу и ние ще се свържем с вас в рамките на 24 часа 
            с персонализирана оферта за вашето събитие.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-14">
          {/* Main Form */}
          <div className="lg:col-span-2">
          <div className="bg-[#3b84b6] border border-[#c1ff72] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 space-y-8">
              <h2 className="flex items-center gap-3 text-white text-2xl font-poppins font-semibold leading-tight">
             <FileText className="h-6 w-6 text-white" aria-hidden="true" />
             <span>
             Детайли за <span className="text-[#c1ff72]">събитието</span>
             </span>
             </h2>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                      Име и фамилия *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                      Компания/Организация
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                      Email адрес *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                    Тип събитие *
                  </label>
                  <select
                    id="eventType"
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData(prev => ({...prev, eventType: e.target.value}))}
                    className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
                  >
                    <option value="">Изберете тип събитие</option>
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Дата на събитието
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      value={formData.eventDate}
                      onChange={(e) => setFormData(prev => ({...prev, eventDate: e.target.value}))}
                      className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
                    />
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                      <Users className="inline h-4 w-4 mr-1" />
                      Брой гости
                    </label>
                    <input
                     type="number"
                     id="guestCount"
                     placeholder="например 50"
                     value={formData.guestCount}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setFormData (prev => ({
                        ...prev,
                         guestCount: + e.target.value < 1 ? 1 : +e.target.value
                        }))
                    }
                    min={1}
                    className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                      <DollarSign className="inline h-4 w-4 mr-1" />
                      Ориент. бюджет
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({...prev, budget: e.target.value}))}
                      className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
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
                  <label htmlFor="location" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                    Желано място/регион
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="например София, Банско, морето..."
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                    className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                    Допълнителни услуги
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {additionalServices.map(service => (
                      <label key={service} className="flex items-center space-x-2 cursor-pointer font-inter font-semibold">
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-white">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                    Описание на събитието
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    placeholder="Разкажете ни повече за вашата визия за събитието, специални изисквания, предпочитания..."
                    className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-400
                    focus:outline-none
                    focus:border-[#c1ff72]
                    focus:ring-2 focus:ring-[#c1ff72]
                    transition-colors
                    "
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c1ff72] hover:bg-[#2f492f] text-[#075994] hover:text-[#c1ff72] px-6 py-4 rounded-lg font-poppins font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Изпратете запитването</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
   };
export default Inquiry;