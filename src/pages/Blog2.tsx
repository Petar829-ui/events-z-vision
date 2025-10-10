import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Blog2 = () => {
  /** --- ONLY FOR THE MID STICKY IMAGE --- */
  const midRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0); // px, how much the image slides up

  useEffect(() => {
    const onScroll = () => {
      const el = midRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // progress 0..1 while the whole sticky section passes the viewport
      const p = 1 - r.bottom / (vh + r.height);
      const clamped = Math.max(0, Math.min(1, p));

      // how far to slide (tune 220 if you want more/less movement)
      setShift(clamped * 220);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  /** ------------------------------------- */

  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B19.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-semibold text-[#c1ff72] text-center mt-20">
            Авторски групови активности на <span className="text-white">открито и <br />закрито</span>
          </h2>
          <p className="text-2xl md:text-4xl font-playfair font-semibold text-[#c1ff72] text-center mt-56 max-w-6xl md:max-w-7xl lg:max-w-[90rem] mx-auto leading-relaxed">
            Груповите активности са <span className="text-white">сърцето на развлекателните тиймбилдинги</span> – динамични, забавни и създадени да обединяват хората чрез споделено преживяване. Те могат да се провеждат
            <span className="text-white">както на открито</span>, сред природата, така <span className="text-white">и в закрити пространства</span>, превърнати в сцена за игри и предизвикателства.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-16">
        <div className="mx-auto text-3xl text-[#c1ff72] font-monsterrat font-normal pb-20">
          <h2 className="text-center leading-tight">
            Груповите активности развиват доверие и колаборация в екипа, като същевременно носят лекота, смях и положителна енергия. Те са идеален начин колегите да се опознаят в нова светлина – извън рамките на работното ежедневие – и да изградят по-силна връзка помежду си.
          </h2>
        </div>

        {/* ред 1: карта + снимка */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
          {/* карта (ляво) */}
          <div className="relative w-[320px] sm:w-[400px] md:w-[400px] lg:w-[500px] xl:w-[650px] h-[150px] sm:h-[220px] md:h-[160px] justify-self-center md:justify-self-start mt-6 md:mt-10">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
            <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
              <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
                Карибски пирати около света
              </h3>
            </div>
          </div>

          {/* снимка (center-top) */}
          <div className="md:col-start-2 md:row-start-2 h-full flex items-center justify-center md:justify-end  md:-mt-16 lg:-mt-36">
            <img
              src="31.svg"
              alt="Корпоративни събития"
              className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
            />
          </div>

          {/* снимка (center-bottom) */}
          <div className="md:col-start-2 md:row-start-3 h-full flex items-center justify-center md:justify-end md:-mt-16 lg:-mt-48">
            <img
              src="32.svg"
              alt="Корпоративни събития"
              className="w-72 h-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
            />
          </div>
          {/* ред 2: текст долу вляво */}
          <div className="md:col-end-2 md:justify-self-start">
            <p className="font-inter font-normal text-[#c1ff72] text-3xl leading-tight mt-6 md:mt-8 max-w-[46ch] text-left">
              Интерактивно и забавно шоу, в което публиката (служителите) стават част от действието.
              В началото пиратите „обирват“ хората – взимат символични ценности (реквизит, предмети,
              награди).<br />
              За да си върнат ценностите, участниците трябва да играят, танцуват, пеят или да<br />
              демонстрират умения.<br /><br />
              Активности вътре:<br />
              Танцови предизвикателства. <br />
              Песни и изпълнения от публиката. <br />
              Мини-схватки или изпитания за смелост. <br />
              Забавни „куестове“, които връщат „откраднатите съкровища“. <br /> <br />
              Ползи и ефект: <br />
              Разчупва атмосферата и създава незабравими моменти. <br />
              Дава шанс всеки да покаже талант, чувство за хумор и креативност. <br />
              Създава смях, енергия и екипна динамика. <br />
              Насърчава смелост, изобретателност и импровизация.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-16">
        {/* ред 1: карта + снимка */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
          {/* карта (ляво) */}
          <div className="relative w-[300px] md:w-[400px] lg:w-[700px] xl:w-[650px] h-[200px] sm:h-[200px] md:h-[160px] md:col-start-2 md:col-start-1 justify-self-center md:justify-self-end md:self-start">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
            <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
              <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
                Приключението
              </h3>
            </div>
          </div>

          {/* снимка (center-top) */}
          <div className="md:col-start-1 md:row-start-2 h-full flex items-center justify-center md:justify-end md:-mt-16 lg:-mt-[540px]">
            <img
              src="33.svg"
              alt="Корпоративни събития"
              className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
            />
          </div>

          {/* снимка (center-center) */}
          <div className="md:col-start-1 md:row-start-2 h-full flex items-center justify-center md:justify-end md:-mt-16 -mt-[190px] lg:-mt-[70px]">
            <img
              src="34.svg"
              alt="Корпоративни събития"
              className="w-72 h-[800px] sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
            />
          </div>

          {/* снимка (center-bottom) */}
          <div className="md:col-start-1 md:row-start-3 h-full flex items-center justify-center md:justify-end md:-mt-16 -mt-[340px] lg:-mt-[390px]">
            <img
              src="35.svg"
              alt="Корпоративни събития"
              className="w-72 h-[540px] sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
            />
          </div>

          {/* ред 2: текст долу вляво */}
          <div className="md:col-end-3 md:row-start-2 md:justify-self-start">
            <p className="font-inter font-normal text-[#c1ff72] text-3xl leading-tight -mt-56 md:mt-8 max-w-[46ch] text-left">
              Уникално тиймбилдинг преживяване, което комбинира история, приключение и игри.
              Провежда се в исторически обекти, крепости, пещери или природни забележителности.
              Участниците се впускат в мисия – да открият артефакти, да решат загадки и да преминат
              през различни изпитания. <br /><br />
              Елементи на играта<br />
              Търсене на артефакти – скрити предмети, които водят към финалната цел.
              Разгадаване на мистерии и пъзели – интелектуални задачи за целия екип. <br /><br />
              Физически предизвикателства – стрелба с лък , копие, брадва , въздушна пушка.
              Отборни изпитания – преминаване на препятствия, вземане на решения под време. <br /><br />
              Съчетава учене чрез преживяване – историята оживява, когато е разказана на място и
              съпътствана с игра.
              Дава усещане за реално приключение и пътуване назад във времето.
              Възможно е да се адаптира според сезона и локацията. <br /><br />
              Ползи и ефект
              Изгражда екипна стратегия и комуникация.
              Стимулира любопитство, логическо мислене и креативност.
              Създава незабравимо изживяване сред природата или културна среда.
              Засилва чувството за принадлежност и обща победа.
              Най-подходящо за
              Пролетни и летни тиймбилдинги.
              Екипи, които обичат предизвикателства и движение.

            </p>
          </div>
        </div>
      </section>

      {/* Междинна голяма снимка – център + sticky + маска (скрита отгоре/отдолу) */}
      <div className="relative mx-auto w-full -mt-[100px]" ref={midRef}>
        {/* Контролира колко дълго остава sticky */}
        <div className="h-[50vh]">
          <div className="sticky top-0 flex justify-center">
            {/* „Витрина“, която реже горе и долу */}
            <div className="relative w-[100vw] max-w-[100rem] rounded-2xl overflow-hidden h-[60vh] md:h-[65vh] lg:h-[70vh]">
              <img
                src="38.svg"
                alt="Корпоративни събития"
                className="absolute -bottom-0 left-1/2 -translate-x-1/2 min-w-full min-h-full"
                style={{
                  // slide image UP while scrolling; start from bottom visible
                  transform: `translate(-50%, ${-shift}px)`,
                  willChange: "transform",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto mt-16">
        {/* ред 1: карта + снимка */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
          {/* карта (ляво) */}
          <div className="relative w-[300px] md:w-[400px] lg:w-[700px] xl:w-[650px] h-[200px] sm:h-[200px] md:h-[160px] md:col-start-2 md:col-start-1 justify-self-center md:justify-self-end md:self-start">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
            <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
              <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
                Лов на съкровища
              </h3>
            </div>
          </div>

          {/* снимка (center-top) */}
          <div className="md:col-start-1 md:row-start-2 h-full flex items-center justify-center md:justify-end md:-mt-16 lg:-mt-[520px]">
            <img
              src="39.svg"
              alt="Корпоративни събития"
              className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
            />
          </div>

          {/* снимка (center-center) */}
          <div className="md:col-start-1 md:row-start-2 h-full flex items-center justify-center md:justify-end md:-mt-16 lg:mt-[90px]">
            <img
              src="40.svg"
              alt="Корпоративни събития"
              className="w-72 md:h-[800px] sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
            />
          </div>

          {/* ред 2: текст долу вляво */}
<div className="md:col-end-3 md:row-start-2 md:justify-self-start">
  <div className="font-inter font-normal text-[#c1ff72] text-3xl leading-tight mt-6 md:mt-8 max-w-[46ch] text-left space-y-4">
    <p>
      Интерактивна тиймбилдинг игра, в която екипите тръгват по следите на
      скрито съкровище. Участниците получават загадки, карти и мисии, които
      трябва да решават заедно, за да достигнат до финалната награда.
    </p>

    <span className="block font-semibold">Характер</span>
    <p>
      Играта е динамична и съчетава логически задачи, физически активности и
      творчески предизвикателства. Възможна е както на открито – в паркове,
      градска среда или природни локации, така и на закрито, в специално
      подготвени пространства. Всеки сценарий е уникален и може да бъде
      персонализиран спрямо екипа и целите на компанията.
    </p>

    <span className="block font-semibold">Активности вътре</span>
    <ul className="list-disc list-outside space-y-2">
      <li>Решаване на загадки и логически пъзели;</li>
      <li>Откриване на скрити предмети и следи;</li>
      <li>Физически мини-предизвикателства;</li>
      <li>Колективни мисии, които изискват доверие и екипна работа.</li>
    </ul>

    <span className="block font-semibold">Ползи и ефект</span>
    <p>
      Ловът на съкровища изгражда силна връзка между колегите, като развива
      комуникация, стратегическо мислене и лидерски умения. Той насърчава
      сътрудничеството и креативността, докато същевременно носи смях, емоция и
      приключенски дух. В края на играта всеки участник не просто печели
      награда, а преживяване, което ще се помни.
    </p>
  </div>
</div>
</div>
</section>

      <section className="max-w-7xl mx-auto mt-16">
        {/* ред 1: карта + снимка */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
          {/* карта (ляво) */}
          <div className="relative w-[315px] sm:w-[400px] md:w-[400px] lg:w-[500px] xl:w-[640px] h-[135px] sm:h-[220px] md:h-[160px] justify-self-center md:justify-self-start mt-6 md:mt-10">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
            <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
              <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
                Тимбилдинг по самоотбрана
              </h3>
            </div>
          </div>

          {/* снимка (center-right) */}
          <div className="md:col-start-2 md:row-start-2 h-full flex items-center justify-center md:justify-end md:-mt-16 lg:-mt-[20px]">
            <img
              src="41.svg"
              alt="Корпоративни събития"
              className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
            />
          </div>
          {/* ред 2: текст долу вляво */}
          <div className="md:col-end-2 md:justify-self-start">
            <p className="font-inter font-normal text-[#c1ff72] text-3xl leading-relaxed mt-6 md:mt-8 max-w-[46ch] text-left">
              Тимбилдинг по самоотбрана съчетава дисциплина и доверие, като превръща екипа в по-силен и сплотен колектив. Освен полезни умения за сигурност, хората получават динамично и забавно преживяване, което ги обединява.
            </p>
          </div>
        </div>
      </section>

            <section className="max-w-7xl mx-auto mt-16">
        {/* ред 1: карта + снимка */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
          {/* карта (ляво) */}
          <div className="relative w-[300px] md:w-[400px] lg:w-[700px] xl:w-[650px] h-[150px] sm:h-[200px] md:h-[160px] md:col-start-2 md:col-start-1 justify-self-center md:justify-self-end md:self-start">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
            <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
              <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
                Тимбилдинг с танци
              </h3>
            </div>
          </div>

          {/* снимка (center-right) */}
          <div className="md:col-start-1 md:row-start-2 h-full flex items-center justify-center md:justify-end md:-mt-16 lg:-mt-[20px]">
            <img
              src="42.svg"
              alt="Корпоративни събития"
              className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
            />
          </div>
          {/* ред 2: текст долу вляво */}
          <div className="md:col-start-2 md:justify-self-start">
            <p className="font-inter font-normal text-[#c1ff72] text-3xl leading-relaxed mt-6 md:mt-8 max-w-[46ch] text-left">
              В него участниците събират точки чрез забавни и артистични танцови предизвикателства. Всеки отбор напредва, като комбинира танцови стъпки, импровизация и хумор, за да стигне до победата.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#075994]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-10 rounded-3xl bg-[#f6f6f6] relative z-[10]">
            <h2 className="text-3xl md:text-3xl font-inter font-semibold text-[#075994] mb-4">
              Всичките ни авторски груповите активности <span className='text-[#f96e0c]'>гарантират сплотяване, мотивация и незабравими моменти.</span>
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

export default Blog2;
