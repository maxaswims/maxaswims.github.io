import { useState } from 'react';
import { Play } from 'lucide-react';

export const CrochetVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // URL de la vidéo de crochet
  const videoUrl = "https://www.bing.com/videos/riverview/relatedvideo?&q=crochet+tutorial+best+of&&mid=B886B0122F6E6E4D8218B886B0122F6E6E4D8218&mmscn=mtsc&aps=29&FORM=VRDGAR";
  
  // Image de prévisualisation
  const thumbnailUrl = "/assets/PICS/DS/MAXApalms.png";

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isPlaying ? (
        <iframe
          src={videoUrl}
          title="Tutoriel de crochet"
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <div className="relative w-full h-full">
          <img
            src={thumbnailUrl}
            alt="Tutoriel de crochet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="w-16 h-16 bg-pink rounded-full flex items-center justify-center text-white hover:bg-pink-dark transition-colors"
              aria-label="Lire la vidéo"
            >
              <Play size={32} className="ml-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
