import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Training = () => {
    return (
        <div className="min-h-screen bg-[#075994] pb-10">
          <Helmet>
  <title>Корпоративни обучения и тренинги | Events Z Vision</title>
  <meta name="description" content="Разработваме обучения, които развиват екипа – от лидерство и комуникация до креативно мислене и емоционална интелигентност. Всеки модул е практичен, измерим и съобразен с културата на компанията." />
</Helmet>

<h1 className="sr-only">Корпоративни обучения с реален ефект</h1>

        <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B16.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-16">
            <h2 className="text-5xl md:text-6xl lg:text-6xl font-poppins font-semibold text-[#c1ff72] text-center mt-10 md:mt-20">
                Обучителни <span className="text-white">тиймбилдинги</span>
            </h2>
            <p className="text-2xl md:text-4xl lg:text-4xl font-playfair font-semibold text-[#c1ff72] text-center mt-24 md:mt-56 max-w-6xl md:max-w-7xl lg:max-w-[90rem] mx-auto leading-relaxed">
            Фокусът при <span className="text-white">обучителните тиймбилдинги</span> е върху придобиването на 
            <span className="text-white"> реални и практически приложими знания умения</span> от служителите, които правят работата по-ефективна и отношенията в екипа по-силни
            </p>
            </div>
        </section>

<section className="max-w-7xl mx-auto mt-16">
  {/* 2 реда: горе (фон + снимка), долу (текст) */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-start">
    {/* Фон горе вляво – контролираш височината тук */}
    <div className="relative w-[300px] md:w-[400px] lg:w-[700px] xl:w-[900px] h-[100px] sm:h-[320px] md:h-[160px] justify-self-center md:justify-self-start mt-6 md:mt-10">
      {/* Малко „изместен“ фон зад картата (може и да го махнеш) */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white"></div>

      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f]">
          Работа в екип
        </h3>
      </div>
    </div>

    {/* Снимка горе вдясно – без absolute */}
    <div className="flex justify-self-center md:justify-self-end mt-6 md:mt-0 lg:mt-0">
      <img
        src="23.svg"
        alt="Корпоративни събития"
        className="self-start w-64 sm:w-80 md:w-96 lg:w-[20rem] h-auto"
      />
    </div>

    {/* Текст отдолу центриран (ред 2) */}
    <div className="md:col-span-2">
      <p className="font-inter font-normal text-[#c1ff72] text-3xl text-left leading-tight mt-10 px-6 sm:px-8 md:px-10 max-w-[64ch] mx-auto">
        Обучителните тиймбилдинги, посветени на работата в екип, са насочени към изграждане на доверие, 
        ефективна комуникация и усещане за обща цел. Участниците преминават през различни активности, 
        които ги учат да комбинират силните си страни, да се подкрепят в предизвикателни ситуации и 
        да се справят заедно с проблеми. Подходящи са за екипи с нови служители или за такива, които 
        преминават през период на промяна и се нуждаят от повече синхрон. Това е правилният избор за 
        компании в процес на разрастване или след преструктуриране, когато връзките между хората са ключови за успеха.
      </p>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto mt-16 pb-20">
  {/* 2 реда: горе (фон + снимка), долу (текст) */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-start">
    {/* Фон горе вляво – контролираш височината тук */}
    <div className="relative w-[300px] md:w-[400px] lg:w-[700px] xl:w-[900px] h-[200px] sm:h-[320px] md:h-[160px] md:translate-y-34 lg:translate-y-44 md:col-start-2 md:col-end-3 justify-self-center md:justify-self-end mt-6 md:mt-10">
      {/* Малко „изместен“ фон зад картата (може и да го махнеш) */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white"></div>

      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] text-center font-montserrat font-bold text-[#2f492f]">
          Развитие на работните личностни умения
        </h3>
      </div>
    </div>

    {/* Снимка горе вдясно – без absolute */}
    <div className="flex justify-self-center md:justify-self-start mt-6 md:mt-0 lg:mt-0">
      <img
        src="2.svg"
        alt="Корпоративни събития"
        className="self-start w-64 sm:w-80 md:w-96 lg:w-[20rem] h-auto"
      />
    </div>

    {/* Текст отдолу центриран (ред 2) */}
    <div className="md:col-span-2">
      <p className="font-inter font-normal text-[#c1ff72] text-3xl text-left leading-tight mt-10 px-6 sm:px-8 md:px-10 max-w-[64ch] mx-auto">
        Фокусът тук е върху индивидуалното развитие, което води до по-ефективни и уверени екипи. Програмата обхваща теми като емоционална интелигентност, управление на стреса, адаптивност и умения за решаване на конфликти. Участниците се учат как да бъдат по-гъвкави, да изразяват себе си уверено и да намират решения дори в напрегнати ситуации. Този тип тиймбилдинг е подходящ за компании от всякакъв мащаб, които искат да подкрепят устойчивото развитие на своите служители и да изградят култура на личностно и професионално израстване.
      </p>
    </div>
  </div>
</section>


<section className="max-w-7xl mx-auto mt-16">
  {/* 2 реда: горе (фон + снимка), долу (текст) */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-start">
    {/* Фон горе вляво – контролираш височината тук */}
    <div className="relative w-[315px] sm:w-[900px] md:w-[400px] lg:w-[700px] xl:w-[900px] h-[115px] sm:h-[320px] md:h-[160px] justify-self-center md:justify-self-start mt-6 md:mt-10">
      {/* Малко „изместен“ фон зад картата (може и да го махнеш) */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white"></div>

      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f]">
          Организационни умения
        </h3>
      </div>
    </div>

    {/* Снимка горе вдясно – без absolute */}
    <div className="flex justify-self-center md:justify-self-end mt-6 md:mt-0 lg:mt-0">
      <img
        src="1.svg"
        alt="Корпоративни събития"
        className="self-start w-64 sm:w-80 md:w-96 lg:w-[20rem] h-auto"
      />
    </div>

    {/* Текст отдолу центриран (ред 2) */}
    <div className="md:col-span-2">
      <p className="font-inter font-normal text-[#c1ff72] text-3xl text-left leading-tight mt-10 px-6 sm:px-8 md:px-10 max-w-[64ch] mx-auto">
        Този вид тиймбилдинг развива стратегическо мислене, умения за планиране и ефективно разпределяне на задачите. Чрез практическо обучение участниците се учат как да управляват времето си, да приоритизират и да работят организирано дори под напрежение. Програмата е особено полезна за екипи, които работят по сложни проекти или имат кратки срокове за изпълнение. Подходящ е за фирми, които се разширяват на нови пазари, въвеждат нови процеси или искат да развият лидерски потенциал в служителите си.
      </p>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto mt-16 pb-20">
  {/* 2 реда: горе (фон + снимка), долу (текст) */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-start">
    {/* Фон горе вляво – контролираш височината тук */}
    <div className="relative w-[300px] md:w-[400px] lg:w-[700px] xl:w-[900px] h-[200px] sm:h-[320px] md:h-[160px] md:translate-y-34 lg:translate-y-44 md:col-start-2 md:col-end-3 justify-self-center md:justify-self-end mt-6 md:mt-10">
      {/* Малко „изместен“ фон зад картата (може и да го махнеш) */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white"></div>

      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] text-center font-montserrat font-bold text-[#2f492f]">
          Изграждане на <br />фирмени ценности
        </h3>
      </div>
    </div>

    {/* Снимка горе вдясно – без absolute */}
    <div className="flex justify-self-center md:justify-self-start mt-6 md:mt-0 lg:mt-0">
      <img
        src="7.svg"
        alt="Корпоративни събития"
        className="self-start w-64 sm:w-80 md:w-96 lg:w-[20rem] h-auto"
      />
    </div>

    {/* Текст отдолу центриран (ред 2) */}
    <div className="md:col-span-2">
      <p className="font-inter font-normal text-[#c1ff72] text-3xl text-left leading-tight mt-10 px-6 sm:px-8 md:px-10 max-w-[64ch] mx-auto">
        Тиймбилдингите, посветени на фирмените ценности, имат за цел да изградят усещане за принадлежност и да затвърдят културата на компанията. Чрез carefully подбрани активности служителите не само научават повече за ценностите на организацията, но и ги преживяват в действие – като споделена отговорност, етика, иновация или устойчивост. Този формат е изключително подходящ за компании, които преминават през ребрандинг, въвеждане на нова визия или обединяване на отдели и екипи. В резултат се създава по-силна връзка между хората и ясно усещане, че работят за една обща цел.
      </p>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto mt-16 pb-20">
  {/* 2 реда: горе (фон + снимка), долу (текст) */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-start">
    {/* Фон горе вляво – контролираш височината тук */}
    <div className="relative w-[300px] md:w-[400px] lg:w-[700px] xl:w-[900px] h-[300px] sm:h-[320px] md:h-[160px] justify-self-center md:justify-self-start mt-6 md:mt-10">
      {/* Малко „изместен“ фон зад картата (може и да го махнеш) */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white"></div>

      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] text-center font-montserrat font-bold text-[#2f492f]">
          Тематични (в зависимост от естеството <br />на работа на фирмата-клиент)
        </h3>
      </div>
    </div>

    {/* Снимка горе вдясно – без absolute */}
    <div className="flex justify-self-center md:justify-self-end mt-6 md:mt-0 lg:mt-0">
      <img
        src="3.svg"
        alt="Корпоративни събития"
        className="self-start w-64 sm:w-80 md:w-96 lg:w-[20rem] h-auto"
      />
    </div>

    {/* Текст отдолу центриран (ред 2) */}
    <div className="md:col-span-2">
      <p className="font-inter font-normal text-[#c1ff72] text-3xl text-left leading-tight mt-10 px-6 sm:px-8 md:px-10 max-w-[64ch] mx-auto">
        Тематичните формати превръщат обучението в преживяване с конкретна цел и атмосфера. Те могат да бъдат свързани с иновации, устойчивост, креативност, спорт или друга тема, която резонира с екипа и визията на компанията. Всяко събитие се изработва индивидуално и се адаптира към специфичните нужди и цели на бизнеса. Подходящи са както за стартиращи организации, които искат да изградят идентичност, така и за утвърдени компании, които търсят свеж и различен начин да мотивират хората си. Резултатът е преживяване, което съчетава обучение, емоция и запомняща се история.
      </p>
    </div>
  </div>
</section>

      <section className="py-16 bg-[#075994]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-10 rounded-3xl bg-[#f6f6f6] relative z-[10]">
            <h2 className="text-3xl md:text-3xl font-inter font-semibold text-[#075994] mb-4">
              Ако планирате да да осъществите обучителен тиймбилдинг с  екипа/колегите си - <span className='text-[#f96e0c]'>доверете ни се, заедно можем да създадем идеалният обучителен тиймбилдинг!</span>
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

export default Training;