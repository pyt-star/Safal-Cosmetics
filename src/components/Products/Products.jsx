import "./Products.css";

function Products() {
  const divisions = [
    { title: "FINE FRAGRANCES", subtitle: "Creator by nature", desc: "EDP, EDT, Cologne" },
    { title: "ATTARS", subtitle: "Traditional mastery", desc: "Deep oriental profiles" },
    { title: "PERSONAL CARE", subtitle: "Well-being naturally", desc: "Sanitizers, Aftershaves" },
    { title: "HOME & AMBIENCE", subtitle: "Stylist of spaces", desc: "Air fresheners, Sprays" }
  ];

  return (
    <section id="divisions" className="products-section">
      <div className="divisions-wrapper">
        {divisions.map((div, i) => (
          <div className="division-col" key={i}>
            <div className="col-overlay"></div>
            <div className="col-content">
              <span className="col-subtitle">{div.subtitle}</span>
              <h2>{div.title}</h2>
              <p>{div.desc}</p>
              <button className="btn-discover">Discover</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;