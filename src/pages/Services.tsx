import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      {/* Hero */}
      <section
        className="bg-white py-20 bg-cover bg-center min-h-[80vh]"
        style={{ backgroundImage: "url('website 2 service background design EZV.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-semibold text-white pt-16 mb-64">
              <span className="text-[#c1ff72]">Нашите</span> услуги
            </h1>
            <p className="text-3xl text-white max-w-6xl mx-auto leading-snug font-playfair font-semibold">
              <span className="text-[#c1ff72]">Организацията на събития е</span> изкуство
              <span className="text-[#c1ff72]">, в което всеки детайл има значение. В</span> Events Z Vision{' '}
              <span className="text-[#c1ff72]">предлагаме пълна гама услуги за</span> корпоративни събития, лични празници и нестандартни “Z Experience” формати.{' '}
              <span className="text-[#c1ff72]">Събитията, които създаваме вдъхновяват, обединяват и оставят следа.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Категории услуги */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
        <h2 className="text-5xl font-poppins font-bold text-center text-white p-20">
          <span className="text-[#c1ff72]">Категории</span> услуги
        </h2>

        {/* Две колони: ляво (карта) + дясно (текст) */}
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-32">

          <img src="website design N EZV.png" alt="Image" 
         className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-auto object-contain z-0 opacity-70" />

          {/* Лява колона: зелено каре със „офсет“ бяла плочка */}
          <div className="relative w-full lg:w-[420px] z-10">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 w-full h-full rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            />

            <div className="relative bg-[#c1f772] rounded-xl shadow-xl text-center overflow-hidden
                            px-8 pt-10 pb-56 md:pb-64 min-h-[500px] md:min-h-500px]">
              <h3 className="text-4xl font-montserrat font-bold text-[#2f492f] mb-4">
                Корпоративни<br/> събития
              </h3>

              <p className="text-lg md:text-2xl font-inter font-normal text-[#2f492f] leading-relaxed max-w-[34ch] md:max-w-none mx-auto">
                Планирате <span className="font-bold">тиймбилдинг, конференция</span> или друго
                фирмено събитие – доверете се на нас – <span className="font-bold">в сигурни ръце сте!</span>
              </p>

              <img
                src="website 5 design EZV.svg"
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
            <p className="text-2xl text-[#c1ff72] font-inter font-normal leading-snug max-w-2xl">
              Фирмени партита, тиймбилдинги, семинари и работни срещи – всичко,
              от което бизнесът ви има нужда, за да изгради доверие,
              да сплоти екипа си и да представи своята визия. Ние сме до вас,
              за да превърнем всяко корпоративно събитие в преживяване със смисъл,
              подкрепено от професионална организация и внимание към детайла.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <div className="mt-20 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-inter font-semibold mb-4 text-[#075994]">
          Искате ли вашето събитие да бъде повече от формалност?
        </h2>
        <p className="text-xl font-inter font-semibold text-[#f96e0c] mb-8 max-w-2xl mx-auto">
          Свържете се с нас и заедно ще създадем преживяване, което ще се помни.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/inquiry"
            className="bg-[#c1ff72] hover:bg-[#2f492f] text-[#075994] hover:text-[#c1ff72] px-8 py-4 rounded-lg text-lg font-poppins font-bold transition-colors duration-200"
          >
            Кликни тук, за да направиш запитване
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
