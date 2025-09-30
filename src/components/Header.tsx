import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // dropdown states
  const [svcOpen, setSvcOpen] = useState(false);        // Services
  const [corpOpen, setCorpOpen] = useState(false);      // Corporate (nested)

  // mobile collapsibles
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const [mobileCorpOpen, setMobileCorpOpen] = useState(false);

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
    location.pathname.startsWith("/teambuildings");

  const linkBase =
    "text-sm font-inter font-medium transition-colors duration-200 px-3 py-2 rounded-lg";
  const linkClasses = (active: boolean) =>
    `${linkBase} ${
      active
        ? "text-white bg-[#1f6da8]"
        : scrolled
        ? "text-black hover:text-white hover:bg-[#075994]"
        : "text-white hover:text-[#c1ff72]"
    }`;

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

            {/* Services (dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setSvcOpen(true)}
              onMouseLeave={() => {
                setSvcOpen(false);
                setCorpOpen(false);
              }}
            >
              <button
                onClick={() => setSvcOpen((v) => !v)}
                className={linkClasses(isServicesActive)}
              >
                <span className="inline-flex items-center">
                  Услуги
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      svcOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              {/* 1st level dropdown */}
              <div
                className={`absolute right-0 top-full z-50 min-w-[240px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition ${
                  svcOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <Link
                  to="/services"
                  onClick={() => setSvcOpen(false)}
                  className="block px-4 py-2.5 text-sm font-inter font-medium text-gray-800 hover:bg-[#075994] hover:text-[#c1ff72] rounded-t-lg"
                >
                  Нашите услуги
                </Link>

                {/* Corporate with flyout */}
                <div
                  className="relative"
                  onMouseEnter={() => setCorpOpen(true)}
                  onMouseLeave={() => setCorpOpen(false)}
                >
                  <Link
                    to="/corporate"
                    onClick={() => setSvcOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 text-sm font-inter font-medium text-gray-800 hover:bg-[#075994] hover:text-[#c1ff72]"
                  >
                    <span>Корпоративни</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>

                  <div
                    className={`absolute left-full top-0 ml-1 min-w-[220px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition ${
                      corpOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <Link
                      to="/teambuildings"
                      onClick={() => setSvcOpen(false)}
                      className="block px-4 py-2.5 text-sm font-inter font-medium text-gray-800 hover:bg-[#075994] hover:text-[#c1ff72] rounded-lg"
                    >
                      Тиймбилдинги
                    </Link>

                    <Link
                      to="/Company"
                      onClick={() => setSvcOpen(false)}
                      className="block px-4 py-2.5 text-sm font-inter font-medium text-gray-800 hover:bg-[#075994] hover:text-[#c1ff72] rounded-lg"
                    >
                      Фирмени партита
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {topItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={linkClasses(isActive(item.path))}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            className={`xl:hidden p-2 ${
              scrolled ? "text-gray-700" : "text-white"
            } hover:text-[#075994]`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="xl:hidden pb-4 border-t border-[#075994]">
            <div className="flex flex-col space-y-1 pt-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`${linkBase} ${
                  isActive("/")
                    ? "text-white bg-[#075994]"
                    : scrolled
                    ? "text-black hover:text-white hover:bg-[#075994]"
                    : "text-white hover:text-[#c1ff72]"
                }`}
              >
                Начало
              </Link>

              {/* Services – collapsible */}
              <button
                onClick={() => setMobileSvcOpen((v) => !v)}
                className={`${linkBase} flex items-center justify-between ${
                  isServicesActive
                    ? "text-white bg-[#075994]"
                    : scrolled
                    ? "text-black hover:text-white hover:bg-[#075994]"
                    : "text-white hover:text-[#c1ff72]"
                }`}
              >
                <span>Услуги</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileSvcOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileSvcOpen && (
                <div className="ml-3 mt-1 space-y-1">
                  <Link
                    to="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#075994]"
                  >
                    Нашите услуги
                  </Link>

                  {/* Корпоративни – nested collapsible (без „Корпоративни – общо“) */}
                  <button
                    onClick={() => setMobileCorpOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#075994]"
                  >
                    <span>Корпоративни</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileCorpOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileCorpOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {/* оставяме само Тиймбилдинги */}
                      <Link
                        to="/teambuildings"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 rounded-lg text-sm font-inter font-medium text-white/90 hover:text-[#c1ff72] hover:bg-[#075994]"
                      >
                        Тиймбилдинги
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {topItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${linkBase} ${
                    isActive(item.path)
                      ? "text-white bg-[#075994]"
                      : scrolled
                      ? "text-black hover:text-white hover:bg-[#075994]"
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
