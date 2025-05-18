
import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  id: number;
  name: string;
  poeticLine: string;
  image: string;
  onOpen: (id: number) => void;
}

const DestinationCard = ({ id, name, poeticLine, image, onOpen }: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg h-80 card-transition cursor-pointer"
      style={{ 
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpen(id)}
    >
      <div 
        className="absolute inset-0 image-transition"
        style={{ 
          backgroundImage: `url(${image})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      <div className="absolute bottom-0 w-full p-6 text-white z-10">
        <h2 className="font-display text-2xl font-semibold mb-2 title-glow">
          {name}
        </h2>
        <p className="font-serif text-sm opacity-90 mb-4 line-clamp-2">
          {poeticLine}
        </p>
        <div className="flex items-center opacity-75">
          <MapPin size={16} className="mr-2" />
          <span className="text-xs">Explore destination</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
