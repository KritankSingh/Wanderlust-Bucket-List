
import { useState } from 'react';
import { destinations } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';
import DestinationModal from '@/components/DestinationModal';
import { MapPin } from 'lucide-react';

const Index = () => {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);

  const handleOpenDestination = (id: number) => {
    setSelectedDestination(id);
  };

  const handleCloseDestination = () => {
    setSelectedDestination(null);
  };

  const selectedDestinationData = selectedDestination 
    ? destinations.find(dest => dest.id === selectedDestination) 
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-wanderlust-deep-blue to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white animate-pulse-glow">
            Wanderlust <span className="text-wanderlust-gold">Bucket List</span>
          </h1>
          <div className="flex items-center justify-center text-wanderlust-cream mb-12">
            <MapPin className="mr-2 text-wanderlust-coral" size={18} />
            <p className="font-serif text-lg italic">
              Ten dream destinations awaiting your discovery
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DestinationCard
                id={destination.id}
                name={destination.name}
                poeticLine={destination.poeticLine}
                image={destination.image}
                onOpen={handleOpenDestination}
              />
            </div>
          ))}
        </div>

        <DestinationModal
          isOpen={selectedDestination !== null}
          destination={selectedDestinationData}
          onClose={handleCloseDestination}
        />

        <div className="text-center mt-16 text-wanderlust-cream opacity-60 text-sm">
          <p>© {new Date().getFullYear()} Wanderlust Bucket List. Find your next adventure.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
