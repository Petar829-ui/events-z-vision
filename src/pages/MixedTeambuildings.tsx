import { Divide } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MixedTeambuildings = () => {
    return (
        <div className="min-h-screen bg-[#075994] pb-10">
        <section className="relative min-h-[80vh] overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B18.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-64 pb-16">
            <h2 className="text-6xl font-poppins font-semibold text-[#c1ff72] leading-tight text-center mt-20">
                Смесени тиймбилдинги <br /><span className="text-white">(обучение + развлечение)</span>
            </h2>
            <p className="text-4xl font-playfair font-semibold text-[#c1ff72] text-center mt-36 max-w-6xl md:max-w-7xl lg:max-w-[90rem] mx-auto leading-relaxed">
            <span className="text-white">Смесените тиймбилдинги </span>комбинират най-доброто от двата свята – енергията на забавлението и ползите от обучението. Те са идеалното решение за компании, които искат
            <span className="text-white">едновременно да мотивират екипа си и да развият конкретни умения </span>в неформална и позитивна атмосфера.
            </p>
            </div>
        </section>

<section className="max-w-7xl mx-auto mt-16">
  {/* ред 1: карта + снимка */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
    {/* карта (ляво) */}
    <div className="relative w-[640px] h-[300px] sm:h-[320px] md:h-[160px] mt-6 md:mt-10">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
          Групови активности, съчетаващи забавление с обучение
        </h3>
      </div>
    </div>
    <div className="relative w-[640px] h-[300px] sm:h-[320px] md:h-[160px] ml-6 mt-6 md:mt-10">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
          Персонализирани смесени тиймбилдинг активности
        </h3>
      </div>
    </div>

        {/* снимка (bottom-right) */}
    <div className="md:col-end-3 md:row-start-3 h-full flex items-center justify-start md:-mt-16 lg:-mt-5">
      <img
        src="30.svg"
        alt="Корпоративни събития"
        className="w-72 sm:w-80 md:w-[26rem] lg:w-[35rem] rounded-xl"
      />
      </div>

    {/* снимка (bottom-left) */}
    <div className="md:col-end-2 md:row-start-3 h-full flex items-center justify-start md:-mt-16 lg:-mt-5">
      <img
        src="29.svg"
        alt="Корпоративни събития"
        className="w-72 sm:w-80 md:w-[26rem] lg:w-[35rem] rounded-xl"
      />
      </div>

          {/* ред 2: текст долу dqsno */}
    <div className="md:col-end-3 md:row-start-2 md:justify-self-end ml-6">
      <p className="font-inter font-normal text-[#c1ff72] text-3xl leading-tight mt-6 md:mt-8 max-w-[46ch] text-left">
        Персонализираните формати се разработват спрямо спецификата на всяка компания и целите, които тя си поставя. Те могат да включват елементи от спортни или кулинарни активности, куизове или авторски игри, комбинирани с обучителни модули по теми като работа в екип, лидерство или развитие на личностни умения. Така всяко събитие е уникално – съобразено с културата на организацията, профила на участниците и конкретните предизвикателства пред екипа. Този подход гарантира висока ангажираност и ефективност, защото хората не просто слушат или играят, а преживяват нещо, което е изцяло „тяхно“ и пряко приложимо в ежедневната работа.
      </p>
    </div>

    {/* ред 1: текст долу вляво */}
    <div className="md:col-end-2 md:justify-self-end">
      <p className="font-inter font-normal text-[#c1ff72] text-3xl leading-tight mt-6 md:mt-8 max-w-[46ch] text-left">
        Този тип програми създават динамична среда, в която играта и ученето вървят ръка за ръка. Екипът се изправя пред различни предизвикателства, които едновременно изискват креативно мислене, координация и сътрудничество. Участниците се забавляват заедно, докато развиват умения като комуникация, лидерство и стратегическо планиране. Подходящи са за компании, които искат да изградят силен екипен дух, без да жертват практическата стойност на обучението. В резултат се създава общо преживяване, което оставя трайни спомени и реални ползи за работната среда
      </p>
    </div>
  </div>
</section>

      <section className="py-16 bg-[#075994]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-10 rounded-3xl bg-[#f6f6f6] relative z-[10]">
            <h2 className="text-3xl md:text-3xl font-inter font-semibold text-[#075994] mb-4">
              Готови ли сте за преживяване, което съчетава забавление и реални резултати? <span className='text-[#f96e0c]'>Ние ще ви помогнем да създадете именно такъв тиймбилдинг.</span>
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