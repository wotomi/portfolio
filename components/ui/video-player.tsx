"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  thumbnail?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export function VideoPlayer({
  src,
  thumbnail,
  className,
  autoPlay = false,
  loop = true,
  muted = true,
  controls = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div
      className={cn(
        "relative group overflow-hidden rounded-xl bg-secondary/20 backdrop-blur-sm",
        className
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={thumbnail}
        loop={loop}
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
        onClick={togglePlay}
      />

      {/* Play/Pause Overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all hover:scale-110">
            <Play className="w-8 h-8 text-black ml-1" />
          </div>
        </div>
      )}

      {/* Controls Bar */}
      {controls && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 transition-all duration-300",
            showControls && isPlaying ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="text-white hover:text-primary transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="text-white hover:text-primary transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            <div className="flex-1" />

            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-primary transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
