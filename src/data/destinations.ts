
interface Destination {
  id: number;
  name: string;
  description: string;
  poeticLine: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Kyoto, Japan",
    description: "Ancient temples shrouded in morning mist, where cherry blossoms dance on gentle winds and traditional tea houses invite contemplation.",
    poeticLine: "Where time stands still beneath cherry blossoms and ancient prayers echo through maple-lined paths.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    coordinates: {
      lat: 35.0116,
      lng: 135.7680
    }
  },
  {
    id: 2,
    name: "Santorini, Greece",
    description: "Immaculate white buildings cascade down volcanic cliffs, overlooking the deep blue Aegean Sea that cradles this crescent-shaped paradise.",
    poeticLine: "White-washed dreams suspended between azure skies and the endless Aegean deep.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    coordinates: {
      lat: 36.3932,
      lng: 25.4615
    }
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    description: "A mystical ancient citadel nestled among dramatic Andean peaks, shrouded in clouds and mystery, standing as testament to Incan ingenuity.",
    poeticLine: "Stone whispers of ancient glory, cradled in the misty embrace of sacred mountains.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    coordinates: {
      lat: -13.1631,
      lng: -72.5450
    }
  },
  {
    id: 4,
    name: "Bora Bora, French Polynesia",
    description: "Overwater bungalows hover above crystal clear turquoise lagoons, surrounded by lush mountains and coral reefs teeming with vibrant life.",
    poeticLine: "Paradise distilled into a ring of azure, where heaven meets earth in perfect harmony.",
    image: "https://images.unsplash.com/photo-1633292750937-d02685603ff7",
    coordinates: {
      lat: -16.5004,
      lng: -151.7415
    }
  },
  {
    id: 5,
    name: "Serengeti, Tanzania",
    description: "Vast golden plains that host the spectacular Great Migration, where millions of wildebeest traverse beneath endless African skies.",
    poeticLine: "Endless plains where wild hearts roam free under the watchful gaze of ancient stars.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    coordinates: {
      lat: -2.3333,
      lng: 34.8333
    }
  },
  {
    id: 6,
    name: "Northern Lights, Iceland",
    description: "Ethereal green and purple lights dance across the Arctic sky, painting the pristine snow-covered landscape in surreal hues.",
    poeticLine: "Cosmic ballet painted in emerald and violet against the canvas of night.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    coordinates: {
      lat: 64.9631,
      lng: -19.0208
    }
  },
  {
    id: 7,
    name: "Venice, Italy",
    description: "A floating labyrinth of canals and Renaissance architecture, where gondolas glide silently beneath ornate bridges and time seems suspended.",
    poeticLine: "A floating dream of marble and water, where history flows through blue-green veins.",
    image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f",
    coordinates: {
      lat: 45.4408,
      lng: 12.3155
    }
  },
  {
    id: 8,
    name: "Great Barrier Reef, Australia",
    description: "An underwater paradise of vibrant coral gardens and kaleidoscopic marine life spanning over 2,300 kilometers of azure ocean.",
    poeticLine: "Living tapestry beneath azure waves, nature's masterpiece in infinite hues of blue.",
    image: "https://images.unsplash.com/photo-1559347929-7352926e662c",
    coordinates: {
      lat: -18.2871,
      lng: 147.6992
    }
  },
  {
    id: 9,
    name: "Petra, Jordan",
    description: "Rose-colored ancient city carved into towering sandstone cliffs, revealing elaborate facades that glow gold and pink at sunset.",
    poeticLine: "Rose-red city half as old as time, whispering secrets carved in ancient stone.",
    image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3",
    coordinates: {
      lat: 30.3285,
      lng: 35.4444
    }
  },
  {
    id: 10,
    name: "Patagonia, Chile & Argentina",
    description: "Dramatic peaks, pristine glaciers, and windswept plains create a wilderness paradise at the end of the world for intrepid explorers.",
    poeticLine: "Earth's final frontier where jagged peaks pierce clouds and glaciers whisper primordial tales.",
    image: "https://images.unsplash.com/photo-1431683535750-2b9b2371efb7",
    coordinates: {
      lat: -49.3270,
      lng: -72.8493
    }
  }
];
