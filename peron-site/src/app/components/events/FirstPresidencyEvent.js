'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../ScrollingBiography.module.css';

// First Presidency event with custom structure and animations
const FirstPresidencyEvent = ({ isActive, isMobile }) => {
  // Animation for tabs
  const tabVariants = {
    inactive: { 
      opacity: 0.7,
      y: 5,
      backgroundColor: 'rgba(30, 58, 138, 0.1)'
    },
    active: { 
      opacity: 1,
      y: 0,
      backgroundColor: 'rgba(30, 58, 138, 0.2)'
    }
  };
  
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);
  
  // Tab content data
  const tabContent = [
    {
      title: "Plan Quinquenal",
      content: (
        <div>
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            El Primer Plan Quinquenal (1947-1951) fue un programa económico y social que buscaba 
            industrializar el país y mejorar las condiciones de vida de los trabajadores.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            Incluyó la nacionalización de servicios públicos, la creación de empresas estatales, 
            el desarrollo de la industria nacional y la implementación de políticas de bienestar social.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '1.5rem' 
          }}>
            <div style={{ 
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(30, 58, 138, 0.1)',
              borderRadius: '8px',
              fontWeight: 'bold',
              color: '#1e3a8a',
              textAlign: 'center'
            }}>
              Industrialización + Justicia Social + Soberanía Económica
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Nacionalizaciones",
      content: (
        <div>
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            Durante su primera presidencia, Perón nacionalizó varios servicios públicos y empresas 
            estratégicas que estaban en manos extranjeras:
          </p>
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            {[
              "Ferrocarriles (1948)",
              "Teléfonos",
              "Gas",
              "Flota mercante",
              "Aerolíneas Argentinas (1950)",
              "Servicios portuarios"
            ].map((item, index) => (
              <li key={index} style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div style={{ 
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#1e3a8a',
                  flexShrink: 0
                }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Derechos Sociales",
      content: (
        <div>
          <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            El gobierno de Perón implementó numerosas medidas para mejorar las condiciones de vida 
            y trabajo de los sectores populares:
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {[
              "Aguinaldo (sueldo anual complementario)",
              "Vacaciones pagas",
              "Indemnización por despido",
              "Tribunales de trabajo",
              "Jubilaciones y pensiones",
              "Acceso a la vivienda",
              "Colonias de vacaciones para trabajadores",
              "Hospitales y centros de salud"
            ].map((item, index) => (
              <div key={index} style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.05)',
                padding: '0.75rem',
                borderRadius: '4px',
                borderLeft: '3px solid #1e3a8a'
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

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
        {/* Presidential seal */}
    {/* Year badge */}
    <motion.div 
              className={styles.yearBadge}
              style={{ 
              
              }}
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              1946
            </motion.div>
        
        {/* Title */}
        <motion.h2 
          className={styles.eventTitle}
          style={{ 
            color: '#1e3a8a',
            textAlign: 'center',
            fontSize: '1.8rem',
            marginBottom: '1.5rem'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : -20 
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Primera Presidencia
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          style={{ 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            textAlign: 'center',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 20 
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          En 1946, Juan Domingo Perón gana las elecciones presidenciales y asume su primer mandato,
          que se extendería hasta 1952. Durante este período, implementó políticas de justicia social,
          soberanía política e independencia económica.
        </motion.p>
        
        {/* Presidential image */}
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
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div style={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
          }}>
            <img 
              src="https://www.thoughtco.com/thmb/Wk38ArPp8RBPR9n6K28M-GgM6FA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-515447052-dcd735e5f5a84a9c9a2c10ff346c2dbc.jpg" 
              alt="Juan Domingo Perón durante su primera presidencia" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
            <div style={{
              padding: '0.75rem',
              backgroundColor: 'rgba(30, 58, 138, 0.1)',
              textAlign: 'center',
              fontStyle: 'italic',
              fontSize: '0.9rem'
            }}>
              Juan Domingo Perón durante su primera presidencia (1946-1952)
            </div>
          </div>
        </motion.div>
        
        {/* Tabs section */}
        <motion.div
          style={{
            width: '100%',
            marginTop: '1rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Tab navigation */}
          <div style={{
            display: 'flex',
            borderBottom: '2px solid #1e3a8a',
            marginBottom: '1.5rem'
          }}>
            {tabContent.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  background: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  marginRight: '0.5rem',
                  color: '#1e3a8a'
                }}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === index ? "active" : "inactive"}
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>
          
          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(30, 58, 138, 0.05)',
              borderRadius: '8px'
            }}
          >
            {tabContent[activeTab].content}
          </motion.div>
        </motion.div>
        
        {/* Legacy section */}
        <motion.div
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(30, 58, 138, 0.1)',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'rgba(30, 58, 138, 0.1)',
            zIndex: 0
          }} />
          
          <h3 style={{ 
            fontSize: '1.3rem', 
            color: '#1e3a8a',
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 1
          }}>
            El Legado de la Primera Presidencia
          </h3>
          
          <p style={{ 
            lineHeight: 1.6,
            position: 'relative',
            zIndex: 1
          }}>
            La primera presidencia de Perón transformó profundamente la sociedad argentina, 
            estableciendo las bases del movimiento peronista y su doctrina de justicia social, 
            soberanía política e independencia económica. Este período sentó las bases para la 
            construcción de un Estado de bienestar y consolidó la identidad política del peronismo.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FirstPresidencyEvent; 