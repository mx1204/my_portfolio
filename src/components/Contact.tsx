import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <h2 className="section-title">Contact Me</h2>
        <div className="section-underline"></div>
        <form
          className="contact-form"
          action="https://formspree.io/f/3011048628664926129"
          method="POST"
        >
        <label>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form>
      </div>
    </section>
  );
}
