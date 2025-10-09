import React from "react";
import { Link } from "react-router-dom";

const Weddings = () => {
  return (
    <div className="min-h-screen bg-[#3b84b6] pb-10">
      <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B21.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-40 pb-7 md:pb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-semibold text-[#ebee68] text-center mb-20 md:mb-40">
            Организация на <span className="text-white">сватби</span>
          </h2>
{/*backdrop-blur-md*/}
          <div className="mx-auto md:w-[600px] backdrop-blur-md aspect-square rounded-full border-4 border-[#ebee68] grid place-items-center p-6 md:p-10">
            <p className="text-1xl md:text-3xl font-inter font-normal text-[#ebee68] text-center leading-relaxed">
              <span className="text-white">Сватбата</span> е един от най-специалните дни в живота – момент, който остава завинаги в спомените. За да бъде всичко така, както сте мечтали, е нужно не само вдъхновение, но и <span className="text-white">професионална организация</span>, която да се погрижи за всеки детайл.
            </p>
          </div>
        </div>
      </section>

    <section className="py-6 relative z-[10]">
    <div className="mx-auto p-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div className="relative text-[#ebee68] font-inter font-normal">
    <div className="grid grid-cols-1 md:grid-cols-2 item-start gap-8 mad:gap-12">
<div className="space-y-6 md:pr-8">
  <h2 className="font-poppins font-bold text-4xl pb-2">
    Нашите услуги
  </h2>
  <ul className="list-disc pl-6 space-y-4 text-white text-2xl md:text-2xl leading-relaxed font-inter marker:text-[#ebee68]">
    <li>
      <span className="font-bold text-[#ebee68]">Сватбен планер</span><span className="text-[#ebee68]"> – цялостно планиране на сватбата, график, консултации и подбор на доставчици. </span>
    </li>
    <li>
      <span className="font-bold text-[#ebee68]">Сватбен координатор</span><span className="text-[#ebee68]"> – в деня на събитието следим за безупречно протичане и бързо решаваме всяка ситуация. </span>
    </li>
    <li>
      <span className="font-bold text-[#ebee68]">Декорация и флорални аранжировки</span><span className="text-[#ebee68]"> – от класически елегантни до модерни и тематични визии. </span>
    </li>
    <li>
      <span className="font-bold text-[#ebee68]">Кетъринг и сладкарство</span><span className="text-[#ebee68]"> – менюта, съобразени с вашия вкус и стил, както и сватбени торти и десерти. </span>
    </li>
    <li>
      <span className="font-bold text-[#ebee68]">Музика, тематични активности и ритуали, шоу програми</span><span className="text-[#ebee68]"> – музиканти, диджеи, танцови изпълнители и специални артистични акценти. </span>
    </li>
    <li>
      <span className="font-bold text-[#ebee68]">Водещи и аниматори</span><span className="text-[#ebee68]"> – за да създадат ритъм и настроение през цялото събитие. </span>
    </li>
    <li>
      <span className="font-bold text-[#ebee68]">Фотография и видеозаснемане</span><span className="text-[#ebee68]"> – професионално уловени моменти, които ще пазите цял живот. </span>
    </li>
    <li>
      <span className="font-bold text-[#ebee68]">Локации и логистика</span><span className="text-[#ebee68]"> – съдействие при избор на зала, ресторант, настаняване и транспорт. </span>
    </li>
    <li>
      <span className="font-bold text-[#ebee68]">Организиране на моминско и ергенско парти</span>
    </li>
  </ul>
</div>

                                  {/* IMG 6 */}
          <div className="justify-self-center md:justify-self-end self-start">
          <div className="w-[350px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#ebee68] grid place-items-center pb-8 pl-8 md:pl-10 md:mt-32">
              <figure className="mt-10 justify-center">
                <img
                  src="48.svg"
                  alt="CEGE"
                  className="w-[90%] h-auto object-contain"
                />
              </figure>
              </div>
              </div>
            </div>
        </div>
           <img
            src="43.svg"
            alt="Декор"
            className="pointer-events-none absolute z-[-10]
               left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
            />
      </div>
    </section>

<section className="mt-16 mb-10 relative isolate">
  {/* Декор – зад всичко */}
  <img
    src="43.svg"
    alt="Декор"
    className="pointer-events-none absolute z-[-10] 
               left-[40%] top-2/3 -translate-x-1/2 -translate-y-1/2
               w-[750px] h-auto object-contain opacity-70"
  />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* ред: снимка (ляво) + текст (дясно) */}
    <div className="flex flex-col md:flex-row items-start md:items-center relative">
      {/* текст – над декора */}
      <div className="order-1 md:order-2 max-w-2xl mr-auto text-left md:pl-16 relative z-10">
      <div className="max-w-2xl mr-auto text-left pl-16 relative z-10">
        <h2 className="font-poppins font-bold text-4xl text-[#ebee68] mb-6">
          Нашият подход
        </h2>
        <p className="font-inter text-3xl text-[#ebee68] leading-snug mb-6">
        Всяко събитие започва с разговор – за вашите мечти, идеи и очаквания. Изслушваме ви внимателно и превръщаме желанията ви в конкретна концепция. След това поемаме цялата организация – от локацията и декорацията, до видеозаснемането и финалните детайли. Нашият подход съчетава креативност и прецизност, за да гарантира, че събитието ще бъде уникално и автентично, както е и вашата история.
        </p>
      </div>
      </div>
            {/* снимка в кръг */}
      <div className="order-2 md:order-1 w-[350px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#ebee68] grid place-items-center pb-8 pl-8 md:pl-10">
        <figure className="mt-10 justify-center">
        <img
          src="49.svg"
          alt="Корпоративни събития"
          className="w-[90%] h-auto object-contain"
        />
        </figure>
      </div>
    </div>
  </div>
</section>

    <section className="py-6 relative z-[10]">
    <div className="mx-auto p-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div className="relative text-[#ebee68] font-inter font-normal">
    <div className="grid grid-cols-1 md:grid-cols-2 item-start gap-8 mad:gap-12">
<div className="space-y-6 md:pr-8">
  <h2 className="font-poppins font-bold text-4xl pb-2">
    Възможност за частична организация от наша страна 
  </h2>
<p className="text-2xl mb:3xl">
    Не всяка двойка има нужда от цялостна организация – понякога младоженците искат да бъдат активно включени и сами да поемат част от подготовката. В такива случаи ние предлагаме частична организация, при която се грижим за определени елементи, докато вие запазвате контрол върху останалото.
Можем да съдействаме за избор на локация, декорация, музика, водещ, кетъринг или професионално фото и видеозаснемане, докато други детайли – като например списъка с гости или подбора на облекла – остават изцяло във ваши ръце. Така получавате гъвкавост и спокойствие, като същевременно знаете, че ключовите части от сватбата ви са поверени на професионалисти.
</p>
</div>

                                  {/* IMG 6 */}
          <div className="justify-self-center md:justify-self-end self-start">
          <div className="w-[350px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#ebee68] grid place-items-center pb-8 pl-8 md:pl-10 mt-[22px]">
              <figure className="mt-10 justify-center">
                <img
                  src="50.svg"
                  alt="CEGE"
                  className="w-[90%] h-auto object-contain"
                />
              </figure>
              </div>
              </div>
            </div>
        </div>
           <img
            src="43.svg"
            alt="Декор"
            className="pointer-events-none absolute z-[-10]
               left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
            />
      </div>
    </section>

             {/* Call to action mt-20 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto relative z-[2]*/}
          <div className="relative z-[20] mt-6 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-2xl font-inter font-bold text-[#075994] mb-5 max-w-2xl mx-auto">
              Вашата сватба е вашата история. <span className="text-[#f96e0c]">Нека я разкажем заедно</span> – с любов, елегантност и внимание към всеки детайл!
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

export default Weddings;