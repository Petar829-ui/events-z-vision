import React from "react"
import { Link } from "react-router-dom";

const Personal = () => {
  return (
    <div className="min-h-screen bg-[#3b84b6] pb-10">
        <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B20.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-36 pb-16">
            <h2 className="text-6xl font-poppins font-semibold text-[#ebee68] text-center mt-20">
                Лични <span className="text-white">събития</span>
            </h2>
            <p className="text-3xl font-playfair font-bold text-[#ebee68] text-center mt-20 md:mt-56 max-w-6xl md:max-w-7xl lg:max-w-[90rem] mx-auto leading-relaxed">
            <span className="text-white">Личните празници</span> са моменти, които <span className="text-white">остават завинаги</span> – първи рождени дни, сватби, юбилеи, кръщенета или просто специални поводи, които искаме да споделим с най-близките си хора. Те са част от историята ни и 
            <span className="text-white">заслужават внимание, грижа и подходяща организация</span>, която да превърне деня в истинско преживяване.
            </p>
            </div>
        </section>
<section className="mt-16">
  <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2  gap-y-20 gap-x-10 md:gap-x-16 lg:gap-x-24 xl:gap-x-28 place-items-stretch">
      
      {/* Карта 1 */}
      <div className="relative w-full z-20">
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 w-full h-full rounded-xl bg-white border-4 border-[#ebee68] bg:white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
        />
        <div className="relative bg-[#ebee68] border-4 border-white rounded-xl shadow-xl text-center overflow-show px-8 pt-10 pb-56 md:pb-64 min-h-[500px]">
          <h3 className="text-[2rem] font-montserrat font-bold text-[#075994] mb-[40px]">
            Сватби
          </h3>
{/* ляво позициониран блок, но текстът вътре е центриран */}
<div className="w-full flex justify-start">
  <p className="text-center max-w-[24ch] md:max-w-[23ch]
                 text-1xl md:text-2xl font-inter font-normal text-[#075994]
                 leading-relaxed -mb-[54px] pr-2 md:pr-0">
    Всеки детайл е част от <span className="font-bold">приказката</span>. 
    Нека я създадем <span className="font-bold">заедно</span>! <br /><br />
    Перфектната сватба не е мит — просто ви трябва добър сватбен агент 
    (<span className="font-bold">за щастие сте на правилното място</span>)
  </p>
</div>

          <img
            src="47.svg"
            alt="Корпоративни събития"
            className="absolute bottom-0 left-1/2 -translate-x-2/2 ml-8 w-80 md:w-96 h-auto"
          />
        </div>
      </div>

      {/* Карта 2 */}
      <div className="relative w-full z-20 ml-auto md:justify-self-end">
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-4 border-[#ebee68] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
        />
        <div className="relative bg-[#ebee68] border-4 border-white rounded-xl shadow-xl text-center overflow-shown px-8 pt-10 pb-56 md:pb-64 min-h-[500px]">
          <h3 className="text-4xl font-montserrat font-bold text-[#075994] mb-24 leading-relaxed">
            Лични празници
          </h3>
          <p className="text-lg md:text-2xl font-inter font-normal text-[#075994] mb-[71px] leading-relaxed max-w-[34ch] md:max-w-none mx-auto">
            Вие <span className="font-bold">празнувате</span>, ние се грижим за всичко останало.
          </p>

          {/* двете изображения вдясно */}
          <img
            src="46.svg"
            alt="Корпоративни събития"
            className="absolute bottom-0 left-[-30px] w-60 md:w-72"
          />
          <img
            src="46.svg"
            alt="Корпоративни събития"
            className="absolute bottom-0 right-[-32px] w-60 md:w-72"
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
               w-[750px] h-auto object-contain opacity-70"
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* ред: текст (ляво) + снимка (дясно) */}
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
      <div className="max-w-2xl mr-auto text-left">
        <h2 className="font-poppins font-bold text-4xl text-[#ebee68] pb-6">
          Защо ние? 
        </h2>
        <p className="font-inter font-normal text-3xl text-[#ebee68] leading-relaxed">
        Да поверите организацията на личното си събитие на професионалисти означава да си подарите спокойствие и увереност, че всеки детайл ще бъде изпипан. Ние вярваме, че празниците не са просто формалност, а изживяване, което трябва да носи емоция и да се помни. Работим със селектирана мрежа от партньори – от флорална декорация и кетъринг, до фотографи и музиканти – за да ви осигурим не просто услуга, а цялостно изживяване.
        </p>
      </div>

      {/* снимка вдясно, без absolute и без overflow-hidden */}
      <div className="mx-auto w-[82vw] h-[84vw] max-w-[720px] max-h-[520px] md:w-[720px] md:h-[520px] rounded-full relative z-10">
        <img
          src="44.svg"
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
               left-[40%] top-2/3 -translate-x-1/2 -translate-y-1/2
               w-[750px] h-auto object-contain opacity-70"
  />

    <img
    src="43.svg"
    alt="Декор"
    className="pointer-events-none absolute z-[-10] 
               left-[60%] top-3/4 -translate-x-2/2 -translate-y-1/2
               w-[750px] h-auto object-contain opacity-70"
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* ред: снимка (ляво) + текст (дясно) */}
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10 relative">
      {/* снимка в кръг (без absolute и без overflow-hidden) */}
      <div className="order-1 md:order-2 max-w-2xl mr-auto text-left md:pl-16 relative z-10">
              {/* текст – над декора */}
      <div className="max-w-2xl mr-auto text-left relative z-10">
        <h2 className="font-poppins font-bold text-4xl text-[#ebee68] mb-6">
          Нашият подход
        </h2>
        <p className="font-inter text-3xl text-[#ebee68] leading-snug mb-6">
        Всяко събитие започва с разговор – за вашите мечти, идеи и очаквания. Изслушваме ви внимателно и превръщаме желанията ви в конкретна концепция. След това поемаме цялата организация – от локацията и декорацията, до видеозаснемането и финалните детайли. Нашият подход съчетава креативност и прецизност, за да гарантира, че събитието ще бъде уникално и автентично, както е и вашата история.
        </p>
      </div>
      </div>
      <div className="order-2 md:order-1 mx-auto w-[82vw] h-[84vw] max-w-[520px] max-h-[520px] md:w-[720px] md:h-[520px] rounded-full relative z-10">
        <img
          src="45.svg"
          alt="Корпоративни събития"
          className="block w-full h-full object-cover select-none rounded-full [clip-path:circle(50%_at_50%_50%)]"
        />
      </div>
    </div>
    </div>
</section>

             {/* Call to action */}
      <div className="mt-20 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto relative z-[2]">
        <p className="text-2xl font-inter font-bold text-[#075994] mb-8 max-w-2xl mx-auto">
        Вашият специален ден заслужава повече от организация – заслужава магия. 
        <span className="text-[#f96e0c]"> Свържете се с нас и нека заедно превърнем личното ви събитие в преживяване, което ще остане завинаги в сърцата.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/inquiry"
            className="bg-[#ebee68] hover:bg-[#afb230] text-[#075994] hover:text-[#ebee68] px-8 py-4 rounded-lg text-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Кликни тук, за да направиш запитване
          </Link>
        </div>
      </div>

      </div>
  
  );
};

export default Personal;