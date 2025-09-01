import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Star, Trophy, ArrowRight } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Тиймбилдинги',
      icon: Users,
      color: 'bg-brand-blue',
      description: 'Укрепете екипа си с вълнуващи и мотивиращи активности, които подобряват комуникацията и сплотеността.',
      subcategories: [
        'Outdoor приключения',
        'Кулинарни работилници',
        'Спортни състезания',
        'Творчески предизвикателства',
        'Escape room игри',
        'Корпоративни партита'
      ]
    },
    {
      title: 'Корпоративни събития',
      icon: Calendar,
      color: 'bg-brand-green',
      description: 'Професионални конференции, семинари и бизнес срещи, които оставят трайно впечатление на участниците.',
      subcategories: [
        'Бизнес конференции',
        'Продуктови лансирания',
        'Семинари и уъркшопи',
        'Корпоративни празненства',
        'Годишни събрания',
        'Networking събития'
      ]
    },
    {
      title: 'Лични esdeveniments',
      icon: Star,
      color: 'bg-green-600',
      description: 'Сватби, рождени дни и специални празненства, организирани с внимание към всеки детайл.',
      subcategories: [
        'Сватби',
        'Рождени дни',
        'Юбилеи',
        'Детски партита',
        'Кръщенета',
        'Абитуриентски балове'
      ]
    },
    {
      title: 'Други',
      icon: Trophy,
      color: 'bg-blue-600',
      description: 'Индивидуални решения за уникални събития и специфични изисквания на нашите клиенти.',
      subcategories: [
        'Благотворителни събития',
        'Културни мероприятия',
        'Фестивали',
        'Изложения',
        'Промоционални събития',
        'VIP събития'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Предлагани услуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Специализираме се в организацията на разнообразни събития за всички случаи. 
            Всеки проект е уникален и се адаптира според вашите специфични нужди и бюджет.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`${category.color} px-8 py-6`}>
                  <div className="flex items-center space-x-4">
                    <IconComponent className="h-12 w-12 text-white" />
                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div
                        key={subIndex}
                        className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                          <span className="text-gray-800 font-medium">{subcategory}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <Link
                      to="/inquiry"
                      className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Запитване за {category.title.toLowerCase()}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-20 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Не намирате това, което търсите?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Предлагаме индивидуални решения за всякакъв тип събития. 
            Свържете се с нас за персонализирана оферта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inquiry"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Изпратете запитване
            </Link>
            <Link
              to="/contacts"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Свържете се с нас
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;