export default function Projects() {
    const projects = [
      { name: "BizLocator", desc: "Web scraping app for business data" },
      { name: "CV Safety System", desc: "YOLOv8-based PPE & zone detection" },
      { name: "RTSP Multi-Stream Dashboard", desc: "Python-React app for monitoring 50+ cameras" },
    ];
  
    return (
      <section className="section">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  