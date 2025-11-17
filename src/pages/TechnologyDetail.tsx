import { ArrowLeft, Cpu, Smartphone, Cloud, TrendingUp, Users, Globe } from 'lucide-react';

type Page = 'home' | 'features' | 'about' | 'technology' | 'consultancy' | 'market' | 'value' | 'impact';

interface TechnologyDetailProps {
  onNavigate: (page: Page) => void;
}

export default function TechnologyDetail({ onNavigate }: TechnologyDetailProps) {
  return (
    <div className="pt-16">
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('features')}
            className="mb-8 text-white hover:text-gray-200 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Programs
          </button>
          <div className="flex items-center mb-6">
            <Cpu size={64} className="text-white mr-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">Technology</h1>
          </div>
          <p className="text-2xl text-white max-w-3xl">
            Transforming Agriculture with Data, AI, and IoT
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#61B471' }}>
              Angaza SATFARM Platform
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Angaza SATFARM is an integrated smart farming application that empowers smallholder farmers with AI-driven, real-time agricultural insights. The app combines IoT sensors, satellite imagery, and generative AI to support decision-making in crop and livestock management. By automating the collection and analysis of environmental data such as soil moisture, nutrient levels, weather, and pest presence, SATFARM provides tailored advisories via mobile apps, SMS, and USSD. Its offline capabilities and local language support ensure accessibility even in remote, low-connectivity areas.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <Smartphone size={48} style={{ color: '#61B471' }} className="mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#61B471' }}>
                  Mobile First
                </h3>
                <p className="text-gray-700">
                  Accessible via mobile apps, SMS, and USSD for maximum reach, even in low-connectivity areas.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <Cloud size={48} style={{ color: '#61B471' }} className="mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#61B471' }}>
                  AI-Powered
                </h3>
                <p className="text-gray-700">
                  Generative AI analyzes satellite and IoT data to provide real-time farming advisories.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <Globe size={48} style={{ color: '#61B471' }} className="mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#61B471' }}>
                  Offline Ready
                </h3>
                <p className="text-gray-700">
                  Works in areas with limited internet connectivity, ensuring continuous access to critical information.
                </p>
              </div>
            </div>

            <div
              className="my-12 p-8 rounded-xl"
              style={{ backgroundColor: 'rgba(97, 180, 113, 0.1)' }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
                Impact on Society
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <TrendingUp size={24} style={{ color: '#61B471' }} className="mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">
                    <strong>Enhanced Productivity:</strong> SATFARM enhances productivity, reduces input waste, and strengthens climate resilience. Farmers are equipped with predictive tools for irrigation, disease control, and yield forecasting, which has shown to increase incomes and reduce losses.
                  </p>
                </div>
                <div className="flex items-start">
                  <Users size={24} style={{ color: '#61B471' }} className="mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">
                    <strong>Inclusive Access:</strong> Women and youth, often excluded from digital tools, are prioritized through inclusive training, smartphone access, and co-creation processes.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
              Future Use Cases
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Beyond current deployment, SATFARM's modular design enables new use cases:
            </p>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#61B471' }}>•</span>
                <span>Carbon credit tracking using soil and crop data</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#61B471' }}>•</span>
                <span>Market intelligence and pricing forecasts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#61B471' }}>•</span>
                <span>Automated insurance claims based on weather and crop loss data</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#61B471' }}>•</span>
                <span>Livestock security traceability and AI-assisted veterinary alerts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#61B471' }}>•</span>
                <span>Regenerative farming analytics for sustainability reporting</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('features')}
              className="px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
              style={{ backgroundColor: '#61B471' }}
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
