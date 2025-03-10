'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.scss';

const PresidencyEvent = ({ isActive, isMobile }) => {
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
            <span ref={yearRef}>1946 - 1952</span>
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
          Primera Presidencia
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
            El 24 de febrero de 1946, Juan Domingo Perón ganó las elecciones presidenciales con el 56% de los votos, 
            asumiendo la presidencia el 4 de junio del mismo año. Su primera presidencia (1946-1952) estuvo marcada 
            por profundas transformaciones sociales, económicas y políticas.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            margin: '1.5rem 0',
            position: 'relative'
          }}>
            <motion.img 
              src="/images/peron-presidente.jpg" 
              alt="Juan Domingo Perón como presidente" 
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
              Perón durante su primer mandato presidencial
            </p>
          </div>
          
          <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#1e3a8a', 
            marginTop: '2rem',
            marginBottom: '0.5rem',
            fontWeight: 600,
            fontFamily: 'EB Garamond, serif'
          }}>
            Logros Principales
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'EB Garamond, serif' }}>
                Justicia Social
              </h4>
              <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
                Amplió derechos laborales, estableció el aguinaldo, vacaciones pagas y 
                mejoró las condiciones de trabajo. Los sindicatos ganaron poder e influencia.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'EB Garamond, serif' }}>
                Industrialización
              </h4>
              <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
                Implementó un modelo de sustitución de importaciones, nacionalizó servicios públicos 
                y creó empresas estatales como Aerolíneas Argentinas.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'EB Garamond, serif' }}>
                Sufragio Femenino
              </h4>
              <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
                En 1947, se aprobó la Ley 13.010 que otorgó el derecho al voto a las mujeres, 
                impulsada fuertemente por Eva Perón.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'EB Garamond, serif' }}>
                Reforma Constitucional
              </h4>
              <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
                En 1949 se reformó la Constitución, incorporando derechos sociales y 
                permitiendo la reelección presidencial.
              </p>
            </div>
          </div>
          
          <p style={{ 
            fontStyle: 'italic', 
            marginTop: '1.5rem',
            borderLeft: '3px solid #1e3a8a',
            paddingLeft: '1rem',
            fontFamily: 'EB Garamond, serif'
          }}>
            "Mejor que decir es hacer, mejor que prometer es realizar. La única verdad es la realidad."
            <cite style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              — Juan Domingo Perón
            </cite>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PresidencyEvent; 
