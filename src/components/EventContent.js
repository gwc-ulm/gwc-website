import React from "react";
import "./EventContentStyle.css";

import past0 from "../assets/hero pics/past0.jpg";
import past2 from "../assets/hero pics/past2.jpg";
import past1 from "../assets/hero pics/past1.JPEG";
import past3 from "../assets/hero pics/past3.JPEG";
import past4 from "../assets/hero pics/past4.JPEG";
import past5 from "../assets/hero pics/past5.JPEG";
import past6 from "../assets/hero pics/past6.JPEG";
import past7 from "../assets/hero pics/past7.jpeg";

const EventContent = () => {
  // You can later fetch this from an API or database
  const upcomingEvents = [
    {
      title: "Prototyping",
      description:
        "Bring your creativity to life at our Prototyping Event! 💡 Share a detailed idea that could make a real impact in the community—no working model needed. Open to all majors!"
    }
  ];

  const pastEvents = [
    {
      title: "Introduction to the New Chapter",
      description:
        "Our very first Girls Who Code chapter meeting brought together students of all coding levels to kick off an exciting journey! Members got the chance to meet the board, connect with peers, and share ideas for future events.",
      image: past0
    },
    {
      title: "Chai, Cards, and Connections Night",
      description:
        "An evening filled with laughter, board games, and warm cups of masala chai! Members bonded over fun activities while strengthening connections within the Girls Who Code community.",
      image: past1
    },
    {
      title: "Fundamentals of Web Design Workshop",
      description:
        "In collaboration with the Girl Scouts of Louisiana – Pines to the Gulf, we hosted an engaging workshop on web design fundamentals. The kids impressed us with their creativity, curiosity, and eagerness to learn!",
      image: past2
    },
    {
      title: "Boost Your Resume with AI",
      description:
        "A dynamic session where members learned to enhance their resumes with AI tools. The event featured two inspiring speakers who shared their journeys in computer science and how AI has shaped their careers.",
      image: past3
    },
    {
      title: "Resume Review",
      description:
        "In partnership with ULM’s Career Development Center, members received expert feedback to polish their resumes for internships, jobs, and scholarships—helping them stand out with confidence.",
      image: past4
    },
    {
      title: "Master in GIT",
      description:
        "A hands-on session introducing GitHub and version control basics. Members learned how to collaborate on projects effectively and heard insights from Ashamsa Adhikari, a recent graduate now working as a software engineer at DXC Technology.",
      image: past5
    },
    {
      title: "High School Workshop",
      description:
        "An inspiring session with 25+ bright girls at Martin Luther King Jr. Junior High, where members introduced the fundamentals of web design. From brainstorming ideas to writing their first code, the energy and creativity were truly unmatched.",
      image: past6
    },
    {
      title: "Kickoff / Interest Meeting",
      description:
        "We launched our semester with an engaging kickoff session where students learned about Girls Who Code at ULM, connected with peers, and explored opportunities to get involved. The event set the tone for building a supportive community and inspiring more women in tech to join our mission.",
        image: past7
    }
  ];

  return (
    <div className="events-container">
      <h2 className="section-title">Upcoming Events</h2>
      <div className="cards-container">
        {upcomingEvents.map((event, index) => (
          <div className="event-card upcoming" key={index}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Past Events</h2>
      <div className="cards-container">
        {pastEvents.map((event, index) => (
          <div className="event-card past" key={index}>
            <img src={event.image} alt={event.title} />
            <div className="card-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventContent;