import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Mohammad Sofiyulloh </span>
            from <span className="purple"> Pasuruan Regency, East Java.</span> I am a passionate and dedicated programmer with 2 years of professional experience in software development. I have completed Bachelor of Information Technology
            in Computer Science at University of Jember.
          </p>
          <p style={{ color: 'rgb(155 126 172)' }}>"Fight 'till failure, or be a failure." </p>
          <footer className="blockquote-footer">Mohammad Sofiyulloh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
