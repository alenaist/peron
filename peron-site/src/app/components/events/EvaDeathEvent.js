'use client';

import { motion } from 'framer-motion';
import styles from '../ScrollingBiography.module.scss';

// Eva Death event with completely custom structure and animations
const EvaDeathEvent = ({ isActive, isMobile }) => {
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
      
      {/* Custom content container with unique structure */}
      <div className={styles.eventContent}>
        {/* Year badge with custom animation */}
        <motion.div 
          className={styles.yearBadge}
          style={{ }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isActive ? 1 : 0, 
            opacity: isActive ? 1 : 0
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2
          }}
        >
          26 de julio de 1952
        </motion.div>
        
        {/* Title with custom animation */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginBottom: '2rem'
          }}
        >
          <motion.h2 
            className={styles.eventTitle}
            style={{ 
              textAlign: 'center',
              borderBottom: '2px solid rgba(0,0,0,0.1)',
              paddingBottom: '0.5rem',
              width: '100%'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              y: isActive ? 0 : -20 
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            El Fallecimiento de Eva Perón
          </motion.h2>
        </motion.div>
        
        {/* Memorial image with black ribbon */}
        <motion.div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
        
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            scale: isActive ? 1 : 0.9 
          }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >

          <motion.p
            style={{
              fontSize: '1.2rem',
              fontStyle: 'italic',
              textAlign: 'center',
              position: 'absolute',
              top: '-5px',
              color: '#fff',
              backgroundColor: '#000',
              padding: '0 20px'
            }}
            initial={{ opacity: 0, y: -10}}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            26 de julio de 1952
          </motion.p>
      
          
          <img 
            src="funeralEva.jpg" 
            alt="Funeral de Eva Perón" 
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              border: '8px solid white'
            }}
          />
        </motion.div>
        
        {/* Two-column layout for content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '2rem',
          width: '100%'
        }}>
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : -30 
            }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              borderLeft: '4px solid #000',
              paddingLeft: '0.75rem',
              marginBottom: '1rem'
            }}>
              La Enfermedad
            </h3>
            <p style={{ lineHeight: 1.6 }}>
              Eva Perón fallece el 26 de julio de 1952 a los 33 años debido a un cáncer cervical avanzado. 
              A pesar de recibir tratamiento médico, incluyendo una operación realizada por el médico 
              estadounidense George Pack, su salud se deterioró rápidamente.
            </p>
          </motion.div>
          
          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : 30 
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              borderLeft: '4px solid #000',
              paddingLeft: '0.75rem',
              marginBottom: '1rem'
            }}>
              El Duelo Nacional
            </h3>
            <p style={{ lineHeight: 1.6 }}>
              Su muerte causó un duelo nacional sin precedentes. Su cuerpo fue embalsamado por el 
              doctor Pedro Ara y expuesto en la sede de la CGT durante 16 días, donde miles de 
              argentinos hicieron fila para despedirse.
            </p>
          </motion.div>
        </div>
        
        {/* Timeline of events */}
        <motion.div
          style={{
            width: '100%',
            marginTop: '2rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            borderRadius: '8px'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 40 
          }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}>
            Cronología de los Últimos Días
          </h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* Timeline items */}
            {[
              { date: '4 de junio, 1952', event: 'Última aparición pública durante la ceremonia de asunción de Perón para su segundo mandato.' },
              { date: '7 de mayo, 1952', event: 'Recibe el título de "Jefa Espiritual de la Nación".' },
              { date: '26 de julio, 1952', event: 'Fallece a las 20:25 horas en Buenos Aires.' },
              { date: '9 de agosto, 1952', event: 'Tras 16 días de velatorio, su cuerpo es trasladado.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                style={{
                  display: 'flex',
                  borderBottom: '1px dashed rgba(0,0,0,0.1)',
                  paddingBottom: '0.75rem'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  x: isActive ? 0 : -20 
                }}
                transition={{ duration: 0.4, delay: 1 + (index * 0.15) }}
              >
                <div style={{ 
                  minWidth: '130px', 
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {item.date}
                </div>
                <div>
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Quote */}
        <motion.blockquote
          style={{
            margin: '2rem 0',
            padding: '1.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            fontSize: '3rem',
            opacity: 0.2,
            fontFamily: 'serif'
          }}>
            "
          </div>
          <p style={{ 
            fontSize: '1.2rem', 
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: 1.6,
            position: 'relative',
            zIndex: 1
          }}>
            Volveré y seré millones.
          </p>
          <footer style={{ 
            textAlign: 'right', 
            marginTop: '1rem',
            fontWeight: 'bold'
          }}>
            — Atribuido a Eva Perón
          </footer>
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

export default EvaDeathEvent; 
