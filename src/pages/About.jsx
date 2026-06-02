import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Education First',
      description: 'We believe education is the foundation for eliminating poverty and empowering communities.'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'We work closely with local communities to build self-sustaining and supportive environments.'
    },
    {
      icon: Target,
      title: 'Social Responsibility',
      description: 'We aim to uplift socially and economically backward communities through structured programs.'
    },
    {
      icon: Globe,
      title: 'Sustainable Growth',
      description: 'Our initiatives focus on long-term impact through skill development and financial independence.'
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Message Charitable Trust
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Empowering communities through education, skill development, and social initiatives since 1997.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organization Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>

            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
              <p>
                Message Charitable Trust was founded in 1997 as a non-profit organization dedicated 
                to uplifting coastal communities in Kozhikode through education, vocational training, 
                and empowerment initiatives.
              </p>

              <p>
                The organization was established by a group of socially committed women who aimed to 
                reform underprivileged communities through moral awareness and education. Over the years, 
                the trust has played a significant role in improving social conditions and reducing issues 
                such as lack of education and community instability.
              </p>

              <p>
                We strongly believe that poverty and lack of education are closely connected. By providing 
                educational opportunities and professional training, we enable individuals and families 
                to become self-sustainable and contribute positively to society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-700">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To create a future where children are educated and families are empowered to be 
              self-sustainable, eradicating poverty and strengthening community spirit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-700">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To support struggling communities by providing opportunities for children to learn, 
              develop and grow into responsible individuals, while also supporting families through 
              sustainable solutions.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;