'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.scss';

const ReturnEvent = ({ isActive, isMobile }) => {
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
            <span ref={yearRef}>20 de junio de 1973</span>
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
          Regreso a Argentina
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
            Después de 18 años de exilio, Juan Domingo Perón regresó definitivamente a Argentina 
            el 20 de junio de 1973. Su retorno fue posible gracias a la apertura democrática 
            impulsada por el gobierno militar del general Alejandro Agustín Lanusse, quien 
            convocó a elecciones en marzo de 1973.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            margin: '1.5rem 0',
            position: 'relative',
            height: '300px'
          }}>
            <motion.img 
              src="/regreso.jpg" 
              alt="Regreso de Juan Domingo Perón a Argentina" 
              style={{ 
                width: '100%', 
                height: 'auto',
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
              background: 'rgba(0,0,0,1)', 
              color: 'white', 
              padding: '0.3rem 0.6rem', 
              borderRadius: '2px',
              fontSize: '0.8rem',
              fontStyle: 'italic',
              fontFamily: 'EB Garamond, serif'
            }}>
              Perón saludando a la multitud en su regreso a Argentina
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
            Un Regreso Sangriento
          </h3>
          
          {/* Comprehensive masonry grid layout with text and images */}
          <motion.div 
            className={styles.masonryGrid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 20
            }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Main text block */}
            <motion.div
              style={{
                gridColumn: '1 / span 2',
                gridRow: '1',
                padding: '1rem',
                backgroundColor: 'rgba(30, 58, 138, 0.05)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.95
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className={styles.garamondText} style={{ 
                fontFamily: 'EB Garamond, serif',
                margin: 0,
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}>
                El regreso de Perón estuvo marcado por la tragedia. Miles de personas se congregaron 
                en Ezeiza para recibirlo, pero el evento derivó en un enfrentamiento violento entre 
                facciones de izquierda y derecha del peronismo, conocido como la "Masacre de Ezeiza".
              </p>
            </motion.div>
            
            {/* First image - large */}
            <motion.div
              style={{
                gridColumn: '3',
                gridRow: '1 / span 2',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '100%'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.95
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <img 
                src="/ezeiza01.jpeg" 
                alt="Multitud esperando a Perón en Ezeiza" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </motion.div>
            
            {/* Second image */}
            <motion.div
              style={{
                gridColumn: '1',
                gridRow: '2',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '100%'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.95
              }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <img 
                src="/ezeiza02.avif" 
                alt="Manifestantes en el regreso de Perón" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </motion.div>
            
            {/* Quote/fact block */}
            <motion.div
              style={{
                gridColumn: '2',
                gridRow: '2',
                padding: '1rem',
                backgroundColor: 'rgba(225, 29, 72, 0.05)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.95
              }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p className={styles.garamondText} style={{ 
                fontFamily: 'EB Garamond, serif',
                margin: 0,
                fontStyle: 'italic',
                fontSize: '1rem',
                lineHeight: 1.5
              }}>
                "La masacre dejó decenas de muertos y heridos, convirtiéndose en uno de los episodios más trágicos de la historia política argentina."
              </p>
            </motion.div>
            
            {/* Third image */}
            <motion.div
              style={{
                gridColumn: '1',
                gridRow: '3',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '100%'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.95
              }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <img 
                src="/ezeiza03.jpg" 
                alt="Violencia durante la Masacre de Ezeiza" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </motion.div>
            
            {/* Conclusion text */}
            <motion.div
              style={{
                gridColumn: '2 / span 2',
                gridRow: '3',
                padding: '1rem',
                backgroundColor: 'rgba(30, 58, 138, 0.05)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.95
              }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <p className={styles.garamondText} style={{ 
                fontFamily: 'EB Garamond, serif',
                margin: 0,
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}>
                Este episodio evidenció las profundas divisiones dentro del movimiento peronista, que Perón intentaría reconciliar durante su breve tercer mandato.
              </p>
            </motion.div>
          </motion.div>
          
          <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#1e3a8a', 
            marginTop: '2rem',
            marginBottom: '0.5rem',
            fontWeight: 600,
            fontFamily: 'EB Garamond, serif'
          }}>
            Contexto Político
          </h3>
          
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            Perón regresó a un país profundamente dividido, con una creciente violencia política 
            y una economía inestable. Su figura era vista como la única capaz de pacificar el país 
            y encauzar el proceso democrático.
          </p>
          
          <p className={styles.garamondText} style={{ marginTop: '1rem', fontFamily: 'EB Garamond, serif' }}>
            Tras su regreso, Perón asumió un rol de mediador entre las distintas facciones políticas, 
            buscando establecer un "Pacto Social" entre empresarios, trabajadores y el Estado para 
            estabilizar la economía y reducir la conflictividad social.
          </p>
          
          <p style={{ 
            fontStyle: 'italic', 
            marginTop: '1.5rem',
            borderLeft: '3px solid #1e3a8a',
            paddingLeft: '1rem',
            fontFamily: 'EB Garamond, serif'
          }}>
            "Llego casi como un símbolo de la concordia nacional, y les aseguro que nada puede 
            causarme mayor dolor que la lucha entre hermanos, que sólo puede favorecer a los 
            enemigos de la Patria."
            <cite style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              — Juan Domingo Perón, 21 de junio de 1973
            </cite>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReturnEvent; 
