import React, { useState } from 'react';
import { Send, FileText } from 'lucide-react';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    eventType: '',
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
    'Друго',
  ];

  return (
    <div className="min-h-screen py-16 bg-[#075994]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-white mb-6">
            <span className="text-[#c1ff72]">Направи</span> запитване
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
                    onChange={(e) => setFormData(prev => ({ ...prev, eventType: e.target.value }))}
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

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-white mb-2 font-inter font-semibold">
                    Запитването
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

