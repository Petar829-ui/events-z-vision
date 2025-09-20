import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 тенденции в организацията на корпоративни събития за 2025',
      excerpt: 'Открийте най-новите тенденции в корпоративните събития и как да ги приложите във вашата компания...',
      author: 'Мария Петрова',
      date: '15 януари 2025',
      category: 'Корпоративни събития',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 мин четене'
    },
    {
      id: 2,
      title: 'Как да организирате незабравим тиймбилдинг с ограничен бюджет',
      excerpt: 'Практични съвети за организиране на ефективни тиймбилдинг активности без да разбивате банката...',
      author: 'Георги Иванов',
      date: '12 януари 2025',
      category: 'Тиймбилдинг',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 мин четене'
    },
    {
      id: 3,
      title: 'Планиране на сватба: Пълен наръчник за бъдещите младоженци',
      excerpt: 'Всичко, което трябва да знаете за планирането на перфектната сватба - от избор на място до последните детайли...',
      author: 'Елена Стоянова',
      date: '8 януари 2025',
      category: 'Сватби',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 мин четене'
    },
    {
      id: 4,
      title: 'Психологията на цветовете в декорацията на събития',
      excerpt: 'Как различните цветове влияят на настроението на гостите и как да ги използвате ефективно...',
      author: 'Мария Петрова',
      date: '5 януари 2025',
      category: 'Декорация',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 мин четене'
    },
    {
      id: 5,
      title: 'Дигитални технологии в съвременните събития',
      excerpt: 'Как VR, AR и други технологии променят начина, по който преживяваме событията...',
      author: 'Димитър Николов',
      date: '2 януари 2025',
      category: 'Технологии',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 мин четене'
    },
    {
      id: 6,
      title: 'Устойчивост в организацията на събития - защо е важна',
      excerpt: 'Как да направите вашето събитие по-екологично без да компромисирате качеството...',
      author: 'Елена Стоянова',
      date: '29 декември 2024',
      category: 'Устойчивост',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 мин четене'
    }
  ];

  const categories = [
    'Всички',
    'Корпоративни събития',
    'Тиймбилдинг',
    'Сватби',
    'Декорация',
    'Технологии',
    'Устойчивост'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('Всички');

  const filteredPosts = selectedCategory === 'Всички' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 bg-[#075994]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Блог
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полезни съвети, вдъхновение и актуални теми за организация на събития. 
            Научете повече от нашия експертен опит.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Препоръчано
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      <span>{filteredPosts[0].category}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{filteredPosts[0].readTime}</span>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                      Прочетете повече <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map(post => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <User className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  Прочетете повече <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Заредете още статии
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Абонирайте се за нашия newsletter
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получавайте първи най-новите статии, съвети и ексклузивни оферти директно във вашия inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Въведете вашия email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Абонирам се
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;