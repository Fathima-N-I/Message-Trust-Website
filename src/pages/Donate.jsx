import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CreditCard, Globe, Building, CheckCircle, X } from 'lucide-react';
import { useFirestore } from '../hooks/useFirestore';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const { addDocument, loading } = useFirestore();

  const impactLevels = [
    { amount: 500, impact: 'Provides school supplies for 5 children' },
    { amount: 2000, impact: 'Supports healthcare for a family for 3 months' },
    { amount: 5000, impact: 'Funds a month of education for 20 students' },
    { amount: 10000, impact: 'Installs a clean water system' },
  ];

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI Payment',
      icon: Smartphone,
      description: 'Quick and secure payment via UPI',
      details: 'hopefoundation@upi',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'razorpay',
      name: 'Razorpay',
      icon: CreditCard,
      description: 'Credit/Debit Card, Net Banking, Wallets',
      details: 'All major cards accepted',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: Globe,
      description: 'International donations via PayPal',
      details: 'Secure international payments',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building,
      description: 'Direct bank account transfer',
      details: 'Account No: 1234567890',
      color: 'from-green-500 to-emerald-600'
    },
  ];

  const handleDonation = async (method) => {
    const amount = selectedAmount || parseFloat(customAmount);
    
    if (!amount || amount < 100) {
      alert('Please select or enter an amount (minimum ₹100)');
      return;
    }

    // Save donation to Firestore
    const result = await addDocument('donations', {
      amount,
      method,
      status: 'pending',
      currency: 'INR'
    });

    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedAmount(null);
        setCustomAmount('');
        setSelectedMethod(null);
      }, 3000);
    }

    // In production, integrate with actual payment gateways
    console.log(`Processing ${method} payment for ₹${amount}`);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4">
            Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Donation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every contribution, big or small, helps us create lasting change
          </p>
        </motion.div>

        {/* Impact Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-8">
            Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactLevels.map((level, index) => (
              <motion.button
                key={level.amount}
                onClick={() => setSelectedAmount(level.amount)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  selectedAmount === level.amount
                    ? 'border-primary-600 bg-primary-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                }`}
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  ₹{level.amount.toLocaleString()}
                </div>
                <p className="text-sm text-gray-600">{level.impact}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Custom Amount */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto mb-16"
        >
          <label className="block text-center font-semibold text-gray-700 mb-4">
            Or enter a custom amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
              ₹
            </span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              placeholder="Enter amount"
              className="w-full pl-10 pr-4 py-4 text-xl border-2 border-gray-300 rounded-xl focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            />
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-8">
            Choose Payment Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.id}
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-8 bg-white rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedMethod === method.id
                      ? 'border-primary-600 shadow-xl'
                      : 'border-gray-200 hover:border-gray-300 shadow-lg'
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {method.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-3">
                    {method.description}
                  </p>
                  
                  <div className="text-sm font-mono text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
                    {method.details}
                  </div>

                  {selectedMethod === method.id && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => handleDonation(method.id)}
                      disabled={loading}
                      className={`mt-6 w-full py-3 bg-gradient-to-r ${method.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50`}
                    >
                      {loading ? 'Processing...' : `Donate with ${method.name}`}
                    </motion.button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tax Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Tax Benefits
          </h3>
          <p className="text-gray-600">
            Hope Foundation is registered under Section 80G. All donations are eligible for 50% tax deduction. 
            You will receive a tax receipt via email within 48 hours.
          </p>
        </motion.div>

        {/* Monthly Giving */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            💝 Monthly Giving
          </h3>
          <p className="text-blue-100 mb-6">
            Join our community of monthly donors and create sustained impact. 
            Monthly giving helps us plan long-term projects and reach more communities.
          </p>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all">
            Become a Monthly Donor
          </button>
        </motion.div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              Your donation has been recorded. We'll process it shortly and send you a confirmation email.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Donate;
