import "./QuoteModal.css";

function QuoteModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <h2>Contact Safal Cosmetics</h2>
          <p>Share your product brief and let's build it together.</p>
        </div>

        <form className="robertet-form">
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Brand / Company" required />
          <input type="email" placeholder="Email Address" required />
          
          <select required>
            <option value="" disabled selected>Category of Interest</option>
            <option value="perfume">Fine Fragrance</option>
            <option value="attar">Attars</option>
            <option value="personal">Personal Care & Sanitizers</option>
          </select>

          <textarea rows="4" placeholder="Describe your vision..." required></textarea>
          
          <button type="submit" className="btn-submit">Send Inquiry</button>
        </form>
      </div>
    </div>
  );
}

export default QuoteModal;