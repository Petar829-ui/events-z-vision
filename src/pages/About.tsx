import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      <section className="relative min-h-[80vh] overflow-hidden isolate">
        {/* Фонът – зад съдържанието */}
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-4px] right-[-4px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('website A1 design EZV.svg')" }}
        />

        {/* Съдържание над фона */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-poppins font-semibold text-[#c1ff72] py-28 mb-16">
              За <span className="text-white">нас</span>
            </h1>
            <p className="text-3xl font-playfair font-semibold text-[#c1ff72] py-28 mx-auto leading-relaxed">
              Организацията на събития е <span className="text-white">изкуство</span>, в което всеки детайл има значение.
              В <span className="text-white">Events Z Vision</span> предлагаме пълна гама услуги за <span className="text-white">корпоративни събития,
              лични празници и нестандартни “Z Experience” формати.</span> Събитията,
              които създаваме вдъхновяват, обединяват и оставят следа.
            </p>
          </div>
        </div>
      </section>

<section className="mt-16">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-7xl text-center text-[#c1ff72] font-caveat font-semibold py-10">
      Екипът на Events Z Vision
    </h1>

    {/* Ред 1: Светозара вляво, плейсхолдър вдясно */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Текст – лява колона */}
      <div className="lg:col-span-6">
        <h2 className="text-6xl text-white font-caveat font-semibold mb-6">
          Светозара Манолова
        </h2>
        <p className="text-3xl text-[#c1ff72] font-inter font-normal leading-relaxed">
          Светозара притежава образование по Международни икономически отношения и опит във финансовото
          планиране и управлението на проекти, тя умее да превръща идеи в добре структурирани и ефективно
          реализирани събития. Тя е силно ориентирана към изграждането на партньорства, логистиката и
          цялостната концепция на проектите. Любопитството ѝ към нови подходи и интересът към психологията
          на преживяването я правят двигател на нестандартните и авторски събития, които са запазената марка
          на агенцията.
        </p>
      </div>

      {/* Плейсхолдър/снимка – дясна колона */}
          <img
            src="website design N EZV.png"
            alt="Декор"
            className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-auto object-contain -z-10 opacity-70"
          />
    </div>

{/* Ред 2: декор отляво, текстът вдясно */}
<div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
  {/* декор (не променяме) */}
  <img
    src="website design N EZV.png"
    alt="Декор"
    className="pointer-events-none absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-auto object-contain -z-10 opacity-70"
  />

  {/* Текстовата колона започва от колона 7 => вдясно */}
  <div className="lg:col-span-6 lg:col-start-7">
    <h2 className="text-6xl text-white font-caveat font-semibold mb-6 text-center lg:text-left">
      Радослав Богоев
    </h2>
    <p className="text-3xl text-[#c1ff72] font-inter font-normal pb-20 leading-relaxed max-w-2xl ml-auto">
      Радослав има опит в управлението и координацията на проекти, като се грижи организацията на всяко
      събитие да протича гладко и безпроблемно. Завършил е Комуникационен мениджмънт в Софийски университет
      и притежава силни умения в стратегическата комуникация. Неговият усет към добрите и работещи
      концепции и международният му опит допълват професионализма, с който управлява цялостния процес
      по организацията на събитията.
    </p>
   </div>
  </div>
  </div>
</section>

<section className='mt-16 relative isolate'>
      <img 
    src="website design N EZV.png" 
    alt="Декор" 
    className='pointer-events-none absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 w-[750px] h-auto object-contain -z-10 opacity-70'
    />
  <div className="lg:col-span-6 lg:col-start-7">
    <h2 className="text-7xl text-[#c1ff72] font-caveat font-normal mb-6 text-center lg:text-center pb-20">
      Нашата история
    </h2>
    <p className="text-3xl text-[#c1ff72] font-inter font-normal pb-20 leading-relaxed max-w-7xl mx-auto z-[10]">
Всичко започна с разочарованието от скучните събития – онези, които завършват и сякаш никога не са се случили. Събирания без душа, конференции без вдъхновение, партита без емоция. Ние усещахме, че може да бъде различно. Че едно събитие не е просто дата в календара, а история, която трябва да се преживее.
Решихме, че вместо да критикуваме, ще създаваме. Първо започнахме малко – със студентски инициативи, младежки проекти и обучения, където фокусът беше върху хората и връзките между тях. Видяхме колко много значение има вниманието към детайла, атмосферата, отношението. Там осъзнахме силата на преживяването – онзи момент, в който група непознати се превръща в общност.
Това беше началото на пътя ни. Постепенно мечтата се разрасна – да изграждаме събития, които не просто се провеждат, а докосват, вдъхновяват и оставят следа. Да предлагаме новаторски подход, да разказваме истории чрез пространство, музика, светлина и детайли.
Така се роди Events Z Vision – агенция от ново поколение, създадена да съчетава професионализъм и креативност с автентична човешка емоция. За нас събитията не са услуга, а съпреживяване. Слушаме внимателно, мечтаем заедно с клиента и надскачаме очакванията му.
Днес стоим зад едно просто, но силно вярване: животът е по-красив, когато е споделен. И чрез всяко събитие, което създаваме, превръщаме това вярване в реалност. 
    </p>
   </div>
   </section>

<section className="mt-16 relative isolate">
  {/* Декор отзад */}
  <img
    src="website design N EZV.png"
    alt="Декор"
    className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 w-[750px] h-auto object-contain -z-10 opacity-70"
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 lg:gap-x-4 pb-20">

      {/* Лява колона */}
      <div>
        <h2 className="text-7xl text-[#c1ff72] font-caveat font-normal mb-8">
          Нашата мисия
        </h2>
        <p className="text-3xl text-[#c1ff72] font-inter font-normal leading-relaxed">
          Мисията ни е да превръщаме всяко ваше събитие в споделена история, като съчетаваме прецизност с емоция,
          свежест с професионализъм, превръщайки всеки момент в значим и запомнящ се.
        </p>
      </div>

      {/* Дясна колона */}
      <div>
        <h2 className="text-7xl text-[#c1ff72] font-caveat font-normal mb-8 lg:text-right pr-20">
          Какво ни отличава?
        </h2>
        <p className="text-3xl text-[#c1ff72] font-inter font-normal leading-relaxed">
          Не разглеждаме събитията просто като услуга, а като артистичен израз и личен наш ангажимент.
          Слушаме внимателно. Мечтаем заедно с клиента. Надскачаме очакванията. Комбинираме достъпност
          с безкомпромисно качество, smart решения и авторски почерк. Създаваме нови стандарти в 
          мениджмънта на събития -корпоративни и лични.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="mt-16 relative isolate">
  <div className="max-w-7xl mx-auto">
  <div className="pb-20">
    <h2 className="text-7xl text-[#c1ff72] font-caveat font-normal mb-6 text-center lg:text-center pb-10">
    Нашата социална ангажираност
    </h2>
    <p className="text-3xl text-[#c1ff72] font-inter font-normal leading-relaxed">
     Екипът, който днес стои зад Events Z Vision, вече има изградена история на съвместна работа чрез Change, Explore and Grow by Exchange (CEGE) - младежка неправителствена организация, създадена от Светозара Манолова и Радослав Богоев, която работи активно за развитието на млади хора чрез неформално образование и международни инициативи.
<br /><br />
Светозара Манолова и Радослав Богоев, заедно със своите съмишленици, натрупаха ценен опит като екип в управлението и реализирането на международни обучения, младежки обмени и партньорски мрежи. Този общ опит в неправителствения сектор е стабилната основа, върху която днес се развива и дейността на агенцията – със същите ценности за отговорност, качество и социална ангажираност.
    </p>
      <img
    src="website design N EZV.png"
    alt="Декор"
    className="pointer-events-none absolute left-[40%] md:left-[35%] bottom-[50%] md:bottom-[30%] -translate-x-1/2 w-[750px] h-auto object-contain -z-10 opacity-70"
  />

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">

    {/* Снимката – голяма и изтеглена вляво */}
    <figure className="lg:col-span-8 lg:-ml-8 xl:-ml-16 mt-10">
      <img
        src="website A2 design EZV.svg"
        alt="CEGE"
        className="block w-full max-w-none h-auto rounded-2xl shadow-2xl"
      />
    </figure>

    {/* Текстът – по-широка колона вдясно */}
<div className="max-w-[42ch] ml-auto">
  <h2 className="text-5xl md:text-6xl text-[#c1ff72] text-center lg:text-center font-caveat font-normal leading-relaxed">
    Научи повече за CEGE тук:
  </h2>

  <div
    className="
      mx-auto mt-10
      w-[260px] sm:w-[320px] md:w-[380px] lg:w-[480px]
      aspect-square rounded-full overflow-hidden
      bg-[#075994] ring-8 ring-[#075994]
    "
  >
    <Link to="https://www.cegeassociation.org/" className="block h-full w-full group">
      <img
        src="website CEGE Logo A1 design EZV.svg"
        alt="CEGE страница"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  </div>
  </div>
  </div>
</div>


  </div>
  <img
    src="website design N EZV.png"
    alt="Декор"
    className="pointer-events-none absolute left-[66%] md:left-[70%] top-[70%] md:top-[80%] -translate-x-1/2 w-[750px] h-auto object-contain -z-10 opacity-70"
  />
  </div>
</section>


         {/* Call to action */}
      <div className="mt-20 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto relative z-[2]">
        <h2 className="text-3xl font-inter font-bold mb-4 text-[#075994]">
          Искате ли вашето събитие да бъде повече от формалност?
        </h2>
        <p className="text-2xl font-inter font-bold text-[#f96e0c] mb-8 max-w-2xl mx-auto">
          Свържете се с нас и заедно ще създадем преживяване, което ще се помни.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/inquiry"
            className="bg-[#c1ff72] hover:bg-[#2f492f] text-[#075994] hover:text-[#c1ff72] px-8 py-4 rounded-lg text-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Кликни тук, за да направиш запитване
          </Link>
        </div>
      </div>

    </div>
  );
};

export default About;
