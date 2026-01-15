import { useRef, useState, useEffect } from "react";
import { Play, Pause, Music2 } from "lucide-react";

export default function MusicComponent() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} loop>
        <source src="/music/music.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="relative glass-strong text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition overflow-hidden"
      >
        {/* Progress background */}
        <span
          className="absolute top-0 left-0 h-full bg-purple-500 rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></span>

        {/* Content above background */}
        {playing && (
          <span className="flex items-center gap-1 z-10 music-animate-marquee">
            <Music2 className="w-4 h-4" /> Chubina.mp3
          </span>
        )}
        {!playing && (
          <span className="flex items-center gap-1 z-10 ">
            Mood Music 
          </span>
        )}
        <span className="z-10">{playing ? <Pause /> : <Play />}</span>
      </button>
    </div>
  );
}
