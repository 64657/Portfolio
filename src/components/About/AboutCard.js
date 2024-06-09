import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Mohammed Faseeullah </span>
            from <span className="purple"> Chennai,Tamilnadu, India.</span>
            <br />
            I am currently looking for as a Full-Stack developer role.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Helping Hand
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never say never!"{" "}
          </p>
          <footer className="blockquote-footer">Faseeullah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
