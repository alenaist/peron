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
            Un Regreso Complejo
          </h3>
          
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            El regreso de Perón estuvo marcado por la tragedia. Miles de personas se congregaron 
            en Ezeiza para recibirlo, pero el evento derivó en un enfrentamiento violento entre 
            facciones de izquierda y derecha del peronismo, conocido como la "Masacre de Ezeiza", 
            que dejó decenas de muertos y heridos.
          </p>
          
          <p className={styles.garamondText} style={{ marginTop: '1rem', fontFamily: 'EB Garamond, serif' }}>
            Este episodio evidenció las profundas divisiones dentro del movimiento peronista, 
            que Perón intentaría reconciliar durante su breve tercer mandato.
          </p>
          
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
