import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Desktop dropdown states
  const [svcOpen, setSvcOpen] = useState(false);
  const [corpOpen, setCorpOpen] = useState(false);
  const [tbOpen, setTbOpen] = useState(false);
  const [trainOpen, setTrainOpen] = useState(false);
  const [privOpen, setPrivOpen] = useState(false);
  const [zexpOpen, setZexpOpen] = useState(false);

  // Mobile collapsibles
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const [mobileCorpOpen, setMobileCorpOpen] = useState(false);
  const [mobileTbOpen, setMobileTbOpen] = useState(false);
  const [mobilePrivOpen, setMobilePrivOpen] = useState(false);
  const [mobileZexpOpen, setMobileZexpOpen] = useState(false);

  // Hover-intent timers (desktop)
  const svcTimer = useRef<number | null>(null);
  const corpTimer = useRef<number | null>(null);
  const tbTimer = useRef<number | null>(null);
  const trainTimer = useRef<number | null>(null);
  const privTimer = useRef<number | null>(null);
  const zexpTimer = useRef<number | null>(null);

  const openSvc = () => { if (svcTimer.current) clearTimeout(svcTimer.current); setSvcOpen(true); };
  const closeSvcDelayed = (d=320) => { if (svcTimer.current) clearTimeout(svcTimer.current); svcTimer.current = window.setTimeout(()=>setSvcOpen(false), d); };

  const openCorp = () => { if (corpTimer.current) clearTimeout(corpTimer.current); setCorpOpen(true); };
  const closeCorpDelayed = (d=320) => { if (corpTimer.current) clearTimeout(corpTimer.current); corpTimer.current = window.setTimeout(()=>setCorpOpen(false), d); };

  const openTb = () => { if (tbTimer.current) clearTimeout(tbTimer.current); setTbOpen(true); };
  const closeTbDelayed = (d=320) => { if (tbTimer.current) clearTimeout(tbTimer.current); tbTimer.current = window.setTimeout(()=>setTbOpen(false), d); };

  const openTrain = () => { if (trainTimer.current) clearTimeout(trainTimer.current); setTrainOpen(true); };
  const closeTrainDelayed = (d=320) => { if (trainTimer.current) clearTimeout(trainTimer.current); trainTimer.current = window.setTimeout(()=>setTrainOpen(false), d); };

  const openPriv = () => { if (privTimer.current) clearTimeout(privTimer.current); setPrivOpen(true); };
  const closePrivDelayed = (d=320) => { if (privTimer.current) clearTimeout(privTimer.current); privTimer.current = window.setTimeout(()=>setPrivOpen(false), d); };

  const openZexp = () => { if (zexpTimer.current) clearTimeout(zexpTimer.current); setZexpOpen(true); };
  const closeZexpDelayed = (d=320) => { if (zexpTimer.current) clearTimeout(zexpTimer.current); zexpTimer.current = window.setTimeout(()=>setZexpOpen(false), d); };

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topItems = [
    { name: "За нас", path: "/about" },
    { name: "Блог", path: "/blog" },
    { name: "Партньори", path: "/partnerships" },
    { name: "Контакти", path: "/contacts" },
    { name: "Запитване", path: "/inquiry" },
  ];

  const isActive = (p: string) => location.pathname === p;
  const isServicesActive =
    location.pathname.startsWith("/services") ||
    location.pathname.startsWith("/corporate") ||
    location.pathname.startsWith("/teambuildings") ||
    location.pathname.startsWith("/Training") ||
    location.pathname.startsWith("/Company") ||
    location.pathname.startsWith("/Conferences");

  const linkBase =
    "text-sm font-inter font-medium transition-colors duration-200 px-3 py-2 rounded-lg";
  const linkClasses = (active: boolean) =>
    `${linkBase} ${
      active
        ? "text-white bg-[#1f6da8]"
        : scrolled
        ? "text-black hover:text-white hover:bg-[#1f6da8]"
        : "text-white hover:text-[#c1ff72]"
    }`;

  const closeAllMobile = () => {
    setIsMenuOpen(false);
    setMobileSvcOpen(false);
    setMobileCorpOpen(false);
    setMobileTbOpen(false);
    setMobilePrivOpen(false);
    setMobileZexpOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 min-h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 absolute left-10">
            <img
              src="Events Z visioN logo1.pdf.png"
              alt="Events Z Vision Logo"
              className="h-12 w-12 object-contain"
            />
            <span
              className={`text-xl font-inter font-bold ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Events Z Vision
            </span>
          </Link>

          {/* Desktop nav (не пипам) */}
          <nav className="hidden xl:flex items-center space-x-6 absolute right-10">
            <Link to="/" className={linkClasses(isActive("/"))}>
              Начало
            </Link>

            {/* Услуги */}
            <div
              className="relative"
              onMouseEnter={openSvc}
              onMouseLeave={() => {
                closeSvcDelayed();
                closeCorpDelayed();
                closeTbDelayed();
                closeTrainDelayed();
                closePrivDelayed();
                closeZexpDelayed();
              }}
            >
              <button
                onClick={() => setSvcOpen(v => !v)}
                aria-expanded={svcOpen}
                aria-haspopup="menu"
                className={linkClasses(isServicesActive)}
              >
                <span className="inline-flex items-center">
                  Услуги
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${svcOpen ? "rotate-180" : ""}`} />
                </span>
              </button>

              {svcOpen && <div className="absolute left-0 right-0 top-full h-3" onMouseEnter={openSvc} />}

              <div
                role="menu"
                onMouseEnter={openSvc}
                className={`absolute right-0 top-[calc(100%+0.4rem)] z-50 min-w-[340px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition
                  ${svcOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                `}
              >
                <div className="py-2">
                  <Link
                    to="/services"
                    onClick={() => setSvcOpen(false)}
                    role="menuitem"
                    className="block w-full px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72]"
                  >
                    Нашите услуги
                  </Link>

                  {/* Корпоративни */}
                  <div
                    className="relative"
                    onMouseEnter={openCorp}
                    onMouseLeave={() => closeCorpDelayed()}
                  >
                    <Link
                      to="/corporate"
                      onClick={() => { setSvcOpen(false); setCorpOpen(false); }}
                      className="flex w-full items-center justify-between pr-8 px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72]"
                    >
                      <span>Корпоративни събития</span>
                    </Link>
                    <ChevronRight className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    {corpOpen && <div className="absolute -right-3 top-0 h-full w-3" onMouseEnter={openCorp} />}

                    <div
                      onMouseEnter={openCorp}
                      className={`absolute left-full top-0 ml-3 min-w-[200px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition
                        ${corpOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
                      `}
                    >
                      {/* Тиймбилдинги */}
                      <div
                        className="relative"
                        onMouseEnter={openTb}
                        onMouseLeave={() => closeTbDelayed()}
                      >
                        <Link
                          to="/teambuildings"
                          onClick={() => { setSvcOpen(false); setCorpOpen(false); }}
                          className="flex w-full items-center justify-between pr-8 px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72] rounded-t-lg"
                        >
                          <span>Тиймбилдинги</span>
                        </Link>
                        <ChevronRight className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        {tbOpen && <div className="absolute -right-3 top-0 h-full w-3" onMouseEnter={openTb} />}

                        <div
                          onMouseEnter={openTb}
                          className={`absolute left-full top-0 ml-3 min-w-[200px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition
                            ${tbOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
                          `}
                        >
                          <Link to="/Training" className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72] rounded-t-lg">Обучения</Link>
                          <Link to="/Entertainment" className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72]">Развлекателни</Link>
                          <Link to="/MixedTeambuildings" className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72] rounded-b-lg">Смесени тиймбилдинги</Link>
                        </div>
                      </div>

                      <Link
                        to="/Company"
                        onClick={() => { setSvcOpen(false); setCorpOpen(false); }}
                        className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72]"
                      >
                        Фирмени партита
                      </Link>
                      <Link
                        to="/Conferences"
                        onClick={() => { setSvcOpen(false); setCorpOpen(false); }}
                        className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72] rounded-b-lg"
                      >
                        Конференции
                      </Link>
                    </div>
                  </div>

                  {/* Лични събития */}
                  <div
                    className="relative"
                    onMouseEnter={openPriv}
                    onMouseLeave={() => closePrivDelayed()}
                  >
                    <Link
                      to="/Personal"
                      onClick={() => { setSvcOpen(false); setPrivOpen(false); }}
                      className="flex w-full items-center justify-between pr-8 px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#ebee68] hover:text-[#075994]"
                    >
                      <span>Лични събития</span>
                    </Link>
                    <ChevronRight className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    {privOpen && <div className="absolute -right-3 top-0 h-full w-3" onMouseEnter={openPriv} />}

                    <div
                      onMouseEnter={openPriv}
                      className={`absolute left-full top-0 ml-3 min-w-[200px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition
                        ${privOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
                      `}
                    >
                      <Link
                        to="/Weddings"
                        className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#ebee68] hover:text-[#075994] rounded-t-lg"
                        onClick={() => { setPrivOpen(false); }}
                      >
                        Сватби
                      </Link>
                      <Link
                        to="/PersonalCelebrations"
                        className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#ebee68] hover:text-[#075994] rounded-b-lg"
                        onClick={() => { setPrivOpen(false); }}
                      >
                        Лични празници
                      </Link>
                    </div>
                  </div>

                  {/* Z Experience */}
                  <div
                    className="relative"
                    onMouseEnter={openZexp}
                    onMouseLeave={() => closeZexpDelayed()}
                  >
                    <Link
                      to="/ZExperience"
                      onClick={() => { setSvcOpen(false); setZexpOpen(false); }}
                      className="flex w-full items-center justify-between pr-8 px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-gradient-to-r from-[#000000] via-[#3533cd] to-[#075994] hover:text-[#30e8b0]"
                    >
                      <span>Z Experience събития</span>
                    </Link>
                    <ChevronRight className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    {zexpOpen && <div className="absolute -right-3 top-0 h-full w-3" onMouseEnter={openZexp} />}

                    <div
                      onMouseEnter={openZexp}
                      className={`absolute left-full top-0 ml-3 min-w-[200px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition
                        ${zexpOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
                      `}
                    >
                      <Link
                        to="/AuthorsZ"
                        onClick={() => { setSvcOpen(false); setZexpOpen(false); }}
                        className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-gradient-to-r from-[#000000] via-[#3533cd] to-[#075994] hover:text-[#30e8b0] rounded-t-lg"
                      >
                        Авторски Z Experience събития
                      </Link>
                      <Link
                        to="/Personalized"
                        onClick={() => { setSvcOpen(false); setZexpOpen(false); }}
                        className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-gradient-to-r from-[#000000] via-[#3533cd] to-[#075994] hover:text-[#30e8b0]"
                      >
                        Персонализирани събития по Ваша идея
                      </Link>
                      <Link
                        to="/Product"
                        onClick={() => { setSvcOpen(false); setZexpOpen(false); }}
                        className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-gradient-to-r from-[#000000] via-[#3533cd] to-[#075994] hover:text-[#30e8b0] rounded-b-lg"
                      >
                        Продуктови и рекламни събития
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {topItems.map((item) => (
              <Link key={item.path} to={item.path} className={linkClasses(isActive(item.path))}>
                {item.name}
              </Link>
            ))}
          </nav>

{/* Mobile Menu Button (RIGHT) */}
<button
  onClick={() => setIsMenuOpen((o) => !o)}
  className={`xl:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 ${
    scrolled ? "text-gray-700" : "text-white"
  } hover:text-[#1f6da8]`}
  aria-expanded={isMenuOpen}
  aria-controls="mobile-menu"
>
  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
</button>
        </div>

        {/* MOBILE DRAWER (дясна страна) */}
        {isMenuOpen && (
          <>
            {/* overlay */}
            <button
              aria-label="Close menu"
              onClick={closeAllMobile}
              className="fixed inset-0 bg-black/40 backdrop-blur-[1px] xl:hidden z-40"
            />
            {/* panel */}
            <nav
              id="mobile-menu"
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl xl:hidden z-50
                         border-l border-slate-200 overflow-y-auto"
            >
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="text-base font-semibold text-[#075994]">Меню</span>
                <button onClick={closeAllMobile} className="p-2 text-slate-600 hover:text-slate-900">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="px-3 py-4 space-y-1">
                <Link
                  to="/"
                  onClick={closeAllMobile}
                  className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100"
                >
                  Начало
                </Link>

                {/* Нашите услуги (accordion level 1) */}
                <div className="rounded-lg">
                  <div className="flex items-stretch">
                    <Link
                      to="/services"
                      onClick={closeAllMobile}
                      className="flex-1 block px-3 py-2 rounded-l-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100"
                    >
                      Нашите услуги
                    </Link>
                    <button
                      onClick={() => setMobileSvcOpen(v => !v)}
                      aria-expanded={mobileSvcOpen}
                      className="px-3 py-2 rounded-r-lg text-slate-700 hover:bg-slate-100"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileSvcOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {mobileSvcOpen && (
                    <div className="mt-1 ml-2 space-y-1">
                      {/* Корпоративни */}
                      <div className="rounded-lg">
                        <div className="flex items-stretch">
                          <Link
                            to="/corporate"
                            onClick={closeAllMobile}
                            className="flex-1 block px-3 py-2 rounded-l-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100"
                          >
                            Корпоративни събития
                          </Link>
                          <button
                            onClick={() => setMobileCorpOpen(v => !v)}
                            aria-expanded={mobileCorpOpen}
                            className="px-3 py-2 rounded-r-lg text-slate-700 hover:bg-slate-100"
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform ${mobileCorpOpen ? "rotate-180" : ""}`} />
                          </button>
                        </div>

                        {mobileCorpOpen && (
                          <div className="mt-1 ml-3 space-y-1">
                            {/* Тиймбилдинги */}
                            <div className="flex items-stretch">
                              <Link
                                to="/teambuildings"
                                onClick={closeAllMobile}
                                className="flex-1 block px-3 py-2 rounded-l-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100"
                              >
                                Тиймбилдинги
                              </Link>
                              <button
                                onClick={() => setMobileTbOpen(v => !v)}
                                aria-expanded={mobileTbOpen}
                                className="px-3 py-2 rounded-r-lg text-slate-700 hover:bg-slate-100"
                              >
                                <ChevronDown className={`h-4 w-4 transition-transform ${mobileTbOpen ? "rotate-180" : ""}`} />
                              </button>
                            </div>

                            {mobileTbOpen && (
                              <div className="mt-1 ml-3 space-y-1">
                                <Link to="/Training" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Обучения</Link>
                                <Link to="/Entertainment" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Развлекателни</Link>
                                <Link to="/MixedTeambuildings" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Смесени тиймбилдинги</Link>
                              </div>
                            )}

                            <Link to="/Company" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Фирмени партита</Link>
                            <Link to="/Conferences" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Конференции</Link>
                          </div>
                        )}
                      </div>

                      {/* Лични събития */}
                      <div className="rounded-lg">
                        <div className="flex items-stretch">
                          <Link
                            to="/Personal"
                            onClick={closeAllMobile}
                            className="flex-1 block px-3 py-2 rounded-l-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100"
                          >
                            Лични събития
                          </Link>
                          <button
                            onClick={() => setMobilePrivOpen(v => !v)}
                            aria-expanded={mobilePrivOpen}
                            className="px-3 py-2 rounded-r-lg text-slate-700 hover:bg-slate-100"
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform ${mobilePrivOpen ? "rotate-180" : ""}`} />
                          </button>
                        </div>

                        {mobilePrivOpen && (
                          <div className="mt-1 ml-3 space-y-1">
                            <Link to="/Weddings" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Сватби</Link>
                            <Link to="/PersonalCelebrations" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Лични празници</Link>
                          </div>
                        )}
                      </div>

                      {/* Z.Experience */}
                      <div className="rounded-lg">
                        <div className="flex items-stretch">
                          <Link
                            to="/ZExperience"
                            onClick={closeAllMobile}
                            className="flex-1 block px-3 py-2 rounded-l-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100"
                          >
                            Z.Experience събития
                          </Link>
                          <button
                            onClick={() => setMobileZexpOpen(v => !v)}
                            aria-expanded={mobileZexpOpen}
                            className="px-3 py-2 rounded-r-lg text-slate-700 hover:bg-slate-100"
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform ${mobileZexpOpen ? "rotate-180" : ""}`} />
                          </button>
                        </div>

                        {mobileZexpOpen && (
                          <div className="mt-1 ml-3 space-y-1">
                            <Link to="/AuthorsZ" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Авторски Z Experie събития</Link>
                            <Link to="/Personalized" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Персонализирани събития по Ваша идея</Link>
                            <Link to="/Product" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100">Продуктови и рекламни събития</Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Simple top items */}
                {topItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeAllMobile}
                    className="block px-3 py-2 rounded-lg text-[15px] font-medium text-slate-800 hover:bg-slate-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
