import React from "react";
import { Link } from "react-router-dom";

const Conferences = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B15.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-30 pb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-[#c1ff72] text-center mb-40">
            Конференции, семинари, <span className="text-white">работни срещи</span>
          </h2>
{/*backdrop-blur-md*/}
          <div className="mx-auto w-[370px] md:w-[430px] lg:w-[430px] backdrop-blur-md aspect-square rounded-full border-2 border-[#c1ff72] grid place-items-center p-6 md:p-10">
            <p className="text-xl md:text-3xl lg:text-3xl font-inter font-normal text-[#c1ff72] text-center leading-relaxed">
              Ние <span className="text-white">ще<br /> организираме</span> <br />вашата работна среща, конференция или семинар според вашите очаквания и желания
            </p>
          </div>
        </div>
      </section>

<section className="py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Row 1: 3 елемента */}
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 text-[#c1ff72] font-caveat">
      {/* 1) Модераторски и координаторски услуги */}
      <li className="text-center">
        <img
          src="18.svg"
          alt="Модераторски и координаторски услуги"
          className="mx-auto rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg"
        />
        <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
          Модераторски и <br /> координаторски услуги
        </h3>
      </li>

      {/* 2) Богат избор от зали за събития и работни срещи */}
      <li className="text-center">
        <img
          src="20.svg"
          alt="Богат избор от зали за събития и работни срещи"
          className="mx-auto rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg"
        />
        <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
          Богат избор от зали <br /> за събития и срещи
        </h3>
      </li>

      {/* 3) Професионално видеозаснемане и озвучаване */}
      <li className="text-center">
        <img
          src="22.svg"
          alt="Професионално видеозаснемане и озвучаване"
          className="mx-auto rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg"
        />
        <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
          Професионално <br /> видеозаснемане и озвучаване
        </h3>
      </li>

      {/* Row 2: 2 елемента, центрирани */}
      <li className="col-span-full">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-12">
          {/* 4) Кетъринг и оборудване */}
          <li className="text-center">
            <img
              src="19.svg"
              alt="Кетъринг и оборудване"
              className="mx-auto rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg"
            />
            <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
              Кетъринг и оборудване
            </h3>
          </li>

          {/* 5) Брандирани подаръци */}
          <li className="text-center">
            <img
              src="21.svg"
              alt="Брандирани подаръци"
              className="mx-auto rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg"
            />
            <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
              Брандирани подаръци
            </h3>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</section>

      <section className="mt-16 relative isolate z-[10]">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid place-items-stretch p-6 rounded-3xl bg-[#f6f6f6]">
            <img
            src="43.svg"
            alt="Декор"
            className="pointer-events-none absolute z-[-10]
               left-1/2 top-[130%] -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
            />
           <p className="text-2xl md:text-3xl text-[#075994] font-inter font-semibold text-center">
            Всяка бизнес среща е <span className="text-[#f96e0c]">възможност</span> – да споделите знания, да представите идеи и да изградите нови партньорства. Успешното събитие не се измерва само в добре подредена програма, а в
            <span className="text-[#f96e0c]"> начина, по който участниците го преживяват</span>.
          </p>
          </div>
       </div>
    </section>

    <section className="py-6 relative z-[10]">
      <div className="mx-auto p-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative text-[#c1ff72] font-inter font-normal">
          <div className="grid grid-cols-1 md:grid-cols-2 item-start gap-8 mad:gap-12">

          <div className="space-y-6 md:pr-8">
          <h2 className="font-poppins text-center md:text-left font-bold text-3xl md:text-4xl pb-6">
            <span className="mb:whitespace-nowrap">Защо да избереш професионална</span> организация?
          </h2>

          <p className="text-xl md:text-3xl leading-relaxed text-left">
            Когато организацията е цялостна, всеки детайл работи за твоята цел – от подбора на място и 
            техническото обезпечаване, до начина, по който гостите се чувстват ангажирани и вдъхновени. 
            Добре подготвената конференция или семинар създава среда за фокус и продуктивност
            <br />
            <br />
            Независимо дали става дума за голяма конференция, специализиран семинар или работна среща в по-малък 
            формат, едно е сигурно – вниманието към детайла и професионалната организация превръщат събитието във 
            възможност за развитие и нови хоризонти.
          </p>
          </div>
                                  {/* IMG 6 */}
          <div className="justify-self-center md:justify-self-end self-start">
          <div className="w-[380px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#c1ff72] grid place-items-center pb-8 pl-7 md:pl-10 mt-32">
              <figure className="mt-10 justify-center">
                <img
                  src="17.svg"
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
               left-1/2 top-[100%] -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
            />
      </div>
    </section>

             {/* Call to action */}
             <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-[20] mt-6 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto">
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

export default Conferences;
