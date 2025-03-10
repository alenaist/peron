'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.scss';

const EvaResignationEvent = ({ isActive, isMobile, contentRef }) => {
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
      
      <div className={styles.eventContent} ref={contentRef}>
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
            <span ref={yearRef}>22 de agosto de 1951</span>
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
          La Renuncia de Eva Perón
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
            El 22 de agosto de 1951, en un evento multitudinario conocido como el "Cabildo Abierto del Justicialismo", 
            Eva Perón renunció a su candidatura a la vicepresidencia de Argentina, a pesar del clamor popular que la 
            impulsaba a acompañar a Juan Domingo Perón en la fórmula presidencial para las elecciones de noviembre.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            margin: '1.5rem 0',
            position: 'relative',
            height: '310px'
          }}>
            <motion.img 
              src="/evaRenuncia.png" 
              alt="Eva Perón durante el Cabildo Abierto" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '4px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                objectFit: 'cover'
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
              bottom: '0', 
              background: 'rgba(0,0,0,0.7)', 
              color: 'white', 
              padding: '0.3rem 0.6rem', 
              borderRadius: '2px',
              fontSize: '0.8rem',
              fontStyle: 'italic',
              fontFamily: 'EB Garamond, serif'
            }}>
              Eva Perón durante el Cabildo Abierto del 22 de agosto de 1951
            </p>
          </div>
          
          <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#be185d', 
            marginTop: '2rem',
            marginBottom: '0.5rem',
            fontWeight: 600,
            fontFamily: 'EB Garamond, serif'
          }}>
            Un Momento Histórico
          </h3>
          
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            Ante una multitud de más de un millón de personas reunidas en la Avenida 9 de Julio de Buenos Aires, 
            Eva Perón, ya debilitada por el cáncer que acabaría con su vida menos de un año después, pronunció 
            un discurso en el que pedía tiempo para tomar una decisión sobre su candidatura.
          </p>
          
          <p className={styles.garamondText} style={{ marginTop: '1rem', fontFamily: 'EB Garamond, serif' }}>
            La presión de los sectores militares, que veían con recelo la posibilidad de que una mujer ocupara 
            un cargo tan alto en el gobierno, y su deteriorada salud, fueron factores determinantes en su decisión 
            de renunciar a la candidatura cuatro días después.
          </p>
          
          <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#be185d', 
            marginTop: '2rem',
            marginBottom: '0.5rem',
            fontWeight: 600,
            fontFamily: 'EB Garamond, serif'
          }}>
            El Renunciamiento
          </h3>
          
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            El 31 de agosto, a través de un mensaje radiofónico, Eva comunicó oficialmente su decisión de 
            renunciar a la candidatura, en lo que se conoce como "el renunciamiento histórico". Este acto 
            fue interpretado como un sacrificio personal en aras de la continuidad del proyecto político 
            de su esposo.
          </p>
          
          <p style={{ 
            fontStyle: 'italic', 
            marginTop: '1.5rem',
            borderLeft: '3px solid #be185d',
            paddingLeft: '1rem',
            fontFamily: 'EB Garamond, serif'
          }}>
            "Yo no renuncio a mi puesto de lucha, renuncio a los honores... Quiero seguir siendo Evita para 
            mitigar dolores y enjugar lágrimas. Nada más que Evita."
            <cite style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              — Eva Perón, 31 de agosto de 1951
            </cite>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EvaResignationEvent; 
