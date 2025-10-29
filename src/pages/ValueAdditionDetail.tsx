import { ArrowLeft, TrendingUp, Package, Droplet, Coffee } from 'lucide-react';

type Page = 'home' | 'features' | 'about' | 'technology' | 'consultancy' | 'market' | 'value';

interface ValueAdditionDetailProps {
  onNavigate: (page: Page) => void;
}

export default function ValueAdditionDetail({ onNavigate }: ValueAdditionDetailProps) {
  return (
    <div className="pt-16">
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
            <TrendingUp size={64} className="text-white mr-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">Value Addition</h1>
          </div>
          <p className="text-2xl text-white max-w-3xl">
            Transforming Raw Produce into High-Demand Market-Ready Products
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Angaza has established a value addition facility in rural western Kenya at Bukura Agricultural Training College (ATC) to complete the value chains for high-impact crops such as soybeans, sunflower, mucuna beans, and avocados. This project transforms raw produce from smallholder farmers into market-ready, high-demand products, significantly increasing their incomes and ensuring sustainable market access.
            </p>

            <div
              className="my-12 p-8 rounded-xl"
              style={{ backgroundColor: 'rgba(97, 180, 113, 0.1)' }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
                Strategic Location Advantage
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                By being near the farmers, we reduce the number of middle men and also ensure higher touch with the farmers, driving higher quality of products. This proximity enables us to maintain strict quality control and build strong relationships with farming communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Droplet size={40} style={{ color: '#61B471' }} className="mr-3" />
                  <h3 className="text-2xl font-bold" style={{ color: '#61B471' }}>
                    Oil Pressing
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At the heart of this initiative is oil pressing, where soybeans and sunflower seeds are processed into natural, unrefined cooking oil. This oil is not only healthier but also more affordable, directly benefiting peri-urban and urban populations seeking better food options.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Package size={40} style={{ color: '#61B471' }} className="mr-3" />
                  <h3 className="text-2xl font-bold" style={{ color: '#61B471' }}>
                    Byproduct Utilization
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The byproducts of soy and sunflower cake are repurposed as key ingredients for fish feed production, supporting the blue economy by reducing the cost of feed and enhancing aquaculture profitability.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg col-span-full">
                <div className="flex items-center mb-4">
                  <Coffee size={40} style={{ color: '#61B471' }} className="mr-3" />
                  <h3 className="text-2xl font-bold" style={{ color: '#61B471' }}>
                    Mucuna Bean Processing
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Mucuna beans are processed into beverage powders, opening new markets in the functional food space. These powders are positioned as affordable natural beverages packed with potential health benefits. Mucuna beans are high in L-dopa, making them valuable for both nutritional and pharmaceutical applications.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
              Sustainable Impact
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Through this project, Angaza promotes sustainable agricultural practices, climate-smart innovations, and inclusive value chains. Farmers are not only linked to markets but also integrated into the processing economy, ensuring environmental stewardship, financial resilience, and long-term community empowerment.
            </p>

            <div
              className="my-12 p-8 rounded-xl"
              style={{ backgroundColor: 'rgba(97, 180, 113, 0.1)' }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
                A Model for Rural Industrialization
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                By anchoring value addition at Bukura ATC, Angaza provides a replicable model for rural industrialization and showcases how localized processing can drive both nutrition and economic growth in rural Kenya. This approach demonstrates that sustainable development and profitability can go hand in hand, creating lasting positive change for farming communities.
              </p>
            </div>
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
