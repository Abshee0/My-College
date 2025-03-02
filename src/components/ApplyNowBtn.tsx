import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function ApplyNowBtn() {
    const navigate = useNavigate();

    return (
        <motion.button
            onClick={() => navigate('/application')}
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(0, 247, 255, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            className="neon-border bg-transparent text-neon-blue px-8 py-3 rounded-full inline-flex items-center space-x-2 font-future transition-all duration-300"
        >
            <Zap className="h-5 w-5" />
            <span>Start Application</span>
            <ChevronRight className="h-5 w-5" />
        </motion.button>
    )
}

export default ApplyNowBtn