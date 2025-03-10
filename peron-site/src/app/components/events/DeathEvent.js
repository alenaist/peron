'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from '../ScrollingBiography.module.scss';

// Death event with custom structure and animations
const DeathEvent = ({ isActive, isMobile }) => {
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
      
      {/* Custom content container with solemn theme */}
      <div className={styles.eventContent}>
        {/* Memorial header */}
        <motion.div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '2rem',
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
       
          {/* Year badge with typing animation */}
          <motion.div 
            className={styles.yearBadge}
            style={{ 
       
            }}
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
              <span ref={yearRef}>1 de julio de 1974</span>
            </div>
          </motion.div>
          
          {/* Title with solemn styling */}
          <motion.h2 
            className={styles.eventTitle}
            style={{ 
              color: '#000',
              textAlign: 'center',
              fontSize: '2rem',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              zIndex: 1
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              y: isActive ? 0 : -20 
            }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Fallecimiento
          </motion.h2>
          
          <motion.p
            style={{
              fontSize: '1.1rem',
              color: '#666',
              textAlign: 'center',
              fontStyle: 'italic',
              marginBottom: '2rem',
              zIndex: 1
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            1 de julio de 1974
          </motion.p>
        </motion.div>
        
        {/* Memorial image */}
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
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            border: '8px solid white'
          }}>
            <img 
              src="fallecimiento01.jpg" 
              alt="Funeral de Juan Domingo Perón" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
            
            {/* Black gradient overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'
            }} />
            
            {/* Caption */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              padding: '1rem',
              color: 'white',
              textAlign: 'center',
              fontSize: '0.9rem'
            }}>
              Funeral de Estado en el Congreso de la Nación Argentina
            </div>
          </div>
        </motion.div>
        
        {/* Main content */}
        <motion.div
          style={{
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            padding: '2rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#000',
            marginBottom: '1.5rem',
            textAlign: 'center',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            paddingBottom: '0.75rem'
          }}>
            Los Últimos Días
          </h3>
          
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            Juan Domingo Perón falleció el 1 de julio de 1974 a los 78 años, durante su tercer mandato 
            presidencial. Su salud se había deteriorado notablemente en los meses previos, sufriendo 
            problemas cardíacos y renales.
          </p>
          
          <p style={{ lineHeight: 1.6 }}>
            Su muerte dejó un vacío político que sería ocupado por su esposa y vicepresidenta, 
            María Estela Martínez de Perón (Isabel), quien se convirtió en la primera mujer presidenta 
            de Argentina y de América Latina. Sin embargo, su gobierno enfrentaría graves dificultades 
            y sería derrocado por un golpe militar en 1976.
          </p>
        </motion.div>
        
        {/* Timeline of events */}
        <motion.div
          style={{
            width: '100%',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h3 style={{ 
            fontSize: '1.2rem', 
            color: '#000',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Cronología
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {[
              { 
                date: '12 de junio, 1974', 
                event: 'Última aparición pública de Perón, en un discurso desde el balcón de la Casa Rosada.' 
              },
              { 
                date: '29 de junio, 1974', 
                event: 'Perón sufre un grave deterioro de su salud.' 
              },
              { 
                date: '1 de julio, 1974', 
                event: 'Fallece a las 13:15 horas en la residencia presidencial de Olivos.' 
              },
              { 
                date: '2-4 de julio, 1974', 
                event: 'Velatorio en el Congreso de la Nación. Más de un millón de personas asisten para despedirlo.' 
              },
              { 
                date: '4 de julio, 1974', 
                event: 'Es sepultado en el cementerio de la Chacarita, en Buenos Aires.' 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '0.5rem' : '2rem',
                  padding: '1rem',
                  backgroundColor: index % 2 === 0 ? 'rgba(0, 0, 0, 0.02)' : 'transparent',
                  borderRadius: '4px'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  x: isActive ? 0 : -20 
                }}
                transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
              >
                <div style={{
                  fontWeight: 'bold',
                  minWidth: '150px',
                  color: '#000'
                }}>
                  {item.date}
                </div>
                <div style={{ flex: 1 }}>
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Legacy section */}
        <motion.div
          style={{
            width: '100%',
            padding: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#000',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            El Legado de Juan Domingo Perón
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            <div style={{
              padding: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              borderRadius: '8px',
              borderLeft: '3px solid #000'
            }}>
              <h4 style={{ marginBottom: '0.75rem', fontWeight: 'bold' }}>
                Político
              </h4>
              <p style={{ lineHeight: 1.5 }}>
                El peronismo se convirtió en una de las fuerzas políticas más importantes de Argentina, 
                influyendo en la política nacional hasta la actualidad.
              </p>
            </div>
            
            <div style={{
              padding: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              borderRadius: '8px',
              borderLeft: '3px solid #000'
            }}>
              <h4 style={{ marginBottom: '0.75rem', fontWeight: 'bold' }}>
                Social
              </h4>
              <p style={{ lineHeight: 1.5 }}>
                Sus políticas de justicia social transformaron la estructura de clases en Argentina, 
                fortaleciendo a los sectores trabajadores y la clase media.
              </p>
            </div>
            
            <div style={{
              padding: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              borderRadius: '8px',
              borderLeft: '3px solid #000'
            }}>
              <h4 style={{ marginBottom: '0.75rem', fontWeight: 'bold' }}>
                Económico
              </h4>
              <p style={{ lineHeight: 1.5 }}>
                Impulsó la industrialización del país y estableció un modelo económico basado en 
                el mercado interno y la sustitución de importaciones.
              </p>
            </div>
            
            <div style={{
              padding: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              borderRadius: '8px',
              borderLeft: '3px solid #000'
            }}>
              <h4 style={{ marginBottom: '0.75rem', fontWeight: 'bold' }}>
                Cultural
              </h4>
              <p style={{ lineHeight: 1.5 }}>
                El peronismo se convirtió en un fenómeno cultural que trasciende lo político, 
                influyendo en el arte, la literatura y la identidad nacional argentina.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Final quote */}
        <motion.blockquote
          style={{
            margin: '2rem 0 0',
            padding: '2rem',
            textAlign: 'center',
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <p style={{ 
            fontSize: '1.3rem', 
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#000',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            "El peronismo es un sentimiento que se lleva en el corazón."
          </p>
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

export default DeathEvent; 
