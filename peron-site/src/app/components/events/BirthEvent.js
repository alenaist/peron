'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.css';

// Birth event with completely custom structure
const BirthEvent = ({ isActive, isMobile, contentRef }) => {
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
    
    // Reset scroll position when component becomes active
    if (isActive && contentRef && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isActive, contentRef]);

  return (
    <motion.section 
      className={`${styles.eventSection} ${styles.left} ${styles.personal}`}
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
      
      {/* Custom content container with unique structure */}
      <div className={styles.eventContent} ref={contentRef}>
        {/* Year badge with custom animation */}
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
            <span ref={yearRef}>8 de octubre de 1895</span>
          </div>
        </motion.div>
        
        {/* Title with custom animation */}
        <motion.h2 
          className={styles.eventTitle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            x: isActive ? 0 : -50 
          }}
          transition={{ 
            duration: 0.7, 
            delay: 0.3,
            type: "spring"
          }}
        >
          El Nacimiento de Juan Domingo Perón
        </motion.h2>
        
        {/* Custom layout for birth event */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          {/* First content block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              y: isActive ? 0 : 30 
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 style={{ 
              fontSize: '1.4rem', 
              color: '#e11d48', 
              marginBottom: '0.5rem',
              fontWeight: 600,
              fontFamily: 'EB Garamond, serif'
            }}>
              Los Primeros Días
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, fontFamily: 'EB Garamond, serif' }}>
              Juan Domingo Perón nace el 8 de octubre de 1895 en Lobos, provincia de Buenos Aires, Argentina. 
              Hijo de Mario Tomás Perón y Juana Sosa Toledo, su familia tenía ascendencia española, 
              italiana y británica.
            </p>
          </motion.div>
          
          {/* Image with caption */}
          <motion.div
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(225, 29, 72, 0.05)',
              padding: '1rem',
              borderRadius: '8px'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              scale: isActive ? 1 : 0.9 
            }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Juan_Domingo_Per%C3%B3n.jpg/220px-Juan_Domingo_Per%C3%B3n.jpg" 
              alt="Juan Domingo Perón en su juventud" 
              style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            />
            <p style={{ 
              fontStyle: 'italic', 
              marginTop: '0.75rem',
              textAlign: 'center',
              fontSize: '0.9rem',
              fontFamily: 'EB Garamond, serif'
            }}>
              Juan Domingo Perón en su juventud
            </p>
          </motion.div>
          
          {/* Second content block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              y: isActive ? 0 : 30 
            }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 style={{ 
              fontSize: '1.4rem', 
              color: '#e11d48', 
              marginBottom: '0.5rem',
              fontWeight: 600,
              fontFamily: 'EB Garamond, serif'
            }}>
              Infancia entre Dos Mundos
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, fontFamily: 'EB Garamond, serif' }}>
              Pasó su infancia entre Lobos y la Patagonia argentina, una experiencia que le permitió 
              conocer diferentes realidades del país. Esta dualidad entre la pampa húmeda y el 
              sur austral marcaría su visión de Argentina como un país diverso.
            </p>
          </motion.div>
          
          {/* Quote block */}
          <motion.blockquote
            style={{
              borderLeft: '4px solid #e11d48',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              margin: '1rem 0'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : 20 
            }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <p style={{ fontSize: '1.2rem', fontFamily: 'EB Garamond, serif' }}>
              "Mi infancia transcurrió entre Lobos y la Patagonia, formando mi carácter y mi visión del país."
            </p>
            <footer style={{ marginTop: '0.5rem', fontSize: '0.9rem', fontFamily: 'EB Garamond, serif' }}>
              — Atribuido a Juan Domingo Perón
            </footer>
          </motion.blockquote>
          
          {/* Map container */}
          <motion.div
            style={{
              width: '100%',
              height: '250px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              height: isActive ? 250 : 0
            }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52299.92506367742!2d-59.12546241172851!3d-35.18272239923767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc0e0e8b81db27%3A0x4b02cedc9a7868ab!2sLobos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1646835741055!5m2!1ses!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Mapa de Lobos, Buenos Aires"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BirthEvent; 