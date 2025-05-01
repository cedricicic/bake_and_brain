import { 
  FlaskRound, 
  Brain,
  GraduationCap,
  Users
} from 'lucide-react';
import { ReactNode } from 'react';

interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  grade: string;
  icon: ReactNode;
  color: string;
  image: string;
}

export const lessons: Lesson[] = [
  {
    id: 'yeast-experiment',
    title: 'Rise to the Occasion',
    subtitle: 'Exploring Yeast, Gas, and Growth',
    description: 'A hands-on science experiment that combines baking with biology, teaching students about yeast fermentation and gas laws.',
    duration: '80 min',
    grade: '9-10',
    icon: <FlaskRound className="w-6 h-6" />,
    color: 'bg-blue-500',
    image: '/yeast.png'
  },
  {
    id: 'chemistry-of-baking',
    title: 'The Chemistry of Baking',
    subtitle: 'Understanding Chemical Reactions',
    description: 'Discover the science behind baking through experiments with acids, bases, and chemical reactions.',
    duration: '60 min',
    grade: '8-9',
    icon: <Brain className="w-6 h-6" />,
    color: 'bg-purple-500',
    image: '/chemistry-baking.jpg'
  },
  {
    id: 'measurement-math',
    title: 'Measurement Matters',
    subtitle: 'Math in the Kitchen',
    description: 'Learn about fractions, ratios, and conversions through practical baking measurements.',
    duration: '45 min',
    grade: '6-7',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'bg-green-500',
    image: '/measurement-math.jpg'
  },
  {
    id: 'team-baking',
    title: 'Team Baking Challenge',
    subtitle: 'Collaborative Learning',
    description: 'A group activity that teaches teamwork, communication, and problem-solving through baking.',
    duration: '90 min',
    grade: '7-8',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-orange-500',
    image: '/team-baking.jpg'
  }
]; 