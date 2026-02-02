function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Skills</h2>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skill-box">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>C</li>
            <li>C++</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-box">
          <h3>Tools & Techniques</h3>
          <ul>
            <li>MySQL</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Bash</li>
            <li>Postman</li>
            <li>AutoCAD</li>
          </ul>
        </div>

        {/* Concepts */}
        <div className="skill-box">
          <h3>Concepts</h3>
          <ul>
            <li>Machine Learning</li>
            <li>Image Processing</li>
            <li>Model Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;