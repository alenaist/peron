'use client';

import { motion } from 'framer-motion';
import styles from '../ScrollingBiography.module.scss';

// Women's Suffrage event with custom structure and animations
const WomensSuffrageEvent = ({ isActive, isMobile }) => {
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
      
      {/* Custom content container with political theme */}
      <div className={styles.eventContent}>
        {/* Year badge with custom animation */}
        <motion.div 
          className={styles.yearBadge}
          style={{ 
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            x: isActive ? 0 : 30 
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            type: "spring",
            stiffness: 150
          }}
        >
          <div>
         
            <p style={{ 
              marginTop: '0.1rem'
            }}>
              23 de septiembre de 1947
            </p>
          </div>
        </motion.div>
        
        {/* Title with custom animation */}
        <motion.h2 
          className={styles.eventTitle}
          style={{ 
            color: '#1e3a8a',
            borderBottom: '2px solid #1e3a8a',
            paddingBottom: '0.5rem'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : -20 
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          El Voto Femenino
        </motion.h2>
        
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
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}>
            <img 
              src="/evaVotoFemenino.jpg" 
              alt="Eva Perón durante la promulgación del voto femenino" 
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover'
              }}
            />
          
          </div>

           {/* Main content */}
        <motion.div
          style={{
            backgroundColor: 'rgba(30, 58, 138, 0.05)',
            padding: '1.5rem',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            margin: '20px 0',
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
            color: '#1e3a8a',
    
            borderBottom: '1px solid rgba(30, 58, 138, 0.2)',
            paddingBottom: '0.5rem'
          }}>
            Un Hito Histórico
          </h3>
          
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            El 23 de septiembre de 1947, se promulgó la Ley 13.010 que estableció el sufragio femenino 
            en Argentina, otorgando a las mujeres el derecho al voto y a ser elegidas para cargos públicos.
          </p>
          
          <p style={{ lineHeight: 1.6 }}>
            Esta ley, impulsada fuertemente por Eva Perón, representó un hito en la historia de los 
            derechos civiles en Argentina y fue el resultado de décadas de lucha del movimiento feminista argentino.
          </p>
        </motion.div>
        </motion.div>
        
       
        
        {/* Eva's role section */}
        <motion.div
          style={{
            width: '100%',
            marginBottom: '2rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 20 
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#1e3a8a',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            El Papel de Eva Perón
          </h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: '2rem',
            alignItems: 'center',
      
          }}>
            <div style={{ flex: '1', fontSize: '1.3rem' }}>
              <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
                Eva Perón fue una figura clave en la promoción y aprobación de esta ley. Desde su posición 
                como primera dama, abogó incansablemente por los derechos políticos de las mujeres, 
                realizando discursos, organizando reuniones y movilizando apoyos.
              </p>
              
              <p style={{ lineHeight: 1.6 }}>
                El día de la promulgación de la ley, Eva pronunció un emotivo discurso desde el balcón 
                de la Casa Rosada ante una multitud de mujeres que celebraban este logro histórico.
              </p>
            </div>
            
            <div style={{ 
              flex: '0 0 auto',
              width: isMobile ? '100%' : '300px',
              height: isMobile ? '200px' : '300px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                backgroundImage: "url('/votoFemenino.jpg')",
                backgroundSize: 'cover',
              }} />
            </div>
          </div>
        </motion.div>
        
        {/* Key points section */}
        <motion.div
          style={{
            backgroundColor: 'rgba(30, 58, 138, 0.05)',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#1e3a8a',
            marginBottom: '1rem',
            borderBottom: '1px solid rgba(30, 58, 138, 0.2)',
            paddingBottom: '0.5rem'
          }}>
            Impacto y Legado
          </h3>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1rem'
          }}>
            {[
              {
                title: "Participación Política",
                content: "Las mujeres argentinas pudieron votar por primera vez en las elecciones nacionales de 1951, con una participación del 90% del padrón femenino."
              },
              {
                title: "Representación Femenina",
                content: "En esas mismas elecciones, fueron elegidas las primeras legisladoras: 7 senadoras y 24 diputadas, todas del Partido Peronista."
              },
              {
                title: "Partido Peronista Femenino",
                content: "Eva Perón fundó el Partido Peronista Femenino en 1949, que movilizó a millones de mujeres en todo el país."
              },
              {
                title: "Legado Regional",
                content: "Argentina se convirtió en uno de los primeros países de América Latina en reconocer el sufragio femenino, inspirando movimientos similares en la región."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '1rem',
                  borderRadius: '6px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                  borderLeft: '3px solid #1e3a8a'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  y: isActive ? 0 : 20 
                }}
                transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
              >
                <h4 style={{ 
                  fontSize: '1.1rem', 
                  color: '#1e3a8a',
                  marginBottom: '0.5rem'
                }}>
                  {item.title}
                </h4>
                <p style={{ lineHeight: 1.5 }}>
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Quote section */}
        <motion.blockquote
          style={{
            borderLeft: '4px solid #1e3a8a',
            paddingLeft: '1.5rem',
            margin: '2rem 0',
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <p style={{ 
            fontSize: '1.2rem', 
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#333'
          }}>
            "Mujeres de mi Patria, recibo en este instante de manos del Gobierno de la Nación la ley que 
            consagra nuestros derechos cívicos. Y la recibo ante vosotras con la certeza de que lo hago 
            en nombre y representación de todas las mujeres argentinas."
          </p>
          <footer style={{ 
            marginTop: '1rem',
            fontSize: '0.9rem',
            color: '#666'
          }}>
            — Eva Perón, 23 de septiembre de 1947
          </footer>
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

export default WomensSuffrageEvent; 
