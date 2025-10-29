import { ArrowLeft, ShoppingBag, Users, TrendingUp, Globe } from 'lucide-react';

type Page = 'home' | 'features' | 'about' | 'technology' | 'consultancy' | 'market' | 'value';

interface MarketAccessDetailProps {
  onNavigate: (page: Page) => void;
}

export default function MarketAccessDetail({ onNavigate }: MarketAccessDetailProps) {
  return (
    <div className="pt-16">
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('features')}
            className="mb-8 text-white hover:text-gray-200 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Features
          </button>
          <div className="flex items-center mb-6">
            <ShoppingBag size={64} className="text-white mr-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">Market Access</h1>
          </div>
          <p className="text-2xl text-white max-w-3xl">
            Connecting Rural Farmers to Reliable and Profitable Markets
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Angaza is transforming rural economies by connecting smallholder farmers to stable, high-value markets through structured contract farming arrangements. Our model ensures that farmers receive fair pricing, reliable offtake, and agronomic support, significantly improving incomes and building resilience.
            </p>

            <div
              className="my-12 p-8 rounded-xl"
              style={{ backgroundColor: 'rgba(97, 180, 113, 0.1)' }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
                High-Value Crops
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At the heart of our strategy is the promotion of high-value crops: avocados, sunflower, soybeans, and mucuna beans, which have strong demand in local, regional, and export markets. By aggregating production and guaranteeing purchase agreements, we de-risk farming for producers while providing processors and exporters with consistent supply.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <TrendingUp size={32} style={{ color: '#61B471' }} className="mr-3" />
                  <h3 className="text-2xl font-bold" style={{ color: '#61B471' }}>
                    Avocado Program
                  </h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Our avocado program supports over 500 farmers with seedlings, organic fertilizer, and technical assistance, linking them to fresh fruit and oil export markets.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Users size={32} style={{ color: '#61B471' }} className="mr-3" />
                  <h3 className="text-2xl font-bold" style={{ color: '#61B471' }}>
                    Sunflower & Soybean
                  </h3>
                </div>
                <p className="text-gray-700 text-lg">
                  We have partnered with over 800 youth and women in Western Kenya to produce high-oil varieties, processed into cooking oil, animal feed, and powdered beverages at our Bukura plant.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Globe size={32} style={{ color: '#61B471' }} className="mr-3" />
                  <h3 className="text-2xl font-bold" style={{ color: '#61B471' }}>
                    Mucuna Initiative
                  </h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Our mucuna initiative provides opportunities for income from a climate-resilient legume that serves both pharmaceutical and feed industries. Angaza processes Mucuna beans into a high-value beverage powder sold to local and international markets.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <ShoppingBag size={32} style={{ color: '#61B471' }} className="mr-3" />
                  <h3 className="text-2xl font-bold" style={{ color: '#61B471' }}>
                    Comprehensive Support
                  </h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Angaza's approach includes input financing, digital crop monitoring, extension services, and value addition, ensuring that farmers not only grow, but profit from what they produce.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
              Creating Sustainable Market Systems
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Through partnerships with cooperatives, NGOs, and public institutions, we are creating scalable systems that promote economic inclusion, food security, and climate-smart agriculture.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              By building trusted market linkages, Angaza enables rural farmers to tap into lucrative agricultural opportunities, unlocking growth, dignity, and long-term prosperity for farming communities across Kenya and beyond.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('features')}
              className="px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
              style={{ backgroundColor: '#61B471' }}
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Features
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
