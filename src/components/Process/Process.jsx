import "./Process.css";

function Process() {
  const processes = [
    "Design & Concept Development",
    "Engineering & Mold Development",
    "Legal & Regulatory Formalities",
    "Manufacturing & Filling"
  ];

  return (
    <section className="process-section">
      <div className="process-header">
        <span className="section-tag">End-to-End Service</span>
        <h2>A single partner for the entire journey.</h2>
      </div>
      <ul className="process-list">
        {processes.map((proc, i) => (
          <li key={i}>
            <span className="num">0{i + 1}</span>
            <h4>{proc}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Process;