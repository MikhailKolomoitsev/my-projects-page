import React from 'react';
import './AnimatedMusicNotes.css';

const AnimatedMusicNotes = ({ isPlaying = false }) => {
    return (
        <div className={`music-notes ${isPlaying ? 'playing' : ''}`}>
            <span>🎵</span>
            <span>🎶</span>
            <span>🎵</span>
        </div>
    );
};

export default AnimatedMusicNotes;