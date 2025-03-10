'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.scss';

const CoupEvent = ({ isActive, isMobile, contentRef }) => {
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
            <span ref={yearRef}>16 de septiembre de 1955</span>
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
          La Revolución Libertadora
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
            El 16 de septiembre de 1955, un golpe militar autodenominado "Revolución Libertadora" 
            derrocó al gobierno constitucional de Juan Domingo Perón, poniendo fin a su segunda 
            presidencia e iniciando un período de 18 años de exilio para el líder justicialista.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            margin: '1.5rem 0',
            position: 'relative'
          }}>
            <motion.img 
              src="/bombardeo.webp" 
              alt="Bombardeo a Plaza de Mayo" 
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
              bottom: '0', 
              background: 'rgba(0,0,0,0.7)', 
              color: 'white', 
              padding: '0.3rem 0.6rem', 
              borderRadius: '2px',
              fontSize: '0.8rem',
              fontStyle: 'italic',
              fontFamily: 'EB Garamond, serif'
            }}>
              Bombardeo a Plaza de Mayo, 16 de junio de 1955
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
            Antecedentes
          </h3>
          
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            Las tensiones entre el gobierno peronista y sectores de la Iglesia Católica, las Fuerzas Armadas 
            y la oposición política se habían intensificado durante 1954 y 1955. El 16 de junio de 1955, 
            aviones de la Marina bombardearon la Plaza de Mayo causando más de 300 muertos civiles en un 
            intento fallido de golpe de Estado.
          </p>
          
          <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#1e3a8a', 
            marginTop: '2rem',
            marginBottom: '0.5rem',
            fontWeight: 600,
            fontFamily: 'EB Garamond, serif'
          }}>
            El Golpe
          </h3>
          
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            El levantamiento militar, liderado por el general Eduardo Lonardi, comenzó en Córdoba y 
            rápidamente se extendió a otras guarniciones militares. Ante la posibilidad de una guerra civil, 
            Perón decidió renunciar el 19 de septiembre y buscar asilo en la embajada de Paraguay.
          </p>
          
          <p className={styles.garamondText} style={{ marginTop: '1rem', fontFamily: 'EB Garamond, serif' }}>
            Lonardi asumió la presidencia provisional bajo el lema "ni vencedores ni vencidos", pero fue 
            reemplazado en noviembre por el general Pedro Eugenio Aramburu, quien implementó una política 
            más dura contra el peronismo, proscribiendo al partido y prohibiendo incluso mencionar el nombre 
            de Perón en los medios de comunicación.
          </p>
          
          <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#1e3a8a', 
            marginTop: '2rem',
            marginBottom: '0.5rem',
            fontWeight: 600,
            fontFamily: 'EB Garamond, serif'
          }}>
            Consecuencias
          </h3>
          
          <p className={styles.garamondText} style={{ fontFamily: 'EB Garamond, serif' }}>
            El derrocamiento de Perón marcó el inicio de un largo período de inestabilidad política en 
            Argentina, caracterizado por la alternancia entre gobiernos militares y civiles débiles. 
            La proscripción del peronismo, que representaba a la mayoría del electorado, impidió el 
            normal funcionamiento del sistema democrático durante casi dos décadas.
          </p>
          
          <p style={{ 
            fontStyle: 'italic', 
            marginTop: '1.5rem',
            borderLeft: '3px solid #1e3a8a',
            paddingLeft: '1rem',
            fontFamily: 'EB Garamond, serif'
          }}>
            "Compañeros, hace una hora he dejado el gobierno. He sido traicionado por quienes tenían 
            el deber de apoyarme. Pero sé que ustedes sabrán defender sus conquistas. Mi último deseo 
            es que el pueblo sepa que estoy dispuesto a morir por él."
            <cite style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              — Juan Domingo Perón, mensaje radial, 19 de septiembre de 1955
            </cite>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoupEvent; 
