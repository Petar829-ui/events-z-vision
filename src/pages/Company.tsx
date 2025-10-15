import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      <section className="relative h-[119ch] overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B14.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-40 pb-16">
          <h2 className="text-5xl md:text-6xl font-poppins font-semibold text-[#c1ff72] text-center mb-40">
            Фирмени <span className="text-white">партита</span>
          </h2>

          <div className="mx-auto w-[300px] md:w-[400px] aspect-square backdrop-blur-md rounded-full border-2 border-[#c1ff72] grid place-items-center p-6 md:p-10">
            <p className="text-2xl md:text-3xl font-inter font-normal text-[#c1ff72] text-center leading-relaxed">
              Всичко за вашето<br />
              <span className="text-white">фирмено парти</span> на<br />
              едно място и <span className="text-white">на един клик разстояние!</span>
            </p>
          </div>
        </div>
      </section>

<section className="py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* 4 горе + 1 долу. Снимките са същите; само текстът и редът са сменени. */}
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 place-items-center text-[#c1ff72] font-caveat">
      {/* 1) Тематични партита (16.svg) */}
      <li className="text-center">
        <img
          src="16.svg"
          alt="Тематични партита"
          className="rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg"
        />
        <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
          Кетъринг и <br /> оборудване
        </h3>
      </li>

      {/* 2) Музикални и танцови програми и изпълнители (13.svg или друга, но НЕ добавям нова) */}
      <li className="text-center">
        <img
          src="13.svg"
          alt="Музикални и танцови програми и изпълнители"
          className="mx-auto rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg"
        />
        <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
          Музикални и танцови програми <br /> и изпълнители
        </h3>
      </li>

      {/* 3) Кетъринг и оборудване (14.svg) */}
      <li className="text-center">
        <img
          src="14.svg"
          alt="Кетъринг и оборудване"
          className="rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg"
        />
        <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
          Тематични <br /> партита
        </h3>
      </li>

      {/* 4) Водещи (15.svg) */}
      <li className="text-center">
        <img
          src="15.svg"
          alt="Водещи"
          className="mx-auto rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg mb-10"
        />
        <h3 className="mt-4 text-3xl md:text-4xl leading-tight">Стенд ъп комеди</h3>
      </li>

      {/* Долен ред: Богат избор от зали и заведения (12.svg) */}
      <li className="col-span-2 md:col-span-4 text-center">
        <img
          src="12.svg"
          alt="Богат избор от зали и заведения"
          className="mx-auto rounded-full aspect-square w-28 sm:w-32 md:w-36 xl:w-40 object-cover shadow-lg"
        />
        <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
          Богат избор от <br /> зали и заведения
        </h3>
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
          <h2 className="font-poppins font-bold text-center md:text-left text-3xl md:text-4xl pb-6">
            <span className="md:whitespace-nowrap">Защо да избереш професионална</span> организация?
          </h2>

          <p className="text-xl md:text-3xl leading-relaxed text-left">
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

export default Company;
