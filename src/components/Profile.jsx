import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg";

function Profile() {
  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={profilePic} alt="Profile" className="profile-photo" />
        <h2>Jaswanth Damarla</h2>
        <p className="designation">
          Computer Science Student | Aspiring AI/ML Engineer
        </p>
      </div>

      {/* Career Objective */}
      <section className="profile-section">
        <h3>Career Objective</h3>
        <p>
          Dedicated Computer Science student with a strong interest in AI/ML
          engineering, currently working on advanced machine learning challenges
          on platforms like <strong>Numerai</strong> and contributing to
          open-source projects such as <strong>Sugar Labs</strong> through
          <strong> Google Summer of Code (GSoC)</strong> initiatives.
          <br /><br />
          Long-term goal is to become a proficient AI/ML engineer and work in
          impactful technology domains. Actively preparing for <strong>GATE</strong> to
          pursue higher studies and research opportunities at globally reputed
          institutes like <strong>NUS</strong> or <strong>NTU</strong>.
        </p>
      </section>

      {/* Projects */}
      <section className="profile-section">
        <h3>Projects</h3>

        <div className="project">
          <h4>Character Website – Stranger Things</h4>
          <p className="project-link">GitHub Link</p>
          <ul>
            <li>
              Developed a beginner-friendly website using HTML, CSS, and
              JavaScript showcasing characters from the Stranger Things series.
            </li>
            <li>
              Integrated a YouTube trailer to enhance user engagement with
              interactive media.
            </li>
            <li>
              Focused on visual appeal and accessibility for users with basic
              web development knowledge.
            </li>
          </ul>
        </div>

        <div className="project">
          <h4>Multi-Tenant SaaS Dashboard</h4>
          <p className="project-link">GitHub Link</p>
          <ul>
            <li>
              Designed and developed a multi-tenant SaaS dashboard with
              role-based access and modular UI components.
            </li>
            <li>
              Implemented reusable React components and routing for scalable
              navigation.
            </li>
            <li>
              Focused on clean UI, responsiveness, and maintainable architecture.
            </li>
          </ul>
        </div>

        <div className="project">
          <h4>Open Source Contributions – Sugar Labs</h4>
          <p className="project-link">GitHub Link</p>
          <ul>
            <li>
              Actively contributed to Sugar Labs, an open-source organization
              with over 3M users worldwide.
            </li>
            <li>
              Fixed UI misalignment issues and resolved bugs to improve user
              experience.
            </li>
            <li>
              Ensured smooth functionality and consistency across platforms.
            </li>
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="profile-section">
        <h3>Experience</h3>

        <div className="experience">
          <h4>Machine Learning Workshop Participant</h4>
          <p className="experience-meta">
            IIT Bombay, Mumbai | Dec 2023
          </p>
          <ul>
            <li>
              Worked on hands-on image classification using EfficientNet and
              ConvNeXt architectures.
            </li>
            <li>
              Improved model accuracy by approximately 15% through tuning and
              experimentation.
            </li>
            <li>
              Reduced inference time by 10% using optimization techniques.
            </li>
            <li>
              Solved real-world image processing and performance optimization
              problems.
            </li>
          </ul>
        </div>
      </section>

      {/* Navigation Button */}
      <div className="profile-actions">
        <Link to="/dashboard">
          <button className="action-btn">Go to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;