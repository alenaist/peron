'use client';

import { motion } from 'framer-motion';
import styles from '../ScrollingBiography.module.css';

// Second Presidency event with custom structure and animations
const SecondPresidencyEvent = ({ isActive, isMobile }) => {
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
        {/* Year badge with custom animation */}
        <motion.div 
          className={styles.yearBadge}
          style={{ 
            backgroundColor: '#1e3a8a',
            border: '2px solid #1e40af',
            boxShadow: '0 4px 8px rgba(30, 58, 138, 0.3)'
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
            1952
            <span style={{ 
              display: 'block', 
              fontSize: '0.7rem', 
              fontWeight: 'normal',
              marginTop: '0.1rem'
            }}>
              4 de junio
            </span>
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
          Segunda Presidencia
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
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)'
          }}>
            <img 
              src="https://static01.nyt.com/images/2016/08/28/books/review/28KAISER/28KAISER-jumbo.jpg" 
              alt="Juan Domingo Perón durante su segunda presidencia" 
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
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#1e3a8a',
            marginBottom: '1rem',
            borderBottom: '1px solid rgba(30, 58, 138, 0.2)',
            paddingBottom: '0.5rem'
          }}>
            Contexto Histórico
          </h3>
          
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            El 4 de junio de 1952, Juan Domingo Perón asumió su segundo mandato presidencial tras ser 
            reelegido con el 62,5% de los votos en las elecciones del 11 de noviembre de 1951, las primeras 
            en las que participaron las mujeres argentinas gracias a la Ley de Sufragio Femenino.
          </p>
          
          <p style={{ lineHeight: 1.6 }}>
            Este segundo período presidencial estaría marcado por la muerte de Eva Perón, apenas un mes 
            después de la asunción, así como por crecientes tensiones políticas con la Iglesia Católica 
            y sectores militares, y por dificultades económicas que comenzaban a manifestarse.
          </p>
        </motion.div>
        
        {/* Key policies section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Left column - Second Five-Year Plan */}
          <motion.div
            style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(30, 58, 138, 0.1)'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : -20 
            }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: '#1e3a8a',
              marginBottom: '1rem'
            }}>
              Segundo Plan Quinquenal
            </h3>
            
            <p style={{ lineHeight: 1.6 }}>
              En diciembre de 1952, Perón presentó el Segundo Plan Quinquenal (1953-1957), que buscaba 
              profundizar la industrialización del país, pero con un mayor énfasis en la producción 
              agropecuaria para generar divisas. El plan también incluía objetivos de austeridad 
              económica para enfrentar las dificultades financieras que comenzaba a experimentar el país.
            </p>
          </motion.div>
          
          {/* Right column - Church conflict */}
          <motion.div
            style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(30, 58, 138, 0.1)'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : 20 
            }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: '#1e3a8a',
              marginBottom: '1rem'
            }}>
              Conflicto con la Iglesia
            </h3>
            
            <p style={{ lineHeight: 1.6 }}>
              A partir de 1954, se intensificó el conflicto entre el gobierno peronista y la Iglesia Católica. 
              Medidas como la legalización del divorcio, la eliminación de la enseñanza religiosa obligatoria 
              en las escuelas públicas y la propuesta de separación de la Iglesia y el Estado generaron una 
              fuerte oposición eclesiástica que contribuiría al clima de tensión previo al golpe de 1955.
            </p>
          </motion.div>
        </div>
        
        {/* Economic challenges section */}
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
            Desafíos Económicos
          </h3>
          
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            Durante este período, la economía argentina comenzó a mostrar signos de agotamiento del modelo 
            de industrialización por sustitución de importaciones. La escasez de divisas, la inflación 
            creciente y las dificultades para importar bienes de capital necesarios para la industria 
            llevaron a un cambio en la política económica.
          </p>
          
          <p style={{ lineHeight: 1.6 }}>
            En 1952, Perón implementó un plan de estabilización económica que incluía congelamiento de 
            salarios, restricción del crédito y limitación del gasto público. También buscó atraer inversiones 
            extranjeras, como el acuerdo con la empresa estadounidense Standard Oil en 1955, lo que generó 
            controversia entre sus seguidores más nacionalistas.
          </p>
        </motion.div>
        
        {/* Final section */}
        <motion.div
          style={{
            width: '100%',
            padding: '1.5rem',
            backgroundColor: 'rgba(30, 58, 138, 0.08)',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#1e3a8a',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            El Final del Mandato
          </h3>
          
          <p style={{ lineHeight: 1.6, marginBottom: '1rem', textAlign: 'center' }}>
            El creciente malestar en sectores de la sociedad, especialmente en la Iglesia Católica y las 
            Fuerzas Armadas, culminaría en el golpe de Estado del 16 de septiembre de 1955, conocido como 
            la "Revolución Libertadora", que derrocaría a Perón y lo forzaría a un largo exilio de 18 años.
          </p>
          
          <p style={{ lineHeight: 1.6, textAlign: 'center', fontWeight: 'bold' }}>
            Este segundo mandato, que no llegaría a completarse, marcaría el fin de la primera experiencia 
            peronista en el gobierno y el inicio de un período de proscripción del peronismo que duraría 
            hasta 1973.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SecondPresidencyEvent; 