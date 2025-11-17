import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'features' | 'about' | 'technology' | 'consultancy' | 'market' | 'value' | 'impact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Programs', page: 'features' },
    { label: 'About Us', page: 'about' },
    { label: 'Impact', page: 'impact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer gap-3"
            onClick={() => handleNavigate('home')}
          >
            <img
              src="/angazalogo.png"
              alt="Angaza Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl md:text-2xl font-bold" style={{ color: '#61B471' }}>
              Angaza Nexus
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-white'
                    : 'text-gray-700 hover:text-white hover:bg-opacity-90'
                }`}
                style={{
                  backgroundColor: currentPage === item.page ? '#61B471' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== item.page) {
                    e.currentTarget.style.backgroundColor = '#61B471';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== item.page) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md"
              style={{ color: '#61B471' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.page
                    ? 'text-white'
                    : 'text-gray-700'
                }`}
                style={{
                  backgroundColor: currentPage === item.page ? '#61B471' : 'transparent',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
