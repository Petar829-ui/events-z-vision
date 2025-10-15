import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      <Helmet>
        <title>Нашите услуги | Организация на корпоративни, лични и нестандартни Z Experience събития</title>
        <meta
          name="description"
          content="Открийте нашите услуги – от тиймбилдинги и фирмени партита до авторски арт преживявания и бутикови частни събития. Изграждаме концепции, които оставят следа."
        />
      </Helmet>
      <h1 className="sr-only">Какво правим – от идея до изживяване</h1>

      {/* Hero */}
      <section className="relative h-full py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Фон – overscan с 4px, за да няма бели линии */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-[-4px] right-[-4px] bg-cover bg-center"
          style={{ backgroundImage: "url('website 2 design EZV.svg')" }}
        />
        {/* Съдържание */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-semibold text-white pt-24 mb-32 md:mb-64">
              <span className="text-[#c1ff72]">Нашите</span> услуги
            </h1>
            <p className="text-xl md:text-3xl text-white max-w-6xl mx-auto leading-snug font-playfair font-semibold">
              <span className="text-[#c1ff72]">Организацията на събития е</span> изкуство
              <span className="text-[#c1ff72]">, в което всеки детайл има значение. В</span> Events Z Vision{' '}
              <span className="text-[#c1ff72]">предлагаме пълна гама услуги за</span> корпоративни събития,
              лични празници и нестандартни “Z Experience” формати.{' '}
              <span className="text-[#c1ff72]">Събитията, които създаваме вдъхновяват, обединяват и оставят следа.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Категории услуги */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 isolate relative">
        <h2 className="text-5xl font-poppins font-bold text-center text-white p-20">
          <span className="text-[#c1ff72]">Категории</span> услуги
        </h2>

        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-32">
          {/* Декоративен бекграунд */}
          <img
            src="43.svg"
            alt="Декор"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-auto object-contain -z-10 opacity-70"
          />

          {/* Лява колона */}
          <div className="relative w-full lg:w-[420px] z-20">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 w-full h-full rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
            />
            <div className="relative bg-[#c1f772] rounded-xl shadow-xl text-center overflow-hidden px-8 pt-10 pb-56 md:pb-64 min-h-[500px] md:min-h-[500px]">
             
              <h3 className="text-4xl font-montserrat font-bold text-[#2f492f] mb-4">
                Корпоративни<br /> събития
              </h3>
              
              <p className="text-lg md:text-2xl font-inter font-normal text-[#2f492f] leading-relaxed max-w-[34ch] md:max-w-none mx-auto">
                Планирате <span className="font-bold">тиймбилдинг, конференция</span> или друго фирмено събитие –
                доверете се на нас – <span className="font-bold">в сигурни ръце сте!</span>
              </p>
               <Link to={"/corporate"}>
               <h3 className="inline-flex items-center text-xl font-playfair font-semibold text-[#2f492f] hover:text-[#075994] mt-5">
              Вижте още <ArrowRight className="ml-2 h-5 w-5" />
              </h3>
              </Link>
              <img
                src="1.svg"
                alt="Корпоративни събития"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 md:w-72"
              />
            </div>
          </div>

          {/* Дясна колона */}
          <div className="flex-1 z-10">
            <h3 className="text-3xl font-poppins font-bold text-[#c1ff72] mb-10">
              Организиране на корпоративни събития
            </h3>
            <p className="text-xl md:text-2xl text-[#c1ff72] font-inter font-normal leading-snug max-w-2xl">
              Фирмени партита, тиймбилдинги, семинари и работни срещи – всичко, от което бизнесът ви има нужда,
              за да изгради доверие, да сплоти екипа си и да представи своята визия. Ние сме до вас,
              за да превърнем всяко корпоративно събитие в преживяване със смисъл, подкрепено от професионална
              организация и внимание към детайла.
            </p>
          </div>
        </div>
      </section>

      {/* Лични празници – вариант 1 (текст вляво, карта вдясно) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-40 isolate relative z-[2]">
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-32">
          {/* Текст – по-широк */}
          <div className="flex-1 z-[2] max-w-[60rem]">
            <h3 className="text-3xl md:text-3xl lg:text-4xl font-montserrat font-bold text-[#c1ff72] tracking-tight mb-10 md:mb-20">
              Организиране на лични празници
            </h3>
            <p className="text-xl md:text-2xl text-[#c1ff72] font-inter font-normal leading-[1.75] max-w-[52rem]">
              Сватби, рождени дни, кръщенета или бутикови празници – личните поводи заслужават индивидуален подход.
              Създаваме уникални концепции и сценарии, които превръщат личния ви ден в спомен, който се помни цял живот.
            </p>
          </div>

          {/* Карта вдясно */}
          <div className="relative w-full lg:w-[420px] z-20">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 w-full h-full rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
            />
            <div className="relative bg-[#ebee68] rounded-xl shadow-xl text-center px-8 pt-10 pb-56 md:pb-64 min-h-[500px] z-20">
              
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2f492f] mb-7">
                Лични празници
                </h2>
              <p className="text-xl md:text-2xl font-inter font-medium text-[#2f492f]">
                Отпразнувайте <span className='font-bold'>мечтаният<br /> си празник,</span> като му се насладите напълно <span className='font-bold'>без да<br /> се притеснявате</span> за организацията и логистиката!
              </p>
              <Link 
              to={"/PersonalCelebrations"}>
              <h3 className="inline-flex items-center text-xl font-playfair font-semibold text-[#2f492f] hover:text-[#075994] mt-5">
              Вижте още <ArrowRight className="ml-2 h-5 w-5" />
              </h3>
              </Link>
              <img
                src="2.svg"
                alt="Лични празници"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Лични празници – вариант 2 (карта вляво, текст вдясно) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-40 isolate relative z-[2]">
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-32">
          {/* Карта вляво */}
          <div className="relative w-full lg:w-[420px] z-20">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 w-full h-full rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
            />
            <div className="relative bg-[#30e8b0] rounded-xl shadow-xl text-center px-8 pt-10 pb-56 md:pb-64 min-h-[500px]">
              
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2f492f] mb-4">
                Z Experience събития
                </h2>
              <p className="text-xl md:text-2xl font-inter font-medium text-[#2f492f]">
                Ако искате да усетите<br /> вкусът на <span className='font-bold'>авторските ни<br /> събития</span> или пък вашето желано събитие не попада<br />
                в нито една от горните две категории, мястото ви е<br /> тук в <span className='font-bold'>Z Experience!</span>
              </p>
              <Link 
              to={"/zexperience"}
              >
              <h3 className="inline-flex items-center text-xl font-playfair font-semibold text-[#2f492f] hover:text-[#075994] mt-5">
              Вижте още <ArrowRight className="ml-2 h-5 w-5" />
              </h3>
              </Link>
              <img
                src="3.svg"
                alt="Z Experience"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 h-auto"
              />
            </div>
          </div>

          {/* Текст вдясно */}
          <div className="flex-1 relative z-[2]">
            <h3 className="text-3xl text-[#c1ff72] font-montserrat font-bold mb-20">
              Авторски и нестандартни събития
            </h3>
            <p className="text-xl md:text-2xl text-[#c1ff72] font-inter font-normal leading-[1.75] max-w-[52rem]">
              Авторски и нестандартни формати, които излизат извън рамките на обичайното.
              Storytelling концепции, immersive преживявания, pop-up партита и културни инициативи
              – тук е креативното ДНК на нашата работа. Z Experience е за хора и компании,
              които искат не просто събитие, а запомняща се история.
            </p>
          </div>

          {/* Декор зад реда */}
          <img
            src="43.svg"
            alt="Декор"
            className="pointer-events-none absolute left-2/2 top-3/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-auto object-contain -z-10 opacity-70"
          />
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 lg:px-8 mt-40 isolate relative z-[2]'>
        <div>
        <h2 className='text-3xl font-poppins font-bold text-[#c1ff72] mb-14 text-center'>
          Разполагаме с богата гама услуги и партньорски фирми
        </h2>
        <h3 className='text-xl md:text-2xl font-inter font-normal text-[#c1ff72] mb-14 text-center'>
          За да осигурим цялостна и безупречна организация, работим с утвърдени професионалисти във всяка сфера:
          </h3>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <ul className="text-xl md:text-2xl font-inter font-normal text-[#c1ff72] mb-4 list-outside list-disc">
          <li>
          бармани и бар оборудване;
          </li>
          <li>
          кетъринг, сладкарници и пекарни;
          </li>
          <li>
          зали, ресторанти, барове и пространства за събития;
          </li>
          <li>
          музиканти, диджеи, водещи и визуален ентъртейнмънт;
          </li>
          <li>
          декорация, флорални аранжировки и хендмейд продукти
          </li>
          </ul>

          <ul className="text-xl md:text-2xl font-inter font-normal text-[#c1ff72] mb-20 list-outside list-disc">
          <li>
          фотографи и професионално видеозаснемане;
          </li>
          <li>
          озвучаване, осветление и специализирано оборудване;
          </li>
          <li>
          промоутъри, хостеси, аниматори и сервитьори;
          </li>
          <li>
          охрана, транспорт и хамалски услуги;
          </li>
          <li>
          медийни партньори, рекламни агенции и печатници.
          </li>
          </ul>
        </div>
        <p className='text-xl md:text-2xl font-inter font-normal text-[#c1ff72] mb-4 text-center'>
          Това ни позволява да предложим цялостна организация на събития – от концепцията и атмосферата до последния детайл.
        </p>
        
        <img
        src="43.svg"
        alt="Декор"
        className="pointer-events-none absolute left-1/2 top-1/1 -translate-x-2/2 -translate-y-1/2 w-[850px] h-auto object-contain -z-10 opacity-70 rotate-90" 
        />
        </div>
      </section>

      {/* Call to action */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
};

export default Services;
