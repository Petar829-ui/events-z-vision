import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Personalized = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#3533cd] to-[#075994] pb-10">
      <Helmet>
  <title>Персонализирани събития по Ваша идея | Events Z Vision</title>
  <meta name="description" content="Имате конкретна визия за събитие? Ще я превърнем в реалност. От концепция и дизайн до логистика и техническо изпълнение – създаваме формати, които отразяват вашата индивидуалност." />
</Helmet>

<h1 className="sr-only">Вашата идея, нашата реализация</h1>
      <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B27.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-36 pb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-semibold text-[#30e8b0] text-center mb-40">
            Персонализирани <span className="text-white">събития по ваша идея</span>
          </h2>
{/*backdrop-blur-md*/}
          <div className="mx-auto md:w-[600px] backdrop-blur-md aspect-square rounded-full border-4 border-[#30e8b0] grid place-items-center p-6 md:p-10">
            <p className="text-1xl md:text-3xl font-inter font-normal text-white text-center leading-relaxed">
              Персонализираните <span className="text-[#30e8b0]">Z <br />Experience</span> събития са територията, където <span className="text-[#30e8b0]">вашите<br /> идеи оживяват.</span> Вие носите вдъхновението, креативността<br /> и уникалната концепция, а ние<br /> ви помагаме да я превърнете в реално преживяване
            </p>
          </div>
        </div>
      </section>

    <section className="py-6 relative z-[10]">
    <div className="mx-auto p-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div className="relative text-[#30e8b0] font-inter font-normal">
    <div className="grid grid-cols-1 md:grid-cols-2 item-start gap-8 mad:gap-12">
<div className="space-y-6 md:pr-8">
  <h2 className="font-poppins font-bold text-3xl md:text-4xl pb-2">
    Какво представлява услугата?
  </h2>
  <p className="font-itner font-normal text-white text-xl md:text-3xl">
    Ако не припознавате вашето събитие в нито една от останалите категории сте на точното място. Услугата ни  “Персонализирани Z Experience събития” e идеална за всеки, който иска да излезе извън стандартните решения и да създаде нещо автентично – било то артистична вечер, концептуално парти или социално-културен проект. Нашата роля е да добавим професионализъм, креативен дизайн и техническа подкрепа, така че вашата визия да бъде реализирана безупречно.
  </p>
</div>

                                  {/* IMG 6 mw-[420px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#30e8b0] grid place-items-center pb-8 pl-10 mt-22*/}
          <div className="justify-self-center md:justify-self-end self-start">
          <div className="w-[420px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#30e8b0] grid place-items-center pb-8 pl-10 mt-12">
              <figure className="mt-10 justify-center">
                <img
                  src="56.svg"
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
      {/* текст – над декора */}
      <div className="order-1 md:order-2 max-w-2xl mr-auto text-left md:pl-16 relative z-10">
      <div className="max-w-2xl mr-auto text-left md:pl-16 relative z-10">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#30e8b0] mb-6">
          Нашият подход
        </h2>
        <p className="font-inter text-xl md:text-3xl text-white leading-snug mb-6">
        За нас няма „твърди рамки“ – именно вашият личен почерк, смели хрумвания и нестандартни желания са това, което превръща един формат в неповторимо преживяване. Вие определяте темата, посланието или атмосферата, която искате да създадете, а ние изграждаме структура, сценарий и логистика около нея, като се осланяме на най новите трендове сред Gen Z поколението.
        </p>
      </div>
      </div>
      {/* снимка в кръг (без absolute и без overflow-hidden) */}
      <div className="order-2 md:order-1 mw-[420px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#30e8b0] grid place-items-center pb-8 pl-10 mt-22">
        <figure className="mt-10 justify-center">
        <img
          src="57.svg"
          alt="Корпоративни събития"
          className="w-[90%] h-auto object-contain"
        />
        </figure>
      </div>
    </div>
  </div>
</section>

             {/* Call to action */}
             <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-20 bg-[#f6f6f6] rounded-2xl p-6 text-center max-w-3xl mx-auto relative z-[2]">
        <p className="text-2xl font-inter font-bold text-[#075994] mb-8 max-w-2xl mx-auto">
        Z Experience е смела стъпка отвъд класическата организация – <span className="text-[#6e67b4]">това е начин да създадеш паметно преживяване, което говори на езика на съвременната публика и определено остава забелязано.</span>
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

    </div>
  );
};

export default Personalized;