import "./App.css";

function App() {
  const skills = [
    "UI Designer",
    "Quality Assurance",
    "Documentation",
    "Java",
    "C#",
    "React",
    "HTML",
    "Database",
    "PHP",
  ];

  const projects = [
    {
      title: "Laravel Data Routing Frontend Integration",
      description:
        "A task management system developed using Laravel, React, and Inertia.",
      link: "https://github.com/itismeCHRIS/laravel-Data_Routing_Frontend-Integration..git",
    },
    {
      title: "Drugs and Medicine Inventory System",
      description:
        "An inventory management system designed to organize medicine records and inventory information.",
      link: "#",
    },
    {
      title: "Library Management System",
      description:
        "A system for managing library books, users, and borrowing records.",
      link: "https://github.com/jhnyz/Library-Management-System.git",
    },
    {
      title: "State and Router",
      description:
        "A React project demonstrating state management and page routing.",
      link: "https://github.com/itismeCHRIS/FrameWork.git",
    },
    {
      title: "CCS112 Project",
      description:
        "A school project created as part of my Computer Science coursework.",
      link: "https://github.com/itismeCHRIS/CCS112.git",
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing my skills and projects.",
      link: "https://github.com/itismeCHRIS/Portfolio.git",
    },
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Chris</span>
          </h1>

          <h2>Computer Science Student</h2>

          <p>
            I am a 3rd year Computer Science student interested in software
            development, UI design, quality assurance, and creating useful
            applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-circle">
            <img src="/profile.jpg" alt="Profile" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/profile2.jpg" alt="Profile" />
          </div>

          <div className="about-text">
            <h3>Computer Science 3rd Year Student</h3>

            <p>
              I am a Computer Science student currently in my third year. I
              enjoy learning different programming languages, developing
              applications, designing user interfaces, and documenting software
              projects.
            </p>

            <p>
              Throughout my studies, I have worked with Java, C#, PHP, React,
              HTML, databases, and other technologies. I am also interested in
              Quality Assurance and making applications easier and more
              enjoyable to use.
            </p>

            <div className="info">
              <p>
                <strong>Education:</strong> Computer Science
              </p>
              <p>
                <strong>Year Level:</strong> 3rd Year
              </p>
              <p>
                <strong>Focus:</strong> Software Development & UI/UX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="section-title">
          <p>WHAT I CAN DO</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{skill}</h3>

              <p>Experience and academic knowledge in {skill}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <div className="section-title">
          <p>MY RECENT WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="section-title">
          <p>GET IN TOUCH</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>

            <p>
              If you would like to discuss a project, school collaboration, or
              simply connect with me, feel free to contact me.
            </p>

            <div className="contact-item">
              <strong>Email</strong>
              <span>zaratechristopher774@gmail.com</span>
            </div>

            <div className="contact-item">
              <strong>Phone</strong>
              <span>+63 234556789</span>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <span>Philippines</span>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>MyPortfolio</h3>

        <p>© 2026 Chris. All Rights Reserved.</p>

        <div className="social-links">
          <a href="#" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            Facebook
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
