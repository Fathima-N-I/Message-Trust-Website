import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useFirestore } from '../hooks/useFirestore';


// ================= IMPACT SECTION =================

export const Impact = () => {

  const impacts = [
    {
      title: "Education Impact",
      points: [
        "1000+ students educated through Montessori Pre School",
        "Regular academic support for students from 1st to 10th standard",
        "Monthly talent tests and weekly orientation programs"
      ]
    },
    {
      title: "Skill Development",
      points: [
        "300+ students trained in garment making",
        "Self-employment programs for sustainable income",
        "Women-focused vocational training initiatives"
      ]
    },
    {
      title: "Community Development",
      points: [
        "21 active Neighborhood Groups (NHG)",
        "Interest-free microfinance support",
        "Improved community cooperation and leadership"
      ]
    },
    {
      title: "Health & Welfare",
      points: [
        "Free Homoeo clinic serving ~30 patients per day",
        "Regular medical camps and awareness programs",
        "Counselling services for families and youth"
      ]
    },
    {
      title: "Food & Social Support",
      points: [
        "Free breakfast for 210+ students annually",
        "Lunch support for 50+ students",
        "School kit distribution for underprivileged children"
      ]
    },
    {
      title: "Community Engagement",
      points: [
        "Arts, sports & cultural events",
        "Personality development programs",
        "Moral education and awareness campaigns"
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real impact through education, empowerment, and community development initiatives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {impacts.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.points.map((point, i) => (
                  <li key={i} className="text-gray-700 flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};


// ================= CONTACT SECTION =================

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const { addDocument, loading } = useFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addDocument('contacts', formData);

    if (result.success) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with Message Charitable Trust
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >

            <div className="flex gap-4">
              <MapPin className="text-primary-600" />
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-600">
                  Message Charitable Trust<br />
                  North Beach, Kozhikode<br />
                  Kerala, India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-green-600" />
              <div>
                <h3 className="font-bold text-lg">Website</h3>
                <p className="text-gray-600">
                  https://chrty-web.web.app/
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-orange-600" />
              <div>
                <h3 className="font-bold text-lg">Contact</h3>
                <p className="text-gray-600">
                  Please reach us through our official office or website.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {submitted ? (
              <div className="text-center py-10">
                <Send className="mx-auto text-green-600 mb-4" size={40} />
                <p className="font-semibold">Message sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-xl"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-xl"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-xl"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-xl"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-primary-600 text-white rounded-xl font-bold"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </div>
  );
};