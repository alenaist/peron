'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.css';

// Military event with custom structure and animations
const MilitaryEvent = ({ isActive, isMobile }) => {
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
      className={`${styles.eventSection} ${styles.left} ${styles.military}`}
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
            <span ref={yearRef}>1911 - 1930</span>
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
          Carrera Militar
        </motion.h2>
        
        {/* Content with animation */}
        <motion.div
          className={styles.eventDescription}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            En 1911, a los 16 años, Juan Domingo Perón ingresó al Colegio Militar de la Nación, 
            iniciando una carrera que marcaría profundamente su visión política y social. Se graduó en 1913 
            como subteniente de infantería.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            margin: '1.5rem 0',
            position: 'relative'
          }}>
            <motion.img 
              src="/images/peron-militar.jpg" 
              alt="Juan Domingo Perón en uniforme militar" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '4px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isActive ? 1 : 0, 
                scale: isActive ? 1 : 0.9 
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
            <p className={styles.garamondQuote} style={{ 
              position: 'absolute', 
              bottom: '-1.5rem', 
              right: '0', 
              background: 'rgba(0,0,0,0.7)', 
              color: 'white', 
              padding: '0.3rem 0.6rem', 
              borderRadius: '2px',
              fontSize: '0.8rem',
              fontStyle: 'italic',
              fontFamily: 'EB Garamond, serif'
            }}>
              Perón en uniforme militar, circa 1920
            </p>
          </div>
          
          <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#166534', 
            marginTop: '2rem',
            marginBottom: '0.5rem',
            fontWeight: 600,
            fontFamily: 'EB Garamond, serif'
          }}>
            Hitos Militares
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'EB Garamond, serif' }}>
                1926-1929: Escuela Superior de Guerra
              </h4>
              <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
                Completó estudios avanzados en estrategia militar y fue promovido a Mayor. 
                Sus calificaciones sobresalientes le permitieron ser designado como profesor 
                de historia militar.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'EB Garamond, serif' }}>
                1930: Participación en el Golpe de Estado
              </h4>
              <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
                Participó en el golpe militar que derrocó al presidente Hipólito Yrigoyen, 
                aunque con un papel secundario.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'EB Garamond, serif' }}>
                1936-1938: Agregado Militar en Chile
              </h4>
              <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
                Fue designado como agregado militar en la embajada argentina en Chile, 
                donde desarrolló importantes contactos diplomáticos.
              </p>
            </div>
          </div>
          
          <p style={{ 
            fontStyle: 'italic', 
            marginTop: '1.5rem',
            borderLeft: '3px solid #166534',
            paddingLeft: '1rem',
            fontFamily: 'EB Garamond, serif'
          }}>
            "Mi formación militar me dio disciplina, método y una visión estratégica 
            que aplicaría más tarde en mi carrera política. El ejército fue mi primera escuela 
            de liderazgo y organización."
            <cite style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              — Juan Domingo Perón
            </cite>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MilitaryEvent; 