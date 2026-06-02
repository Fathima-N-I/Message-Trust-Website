import { Link } from 'react-router-dom';
import { HeartHandshake, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { showDonatePage } from '../config/features';

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <HeartHandshake className="text-primary-500" />
              <h3 className="text-xl font-bold">Message Charitable Trust</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A non-profit organization working since 1997 to empower coastal 
              communities in Kozhikode through education, skill development, 
              and social welfare initiatives.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/impact">Impact</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {showDonatePage && <li><Link to="/donate">Donate</Link></li>}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-bold mb-4 text-lg">Contact</h4>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <MapPin />
                <span>
                  North Beach, Kozhikode<br />
                  Kerala, India
                </span>
              </div>

              <div className="flex gap-3">
                <Globe />
                <span>https://chrty-web.web.app/</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Message Charitable Trust. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;