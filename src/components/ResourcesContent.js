import React from "react";
import "./ResourcesContentStyle.css";

const ResourcesContent = () => {
  const links = [
    {
      title: "W3Schools",
      description:
        "A beginner-friendly platform to learn coding languages like HTML, CSS, JavaScript, and more.",
      url: "https://www.w3schools.com/",
    },
    {
      title: "GeeksforGeeks",
      description:
        "Great platform for computer science concepts, coding practice, and interview prep.",
      url: "https://www.geeksforgeeks.org/",
    },
  ];

  const youtubeChannels = [
    {
      title: "Programming with Mosh",
      description:
        "Learn programming, software development, and best practices through clear tutorials.",
      url: "https://www.youtube.com/@programmingwithmosh",
    },
    {
      title: "freeCodeCamp",
      description:
        "Full courses on web development, Python, data science, and more—all for free.",
      url: "https://www.youtube.com/c/Freecodecamp",
    },
  ];

  return (
    <div className="resources-container">
      <h2 className="section-title">Helpful Links</h2>
      <ul className="resource-list">
        {links.map((link, index) => (
          <li key={index} className="resource-item">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <span className="resource-title">{link.title}</span>
              <p className="resource-description">{link.description}</p>
            </a>
          </li>
        ))}
      </ul>

      <h2 className="section-title">YouTube Channels</h2>
      <ul className="resource-list">
        {youtubeChannels.map((channel, index) => (
          <li key={index} className="resource-item">
            <a href={channel.url} target="_blank" rel="noopener noreferrer">
              <span className="resource-title">{channel.title}</span>
              <p className="resource-description">{channel.description}</p>
            </a>
          </li>
        ))}
      </ul>

      <h2 className="section-title">GroupMe</h2>
      <ul className="resource-list">
          <li className="resource-item">
            <a target="_blank">
              <p className="resource-description">Join the <strong>Girls Who Code @ULM GroupMe</strong> to access exclusive resources, event updates, and connect with other members!</p>
            </a>
          </li>
      </ul>
    </div>
  );
};

export default ResourcesContent;