import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Corporate = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      <Helmet>
  <title>Корпоративни събития и тиймбилдинги | Events Z Vision</title>
  <meta name="description" content="Организация на корпоративни събития, тиймбилдинги и продуктови лансирания. Предлагаме концепции с емоция и професионализъм – от фирмено парти до корпоративен ритрийт." />
</Helmet>

<h1 className="sr-only">Корпоративни събития с визия и въздействие</h1>
      {/* HERO */}
      <section className="relative bg-cover bg-center overflow-hidden h-full isolate py-10 sm:py-12 md:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('website C1 design EZV.svg')" }}
        />

        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-40 lg:pt-50 pb-6 sm:pb-10 md:pb-16">
          <h2 className="text-[34px] sm:text-5xl md:text-6xl lg:text-6xl font-poppins font-semibold text-[#c1ff72] text-center mt-4 sm:mt-8 md:mt-12 mb-[90px] sm:mb-[100px] md:mb-[110px] lg:mb-[130px]">
            Корпоративни <span className="text-white">събития</span>
          </h2>

          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-[#c1ff72] text-center mt-6 sm:mt-10 md:mt-16 max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-[90rem] mx-auto leading-relaxed">
            Знаем, че бизнесът не се измерва само в цифри, а и в <span className="text-white">преживяванията</span>, които сплотяват хората зад него.
            Затова <span className="text-white">създаваме събития</span>, които оставят следа – не само във вашите колеги, гости, но и във вашия бранд.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="mt-12 md:mt-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-20 gap-x-10 md:gap-x-16 lg:gap-x-24 xl:gap-x-28 place-items-stretch">

            {/* Карта 1 */}
            <div className="relative w-full z-20">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-[#c1ff72] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
              />
              <div className="relative bg-[#c1f772] border-2 border-white rounded-xl shadow-xl text-center overflow-hidden px-6 md:px-8 pt-8 md:pt-10 pb-40 md:pb-64 min-h-[420px] md:min-h-[500px]">
                <Link
                to={"/teambuildings"}>
                <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] hover:text-[#075994] mb-16 md:mb-[114px]">
                  Тиймбилдинги
                </h3>
                </Link>
                <p className="text-base md:text-2xl font-inter font-normal text-[#2f492f] leading-relaxed mb-6 md:mb-[32px] max-w-[34ch] md:max-w-none mx-auto">
                  Ако искаш да стигнеш <span className="font-bold">бързо</span> - тръгни сам, но ако искаш да стигнеш
                  <span className="font-bold">далеч</span> тръгнете <span className="font-bold">заедно...</span>
                </p>
                <img
                  src="2.svg"
                  alt="Корпоративни събития"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-96 lg:w-[28rem] h-auto object-contain pointer-events-none"
                />
              </div>
            </div>

            {/* Карта 2 */}
            <div className="relative w-full z-20">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-[#c1ff72] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
              />
              <div className="relative bg-[#c1f772] border-2 border-white rounded-xl shadow-xl text-center overflow-hidden px-6 md:px-8 pt-8 md:pt-10 pb-40 md:pb-64 min-h-[420px] md:min-h-[500px]">
                <Link to={"/company"}>
                <h3 className="text-[2rem] font-mонтserrat font-bold text-[#2f492f] hover:text-[#075994] mb-10 md:mb-24 leading-relaxed">
                  Фирмени <br />партита
                </h3>
                </Link>
                <p className="text-base md:text-2xl font-inter font-normal text-[#2f492f] mb-12 md:mb-[90px] leading-relaxed max-w-[34ch] md:max-w-none mx-auto">
                  Отпразнувайте <span className="font-bold">успехите</span> заедно!
                </p>
                <img
                  src="3.svg"
                  alt="Корпоративни събития"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-96 lg:w-[28rem] h-auto object-contain pointer-events-none"
                />
              </div>
            </div>

            {/* Карта 3 */}
            <div className="relative w-full z-20">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-[#c1ff72] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] -z-10"
              />
              <div className="relative bg-[#c1f772] border-2 border-white rounded-xl shadow-xl text-center overflow-hidden px-6 md:px-8 pt-8 md:pt-10 pb-36 md:pb-64 min-h-[420px] md:min-h-[500px]">
                <Link to={"/conferences"}>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-[#2f492f] hover:text-[#075994] mb-10 md:mb-20 leading-relaxed">
                  Конферинции Семинари <span className="whitespace-nowrap">Работни срещи</span>
                </h3>
                </Link>
                <p className="text-base md:text-2xl font-inter font-normal text-[#2f492f] mb-6 md:mb-[70px] leading-relaxed max-w-[34ch] md:max-w-none mx-auto">
                  Недей да ги мислиш толкова <span className="font-bold">- ние ще се погрижим!</span>
                </p>
                <img
                  src="1.svg"
                  alt="Корпоративни събития"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[58%] md:w-72 h-auto object-contain pointer-events-none"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TEXT STRIP */}
      <section className="mt-16 relative z-[10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid place-items-stretch p-6 rounded-3xl bg-[#f6f6f6]">
            <p className="text-3xl text-[#075994] font-inter font-semibold text-center">
              Всяко <span className="text-[#f96e0c]">корпоративно събитие</span> е повече от дата в календара – то е момент, който обединява хората зад
              една обща идея. Независимо дали става дума за <span className="text-[#f96e0c]">тиймбилдинг, фирмено парти или бизнес конференция</span>,
              то носи възможност да изградите връзки, да вдъхновите екипа си и да <span className="text-[#f96e0c]">оставите</span> <span className="text-[#f96e0c]">впечатление</span>, което
              се помни дълго!
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mt-16 relative isolate">
        <img
          src="43.svg"
          alt="Декор"
          className="pointer-events-none absolute z-[-10] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-auto object-contain opacity-70"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            <div className="max-w-2xl mr-auto text-left">
              <h2 className="font-poppins font-bold text-4xl text-[#c1ff72] pb-6">
                Защо ние?
              </h2>
              <p className="font-inter font-normal text-3xl text-[#c1ff72] leading-relaxed">
                В <span className="font-bold">Events Z Vision</span> подхождаме към корпоративните събития като към преживявания със смисъл. За нас те не са
                просто добре изпълнена програма, а внимателно изградена история, в която всеки детайл има значение – от
                атмосферата и пространството, до усещането, което хората ще носят със себе си след края му.
              </p>
            </div>

            {/* Кръгло изображение — мобилно responsive */}
            <div className="mx-auto w-[82vw] h-[84vw] max-w-[720px] max-h-[520px] md:w-[720px] md:h-[520px] rounded-full bg-[#075994] ring-8 ring-[#075994] relative z-10">
              <img
                src="website Co3 design EZV.svg"
                alt="Корпоративни събития"
                className="block w-full h-full object-cover select-none rounded-full [clip-path:circle(50%_at_50%_50%)]"
              />
            </div>
          </div>
        </div>
      </section>

{/* APPROACH */}
<section className="mt-16 relative isolate">
  <img
    src="43.svg"
    alt="Декор"
    className="pointer-events-none absolute z-[-10] left-[50%] top-2/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-auto object-contain opacity-70"
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10 relative">
      {/* Текст — първи на mobile, втори на desktop */}
      <div className="order-1 md:order-2 max-w-2xl mr-auto text-left md:pl-16 relative z-10">
        <h2 className="font-poppins font-bold text-4xl text-[#c1ff72] mb-6">
          Нашият подход
        </h2>
        <p className="font-inter text-3xl text-[#c1ff72] leading-snug mb-6">
          Нашият подход съчетава прецизност и креативност:
        </p>
        <ul className="list-disc pl-6 marker:text-white font-inter text-3xl text-[#c1ff72] leading-snug space-y-6">
          <li>професионална организация, която освобождава вас и екипа ви от стреса;</li>
          <li>авторски идеи и storytelling елементи, които придават уникален характер на всяко събитие;</li>
          <li>баланс между елегантност и свежест</li>
        </ul>
      </div>

      {/* Снимка — втора на mobile, първа на desktop */}
      <div className="order-2 md:order-1 mx-auto w-[82vw] h-[84vw] max-w-[720px] max-h-[520px] md:w-[720px] md:h-[520px] rounded-full bg-[#075994] ring-8 ring-[#075994] relative z-10">
        <img
          src="website Co4 design EZV.svg"
          alt="Корпоративни събития"
          className="block w-full h-full object-cover select-none rounded-full [clip-path:circle(50%_at_50%_50%)]"
        />
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
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
  );
};

export default Corporate;
