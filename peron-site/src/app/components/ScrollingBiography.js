'use client';

import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import SplitType from 'split-type';
import styles from './ScrollingBiography.module.css';

// Import individual event components
import BirthEvent from './events/BirthEvent';
import MilitaryEvent from './events/MilitaryEvent';
import RevolutionEvent from './events/RevolutionEvent';
import EvaMeetingEvent from './events/EvaMeetingEvent';
import LoyaltyDayEvent from './events/LoyaltyDayEvent';
import MarriageEvent from './events/MarriageEvent';
import FirstPresidencyEvent from './events/FirstPresidencyEvent';
import WomensSuffrageEvent from './events/WomensSuffrageEvent';
import EvaResignationEvent from './events/EvaResignationEvent';
import EvaDeathEvent from './events/EvaDeathEvent';
import SecondPresidencyEvent from './events/SecondPresidencyEvent';
import CoupEvent from './events/CoupEvent';
import IsabelMarriageEvent from './events/IsabelMarriageEvent';
import ExileEvent from './events/ExileEvent';
import ReturnEvent from './events/ReturnEvent';
import ThirdPresidencyEvent from './events/ThirdPresidencyEvent';
import DeathEvent from './events/DeathEvent';
// Import other event components as you create them

// Import event data for the timeline
import { biographyEvents } from './events/EventData';

// Timeline indicator component as a list of visited events
const TimelineIndicator = ({ currentSection, visitedSections, navigateToSection, isMobile }) => {
  return (
    <div className={styles.timelineContainer}>
      <ul className={styles.timelineList}>
        {biographyEvents.map((event, index) => {
          const isVisited = visitedSections.includes(index + 1); // +1 because index 0 is hero
          const isCurrent = index + 1 === currentSection;
          
          // On mobile, only show current and adjacent events to save space
          if (isMobile && !isCurrent && index + 1 !== currentSection - 1 && index + 1 !== currentSection + 1 && index !== 0) {
            return null;
          }
          
          // Only show events that have been visited or the first one
          if (!isVisited && index !== 0) return null;
          
          return (
            <motion.li 
              key={event.id}
              className={`${styles.timelineItem} ${styles[event.category]} ${isCurrent ? styles.current : ''}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button 
                className={styles.timelineButton}
                onClick={() => navigateToSection(index + 1)}
                aria-label={`Ir a ${event.year}: ${event.title}`}
                aria-current={isCurrent ? 'step' : undefined}
              >
                <span className={`${styles.timelineYear} ${styles.garamondFont}`}>
                  {event.year}
                  {event.day && (
                    <span className={`${styles.timelineDay} ${styles.garamondFont}`}>{event.day}</span>
                  )}
                </span>
                <span className={`${styles.timelineEventTitle} ${styles.garamondFont}`}>
                  {isMobile ? (isCurrent ? event.title : '') : event.title}
                </span>
              </button>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

// Hero section component
const HeroSection = ({ isActive, navigateToSection, isMobile }) => {
  const yearTextRef = useRef(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (isActive && yearTextRef.current) {
      // Create the split type instance
      const yearText = new SplitType(yearTextRef.current, {
        types: 'chars',
        tagName: 'span'
      });
      
      // Animate each character
      const chars = yearText.chars;
      if (chars) {
        chars.forEach((char, index) => {
          char.style.display = 'inline-block';
          char.style.opacity = '0';
          char.style.transform = 'translateY(20px)';
          char.style.transition = `opacity 0.2s ease, transform 0.2s ease`;
          char.style.transitionDelay = `${0.3 + index * 0.05}s`;
          
          setTimeout(() => {
            char.style.opacity = '1';
            char.style.transform = 'translateY(0)';
          }, 100);
        });
      }
    }
  }, [isActive]);
  
  // Set video current time to 4 seconds when it loads
  useEffect(() => {
    if (videoRef.current) {
      // Function to set the current time
      const setVideoTime = () => {
        videoRef.current.currentTime = 4;
      };
      
      // Set current time when video metadata is loaded
      videoRef.current.addEventListener('loadedmetadata', setVideoTime);
      
      // Also try to set it immediately in case the video is already loaded
      if (videoRef.current.readyState >= 2) {
        setVideoTime();
      }
      
      // Cleanup
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', setVideoTime);
        }
      };
    }
  }, []);

  return (
    <motion.div 
      className={styles.heroSection}
      initial={false}
      animate={{ 
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : -50,
        display: isActive ? 'flex' : 'none'
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Video Background */}
      <div className={styles.videoBackground}>
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/videoinicial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}></div>
      </div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${styles.heroTitle} ${styles.garamondTitle}`}
      >
        Juan Domingo Perón
      </motion.h1>
      
      <motion.h2 
        ref={yearTextRef}
        className={`${styles.heroSubtitle} ${styles.garamondTitle} ${styles.typingAnimation}`}
      >
        1895 - 1974
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className={`${styles.heroText} ${styles.garamondText}`}
      >
        Explore la vida y legado de uno de los líderes políticos más influyentes de la historia argentina
      </motion.p>
      
      {isMobile ? (
        <div className={`${styles.swipeIndicator} ${styles.swipeUp}`} aria-hidden="true" />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={styles.scrollIndicator}
          onClick={() => navigateToSection(1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              navigateToSection(1);
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Desplácese para explorar"
        >
          <span>Desplácese para explorar</span>
          <div className={styles.scrollArrow} />
        </motion.div>
      )}
    </motion.div>
  );
};

// Event wrapper component to handle scroll reset
const EventWrapper = React.memo(({ Component, isActive, isMobile }) => {
  const contentRef = useRef(null);
  
  // Reset scroll position when component becomes active
  useEffect(() => {
    if (isActive && contentRef.current) {
      // Immediate scroll reset
      contentRef.current.scrollTop = 0;
    }
  }, [isActive]);
  
  return <Component isActive={isActive} isMobile={isMobile} contentRef={contentRef} />;
});

// Main ScrollingBiography component
const ScrollingBiography = () => {
  // State for current section and visited sections
  const [currentSection, setCurrentSection] = useState(0);
  const [visitedSections, setVisitedSections] = useState([0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Container ref for scroll tracking
  const containerRef = useRef(null);
  
  // Calculate scroll progress based on current section
  useEffect(() => {
    const totalSections = biographyEvents.length + 1; // +1 for hero section
    const progress = currentSection / (totalSections - 1);
    
    console.log('Section:', currentSection, 'Progress:', progress.toFixed(2));
  }, [currentSection]);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Handle wheel events to control section navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (isTransitioning) return;
      
      // Get the current active event content element
      const activeEventContent = document.querySelector(`.${styles.eventSection}[style*="display: flex"] .${styles.eventContent}`);
      
      if (activeEventContent) {
        const { scrollTop, scrollHeight, clientHeight } = activeEventContent;
        const isScrollable = scrollHeight > clientHeight;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        
        // If content is scrollable and we're not at the edge (based on scroll direction)
        if (isScrollable) {
          // Scrolling down and not at bottom yet - let the default scroll happen
          if (e.deltaY > 0 && !isAtBottom) {
            return;
          }
          
          // Scrolling up and not at top yet - let the default scroll happen
          if (e.deltaY < 0 && !isAtTop) {
            return;
          }
        }
      }
      
      // Prevent default scroll behavior
      e.preventDefault();
      
      // Determine scroll direction
      const direction = e.deltaY > 0 ? 1 : -1;
      
      // Calculate next section index
      const nextSection = Math.max(0, Math.min(currentSection + direction, biographyEvents.length));
      
      // Only proceed if we're moving to a different section
      if (nextSection !== currentSection) {
        setIsTransitioning(true);
        setCurrentSection(nextSection);
        
        // Update visited sections
        setVisitedSections(prev => {
          if (!prev.includes(nextSection)) {
            return [...prev, nextSection];
          }
          return prev;
        });
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, isTransitioning, biographyEvents.length]);
  
  // Handle touch events for mobile
  useEffect(() => {
    let touchStartY = 0;
    let activeEventContent = null;
    let isScrolling = false;
    let initialScrollTop = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      
      // Get the current active event content element
      activeEventContent = document.querySelector(`.${styles.eventSection}[style*="display: flex"] .${styles.eventContent}`);
      
      if (activeEventContent) {
        initialScrollTop = activeEventContent.scrollTop;
        const { scrollHeight, clientHeight } = activeEventContent;
        isScrolling = scrollHeight > clientHeight;
      }
    };
    
    const handleTouchMove = (e) => {
      if (isTransitioning) return;
      
      // If we have scrollable content, let the browser handle the scroll
      if (isScrolling && activeEventContent) {
        const { scrollTop, scrollHeight, clientHeight } = activeEventContent;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        const touchY = e.touches[0].clientY;
        const movingUp = touchY > touchStartY;
        const movingDown = touchY < touchStartY;
        
        // If we're at the top and trying to scroll up, or at the bottom and trying to scroll down,
        // prevent default to avoid browser overscroll behavior
        if ((isAtTop && movingUp) || (isAtBottom && movingDown)) {
          e.preventDefault();
        }
      }
    };
    
    const handleTouchEnd = (e) => {
      if (isTransitioning) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      // Determine if it was a significant swipe (more than 50px)
      if (Math.abs(diff) < 50) return;
      
      // If we have scrollable content, check if we should navigate or let the content scroll
      if (isScrolling && activeEventContent) {
        const { scrollTop, scrollHeight, clientHeight } = activeEventContent;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        const scrolled = scrollTop !== initialScrollTop;
        
        // If content was scrolled, don't navigate
        if (scrolled) return;
        
        // If we're not at the edges, don't navigate
        if (diff > 0 && !isAtBottom) return; // Swiping down but not at bottom
        if (diff < 0 && !isAtTop) return;  // Swiping up but not at top
      }
      
      // Determine direction (positive = down, negative = up)
      const direction = diff > 0 ? 1 : -1;
      
      // Calculate next section index
      const nextSection = Math.max(0, Math.min(currentSection + direction, biographyEvents.length));
      
      // Only proceed if we're moving to a different section
      if (nextSection !== currentSection) {
        setIsTransitioning(true);
        setCurrentSection(nextSection);
        
        // Update visited sections
        setVisitedSections(prev => {
          if (!prev.includes(nextSection)) {
            return [...prev, nextSection];
          }
          return prev;
        });
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }
    };
    
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isTransitioning]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning) return;
      
      // Get the current active event content element
      const activeEventContent = document.querySelector(`.${styles.eventSection}[style*="display: flex"] .${styles.eventContent}`);
      
      if (activeEventContent) {
        const { scrollTop, scrollHeight, clientHeight } = activeEventContent;
        const isScrollable = scrollHeight > clientHeight;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        
        // If content is scrollable, handle scrolling within the content first
        if (isScrollable) {
          // If scrolling down with arrow down and not at bottom yet, let the default scroll happen
          if ((e.key === 'ArrowDown' || e.key === 'Space') && !isAtBottom) {
            // Scroll the content down by a small amount
            activeEventContent.scrollBy({ top: 50, behavior: 'smooth' });
            return;
          }
          
          // If scrolling up with arrow up and not at top yet, let the default scroll happen
          if (e.key === 'ArrowUp' && !isAtTop) {
            // Scroll the content up by a small amount
            activeEventContent.scrollBy({ top: -50, behavior: 'smooth' });
            return;
          }
        }
      }
      
      // Handle section navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'Space') {
        const nextSection = Math.min(currentSection + 1, biographyEvents.length);
        if (nextSection !== currentSection) {
          setIsTransitioning(true);
          setCurrentSection(nextSection);
          
          // Update visited sections
          setVisitedSections(prev => {
            if (!prev.includes(nextSection)) {
              return [...prev, nextSection];
            }
            return prev;
          });
          
          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        const nextSection = Math.max(0, currentSection - 1);
        if (nextSection !== currentSection) {
          setIsTransitioning(true);
          setCurrentSection(nextSection);
          
          // Update visited sections
          setVisitedSections(prev => {
            if (!prev.includes(nextSection)) {
              return [...prev, nextSection];
            }
            return prev;
          });
          
          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isTransitioning]);
  
  // Function to navigate to a specific section
  const navigateToSection = useCallback((index) => {
    if (isTransitioning || index === currentSection) return;
    
    setIsTransitioning(true);
    setCurrentSection(index);
    
    // Update visited sections
    setVisitedSections(prev => {
      if (!prev.includes(index)) {
        return [...prev, index];
      }
      return prev;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [currentSection, isTransitioning, setCurrentSection, setIsTransitioning, setVisitedSections]);
  
  // Function to render the appropriate event component based on the current section
  const renderEventComponent = (sectionIndex) => {
    // If it's the hero section, return null
    if (sectionIndex === 0) return null;
    
    // Adjust index to match event array (subtract 1 because index 0 is hero)
    const eventIndex = sectionIndex - 1;
    
    // Get the event ID
    const eventId = biographyEvents[eventIndex]?.id;
    
    // Return the appropriate component based on the event ID
    switch (eventId) {
      case 'birth':
        return <EventWrapper Component={BirthEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'military':
        return <EventWrapper Component={MilitaryEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'revolution':
        return <EventWrapper Component={RevolutionEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'eva-meeting':
        return <EventWrapper Component={EvaMeetingEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'loyalty-day':
        return <EventWrapper Component={LoyaltyDayEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'marriage':
        return <EventWrapper Component={MarriageEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'first-presidency':
        return <EventWrapper Component={FirstPresidencyEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'womens-vote':
        return <EventWrapper Component={WomensSuffrageEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'eva-resignation':
        return <EventWrapper Component={EvaResignationEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'eva-death':
        return <EventWrapper Component={EvaDeathEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'second-presidency':
        return <EventWrapper Component={SecondPresidencyEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'coup':
        return <EventWrapper Component={CoupEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'isabel-marriage':
        return <EventWrapper Component={IsabelMarriageEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'exile':
        return <EventWrapper Component={ExileEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'return':
        return <EventWrapper Component={ReturnEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'third-presidency':
        return <EventWrapper Component={ThirdPresidencyEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      case 'death':
        return <EventWrapper Component={DeathEvent} isActive={currentSection === sectionIndex} isMobile={isMobile} />;
      default:
        return null;
    }
  };
  
  // Year Badge component with typing animation
  const YearBadgeWithTyping = ({ year, day, isActive }) => {
    const yearRef = useRef(null);
    const dayRef = useRef(null);
    
    useEffect(() => {
      if (isActive && yearRef.current) {
        // Create the split type instance for year
        const yearText = new SplitType(yearRef.current, {
          types: 'chars',
          tagName: 'span'
        });
        
        // Animate each character of the year
        const yearChars = yearText.chars;
        if (yearChars) {
          yearChars.forEach((char, index) => {
            char.style.display = 'inline-block';
            char.style.opacity = '0';
            char.style.transform = 'translateY(10px)';
            char.style.transition = `opacity 0.15s ease, transform 0.15s ease`;
            char.style.transitionDelay = `${0.2 + index * 0.03}s`;
            
            setTimeout(() => {
              char.style.opacity = '1';
              char.style.transform = 'translateY(0)';
            }, 50);
          });
        }
        
        // If there's a day, animate it too
        if (day && dayRef.current) {
          // Create the split type instance for day
          const dayText = new SplitType(dayRef.current, {
            types: 'chars',
            tagName: 'span'
          });
          
          // Animate each character of the day
          const dayChars = dayText.chars;
          if (dayChars) {
            dayChars.forEach((char, index) => {
              char.style.display = 'inline-block';
              char.style.opacity = '0';
              char.style.transform = 'translateY(5px)';
              char.style.transition = `opacity 0.15s ease, transform 0.15s ease`;
              char.style.transitionDelay = `${0.4 + index * 0.02}s`;
              
              setTimeout(() => {
                char.style.opacity = '1';
                char.style.transform = 'translateY(0)';
              }, 100);
            });
          }
        }
      }
    }, [isActive, day]);
    
    return (
      <motion.div 
        className={styles.yearBadge}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isActive ? 1 : 0, 
          scale: isActive ? 1 : 0.8 
        }}
        transition={{ 
          duration: 0.5, 
          delay: 0.2
        }}
      >
        <div className={styles.typingAnimation}>
          <span ref={yearRef}>{year}</span>
          {day && (
            <span ref={dayRef} className={styles.timelineDay}>{day}</span>
          )}
        </div>
      </motion.div>
    );
  };
  
  // Helper function to get image URL for an event
  const getEventImageUrl = (eventId) => {
    // Map of event IDs to image URLs from the peronLifeEvents array
    const eventImageMap = {
      'birth': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Juan_Domingo_Per%C3%B3n.jpg/220px-Juan_Domingo_Per%C3%B3n.jpg',
      'military': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Juan_Domingo_Per%C3%B3n.jpg/220px-Juan_Domingo_Per%C3%B3n.jpg',
      'revolution': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Edelmiro_Farrell_and_Juan_Domingo_Per%C3%B3n.jpg',
      'eva-meeting': 'https://www.thoughtco.com/thmb/XLEIr9ju1EvxSMTTdBvyTLMFZHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-517357222-0e06f7946c8e465997e97c525b30dd1a.jpg',
      'loyalty-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/17_de_octubre_de_1945.jpg/800px-17_de_octubre_de_1945.jpg',
      'marriage': 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Evita_y_Juan_Domingo_Per%C3%B3n.jpg',
      'first-presidency': 'https://www.thoughtco.com/thmb/Wk38ArPp8RBPR9n6K28M-GgM6FA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-515447052-dcd735e5f5a84a9c9a2c10ff346c2dbc.jpg',
      'womens-vote': 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UDEFC2SXUZBLXC6WGXCUUEVYCY.jpg',
      'eva-resignation': 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UDEFC2SXUZBLXC6WGXCUUEVYCY.jpg',
      'eva-death': 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTI5MDg3MzM5/eva-peron-funeral.jpg',
      'second-presidency': 'https://static01.nyt.com/images/2016/08/28/books/review/28KAISER/28KAISER-jumbo.jpg',
      'coup': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Bombardeo_de_la_Plaza_de_Mayo.jpg',
      'isabel-marriage': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Peron-Isabel_1.jpg',
      'return': 'https://www.aljazeera.com/wp-content/uploads/2023/06/2023-06-19T151913Z_1298289241_RC24B0AWVR0M_RTRMADP_3_ARGENTINA-PERON-ANNIVERSARY.jpg',
      'third-presidency': 'https://www.thoughtco.com/thmb/L4rBnYWjd83QeY3Yp6Zt6BoNFRA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/124864_c64-56a97d5c3df78cf772a85cfe.jpg',
      'death': 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/V3SVQTZRZJHQFBDQHBRMXVTKQQ.jpg'
    };
    
    return eventImageMap[eventId];
  };
  
  return (
    <div className={styles.biographyContainer} ref={containerRef}>
      {/* Timeline navigation */}
      <TimelineIndicator 
        currentSection={currentSection}
        visitedSections={visitedSections}
        navigateToSection={navigateToSection}
        isMobile={isMobile}
      />
      
      {/* Hero section */}
      <HeroSection 
        isActive={currentSection === 0}
        navigateToSection={navigateToSection}
        isMobile={isMobile}
      />
      
      {/* Event sections */}
      <div className={styles.sectionsContainer}>
        {/* Render all possible sections */}
        {Array.from({ length: biographyEvents.length + 1 }).map((_, index) => (
          <div key={index}>
            {renderEventComponent(index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBiography; 