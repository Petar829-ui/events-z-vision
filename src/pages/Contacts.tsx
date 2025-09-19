import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SiTiktok } from "react-icons/si";

const Contacts = () => {
  return (
    <div className="pt-24 pb-9 bg-[#075994]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заглавие */}
        <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-[#c1ff72] text-center">
          Контакти
        </h1>

        {/* Ляво/Дясно заглавия */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-3xl md:text-4xl font-poppins font-semibold">
            <span className="text-[#c1ff72]"><br />Информация</span>{" "}
            <span className="text-white">за контакт</span>
          </p>
          <p className="text-2xl md:text-4xl font-poppins font-semibold text-center md:text-center">
            <span className="text-[#c1ff72]">Следваш ли нашите<br /> профили</span>
            <span className="text-white"> в социалните<br /> мрежи?</span>
          </p>
          <img src="website design N EZV.png" alt="Image" 
         className="pointer-events-none absolute left-1/2 top-[30rem] -translate-x-1/2 -translate-y-1/2 w-[750px] h-auto object-contain z-[-1] opacity-70" />
        </div>

        {/* Две колони */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 opacity-85">
          {/* Лява карта */}
          <div className="bg-white rounded-3xl shadow-xl p-8 z-[1]">
            <h2 className="text-2xl font-bold text-[#f96e0c] mb-6">Информация за контакт</h2>

            <div className="space-y-8">
              {/* Адрес */}
              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-[#075994]">
                    <span className="text-[#f96e0c]">Адрес:</span>{" "}
                    София, кв. “Карпузица”, 1619, ул. “Любляна” 47А
                  </p>
                </div>
              </div>

              {/* Телефони */}
              <div className="flex gap-4 font-inter font-semibold text-[#075994]">
                <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-[#f96e0c]">Телефонни номера:</p>
                  <p>+359 885928422</p>
                  <p>+359 888805512</p>
                </div>
              </div>

              {/* Имейл */}
              <div className="flex gap-4 font-inter font-semibold text-[#075994]">
                <div className="bg-lime-100 text-lime-700 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-[#f96e0c]">Имейл:</p>
                  <p>info@eventszv.bg</p>
                  <p>office@eventszv.bg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Дясна карта – социалки */}
          <div className="relative bg-slate-100 rounded-3xl shadow-xl p-8">
            {/* Плочки вътре в картата */}
            <div className="mt-2 flex flex-col items-left gap-4">
              {/* Facebook */}

             <a
                href="https://facebook.com/eventszv"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-4 rounded-xl
                           bg-blue-100 hover:bg-blue-200 text-blue-700 transition-all
                           shadow-sm hover:shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-medium">Facebook @UserName</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/eventszv"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-4 rounded-xl
                           bg-pink-100 hover:bg-pink-200 text-pink-600 transition-all
                           shadow-sm hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-medium">Instagram @UserName</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/eventszv"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-4 rounded-xl
                           bg-indigo-100 hover:bg-indigo-200 text-indigo-700 transition-all
                           shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-medium">LinkedIn @UserName</span>
              </a>

              {/* TikTok – без външен пакет, ползваме Music2 като иконка */}
              <a
                href="https://www.tiktok.com/@eventszv"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-4 rounded-xl
                           bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-all
                           shadow-sm hover:shadow-md"
                aria-label="TikTok"
              >
                <Music2 className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-medium">TikTok @UserName</span>
              </a>

            </div>
          </div>
        </div>

        {/* Голям зелен CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/inquiry"
            className="w-full max-w-4xl bg-[#c1ff72] text-[#075994] font-poppins font-bold 
                       text-xl md:text-2xl px-8 py-6 rounded-full text-center
                       hover:bg-[#2f492f] hover:text-[#c1ff72] transition-colors duration-200
                       shadow-lg"
          >
            Кликни тук, за да направиш запитване
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
