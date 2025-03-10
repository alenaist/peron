'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.css';

// Revolution event with custom structure and animations
const RevolutionEvent = ({ isActive, isMobile }) => {
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
      className={`${styles.eventSection} ${styles.left} ${styles.political}`}
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
      
      {/* Custom content container with political theme */}
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
            <span ref={yearRef}>4 de junio de 1943</span>
          </div>
        </motion.div>
        
        {/* Title with animation */}
        <motion.h2 
          className={`${styles.eventTitle} ${styles.garamondTitle}`}
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
          style={{ fontFamily: 'EB Garamond, serif' }}
        >
          La Revolución de Junio
        </motion.h2>
        
        {/* Main content with image */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Left column - Content */}
          <motion.div
            style={{ flex: '1' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : -20 
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem', fontFamily: 'EB Garamond, serif' }}>
              El 4 de junio de 1943, un grupo de oficiales del Ejército Argentino, entre los que se encontraba 
              Juan Domingo Perón, llevó a cabo un golpe de estado que derrocó al gobierno del presidente Ramón Castillo.
            </p>
            <p style={{ lineHeight: 1.6, fontFamily: 'EB Garamond, serif' }}>
              Este movimiento militar, conocido como la "Revolución de Junio", fue liderado por el Grupo de Oficiales Unidos (GOU), 
              una logia militar secreta de la que Perón era miembro destacado.
            </p>
          </motion.div>
          
          {/* Right column - Image */}
          <motion.div
            style={{ 
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              scale: isActive ? 1 : 0.9 
            }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img 
              src="https://commons.wikimedia.org/wiki/File:Edelmiro_Farrell_and_Juan_Domingo_Per%C3%B3n.jpg#/media/File:Edelmiro_Farrell_and_Juan_Domingo_Per%C3%B3n.jpg" 
              alt="Edelmiro Farrell y Juan Domingo Perón" 
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
              Edelmiro Farrell y Juan Domingo Perón durante el gobierno militar
            </p>
          </motion.div>
        </div>
        
        {/* Key points section */}
        <motion.div
          style={{
            backgroundColor: 'rgba(30, 58, 138, 0.05)',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#1e3a8a',
            marginBottom: '1rem',
            borderBottom: '1px solid rgba(30, 58, 138, 0.2)',
            paddingBottom: '0.5rem',
            fontFamily: 'EB Garamond, serif'
          }}>
            Consecuencias Clave
          </h3>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1rem'
          }}>
            {[
              {
                title: "Secretaría de Trabajo y Previsión",
                content: "Perón fue nombrado al frente de esta nueva dependencia, desde donde implementó numerosas reformas laborales que le ganaron el apoyo de los trabajadores."
              },
              {
                title: "Reformas Laborales",
                content: "Estableció tribunales de trabajo, vacaciones pagas, indemnizaciones por despido y mejoras salariales para los trabajadores."
              },
              {
                title: "Base de Poder",
                content: "Desde su cargo, Perón construyó una sólida base de apoyo entre los sindicatos y la clase trabajadora, fundamental para su posterior carrera política."
              },
              {
                title: "Camino a la Presidencia",
                content: "Este período sentó las bases para su posterior candidatura presidencial, tras consolidar su imagen como defensor de los trabajadores."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '1rem',
                  borderRadius: '6px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                  borderLeft: '3px solid #1e3a8a'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  y: isActive ? 0 : 20 
                }}
                transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
              >
                <h4 style={{ 
                  fontSize: '1.1rem', 
                  color: '#1e3a8a',
                  marginBottom: '0.5rem',
                  fontFamily: 'EB Garamond, serif'
                }}>
                  {item.title}
                </h4>
                <p style={{ lineHeight: 1.5, fontFamily: 'EB Garamond, serif' }}>
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Quote section */}
        <motion.blockquote
          style={{
            borderLeft: '4px solid #1e3a8a',
            paddingLeft: '1.5rem',
            margin: '2rem 0',
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p style={{ 
            fontSize: '1.2rem', 
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#333',
            fontFamily: 'EB Garamond, serif'
          }}>
            "La Revolución de Junio marcó el inicio de una nueva era en la política argentina, 
            sentando las bases para el surgimiento del movimiento peronista."
          </p>
          <footer style={{ 
            marginTop: '1rem',
            fontSize: '0.9rem',
            color: '#666',
            fontFamily: 'EB Garamond, serif'
          }}>
            Historiadores sobre el impacto del golpe de 1943
          </footer>
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

export default RevolutionEvent; 