import "./Stats.css";

function Stats() {
  const statsData = [
    { num: "30", text: "Days to Market" },
    { num: "20+", text: "Years Experience" },
    { num: "7", text: "Countries Supplied" },
    { num: "4", text: "Continents Reached" }
  ];

  return (
    <section id="power" className="stats-section">
      <div className="stats-header">
        <h2>The power of an independent manufacturing partner</h2>
        <p>Safal Cosmetics' vision is long-term, forging lasting relationships. We provide stable benchmarks and rely on responsible values.</p>
      </div>
      <div className="stats-grid">
        {statsData.map((stat, i) => (
          <div className="stat-item" key={i}>
            <h3>{stat.num}</h3>
            <span>{stat.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;