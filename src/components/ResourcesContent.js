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
    {
      title: "IBM SkillBuild ",
      description:
        "Girls who Code partnered with IBM to provide free access to SkillBuild, an online learning platform with courses in coding, data science, and more.",
      url: "https://skills.yourlearning.ibm.com/activity/PLAN-9F6D64A63C71",
    },
    {
      title: "Perplexity AI Pro",
      description:
        "AI-powered search engine with free 1-year Pro subscription for students. Get accurate answers and research assistance.",
      url: "https://plex.it/referrals/EE33W4JK",
    },
    {
      title: "Google Gemini",
      description:
        "Google's advanced AI assistant for coding help, research, writing, and creative problem-solving.",
      url: "https://gemini.google.com/",
    },
  ];

  const aiLinks = [
    {
      title: "ChatGPT",
      description:
        "OpenAI's conversational AI for code assistance, debugging, and learning programming concepts.",
      url: "https://chat.openai.com/",
    },
    {
      title: "GitHub Copilot",
      description:
        "AI-powered code completion tool that helps you write code faster and more efficiently.",
      url: "https://github.com/features/copilot",
    },
    {
      title: "Google AI for Everyone",
      description:
        "Free courses and resources to learn AI fundamentals, machine learning, and data science.",
      url: "https://ai.google/education/",
    },
    {
      title: "Coursera AI Courses",
      description:
        "University-level AI and machine learning courses from top institutions.",
      url: "https://www.coursera.org/browse/data-science/machine-learning",
    },
    {
      title: "Kaggle Learn",
      description:
        "Free micro-courses on machine learning, data science, and AI with hands-on practice.",
      url: "https://www.kaggle.com/learn",
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
    {
      title: "Abdul Bari",
      description:
        "In-depth explanations of computer science concepts, algorithms, and data structures.",
      url: "https://youtu.be/0IAPZzGSbME?si=FLmdEZWTgAphveMB",
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

      <h2 className="section-title">AI Resources</h2>
      <ul className="resource-list">
        {aiLinks.map((link, index) => (
          <li key={index} className="resource-item">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <span className="resource-title">{link.title}</span>
              <p className="resource-description">{link.description}</p>
            </a>
          </li>
        ))}
      </ul>

      <h2 className="section-title">GroupMe</h2>
      <ul className="resource-list">
        <li className="resource-item">
          <a target="_blank" rel="noreferrer" href="https://groupme.com/join_group/104179666/lhLuPhw2">
            <p className="resource-description">Join the <strong>Girls Who Code @ULM GroupMe</strong> to access exclusive resources, event updates, and connect with other members!</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ResourcesContent;