import React from "react"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle } from "lucide-react";

const Teambuildings = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      <Helmet>
  <title>Тиймбилдинг за компании | Идеи, формати и пълна организация</title>
  <meta name="description" content="Искате тиймбилдинг с кауза, релакс или креативност? Ние създаваме и изпълняваме програми за сплотяване и вдъхновение – на открито, в СПА хотел или в природата, из цяла България." />
</Helmet>

<h1 className="sr-only">Тиймбилдинг преживявания за вдъхновяващи екипи</h1>
        <section className="relative bg-cover bg-center overflow-hidden h-full isolate py-10 sm:py-12 md:py-20 lg:py-24 isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B13.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-64 pb-16">
            <h2 className="text-[44px] sm:text-5xl md:text-6xl lg:text-6xl font-poppins font-semibold text-[#c1ff72] text-center -mt-[40px]">
                Тийм<span className="text-white">билдинги</span>
            </h2>
            <p className="text-2xl md:text-3xl lg:text-3xl font-poppins font-semibold text-[#c1ff72] text-center mt-24 sm:mt-36 md:mt-46 lg:mt-56 max-w-6xl md:max-w-7xl lg:max-w-[90rem] mx-auto leading-relaxed">
            Един <span className="text-white">екип</span> е силен тогава, когато споделя повече от работни задачи – <span className="text-white">когато членовети му заедно
            преживяват моменти</span>, които ги сближават, усъвършенстват и вдъхновяват.
            </p>
            </div>
        </section>

<section className="mt-16">
  <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 md:gap-x-16 lg:gap-x-24 xl:gap-x-28 place-items-stretch">
      
      {/* Карта 1 */}
      <div className="relative w-full z-20">
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-[#c1ff72] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
        />
        <div className="relative bg-[#c1f772] border-2 border-white rounded-xl shadow-xl text-center overflow-hidden px-8 pt-10 pb-56 md:pb-64 min-h-[500px]">
          <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] mb-[114px]">
            Обучения
          </h3>
          <p className="text-lg md:text-2xl font-inter font-normal text-[#2f492f] leading-relaxed mb-[32px] max-w-[34ch] md:max-w-none mx-auto">
            Основните две <br />съставки на <span className="font-bold">успешният екип </span> са
             <span className="font-bold">успешните <br />хора</span> и <span className="font-bold">доверието</span> <br />между тях
          </p>
          <Link 
          to={"/training"}
           >
          <h3 className="inline-flex items-center text-xl font-playfair font-semibold text-[#2f492f] hover:text-[#075994] mt-5">
              Вижте още <ArrowRight className="ml-2 h-5 w-5" />
          </h3>
          </Link>
          <img
            src="2.svg"
            alt="Корпоративни събития"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 h-auto"
          />
        </div>
      </div>


      {/* Карта 2 */}
      <div className="relative w-full z-20">
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-[#c1ff72] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
        />
        <div className="relative bg-[#c1f772] border-2 border-white rounded-xl shadow-xl text-center overflow-hidden px-8 pt-10 pb-56 md:pb-64 min-h-[500px]">
          <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] mb-28 leading-relaxed">
            Развлекателни
          </h3>
          <p className="text-lg md:text-2xl font-inter font-normal text-[#2f492f] mb-[94px] leading-relaxed max-w-[34ch] md:max-w-none mx-auto">
           <span className="font-bold">Опознайте</span> колегите си <span className="font-bold">извън офиса...</span> работата ще почака
          </p>
          <Link 
          to={"/entertainment"}
          >
           <h3 className="inline-flex items-center text-xl font-playfair font-semibold text-[#2f492f] hover:text-[#075994] mt-5">
            Вижте още <ArrowRight className="ml-2 h-5 w-5" />
          </h3>
          </Link>
          <img
            src="3.svg"
            alt="Корпоративни събития"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 lg:w-[28rem] h-auto pointer-events-none"
          />
        </div>
      </div>


      {/* Карта 3 */}
      <div className="relative w-full z-20">
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-[#c1ff72] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
        />
        <div className="relative bg-[#c1f772] border-2 border-white rounded-xl shadow-xl text-center overflow-hidden px-8 pt-10 pb-56 md:pb-64 min-h-[500px]">
          <h3 className="text-4xl font-montserrat font-bold text-[#2f492f] mb-24 leading-relaxed">
           Смесени
          </h3>
          <p className="text-lg md:text-2xl font-inter font-normal text-[#2f492f] mb-[39px] leading-relaxed max-w-[34ch] md:max-w-none mx-auto">
            <span className="font-bold">Балансът</span> е в основата на успеха...балансирай заедно с екипа си между
            <span className="font-bold">готино ново обучение</span> и <span className="font-bold">релакс</span>
          </p>
          <Link 
          to={"/mixedteambuildings"}
          >
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
    </div>
  </div>
</section>

    <section className="mt-16 relative z-[10]">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid place-items-stretch p-6 rounded-3xl bg-[#f6f6f6]">
           <p className="text-xl md:text-3xl text-[#075994] font-inter font-semibold text-center">
            Тиймбилдингите са <span className="text-[#f96e0c]">много повече</span> от приятна пауза в работния ритъм – те са <span className="text-[#f96e0c]">стратегически инструмент</span>
            за развитие на екипа и работната динамика, като същевременно могат и да <span className="text-[#f96e0c]">обогатят и подобрят знанията
            и уменията</span> на служителите
          </p>
          </div>
       </div>
    </section>

<section className="mt-16 relative isolate">
  {/* Декор – зад всичко */}
  <img
    src="43.svg"
    alt="Декор"
    className="pointer-events-none absolute z-[-10]
               left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* ред: текст (ляво) + снимка (дясно) */}
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
      <div className="max-w-2xl mr-auto text-left">
        <h2 className="font-poppins font-bold text-4xl text-[#c1ff72] pb-6">
          Обучителни 
        </h2>
        <p className="font-inter font-normal text-xl md:text-3xl text-[#c1ff72] leading-relaxed">
        Тиймбилдингите с цел обучение развиват умения, които пряко влияят върху ефективността на работата.
        Комуникация, лидерство, креативност, способност за работа под напрежение и др. се упражняват в среда,
        която е стимулираща и вдъхновяваща. Така служителите не само усвояват нови личностни и работни умения,
        но и започват да ги прилагат в работната си среда, което води до по-добри резултати и по-силно усещане за
        сплотеност.
        </p>
      </div>

      {/* снимка вдясно, без absolute и без overflow-hidden */}
      <div className="mx-auto w-[82vw] h-[84vw] max-w-[720px] max-h-[520px] md:w-[720px] md:h-[520px] rounded-full bg-[#075994] ring-8 ring-[#075994] relative z-10">
        <img
          src="10.svg"
          alt="Корпоративни събития"
          className="block w-full h-full object-cover select-none rounded-full [clip-path:circle(50%_at_50%_50%)]"
        />
      </div>
    </div>
  </div>
</section>


<section className="mt-16 relative isolate">
  {/* Декор – зад всичко */}
  <img
    src="43.svg"
    alt="Декор"
    className="pointer-events-none absolute z-[-10] 
               left-[50%] top-2/3 -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* ред: снимка (ляво) + текст (дясно) */}
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10 relative">
      <div className="order-1 md:order-2 max-w-2xl mr-auto text-left md:pl-16 relative z-10">
              {/* текст – над декора */}
        <h2 className="font-poppins font-bold text-4xl text-[#c1ff72] mb-6">
          Развлекателни
        </h2>
        <p className="font-inter text-xl md:text-3xl text-[#c1ff72] leading-snug mb-6">
        Развлекателните тиймбилдинги, от своя страна, носят лекота, смях и енергия, които сближават хората и
        укрепват връзките помежду им. Те създават атмосфера на доверие, в която колегите се виждат не само като
        професионалисти, а и като личности. Това прави ежедневната работа по-естествена и хармонична, а екипът –<br /> 
        по-мотивиран и готов да върви напред заедно.
        </p>
      </div>
            {/* снимка в кръг (без absolute и без overflow-hidden) */}
      <div className="order-2 md:order-1 mx-auto w-[82vw] h-[84vw] max-w-[720px] max-h-[520px] md:w-[720px] md:h-[520px] rounded-full bg-[#075994] ring-8 ring-[#075994] relative z-10">
        <img
          src="11.svg"
          alt="Корпоративни събития"
          className="block w-full h-full object-cover select-none rounded-full [clip-path:circle(50%_at_50%_50%)]"
        />
      </div>
    </div>
  </div>
</section>


             {/* Call to action */}
             <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-20 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto relative z-[2]">
        <p className="text-2xl font-inter font-bold text-[#075994] mb-8 max-w-2xl mx-auto">
        Ако планирате тиймбилдинг, конференция или фирмено парти и искате то да бъде повече от стандартно събитие,
        свържете се с нас – <span className="text-[#f96e0c]">заедно можем да създадем преживяване, което да вдъхнови и обедини вашия екип!</span>
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

export default Teambuildings;