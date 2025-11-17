import { Target, Heart, TrendingUp, Users, Sprout, DollarSign } from 'lucide-react';

export default function AboutPage() {
  const programs = [
    {
      title: 'SatFarm',
      description:
        'The Angaza SATFARM app is a smart, multi-functional digital agriculture platform designed to transform smallholder farming across Africa. It integrates images from smartphones, satellite mapping, and GenAI to provide real-time, localized advisories on crop health, irrigation, pest and disease control. The platform supports precision farming by simplifying data collection from fields and farms, analyzing it through AI models, and delivering actionable insights via mobile apps, SMS, or USSD. SATFARM is tailored to function in low-connectivity, rural environments and can be deployed alongside solar-powered irrigation and soil sensors. It enhances productivity, climate resilience, and decision-making for farmers.',
      image: 'https://images.pexels.com/photos/4483774/pexels-photo-4483774.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Mucuna Bean Commercialization',
      description:
        'Founded on the principles of technology and product innovation, Angaza is collaborating with the Kenya Industrial Research and Development Institute (KIRDI) and supported by Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH to develop commercial products from the Mucuna pruriens bean. This initiative aims to create sustainable markets for Mucuna bean farmers while leveraging the crop\'s significant soil improvement benefits. By establishing strong market demand, the program enhances farmer incomes and promotes soil quality, contributing to long-term agricultural sustainability and environmental resilience.',
      image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Oil Crops Value Addition',
      description:
        'Angaza operates a processing facility at Bukura Agricultural Training Centre in Kakamega County, specializing in the production of natural, unrefined cooking oil from locally grown oil crops such as soya beans and sunflower. The plant plays a transformative role in the community by promoting contract farming, offering assured markets, and enabling farmers to earn higher and more stable incomes.',
      image: 'https://images.pexels.com/photos/33239/oil-sunflower-seeds-flowers.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'High-Impact Partnership with Farm Africa (YISA Program)',
      description:
        'Through a strategic partnership with Farm Africa\'s Youth in Sustainable Agriculture (YISA) program, Angaza provides a market for soya beans grown by youth in Kakamega, Busia, Siaya, Kisumu, and Homabay counties. This initiative not only supports rural youth income generation but also supplies soya seed cake, a high-protein byproduct of oil extraction, which is used as a key raw material in fish feed manufacturing.',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-16">
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97, 180, 113, 0.85), rgba(97, 180, 113, 0.85)), url('https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About Us</h1>
          <p className="text-2xl text-white max-w-3xl mx-auto">
            Market Access for Rural Farmers
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#61B471' }}>
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We are a for-profit social enterprise based in Kenya, committed to creating pathways to prosperity for rural farm families. Our mission is rooted in the belief that market access and the introduction of high-value agricultural products can profoundly transform the lives of smallholder farmers, especially youth and women who often face significant barriers to accessing lucrative markets.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              By integrating small-scale machinery, advanced technology, and improved farming practices, we aim to reduce the overall cost of farming while maximizing yields and profits. Our approach begins with understanding market demands and guiding farmers and value chain actors to align with market-ready value chains while integrating technology. While this may require a shift from traditional practices, the promise of increased returns has steadily driven higher adoption rates among farmers, ensuring a gradual and sustainable transformation.
            </p>

            <div
              className="my-12 p-8 rounded-xl"
              style={{ backgroundColor: 'rgba(97, 180, 113, 0.1)' }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#61B471' }}>
                Our Focus
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We tackle market access barriers for smallholder farmers by empowering them with financial literacy, facilitating the adoption of high-value crops, smart agriculture, technology and unlocking their full potential. Our programs emphasize agro-ecological sustainability, guided by the principles of the triple bottom line: People, Planet, and Profit, ensuring holistic and impactful growth for farming communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Target size={40} style={{ color: '#61B471' }} className="mr-4" />
                  <h3 className="text-2xl font-bold" style={{ color: '#61B471' }}>
                    Vision Statement
                  </h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Empower over 200,000 youth and women on pathways to prosperity by 2030
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Heart size={40} style={{ color: '#61B471' }} className="mr-4" />
                  <h3 className="text-2xl font-bold" style={{ color: '#61B471' }}>
                    Mission Statement
                  </h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Empower over 1,000,000 youth and women on pathways to prosperity by 2030
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="text-center p-6">
                <Users size={48} style={{ color: '#61B471' }} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#61B471' }}>
                  People
                </h3>
                <p className="text-gray-700">
                  Empowering communities through sustainable livelihoods
                </p>
              </div>

              <div className="text-center p-6">
                <Sprout size={48} style={{ color: '#61B471' }} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#61B471' }}>
                  Planet
                </h3>
                <p className="text-gray-700">
                  Promoting environmental stewardship and climate resilience
                </p>
              </div>

              <div className="text-center p-6">
                <DollarSign size={48} style={{ color: '#61B471' }} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#61B471' }}>
                  Profit
                </h3>
                <p className="text-gray-700">
                  Creating sustainable economic growth for farmers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#61B471' }}>
              Current Programs
            </h2>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden`}
              >
                <div className="flex-1">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[350px] object-cover"
                  />
                </div>

                <div className="flex-1 p-8">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#61B471' }}>
                    {program.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97, 180, 113, 0.9), rgba(97, 180, 113, 0.9)), url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp size={56} className="text-white mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Want to Work with Us?
            </h2>
          </div>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Join Angaza Nexus and be part of a purpose-driven team transforming rural communities. Empower farmers with sustainable practices, create market opportunities, and drive economic growth. At Angaza, your work directly impacts lives, promotes environmental resilience, and builds a brighter future for farming families. Together, let's create meaningful, lasting change!
          </p>
        </div>
      </section>
    </div>
  );
}
