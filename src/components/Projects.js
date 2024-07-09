// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";


// import notesImg from "../assets/img/notes.png";
// import TinDogImg from "../assets/img/TinDog.png";
// import DicEchallengeImg from "../assets/img/thisdice.png";
// import responsiveWebsiteImg from "../assets/img/responsiveWebsite.png";
// import socialImg from "../assets/img/social.png";
// import DrumkitImg from "../assets/img/drumkit 2.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Social Media Web app",
//       description: "Design & Development",
//       imgUrl: socialImg,
//     },
//     {
//       title: "Notes Generator",
//       description: "Design & Development",
//       imgUrl: notesImg,
//     },
//     {
//       title: "TinDog",
//       description: "Design & Development",
//       imgUrl: TinDogImg,
//     },
//     {
//       title: "Dice challenge",
//       description: "Design & Development",
//       imgUrl: DicEchallengeImg,
//     },
//     {
//       title: "responsive Website",
//       description: "Design & Development",
//       imgUrl: responsiveWebsiteImg,
//     },
//     {
//       title: "Drum kit",
//       description: "Design & Development",
//       imgUrl: DrumkitImg,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Here are the various projects I have been developing using various tools and technologies.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Waiting for more projects!</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Always ready to collaborate.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }


import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import notesImg from "../assets/img/notes.png";
import TinDogImg from '../assets/img/TinDog.png';
import DicEchallengeImg from '../assets/img/thisdice.png';
import responsiveWebsiteImg from '../assets/img/responsiveWebsite.png';
import socialImg from '../assets/img/social.png';
import DrumkitImg from '../assets/img/drumkit 2.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
// import doctalkImg from '../assets/img/doctalk.png';
// import natoursImg from '../assets/img/natours.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    // {
    //   title: 'DocTalk',
    //   description: 'Design & Development',
    //   imgUrl: doctalkImg,
    //   link: 'https://vaibhav2536.github.io/Password-Generator/'
    // },
    // {
    //   title: 'Natours',
    //   description: 'Design & Development',
    //   imgUrl: natoursImg,
    //   link: 'https://vaibhav2536.github.io/Password-Generator/'
    // },
    {
      title: 'Social Media Web app',
      description: 'Design & Development',
      imgUrl: socialImg,
      link: 'https://evagoel.github.io/social_media/'
    },
    {
      title: 'Notes Generator',
      description: 'Design & Development',
      imgUrl: notesImg,
      link: 'https://evagoel.github.io/rnotes/'
    },
    {
      title: 'Dice challenge',
      description: 'Design & Development',
      imgUrl: DicEchallengeImg,
      link: ''
    },
    {
      title: 'Drum Kit',
      description: 'Design & Development',
      imgUrl: DrumkitImg,
      link: ''
    },
    {
      title: 'TinDog',
      description: 'Design & Development',
      imgUrl: TinDogImg,
      link: 'https://evagoel.github.io/TinDog-application/'
    },
    {
      title: 'Responsive Website',
      description: 'Design & Development',
      imgUrl: responsiveWebsiteImg,
      link: ''
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate_animated animate_fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>Here are the various projects I have been developing using various tools and technologies.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate_animated animate_slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Waiting for more projects!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Always ready to collaborate.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
