import React from "react"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ZExperience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#3533cd] to-[#075994] pb-10">
      <Helmet>
  <title>Z Experience събития | Преживявания отвъд стандартното</title>
  <meta name="description" content="Z Experience е нашият почерк – нестандартни и авторски формати, които съчетават технологии с изкуство, бизнес ценности с принадлежност и преживявания с въздействие. От рисуване с горещ шоколад до продуктови и рекламни събития, и други формати, които създават стойност." />
</Helmet>

<h1 className="sr-only">Z Experience – преживявания, които се усещат</h1>
        <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B22.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-16">
            <h2 className="text-5xl md:text-6xl font-poppins font-semibold text-[#30e8b0] text-center md:mt-20">
                Z Experience <span className="text-white">събития</span>
            </h2>
            <p className="text-3xl md:text-4xl font-playfair font-semibold text-[#30e8b0] text-center mt-56 max-w-6xl md:max-w-7xl lg:max-w-[90rem] mx-auto leading-relaxed">
            Z Experience е нашата <span className="text-white">най-смела и креативна категория</span> – пространство, в което стандартните формати отстъпват място на нестандартни идеи и смели концепции. Това са <span className="text-white">събития</span>, които не просто се случват, а се преживяват. Те ангажират всички сетива – зрение, слух, вкус, усещане – и <span className="text-white">превръщат един момент в многопластова история</span>, която остава завинаги в спомените.
            </p>
            </div>
        </section>

<section className="mt-16">
  <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 md:gap-x-16 lg:gap-x-24 xl:gap-x-28 place-items-stretch">
      
      {/* Карта 1 */}
      <div className="relative w-full z-20 mb-20">
        <div
          aria-hidden="true"
          className="absolute -bottom-4 -right-6 w-full h-full rounded-3xl border-4 border-[#30e8b0] bg-[#6e67b4] shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
        />
        <div className="relative bg-[#30e8b0] rounded-3xl shadow-xl text-center overflow-hidden px-8 pt-10 pb-56 md:pb-64 min-h-[500px]">
          <Link 
          to={"/authorsz"}
          >
          <h3 className="text-[2rem] font-montserrat font-bold text-[#075994] hover:text-[#6e67b4] mb-[20px]">
            Авторски Z Experience събития
          </h3>
          </Link>
          <p className="text-lg md:text-2xl font-inter font-normal text-[#075994] leading-relaxed mb-[32px] max-w-[34ch] md:max-w-none mx-auto">
            Преоткрий себе си и <span className="font-bold">новото значение</span> на думите <span className="font-bold">“свободно време”!</span>
          </p>
          <img
            src="8.svg"
            alt="Корпоративни събития"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 lg:w-[28rem] h-auto pointer-events-none"
          />
        </div>
      </div>


      {/* Карта 2 */}
      <div className="relative w-full z-20 mb-20">
        <div
          aria-hidden="true"
          className="absolute -bottom-4 -right-6 w-full h-full rounded-3xl border-4 border-[#30e8b0] bg-[#6e67b4] shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
        />
        <div className="relative bg-[#30e8b0] rounded-3xl shadow-xl text-center overflow-hidden px-8 pt-10 pb-56 md:pb-64 min-h-[500px]">
          <Link 
          to={"/personalized"}
          >
          <h3 className="text-[2rem] font-montserrat font-bold text-[#075994] hover:text-[#6e67b4] mb-14 leading-relaxed">
            Персонализирани събития
          </h3>
          </Link>
          <p className="text-lg md:text-2xl font-inter font-normal text-[#075994] mb-[37px] leading-relaxed max-w-[34ch] md:max-w-none mx-auto">
           Имаш идея за <span className="font-bold">нестнандартно и оригинално</span> събитие - на правилното място си
          </p>
          <img
            src="6.svg"
            alt="Корпоративни събития"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 lg:w-[28rem] h-auto pointer-events-none"
          />
        </div>
      </div>


      {/* Карта 3 */}
      <div className="relative w-full z-20 mb-20">
        <div
          aria-hidden="true"
          className="absolute -bottom-4 -right-6 w-full h-full rounded-3xl border-4 border-[#30e8b0] bg-[#6e67b4] shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
        />
        <div className="relative bg-[#30e8b0] rounded-3xl shadow-xl text-center overflow-hidden px-8 pt-10 pb-56 md:pb-64 min-h-[500px]">
          <Link 
          to={"/product"}
          >
          <h3 className="text-3xl font-montserrat font-bold text-[#075994] hover:text-[#6e67b4] mb-[60px] leading-relaxed">
            Продуктови и рекламни събития
          </h3>
          </Link>
          <p className="text-lg md:text-2xl font-inter font-normal text-[#075994] mb-[103px] leading-relaxed max-w-[34ch] md:max-w-none mx-auto">
            <span className="font-bold">Надскачаме</span> стандартния PR формат
          </p>
          <img
            src="9.svg"
            alt="Корпоративни събития"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 md:w-72"
          />
        </div>
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
               left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* ред: текст (ляво) + снимка (дясно) */}
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
      <div className="max-w-2xl mr-auto text-left">
        <h2 className="font-poppins font-bold text-4xl text-[#30e8b0] pb-6">
          Какво е Z Experience?
        </h2>
        <p className="font-inter font-normal text-3xl text-white leading-relaxed">
          Z Experience е нашият отговор на най-новите тенденции в събитийната индустрия и вдъхновение от поколението, което променя правилата – Gen Z. Това са хората, които ценят автентичността, креативността и емоционалните преживявания повече от всичко друго. Те не търсят просто присъствие на събитие – искат да бъдат част от история, която ги докосва лично и им позволява да я споделят със света. <br /><br />

Z Experience събитията се раждат от този нов начин на мислене. Те са иммерсивни, визуално въздействащи и интерактивни – събития, в които участниците не са публика, а съ-създатели. Балансът между забавление, емоция и смисъл е ключов, защото именно той прави всяко преживяване незабравимо и „споделяемо“.
        </p>
      </div>

      {/* снимка вдясно, без absolute и без */}
      <div className="mx-auto w-[82vw] h-[84vw] max-w-[720px] max-h-[520px] md:w-[720px] md:h-[520px] rounded-full relative z-10">
        <img
          src="54.svg"
          alt="Корпоративни събития"
          className="block w-full h-full object-cover select-none rounded-full"
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
               left-[40%] top-2/3 -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
  />

  <img
    src="43.svg"
    alt="Декор"
    className="pointer-events-none absolute z-[-10] 
               left-[90%] top-2/3 -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* ред: снимка (ляво) + текст (дясно) */}
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10 relative">
      {/* текст – над декора */}
      <div className="order-1 md:order-2 max-w-2xl mr-auto text-left md:pl-16 relative z-10">
      <div className="max-w-2xl mr-auto text-left pl-16 relative z-10">
        <h2 className="font-poppins font-bold text-4xl text-[#30e8b0] mb-6">
          Нашият подход
        </h2>
        <p className="font-inter text-3xl text-white leading-snug mb-6">
          Нашият подход съчетава прецизност и креативност:
        </p>
        <ul className="list-disc pl-6 marker:text-white font-inter text-3xl text-white leading-snug space-y-6">
          <li>Storyliving вместо storytelling – не просто да чуеш история, а да я преживееш.</li>
          <li>Мултисетивни изживявания – комбинация от звук, визия, вкус и атмосфера.</li>
          <li>Устойчивост и автентичност – събития с грижа към околната среда и с истински човешки елемент.</li>
          <li>Instagrammable моменти – детайли, които са създадени да се споделят и да живеят отвъд самото събитие.</li>
        </ul>
      </div>
      </div>
      {/* снимка в кръг */}
      <div className="order-2 md:order-1 mx-auto w-[82vw] h-[84vw] max-w-[520px] max-h-[520px] md:w-[720px] md:h-[520px] rounded-full relative z-10">
        <img
          src="55.svg"
          alt="Корпоративни събития"
          className="block w-full h-full object-cover select-none rounded-full"
        />
      </div>
    </div>
  </div>
</section>



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
  
  );
};

export default ZExperience;