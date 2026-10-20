import React, { useState, useEffect } from 'react';
import './VintageAuto.css';

// Main App Component
function App() {
  return (
    <div className="vintage-auto-app">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <RestorationProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

// Header Component with Navigation
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <h1 className="logo">Classic Restorations</h1>
          <div className="logo-badge">Est. 1978</div>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
            <li><a href="#process" onClick={() => setMobileMenuOpen(false)}>Our Process</a></li>
            <li><a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Hero Section with Parallax Effect
function Hero() {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div 
        className="hero-background"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      ></div>
      <div className="hero-content container">
        <h2 className="vintage-heading">Reviving Automotive History</h2>
        <p className="vintage-subheading">Meticulous craftsmanship for classic automobile restoration</p>
        <div className="hero-buttons">
          <a href="#gallery" className="btn btn-primary">View Our Work</a>
          <a href="#contact" className="btn btn-secondary">Get Estimate</a>
        </div>
      </div>
    </section>
  );
}

// Services Section with Icons
function Services() {
  const services = [
    {
      id: 1,
      icon: "🔧",
      title: "Mechanical Restoration",
      description: "Complete engine rebuilds, transmission work, and drivetrain restoration to factory specifications."
    },
    {
      id: 2,
      icon: "🎨",
      title: "Body & Paint",
      description: "Expert metalwork, rust repair, and period-correct paint application with authentic finishes."
    },
    {
      id: 3,
      icon: "⚡",
      title: "Electrical Systems",
      description: "Rewiring, gauge restoration, and lighting solutions that balance originality with reliability."
    },
    {
      id: 4,
      icon: "🛋️",
      title: "Interior Upholstery",
      description: "Hand-crafted leather, fabric, and carpet installations using traditional methods."
    },
    {
      id: 5,
      icon: "🔍",
      title: "Authentication & Research",
      description: "Historical documentation, parts sourcing, and authenticity verification for rare vehicles."
    },
    {
      id: 6,
      icon: "🏆",
      title: "Concours Preparation",
      description: "Show-ready detailing and preparation for competition at prestigious events."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="vintage-heading">Our Specialties</h2>
          <div className="divider">
            <span className="divider-icon">⚙️</span>
          </div>
          <p className="section-description">
            Expert restoration services for automobiles from the 1920s through the 1970s
          </p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery with Filterable Portfolio
function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
  const projects = [
    { id: 1, title: '1957 Chevrolet Bel Air', category: 'american', image: '/bel-air.jpeg', 
      description: 'Frame-off restoration with numbers-matching 283 V8' },
    { id: 2, title: '1965 Jaguar E-Type', category: 'european', image: '/jaguar.jpeg', 
      description: 'Concours-level restoration, 1st place at Greenwich' },
    { id: 3, title: '1932 Ford Deuce Coupe', category: 'american', image: '/deuce.jpeg', 
      description: 'Hot rod restoration with modern reliability upgrades' },
    { id: 4, title: '1970 Ferrari 365 GTB/4 Daytona', category: 'european', image: '/ferrari.jpeg', 
      description: 'Factory-correct Rosso Corsa paint with tan interior' },
    { id: 5, title: '1969 Toyota 2000GT', category: 'asian', image: '/toyota.jpeg', 
      description: 'Rare Japanese classic, fully restored to original specs' },
    { id: 6, title: '1956 Porsche 356 Speedster', category: 'european', image: '/porsche.jpeg', 
      description: 'Bare metal restoration with original toolkit' }
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setAnimateCard({ y: 100, opacity: 0 });
    
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="vintage-heading">Our Masterpieces</h2>
          <div className="divider">
            <span className="divider-icon">🏁</span>
          </div>
          <p className="section-description">
            Browse our portfolio of meticulously restored automotive classics
          </p>
        </div>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All Restorations
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'american' ? 'active' : ''}`}
            onClick={() => handleFilterClick('american')}
          >
            American Classics
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'european' ? 'active' : ''}`}
            onClick={() => handleFilterClick('european')}
          >
            European Sports
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'asian' ? 'active' : ''}`}
            onClick={() => handleFilterClick('asian')}
          >
            Asian Imports
          </button>
        </div>
        
        <div 
          className="projects-grid"
          style={{ 
            transform: `translateY(${animateCard.y}px)`,
            opacity: animateCard.opacity,
            transition: 'all 0.5s ease'
          }}
        >
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-img-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button className="btn btn-outline">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Restoration Process with Timeline
function RestorationProcess() {
  const steps = [
    {
      id: 1,
      title: "Consultation & Assessment",
      description: "In-depth evaluation of the vehicle's condition, documentation of originality, and development of a restoration plan."
    },
    {
      id: 2,
      title: "Disassembly & Documentation",
      description: "Careful deconstruction with comprehensive photo documentation and cataloging of all components."
    },
    {
      id: 3,
      title: "Metal Fabrication & Bodywork",
      description: "Rust remediation, panel replacement, and precision metalwork to restore the body to original specifications."
    },
    {
      id: 4,
      title: "Mechanical Restoration",
      description: "Complete rebuilding of engine, transmission, suspension, and all mechanical systems."
    },
    {
      id: 5,
      title: "Paint Preparation & Application",
      description: "Meticulous surface preparation, primer application, and authentic paint finishing using period-correct techniques."
    },
    {
      id: 6,
      title: "Interior & Trim Installation",
      description: "Handcrafted upholstery installation, dashboard restoration, and trim fitment to factory standards."
    },
    {
      id: 7,
      title: "Testing & Refinement",
      description: "Comprehensive mechanical testing, quality control inspection, and fine-tuning to ensure peak performance."
    }
  ];

  return (
    <section id="process" className="restoration-process">
      <div className="container">
        <div className="section-header">
          <h2 className="vintage-heading">Our Restoration Process</h2>
          <div className="divider">
            <span className="divider-icon">🔩</span>
          </div>
          <p className="section-description">
            A methodical approach to bringing automotive treasures back to life
          </p>
        </div>
        
        <div className="timeline">
          {steps.map((step, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={step.id}>
              <div className="timeline-content">
                <div className="timeline-number">{step.id}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Carousel
function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "James Mitchell",
      car: "1963 Corvette Split Window",
      text: "The attention to detail was extraordinary. My Corvette looks better than the day it rolled off the assembly line, and it drives like a dream.",
      image: "/testimonial1.jpg"
    },
    {
      id: 2,
      name: "Eleanor Winters",
      car: "1959 Mercedes-Benz 300SL",
      text: "Classic Restorations understood the historical significance of my 300SL. Their knowledge of rare European models is unmatched, and the restoration exceeded all expectations.",
      image: "/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Robert Chen",
      car: "1972 Datsun 240Z",
      text: "Their ability to source rare parts for my Japanese classic was impressive. The team respected the heritage while subtly incorporating modern reliability improvements.",
      image: "/testimonial3.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="vintage-heading">Client Testimonials</h2>
          <div className="divider">
            <span className="divider-icon">💬</span>
          </div>
          <p className="section-description">
            What our clients say about their restoration experience
          </p>
        </div>
        
        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
          
          <div className="testimonials-wrapper">
            {testimonials.map((testimonial, index) => (
              <div 
                className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
                key={testimonial.id}
                style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
              >
                <div className="testimonial-content">
                  <div className="quote-mark">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} className="author-img" />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-car">{testimonial.car}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next" onClick={nextSlide}>❯</button>
          
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formState.name) tempErrors.name = 'Name is required';
    if (!formState.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formState.message) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = validate();

    if (Object.keys(tempErrors).length === 0) {
      try {
        const res = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formState)
        });

        const result = await res.json();
        if (res.ok) {
          setSubmitted(true);
        } else {
          alert(result.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Submission error:', err);
        alert('An error occurred while submitting the form');
      }

      setFormState({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        message: ''
      });
      setErrors({});
    } else {
      setErrors(tempErrors);
    }
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="vintage-heading">Start Your Restoration Journey</h2>
          <div className="divider">
            <span className="divider-icon">📝</span>
          </div>
          <p className="section-description">
            Contact us to discuss your classic car restoration project
          </p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Our Workshop</h3>
              <p>1234 Vintage Lane<br />Motorville, CA 92345</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>(555) 123-4567<br />Monday-Friday: 8AM-6PM</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>info@classicrestorations.com<br />inquiries@classicrestorations.com</p>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">YouTube</a>
            </div>
          </div>
          
          <div className="contact-form-container">
            {submitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been received. We'll be in touch about your restoration project soon.</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formState.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formState.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="vehicle">Vehicle Information (Year, Make, Model)</label>
                  <input 
                    type="text" 
                    id="vehicle" 
                    name="vehicle" 
                    value={formState.vehicle}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Project</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  Request Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <h2>Classic Restorations</h2>
          <div className="footer-badge">Preserving Automotive Heritage</div>
        </div>
        
        <div className="footer-nav">
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#services">Mechanical Restoration</a></li>
              <li><a href="#services">Body & Paint</a></li>
              <li><a href="#services">Interior Upholstery</a></li>
              <li><a href="#services">Concours Preparation</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Restoration Guide</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Parts Catalog</a></li>
              <li><a href="#">Classic Car Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Classic Restorations. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;