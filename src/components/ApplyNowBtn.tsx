import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';


function ApplyNowBtn() {
    const navigate = useNavigate();

  return (
    <button
        onClick={() => navigate('/application')}
        className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-blue-700 transition-colors"
    >
        <span>Start Application</span>
        <ChevronLeft className="h-5 w-5 rotate-180" />
    </button>
  )
}

export default ApplyNowBtn
