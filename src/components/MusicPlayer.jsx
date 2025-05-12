import React, { useState, useRef } from 'react';
import ReactHowler from 'react-howler';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const howlerRef = useRef(null);

    const handleToggle = () => {
        setHasInteracted(true);
        const howl = howlerRef.current?.howler;

        if (!playing) {
            howl?.volume(0);
            setPlaying(true);
            setTimeout(() => howl?.fade(0, volume, 2000), 0);
        } else {
            howl?.fade(volume, 0, 1000);
            setTimeout(() => setPlaying(false), 1000);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        howlerRef.current?.howler.volume(newVolume);
    };

    return (
        <div className="music-player-container">
            {hasInteracted && (
                <ReactHowler
                    ref={howlerRef}
                    src={`${process.env.PUBLIC_URL}/streams.mp3`}
                    playing={playing}
                    loop={true}
                    html5={true}
                    volume={volume}
                />
            )}
            <button className="music-player-button" onClick={handleToggle}>
                {playing ? 'Pause' : 'Music'} 💦
            </button>
            <input
                className="music-player-slider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
};

export default MusicPlayer;