import './Contact.css';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:mingxuanlee111@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <h2 className="section-title">Contact Me</h2>
        <div className="section-underline"></div>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
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
