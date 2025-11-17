import { Cpu, Users, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';

type Page = 'home' | 'features' | 'about' | 'technology' | 'consultancy' | 'market' | 'value' | 'impact';

interface FeaturesPageProps {
  onNavigate: (page: Page) => void;
}

export default function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const features = [
    {
      id: 'technology',
      icon: Cpu,
      title: 'Technology',
      description:
        'Angaza is focused on technology and innovation. The Angaza SATFARM app is a smart agriculture platform integrating IoT sensors, satellite data, and GenAI to deliver real-time crop, livestock, and irrigation advisories to smallholder farmers. It enables data-driven farming, improves yields, and supports climate resilience.',
      page: 'technology' as Page,
      image: 'https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'consultancy',
      icon: Users,
      title: 'Consultancy',
      description:
        'Angaza is an agri investment and agri-business advisory firm specialised in helping create world class farming and integrated agribusinesses across the value chain, with a focus in sub-saharan Africa. We focus on Market Research and Analysis, Marketing Strategy Development, Market Linkages, Distribution Channel Development and Trade Facilitation, Capacity Building, Financial and Value Chain Services, Sustainable Agriculture and Agroecological practices.',
      page: 'consultancy' as Page,
      image: 'https://images.pexels.com/photos/8062336/pexels-photo-8062336.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'market',
      icon: ShoppingBag,
      title: 'Market Access',
      description:
        'Angaza connects rural farmers to reliable markets through contract farming, ensuring fair prices, sustainable practices, and improved incomes. By cultivating high-value crops such as avocados, soybeans, and mucuna beans, we enable farmers to create market access for farmers, enabling them to tap into lucrative opportunities while promoting economic growth and sustainability.',
      page: 'market' as Page,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'value',
      icon: TrendingUp,
      title: 'Value Addition',
      description:
        'To complete the value chain, Angaza is committed to training, developing, and accelerating groups and SMEs focused on high-value crops such as mucuna beans, soybeans, sunflower and avocados. By transforming these crops into high-demand, market-ready products, Angaza enhances market opportunities, drives increased farmer incomes, and fosters economic empowerment. Through the promotion of sustainable practices, Angaza ensures long-term resilience, environmental stewardship, and financial stability for farming communities.',
      page: 'value' as Page,
      image: 'https://images.pexels.com/photos/8062423/pexels-photo-8062423.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-16">
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97, 180, 113, 0.85), rgba(97, 180, 113, 0.85)), url('https://images.pexels.com/photos/5530914/pexels-photo-5530914.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Our Programs
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for sustainable agriculture and rural development
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                id={feature.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center scroll-mt-24`}
              >
                <div className="flex-1">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <feature.icon size={48} style={{ color: '#61B471' }} className="mr-4" />
                    <h2 className="text-4xl font-bold" style={{ color: '#61B471' }}>
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <button
                    onClick={() => onNavigate(feature.page)}
                    className="px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                    style={{ backgroundColor: '#61B471' }}
                  >
                    LEARN MORE
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
