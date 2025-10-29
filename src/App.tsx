import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import TechnologyDetail from './pages/TechnologyDetail';
import ConsultancyDetail from './pages/ConsultancyDetail';
import MarketAccessDetail from './pages/MarketAccessDetail';
import ValueAdditionDetail from './pages/ValueAdditionDetail';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

type Page = 'home' | 'features' | 'about' | 'technology' | 'consultancy' | 'market' | 'value';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'features':
        return <FeaturesPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'technology':
        return <TechnologyDetail onNavigate={setCurrentPage} />;
      case 'consultancy':
        return <ConsultancyDetail onNavigate={setCurrentPage} />;
      case 'market':
        return <MarketAccessDetail onNavigate={setCurrentPage} />;
      case 'value':
        return <ValueAdditionDetail onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
