# Soporte de Vigilant Ear 👂🛰️

Gracias por usar **Vigilant Ear**. Nuestra misión es proporcionar una mayor conciencia situacional mediante la detección avanzada de eventos acústicos y alertas de emergencia en tiempo real.

## Contáctanos

Si experimentas problemas técnicos, tienes preguntas sobre la precisión de las alertas o deseas enviar comentarios, contáctanos por correo electrónico en:

**Correo electrónico:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Preguntas frecuentes

### ¿Cómo funciona Vigilant Ear en segundo plano?

Vigilant Ear escucha solo cuando activas el monitoreo. Funciona de manera eficiente en segundo plano y envía vibraciones o alertas visuales cuando detecta sonidos importantes.

### ¿Vigilant Ear consume mucha batería?

No. Vigilant Ear usa muy poca batería. Optimizamos cuidadosamente la app para que puedas usarla todo el día sin preocupaciones.

Aquí está exactamente cómo mantenemos el consumo de batería bajo:  
- Usamos modelos eficientes de aprendizaje automático en el dispositivo que requieren casi ninguna energía.  
- Dejamos de escuchar automáticamente cuando la app no está en primer plano si desactivas todas las alertas en el panel de configuración.
- Evitamos casi todas las llamadas de datos a la nube y mantenemos el procesamiento en tu teléfono.  
- Agregamos un control inteligente para reducir los requisitos de procesamiento.
- Nuestros algoritmos son matemáticas de precisión que se ejecutan fuera del hilo de visualización y solo cuando se necesitan.

### ¿Por qué la app no detecta sirenas?

Asegúrate de haber otorgado permisos de **Micrófono** en la Configuración de tu teléfono. Vigilant Ear requiere acceso activo al micrófono para procesar firmas acústicas. Además, asegúrate de que tu dispositivo no esté en «Modo Silencio» si deseas recibir respuesta háptica.

### ¿Qué tan precisas son las alertas meteorológicas?

Vigilant Ear consulta fuentes CAP (Common Alerting Protocol) oficiales del gobierno. Las alertas son tan precisas como los datos proporcionados por el Servicio Meteorológico Nacional y otras agencias internacionales. La simulación de ubicación o los retrasos de red pueden ocasionalmente afectar la frecuencia de actualización.

### ¿La app funciona en segundo plano?

Sí, Vigilant Ear está diseñado para monitorear eventos acústicos críticos mientras está en segundo plano, siempre que los permisos necesarios estén habilitados.

### ¿Qué controlan los interruptores de alerta?

Los interruptores de alerta principales en el **menú de configuración** controlan si Vigilant Ear te envía una notificación de alerta cuando detecta sonidos coincidentes.  

Estos interruptores solo afectan las notificaciones enviadas mientras la app está en segundo plano o no está activamente abierta. **No** afectan la visualización de alertas en pantalla cuando la app está abierta y en primer plano.

Los interruptores principales son:  
- **Alertas de sirena** — Sirenas de vehículos de emergencia (policía, bomberos, ambulancia, etc.)  
- **Alarmas** — Detectores de humo y alarmas de incendio  
- **Golpes** — Golpes en la puerta y timbres
- **Alertas meteorológicas** — Avisos de clima severo de fuentes oficiales del gobierno  
- **Alertas de personas** — Personas cercanas (en entornos silenciosos)  

### ¿Qué es gratuito y qué es Premium?

Las funciones de seguridad básicas son **gratuitas, para siempre**: alertas de sonido local (sirenas, alarmas, golpes y timbres, una persona cercana) y alertas de clima severo de **NWS** para EE. UU.

Un desbloqueo **Premium** único — con una prueba gratuita para comenzar, y **no** una suscripción — añade Speaker Mode, Speaker Auto-Translate, Constellation, Music ID (Shazam) y las fuentes de clima internacionales. Todo sigue ejecutándose en tu dispositivo; Premium solo cambia qué funciones están desbloqueadas, nunca a dónde va tu audio.

### ¿Cómo administro Shazam y las fuentes de clima internacionales?

Estos forman parte de Premium y se encuentran en el menú de **Funciones Premium**:
- **Shazam (Music ID)** — Identificación de música ambiental en tiempo real, mapeada dinámicamente en tu radar espacial.
- **Fuentes de clima internacionales** — Fuentes adicionales más allá de la **NWS** gratuita de EE. UU.: Europa (MeteoGate) y China (CMA).  

### ¿Cómo desactivo el micrófono cuando la app no está en primer plano?

La app deja de usar el micrófono completamente en modo segundo plano cuando *todos* los interruptores de alerta están desactivados mediante el panel de configuración de la app. No escucha ni envía notificaciones en segundo plano cuando todos los interruptores están desactivados. Cuando al menos una alerta está habilitada, el micrófono se activa para la recopilación de sonido en segundo plano.

### ¿Por qué la app no detecta *todos* los sonidos de manera consistente?

Los sonidos agudos como alarmas y sirenas de camiones de bomberos son relativamente fáciles de detectar para el motor de procesamiento de ML de sonido. Los sonidos de banda ancha (como motores de automóviles o neumáticos) son más difíciles, pero hacemos un trabajo adecuado (aunque imperfecto) considerando las capacidades limitadas del teléfono en sí. Los algoritmos de Tiempo de Diferencia de Llegada (TDOA) son solo tan precisos como la corta distancia entre micrófonos lo permite.

---

*Vigilant Ear es una herramienta de accesibilidad construida con cuidado. Úsala responsablemente.* 

Hecho con ❤️ para la comunidad S/HH y la investigación acústica.

© 2026 Wingdings, Inc.
All rights reserved
