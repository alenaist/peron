'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.scss';

// Marriage event with custom structure and animations
const MarriageEvent = ({ isActive, isMobile }) => {
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
            <span ref={yearRef}>22 de octubre de 1945</span>
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
          El Matrimonio con Eva Duarte
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
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <motion.div 
              style={{ 
                flex: isMobile ? 1 : '0 0 40%',
                position: 'relative'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isActive ? 1 : 0, 
                scale: isActive ? 1 : 0.9 
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <img 
                src="/casamiento.png" 
                alt="Boda de Juan Domingo Perón y Eva Duarte" 
                style={{ 
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  objectPosition: 'center 0'
                }}
              />
            </motion.div>
            
            <div style={{ flex: 1, fontSize: '1.5rem' }}>
              <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.4rem' }}>
                El 22 de octubre de 1945, apenas días después del histórico 17 de octubre, 
                Juan Domingo Perón y Eva Duarte contrajeron matrimonio civil en Junín, provincia de Buenos Aires.
              </p>
              
              <p className={styles.garamondText} style={{ marginTop: '1rem', fontFamily: 'EB Garamond, serif',  fontSize: '1.4rem'  }}>
                La ceremonia fue íntima, lejos del bullicio de Buenos Aires, y marcó el inicio formal 
                de una de las parejas más influyentes en la historia política argentina.
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              y: isActive ? 0 : 20 
            }}
            transition={{ duration: 0.5, delay: 0.9 }}
            style={{ marginTop: '2rem' }}
          >
            <h3 style={{ 
              fontSize: '1.4rem', 
              color: '#be185d', 
              marginBottom: '1rem',
              fontWeight: 600,
              fontFamily: 'EB Garamond, serif'
            }}>
              Un Matrimonio Estratégico
            </h3>
            
            <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
              La boda se celebró en un momento crucial: Perón acababa de ser liberado de prisión 
              gracias a la movilización popular del 17 de octubre, y se preparaba para lanzar su 
              candidatura presidencial para las elecciones de febrero de 1946.
            </p>
            
            <p className={styles.garamondText} style={{ marginTop: '1rem', fontFamily: 'EB Garamond, serif' }}>
              Para Eva, este matrimonio significó la legitimación de su relación con Perón y el inicio 
              de su transformación de actriz a figura política. Para Perón, representó la consolidación 
              de una alianza personal y política con quien se convertiría en su más ferviente defensora.
            </p>
          </motion.div>
          
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : -20 
            }}
            transition={{ duration: 0.5, delay: 1.1 }}
            style={{ 
              marginTop: '2rem',
              padding: '1.5rem',
              borderLeft: '4px solid #be185d',
              backgroundColor: 'rgba(190, 24, 93, 0.05)',
              fontStyle: 'italic',
              fontFamily: 'EB Garamond, serif'
            }}
          >
            "Nuestro matrimonio no fue solo la unión de dos personas que se amaban, sino también 
            la unión de dos fuerzas destinadas a trabajar juntas por el pueblo argentino."
            <cite style={{ display: 'block', marginTop: '1rem', fontSize: '0.9rem' }}>
              — Juan Domingo Perón en sus memorias
            </cite>
          </motion.blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarriageEvent; 
