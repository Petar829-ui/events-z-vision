import React from "react";
import { Link } from "react-router-dom";

const MixedTeambuildings = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      {/* HERO */}
      <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B18.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-56 pb-16">
          <h2 className="text-[47px] md:text-6xl lg:text-6xl font-poppins font-semibold text-[#c1ff72] leading-tight text-center">
            Смесени тиймбилдинги <br />
            <span className="text-white">(обучение + развлечение)</span>
          </h2>
          <p className="text-2xl md:text-4xl font-playfair font-semibold text-[#c1ff72] text-center mt-24 max-w-6xl md:max-w-7xl lg:max-w-[90rem] mx-auto leading-relaxed">
            <span className="text-white">Смесените тиймбилдинги </span>
            комбинират най-доброто от двата свята – енергията на забавлението и
            ползите от обучението. Те са идеалното решение за компании, които
            искат <span className="text-white">едновременно да мотивират екипа си и да развият конкретни умения </span>
            в неформална и позитивна атмосфера.
          </p>
        </div>
      </section>

      {/* ДВЕ КОЛОНИ: на мобилен подредени една след друга */}
      <section className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* КОЛОНА 1: Карта → Текст → Снимка */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Карта 1 */}
            <div className="relative w-full max-w-[640px] h-auto">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
              <div className="relative rounded-3xl border-4 border-white bg-[#c1f772] px-6 py-3 grid place-items-center">
                <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
                  Групови активности, съчетаващи забавление с обучение
                </h3>
              </div>
            </div>

            {/* Текст 1 */}
            <p className="font-inter font-normal text-[#c1ff72] text-2xl md:text-3xl leading-tight max-w-[46ch] text-left mb-0 md:mb-16">
              Този тип програми създават динамична среда, в която играта и
              ученето вървят ръка за ръка. Екипът се изправя пред различни
              предизвикателства, които едновременно изискват креативно мислене,
              координация и сътрудничество. Участниците се забавляват заедно,
              докато развиват умения като комуникация, лидерство и стратегическо
              планиране. Подходящи са за компании, които искат да изградят
              силен екипен дух, без да жертват практическата стойност на
              обучението. В резултат се създава общо преживяване, което оставя
              трайни спомени и реални ползи за работната среда
            </p>

            {/* Снимка 1 */}
            <img
              src="29.svg"
              alt="Корпоративни събития"
              className="w-[min(90vw,35rem)] rounded-xl self-start md:self-auto"
            />
          </div>

          {/* КОЛОНА 2: Карта → Текст → Снимка */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Карта 2 */}
            <div className="relative w-full max-w-[640px] h-auto">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
              <div className="relative rounded-3xl border-4 border-white bg-[#c1f772] px-6 py-8 grid place-items-center">
                <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
                  Персонализирани смесени тиймбилдинг активности
                </h3>
              </div>
            </div>

            {/* Текст 2 */}
            <p className="font-inter font-normal text-[#c1ff72] text-2xl md:text-3xl leading-tight max-w-[46ch] text-left">
              Персонализираните формати се разработват спрямо спецификата на
              всяка компания и целите, които тя си поставя. Те могат да
              включват елементи от спортни или кулинарни активности, куизове или
              авторски игри, комбинирани с обучителни модули по теми като работа
              в екип, лидерство или развитие на личностни умения. Така всяко
              събитие е уникално – съобразено с културата на организацията,
              профила на участниците и конкретните предизвикателства пред екипа.
              Този подход гарантира висока ангажираност и ефективност, защото
              хората не просто слушат или играят, а преживяват нещо, което е
              изцяло „тяхно“ и пряко приложимо в ежедневната работа.
            </p>

            {/* Снимка 2 */}
            <img
              src="30.svg"
              alt="Корпоративни събития"
              className="w-[min(90vw,35rem)] rounded-xl self-start md:self-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#075994]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-10 rounded-3xl bg-[#f6f6f6] relative z-[10]">
            <h2 className="text-3xl md:text-3xl font-inter font-semibold text-[#075994] mb-4">
              Готови ли сте за преживяване, което съчетава забавление и реални
              резултати? <span className="text-[#f96e0c]">Ние ще ви помогнем да създадете именно такъв тиймбилдинг.</span>
            </h2>
            <div className="mt-8">
              <Link
                to="/inquiry"
                className="w-full bg-[#c1ff72] hover:bg-[#2f492f] text-[#075994] hover:text-[#c1ff72] px-8 py-4 rounded-lg text-lg font-poppins font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
              >
                Кликни тук, за да направиш запитване
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MixedTeambuildings;
