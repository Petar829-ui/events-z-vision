import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [ 
    { name: 'Начало', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'За нас', path: '/about' },
    { name: 'Портфолио', path: '/portfolio' },
    { name: 'Блог', path: '/blog' },
    { name: 'Партньори', path: '/partnerships' },
    { name: 'Контакти', path: '/contacts' },
    { name: 'Запитване', path: '/inquiry' },
  ];

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 min-h-16">
          <Link to="/" className="flex items-center space-x-3 absolute left-10">
            <img 
              src="Events Z visioN logo1.pdf.png" 
              alt="Events Z Vision Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-inter font-bold text-gray-900">Events Z Vision</span>
          </Link>

          {/* Desktop Menu - показва всички страници */}
          <nav className="hidden xl:flex items-center space-x-6 absolute right-10">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg ${
                  isActivePage(item.path)
                    ? 'text-white bg-[#075994]'
                    : 'text-black-700 hover:text-white hover:bg-[#075994]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-gray-700 hover:text-[#075994]"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="xl:hidden pb-4 border-t border-[#075994]">
            <div className="flex flex-col space-y-1 pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActivePage(item.path)
                      ? 'text-white bg-[#075994]'
                      : 'text-black-700 hover:text-brand-blue hover:bg-[#075994]'
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