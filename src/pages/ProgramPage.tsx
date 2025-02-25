import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { programs } from '../data/programs';
import ApplyNowBtn from '../components/ApplyNowBtn'
import { ChevronLeft, Clock, Users, Calendar, Award } from 'lucide-react';
import { useScrollTop } from '../hooks/useScrollTop';

function ProgramPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const program = programs.find(p => p.id === id);
  useScrollTop();

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Program not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  const handleApplyButton = () => {
    // Implement the logic to apply for the program here
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => navigate('/')}
              className="text-white mb-8 flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Programs</span>
            </motion.button>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {program.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 max-w-2xl"
            >
              {program.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Duration</h3>
              <p className="text-gray-600">4 Years Full-time</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Class Size</h3>
              <p className="text-gray-600">25 Students per Class</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <Calendar className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Start Dates</h3>
              <p className="text-gray-600">January and July</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Our comprehensive program is designed to provide students with both theoretical knowledge and practical skills needed to succeed in their chosen field. Through a combination of lectures, hands-on projects, and industry partnerships, students will develop the expertise required for a successful career.
                </p>
                <p className="text-gray-600 mb-4">
                  The curriculum is regularly updated to reflect the latest industry trends and technological advancements, ensuring that our graduates are well-prepared for the challenges of the modern workplace.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
              <div className="space-y-4">
                {[
                  "Industry Professional",
                  "Research and Development",
                  "Consulting",
                  "Project Management",
                  "Entrepreneurship"
                ].map((career, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{career}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <ApplyNowBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProgramPage;