import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, FileCheck, User, Calendar, Mail, Phone, Sparkles, Zap, Brain } from 'lucide-react';
import { useScrollTop } from '../hooks/useScrollTop';

function ApplicationForm() {
  const navigate = useNavigate();
  useScrollTop();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    nationality: '',
    nationalId: '',
    currentAddress: '',
    houseNameCurrent: '',
    atollCurrent: '',
    sameAsPermanent: false,
    permanentAddress: '',
    houseNamePermanent: '',
    atollPermanent: '',
    mobile: '',
    viber: '',
    email: '',
    currentOccupation: '',
    workplace: '',
    officeNumber: '',
    parentName: '',
    relation: '',
    parentContact: '',
    courseCampus: '',
    courseFaculty: '',
    intakeSeason: '',
    teachingMode: '',
    funding: '',
    studentReferenceName: '',
    studentReferenceNationalId: '',
    photo: null,
    idProof: null,
    certificate1: null,
    certificate2: null,
    certificate3: null,
    howDidYouKnow: '',
    declaration: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Here you can send the form data to the server
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12
      }
    }
  };

  

  return (
    <div className="min-h-screen bg-cyber-black pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-neon-blue"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random() * 0.5 + 0.3]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ 
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => navigate('/')}
            className="text-neon-blue mb-5 flex items-center space-x-2 hover:text-neon-purple transition-colors font-future"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </motion.button>
          
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold font-future text-white mb-4"
            >
              Application for <span className="text-gradient">Admission</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 max-w-2xl mx-auto font-future"
            >
              Complete the form below to begin your journey with us
            </motion.p>
          </div>
        </motion.div>
        
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto glass-card p-8 rounded-xl neon-border"
        >
          {/* Personal Information */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-future text-white flex items-center">
              <User className="h-6 w-6 text-neon-blue mr-2" />
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Full Name (*)
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Date of Birth (*)
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Nationality (*)
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  National ID / Passport
                </label>
                <input
                  type="text"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Address Information */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-future text-white flex items-center">
              <Mail className="h-6 w-6 text-neon-purple mr-2" />
              Address Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  House Name (*)
                </label>
                <input
                  type="text"
                  name="houseNameCurrent"
                  value={formData.houseNameCurrent}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white font-future"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Atoll/Island (*)
                </label>
                <input
                  type="text"
                  name="atollCurrent"
                  value={formData.atollCurrent}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white font-future"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="flex items-center text-gray-300 font-future">
                <input
                  type="checkbox"
                  name="sameAsPermanent"
                  checked={formData.sameAsPermanent}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 rounded border-white/30 text-neon-blue focus:ring-neon-blue/50"
                />
                Same as Permanent Address
              </label>
            </div>

            {!formData.sameAsPermanent && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-gray-300 mb-1 font-future text-sm">
                    Permanent House Name (*)
                  </label>
                  <input
                    type="text"
                    name="houseNamePermanent"
                    value={formData.houseNamePermanent}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white font-future"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1 font-future text-sm">
                    Permanent Atoll/Island (*)
                  </label>
                  <input
                    type="text"
                    name="atollPermanent"
                    value={formData.atollPermanent}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white font-future"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-future text-white flex items-center">
              <Phone className="h-6 w-6 text-neon-pink mr-2" />
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Mobile No. (*)
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/50 text-white font-future"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Viber No.
                </label>
                <input
                  type="tel"
                  name="viber"
                  value={formData.viber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/50 text-white font-future"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Email Address (*)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/50 text-white font-future"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Occupation and Parent Information */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-future text-white flex items-center">
              <Brain className="h-6 w-6 text-neon-blue mr-2" />
              Occupation & Guardian Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Current Occupation
                </label>
                <input
                  type="text"
                  name="currentOccupation"
                  value={formData.currentOccupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Workplace
                </label>
                <input
                  type="text"
                  name="workplace"
                  value={formData.workplace}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Name of Parent/Guardian (*)
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Relation (*)
                </label>
                <input
                  type="text"
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Parent's Contact Number (*)
                </label>
                <input
                  type="tel"
                  name="parentContact"
                  value={formData.parentContact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Course Selection */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-future text-white flex items-center">
              <Calendar className="h-6 w-6 text-neon-purple mr-2" />
              Program Selection
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Choose Campus (*)
                </label>
                <select
                  name="courseCampus"
                  value={formData.courseCampus}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white font-future"
                >
                  <option value="">Select Campus</option>
                  <option value="campus1">Main Campus</option>
                  <option value="campus2">City Campus</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Choose Faculty (*)
                </label>
                <select
                  name="courseFaculty"
                  value={formData.courseFaculty}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white font-future"
                >
                  <option value="">Select Faculty</option>
                  <option value="faculty1">Business & Management</option>
                  <option value="faculty2">Information Technology</option>
                  <option value="faculty3">Tourism & Hospitality</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Choose Intake Season (*)
                </label>
                <select
                  name="intakeSeason"
                  value={formData.intakeSeason}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white font-future"
                >
                  <option value="">Select Intake</option>
                  <option value="2035_spring">Spring 2035</option>
                  <option value="2035_fall">Fall 2035</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Choose Teaching Mode (*)
                </label>
                <select
                  name="teachingMode"
                  value={formData.teachingMode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white font-future"
                >
                  <option value="">Select Mode</option>
                  <option value="online">Online</option>
                  <option value="in_person">In-person</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </motion.div>
          
          {/* File Uploads */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-future text-white flex items-center">
              <FileCheck className="h-6 w-6 text-neon-pink mr-2" />
              Document Uploads
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Applicant Photo (*)
                </label>
                <div className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-within:border-neon-pink focus-within:ring-2 focus-within:ring-neon-pink/50">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                    accept="image/jpeg,image/png"
                    required
                    className="w-full text-gray-300 font-future file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-future file:bg-neon-pink/20 file:text-neon-pink hover:file:bg-neon-pink/30"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  ID Proof Copy (*)
                </label>
                <div className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-within:border-neon-pink focus-within:ring-2 focus-within:ring-neon-pink/50">
                  <input
                    type="file"
                    name="idProof"
                    onChange={handleFileChange}
                    accept="application/pdf,image/jpeg,image/png"
                    required
                    className="w-full text-gray-300 font-future file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-future file:bg-neon-pink/20 file:text-neon-pink hover:file:bg-neon-pink/30"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Certificate 1 (*)
                </label>
                <div className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-within:border-neon-pink focus-within:ring-2 focus-within:ring-neon-pink/50">
                  <input
                    type="file"
                    name="certificate1"
                    onChange={handleFileChange}
                    accept="application/pdf"
                    required
                    className="w-full text-gray-300 font-future file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-future file:bg-neon-pink/20 file:text-neon-pink hover:file:bg-neon-pink/30"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 font-future text-sm">
                  Certificate 2
                </label>
                <div className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-within:border-neon-pink focus-within:ring-2 focus-within:ring-neon-pink/50">
                  <input
                    type="file"
                    name="certificate2"
                    onChange={handleFileChange}
                    accept="application/pdf"
                    className="w-full text-gray-300 font-future file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-future file:bg-neon-pink/20 file:text-neon-pink hover:file:bg-neon-pink/30"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* How Did You Know About My College */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-future text-white flex items-center">
              <Sparkles className="h-6 w-6 text-neon-blue mr-2" />
              How did you come to know about My College?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['newspaper', 'friends', 'student', 'facebook', 'sms'].map((option) => (
                <motion.div 
                  key={option}
                  whileHover={{ x: 5 }}
                  className="flex items-center glass-card p-3 rounded-lg hover-glow"
                >
                  <input
                    type="radio"
                    id={option}
                    name="howDidYouKnow"
                    value={option}
                    checked={formData.howDidYouKnow === option}
                    onChange={handleChange}
                    className="h-4 w-4 text-neon-blue focus:ring-neon-blue/50 border-white/30"
                  />
                  <label htmlFor={option} className="ml-2 text-gray-300 font-future">
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </label>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Declaration */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="glass-card p-4 rounded-lg border border-neon-purple/30">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 text-neon-purple focus:ring-neon-purple/50 border-white/30"
                />
                <span className="ml-2 text-gray-300 font-future text-sm">
                  I declare that all the information given in this application form and the attached documents are accurate and complete. I understand that providing false information may result in the cancellation of my application or enrollment.
                </span>
              </label>
            </div>
          </motion.div>
          
          {/* Submit Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-lg font-future flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300"
            >
              <Zap className="h-5 w-5" />
              <span>Submit Application</span>
            </button>
          </motion.div>
          
          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-10 right-10 hidden md:block"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-neon-blue/20 backdrop-blur-sm p-4 rounded-lg border border-neon-blue/30"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-neon-blue" />
                <span className="text-white font-future">Join our community</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}

export default ApplicationForm;