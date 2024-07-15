import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import note from "../../Assets/Projects/noteZipper.png";
import food from "../../Assets/Projects/tomato.png";
import admin from "../../Assets/Projects/admin.png";
import employee from "../../Assets/Projects/employee.png";
import ecom from "../../Assets/Projects/ecom.png";
import ecomadm from "../../Assets/Projects/ecomadm.png";


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
              description="Built a Simple Notes Application using React.js, Bootstrap, Node.js, and MongoDB, enabling seamless note management with CRUD operations and secure data storage."
              ghfeLink="https://github.com/64657/React/tree/d43802bc3cdb3845b2d4d4301580bd8684c8b65e/API%20MERN/frontend"
              ghbeLink="https://github.com/64657/React/tree/d43802bc3cdb3845b2d4d4301580bd8684c8b65e/API%20MERN/backend"
              demoLink="https://jolly-melomakarona-17a58f.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Tomato"
              description="Developed a Food Delivery Application using the MERN stack with Stripe integration for secure payments. Features include user authentication, restaurant and menu management, order processing, and payment handling."
              ghfeLink="https://github.com/64657/FoodDeliveryWebsite/tree/main/frontend"
              ghbeLink="https://github.com/64657/FoodDeliveryWebsite/tree/main/backend"

              demoLink="https://tomatodel.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Tomato Admin"
              description="Created a streamlined Admin Panel for a Food Delivery Website using the MERN stack, facilitating easy management of restaurants, menus, orders, and users. Includes robust features like analytics, order tracking, and a user-friendly interface for efficient operations."
              ghfeLink="https://github.com/64657/FoodDeliveryWebsite/tree/main/admin"
              ghbeLink="https://github.com/64657/FoodDeliveryWebsite/tree/main/admin"

              demoLink="https://tomatoadmin.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Shopper"
              description="Developed a robust e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, product management, and a seamless shopping experience."
              ghfeLink="https://github.com/64657/Ecommerce/tree/main/frontend"
              ghbeLink="https://github.com/64657/Ecommerce/tree/main/backend"

              demoLink="https://main--ecomday.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomadm}
              isBlog={false}
              title="Shopper Admin"
              description="Engineered a comprehensive admin interface within the MERN stack e-commerce platform, empowering seamless management of user accounts and product catalogs."
              ghfeLink="https://github.com/64657/Ecommerce/tree/main/admin"
              ghbeLink="https://github.com/64657/Ecommerce/tree/main/admin"

              demoLink="https://ecomdashp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Management"
              description="Developed an Employee Management System using the MERN stack, enabling CRUD operations to manage and store employee information. Admin access: Username - admin, Password - admin123."
              ghfeLink="https://github.com/64657/DealsDray-Task/tree/main/EmployeeManagementList"
              ghbeLink="https://github.com/64657/DealsDray-Task/tree/main/Backend"

              demoLink="https://mongoman.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
