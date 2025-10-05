import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#3533cd] to-[#075994] pb-10">
      <section className="relative min-h-[80vh] overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B28.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-40 pb-16">
          <h2 className="text-6xl font-poppins font-semibold text-[#30e8b0] text-center mb-40">
            Продуктови и рекламни <span className="text-white">събития</span>
          </h2>
{/*backdrop-blur-md*/}
          <div className="mx-auto w-[600px] backdrop-blur-md aspect-square rounded-full border-4 border-[#30e8b0] grid place-items-center p-6 md:p-10">
            <p className="text-3xl font-inter font-normal text-white text-center leading-relaxed">
              Продуктовите и рекламни <span className="text-[#30e8b0]">Z Experience</span> събития превръщат представянето на марка или продукт в истинско изкуство. Те комбинират емоция, интерактивност и визуален ефект, за да създадат връзка с публиката, която остава дълго след финала на събитието.
            </p>
          </div>
        </div>
      </section>

    <section className="py-6 relative z-[10]">
    <div className="mx-auto p-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div className="relative text-[#30e8b0] font-inter font-normal">
    <div className="grid grid-cols-1 md:grid-cols-2 item-start gap-8 mad:gap-12">
<div className="space-y-6 md:pr-8">
  <h2 className="font-poppins font-bold text-4xl pb-2">
    Какво представлява услугата?
  </h2>
  <p className="font-itner font-normal text-white text-2xl">
    В днешния свят стандартните презентации и кампании вече не са достатъчни. Хората искат да бъдат докоснати емоционално, да усетят продукта или марката като част от собственото си преживяване. Именно това предлагат продуктовите и рекламни Z Experience събития – иновативна услуга, която превръща бранд комуникацията в изкуство. Предлагаме евент мениджъмт услуги, промоутъри и хостеси, както и персонализирани декорации на щандове и зали<br /><br />

Тук продуктът и брандът оживяват – чрез интерактивни инсталации, мултисетивни преживявания, визуален ентъртейнмънт, музика и storytelling. Участниците не са просто публика, а активни съ-създатели на емоцията, която марката иска да предаде. Това е начин да изградите връзка, която остава отвъд събитието – спомен, асоциация, емоция. и да затвърдите бранд идентичността си.
  </p>
</div>

                                  {/* IMG 6 */}
          <div className="justify-self-center md:justify-self-end self-start">
          <div className="w-[420px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#30e8b0] grid place-items-center pb-8 pl-10 mt-12">
              <figure className="mt-10 justify-center">
                <img
                  src="58.svg"
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
               left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
            />
      </div>
    </section>

<section className="mt-16 mb-10 relative isolate">
  {/* Декор – зад всичко */}
  <img
    src="43.svg"
    alt="Декор"
    className="pointer-events-none absolute z-[-10] 
               left-[40%] top-2/3 -translate-x-1/2 -translate-y-1/2
               w-[750px] h-auto object-contain opacity-70"
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* ред: снимка (ляво) + текст (дясно) */}
    <div className="flex flex-col md:flex-row items-start md:items-center relative">
      {/* снимка в кръг (без absolute и без overflow-hidden) */}
      <div className="mw-[420px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#30e8b0] grid place-items-center pb-8 pl-10 mt-22">
        <figure className="mt-10 justify-center">
        <img
          src="59.svg"
          alt="Корпоративни събития"
          className="w-[90%] h-auto object-contain"
        />
        </figure>
      </div>

      {/* текст – над декора */}
      <div className="max-w-2xl mr-auto text-left pl-16 relative z-10">
        <h2 className="font-poppins font-bold text-4xl text-[#30e8b0] mb-6">
          Нашият подход
        </h2>
        <p className="font-inter text-3xl text-white leading-snug mb-6">
        Нашият подход е да създаваме кампании и продуктови събития, които говорят на съвременната аудитория и потребители, които ценят автентичността и уникалните моменти. От брандирани подаръци и фотозони, до устойчиви концепции и Instagrammable детайли, всяко продуктово събитие се превръща в запомняща се история, която живее както офлайн, така и онлайн.
        </p>
      </div>
    </div>
  </div>
</section>

             {/* Call to action */}
      <div className="mt-20 bg-[#f6f6f6] rounded-2xl p-6 text-center max-w-3xl mx-auto relative z-[2]">
        <p className="text-2xl font-inter font-bold text-[#075994] mb-8 max-w-2xl mx-auto">
        Ако искате вашият продукт или марка да бъдат не просто видени, а преживени – Z Experience е правилният избор. <span className="text-[#6e67b4]">Свържете се с нас и ще превърнем идеята ви в събитие, за което ще се говори!</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/inquiry"
            className="bg-[#30e8b0] hover:bg-[#1f6da8] text-[#075994] hover:text-[#30e8b0] px-8 py-4 rounded-lg text-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Кликни тук, за да направиш запитване
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Product;