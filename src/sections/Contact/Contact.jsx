import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
 
const [status, setStatus] = useState({
  loading: false,
  message: "",
  success: false,
});

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  setStatus({
    loading: true,
    message: "",
    success: false,
  });

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Unable to send your message.");
    }

    setStatus({
      loading: false,
      message: result.message,
      success: true,
    });

    form.reset();
  } catch (error) {
    setStatus({
      loading: false,
      message:
        error.message || "Unable to send your message. Please try again.",
      success: false,
    });
  }
}


  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-eyebrow">LET'S CONNECT</span>

          <h2>Get In Touch</h2>

          <p className="contact-intro">
            Have a project in mind or want to discuss a job opportunity?
            Feel free to reach out. I'll get back to you soon!
          </p>

          <div className="contact-details">
            <a
              href="mailto:reetarani.samal@gmail.com"
              className="contact-detail"
            >
              <FaEnvelope aria-hidden="true" />
              <span>reetarani.samal@gmail.com</span>
            </a>

            <div className="contact-detail">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Bangalore, India</span>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/reetarani-samal/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/reetarani"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/+919023232193"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Project Inquiry"
              required
            />
          </div>

          <div className="contact-field contact-message-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your message..."
              rows="3"
              required
            />
          </div>

          
            <button
            type="submit"
            className="contact-submit"
            disabled={status.loading}
            >
            <FaPaperPlane aria-hidden="true" />
            <span>
                {status.loading ? "Sending..." : "Send Message"}
            </span>
            </button>

            {status.message && (
            <p
                className={`contact-status ${
                status.success ? "contact-status-success" : "contact-status-error"
                }`}
                role="status"
            >
                {status.message}
            </p>
            )}

        </form>
      </div>
    </section>
  );
}

export default Contact;
