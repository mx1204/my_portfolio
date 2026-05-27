import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <h2 className="section-title">Contact Me</h2>
        <div className="section-underline"></div>
        <form
          className="contact-form"
          action="https://formspree.io/f/your_form_id"
          method="POST"
        >
        <label>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="_replyto" required />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form>
      <p className="note">
        Note: Replace <code>your_form_id</code> in the form action with your actual Formspree project ID to enable form submissions.
      </p>
      </div>
    </section>
  );
}
