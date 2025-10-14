import React from "react";
import { Link } from "react-router-dom";

const PersonalCelebrations = () => {
  return (
    <div className="min-h-screen bg-[#3b84b6] pb-10">
      <section className="relative bg-cover bg-center overflow-hidden h-full py-16 md:py-20 lg:py-24 overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-[-8px] right-[-8px] bg-cover bg-center -z-10 pointer-events-none"
          style={{ backgroundImage: "url('B21.svg')" }}
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-40 pb-6 md:pb-16">
          <h2 className="text-3xl md:text-6xl font-poppins font-semibold text-[#ebee68] text-center mb-16 md:mb-40">
            Организация на <span className="text-white">лични празници</span>
          </h2>
{/*backdrop-blur-md*/}
          <div className="mx-auto md:w-[600px] backdrop-blur-md aspect-square rounded-full border-4 border-[#ebee68] grid place-items-center p-6 md:p-10">
            <p className="text-1xl md:text-3xl font-inter font-normal text-[#ebee68] text-center leading-relaxed">
              Всеки <span className="text-white">личен празник</span> е <br />уникален – рожден ден, юбилей, кръщене или тематично парти. Това са моменти, които  остават в спомените за цял живот. За да бъдат <span className="text-white">наистина специални</span>, е важно организацията да съчетава атмосфера, стил и внимание <br />към детайлите.
            </p>
          </div>
        </div>
      </section>

    <section className="py-6 relative z-[10]">
    <div className="mx-auto p-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div className="relative text-[#ebee68] font-inter font-normal">
    <div className="grid grid-cols-1 md:grid-cols-2 item-start gap-8 mad:gap-12">
<div className="space-y-6 md:pr-8">
  <h2 className="font-poppins font-bold text-3xl md:text-4xl pb-2">
    Нашите услуги
  </h2>
  <ul className="list-disc pl-6 space-y-4 text-white text-xl md:text-2xl leading-relaxed font-inter marker:text-[#ebee68]">
    <p className="text-[#ebee68]">Вашите лични поводи заслужават специално внимание и организация, която превръща момента в незабравимо преживяване. В тази категория предлагаме:
    </p>
    <li>
      <span className="font-bold text-[#ebee68]">Рождени дни</span><span className="text-[#ebee68]"> – от интимни вечери до мащабни празненства с музика, шоу програми и изненади. </span>
    </li>
<li className="text-[#ebee68] leading-relaxed">
  <span className="font-bold">Тематични партита</span>
  {" "}– персонализирани събития с:
  <ul className="mt-2 pl-6 list-[circle] space-y-1">
    <li className="marker:text-[#ebee68]">шоу програми;</li>
    <li className="marker:text-[#ebee68]">музикални и танцови изпълнители;</li>
    <li className="marker:text-[#ebee68]">визуален ентъртейнмънт;</li>
    <li className="marker:text-[#ebee68]">стенд-ъп комици и професионални водещи;</li>
    <li className="marker:text-[#ebee68]">фотосесии за запазване на спомените.</li>
  </ul>
</li>

    <li>
      <span className="font-bold text-[#ebee68]">Именни дни</span><span className="text-[#ebee68]"> – стилни и уютни събирания, които отбелязват важния ден по ваш вкус. </span>
    </li>
    <li className="text-[#ebee68]">
      <span className="font-bold text-[#ebee68]">Детски празници</span><span className="text-[#ebee68]"> – пъстри и изпълнени с радост формати: </span>
    <ul className="mt-2 pl-6 list-[circle] space-y-1">
    <li className="marker:text-[#ebee68]">кръщенета;</li>
    <li className="marker:text-[#ebee68]">детски рождени дни;</li>
    <li className="marker:text-[#ebee68]">gender reveal партита;</li>
    <li className="marker:text-[#ebee68]">погачи;</li>
    <li className="marker:text-[#ebee68]">прощъпулници и други поводи.</li>
  </ul>
    </li>
    <li className="text-[#ebee68]">
      <span className="font-bold text-[#ebee68]">Сватбени празненства</span><span className="text-[#ebee68]"> – специални събития преди </span>
        {" "}големия ден:
        <ul className="mt-2 pl-6 list-[circle] space-y-1">
    <li className="marker:text-[#ebee68]">моминско и ергенско парти;</li>
    <li className="marker:text-[#ebee68]">частична или цялостна сватбена организация.</li>
    </ul>
    </li>
  </ul>
</div>

                                  {/* IMG 6 */}
          <div className="justify-self-center md:justify-self-end self-start">
          <div className="w-[350px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#ebee68] grid place-items-center pb-8 pl-8 md:pl-10 md:mt-32">
              <figure className="mt-10 justify-center">
                <img
                  src="51.svg"
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
      {/* текст – над декора */}
      <div className="order-1 md:order-2 max-w-2xl mr-auto text-left md:pl-16 relative z-10">
      <div className="max-w-2xl mr-auto text-left pl-16 relative z-10">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#ebee68] mb-6">
          Нашият подход
        </h2>
        <p className="font-inter text-xl md:text-3xl text-[#ebee68] leading-snug mb-6">
        Вярваме, че личните събития са отражение на хората, които ги празнуват. Затова започваме с разговор, за да разберем какво е важно за вас – атмосферата, темата, изненадите. След това изграждаме концепция и координираме всички елементи: локация, декор, музика, програма, фото и видеозаснемане. Можете да изберете цялостна организация или да поверите на нас само определени части, докато останалото остане във ваши ръце.
        </p>
      </div>
      </div>
        <div className="order-2 md:order-1 mx-auto mw-[420px] w-[350px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#ebee68] grid place-items-center pb-8 pl-8 md:pl-10 mt-22">
        <figure className="mt-10 justify-center">
        <img
          src="52.svg"
          alt="Корпоративни събития"
          className="w-[90%] h-auto object-contain"
        />
        </figure>
      </div>
    </div>
  </div>
</section>

    <section className="py-6 relative z-[10]">
    <div className="mx-auto p-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div className="relative text-[#ebee68] font-inter font-normal">
    <div className="grid grid-cols-1 md:grid-cols-2 item-start gap-8 mad:gap-12">
<div className="space-y-6 md:pr-8">
  <h2 className="font-poppins font-bold text-3xl md:text-4xl pb-2">
    Защо да ни се доверите? 
  </h2>
<p className="text-xl mb:text-3xl">
    Празниците трябва да се изживяват, а не да се организират в напрежение. Ние ви помагаме да се освободите от стреса и да се насладите на момента. Работим с широка мрежа от партньори – декоратори, музиканти, фотографи, кетъринг фирми и аниматори – за да създадем празник, който е изцяло във вашия стил. Независимо дали искате елегантност, забавление или нещо напълно нестандартно, ще ви предложим решение, което носи радост и оставя емоция.
</p>
</div>

                                  {/* IMG 6 */}
          <div className="justify-self-center md:justify-self-end self-start">
          <div className="w-[350px] sm:w-[460px] md:w-[600px] aspect-square rounded-full border-4 border-[#ebee68] grid place-items-center pb-8 pl-8 md:pl-10 mt-[22px]">
              <figure className="mt-10 justify-center">
                <img
                  src="53.svg"
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
               left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2
               w-[850px] h-auto object-contain opacity-70"
            />
      </div>
    </section>

             {/* Call to action */}
             <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-[20] mt-6 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-2xl font-inter font-bold text-[#075994] mb-5 max-w-2xl mx-auto">
              Вашият празник е вашата история. <span className="text-[#f96e0c]">Нека я превърнем в преживяване, което ще се помни остави следа у вас и гостите ви!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/inquiry"
                className="bg-[#ebee68] hover:bg-[#afb230] text-[#075994] hover:text-[#ebee68] px-8 py-4 rounded-lg text-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Кликни тук, за да направиш запитване
              </Link>
              </div>
            </div>
          </div>

    </div>
  );
};

export default PersonalCelebrations;