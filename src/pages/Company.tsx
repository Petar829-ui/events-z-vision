import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      <section className="relative min-h-[80vh] overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B14.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-40 pb-16">
          <h2 className="text-6xl font-poppins font-semibold text-[#c1ff72] text-center mb-40">
            Фирмени <span className="text-white">партита</span>
          </h2>

          <div className="mx-auto w-[400px] aspect-square backdrop-blur-md rounded-full border-2 border-[#c1ff72] grid place-items-center p-6 md:p-10">
            <p className="text-3xl font-inter font-normal text-[#c1ff72] text-center leading-relaxed">
              Всичко за вашето<br />
              <span className="text-white">фирмено парти</span> на<br />
              едно място и <span className="text-white">на един клик разстояние!</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto px-4">
          <div className="relative text-[#c1ff72] font-caveat font-normal md:h-[380px] lg:h-[440px]">
            {/* 1) Богат избор... */}
            <h2 className="text-4xl md:text-5xl leading-tight text-center md:text-center
                           md:absolute md:left-[14%] md:top-[18%]
                           lg:left-[15%] lg:top-[17%]
                           xl:left-[16%] xl:top-[16%]
                           2xl:left-[20%] 2xl:top-[15%]">
              Богат избор от зали и <br />заведения
            </h2>

            {/* IMG 1 */}
            <figure className="mt-10 flex justify-center">
              <img
                src="12.svg"
                alt="CEGE"
                className="
                  block mx-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]
                  md:absolute md:left-[13%] md:top-[45%]
                  lg:left-[15%] lg:top-[47%]
                  xl:left-[10%] xl:top-[48%]
                  2xl:left-[21%] 2xl:top-[45%]
                  [@media(min-width:1920px)_and_(max-width:1920px)_and_(min-height:1080px)_and_(max-height:1080px)]:left-[11%]
                  [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:top-[40%]
                  [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:left-[12%]
                  [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:w-[200px]
                "
              />
            </figure>

            {/* 2) Кетъринг и оборудване */}
            <h2 className="text-4xl md:text-5xl leading-tight text-left md:text-center
                           md:absolute md:left-[29%] md:top-[55%] md:-translate-x-1/2
                           lg:left-[32%] lg:top-[54%]
                           xl:left-[33%] xl:top-[53%]
                           2xl:left-[37%] 2xl:top-[52%]">
              Кетъринг и<br /> оборудване
            </h2>

            {/* IMG 2 */}
            <figure className="mt-10 flex justify-center">
              <img
                src="14.svg"
                alt="CEGE"
                className="
                  block mx-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]
                  md:absolute md:left-[42%] md:top-[45%]
                  lg:left-[43%] lg:top-[47%]
                  xl:left-[44%] xl:top-[48%]
                  2xl:left-[45%] 2xl:top-[45%]
                  [@media(min-width:1920px)_and_(max-width:1920px)_and_(min-height:1080px)_and_(max-height:1080px)]:left-[42%]
                  [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:top-[40%]
                  [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:left-[45%]
                  [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:w-[200px]
                "
              />
            </figure>

            {/* 3) Тематични партита */}
            <h2 className="text-4xl md:text-5xl leading-tight text-center
                           md:absolute md:left-[44%] md:top-[15%]
                           lg:left-[45%] lg:top-[14%]
                           xl:left-[46%] xl:top-[13%]
                           2xl:left-[47%] 2xl:top-[12%]">
              Тематични <br />партита
            </h2>

            {/* IMG 3 */}
            <figure className="mt-10 flex justify-center">
              <img
                src="16.svg"
                alt="CEGE"
                className="
                  block mx-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]
                  md:absolute md:right-[24%] md:top-[45%]
                  lg:right-[22%] lg:top-[47%]
                  xl:right-[20%] xl:top-[48%]
                  2xl:right-[23%] 2xl:top-[45%]
                  [@media(min-width:1920px)_and_(max-width:1920px)_and_(min-height:1080px)_and_(max-height:1080px)]:right-[19%]
                  [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:top-[40%]
                  [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:right-[12%]
                  [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:w-[200px]
                "
              />
            </figure>

            {/* 4) Музикални и танцови програми... */}
            <h2 className="text-4xl md:text-5xl leading-tight text-center md:text-center
                           md:absolute md:right-[16%] md:top-[16%]
                           lg:right-[15%] lg:top-[15%]
                           xl:right-[4%] xl:top-[14%]
                           2xl:right-[13%] 2xl:top-[13%]">
              Музикални и танцови програми <br />и изпълнители
            </h2>
          </div>

          {/* wave */}
          <div className="relative w-full overflow-visible">
            <svg
              viewBox="-140 10 1640 240"
              preserveAspectRatio="xMidYMid meet"
              className="block w-full h-auto min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] overflow-visible"
              aria-hidden="true"
            >
              <g fill="none" stroke="#c1ff72" strokeWidth="40" strokeLinecap="butt" vectorEffect="non-scaling-stroke">
                <path d="M -140 160 a 90 90 0 0 1 180 0" />
                <path d="M   40 170 a 90 90 0 0 0 180 0" />
                <path d="M  220 160 a 90 90 0 0 1 180 0" />
                <path d="M  400 170 a 90 90 0 0 0 180 0" />
                <path d="M  580 160 a 90 90 0 0 1 180 0" />
                <path d="M  760 170 a 90 90 0 0 0 180 0" />
                <path d="M  940 160 a 90 90 0 0 1 180 0" />
                <path d="M 1120 170 a 90 90 0 0 0 180 0" />
                <path d="M 1300 160 a 90 90 0 0 1 180 0" />
              </g>
            </svg>
          </div>

          {/* Долен блок – 1920×1080 вариант */}
          <div className="mx-auto px-4">
            <div
              className="
                relative text-[#c1ff72] font-caveat font-normal md:h-[380px] lg:h-[440px]
                [@media(min-width:1920px)_and_(max-width:1920px)_and_(min-height:1080px)_and_(max-height:1080px)]:h-[640px]
              "
            >
              <h2 className="text-4xl md:text-5xl leading-tight text-center
                             md:absolute md:left-[14%] md:top-[20%]
                             lg:left-[14%] lg:top-[20%]
                             xl:left-[14%] xl:top-[20%]">
                Водещи
              </h2>

              <h2 className="text-4xl md:text-5xl leading-tight text-center
                             md:absolute md:left-[34%] md:top-[20%]
                             lg:left-[34%] lg:top-[20%]
                             xl:left-[34%] xl:top-[20%]">
                Шоу програми
              </h2>

              {/* IMG 4 */}
              <figure className="mt-10 flex justify-center">
                <img
                  src="13.svg"
                  alt="CEGE"
                  className="
                    block mx-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]
                    md:absolute md:left-[21%] md:top-[-31%]
                    lg:left-[20%] lg:top-[-33%]
                    xl:left-[19%] xl:top-[-34%]
                    2xl:left-[21%] 2xl:top-[-31%]
                    [@media(min-width:1920px)_and_(max-width:1920px)_and_(min-height:1080px)_and_(max-height:1080px)]:left-[19%]
                    [@media(min-width:1920px)_and_(max-width:1920px)_and_(min-height:1080px)_and_(max-height:1080px)]:top-[-20%]
                    [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:top-[-30%]
                    [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:left-[21%]
                    [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:w-[200px]
                  "
                />
              </figure>

              <h2 className="text-4xl md:text-5xl leading-tight text-center
                             md:absolute md:left-[64%] md:top-[40%]
                             lg:left-[64%] lg:top-[40%]">
                Професионално<br /> видеозаснемане и<br /> озвучаване
              </h2>

              <h2 className="text-4xl md:text-5xl leading-tight text-center
                             md:absolute md:left-[78%] md:top-[15%]
                             lg:left-[78%] lg:top-[15%]">
                Стенд ъп комеди
              </h2>

              {/* IMG 5 */}
              <figure className="mt-10 flex justify-center">
                <img
                  src="15.svg"
                  alt="CEGE"
                  className="
                    block mx-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]
                    md:absolute md:right-[14%] md:top-[-31%]
                    lg:right-[12%] lg:top-[-33%]
                    xl:right=[11%] xl:top-[-34%]
                    2xl:right-[22%] 2xl:top-[-31%]
                    [@media(min-width:1920px)_and_(max-width:1920px)_and_(min-height:1080px)_and_(max-height:1080px)]:top-[-14%]
                    [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:top-[-28%]
                    [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:right-[22%]
                    [@media(min-width:1440px)_and_(max-width:1440px)_and_(min-height:900px)_and_(max-height:900px)]:w-[200px]
                  "
                />
              </figure>
            </div>
          </div>
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
           <p className="text-3xl text-[#075994] font-inter font-semibold text-center">
            Всяко <span className="text-[#f96e0c]">фирмено събитие</span> е възможност – да благодарите на екипа си, да впечатлите партньорите си или
            <span className="text-[#f96e0c]"> да представите компанията си</span> по най-добрия начин.
          </p>
          </div>
       </div>
    </section>

    <section className="py-6 relative z-[10]">
      <div className="mx-auto p-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative text-[#c1ff72] font-inter font-normal">
          <div className="grid grid-cols-1 md:grid-cols-2 item-start gap-8 mad:gap-12">

          <div className="space-y-6 md:pr-8">
          <h2 className="font-poppins font-bold text-4xl pb-6">
            <span className="whitespace-nowrap">Защо да избереш професионална</span> организация?
          </h2>

          <p className="text-3xl leading-relaxed text-left">
            Зад една успешна вечер стои не само добра идея, а и цялостна организация,
            в която всеки детайл е на мястото си – от избора на локация и декорация, до атмосферата,
            която гостите ще запомнят.
            <br />
            <br />
            С професионална организация, вкусна храна и  видеозаснемане на най-високо ниво празникът не 
            приключва с последния танц – спомените остават живи, готови да бъдат споделяни и да вдъхновяват 
            отново. Така фирменото парти се превръща в момент, който обединява хората и дълго след края му.
          </p>
          </div>
                                  {/* IMG 6 */}
          <div className="justify-self-center md:justify-self-end self-start">
          <div className="w-[420px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#c1ff72] grid place-items-center pb-8 pl-10 mt-32">
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

             {/* Call to action mt-20 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto relative z-[2]*/}
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
  );
};

export default Company;
