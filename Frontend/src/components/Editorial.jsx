
import { useState, useRef, useEffect } from 'react';
import { Pause, Play, VideoOff } from 'lucide-react';

const Editorial = ({ secureUrl, thumbnailUrl, duration }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Reset player state whenever the video source changes (new problem)
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, [secureUrl]);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const handleTimeUpdate = () => {
      if (video) setCurrentTime(video.currentTime);
    };
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, [secureUrl]);

  // No video for this problem — bail out early instead of rendering NaN
  if (!secureUrl) {
    return (
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-2 aspect-video bg-base-200 rounded-xl text-base-content/60">
        <VideoOff size={40} />
        <p>Video is not available for this problem</p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        key={secureUrl} // forces remount when the source changes
        ref={videoRef}
        src={secureUrl}
        poster={thumbnailUrl}
        onClick={togglePlayPause}
        className="w-full aspect-video bg-black cursor-pointer"
      />

      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity ${
          isHovering || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={togglePlayPause}
          className="btn btn-circle btn-primary mr-3"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <div className="flex items-center w-full mt-2">
          <span className="text-white text-sm mr-2">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) => {
              if (videoRef.current) {
                videoRef.current.currentTime = Number(e.target.value);
              }
            }}
            className="range range-primary range-xs flex-1"
          />
          <span className="text-white text-sm ml-2">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default Editorial;

