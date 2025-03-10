'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.scss';

// Eva Meeting event with custom structure and animations
const EvaMeetingEvent = ({ isActive, isMobile }) => {
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
      className={`${styles.eventSection} ${styles.right} ${styles.personal}`}
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
      
      {/* Custom content container with personal theme */}
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
            <span ref={yearRef}>22 de enero de 1944</span>
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
          style={{ fontFamily: 'EB Garamond, serif', textAlign: 'right' }}
        >
          El Encuentro con Eva Duarte
        </motion.h2>
        
        {/* Main image - dramatic */}
        <motion.div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            scale: isActive ? 1 : 0.9 
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxHeight: '240px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)'




          }}>
            <img 
              src="/peronYeva.jpg" 
              alt="Juan Domingo Perón y Eva Duarte" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                top: '-100px',
                position: 'relative'
              }}
            />
          </div>
        </motion.div>
        
        {/* Story section */}
        <motion.div
          style={{
            backgroundColor: 'rgba(225, 29, 72, 0.05)',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#e11d48',
            marginBottom: '1rem',
            borderBottom: '1px solid rgba(225, 29, 72, 0.2)',
            paddingBottom: '0.5rem'
          }}>
            Un Encuentro Histórico
          </h3>
          
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            El 22 de enero de 1944, durante un festival benéfico en el Luna Park organizado para recaudar 
            fondos para las víctimas del terremoto de San Juan, el entonces Coronel Juan Domingo Perón, 
            Secretario de Trabajo y Previsión, conoció a Eva Duarte, una joven actriz de radionovelas.
          </p>
          
          <p style={{ lineHeight: 1.6 }}>
            Este encuentro casual cambiaría el rumbo de la historia argentina. Eva, quien entonces tenía 
            24 años, y Perón, de 48, iniciaron una relación que trascendería lo personal para convertirse 
            en una de las alianzas políticas más poderosas del siglo XX en Argentina.
          </p>
        </motion.div>
        
        {/* Two columns section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Left column - Eva before Perón */}
          <motion.div
            style={{
              backgroundColor: 'white',
              padding: '1.5rem'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : -20 
            }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: '#e11d48',
              marginBottom: '1rem'
            }}>
              Eva Antes del Encuentro
            </h3>
            
            <p style={{ lineHeight: 1.6 }}>
              Eva María Duarte había nacido en Los Toldos, provincia de Buenos Aires, en 1919. 
              Llegó a Buenos Aires a los 15 años con el sueño de convertirse en actriz. Para 1944, 
              ya había logrado cierto reconocimiento como actriz de radioteatro, participando en 
              populares radionovelas y trabajando en Radio Belgrano.
            </p>
          </motion.div>
          
          {/* Right column - Perón before Eva */}
          <motion.div
            style={{
              backgroundColor: 'white',
              padding: '1.5rem'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : 20 
            }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: '#e11d48',
              marginBottom: '1rem'
            }}>
              Perón en Ascenso
            </h3>
            
            <p style={{ lineHeight: 1.6 }}>
              Por su parte, Perón había ganado prominencia dentro del gobierno militar surgido del 
              golpe de 1943. Como Secretario de Trabajo y Previsión, había implementado numerosas 
              reformas laborales que le ganaron el apoyo de los sindicatos y la clase trabajadora, 
              construyendo una base de poder que sería fundamental para su futuro político.
            </p>
          </motion.div>
        </div>
        
        {/* Impact section */}
        <motion.div
          style={{
            width: '100%',
            padding: '1.5rem',
            backgroundColor: 'rgba(225, 29, 72, 0.08)',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#e11d48',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            El Impacto de su Unión
          </h3>
          
          <p style={{ lineHeight: 1.6, marginBottom: '1rem', textAlign: 'center' }}>
            La relación entre Juan Domingo Perón y Eva Duarte transformaría profundamente la política argentina. 
            Juntos formarían una pareja que cambiaría el curso de la historia del país, con Eva convirtiéndose 
            en una figura política por derecho propio y en un símbolo para los sectores más vulnerables.
          </p>
          
          <p style={{ lineHeight: 1.6, textAlign: 'center', fontWeight: 'bold' }}>
            Este encuentro casual en un festival benéfico sentó las bases para el surgimiento del movimiento 
            político más importante de la Argentina del siglo XX.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EvaMeetingEvent; 
