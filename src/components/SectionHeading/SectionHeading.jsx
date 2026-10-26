
import "./SectionHeading.css";

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={`section-heading ${
        centered ? "section-heading-centered" : ""
      }`}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          <span className="section-eyebrow-line" />
          {eyebrow}
        </span>
      )}

      <h2 className="section-title">{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
