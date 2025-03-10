# Eventos Biográficos de Juan Domingo Perón

Este directorio contiene componentes individuales para cada evento en la biografía de Juan Domingo Perón.

## Estructura

- `EventData.js`: Contiene los datos básicos de cada evento para la línea de tiempo y navegación.
- Componentes individuales (ej. `BirthEvent.js`, `EvaDeathEvent.js`): Cada evento tiene su propio componente con estructura y animaciones personalizadas.

## Cómo Agregar un Nuevo Evento

Para crear un nuevo evento personalizado:

1. Crea un nuevo archivo en este directorio con el nombre del evento (ej. `MilitaryEvent.js`).
2. Importa los módulos necesarios:
   ```javascript
   'use client';
   
   import { motion } from 'framer-motion';
   import styles from '../ScrollingBiography.module.css';
   ```

3. Crea un componente con la siguiente estructura básica:
   ```javascript
   const MilitaryEvent = ({ isActive, isMobile }) => {
     return (
       <motion.section 
         className={`${styles.eventSection} ${styles.right} ${styles.military}`}
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
         
         {/* Custom content container */}
         <div className={styles.eventContent}>
           {/* Año */}
           <motion.div className={styles.yearBadge}>
             1911
           </motion.div>
           
           {/* Título */}
           <motion.h2 className={styles.eventTitle}>
             Ingreso al Ejército
           </motion.h2>
           
           {/* Contenido personalizado */}
           {/* Agrega aquí tu contenido personalizado con animaciones únicas */}
         </div>
       </motion.section>
     );
   };
   
   export default MilitaryEvent;
   ```

4. Personaliza el contenido con tu propio diseño, estructura y animaciones.

5. Actualiza el componente `ScrollingBiography.js` para incluir tu nuevo evento:
   ```javascript
   // Importa el nuevo componente
   import MilitaryEvent from './events/MilitaryEvent';
   
   // Agrega un nuevo caso en la función renderEventComponent
   switch (eventId) {
     case 'birth':
       return <BirthEvent isActive={currentSection === sectionIndex} isMobile={isMobile} />;
     case 'military': // Agrega tu nuevo caso
       return <MilitaryEvent isActive={currentSection === sectionIndex} isMobile={isMobile} />;
     case 'eva-death':
       return <EvaDeathEvent isActive={currentSection === sectionIndex} isMobile={isMobile} />;
     // ...
   }
   ```

## Ventajas de Esta Estructura

- **Control Total**: Cada evento puede tener su propia estructura HTML, estilos y animaciones.
- **Flexibilidad**: Puedes crear diseños únicos para eventos importantes.
- **Mantenibilidad**: Los cambios en un evento no afectan a los demás.
- **Rendimiento**: Solo se renderiza el componente activo.

## Consejos para las Animaciones

- Usa `isActive` para controlar cuándo se muestran las animaciones.
- Ajusta los delays para crear secuencias de animación.
- Experimenta con diferentes tipos de animaciones de Framer Motion.
- Considera la experiencia móvil usando el prop `isMobile`.

## Ejemplo de Animación Avanzada

```javascript
<motion.div
  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
  animate={{ 
    opacity: isActive ? 1 : 0, 
    scale: isActive ? 1 : 0.8,
    rotateY: isActive ? 0 : 90
  }}
  transition={{ 
    duration: 0.8, 
    delay: 0.5,
    type: "spring",
    stiffness: 100
  }}
>
  {/* Tu contenido aquí */}
</motion.div>
``` 