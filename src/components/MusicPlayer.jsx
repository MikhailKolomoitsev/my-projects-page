import React, { useState, useRef } from 'react';
import ReactHowler from 'react-howler';
import './MusicPlayer.css';
import { ShineBorder } from './ShineBorder';
import AnimatedMusicNotes from './AnimatedMusicNotes';

const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const howlerRef = useRef(null);

    const handleToggle = () => {
        setHasInteracted(true);
        const howl = howlerRef.current?.howler;

        if (!playing) {
            howl?.volume(volume);
            setPlaying(true);
            setTimeout(() => howl?.fade(0, volume, 2000), 0);
        } else {
            howl?.fade(volume, 0, 1000);
            setPlaying(false);
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
                    src={`${process.env.PUBLIC_URL}/chill.mp3`}
                    playing={playing}
                    loop={true}
                    html5={true}
                    volume={volume}
                />
            )}
            <AnimatedMusicNotes isPlaying={playing} />
            <ShineBorder isOn={playing} borderWidth={5}>
            <button className="music-player-button" onClick={handleToggle}>
                    {playing ? '⏸' : '▶️'}
            </button>
            </ShineBorder>
        </div>
    );
};

export default MusicPlayer;