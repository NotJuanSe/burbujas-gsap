# Burbujas GSAP 🫧

Este es un mini proyecto que hice para jugar un rato con [GSAP](https://gsap.com/) y entender cómo funciona en la práctica, nada de producción ni nada serio, solo para probar la librería.

## ¿Qué hace?

Es una grilla de 121 "burbujas" (11x11). Cuando acercás el mouse, las burbujas cercanas se estiran hacia el puntero como si fueran imanes. Si le hacés click a una, toda la grilla explota con física real (gravedad, velocidad y ángulo random) y después se arma sola otra vez.

## Para qué lo hice

Quería probar cosas puntuales de GSAP:

- `gsap.to()` con **stagger en formato grid**, para que la explosión se propague desde el punto donde hiciste click hacia el resto de la grilla.
- El plugin **Physics2D**, que simula velocidad, ángulo y gravedad reales en vez de tener que animar manualmente con keyframes.
- Revertir una animación con `timeScale(-1.3)` en el `onComplete`, para que la explosión se "rebobine" sola.
- Easing elástico (`elastic.out`) para el efecto de imán cuando el mouse se acerca a una celda.

Todo esto corre 100% en el navegador, sin build, sin dependencias de npm: GSAP y el plugin Physics2D se cargan directo desde CDN (jsDelivr). Desde que Webflow compró GSAP todos los plugins son gratis, así que no hace falta licencia ni cuenta de Club GSAP para usar Physics2D.

## Cómo probarlo

Solo abrí `index.html` en el navegador. No necesita servidor ni instalar nada.

## Estructura

- `index.html` — la grilla y los `<script>` de GSAP
- `style.css` — estilos de las burbujas
- `script.js` — toda la lógica: seguimiento del mouse, efecto imán y la explosión con física

## Créditos

La idea del efecto está inspirada en un pen de [Zach Saucier](https://codepen.io/ZachSaucier) (miembro del equipo de GSAP), lo repliqué para entender cómo arma ese tipo de interacciones.
