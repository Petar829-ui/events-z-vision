import React from 'react';
import { Handshake, Star, CheckCircle, Mail, Phone, ArrowRight } from 'lucide-react';

const Partnerships = () => {
  const partnerCategories = [
    {
      title: 'Хотели и места за провеждане',
      description: 'Партньорство с водещи хотели и уникални места за създаване на перфектната атмосфера',
      partners: [
        { name: 'Хилтон София', logo: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Премиум хотел' },
        { name: 'Маринела София', logo: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Бизнес хотел' },
        { name: 'Замък Равадиново', logo: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Уникално място' },
        { name: 'Villa Boyana', logo: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Резиденция' }
      ]
    },
    {
      title: 'Кетъринг и ресторанти',
      description: 'Сътрудничество с най-добрите кулинарни специалисти за изискан гастрономически опит',
      partners: [
        { name: 'Chef\'s Table Sofia', logo: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Fine Dining' },
        { name: 'Balkan Catering', logo: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Традиционна кухня' },
        { name: 'Fusion Events', logo: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Модерна кухня' },
        { name: 'Sweet Dreams', logo: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Сладкарница' }
      ]
    },
    {
      title: 'Технически доставчици',
      description: 'Партньорства за осигуряване на най-съвременното техническо оборудване',
      partners: [
        { name: 'ProAudio Systems', logo: 'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Аудио система' },
        { name: 'LED Vision Bulgaria', logo: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Видео технологии' },
        { name: 'Stage Masters', logo: 'https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Сценография' },
        { name: 'Light Art Studio', logo: 'https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Осветление' }
      ]
    },
    {
      title: 'Декорация и цветя',
      description: 'Креативни партньори за създаване на уникална визуална концепция',
      partners: [
        { name: 'Floral Dreams', logo: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Флористика' },
        { name: 'Design Studio Elegance', logo: 'https://images.pexels.com/photos/1024998/pexels-photo-1024998.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Декорация' },
        { name: 'Balloons & More', logo: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Балони и аксесоари' },
        { name: 'Textile Art', logo: 'https://images.pexels.com/photos/574283/pexels-photo-574283.jpeg?auto=compress&cs=tinysrgb&w=200', type: 'Текстилна декорация' }
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Качествени услуги',
      description: 'Работим само с най-добрите доставчици на пазара'
    },
    {
      icon: CheckCircle,
      title: 'Проверени партньори',
      description: 'Всички наши партньори са тествани в реални условия'
    },
    {
      icon: Handshake,
      title: 'Дългосрочни отношения',
      description: 'Изграждаме траен партньорски отношения за взаимна полза'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Партньорства
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Работим с най-добрите доставчици и партньори в индустрията, за да осигурим 
            безупречно качество във всеки аспект от вашето събитие.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Partner Categories */}
        <div className="space-y-16">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="text-center group">
                    <div className="relative mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-md group-hover:shadow-xl transition-shadow duration-300"
                      />
                      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-500">{partner.type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Opportunities */}
        <div className="mt-20 bg-gradient-to-r from-[#075994] to-[#075994] rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Искате да станете{""}
              <span className='text-[#c1ff72]'> наш партньор?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ако предлагате висококачествени услуги и търсите надеждни партньори за събития, 
              ще се радваме да се свържем с вас.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Какво търсим в партньор:</h3>
              <ul className="space-y-4">
                {[
                  'Доказано качество на услугите',
                  'Професионализъм и надеждност',
                  'Гъвкавост при работа с клиенти',
                  'Конкурентни цени',
                  'Готовност за дългосрочно сътрудничество'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#c1ff72] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#7fb3d5] bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Свържете се с нас</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Име на компанията"
                    className="w-full px-4 py-3 rounded-lg bg-[#075994] border border-white border-opacity-30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#c1ff72]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email адрес"
                    className="w-full px-4 py-3 rounded-lg bg-[#075994] border border-white border-opacity-30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#c1ff72]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-lg bg-[#075994] border border-white border-opacity-30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#c1ff72]"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-[#075994] border border-white border-opacity-30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#c1ff72]">
                    <option value="">Тип услуги</option>
                    <option value="venue">Места за провеждане</option>
                    <option value="catering">Кетъринг</option>
                    <option value="tech">Технически услуги</option>
                    <option value="decoration">Декорация</option>
                    <option value="other">Друго</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Опишете вашите услуги"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#075994] border border-white border-opacity-30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#c1ff72] resize-vertical"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#c1ff72] hover:bg-[#2f492f] hover:text-[#c1ff72] text-[#075994] px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Изпратете заявката</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact for Partnerships */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            За партньорства се свържете директно с нас
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="h-5 w-5" />
              <span>partnerships@eventpro.bg</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-5 w-5" />
              <span>+359 888 123 456</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;