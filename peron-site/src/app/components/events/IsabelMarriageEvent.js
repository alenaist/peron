'use client';

import { motion } from 'framer-motion';
import styles from '../ScrollingBiography.module.css';

// Isabel Marriage event with custom structure and animations
const IsabelMarriageEvent = ({ isActive, isMobile }) => {
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
      
      {/* Custom content container with personal theme */}
      <div className={styles.eventContent}>
        {/* Year badge with custom animation */}
        <motion.div 
          className={styles.yearBadge}
          style={{ 
            backgroundColor: '#e11d48',
            border: '2px solid #be123c',
            boxShadow: '0 4px 8px rgba(225, 29, 72, 0.3)'
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            x: isActive ? 0 : -30 
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            type: "spring",
            stiffness: 150
          }}
        >
          <div>
            1961
            <span style={{ 
              display: 'block', 
              fontSize: '0.7rem', 
              fontWeight: 'normal',
              marginTop: '0.1rem'
            }}>
              15 de noviembre
            </span>
          </div>
        </motion.div>
        
        {/* Title with custom animation */}
        <motion.h2 
          className={styles.eventTitle}
          style={{ 
            color: '#e11d48',
            borderBottom: '2px solid #e11d48',
            paddingBottom: '0.5rem'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : -20 
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Matrimonio con Isabel
        </motion.h2>
        
        {/* Wedding banner */}
        <motion.div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{
            width: '100%',
            textAlign: 'center',
            padding: '1.5rem',
            backgroundColor: 'rgba(225, 29, 72, 0.08)',
            borderRadius: '8px',
            position: 'relative'
          }}>
            <h2 style={{ 
              fontSize: '2rem',
              color: '#e11d48',
              margin: '0 0 0.5rem',
              fontFamily: 'serif',
              fontWeight: 'normal'
            }}>
              Juan Domingo Perón y María Estela Martínez
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              color: '#666',
              margin: 0,
              fontStyle: 'italic'
            }}>
              15 de noviembre de 1961 • Madrid, España
            </p>
          </div>
        </motion.div>
        
        {/* Main image */}
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
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            border: '10px solid white'
          }}>
            <img 
              src="https://commons.wikimedia.org/wiki/File:Peron-Isabel_1.jpg#/media/File:Peron-Isabel_1.jpg" 
              alt="Juan Domingo Perón e Isabel Martínez" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </motion.div>
        
        {/* Context section */}
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
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#e11d48',
            marginBottom: '1rem',
            borderBottom: '1px solid rgba(225, 29, 72, 0.2)',
            paddingBottom: '0.5rem'
          }}>
            El Encuentro y Matrimonio
          </h3>
          
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            El 15 de noviembre de 1961, Juan Domingo Perón, de 66 años, contrajo matrimonio con María Estela 
            Martínez (conocida como Isabel), de 30 años, en Madrid, España, donde el ex presidente argentino 
            se encontraba exiliado desde 1960 bajo la protección del régimen de Francisco Franco.
          </p>
          
          <p style={{ lineHeight: 1.6 }}>
            Isabel, nacida en La Rioja, Argentina, había sido bailarina de cabaret y conoció a Perón en Panamá 
            en 1956, durante una gira artística, cuando él se encontraba exiliado en ese país. Tras este 
            encuentro, se convirtió en su secretaria personal y, posteriormente, en su tercera esposa.
          </p>
        </motion.div>
        
        {/* Two columns section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Left column - Isabel's background */}
          <motion.div
            style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(225, 29, 72, 0.1)'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : -20 
            }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: '#e11d48',
              marginBottom: '1rem'
            }}>
              Isabel Martínez
            </h3>
            
            <p style={{ lineHeight: 1.6 }}>
              María Estela Martínez Cartas nació el 4 de febrero de 1931 en La Rioja, Argentina. 
              Adoptó el nombre artístico de "Isabel" durante su carrera como bailarina. A diferencia 
              de Eva Perón, Isabel no tenía experiencia política ni carisma popular cuando conoció a Perón, 
              pero se convertiría en una figura clave en los últimos años de su vida y en la historia 
              argentina al convertirse en la primera mujer presidenta del país.
            </p>
          </motion.div>
          
          {/* Right column - Political context */}
          <motion.div
            style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(225, 29, 72, 0.1)'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : 20 
            }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: '#e11d48',
              marginBottom: '1rem'
            }}>
              Contexto Político
            </h3>
            
            <p style={{ lineHeight: 1.6 }}>
              En 1961, Perón llevaba seis años en el exilio tras el golpe de Estado de 1955. 
              En Argentina, el peronismo estaba proscripto y sus seguidores perseguidos. Desde Madrid, 
              Perón intentaba mantener su influencia en la política argentina a través de emisarios 
              y directivas a los líderes sindicales y políticos peronistas que operaban en la clandestinidad 
              o bajo otras identidades políticas.
            </p>
          </motion.div>
        </div>
        
        {/* Historical significance section */}
        <motion.div
          style={{
            width: '100%',
            padding: '1.5rem',
            backgroundColor: 'rgba(225, 29, 72, 0.08)',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#e11d48',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Significado Histórico
          </h3>
          
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            Este matrimonio tendría importantes consecuencias políticas para Argentina. Isabel se convertiría 
            en la compañera política de Perón durante su exilio, realizando viajes a Argentina como su 
            representante y estableciendo contactos con líderes sindicales y políticos.
          </p>
          
          <p style={{ lineHeight: 1.6 }}>
            En 1973, cuando Perón regresó a Argentina y fue elegido presidente por tercera vez, Isabel 
            fue su compañera de fórmula y vicepresidenta. Tras la muerte de Perón el 1 de julio de 1974, 
            Isabel asumió la presidencia, convirtiéndose en la primera mujer presidenta de Argentina y 
            de América Latina, cargo que ocuparía hasta el golpe militar del 24 de marzo de 1976.
          </p>
        </motion.div>
        
        {/* Legacy section */}
        <motion.div
          style={{
            backgroundColor: 'rgba(225, 29, 72, 0.05)',
            padding: '1.5rem',
            borderRadius: '8px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#e11d48',
            marginBottom: '1rem',
            borderBottom: '1px solid rgba(225, 29, 72, 0.2)',
            paddingBottom: '0.5rem',
            textAlign: 'center'
          }}>
            Un Legado Complejo
          </h3>
          
          <p style={{ lineHeight: 1.6, textAlign: 'center' }}>
            La presidencia de Isabel Perón estuvo marcada por una profunda crisis económica, política y 
            social, con una creciente violencia política y el surgimiento de grupos paramilitares como 
            la Triple A (Alianza Anticomunista Argentina). Su gobierno, influenciado por el controvertido 
            José López Rega, sería recordado como un período turbulento que culminaría en el golpe militar 
            de 1976 y el inicio de la última dictadura militar argentina.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IsabelMarriageEvent; 