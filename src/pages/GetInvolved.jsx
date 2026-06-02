import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Calendar, Share2, Send } from 'lucide-react';
import { useFirestore } from '../hooks/useFirestore';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interest: '',
    skills: '',
    availability: 'Flexible'
  });
  const [submitted, setSubmitted] = useState(false);
  const { addDocument, loading } = useFirestore();

  const opportunities = [
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers and contribute your time and skills to our programs.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building,
      title: 'Corporate Partnership',
      description: 'Partner with us for CSR initiatives and employee engagement programs.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Attend or organize fundraising events, awareness campaigns, and community gatherings.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Share2,
      title: 'Spread the Word',
      description: 'Help us amplify our impact by sharing our work on social media and with your network.',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const upcomingEvents = [
    {
      date: 'March 15, 2026',
      title: 'Annual Charity Run',
      description: 'Join us for a 5K charity run to raise funds for our education programs. All fitness levels welcome!'
    },
    {
      date: 'April 22, 2026',
      title: 'Earth Day Clean-Up Drive',
      description: 'Community clean-up and tree plantation drive in partnership with local schools and businesses.'
    },
    {
      date: 'May 10, 2026',
      title: 'Gala Fundraiser Dinner',
      description: 'An evening of inspiration, food, and entertainment to support our healthcare initiatives.'
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await addDocument('volunteers', formData);
    
    if (result.success) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        interest: '',
        skills: '',
        availability: 'Flexible'
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Involved</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            There are many ways to support our mission and make a difference
          </p>
        </motion.div>

        {/* Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            return (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${opp.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {opp.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {opp.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Volunteer Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Volunteer With Us
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get in touch with you
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your application and will contact you within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location/City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="Your city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  >
                    <option value="">Select an area</option>
                    <option>Education</option>
                    <option>Healthcare</option>
                    <option>Community Development</option>
                    <option>Fundraising</option>
                    <option>Marketing & Communications</option>
                    <option>Technology</option>
                    <option>Event Management</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Skills & Experience
                  </label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="Tell us about your skills, experience, and why you want to volunteer with us"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Availability
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  >
                    <option>Weekdays</option>
                    <option>Weekends</option>
                    <option>Both</option>
                    <option>Flexible</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-primary-600 font-bold mb-3">{event.date}</div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <button className="w-full py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-primary-50 hover:text-primary-600 transition-all">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInvolved;
