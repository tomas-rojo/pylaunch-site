import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-blue-400 mb-4">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;