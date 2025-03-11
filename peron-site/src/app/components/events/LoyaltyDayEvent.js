'use client';

import { motion } from 'framer-motion';
import styles from '../ScrollingBiography.module.scss';

// Loyalty Day event with custom structure and animations
const LoyaltyDayEvent = ({ isActive, isMobile }) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
      
      {/* Custom content container with political theme */}
      <div className={styles.eventContent}>
        {/* Hero banner for Loyalty Day */}
        <motion.div
          style={{
            position: 'relative',
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',

            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)'
          }}
          initial={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Background image */}
          <div
            style={{
              backgroundColor: 'black',
            }}
          />
          
          {/* Overlay content */}
          <div
            style={{
      
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div style={{ 
                fontSize: '0.9rem', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                marginBottom: '0.5rem'
              }}>
                17 de Octubre de 1945
              </div>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                margin: '0 0 0.5rem'
              }}>
                Día de la Lealtad
              </h2>
              <div style={{ 
                width: '60px', 
                height: '3px', 
                backgroundColor: 'white', 
                margin: '0 auto' 
              }} />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Year badge */}
        <motion.div 
          className={styles.yearBadge}
          style={{ 
           
          }}
          initial={{ scale: 0, rotate: 5 }}
          animate={{ 
            scale: isActive ? 1 : 0, 
            rotate: isActive ? 0 : 5 
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.3,
            type: "spring"
          }}
        >
           17 de Octubre de 1945
        </motion.div>
        
        {/* Main content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {/* Title */}
          <motion.h2 
            className={styles.eventTitle}
            style={{ 
              color: '#1e3a8a',
              borderBottom: '2px solid #1e3a8a',
              paddingBottom: '0.5rem'
            }}
            variants={itemVariants}
          >
            El Nacimiento del Movimiento Peronista
          </motion.h2>
          
          <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <motion.img 
            src="/octubre.webp" 
            style={{width: '100%', maxHeight: '400px', objectFit: 'cover'}}></motion.img>


            {/* Description */}
            <motion.p 
              style={{ 
                fontSize: '1.3rem',
                lineHeight: 1.6,
                position: 'absolute',
                backgroundColor: '#000',
                color: 'white',
                padding: '20px',
                zIndex: 99999,
                width: '80%',
                textAlign: 'center',
              
              }}
              variants={itemVariants}
            >
              El 17 de octubre de 1945 se produjo una movilización masiva de trabajadores que exigían la liberación 
              de Juan Domingo Perón, quien había sido detenido días antes por sus colegas militares.
            </motion.p>
          </div>
          
          {/* Two-column layout */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '2rem',
              marginTop: '1rem'
            }}
            variants={itemVariants}
          >
            {/* Left column */}
            <div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                color: '#1e3a8a',
                marginBottom: '1rem',
                borderLeft: '4px solid #1e3a8a',
                paddingLeft: '0.75rem'
              }}>
                Los Antecedentes
              </h3>
              <p style={{ lineHeight: 1.6 }}>
                Tras su labor como Secretario de Trabajo y Previsión, Perón había ganado gran popularidad 
                entre los trabajadores gracias a las reformas laborales que implementó. Esto generó 
                desconfianza entre algunos sectores militares y políticos.
              </p>
              <p style={{ lineHeight: 1.6, marginTop: '1rem' }}>
                El 9 de octubre de 1945, un grupo de oficiales forzó su renuncia a todos sus cargos y 
                posteriormente lo detuvo, trasladándolo a la Isla Martín García.
              </p>
            </div>
            
            {/* Right column */}
            <div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                color: '#1e3a8a',
                marginBottom: '1rem',
                borderLeft: '4px solid #1e3a8a',
                paddingLeft: '0.75rem'
              }}>
                La Movilización Popular
              </h3>
              <p style={{ lineHeight: 1.6 }}>
                Al conocerse la detención, los sindicatos y trabajadores comenzaron a organizarse. 
                El 17 de octubre, una multitud se congregó en la Plaza de Mayo exigiendo la liberación 
                de Perón.
              </p>
              <p style={{ lineHeight: 1.6, marginTop: '1rem' }}>
                Miles de trabajadores de zonas industriales como Berisso, Ensenada y Avellaneda 
                marcharon hacia el centro de Buenos Aires en una demostración de apoyo sin precedentes.
              </p>
            </div>
          </motion.div>
          
          {/* Quote */}
          <motion.blockquote
            style={{
              margin: '1.5rem 0 0 0',
              padding: '1.5rem',
              backgroundColor: 'rgba(30, 58, 138, 0.05)',
              borderRadius: '8px',
              position: 'relative'
            }}
            variants={itemVariants}
          >
            <p style={{ 
              fontSize: '1.2rem', 
              fontStyle: 'italic',
              lineHeight: 1.6,
              textAlign: 'center',
              color: '#1e3a8a'
            }}>
              "Trabajadores: hace casi dos años, desde esta misma secretaría, dije que tenía tres honras en mi vida: 
              la de ser soldado, la de ser un patriota y la de ser el primer trabajador argentino."
            </p>
            <footer style={{ 
              marginTop: '1rem',
              textAlign: 'right',
              fontWeight: 'bold'
            }}>
              — Juan Domingo Perón, discurso del 17 de octubre de 1945
            </footer>
          </motion.blockquote>
          

          <div style={{ display: 'flex' }}>


          <motion.img src="/lealtadportada.jpg" style={{width: '50%',  maxHeight: '400px', objectFit: 'cover'}}></motion.img>

          <motion.div
            style={{
              backgroundColor: 'rgba(30, 58, 138, 0.1)',
              padding: '1.5rem 3rem',
              borderRadius: '8px',
            }}
            variants={itemVariants}
          >
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: '#1e3a8a',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              El Impacto Histórico
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  1
                </div>
                <p>
                  Marcó el nacimiento del movimiento peronista como fuerza política.
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  2
                </div>
                <p>
                  Estableció un vínculo directo entre Perón y los trabajadores que perduraría por décadas.
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  3
                </div>
                <p>
                  Se instituyó como el "Día de la Lealtad Peronista", celebrado anualmente.
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  4
                </div>
                <p>
                  Allanó el camino para la candidatura presidencial de Perón en 1946.
                </p>
              </div>
            </div>
          </motion.div>

          </div>
          {/* Impact section */}
          
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LoyaltyDayEvent; 
