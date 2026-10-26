
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaChevronUp,
} from "react-icons/fa";

import "./Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-brand">
            <strong>Reetarani Samal</strong>
            <span>WordPress Expert | MERN Stack Developer</span>
          </a>

          <div className="footer-right">
            <nav className="footer-nav" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="footer-socials">
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

            <a
              href="#home"
              className="footer-back-top"
              aria-label="Back to top"
              title="Back to top"
            >
              <FaChevronUp />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Reetarani Samal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
