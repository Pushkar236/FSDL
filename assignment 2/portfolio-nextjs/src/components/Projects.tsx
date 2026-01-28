'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  category: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  metrics?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    category: 'webapps',
    badge: 'Web Apps',
    title: 'Project One',
    description: 'A short, one-line description of project one used as placeholder text for layout.',
    tags: ['React', 'Firebase', 'Sass'],
    image: 'https://via.placeholder.com/600x350?text=Project+1',
  },
  {
    id: 2,
    category: 'ui',
    badge: 'UI Components',
    title: 'Component Library',
    description: 'A small UI component system built for reusability and accessibility.',
    tags: ['Vanilla JS', 'Web Components', 'Storybook'],
    image: 'https://via.placeholder.com/600x350?text=Project+2',
  },
  {
    id: 3,
    category: 'fullstack',
    badge: 'Full Stack',
    title: 'Analytics Platform',
    description: 'A dashboard for interactive analytics with real-time updates.',
    tags: ['Node.js', 'React', 'Postgres'],
    image: 'https://via.placeholder.com/600x350?text=Project+3',
  },
  {
    id: 4,
    category: 'webapps',
    badge: 'Web Apps',
    title: 'E-Commerce Site',
    description: 'Sample e-commerce storefront with cart and checkout flow.',
    tags: ['React', 'Stripe', 'MongoDB'],
    image: 'https://via.placeholder.com/600x350?text=Project+4',
    metrics: '2k+ sales · 5k+ visits',
  },
  {
    id: 5,
    category: 'ui',
    badge: 'UI Components',
    title: 'Design System',
    description: 'Design tokens and components with clear documentation and examples.',
    tags: ['Figma', 'CSS'],
    image: 'https://via.placeholder.com/600x350?text=Project+5',
    metrics: 'Public · 1k+ stars',
  },
  {
    id: 6,
    category: 'fullstack',
    badge: 'Full Stack',
    title: 'Collaboration App',
    description: 'A realtime collaboration tool with presence and file sharing.',
    tags: ['Socket.io', 'Express'],
    image: 'https://via.placeholder.com/600x350?text=Project+6',
    metrics: 'Beta · 200+ teams',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
    updateCarouselPosition(0);
  };

  const updateCarouselPosition = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector('.fproj-card') as HTMLElement;
      if (card) {
        const gap = 24;
        const cardWidth = card.offsetWidth + gap;
        carouselRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
      }
    }
  };

  const moveCarousel = (direction: number) => {
    const perView = window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const maxIndex = Math.max(0, filteredProjects.length - perView);
    const newIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
    setCurrentIndex(newIndex);
    updateCarouselPosition(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      moveCarousel(1);
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      moveCarousel(-1);
    }
  };

  // Update carousel on window resize
  useEffect(() => {
    const handleResize = () => {
      updateCarouselPosition(currentIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="filters-wrapper">
          <button
            className={`fproj-filter ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
            aria-pressed={activeFilter === 'all'}
          >
            <span className="fproj-pill-text">All</span>
          </button>
          <button
            className={`fproj-filter ${activeFilter === 'webapps' ? 'active' : ''}`}
            onClick={() => handleFilterChange('webapps')}
            aria-pressed={activeFilter === 'webapps'}
          >
            <span className="fproj-pill-text">Web Apps</span>
          </button>
          <button
            className={`fproj-filter ${activeFilter === 'ui' ? 'active' : ''}`}
            onClick={() => handleFilterChange('ui')}
            aria-pressed={activeFilter === 'ui'}
          >
            <span className="fproj-pill-text">UI Components</span>
          </button>
          <button
            className={`fproj-filter ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => handleFilterChange('fullstack')}
            aria-pressed={activeFilter === 'fullstack'}
          >
            <span className="fproj-pill-text">Full Stack</span>
          </button>
        </div>

        <div className="featured__carousel-wrapper">
          <button
            className="fproj-arrow left"
            onClick={() => moveCarousel(-1)}
            aria-label="Previous"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <div
            ref={carouselRef}
            className="featured__carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {filteredProjects.map((project) => (
              <article key={project.id} className="fproj-card">
                <div className="fproj-badge">{project.badge}</div>
                <div className="fproj-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={350}
                    unoptimized
                  />
                  <div className="fproj-image-actions">
                    <a href="#" className="fproj-action" title="Live demo">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                    <a href="#" className="fproj-action" title="Source code">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
                <div className="fproj-body">
                  <h5 className="fproj-title">{project.title}</h5>
                  <p className="fproj-desc">{project.description}</p>
                  <div className="fproj-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag small">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.metrics && (
                    <div className="fproj-metrics" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                      {project.metrics}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <button
            className="fproj-arrow right"
            onClick={() => moveCarousel(1)}
            aria-label="Next"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="fproj-dots">
          {Array.from({ length: Math.ceil(filteredProjects.length / 3) }).map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
