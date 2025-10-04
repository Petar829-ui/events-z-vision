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

  // Mobile collapsibles
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const [mobileCorpOpen, setMobileCorpOpen] = useState(false);
  const [mobileTbOpen, setMobileTbOpen] = useState(false);

  // Hover-intent timers (desktop)
  const svcTimer = useRef<number | null>(null);
  const corpTimer = useRef<number | null>(null);
  const tbTimer = useRef<number | null>(null);
  const trainTimer = useRef<number | null>(null);
  const privTimer = useRef<number | null>(null);

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

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center space-x-6 absolute right-10">
            <Link to="/" className={linkClasses(isActive("/"))}>
              Начало
            </Link>

            {/* Услуги (dropdown level 1) */}
            <div
              className="relative"
              onMouseEnter={openSvc}
              onMouseLeave={() => { closeSvcDelayed(); closeCorpDelayed(); closeTbDelayed(); closeTrainDelayed(); closePrivDelayed(); }}
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

              {/* мост между бутона и менюто */}
              {svcOpen && <div className="absolute left-0 right-0 top-full h-3" onMouseEnter={openSvc} />}

              {/* dropdown panel */}
              <div
                role="menu"
                onMouseEnter={openSvc}
                className={`absolute right-0 top-[calc(100%+0.4rem)] z-50 min-w-[340px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition
                  ${svcOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                `}
              >
                <div className="py-2">
                  {/* 1) Нашите услуги — full width */}
                  <Link
                    to="/services"
                    onClick={() => setSvcOpen(false)}
                    role="menuitem"
                    className="block w-full px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72] rounded-t-lg"
                  >
                    Нашите услуги
                  </Link>

                  {/* 2) Корпоративни събития — LINK + flyout on hover */}
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

                    {/* мост към flyout-а */}
                    {corpOpen && <div className="absolute -right-3 top-0 h-full w-3" onMouseEnter={openCorp} />}

                    {/* Flyout панел (level 2) */}
                    <div
                      onMouseEnter={openCorp}
                      className={`absolute left-full top-0 ml-3 min-w-[200px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition
                        ${corpOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
                      `}
                    >
                      {/* Тиймбилдинги — LINK + свой flyout */}
                      <div
                        className="relative"
                        onMouseEnter={openTb}
                        onMouseLeave={() => closeTbDelayed()}
                      >
                        <Link
                          to="/teambuildings"
                          onClick={() => { setSvcOpen(false); setCorpOpen(false); }}
                          className="flex w-full items-center justify-between pr-8 px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72]"
                        >
                          <span>Тиймбилдинги</span>
                        </Link>
                        <ChevronRight className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />

                        {/* мост към level 3 */}
                        {tbOpen && <div className="absolute -right-3 top-0 h-full w-3" onMouseEnter={openTb} />}

                        <div
                          onMouseEnter={openTb}
                          className={`absolute left-full top-0 ml-3 min-w-[200px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition
                            ${tbOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
                          `}
                        >
                          <Link to="/Training" className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72]">Обучения</Link>
                          <Link to="/Entertainment" className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72]">Развлекателни</Link>
                          <Link to="/MixedTeambuildings" className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72]">Смесени тиймбилдинги</Link>
                        </div>
                      </div>

                      {/* Останалите линкове на Corporate */}
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

                  {/* 3) Лични събития — LINK + flyout */}
                  <div
                    className="relative"
                    onMouseEnter={openPriv}
                    onMouseLeave={() => closePrivDelayed()}
                  >
                    {/* смени "/personal" ако ползваш друг route */}
                    <Link
                      to="/Personal"
                      onClick={() => { setSvcOpen(false); setPrivOpen(false); }}
                      className="flex w-full items-center justify-between pr-8 px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72]"
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
                        className="block px-5 py-3 text-sm font-inter font-medium text-gray-800 hover:bg-[#1f6da8] hover:text-[#c1ff72] rounded-lg"
                        onClick={() => setPrivOpen(false)}
                      >
                        Сватби
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            className={`xl:hidden p-2 ${scrolled ? "text-gray-700" : "text-white"} hover:text-[#1f6da8]`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu — unchanged (вече е с линкове + chevron за разгръщане) */}
        {isMenuOpen && (
          <nav id="mobile-menu" className="xl:hidden pb-4 border-t border-[#1f6da8]">
            <div className="flex flex-col space-y-1 pt-4">
              <Link
                to="/"
                onClick={closeAllMobile}
                className={`${linkBase} ${
                  isActive("/")
                    ? "text-white bg-[#1f6da8]"
                    : scrolled
                    ? "text-black hover:text-white hover:bg-[#1f6da8]"
                    : "text-white hover:text-[#c1ff72]"
                }`}
              >
                Начало
              </Link>

              {/* Услуги (level 1) */}
              <div className="rounded-lg">
                <div className="flex items-stretch">
                  <Link
                    to="/services"
                    onClick={closeAllMobile}
                    className={`${linkBase} flex-1 ${
                      isServicesActive
                        ? "text-white bg-[#1f6da8]"
                        : scrolled
                        ? "text-black hover:text-white hover:bg-[#1f6da8]"
                        : "text-white hover:text-[#c1ff72]"
                    }`}
                  >
                    Нашите услуги
                  </Link>
                  <button
                    onClick={() => setMobileSvcOpen(v => !v)}
                    aria-expanded={mobileSvcOpen}
                    className={`${linkBase} flex items-center justify-center !px-2 ${
                      isServicesActive
                        ? "text-white bg-[#1f6da8]"
                        : scrolled
                        ? "text-black hover:text-white hover:bg-[#1f6da8]"
                        : "text-white hover:text-[#c1ff72]"
                    }`}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileSvcOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {mobileSvcOpen && (
                  <div className="mt-1 ml-3 space-y-1">
                    {/* Корпоративни */}
                    <div className="rounded-lg">
                      <div className="flex items-stretch">
                        <Link
                          to="/corporate"
                          onClick={closeAllMobile}
                          className="block px-3 py-2 rounded-l-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#1f6da8] flex-1"
                        >
                          Корпоративни събития
                        </Link>
                        <button
                          onClick={() => setMobileCorpOpen(v => !v)}
                          aria-expanded={mobileCorpOpen}
                          className="px-3 py-2 rounded-r-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#1f6da8] flex items-center justify-center"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${mobileCorpOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>

                      {mobileCorpOpen && (
                        <div className="mt-1 ml-4 space-y-1">
                          <div className="rounded-lg">
                            <div className="flex items-stretch">
                              <Link
                                to="/teambuildings"
                                onClick={closeAllMobile}
                                className="block px-3 py-2 rounded-l-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#1f6da8] flex-1"
                              >
                                Тиймбилдинги
                              </Link>
                              <button
                                onClick={() => setMobileTbOpen(v => !v)}
                                aria-expanded={mobileTbOpen}
                                className="px-3 py-2 rounded-r-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#1f6da8] flex items-center justify-center"
                              >
                                <ChevronDown className={`h-4 w-4 transition-transform ${mobileTbOpen ? "rotate-180" : ""}`} />
                              </button>
                            </div>

                            {mobileTbOpen && (
                              <div className="mt-1 ml-4 space-y-1">
                                <Link to="/Training" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#1f6da8]">Обучения</Link>
                                <Link to="/Entertainment" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#1f6da8]">Развлекателни</Link>
                              </div>
                            )}
                          </div>

                          <Link to="/Company" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#1f6da8]">Фирмени партита</Link>
                          <Link to="/Conferences" onClick={closeAllMobile} className="block px-3 py-2 rounded-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#1f6da8]">Конференции</Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Top-level simple links */}
              {topItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeAllMobile}
                  className={`${linkBase} ${
                    isActive(item.path)
                      ? "text-white bg-[#1f6da8]"
                      : scrolled
                      ? "text-black hover:text-white hover:bg-[#1f6da8]"
                      : "text-white hover:text-[#c1ff72]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
