import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vansh Bhardwaj </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently a student pursuing my <span className="purple">BTech in CSE</span> at the <span className="purple">University of Visvesvaraya College of Engineering</span>.
            <br />
            I am intrested in Competitive programming and full-stack development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Ukulele
            </li>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming and physical fitness
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
