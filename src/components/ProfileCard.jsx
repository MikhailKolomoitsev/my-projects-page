import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../static/Stack.png';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className="profile-card-container">
            <div className="profile-image">
                <Image src={img} fluid rounded />
            </div>
            <div className="profile-text">
                <h3 className="wave">👋 Hi there</h3>
                <h2>
                    Welcome to <span className="highlight">Mikhail's</span> dev page
                </h2>
                <ul className="profile-bullets">
                    <li>🚀 Working on React + Node.js projects</li>
                    <li>📚 Learning Redux, SQL/NoSQL, WebSockets</li>
                    <li>👨‍💻 Seeking FullStack Developer roles</li>
                    <li>🧠 Fun fact: Between two pills I choose both 🔴🔵</li>
                </ul>
                <h4>📨 Contacts</h4>
                <ul className="contact-links">
                    <li><a href="mailto:mihon.testosterone@gmail.com">mihon.testosterone@gmail.com</a></li>
                    <li><a href="https://t.me/mykhailo_elmejor" target="_blank" rel="noreferrer">Telegram</a></li>
                    <li><a href="https://www.linkedin.com/in/mikhailkolomoitsev/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileCard;