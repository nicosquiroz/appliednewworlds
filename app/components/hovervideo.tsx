interface HoverVideoProps {
    word: string;
    videoSrc: string;
  }
  
  export function HoverVideo({ word, videoSrc }: HoverVideoProps) {
    return (
      <span className="hover-video-wrapper">
        {word}
        <img 
          src={videoSrc} 
          alt={`${word} animation`}
          className="hover-video"
        />
      </span>
    );
  }