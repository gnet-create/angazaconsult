import { Cpu, Users, TrendingUp, ShoppingBag, ArrowRight } from 'lucide-react';

type Page = 'home' | 'features' | 'about' | 'technology' | 'consultancy' | 'market' | 'value';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: Cpu,
      title: 'Technology',
      page: 'technology' as Page,
      description: 'Smart agriculture platform with IoT sensors and AI',
    },
    {
      icon: Users,
      title: 'Consultancy',
      page: 'consultancy' as Page,
      description: 'Expert agri-business advisory and development services',
    },
    {
      icon: ShoppingBag,
      title: 'Market Access',
      page: 'market' as Page,
      description: 'Connecting farmers to reliable and profitable markets',
    },
    {
      icon: TrendingUp,
      title: 'Value Addition',
      page: 'value' as Page,
      description: 'Transforming crops into high-demand products',
    },
  ];

  const handleFeatureClick = (page: Page) => {
    onNavigate('features');
    setTimeout(() => {
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="pt-16">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/5529605/pexels-photo-5529605.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="text-center text-white px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            WELCOME TO ANGAZA NEXUS
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering rural farming communities through sustainable agriculture, market access, and innovative technology. Creating pathways to prosperity for over 200,000 youth and women by 2030.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <button
                key={feature.title}
                onClick={() => handleFeatureClick(feature.page)}
                className="group bg-white bg-opacity-95 hover:bg-opacity-100 p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <feature.icon
                  className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  size={48}
                  style={{ color: '#61B471' }}
                />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#61B471' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#61B471' }}>
              Our Story
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#61B471' }}>
                  2024
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a professional working in Kakamega, Beatrice witnessed firsthand the pervasive poverty affecting rural communities. Determined to make a difference, she began training farmers on commercial crop farming, aiming to empower them with knowledge and sustainable practices. Her journey into agriculture also revealed another pressing issue: the poor quality of soils, degraded by years of sugarcane monocropping in the region.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Motivated by these challenges, Beatrice founded Angaza with a humble start but a bold vision to empower over 200,000 youth and women on pathways to prosperity by 2030.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In April 2024, we launched our agricultural program in Kakamega, focusing on empowering smallholder farmers through sustainable farming practices, market access, and value addition. From these humble beginnings, like-minded partners have joined hands with Angaza, collaborating on various impactful programs to address challenges such as soil health, market access, and economic empowerment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, Angaza stands as a beacon of hope for rural communities, driving sustainable agriculture, improving soil health, and creating economic opportunities for women and youth, while building strong partnerships for a greener, more resilient future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#61B471' }}>
              Current Programs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#61B471' }}>
                SatFarm
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Angaza SATFARM app is a smart, multi-functional digital agriculture platform designed to transform smallholder farming across Africa. It integrates images from smartphones, satellite mapping, and GenAI to provide real-time, localized advisories on crop health, irrigation, pest and disease control. The platform supports precision farming by simplifying data collection from fields and farms, analyzing it through AI models, and delivering actionable insights via mobile apps, SMS, or USSD.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#61B471' }}>
                Mucuna Bean Commercialization
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Founded on the principles of technology and product innovation, Angaza is collaborating with the Kenya Industrial Research and Development Institute (KIRDI) and supported by GIZ to develop commercial products from the Mucuna pruriens bean. This initiative aims to create sustainable markets for Mucuna bean farmers while leveraging the crop's significant soil improvement benefits.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#61B471' }}>
                Oil Crops Value Addition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Angaza operates a processing facility at Bukura Agricultural Training Centre in Kakamega County, specializing in the production of natural, unrefined cooking oil from locally grown oil crops such as soya beans and sunflower. The plant plays a transformative role in the community by promoting contract farming, offering assured markets, and enabling farmers to earn higher and more stable incomes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#61B471' }}>
                High-Impact Partnership with Farm Africa (YISA Program)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Through a strategic partnership with Farm Africa's Youth in Sustainable Agriculture (YISA) program, Angaza provides a market for soya beans grown by youth in Kakamega, Busia, Siaya, Kisumu, and Homabay counties. This initiative not only supports rural youth income generation but also supplies soya seed cake for fish feed manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97, 180, 113, 0.9), rgba(97, 180, 113, 0.9)), url('https://images.pexels.com/photos/5530914/pexels-photo-5530914.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Want to Work with Us?
          </h2>
          <p className="text-xl text-white mb-8 leading-relaxed">
            Join Angaza Nexus and be part of a purpose-driven team transforming rural communities. Empower farmers with sustainable practices, create market opportunities, and drive economic growth. At Angaza, your work directly impacts lives, promotes environmental resilience, and builds a brighter future for farming families. Together, let's create meaningful, lasting change!
          </p>
          <button
            onClick={() => {
              const footer = document.getElementById('contact');
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            CONTACT US NOW
            <ArrowRight className="ml-2" size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}
