import {Program} from '../types/program'
import {
    ChevronRight,
    Award,
    BookOpen,
    Building2,
  } from 'lucide-react';

export const programs: Program[] = [
  {
    id: 'program1',
    title: 'Bachelor of Science in Computer Science',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: ChevronRight,
  },
  {
    id: 'program2',
    title: "Business & Management",
    description: "BBA, MBA, and Diploma programs in Business Administration, Marketing, and Human Resource Management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: Building2
  },
  {
    id: 'program3',
    title: "Information Technology",
    description: "BSc in Computer Science, Software Engineering, and IT Security",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: BookOpen
    },
    {
    id: 'program4',
    title: "Tourism & Hospitality",
    description: "Diploma and Advanced Diploma in Tourism and Hospitality Management",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: Award
    }
]