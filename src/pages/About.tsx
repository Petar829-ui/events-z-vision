import React from 'react';
import { CheckCircle, Award, Users, Calendar, Star, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: 'Нова', label: 'Агенция на пазара' },
    { number: '100%', label: 'Мотивация' },
    { number: 'Безброй', label: 'Идеи' },
    { number: '24/7', label: 'Поддръжка' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Прецизност',
      description: 'Внимание към всеки детайл и професионално изпълнение на всеки проект.'
    },
    {
      icon: Heart,
      title: 'Страст',
      description: 'Обичаме това, което правим и вкладваме душа в всяко събитие.'
    },
    {
      icon: Users,
      title: 'Екипност',
      description: 'Работим като един екип за постигане на най-добрите резултати.'
    },
    {
      icon: Award,
      title: 'Качество',
      description: 'Стремим се към най-високи стандарти в организацията на събития.'
    }
  ];

  const team = [
    {
      name: 'Мария Петрова',
      position: 'Основател и изпълнителен директор',
      description: 'Визионер с амбиция да промени индустрията за събития. Магистър по мениджмънт.',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Георги Иванов',
      position: 'Креативен директор',
      description: 'Креативен ум със страст към иновативни концепции и дизайн.',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Елена Стоянова',
      position: 'Мениджър клиентски отношения',
      description: 'Експерт в комуникацията и изграждането на дългосрочни клиентски отношения.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Димитър Николов',
      position: 'Техническо координиране',
      description: 'Технически специалист с внимание към детайлите и перфектното изпълнение.',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            За нас
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Events Z Vision е нова и амбициозна агенция за събития с мисия да внесе свежест 
            и иновации в индустрията чрез създаването на незабравими преживявания.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-brand-blue mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Нашата история</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Events Z Vision е основана през 2025 година с амбицията да внесе нова енергия и 
                  креативност в индустрията за събития. Въпреки че сме нови на пазара, екипът ни 
                  има ясна визия и безграничен ентусиазъм.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Започваме като малък, но амбициозен екип от професионалисти с различен опит, 
                  обединени от общата цел да създаваме изключителни събития и да надхвърляме очакванията.
                </p>
                <div className="space-y-3">
                  {[
                    'Млад и динамичен екип от специалисти',
                    'Партньорства с водещи доставчици в България',
                    'Свеж поглед върху организацията на събития',
                    'Фокус върху иновации и персонализиране'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Нашият екип"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-brand-blue to-blue-700 text-white p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Нашата мисия</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Да превръщаме всяко ваше събитие в споделена история, като съчетаваме прецизност с емоция, свежест с професионализъм, превръщайки всеки момент в значим и запомнящ се.
            </p>
          </div>

          <div className="bg-gradient-to-r from-brand-green to-green-700 text-white p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Нашата визия</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Да се утвърдим като иновативна агенция за събития, известна с креативния подход, 
              високото качество и персонализираното отношение към всеки клиент.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Нашите ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Нашият екип</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-brand-blue font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готови ли сте да създадем нещо невероятно заедно?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свържете се с нас днес и нека започнем работа по вашето следващо незабравимо събитие.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/inquiry"
              className="bg-brand-lime hover:bg-green-400 text-brand-green px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Изпратете запитване
            </a>
            <a
              href="/contacts"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Свържете се с нас
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;