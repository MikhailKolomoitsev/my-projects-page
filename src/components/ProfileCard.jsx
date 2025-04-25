import React from 'react';
import { Image, Nav } from 'react-bootstrap'
import img from '../static/Stack.png'

const ProfileCard = () => {
    return (
        <div className='d-flex p-3'>
            <Image
                variant="top"
                src={img}
                style={{ width: 600, maxHeight: 450, }}>
            </Image>
            <div style={{ width: 800 }}>
                <h3>### Hi there 👋</h3>
                <h2>Welcome to <span>Mikhail's</span> dev-page</h2>
                <ul style={{ listStyleType: "none", textAlign: "left" }}>
                    <li>- 🔭 I’m  working on React+Node.js projects</li>
                    <li>- 🌱 I’m  learning React, Redux, Node.js, noSQL and SQL DBs</li>
                    <li>- 👯 I’m looking to a position of FullStack Developer</li>
                    <li>- ⚡ Fun fact: Between two pills I choose both🔴🔵</li>
                </ul>
                <h3>Contacts📨</h3>
                <ul style={{ listStyleType: "none", textAlign: "left" }}>
                    <li><a href="mailto:mihon.testosterone@gmail.com">mihon.testosterone@gmail.com</a></li>
                    <li><a href="https://t.me/mykhailo_elmejor">Telegram</a></li>
                    <li><a href="https://www.linkedin.com/in/mikhailkolomoitsev/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )

};

export default ProfileCard;
