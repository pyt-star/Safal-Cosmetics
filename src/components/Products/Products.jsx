import "./Products.css";
import productPerfumeImg from "../../assets/images/product_perfume.png";
import aboutImg from "../../assets/images/About.jpg";
import heroImg from "../../assets/images/hero.png";
import { 
  FaWineBottle, 
  FaSprayCan, 
  FaPumpSoap, 
  FaGift, 
  FaGem, 
  FaPrescriptionBottle, 
  FaSpa, 
  FaShieldAlt, 
  FaFeatherAlt,
  FaArrowRight
} from "react-icons/fa";

const productsList = [
  {
    id: 1,
    name: "All types of Alcoholic Fragrances",
    desc: "Custom formulated high-grade alcoholic perfume bases with long-lasting sillage.",
    image: productPerfumeImg,
    icon: FaWineBottle,
    badge: "Fragrance Base"
  },
  {
    id: 2,
    name: "Perfumes",
    desc: "Fine luxury perfumes crafted with international standards & signature notes.",
    image: productPerfumeImg,
    icon: FaGem,
    badge: "Fine Fragrance"
  },
  {
    id: 3,
    name: "Airfreshner",
    desc: "Long-lasting ambient air fresheners & room sprays for home and auto.",
    image: heroImg,
    icon: FaSprayCan,
    badge: "Aerosol & Ambient"
  },
  {
    id: 4,
    name: "Eau de Extracts",
    desc: "Concentrated perfume oil extracts boasting intense projection & longevity.",
    image: aboutImg,
    icon: FaWineBottle,
    badge: "High Concentration"
  },
  {
    id: 5,
    name: "Eau de Parfum",
    desc: "Classic 15-20% fragrance oil concentration EDP for premium brands.",
    image: productPerfumeImg,
    icon: FaGem,
    badge: "Eau De Parfum"
  },
  {
    id: 6,
    name: "Eau de Toilette",
    desc: "Fresh, everyday EDT formulations with balanced top and heart notes.",
    image: productPerfumeImg,
    icon: FaFeatherAlt,
    badge: "Eau De Toilette"
  },
  {
    id: 7,
    name: "Eau de Cologne",
    desc: "Light, invigorating EDC scents with crisp citrus and herbal facets.",
    image: heroImg,
    icon: FaFeatherAlt,
    badge: "Eau De Cologne"
  },
  {
    id: 8,
    name: "Eau de Fraiche",
    desc: "Ultra-light hydration fragrance mists for daily refreshing wear.",
    image: productPerfumeImg,
    icon: FaSpa,
    badge: "Fragrance Mist"
  },
  {
    id: 9,
    name: "After Shave Lotion",
    desc: "Soothe and condition post-shave with premium fragrance-infused lotions.",
    image: aboutImg,
    icon: FaPrescriptionBottle,
    badge: "Men's Care"
  },
  {
    id: 10,
    name: "Sanitizers (Gel based/Spray Form)",
    desc: "70%+ alcohol gel & spray sanitizers with soothing moisturizers & scents.",
    image: productPerfumeImg,
    icon: FaPumpSoap,
    badge: "Hygiene & Care"
  },
  {
    id: 11,
    name: "Attars",
    desc: "Traditional non-alcoholic pure oil attars & oriental botanical blends.",
    image: productPerfumeImg,
    icon: FaSpa,
    badge: "Pure Attar"
  },
  {
    id: 12,
    name: "Disinfectant Sprays",
    desc: "Effective multi-surface disinfectant aerosol and liquid formulations.",
    image: heroImg,
    icon: FaShieldAlt,
    badge: "Disinfectant"
  },
  {
    id: 13,
    name: "Gift Sets",
    desc: "Custom curated multi-product luxury gift boxes and packaging sets.",
    image: productPerfumeImg,
    icon: FaGift,
    badge: "Luxury Packaging"
  }
];

function Products({ onOpenQuote }) {
  return (
    <section className="products-section" id="products">
      <div className="products-container">
        
        <div className="products-header">
          <span className="section-tag">PRODUCTS WE MANUFACTURE</span>
          <h2>Products Made at our Premise</h2>
          <p>
            End-to-end manufacturing of premium fragrances, personal care items, 
            and aerosol formulations produced under international quality standards.
          </p>
        </div>

        <div className="products-grid">
          {productsList.map((product) => {
            const IconComponent = product.icon;
            return (
              <div key={product.id} className="product-card">
                
                <div className="product-card-top">
                  {/* Small Circle Icon Image */}
                  <div className="circle-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-circle-img" 
                    />
                    <div className="circle-icon-badge">
                      <IconComponent />
                    </div>
                  </div>
                  <span className="product-badge">{product.badge}</span>
                </div>

                <div className="product-card-body">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                </div>

                <button 
                  className="product-quote-btn" 
                  onClick={onOpenQuote}
                  aria-label={`Get quote for ${product.name}`}
                >
                  Request Quote <FaArrowRight className="btn-icon" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Products;
