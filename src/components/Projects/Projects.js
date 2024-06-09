import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import note from "../../Assets/Projects/noteZipper.png";
import food from "../../Assets/Projects/tomato.png";
import admin from "../../Assets/Projects/admin.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="NoteZipper"
              description="Simple Notes Application build with React.js, Bootstrap, Nodejs and MongoDB."
              ghLink="https://github.com/64657/React/tree/d43802bc3cdb3845b2d4d4301580bd8684c8b65e/API%20MERN"
              demoLink="https://jolly-melomakarona-17a58f.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Tomato"
              description="A Food delivery application using MERN stack with stripe."
              ghLink="https://github.com/64657/FoodDeliveryWebsite.git"
              demoLink="https://tomatodel.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Admin"
              description="Admin panel of the food delivery website."
              ghLink="https://github.com/64657/FoodDeliveryWebsite.git"
              demoLink="https://tomatoadmin.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
