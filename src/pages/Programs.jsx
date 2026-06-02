import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, GraduationCap, Sprout, Target } from 'lucide-react';

const Programs = () => {

  const programCategories = [
    {
      title: "Education Programs",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Montessori Pre School",
        "Madrassa Education (1–10 Std.)",
        "Adult Education Programme",
        "Personality Development Training"
      ]
    },
    {
      title: "Scholarship & Academic Support",
      icon: GraduationCap,
      color: "from-purple-500 to-indigo-500",
      items: [
        "Pre-Metric Scholarship & Aptitude Test Programme",
        "Post-Metric Scholarship Support",
        "Scholarship for Higher Education",
        "Monthly Talent Tests & Weekly Orientation"
      ]
    },
    {
      title: "Community Development",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      items: [
        "Neighbourhood Groups (NHG)",
        "Self Help Groups",
        "Interest-Free Microfinance",
        "Community Awareness Programs"
      ]
    },
    {
      title: "Skill & Employment",
      icon: Sprout,
      color: "from-orange-500 to-red-500",
      items: [
        "Self Employment Training Centre",
        "Garment Making Training",
        "Umbrella Making Unit",
        "IT & Professional Training Programs"
      ]
    },
    {
      title: "Health & Welfare",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      items: [
        "Homoeo Clinic (Free Consultation)",
        "Health Awareness Programs",
        "Medical Camps",
        "Counselling Services (Career & Family)"
      ]
    },
    {
      title: "Social Support Initiatives",
      icon: Target,
      color: "from-indigo-500 to-blue-500",
      items: [
        "Free Food Distribution for Students",
        "School Kit Project",
        "Arts, Sports & Cultural Events",
        "Moral & Community Development Programs"
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We focus on education, empowerment, and sustainable community development through structured initiatives.
          </p>
        </motion.div>

        {/* Program Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-br ${category.color} text-white flex items-center gap-4`}>
                  <Icon className="w-10 h-10" />
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                {/* Content */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="text-primary-600 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Programs;