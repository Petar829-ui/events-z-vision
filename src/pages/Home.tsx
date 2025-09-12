import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Calendar, Trophy, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Тиймбилдинги',
      description: 'Укрепете екипа си с вълнуващи и мотивиращи активности',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Корпоративни събития',
      description: 'Професионални конференции, семинари и бизнес срещи',
      icon: Calendar,
      color: 'bg-emerald-500',
    },
    {
      title: 'Лични събития',
      description: 'Сватби, рождени дни и специални празненства',
      icon: Star,
      color: 'bg-purple-500',
    },
    {
      title: 'Други',
      description: 'Индивидуални решения за уникални събития',
      icon: Trophy,
      color: 'bg-amber-500',
    },
  ];

  return (

    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white py-20 bg-cover bg-center min-h-[80vh]"
      style={{backgroundImage:"url('website design EZV.png')"}}
      >
        <div
       className="absolute top-[5rem] right-[5rem] w-[70rem] h-[70rem] bg-cover bg-center"
       style={{ backgroundImage: "url('')" }}
       ></div>
       <div className="shape1"></div>
       <div className="shape2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-left max-w-3x1">
            <h1 className="font-poppins font-semibold [font-size:69px] tracking-normal leading-[1.1]">
              <span className='text-brand-lime'>Създаваме </span><br /> незабравими <br /><span className='text-brand-lime'>преживявания</span>
            </h1>
            <p className="font-inter font-bold text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Агенция за цялостно професионално организиране на <br /> събития,
              готова да превърне Вашите идеи в реалност с <br /> креативност, 
              професионализъм и внимание към <br /> детайлите.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link
                to="/inquiry"
                className="bg-[#c1ff72] hover:bg-[#2f492f] text-[#075994] hover:text-[#c1ff72] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Изпрати запитване
              </Link>
              <Link
                to="/portfolio"
                className="bg-[#075994] border-2 border-white hover:bg-white hover:text-brand-blue text-white px-11 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Вижте портфолио
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Нашите услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специализираме се в организацията на разнообразни събития за всички случаи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-brand-blue hover:text-blue-600 font-semibold text-lg transition-colors"
            >
              Вижте всички услуги <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Мисия и визия
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-blue mb-3">Нашата мисия</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Да превръщаме всяко ваше събитие в споделена история, като съчетаваме прецизност с емоция, свежест с професионализъм, превръщайки всеки момент в значим и запомнящ се.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-green mb-3">Нашата визия</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Да се утвърдим като иновативна агенция за събития, известна с креативния подход, 
                    високото качество и персонализираното отношение към всеки клиент.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Защо да изберете нас?</h3>
              <ul className="space-y-4">
                {[
                  'Свеж и иновативен подход',
                  'Персонализирани решения за всеки клиент',
                  'Индивидуален подход към всеки клиент',
                  '24/7 поддръжка по време на събитието',
                  'Партньорства с водещи доставчици',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Имате въпроси?
            </h2>
            <p className="text-xl text-blue-100">
              Свържете се с нас за безплатна консултация
            </p>
          </div>

          <form className="bg-white p-8 rounded-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Име и фамилия *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                />
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
            </div>

            <div className="mt-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-2">
                Тип събитие
              </label>
              <select
                id="event-type"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
              >
                <option value="">Изберете тип събитие</option>
                <option value="teambuilding">Тиймбилдинг</option>
                <option value="corporate">Корпоративно събитие</option>
                <option value="personal">Лично събитие</option>
                <option value="other">Друго</option>
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Съобщение *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors resize-vertical"
                placeholder="Разкажете ни повече за вашето събитие..."
              ></textarea>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-brand-lime hover:bg-green-400 text-brand-green px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Изпратете запитването
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;