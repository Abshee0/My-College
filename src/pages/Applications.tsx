import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useScrollTop } from '../hooks/useScrollTop';

function ApplicationForm() {
    useScrollTop();
    const navigate = useNavigate();
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

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className='mt-20'>
      <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => navigate('/')}
              className="text-blue-600 mb-5 flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </motion.button>
      <h1 className=" text-3xl font-bold mb-6 text-center">Application For Admission</h1>

      {/* Personal Information */}
      <h2 className="text-xl font-semibold mb-2">Personal Information</h2>

      <div className="grid grid-cols-1 gap-4 mb-6">
      <label className="block">
        Name (*)
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Date of Birth (*)
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Gender
        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="block">
        Nationality (*)
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        National ID / Passport
        <input type="text" name="nationalId" value={formData.nationalId} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      </div>

      {/* Address Information */}
      <h2 className="text-xl font-semibold mb-2">Current Address</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
      <label className="block">
        House Name (*)
        <input type="text" name="houseNameCurrent" value={formData.houseNameCurrent} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Atoll/Island (*)
        <input type="text" name="atollCurrent" value={formData.atollCurrent} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Same as Permanent Address
        <input type="checkbox" name="sameAsPermanent" checked={formData.sameAsPermanent} onChange={handleChange} className="ml-2 cursor-pointer" />
      </label>

      {!formData.sameAsPermanent && (
        <>
          <h2 className="text-xl font-semibold mb-2">Permanent Address</h2>
          <label className="block">
            House Name (*)
            <input type="text" name="houseNamePermanent" value={formData.houseNamePermanent} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
          </label>
          <label className="block">
            Atoll/Island (*)
            <input type="text" name="atollPermanent" value={formData.atollPermanent} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
          </label>
        </>
      )}
      </div>

      {/* Contact Information */}
      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
      <label className="block">
        Mobile No. (*)
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Viber No. (*)
        <input type="tel" name="viber" value={formData.viber} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Email Address (*)
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      </div>

      {/* Occupation and Parent Information */}
      <h2 className="text-xl font-semibold mb-2">Current Occupation</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
      <label className="block">
        Current Occupation
        <input type="text" name="currentOccupation" value={formData.currentOccupation} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Workplace
        <input type="text" name="workplace" value={formData.workplace} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Office Number
        <input type="tel" name="officeNumber" value={formData.officeNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Name of Parent (*)
        <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Relation (*)
        <input type="text" name="relation" value={formData.relation} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Parent's Contact Number (*)
        <input type="tel" name="parentContact" value={formData.parentContact} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      </div>

      {/* Course Selection */}
      <h2 className="text-xl font-semibold mb-2">Course Selection</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
      <label className="block">
        Choose Campus (*)
        <select name="courseCampus" value={formData.courseCampus} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md">
          <option value="campus1">Campus 1</option>
          <option value="campus2">Campus 2</option>
        </select>
      </label>
      <label className="block">
        Choose Faculty (*)
        <select name="courseFaculty" value={formData.courseFaculty} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md">
          <option value="faculty1">Faculty 1</option>
          <option value="faculty2">Faculty 2</option>
        </select>
      </label>
      <label className="block">
        Choose Intake Season (*)
        <select name="intakeSeason" value={formData.intakeSeason} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md">
          <option value="2025_spring">Spring 2025</option>
          <option value="2025_fall">Fall 2025</option>
        </select>
      </label>
      <label className="block">
        Choose Teaching Mode (*)
        <select name="teachingMode" value={formData.teachingMode} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md">
          <option value="online">Online</option>
          <option value="in_person">In-person</option>
        </select>
      </label>
      </div>

      {/* Funding and Reference Information */}
      <h2 className="text-xl font-semibold mb-2">Fund/Sponsors Information</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
      <label className="block">
        Funding
        <input type="text" name="funding" value={formData.funding} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <h2 className="text-xl font-semibold mb-2">Student Reference</h2>
      <label className="block">
        Student Name
        <input type="text" name="studentReferenceName" value={formData.studentReferenceName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Student National ID
        <input type="text" name="studentReferenceNationalId" value={formData.studentReferenceNationalId} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
      </label>
      </div>

      {/* File Uploads */}
      <h2 className="text-xl font-semibold mb-2">Document Uploads</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
      <label className="block">
        Applicant Photo (*)
        <input type="file" name="photo" onChange={handleFileChange} accept="image/jpeg" required className="w-full p-2 rounded-md" />
      </label>
      <label className="block">
        ID Proof Copy (*)
        <input type="file" name="idProof" onChange={handleFileChange} accept="application/pdf" required className="w-full p-2 rounded-md" />
      </label>
      <label className="block">
        Certificate 1 (*)
        <input type="file" name="certificate1" onChange={handleFileChange} accept="application/pdf" required className="w-full p-2 rounded-md" />
      </label>
      <label className="block">
        Certificate 2
        <input type="file" name="certificate2" onChange={handleFileChange} accept="application/pdf" className="w-full p-2 rounded-md" />
      </label>
      <label className="block">
        Certificate 3
        <input type="file" name="certificate3" onChange={handleFileChange} accept="application/pdf" className="w-full p-2 rounded-md" />
      </label>
      </div>

      {/* How Did You Know About My College */}
      <h2 className="text-xl font-semibold mb-2">How did you come to know about My College?</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
      <label>
        <input type="radio" name="howDidYouKnow" value="newspaper" checked={formData.howDidYouKnow === 'newspaper'} onChange={handleChange} className='mr-2' />
        Newspaper
      </label>
      <label>
        <input type="radio" name="howDidYouKnow" value="friends" checked={formData.howDidYouKnow === 'friends'} onChange={handleChange} className='mr-2' />
        Friends
      </label>
      <label>
        <input type="radio" name="howDidYouKnow" value="student" checked={formData.howDidYouKnow === 'student'} onChange={handleChange} className='mr-2' />
        Student
      </label>
      <label>
        <input type="radio" name="howDidYouKnow" value="facebook" checked={formData.howDidYouKnow === 'facebook'} onChange={handleChange} className='mr-2' />
        Facebook
      </label>
      <label>
        <input type="radio" name="howDidYouKnow" value="sms" checked={formData.howDidYouKnow === 'sms'} onChange={handleChange} className='mr-2' />
        SMS
      </label>
      </div>

      {/* Declaration */}
      <label className='flex'>
        <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} required className='mr-3' />
        <p>I declare that all the information given in this application form and the attached documents are accurate and complete.</p>
      </label>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-5 rounded-md hover:bg-blue-600 transition duration-300">Submit Application</button>
      </div>
    </form>
  );
}

export default ApplicationForm;
