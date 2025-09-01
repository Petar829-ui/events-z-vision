import React from 'react';
import { Eye, Calendar, Users, MapPin } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Корпоративна конференция Tech Summit 2024',
      category: 'Корпоративни събития',
      client: 'TechCorp Bulgaria',
      date: 'Октомври 2024',
      guests: 300,
      location: 'Хотел Хилтон, София',
      description: 'Тридневна международна конференция с участието на водещи технологични експерти',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      id: 2,
      title: 'Тиймбилдинг приключение в Рила',
      category: 'Тиймбилдинги',
      client: 'Digital Marketing Agency',
      date: 'Септември 2024',
      guests: 45,
      location: 'Рила планина, хижа Мальовица',
      description: 'Двудневен outdoor тиймбилдинг с приключенски активности и workshop-и',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      id: 3,
      title: 'Елегантна сватба в замък',
      category: 'Лични събития',
      client: 'Мария и Георги',
      date: 'Август 2024',
      guests: 120,
      location: 'Замък Равадиново',
      description: 'Приказна сватба в замъка с тематична декорация и изискан кетъринг',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      id: 4,
      title: 'Лансиране на нов продукт',
      category: 'Корпоративни събития',
      client: 'Fashion Brand Bulgaria',
      date: 'Юли 2024',
      guests: 150,
      location: 'Арт център Сердика, София',
      description: 'Стилно събитие за представяне на нова модна колекция с модно дефиле',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      id: 5,
      title: 'Детски рожден ден - тема Супергерои',
      category: 'Лични събития',
      client: 'Семейство Стоянови',
      date: 'Юни 2024',
      guests: 25,
      location: 'Частна резиденция, Бояна',
      description: 'Вълшебно парти за 6-годишнина с аниматори, игри и персонализирана декорация',
      image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1857160/pexels-photo-1857160.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1857175/pexels-photo-1857175.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1857161/pexels-photo-1857161.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      id: 6,
      title: 'Благотворителна гала вечер',
      category: 'Други',
      client: 'Фондация Деца в нужда',
      date: 'Май 2024',
      guests: 200,
      location: 'НДК, София',
      description: 'Елегантна благотворителна вечер с концерт, търг и награждаване',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    }
  ];

  const categories = ['Всички', 'Корпоративни събития', 'Тиймбилдинги', 'Лични събития', 'Други'];
  const [selectedCategory, setSelectedCategory] = React.useState('Всички');
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);

  const filteredProjects = selectedCategory === 'Всички' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Портфолио
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Разгледайте някои от нашите най-успешни проекти и се вдъхновете 
            за вашето следващо незабравимо събитие.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{project.guests} гости</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {projects.find(p => p.id === selectedProject) && (
                  <>
                    <img
                      src={projects.find(p => p.id === selectedProject)!.image}
                      alt={projects.find(p => p.id === selectedProject)!.title}
                      className="w-full h-80 object-cover"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-75 transition-colors"
                    >
                      ×
                    </button>
                  </>
                )}
              </div>
              
              {projects.find(p => p.id === selectedProject) && (
                <div className="p-8">
                  <div className="mb-6">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {projects.find(p => p.id === selectedProject)!.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {projects.find(p => p.id === selectedProject)!.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {projects.find(p => p.id === selectedProject)!.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center text-blue-600 mb-2">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Дата</span>
                      </div>
                      <p className="text-gray-800">{projects.find(p => p.id === selectedProject)!.date}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center text-emerald-600 mb-2">
                        <Users className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Гости</span>
                      </div>
                      <p className="text-gray-800">{projects.find(p => p.id === selectedProject)!.guests}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center text-purple-600 mb-2">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Място</span>
                      </div>
                      <p className="text-gray-800">{projects.find(p => p.id === selectedProject)!.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Галерия</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {projects.find(p => p.id === selectedProject)!.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Нашите резултати говорят</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-blue-100">Реализирани проекта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
              <div className="text-blue-100">Доволни клиенти</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">10+</div>
              <div className="text-blue-100">Години опит</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-blue-100">Удовлетвореност</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Готови сте за вашия следващ проект?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Свържете се с нас днес и нека създадем нещо невероятно заедно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/inquiry"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Изпратете запитване
            </a>
            <a
              href="/contacts"
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Свържете се с нас
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;