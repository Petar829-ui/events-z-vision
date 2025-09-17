import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-[#075994] pb-10">
      <section
        className="bg-white py-20 bg-cover bg-center min-h-[80vh]"
        style={{ backgroundImage: "url('website 2 service background design EZV.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-semibold text-white pt-16 mb-64">
              <span className="text-[#c1ff72]">Нашите</span> услуги
            </h1>
            <p className="text-3xl text-white max-w-6xl mx-auto leading-snung font-playfair font-semibold">
              <span className="text-[#c1ff72]">Организацията на събития е</span> изкуство
              <span className="text-[#c1ff72]">, в което всеки детайл има значение. В</span> Events Z Vision{' '}
              <span className="text-[#c1ff72]">предлагаме пълна гама услуги за</span> корпоративни събития, лични празници и нестандартни “Z Experience” формати.{' '}
              <span className="text-[#c1ff72]">Събитията, които създаваме вдъхновяват, обединяват и оставят следа.</span>
            </p>
          </div>
        </div>
      </section>

      <div className='max-w-7xl mx-auto relative'>
        <h2 className='text-5xl font-poppins font-bold text-center text-white p-10'>
          <span className='text-[#c1ff72]'>Категории</span> услуги</h2>
          <h2 className='text-3xl font-poppins font-bold text-center text-[#c1ff72] text-right mt-16 mb-16'>Организиране на корпоративни събития</h2>
          <div className='grid justify-end ml-auto px-9'>
          <p className='text-2xl text-[#c1ff72] font-inter font-normal max-w-md leading-snug'>Фирмени партита, тиймбилдинги, семинари и работни срещи – всичко,
             от което бизнесът ви има нужда, за да изгради доверие,
              да сплоти екипа си и да представи своята визия.
               Ние сме до вас, за да превърнем всяко корпоративно събитие в преживяване със смисъл,
                подкрепено от професионална организация и внимание към детайла.</p>
                </div>
      </div> 

      {/* Additional Services */}
      <div className="mt-20 bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-inter font-semibold mb-4 text-[#075994]">
          Искате ли вашето събитие да бъде повече от формалност?
        </h2>
        <p className="text-xl font-inter font-semibold text-[#f96e0c] mb-8 max-w-2xl mx-auto">
          Свържете се с нас и заедно ще създадем преживяване, което ще се помни.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/inquiry"
            className="bg-[#c1ff72] hover:bg-[#2f492f] text-[#075994] hover:text-[#c1ff72] px-8 py-4 rounded-lg text-lg font-poppins font-bold transition-colors duration-200"
          >
            Кликни тук, за да направиш запитване
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
