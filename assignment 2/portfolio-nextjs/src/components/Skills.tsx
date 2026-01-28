'use client';

import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  experience: string;
  level: string;
  levelClass: string;
  progress: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', experience: '3+ years', level: 'Expert', levelClass: 'bg-neon', progress: 92, icon: 'bi-code-slash' },
      { name: 'JavaScript', experience: '4+ years', level: 'Expert', levelClass: 'bg-neon', progress: 94, icon: 'bi-braces' },
      { name: 'CSS & Sass', experience: '4+ years', level: 'Advanced', levelClass: 'bg-teal', progress: 82, icon: 'bi-paint-bucket' },
      { name: 'Bootstrap', experience: '3+ years', level: 'Advanced', levelClass: 'bg-teal', progress: 80, icon: 'bi-bootstrap' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', experience: '3+ years', level: 'Advanced', levelClass: 'bg-neon', progress: 82, icon: 'bi-server' },
      { name: 'Express & REST APIs', experience: '4+ years', level: 'Expert', levelClass: 'bg-neon', progress: 90, icon: 'bi-box-seam' },
      { name: 'Databases (MongoDB / Postgres)', experience: '3+ years', level: 'Intermediate', levelClass: 'bg-teal', progress: 68, icon: 'bi-database' },
      { name: 'Authentication & Security', experience: '2+ years', level: 'Intermediate', levelClass: 'bg-teal', progress: 65, icon: 'bi-shield-lock' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git & Source Control', experience: '4+ years', level: 'Expert', levelClass: 'bg-neon', progress: 92, icon: 'bi-git' },
      { name: 'Docker', experience: '2+ years', level: 'Advanced', levelClass: 'bg-teal', progress: 78, icon: 'bi-box-arrow-in-down' },
      { name: 'CI / CD', experience: '2+ years', level: 'Intermediate', levelClass: 'bg-teal', progress: 65, icon: 'bi-terminal' },
    ],
  },
];

export default function Skills() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const fill = progressBar.querySelector('.skills__progress-fill') as HTMLElement;
            const level = progressBar.getAttribute('data-level') || '0';

            setTimeout(() => {
              if (fill) {
                fill.style.width = level + '%';
              }
            }, 80);

            observerRef.current?.unobserve(progressBar);
          }
        });
      },
      { threshold: 0.15 }
    );

    const progressBars = document.querySelectorAll('.skills__progress');
    progressBars.forEach((bar) => observerRef.current?.observe(bar));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="skills__header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skills__card">
              <h5 className="skills__card-title">{category.title}</h5>
              <ul className="skills__list">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="skills__item">
                    <div className="skills__item-header">
                      <div className="skills__item-info">
                        <i className={`${skill.icon} skills__icon`}></i>
                        <div>
                          <div className="skills__name">{skill.name}</div>
                          <div className="skills__exp">{skill.experience}</div>
                        </div>
                      </div>
                      <span className={`badge skills__level ${skill.levelClass}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skills__progress" data-level={skill.progress}>
                      <div className="skills__progress-fill"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
