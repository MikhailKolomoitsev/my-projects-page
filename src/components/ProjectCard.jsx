import React from 'react';
import { Card, Col } from 'react-bootstrap'
import './style.css'

const ProjectCard = ({ name, desc, workpage, code, back,height }) => {

    const colors = ['#ff8c8c', '#8cb8ff', '#00991a', '#dbb44f', '#cb8cff', '#ff78ac']
    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }
    const color = getRandomColor()
    const color2=getRandomColor()

    return (
        <Col
            md={3}
            className='mt-3'
        >
            <Card
                className='d-flex align-items-center flex-direction-column justify-content-between p-2 project-card'
                onClick={() => window.location.href = workpage }
                style={{
                    width: 310,
                    height:height,
                cursor: 'pointer',
                backgroundColor: color,
                boxShadow: `9px 5px 33px 5px ${color2}`
            }} border={'light'} >
                <h4 className='mt-3'>{name}</h4>
                <p style={{ textAlign: "center" }}>{desc}</p>
                <ul style={{ listStyleType: "none", textAlign: "left" }}>
                    {workpage && <li><a href={workpage}>👉WorkPage</a></li>}
                    <li><a href={code}>👉View code on GitHub</a></li>
                    {back ? <li><a href={back}>👉BackEnd code on GitHub</a></li>:<></>}
                </ul>
            </Card>
        </Col>
  )
};

export default ProjectCard;
