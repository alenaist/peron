# Custom Animations and Content Guide

This document explains how to add custom animations and content to each section of the scrolling biography.

## Overview

The scrolling biography supports custom animations and content for each event section. You can add:

- Images with custom positions and animations
- Quotes with custom positions and animations
- Background shapes and elements
- Custom animation timing and effects for text elements

## How to Add Custom Content

### 1. Add Images to the Public Directory

Place your images in the `/public/images/` directory. For example:
- `/public/images/peron-baby.jpg`
- `/public/images/military-academy.jpg`

### 2. Configure Custom Content in the Event Data

Each event in the `biographyEvents` array (in `ScrollingBiography.js`) can have a `customContent` property with the following structure:

```javascript
customContent: {
  // Images to display
  images: [
    { 
      src: '/images/peron-baby.jpg',  // Path to the image
      alt: 'Perón de bebé',           // Alt text for accessibility
      position: 'right',              // Position on the screen
      animationType: 'fadeIn',        // Animation type
      animationDelay: 0.3             // Delay before animation starts
    }
  ],
  
  // Quotes to display
  quotes: [
    { 
      text: "Quote text here",        // The quote text
      author: "Author name",          // Optional author attribution
      position: 'bottom-left',        // Position on the screen
      animationType: 'slideFromLeft', // Animation type
      animationDelay: 0.5             // Delay before animation starts
    }
  ],
  
  // Background elements
  backgroundElements: [
    { 
      type: 'shape',                  // Type of element
      shape: 'circle',                // Shape type (circle or rectangle)
      color: 'rgba(225, 29, 72, 0.1)',// Background color (with transparency)
      size: '300px',                  // Size (single value for circle, 'width height' for rectangle)
      position: 'top-right',          // Position on the screen
      animationType: 'scale',         // Animation type
      animationDelay: 0.2             // Delay before animation starts
    }
  ],
  
  // Custom animations for text elements
  customAnimations: {
    title: { 
      type: 'fadeIn',                 // Animation type
      duration: 0.7,                  // Animation duration in seconds
      delay: 0.2                      // Delay before animation starts
    },
    description: { 
      type: 'slideFromLeft',          // Animation type
      duration: 0.5,                  // Animation duration in seconds
      delay: 0.4                      // Delay before animation starts
    }
  }
}
```

## Available Positions

You can use the following position values:

- `left`: Left side, vertically centered
- `right`: Right side, vertically centered
- `top`: Top, horizontally centered
- `bottom`: Bottom, horizontally centered
- `top-left`: Top left corner
- `top-right`: Top right corner
- `bottom-left`: Bottom left corner
- `bottom-right`: Bottom right corner
- `center`: Center of the screen

## Available Animation Types

You can use the following animation types:

- `fadeIn`: Simple fade in
- `slideFromLeft`: Slide in from the left
- `slideFromRight`: Slide in from the right
- `slideFromTop`: Slide in from the top
- `slideFromBottom`: Slide in from the bottom
- `scale`: Scale up from nothing
- `rotate`: Rotate in
- `bounce`: Bounce in with spring physics
- `elastic`: Elastic scale in with spring physics

## Example

Here's an example of a fully configured event with custom content:

```javascript
{
  id: 'birth',
  year: '1895',
  title: 'Nacimiento',
  description: 'Juan Domingo Perón nace el 8 de octubre de 1895 en Lobos, provincia de Buenos Aires, Argentina.',
  details: 'Hijo de Mario Tomás Perón y Juana Sosa Toledo. Su familia tenía ascendencia española, italiana y británica. Pasó su infancia entre Lobos y la Patagonia argentina.',
  category: 'personal',
  alignment: 'left',
  customContent: {
    images: [
      { src: '/images/peron-baby.jpg', alt: 'Perón de bebé', position: 'right', animationType: 'fadeIn', animationDelay: 0.3 },
      { src: '/images/lobos-house.jpg', alt: 'Casa en Lobos', position: 'bottom-right', animationType: 'slideFromBottom', animationDelay: 0.6 }
    ],
    quotes: [
      { text: "La infancia de Perón transcurrió entre Lobos y la Patagonia.", author: "Biografía oficial", position: 'bottom-left', animationType: 'fadeIn', animationDelay: 0.9 }
    ],
    backgroundElements: [
      { type: 'shape', shape: 'circle', color: 'rgba(225, 29, 72, 0.1)', size: '300px', position: 'top-right', animationType: 'scale', animationDelay: 0.2 }
    ],
    customAnimations: {
      title: { type: 'bounce', duration: 0.7, delay: 0.2 },
      description: { type: 'slideFromLeft', duration: 0.5, delay: 0.4 }
    }
  }
}
```

## Tips for Creating Great Animations

1. **Stagger Delays**: Use increasing delay values to create a staggered animation effect.
2. **Subtle Background Elements**: Use low opacity background shapes to add depth without distracting.
3. **Consistent Theme**: Use consistent animation types for similar elements across different sections.
4. **Mobile Considerations**: Remember that elements will be smaller on mobile, so keep text brief and images focused.
5. **Performance**: Don't add too many animated elements to a single section to avoid performance issues.

## Troubleshooting

- If images don't appear, check that the path is correct and the image exists in the public directory.
- If animations don't work, check that you're using a valid animation type.
- For positioning issues, try adjusting the position value or use custom CSS for more precise control. 