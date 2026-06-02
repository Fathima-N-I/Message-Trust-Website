import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Sprout, Users, ArrowRight } from 'lucide-react';
import { showDonatePage } from '../config/features';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // ✅ Updated real stats (from brochure)
  const stats = [
    { number: '1000+', label: 'Students Educated' },
    { number: '300+', label: 'Trained in Skills' },
    { number: '21', label: 'Neighborhood Groups' },
    { number: '50+', label: 'Active Volunteers' },
  ];

  // ✅ Updated mission areas (based on brochure)
  const missions = [
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Providing quality education through preschool, madrassa, scholarships, and academic support programs.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sprout,
      title: 'Skill Development',
      description: 'Empowering individuals with vocational training and self-employment opportunities for sustainable livelihoods.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Strengthening communities through neighborhood groups, microfinance, and social awareness initiatives.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: 'Healthcare & Support',
      description: 'Providing medical care, counseling, food support, and welfare programs for underprivileged families.',
      gradient: 'from-pink-500 to-rose-500'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">

        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent-500/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* ✅ Updated heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Message Charitable Trust
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
                Community Empowerment Partner
              </span>
            </h1>
          </motion.div>

          {/* ✅ Updated description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Empowering coastal communities in Kozhikode through education, skill development,
            and sustainable initiatives since 1997.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            {showDonatePage ? (
              <Link
                to="/donate"
                className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full font-bold hover:scale-105 transition flex items-center gap-2"
              >
                Donate Now <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <Link
                to="/get-involved"
                className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full font-bold hover:scale-105 transition flex items-center gap-2"
              >
                Get Involved <ArrowRight className="w-5 h-5" />
              </Link>
            )}

            <Link
              to={showDonatePage ? '/get-involved' : '/programs'}
              className="px-8 py-4 border border-white text-white rounded-full font-bold hover:bg-white/10"
            >
              {showDonatePage ? 'Volunteer With Us' : 'Our Programs'}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To create a future where children are educated and families are empowered
              to become self-sustainable, strengthening communities and eliminating poverty.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 shadow-lg rounded-2xl hover:shadow-2xl transition"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mission.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
                  <p className="text-gray-600">{mission.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-700 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Be a Part of the Change
        </h2>
        <p className="mb-8">
          Your support helps us educate children, empower families, and build stronger communities.
        </p>
        {showDonatePage ? (
          <Link
            to="/donate"
            className="px-10 py-4 bg-accent-500 rounded-full font-bold hover:scale-105 transition"
          >
            Make a Donation
          </Link>
        ) : (
          <Link
            to="/get-involved"
            className="px-10 py-4 bg-accent-500 rounded-full font-bold hover:scale-105 transition"
          >
            Join Our Mission
          </Link>
        )}
      </section>
    </div>
  );
};

export default Home;