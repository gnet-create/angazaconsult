import { ArrowLeft, Users, Target, BookOpen, TrendingUp } from 'lucide-react';

type Page = 'home' | 'features' | 'about' | 'technology' | 'consultancy' | 'market' | 'value';

interface ConsultancyDetailProps {
  onNavigate: (page: Page) => void;
}

export default function ConsultancyDetail({ onNavigate }: ConsultancyDetailProps) {
  return (
    <div className="pt-16">
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
            <Users size={64} className="text-white mr-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">Consultancy</h1>
          </div>
          <p className="text-2xl text-white max-w-3xl">
            Expert Agri-Investment and Business Development Advisory
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Angaza Consultants is a leading agri-investment and business development advisory firm based in Kenya, specializing in designing and implementing sustainable agribusiness solutions across Eastern and Southern Africa. Through its consultancy, business development services (BDS), and training programs, Angaza supports enterprises, cooperatives, and county governments to unlock inclusive growth and market access for smallholder farmers and youth-led agribusinesses.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <Target size={48} style={{ color: '#61B471' }} className="mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#61B471' }}>
                  Strategic Advisory
                </h3>
                <p className="text-gray-700">
                  Market systems and value chain assessments for major development organizations.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <TrendingUp size={48} style={{ color: '#61B471' }} className="mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#61B471' }}>
                  Business Development
                </h3>
                <p className="text-gray-700">
                  Enterprise incubation, financial linkages, and digital transformation support.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <BookOpen size={48} style={{ color: '#61B471' }} className="mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#61B471' }}>
                  Training Programs
                </h3>
                <p className="text-gray-700">
                  Practical programs in regenerative agriculture, entrepreneurship, and digital agriculture.
                </p>
              </div>
            </div>

            <div
              className="my-12 p-8 rounded-xl"
              style={{ backgroundColor: 'rgba(97, 180, 113, 0.1)' }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
                Consultancy Services
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Under its consultancy wing, Angaza has conducted and collaborated in over 25 market systems and value chain assessments for organizations such as USAID, DFID, Farm Africa, and GIZ. These studies inform investment strategies, policy design, and agribusiness scaling models in crops, livestock, aquaculture, and renewable energy.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Angaza also provides feasibility studies, business modeling, and impact evaluation for agribusiness projects and innovation ecosystems.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
              Business Development Services
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Through its BDS programs, Angaza offers enterprise incubation, financial linkages, and digital transformation support to micro and small enterprises (MSEs). Working with institutions such as Kibabii University, Strathmore Research and Consultancy Centre, and the Micro and Small Enterprises Authority (MSEA), Angaza develops tailored tools and capacity-building frameworks to help youth-owned enterprises grow, access finance, and integrate into value chains.
            </p>

            <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
              Training and Capacity Building
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              In training and capacity building, Angaza delivers practical programs in regenerative agriculture, entrepreneurship, Tech for agriculture, and digital agriculture. It partners with institutions like Bukura Agricultural Training College, KIRDI, and KARLO to train youth, women, and farmer groups on climate-smart production, agribusiness management, and technology adoption.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              These initiatives create sustainable livelihoods and advance Kenya's inclusive agricultural transformation agenda.
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
