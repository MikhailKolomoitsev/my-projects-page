import './App.css';
import { Container } from 'react-bootstrap'
import ProfileCard from './components/ProfileCard'
import ProjectCard from './components/ProjectCard';
import { BrowserRouter } from "react-router-dom";
import MusicPlayer from './components/MusicPlayer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <BrowserRouter>
      <Container className='p-3' style={{ color: "white" }}>
        <div className="App">
          <ProfileCard />
          <h3>Main Projects</h3>
          <div className="project-grid">
        <MusicPlayer />

            <ProjectCard
              name={'Synaptask FullStack'}
              desc=
              {`Feature for Productivity: 
                React, WS, Redux, Three.js, Shader Rendering, Python, MySQL `}
              workpage={'https://synaptask.space/'}
              
            />
            <ProjectCard
              name={'BuyDevice FullStack'}
              desc=
              {'Online shop of electronics. NodeJS, Express, React, MobX. Role: Full-Stack developer'}
              workpage={'https://mikhailkolomoitsev.github.io/onlineShop-client/'}
              code={'https://github.com/MikhailKolomoitsev/onlineShop-client'}
              back={'https://github.com/MikhailKolomoitsev/onlineShop-server'}
              
            />
            <ProjectCard
              name={'SuperHero FullStack'}
              desc=
              {'Superhero Generator'}
              workpage={'https://mikhailkolomoitsev.github.io/main'}
              code={'https://github.com/MikhailKolomoitsev/superhero-front'}
              back={'https://github.com/MikhailKolomoitsev/superhero-back'}
              
            />
          </div>
          <div className="project-grid">
            <ProjectCard
              name={'Weather App FullSTack'}
              desc=
              {'Weather App. NextJS Nestjs  Redux-Saga Postgress JWT GoogleOAuth'}
              workpage={'https://github.com/MikhailKolomoitsev/weather-frontend'}
              code={'https://github.com/MikhailKolomoitsev/weather-frontend'}
              back={'https://github.com/MikhailKolomoitsev/weather-backend'}
              
            />
            <ProjectCard
              name={'KapustaProject Full Stack'}
              desc=
              {'Kapusta site to manage personal financial balance. Back + Front-End project on React, Redux, NodeJS, Express. Role: ScrumMaster'}
              workpage={'https://hungry-montalcini-771fc2.netlify.app/'}
              code={'https://github.com/EKhoroshko/backend-kapusta'}
              back={'https://github.com/EKhoroshko/frontend-kapusta'}
              
            />
            <ProjectCard
              name={'Filmoteka'}
              desc=
              {'Team project about searching movies, and adding favorite movies to a client personal library. Vanilla JS, npm-packages, bootstrap and SCSS. Role: ScrumMaster'}
              workpage={'https://wlad-kryhin.github.io/project-JS-NightCoders/'}
              code={'https://github.com/wlad-kryhin/project-JS-NightCoders/tree/master'}
              
            />
          </div>
          <h3>FrontEnd</h3>
          <div className="project-grid">
            <ProjectCard
              height={200}
              name={'Currency chart'}
              workpage={'https://mikhailkolomoitsev.github.io/currency-chart/'}
              code={'https://github.com/MikhailKolomoitsev/currency-chart'}
            />
            <ProjectCard
              height={200}
              name={'Firebase'}
              desc={'Auth technology with social-webs'}
              workpage={'https://mikhailkolomoitsev.github.io/firebase-copy/login'}
              code={'https://github.com/MikhailKolomoitsev/firebase-copy'}
            />
            <ProjectCard
              height={200}
              name={'Squares'}
              desc={'Getting location of squares and notifiaction of them'}
              workpage={'https://mikhailkolomoitsev.github.io/start-test/'}
              code={'https://github.com/MikhailKolomoitsev/start-test'}
            />
            <ProjectCard
              height={200}
              name={'JOTTO game - full-tested application'}
              code={'https://github.com/MikhailKolomoitsev/test-context-base'}
              workpage={'https://github.com/MikhailKolomoitsev/test-context-base'}
            />
          </div>
          <h3>BackEnd</h3>
          <div className="project-grid">
          <ProjectCard
              height={200}
              name={'Users API'}
              desc={'TypeScript, NestJS , MongoDB , RabbitMQ , CloudinaryAPI'}
              workpage={'https://exercise-tracker-freecodecamp.herokuapp.com/'}
              code={'https://github.com/MikhailKolomoitsev/freeCodeCampNodejs/tree/Exercise-Tracker'}
            />
            <ProjectCard
              height={200}
              name={'Exercise tracker'}
              workpage={'https://exercise-tracker-freecodecamp.herokuapp.com/'}
              code={'https://github.com/MikhailKolomoitsev/freeCodeCampNodejs/tree/Exercise-Tracker'}
            />
            <ProjectCard
              height={200}
              name={'File Metadata MS'}
              workpage={'https://final-metadata-microservice.herokuapp.com/'}
              code={'https://github.com/MikhailKolomoitsev/freeCodeCampNodejs/tree/File-Metadata-Microservice'}
            />
            <ProjectCard
              height={200}
              name={'URL Shortener Microservice'}
              workpage={'https://final-metadata-microservice.herokuapp.com/'}
              code={'https://github.com/MikhailKolomoitsev/freeCodeCampNodejs/tree/File-Metadata-Microservice'}
            />
          </div>
          <div className="project-grid">
            <ProjectCard
              height={200}
              name={'URL Shortener Microservice'}
              workpage={'https://freecodecamp-nodejs-express.herokuapp.com/'}
              code={'https://github.com/MikhailKolomoitsev/freeCodeCampNodejs/tree/boilerplate-project-headerparser'}
            />
            <ProjectCard
              height={200}
              name={'Timestamp Microservice'}
              workpage={'https://timestamp-microservice-freecod.herokuapp.com/'}
              code={'https://github.com/MikhailKolomoitsev/freeCodeCampNodejs/tree/Timestamp-Microservice'}
            />
            <ProjectCard
              height={200}
              name={'Online Shop'}
              desc={'Back-end for online shop of devices'}
              code={'https://github.com/MikhailKolomoitsev/onlineShop-server'}
            />
          </div>
          <h3>JavaScript</h3>
          <div className="project-grid">
            <ProjectCard
              height={150}
              name={'AIM Game'}
              workpage={'https://mikhailkolomoitsev.github.io/aim-game/'}
              code={'https://github.com/MikhailKolomoitsev/aim-game'}
            />
            <ProjectCard
              height={150}
              name={'Mini Desk'}
              workpage={'https://mikhailkolomoitsev.github.io/mini-desk/'}
              code={'https://github.com/MikhailKolomoitsev/mini-desk'}
            />
            <ProjectCard
              height={150}
              name={'Slider Page for OnlineShop'}
              workpage={'https://mikhailkolomoitsev.github.io/js-marathon-cards-1/'}
              code={'https://github.com/MikhailKolomoitsev/js-marathon-cards-1'}
            />
          </div>
          <div className="project-grid">
            <ProjectCard
              height={150}
              name={'Birthday Card'}
              workpage={'https://mikhailkolomoitsev.github.io/birthdayCard/'}
              code={'https://github.com/MikhailKolomoitsev/birthdayCard'}
            />
            <ProjectCard
              height={150}
              name={'Color Switch'}
              workpage={'https://github.com/MikhailKolomoitsev/goit-js-hw-11-color-switch'}
              code={'https://mikhailkolomoitsev.github.io/goit-js-hw-11-color-switch/'}
            />
            <ProjectCard
              height={150}
              name={'Images Gallery'}
              workpage={'https://mikhailkolomoitsev.github.io/goit-js-hw-08-gallery/'}
              code={'https://github.com/MikhailKolomoitsev/goit-js-hw-08-gallery'}
            />
          </div>
          <h3>WebUI</h3>
          <div className='d-flex justify-content-between align-items-center flex-wrap mb-3' style={{ width: 555 }}>
            <ProjectCard
              height={200}
              name={'WebStudio'}
              desc={'Ladning page for WebStudio project'}
              workpage={'https://mikhailkolomoitsev.github.io/goit-markup-hw-08/'}
              code={'https://github.com/MikhailKolomoitsev/goit-markup-hw-08'}
            />
            <ProjectCard
              height={200}
              name={'IceCream landing'}
              desc={'Team project. Role: Scrum-master. My part of work: Hero, Icons SVG'}
              workpage={'https://wlad-kryhin.github.io/parcel-project-template/'}
              code={'https://mikhailkolomoitsev.github.io/goit-js-hw-11-color-switch/'}
            />
          </div>
        </div>
        <ChatBot/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
