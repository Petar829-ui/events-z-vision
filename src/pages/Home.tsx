import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#075994]">
      {/* SEO */}
<Helmet>
  <title>Events Z Vision | Бутикова агенция за организиране на събития от ново поколение</title>
  <meta name="description" content="Създаваме събития, които се запомнят. От корпоративни тиймбилдинги, фирмени партита и продуктови лансирания до лични събития, арт вечери и нестандартни Z Experience формати — превръщаме идеите в преживявания." />
</Helmet>

<h1 className="sr-only">Събития от ново поколение – креативни, смислени, запомнящи се</h1>

      {/* Hero Section */}
      <section
        className="text-white bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24"
        style={{ backgroundImage: "url('website design EZV.png')" }}
      >
        <section className="relative">
          <img 
            src="test.svg" 
            alt="img"
            className="
              absolute hidden md:block pointer-events-none top-10 sm:top-20 md:top-17 z-0 max-w-none h-auto
              [width:clamp(480px,45vw,850px)]
              [right:clamp(8px,8vw,140px)]
              [top:clamp(16px,6vh,64px)]
              lg:[right:clamp(24px,9vw,160px)]
              xl:[right:clamp(32px,10vw,180px)]
            "
          />
          <img 
            src="63.svg" 
            alt="img"
            className="
              absolute hidden md:block pointer-events-none top-10 sm:top-20 md:top-17 z-0 max-w-none h-auto
              [width:clamp(480px,45vw,750px)]
              [right:clamp(8px,8vw,140px)]
              [top:clamp(16px,6vh,64px)]
              lg:[right:clamp(24px,9vw,160px)]
              xl:[right:clamp(32px,10vw,180px)]
              
            "
          />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
          <div className="relative z-[5]">
            <div className="text-center md:text-left max-w-3x1">
              <h1 className="font-poppins font-semibold text-[47px] md:text-6xl lg:text-7xl tracking-normal leading-[1.1] mb-6">
                <span className="text-[#c1ff72]">Създаваме </span>
                <br /> незабравими <br />
                <span className="text-[#c1ff72]">преживявания</span>
              </h1>
              <p className="font-inter font-normal text-base md:text-3xl max-w-xl mb-8 text-blue-100 leading-relaxed">
                Агенция за цялостно професионално организиране на събития,
                готова да превърне Вашите идеи в реалност с креативност,
                професионализъм и внимание към детайлите.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                <Link
                  to="/inquiry"
                  className="inline-flex w-fit self-center
                             bg-[#c1ff72] hover:bg-[#2f492f]
                             text-[#075994] hover:text-[#c1ff72]
                             px-8 py-4 rounded-lg text-lg font-poppins font-semibold
                             transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  ИЗПРАТИ ЗАПИТВАНЕ
                </Link>
                {/*da ne se trie tova <Link
                 to="/portfolio"
                  className="bg[#075994] border-2 border-white hover:bg-white hover:text-[#075994] text-white px-11 py-4 
                  rounded-lg text-lg self-center font-poppins font-semibold transition-all duration-300" >
                   ВИЖ УСЛУГИТЕ НИ 
                   </Link>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-[#075994]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative z-[10]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-[#c1ff72] font-poppins font-semibold">
                Предлагаме висококачествени и професионални услуги,{" "}
              </span>
              свързани с организиране на:
            </h2>

            <div className="font-playfair font-normal text-2xl grid grid-cols-1 md:grid-cols-3 gap-10 my-12 justify-items-center">
              {/* Карта 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-[380px] aspect-[16/7] bg-[#c1ff72] rounded-2xl overflow-hidden flex items-center justify-center">
                  <img src="1.svg" alt="Img" className="w-full h-full object-contain" />
                </div>
                <Link to={"/corporate"}>
                  <h2 className="text-[#c1ff72] hover:text-[#7fbf4f] mt-3">Корпоративни събития</h2>
                </Link>
              </div>

              {/* Карта 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-[390px] aspect-[16/7] bg-[#c1ff72] rounded-2xl overflow-hidden flex items-center justify-center">
                  <img src="2.svg" alt="Img" className="w-full h-full object-contain" />
                </div>
                <Link to={"/personal"}>
                  <h2 className="text-[#c1ff72] hover:text-[#7fbf4f] mt-3">Лични събития</h2>
                </Link>
              </div>

              {/* Карта 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-[380px] aspect-[16/7] bg-[#c1ff72] rounded-2xl overflow-hidden flex items-center justify-center">
                  <img src="3.svg" alt="Img" className="w-full h-full object-contain" />
                </div>
                <Link to={"/ZExperience"}>
                  <h2 className="text-[#c1ff72] hover:text-[#7fbf4f] mt-3">Нестандартни Z Experience събития</h2>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 relative z-[10]">
            <Link
              to="/services"
              className="inline-flex items-center text-[#c1ff72] hover:text-[#7fbf4f] font-playfair font-semibold text-lg transition-colors"
            >
              Вижте всички услуги <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#075994]">
        <img
          src="43.svg"
          alt="Image"
          className="pointer-events-none absolute left-1/2 top-2/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-auto object-contain z-0 opacity-70"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-caveat Display bont-serif text-[#c1ff72] mb-6 text-center relative z-[10]">
            Кои сме ние?
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-[10]">
              <div className="space-y-6">
                <div>
                  <p className="text-xl md:text-2xl text-[#c1ff72] font-inter font-normal leading-relaxed mt-10">
                    Ние сме новото поколение създатели на събития – с душа, посока и визия. Създаваме
                    преживявания, които доказват, че животът е красив, когато се споделя с готини хора, в правилната
                    среда и по вълнуващ, автентичен и неподправен начин. В основата ни стоят новаторството, страстта и
                    професионализмът. се.
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-caveat font-normal text-[#c1ff72] mb-3">Нашата мисия</h3>
                  <p className="text-xl md:text-2xl text-[#c1ff72] leading-relaxed font-inter font-normal">
                    Мисията ни е да превръщаме всяко ваше събитие в споделена история, като съчетаваме прецизност с
                    емоция,свежест с професионализъм, превръщайки всеки момент в значим и запомнящ се.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#c1ff72] p-8 rounded-xl z-[10]">
              <h3 className="text-5xl font-caveat font-normal text-[#075994] mb-6">Какво ни отличава?</h3>
              <ul className="font-inter font-normal text-xl md:text-lg">
                {[
                  "Не разглеждаме събитията просто като услуга, а като артистичен израз и личен наш ангажимент. Слушаме внимателно. Мечтаем заедно с клиента. Надскачаме очакванията. Комбинираме достъпност с безкомпромисно качество, smart решения и авторски почерк. Създаваме нови стандарти в мениджмънта на събития -корпоративни и лични.",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#c1ff72] flex-shrink-0" />
                    <span className="text-[#075994]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-[#075994]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-10 rounded-xl bg-[#f6f6f6] relative z-[10]">
            <h2 className="text-3xl font-inter font-semibold text-[#075994] mb-4">
              Готов ли си да изживееш <span className="text-[#f96e0c]">мечтаното събитие</span>?
            </h2>
            <p className="font-inter font-normal text-xl text-[#075994] m-6">
              Свържете се с нас за безплатна консултация
            </p>
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

export default Home;
