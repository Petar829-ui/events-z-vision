import React from "react"
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const AuthorsZ = () => {
      const blogPosts = [
        { id: 1, title: '10 тенденции в организацията на корпоративни събития за 2025', excerpt: 'Открийте най-новите тенденции в корпоративните събития и как да ги приложите във вашата компания...', author: 'Мария Петрова', date: '15 януари 2025', category: 'Корпоративни събития', image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800', readTime: '5 мин четене' },
        { id: 2, title: 'Как да организирате незабравим тиймбилдинг с ограничен бюджет', excerpt: 'Практични съвети за организиране на ефективни тиймбилдинг активности без да разбивате банката...', author: 'Георги Иванов', date: '12 януари 2025', category: 'Тиймбилдинг', image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800', readTime: '7 мин четене' },
        { id: 3, title: 'Планиране на сватба: Пълен наръчник за бъдещите младоженци', excerpt: 'Всичко, което трябва да знаете за планирането на перфектната сватба - от избор на място до последните детайли...', author: 'Елена Стоянова', date: '8 януари 2025', category: 'Сватби', image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', readTime: '10 мин четене' },
        { id: 4, title: 'Психологията на цветовете в декорацията на събития', excerpt: 'Как различните цветове влияят на настроението на гостите и как да ги използвате ефективно...', author: 'Мария Петрова', date: '5 януари 2025', category: 'Декорация', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800', readTime: '6 мин четене' },
        { id: 5, title: 'Дигитални технологии в съвременните събития', excerpt: 'Как VR, AR и други технологии променят начина, по който преживяваме событията...', author: 'Димитър Николов', date: '2 януари 2025', category: 'Технологии', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800', readTime: '8 мин четене' },
        { id: 6, title: 'Устойчивост в организацията на събития - защо е важна', excerpt: 'Как да направите вашето събитие по-екологично без да компромисирате качеството...', author: 'Елена Стоянова', date: '29 декември 2024', category: 'Устойчивост', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', readTime: '6 мин четене' }
      ];
    
      const categories = ['Всички','Корпоративни събития','Тиймбилдинг','Сватби','Декорация','Технологии','Устойчивост'];
    
      const [selectedCategory, setSelectedCategory] = React.useState('Всички');
      const filteredPosts = selectedCategory === 'Всички' ? blogPosts : blogPosts.filter(p => p.category === selectedCategory);
  
return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#3533cd] to-[#075994] pb-10">
        <section className="relative min-h-[80vh] overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B26.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-64 pb-16">
            <h2 className="text-6xl font-poppins font-semibold text-[#30e8b0] text-center -mt-10 mb-5">
                <span className="text-white">Авторски</span> Z Experience <span className="text-white">събития</span>
            </h2>
            </div>
          <div className="mx-auto w-[630px] backdrop-blur-md aspect-square rounded-full border-4 border-[#30e8b0] grid place-items-center p-6 md:p-10 mb-20">
            <p className="text-3xl font-inter font-normal text-white text-center leading-relaxed">
              Нашите авторски <span className="text-[#30e8b0]">Z Experience</span> събития са вдъхновени от<br /> идеята за преживявания, които <span className="text-[#30e8b0]">съчетават изкуство, учене и забавление</span>. Това са инициативи, които ние създаваме и развиваме като собствена концепция – <span className="text-[#30e8b0]">пространства</span> за изразяване, откриване и свързване.
            </p>
          </div>
        </section>

<section className="mt-16">
    <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 max-w-7xl">
        <p className="text-2xl font-inter font-normal text-white text-left leading-relaxed">
            Разгледай разнообразните ни предстоящи и изминали формати: арт терапии, неформално обучение, тематични уъркшопи, културни вечери и др., които провокират въображението и създават чувство за общност. Всеки проект има своя история и атмосфера – било то чрез музика, визуални изкуства или интерактивни активности. <br /><br />

Целта на авторските Z Experience събития е да вдъхновяват, да предлагат нов начин за среща с изкуството и знанието, и да създават пространства за личностно развитие и споделени емоции. Те са отворени за всеки, който иска да преживее нещо различно, да се потопи в нови светове и да излезе от рамките на ежедневието.
        </p>
    </div>
</section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12 bg-[#075994] p-5 rounded-3xl">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-inter font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#6e67b4] text-[#30e8b0]'
                  : 'bg-[#6e67b4] text-[#30e8b0] hover:text-[#6e67b4] hover:bg-[#30e8b0]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-[#30e8b0] rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img src={filteredPosts[0].image} alt={filteredPosts[0].title} className="w-full h-80 lg:h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#6e67b4] text-[#30e8b0] px-3 py-1 rounded-full text-xs font-inter font-medium">Препоръчано</span>
                  </div>
                </div>
                {/* featured content вече е с Inter */}
                <div className="p-8 lg:p-12 flex flex-col justify-center font-inter">
                  <div className="flex items-center space-x-4 text-sm text-[#075994] mb-4">
                    <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /><span>{filteredPosts[0].date}</span></div>
                    <div className="flex items-center"><User className="h-4 w-4 mr-1" /><span>{filteredPosts[0].author}</span></div>
                    <div className="flex items-center"><Tag className="h-4 w-4 mr-1" /><span>{filteredPosts[0].category}</span></div>
                  </div>
                  <h2 className="text-3xl font-bold text-[#075994] mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-lg text-[#075994] mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#075994]">{filteredPosts[0].readTime}</span>
                    <button className="inline-flex items-center text-[#3b84b6] hover:text-[#075994] font-inter font-semibold transition-colors">
                      Прочетете повече <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map(post => (
            <article
              key={post.id}
              className="bg-[#30e8b0] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 font-inter"
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#6e67b4] bg-opacity-70 text-[#30e8b0] px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-xs text-[#075994] mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <User className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#075994] mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[#075994] mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center text-[#3b84b6] hover:text-[#075994] font-inter font-medium text-sm transition-colors">
                  Прочетете повече <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#30e8b0] hover:bg-[#1f6da8] text-[#075994] hover:text-[#30e8b0] px-8 py-3 rounded-lg font-inter font-semibold transition-colors duration-200">
            Заредете още статии
          </button>
        </div>

             {/* Call to action */}
      <div className="mt-20 bg-[#f6f6f6] rounded-2xl p-6 text-center max-w-3xl mx-auto relative z-[2]">
        <p className="text-2xl font-inter font-bold text-[#075994] mb-8 max-w-2xl mx-auto">
        Z Experience е смела стъпка отвъд класическата организация – <span className="text-[#6e67b4]">това е начин да създадеш паметно преживяване, което говори на езика на съвременната публика и определено остава забелязано.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/inquiry"
            className="bg-[#30e8b0] hover:bg-[#1f6da8] text-[#075994] hover:text-[#30e8b0] px-8 py-4 rounded-lg text-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Кликни тук, за да направиш запитване
          </Link>
        </div>
      </div>
      </div>
    </div>
  
  );
};

export default AuthorsZ;