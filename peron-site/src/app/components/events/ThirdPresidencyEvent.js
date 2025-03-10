'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.css';

const ThirdPresidencyEvent = ({ isActive, isMobile }) => {
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
            <span ref={yearRef}>1973 - 1974</span>
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
          Tercera Presidencia
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
            Tras el breve gobierno de Héctor J. Cámpora (mayo-julio de 1973), quien renunció para permitir 
            nuevas elecciones, Juan Domingo Perón fue elegido presidente por tercera vez el 23 de septiembre 
            de 1973, con el 62% de los votos. Su esposa, María Estela Martínez de Perón (Isabel), fue elegida 
            como vicepresidenta, siendo la primera mujer en ocupar ese cargo en América.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            margin: '1.5rem 0',
            position: 'relative'
          }}>
            <motion.img 
              src="/images/peron-tercera-presidencia.jpg" 
              alt="Juan Domingo Perón en su tercera presidencia" 
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
              Perón durante su asunción como presidente en 1973
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
            Un Mandato Breve y Complejo
          </h3>
          
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            A sus 78 años y con una salud deteriorada, Perón asumió la presidencia en un contexto 
            de profunda polarización política y crisis económica. Su gobierno intentó implementar 
            un "Pacto Social" entre empresarios y trabajadores para controlar la inflación y 
            estabilizar la economía.
          </p>
          
          <p className={styles.garamondText} style={{ marginTop: '1rem', fontFamily: 'EB Garamond, serif' }}>
            En el plano político, Perón buscó posicionarse como un líder moderado, distanciándose 
            de los sectores más radicalizados del peronismo, particularmente de la juventud peronista 
            y los Montoneros, a quienes había apoyado durante su exilio.
          </p>
          
          <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#1e3a8a', 
            marginTop: '2rem',
            marginBottom: '0.5rem',
            fontWeight: 600,
            fontFamily: 'EB Garamond, serif'
          }}>
            Fallecimiento y Legado
          </h3>
          
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            El 1 de julio de 1974, tras solo nueve meses en el poder, Juan Domingo Perón falleció 
            a causa de una insuficiencia cardíaca. Su muerte sumió al país en una profunda crisis 
            política y dejó un vacío de liderazgo que su esposa y vicepresidenta, Isabel Perón, 
            no pudo llenar.
          </p>
          
          <p className={styles.garamondText} style={{ marginTop: '1rem', fontFamily: 'EB Garamond, serif' }}>
            El gobierno de Isabel Perón se caracterizó por la inestabilidad política, la violencia 
            creciente y el deterioro económico, culminando en el golpe militar del 24 de marzo de 1976 
            que instauró la última dictadura militar argentina.
          </p>
          
          <p style={{ 
            fontStyle: 'italic', 
            marginTop: '1.5rem',
            borderLeft: '3px solid #1e3a8a',
            paddingLeft: '1rem',
            fontFamily: 'EB Garamond, serif'
          }}>
            "Para un argentino no hay nada mejor que otro argentino. Esa debe ser nuestra divisa 
            para el futuro. Únicamente unidos seremos invencibles."
            <cite style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              — Juan Domingo Perón, último discurso público, 12 de junio de 1974
            </cite>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ThirdPresidencyEvent; 