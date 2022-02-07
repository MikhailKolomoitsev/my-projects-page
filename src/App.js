import './App.css';
import { Container } from 'react-bootstrap'
import ProfileCard from './components/ProfileCard'
import ProjectCard from './components/ProjectCard';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Container className='p-3' style={{ color: "white" }}>
      <div className="App">
        <ProfileCard />
          <h3>Main Projects</h3>
          <div className='d-flex justify-content-between flex-wrap mb-3'>
            <ProjectCard
              name={'BuyDevice FullStack'}
              desc=
              {'Online shop of electronics. NodeJS, Express, React, MobX. Role: Full-Stack developer'}
              workpage={'https://mikhailkolomoitsev.github.io/onlineShop-client/'}
              code={'https://github.com/MikhailKolomoitsev/onlineShop-client'}
              back={'https://github.com/MikhailKolomoitsev/onlineShop-server'}
              height={300}
            />
            <ProjectCard
              name={'KapustaProject Full Stack'}
              desc=
              {'Kapusta site to manage personal financial balance. Back + Front-End project on React, Redux, NodeJS, Express. Role: ScrumMaster'}
              workpage={'https://hungry-montalcini-771fc2.netlify.app/'}
              code={'https://github.com/EKhoroshko/backend-kapusta'}
              back={'https://github.com/EKhoroshko/frontend-kapusta'}
              height={300}
            />
            <ProjectCard
              name={'Filmoteka'}
              desc=
              {'Team project about searching movies, and adding favorite movies to a client personal library. Vanilla JS, npm-packages, bootstrap and SCSS. Role: ScrumMaster'}
              workpage={'https://wlad-kryhin.github.io/project-JS-NightCoders/'}
              code={'https://github.com/EKhoroshko/backend-kapusta'}
              back={'https://github.com/EKhoroshko/frontend-kapusta'}
              height={300}
            />
          </div>
          <h3>BackEnd Projects</h3>
          <div className='d-flex justify-content-between flex-wrap mb-3'>
            <ProjectCard
              name={'Exercise tracker'}
              workpage={'https://exercise-tracker-freecodecamp.herokuapp.com/'}
              code={'https://github.com/MikhailKolomoitsev/freeCodeCampNodejs/tree/Exercise-Tracker'}
            />
            <ProjectCard
              name={'File Metadata Microservice'}
              workpage={'https://final-metadata-microservice.herokuapp.com/'}
              code={'https://github.com/MikhailKolomoitsev/freeCodeCampNodejs/tree/File-Metadata-Microservice'}
            />
            <ProjectCard
              name={'URL Shortener Microservice'}
              workpage={'https://final-metadata-microservice.herokuapp.com/'}
              code={'https://github.com/MikhailKolomoitsev/freeCodeCampNodejs/tree/File-Metadata-Microservice'}
            />
          </div>
      </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
