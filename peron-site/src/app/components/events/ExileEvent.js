'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.scss';

// Exile event with custom structure and animations
const ExileEvent = ({ isActive, isMobile }) => {
  const yearRef = useRef(null);
  
  useEffect(() => {
    if (isActive && yearRef.current) {
      // Create the split type instance
      const yearText = new SplitType(yearRef.current, {
        types: 'chars',
        tagName: 'span'
      });
      
      // Animate each character
      const chars = yearText.chars;
      if (chars) {
        chars.forEach((char, index) => {
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
    }
  }, [isActive]);

  return (
    <motion.section 
      className={`${styles.eventSection} ${styles.right} ${styles.political}`}
      initial={false}
      animate={{ 
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 50,
        display: isActive ? 'flex' : 'none'
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Mobile swipe indicators */}
      {isMobile && (
        <>
          <div className={`${styles.swipeIndicator} ${styles.swipeUp}`} aria-hidden="true" />
          <div className={`${styles.swipeIndicator} ${styles.swipeDown}`} aria-hidden="true" />
        </>
      )}
      
      {/* Custom content container with exile theme */}
      <div className={styles.eventContent}>
        {/* Year badge with typing animation */}
        <motion.div 
          className={styles.yearBadge}
          initial={{ scale: 0, rotate: -10 }}
          animate={{ 
            scale: isActive ? 1 : 0, 
            rotate: isActive ? 0 : -10 
          }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
        >
          <div className={styles.typingAnimation}>
            <span ref={yearRef}>1955 - 1973</span>
          </div>
        </motion.div>
        
        {/* Title with dramatic styling */}
        <motion.h2 
          className={styles.eventTitle}
          style={{ 
            color: '#1e3a8a',
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '2rem',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : -20 
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          El Exilio
        </motion.h2>
        
        {/* World map with journey visualization */}
        <motion.div
          style={{
            position: 'relative',
            width: '100%',
            height: '300px',
            backgroundColor: 'rgba(30, 58, 138, 0.05)',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isActive ? 1 : 0,
            height: isActive ? 300 : 0
          }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Map background */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(/images/world-map.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.2
            }}
          />
          
          {/* Journey points */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: '#1e3a8a',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              El Largo Camino del Exilio (1955-1973)
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              position: 'relative'
            }}>
              {/* Journey line (only visible on desktop) */}
              {!isMobile && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10%',
                  width: '80%',
                  height: '2px',
                  backgroundColor: '#1e3a8a',
                  zIndex: 0
                }} />
              )}
              
              {/* Journey points */}
              {[
                { country: 'Paraguay', year: '1955' },
                { country: 'Panamá', year: '1956' },
                { country: 'Venezuela', year: '1957' },
                { country: 'Rep. Dominicana', year: '1960' },
                { country: 'España', year: '1961-1973' }
              ].map((stop, index) => (
                <motion.div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0, 
                    y: isActive ? 0 : 20 
                  }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.15) }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#1e3a8a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                    border: '2px solid white'
                  }}>
                    {index + 1}
                  </div>
                  <div style={{
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}>
                    {stop.country}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#666'
                  }}>
                    {stop.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Main content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '100%'
        }}>
          {/* The coup section */}
          <motion.div
            style={{
              backgroundColor: 'rgba(30, 58, 138, 0.05)',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(30, 58, 138, 0.1)'
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : -30 
            }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: '#1e3a8a',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(30, 58, 138, 0.2)',
              paddingBottom: '0.5rem'
            }}>
              La "Revolución Libertadora"
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1.5rem',
              marginBottom: '1rem'
            }}>
              <div style={{ flex: '1' }}>
                <p style={{ lineHeight: 1.6 }}>
                  El 16 de septiembre de 1955, un golpe militar liderado por Eduardo Lonardi derrocó al 
                  gobierno de Perón. Los militares denominaron a este movimiento como la "Revolución Libertadora".
                </p>
                
                <p style={{ lineHeight: 1.6, marginTop: '1rem' }}>
                  Tras el golpe, Perón se refugió en la embajada de Paraguay y posteriormente partió al exilio, 
                  iniciando un largo periplo que duraría 18 años.
                </p>
              </div>
              
              <div style={{ 
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Bombardeo_de_la_Plaza_de_Mayo.jpg" 
                  alt="Bombardeo de Plaza de Mayo, 1955" 
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                />
                <p style={{ 
                  fontSize: '0.9rem', 
                  fontStyle: 'italic',
                  marginTop: '0.5rem',
                  textAlign: 'center'
                }}>
                  Bombardeo de Plaza de Mayo, junio de 1955
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Life in exile section */}
          <motion.div
            style={{
              backgroundColor: 'rgba(30, 58, 138, 0.05)',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(30, 58, 138, 0.1)'
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : 30 
            }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: '#1e3a8a',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(30, 58, 138, 0.2)',
              paddingBottom: '0.5rem'
            }}>
              La Vida en el Exilio
            </h3>
            
            <p style={{ lineHeight: 1.6 }}>
              Durante su exilio, Perón mantuvo contacto con sus seguidores en Argentina a través de 
              cartas, grabaciones y emisarios. Desde Madrid, donde se estableció definitivamente en 1961, 
              continuó ejerciendo influencia en la política argentina.
            </p>
            
            <p style={{ lineHeight: 1.6, marginTop: '1rem' }}>
              En España conoció a María Estela Martínez (Isabel), con quien se casó en 1961 y quien 
              posteriormente se convertiría en su vicepresidenta y sucesora.
            </p>
          </motion.div>
          
          {/* Resistance section */}
          <motion.div
            style={{
              backgroundColor: 'rgba(30, 58, 138, 0.05)',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(30, 58, 138, 0.1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              y: isActive ? 0 : 30 
            }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: '#1e3a8a',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(30, 58, 138, 0.2)',
              paddingBottom: '0.5rem'
            }}>
              La Resistencia Peronista
            </h3>
            
            <p style={{ lineHeight: 1.6 }}>
              En Argentina, mientras tanto, surgió la "Resistencia Peronista", un movimiento que 
              luchaba por el regreso de Perón y la restauración de la democracia. A pesar de la 
              proscripción del peronismo, el movimiento mantuvo su fuerza e influencia.
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1.5rem'
            }}>
              <div style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                borderRadius: '8px',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                "Volveré y seré millones"
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Quote */}
        <motion.blockquote
          style={{
            margin: '2rem 0',
            padding: '1.5rem',
            backgroundColor: 'rgba(30, 58, 138, 0.1)',
            borderRadius: '8px',
            position: 'relative',
            fontStyle: 'italic'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.6,
            textAlign: 'center',
            color: '#1e3a8a'
          }}>
            "Para un argentino no hay nada mejor que otro argentino."
          </p>
          <footer style={{ 
            marginTop: '1rem',
            textAlign: 'right',
            fontWeight: 'bold'
          }}>
            — Juan Domingo Perón, desde el exilio
          </footer>
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

export default ExileEvent; 
