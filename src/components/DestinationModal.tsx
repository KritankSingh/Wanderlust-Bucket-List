
import React from 'react';
import { X, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

interface DestinationModalProps {
  isOpen: boolean;
  destination: {
    id: number;
    name: string;
    description: string;
    poeticLine: string;
    image: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  } | null;
  onClose: () => void;
}

const DestinationModal = ({ isOpen, destination, onClose }: DestinationModalProps) => {
  if (!destination) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="modal-overlay" />
      <DialogContent className="modal-content max-w-4xl max-h-[90vh] overflow-auto p-0 rounded-xl border-0">
        <div className="relative">
          {/* Hero Image */}
          <div 
            className="h-[40vh] w-full relative"
            style={{
              backgroundImage: `url(${destination.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white z-20 transition-colors"
          >
            <X size={20} />
          </button>
          
          {/* Content */}
          <div className="relative px-8 py-10 -mt-20 bg-wanderlust-deep-blue text-white rounded-t-3xl">
            <div className="float-in-animation" style={{animationDelay: '0.1s'}}>
              <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3 animate-pulse-glow text-wanderlust-gold">
                {destination.name}
              </h1>
              
              <p className="font-serif text-lg italic text-wanderlust-cream mb-6">
                "{destination.poeticLine}"
              </p>
              
              <div className="mb-8">
                <p className="text-gray-300">
                  {destination.description}
                </p>
              </div>
              
              {/* Map Location */}
              <div className="float-in-animation" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center mb-4">
                  <MapPin size={20} className="text-wanderlust-coral mr-2" />
                  <h3 className="font-medium text-wanderlust-cream">Location</h3>
                </div>
                
                <div className="h-[30vh] rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{ border: 0 }} 
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE&q=${destination.name}&center=${destination.coordinates.lat},${destination.coordinates.lng}&zoom=6`} 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationModal;
