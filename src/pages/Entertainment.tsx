import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Entertainment = () => {
    return (
        <div className="min-h-screen bg-[#075994] pb-10">
          <Helmet>
  <title>Развлекателни тиймбилдинги и активности | Events Z Vision</title>
  <meta name="description" content="От куиз вечери и лов на съкровища до кулинарни битки и спортни формати — създаваме енергични тиймбилдинг преживявания, които вдъхновяват, разтоварват и сближават екипите. Изпълняваме всичко до последния детайл." />
</Helmet>

<h1 className="sr-only">Забавни тиймбилдинги за енергия и сплотеност</h1>
        <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B17.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-16">
            <h2 className="text-5xl md:text-6xl lg:text-6xl font-poppins font-semibold text-[#c1ff72] text-center mt-0 md:mt-20">
                Развлекателни <span className="text-white">тиймбилдинги</span>
            </h2>
            <p className="text-xl md:text-3xl font-playfair font-semibold text-[#c1ff72] text-center mt-36 md:mt-56 max-w-6xl md:max-w-7xl lg:max-w-[90rem] mx-auto leading-relaxed">
            <span className="text-white">Развлекателните тиймбилдинги</span> съчетават  
            <span className="text-white"> забавление и сплотяване</span> – защото най-силните екипи се изграждат чрез споделени емоции и позитивни преживявания. Те са подходящи за компании, които искат
            <span className="text-white"> да укрепят взаимоотношенията между хората си</span>, да подобрят атмосферата в офиса и да създадат незабравими спомени.
            </p>
            </div>
        </section>

<section className="max-w-7xl mx-auto mt-16">
  <div className="mx-auto text-xl md:text-3xl text-[#c1ff72] font-monsterrat font-normal pb-20">
    <h2 className="text-center leading-tight px-6 sm:px-8 md:px-10">
      В Events Z Vision предлагаме широка гама от развликателни тиймбилдинг активности като авторски разработени игри и предизвикателства на открито и закрито, кулинарни, спортни и парти активности, с които вашият екип ще изживее незабравими и стойностни споделени преживявания!
    </h2>
  </div>

  {/* ред 1: карта + снимка */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
    {/* карта (ляво) */}
    <div className="relative w-[300px] md:w-[400px] lg:w-[500px] xl:w-[620px] h-[250px] sm:h-[320px] md:h-[200px] justify-self-center md:justify-self-start mt-6 md:mt-10">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
          Авторски тиймбилдинг<br />активности на открито и закрито
        </h3>
      </div>
    </div>

    {/* снимка (center-right) */}
    <div className="md:col-start-2 md:row-start-2 h-full flex items-center justify-center md:justify-end md:-mt-16 lg:-mt-20">
      <img
        src="24.svg"
        alt="Корпоративни събития"
        className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
      />
      </div>
    {/* ред 2: текст долу вляво */}
    <div className="md:col-end-2 md:justify-self-start">
      <p className="font-inter font-normal text-[#c1ff72] text-xl md:text-3xl leading-tight mt-6 md:mt-8 max-w-[46ch] text-left px-6 sm:px-8 md:px-10">
        Разгледайте някои от специално разработените ни формати, които комбинират игри, креативни предизвикателства
        и активности, вдъхновени от спецификата на екипа. Подходящи са както за малки групи, така и за големи компании,
        като винаги се адаптират към мястото и сезона.
      </p>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto mt-16">
  {/* ред 1: карта + снимка */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
    {/* карта (вдясно-горе на md+) */}
    <div className="relative w-[300px] md:w-[400px] lg:w-[500px] xl:w-[620px] h-[250px] sm:h-[320px] md:h-[200px] justify-self-center md:justify-self-start translate-y-12 md:col-start-2 md:row-end-1 mt-6 md:mt-10">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
          Куизове
        </h3>
      </div>
    </div>

    {/* снимка (center-right според твоя layout) */}
    <div className="md:col-start-1 md:row-start-2 h-full flex items-center justify-center md:justify-end mt-8 md:-mt-16 lg:-mt-20">
      <img
        src="25.svg"
        alt="Корпоративни събития"
        className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
      />
    </div>

    {/* ред 2: текст долу вляво */}
    <div className="md:col-end-3 md:row-start-2 md:justify-self-start">
      <p className="font-inter font-normal text-[#c1ff72] text-xl md:text-3xl leading-tight mt-6 md:mt-8 px-6 sm:px-8 md:px-10 max-w-[46ch] text-left">
        Леки и интелигентни формати, които развиват бързата мисъл и сплотяват екипа чрез съревнование и смях. Те са особено подходящи за офиси, които търсят забавление в по-неформална среда. Темите могат да бъдат както предложени от нас, така и разработени по ваши желание
      </p>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto mt-16">
  {/* ред 1: карта + снимка */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
    {/* карта (ляво) */}
    <div className="relative w-[300px] md:w-[400px] lg:w-[500px] xl:w-[620px] h-[250px] sm:h-[320px] md:h-[200px] justify-self-center md:justify-self-start mt-6 md:mt-10">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
          Кулинарни
        </h3>
      </div>
    </div>

    {/* снимка (center-right) */}
    <div className="md:col-start-2 md:row-start-2 h-full flex items-center justify-center md:justify-end md:-mt-16 lg:-mt-20">
      <img
        src="26.svg"
        alt="Корпоративни събития"
        className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
      />
      </div>
    {/* ред 2: текст долу вляво */}
    <div className="md:col-end-2 md:justify-self-start">
      <p className="font-inter font-normal text-[#c1ff72] text-xl md:text-3xl leading-tight mt-6 md:mt-8 px-6 sm:px-8 md:px-10 max-w-[46ch] text-left">
        Готвенето заедно е едно от най-естествените средства за изграждане на екип. Кулинарните програми насърчават креативност, сътрудничество и чувство за общо постижение, а резултатът е вкусен и споделен.
      </p>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto mt-16">
  {/* ред 1: карта + снимка */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
    {/* карта (вдясно-горе на md+) */}
    <div className="relative w-[300px] md:w-[400px] lg:w-[500px] xl:w-[620px] h-[250px] sm:h-[320px] md:h-[200px] justify-self-center md:justify-self-start translate-y-12 md:col-start-2 md:row-end-1 mt-6 md:mt-10">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
          Спортни
        </h3>
      </div>
    </div>

    {/* снимка (center-right според твоя layout) */}
    <div className="md:col-start-1 md:row-start-2 h-full flex items-center justify-center md:justify-end mt-8 md:-mt-16 lg:-mt-20">
      <img
        src="27.svg"
        alt="Корпоративни събития"
        className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
      />
    </div>

    {/* ред 2: текст долу вляво */}
    <div className="md:col-end-3 md:row-start-2 md:justify-self-start">
      <p className="font-inter font-normal text-[#c1ff72] text-xl md:text-3xl leading-tight mt-6 md:mt-8 px-6 sm:px-8 md:px-10 max-w-[46ch] text-left">
        Динамични активности, които развиват екипния дух чрез движение, спортни игри и състезателни предизвикателства. Подходящи са за компании, които искат да мотивират служителите си и да насърчат здравословен начин на живот.
      </p>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto mt-16">
  {/* ред 1: карта + снимка */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[420px]">
    {/* карта (ляво) */}
    <div className="relative w-[300px] md:w-[400px] lg:w-[500px] xl:w-[620px] h-[250px] sm:h-[320px] md:h-[200px] justify-self-center md:justify-self-start mt-6 md:mt-10">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-4 border-[#c1ff72] bg-white" />
      <div className="relative h-full rounded-3xl border-4 border-white bg-[#c1f772] grid place-items-center">
        <h3 className="text-[2rem] font-montserrat font-bold text-[#2f492f] text-center">
          Парти тиймбилдинги
        </h3>
      </div>
    </div>

    {/* снимка (center-right) */}
    <div className="md:col-start-2 md:row-start-2 h-full flex items-center justify-center md:justify-end md:-mt-16 lg:-mt-20">
      <img
        src="28.svg"
        alt="Корпоративни събития"
        className="w-72 sm:w-80 md:w-[26rem] lg:w-[40rem] rounded-xl"
      />
      </div>
    {/* ред 2: текст долу вляво */}
    <div className="md:col-end-2 md:justify-self-start">
      <p className="font-inter font-normal text-[#c1ff72] text-xl md:text-3xl leading-tight mt-6 md:mt-8 px-6 sm:px-8 md:px-10 max-w-[46ch] text-left">
        За компаниите и екипите, които искат да отпразнуват постижения или просто да създадат добро настроение, парти форматите съчетават музика, танци и непринудено забавление. Този тип тиймбилдинг създава връзки чрез радостта от споделеното време.
      </p>
    </div>
  </div>
</section>

      <section className="py-16 bg-[#075994]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-10 rounded-3xl bg-[#f6f6f6] relative z-[10]">
            <h2 className="text-2xl md:text-3xl md:text-3xl font-inter font-semibold text-[#075994] mb-4">
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

export default Entertainment;