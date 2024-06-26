import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import tripguide from '../../Assets/Projects/tripguide.png';
import petro from '../../Assets/Projects/petro.png';
import avian from '../../Assets/Projects/avian.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avian}
              isBlog={false}
              title="Avian Web"
              description="Website for the Avian paint company, providing product information, services, and the latest company news. This site is designed to provide an optimal user experience with responsive displays and interactive features."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petro}
              isBlog={false}
              title="PMMS PG "
              description="Factory Maintenance Management System for Petrokimia Gresik which aims to increase the efficiency and effectiveness of factory maintenance. The system includes maintenance tracking features, spare parts management, and regular maintenance schedules."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripguide}
              isBlog={false}
              title="Tripguide Web"
              description="An online platform that provides travel guides, including destination information, activity recommendations and travel tips. The site helps users plan their trips by providing trusted reviews and advice."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
