import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kagada from "../../Assets/Projects/kagada.png";
import speech from "../../Assets/Projects/speech.png";
import impetus from "../../Assets/Projects/impetus.png";
import ecell from "../../Assets/Projects/ecell.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecell}
              isBlog={false}
              title="E-Cell WebApp"
              description="A web app for college Entrepreneurship Cell which allows members to register for events, and post articles and has admin functionalities."
              ghLink="https://github.com/hi-Kartik2004/Ecell-web-app"
              demoLink="https://ecell-web-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impetus}
              isBlog={false}
              title="Impetus Website"
              description="Website for Impetus 24.0 Fest for IEEE UVCE."
              ghLink="https://github.com/SDSIG/IMPETUS-24.0"
              demoLink="https://impetus-24-0.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speech}
              isBlog={false}
              title="Speech"
              description="A website for website to convert text into speech using multiple voice options. It uses Speech Synthesis API."
              ghLink="https://github.com/Bhardwajvansh/Speech"
              demoLink="https://bhardwajvansh.github.io/Speech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kagada}
              isBlog={false}
              title="Kagada Website"
              description="the official website for National Student Conference Kagada 2023"
              ghLink="https://github.com/SDSIG/KAGADA2023"
              demoLink="https://kagada.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
