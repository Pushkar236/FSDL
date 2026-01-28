import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <Image
            src="/images/pfp.png"
            alt="About Photo"
            width={250}
            height={250}
            className="about-image"
          />

          <div className="about-text">
            <p>
              I&apos;m a creative developer with 5+ years of experience in building web and mobile applications.
              I love solving complex problems and creating intuitive user interfaces that people enjoy using.
            </p>
            <p>
              My journey in tech started with a passion for design and gradually evolved into full-stack development.
              I&apos;m proficient in modern JavaScript frameworks, responsive design, and agile methodologies.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring design trends, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
