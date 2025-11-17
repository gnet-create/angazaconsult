import { Sprout, Leaf, Droplet, Cpu, Heart } from 'lucide-react';

export default function ImpactPage() {
  const impacts = [
    {
      icon: Sprout,
      title: 'Mucuna Beans',
      description:
        'Mucuna beans offer a powerful agroecological solution to soil degradation in Kenya. As a vigorous legume, mucuna enriches soils by fixing atmospheric nitrogen, increasing organic carbon, suppressing invasive weeds, and reducing erosion without chemical inputs. Its deep roots and rapid biomass production boost soil structure, microbial health, and water retention. By commercializing mucuna, Angaza is creating green incentives for farmers to regenerate their soils naturally, reduce dependency on synthetic fertilizers, and boost food crop yields like maize, paving the way for more climate-smart, sustainable, and resilient farming systems.',
      image: 'https://images.pexels.com/photos/5473626/pexels-photo-5473626.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Leaf,
      title: 'Avocado Commercialization',
      description:
        'Avocado commercialization in Kenya offers a transformative, long-term green and financial strategy for farmers. Avocado trees not only provide high-value export income, but also play a key role in climate action by capturing greenhouse gases, improving biodiversity, and restoring degraded soils. Angaza has implemented a dual-cropping approach combining short-term income from crops like beans with the long-term returns of avocado orchards. This integrated model supports food security, carbon sequestration, and sustainable rural incomes. By investing in avocado value chains, Angaza empowers farmers to build resilient livelihoods while contributing to regenerative agriculture and climate mitigation across Western and Central Kenya.',
      image: 'https://images.pexels.com/photos/3761191/pexels-photo-3761191.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Droplet,
      title: 'Oil Crops Value Chains',
      description:
        'The commercialization of sunflower and soybean presents a transformative opportunity for rural livelihoods, nutrition, and sustainable value chains in Kenya. These oil crops offer dual benefits: producing high-quality, affordable cooking oil for rural households while also generating high-protein byproducts that are vital for animal feed manufacture. The availability of fair-priced, locally produced cooking oil reduces dependency on costly imports, enhances food security, and meets the dietary needs of low-income communities. Furthermore, the residual soybean and sunflower cake rich in protein is repurposed into livestock and fish feed, significantly lowering feed production costs. This not only supports smallholder dairy, poultry, and fish farmers but also creates backward linkages in the agriculture sector. Through this model, Angaza promotes a circular economy, where agricultural waste is transformed into economic inputs.',
      image: 'https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Cpu,
      title: 'SATFARM Technology',
      description:
        'SATFARM app revolutionizes smallholder agriculture by delivering AI-powered, real-time farming intelligence directly to farmers\' hands. Integrating IoT sensors, satellite imagery, and generative AI, SATFARM monitors critical parameters like soil moisture, nutrient levels, pest risk, and weather patterns, automating data collection and analysis for precise, climate-smart decisions. Farmers receive customized advisories through mobile apps, SMS, and USSD, with offline and local language support ensuring accessibility in remote areas. SATFARM boosts productivity by optimizing water use, forecasting yields, and enabling early disease detection, thereby reducing crop losses and improving incomes. Its inclusive design empowers women and youth, often excluded from digital transformation, through targeted training, affordable devices, and co-creation processes. By promoting efficient input use and regenerative practices, SATFARM enhances sustainability and builds resilience to climate shocks.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-16">
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97, 180, 113, 0.85), rgba(97, 180, 113, 0.85)), url('https://images.pexels.com/photos/5530914/pexels-photo-5530914.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Impact</h1>
          <p className="text-2xl text-white max-w-3xl mx-auto">
            Transforming Rural Communities Through Sustainable Agriculture
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#61B471' }}>
              How We Create Change
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Through our programs and initiatives, Angaza Nexus is driving meaningful impact across agricultural value chains, empowering farmers, and building sustainable livelihoods for rural communities.
            </p>
          </div>

          <div className="space-y-16">
            {impacts.map((impact, index) => (
              <div
                key={impact.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden`}
              >
                <div className="flex-1">
                  <img
                    src={impact.image}
                    alt={impact.title}
                    className="w-full h-[350px] object-cover"
                  />
                </div>

                <div className="flex-1 p-8">
                  <div className="flex items-center mb-6">
                    <impact.icon size={48} style={{ color: '#61B471' }} className="mr-4" />
                    <h3 className="text-3xl font-bold" style={{ color: '#61B471' }}>
                      {impact.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {impact.description}
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
            "linear-gradient(rgba(97, 180, 113, 0.9), rgba(97, 180, 113, 0.9)), url('https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart size={56} className="text-white mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Commitment
            </h2>
          </div>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            At Angaza Nexus, we are committed to empowering over 200,000 youth and women on pathways to prosperity by 2030. Through sustainable practices, market linkages, and innovative technology, we are building a future where rural farming communities thrive economically while stewarding the environment for generations to come.
          </p>
        </div>
      </section>
    </div>
  );
}
