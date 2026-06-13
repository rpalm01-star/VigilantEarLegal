# Soporte de VigilantEar 👂🛰️

Gracias por usar **VigilantEar**. Nuestra misión es proporcionar una mayor conciencia situacional a través de la detección avanzada de eventos acústicos y alertas de emergencia en tiempo real.

## Contáctenos

Si experimenta problemas técnicos, tiene preguntas sobre la precisión de las alertas o desea proporcionar comentarios, comuníquese con nosotros por correo electrónico a:

**Correo Electrónico:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Preguntas Frecuentes

### ¿Cómo funciona VigilantEar en segundo plano?

VigilantEar escucha solo cuando usted activa la monitorización. Funciona eficientemente en segundo plano y envía vibraciones o alertas visuales cuando detecta sonidos importantes.

### ¿VigilantEar agota mi batería?

No. VigilantEar usa muy poca batería. Optimizamos la aplicación cuidadosamente para que pueda ejecutarla todo el día sin preocupaciones.

Aquí está exactamente cómo mantenemos el uso de la batería bajo:  
- Usamos modelos de aprendizaje automático eficientes en el dispositivo que no necesitan casi nada de energía.  
- Dejamos de escuchar automáticamente cuando la aplicación no está en primer plano si usted desactiva todas las alertas en el panel de configuración.
- Evitamos casi todas las llamadas de datos en la nube y mantenemos el procesamiento en su teléfono.  
- Agregamos aceleración inteligente (throttling) para reducir los requisitos de procesamiento.
- Nuestros algoritmos son matemáticas de precisión que se ejecutan fuera del hilo de la pantalla y se ejecutan solo cuando es necesario.

### ¿Por qué la aplicación no detecta sirenas?

Asegúrese de haber otorgado permisos de **Micrófono** en la Configuración de su teléfono. VigilantEar requiere acceso activo al micrófono para procesar las firmas acústicas. Además, asegúrese de que su dispositivo no esté en "Modo Silencioso" si desea respuesta háptica (vibración).

### ¿Qué tan precisas son las alertas meteorológicas?

VigilantEar consulta los canales oficiales del gobierno CAP (Protocolo de Alerta Común). Las alertas son tan precisas como los datos proporcionados por el Servicio Meteorológico Nacional y otras agencias internacionales. La simulación de ubicación o los retrasos en la red pueden afectar ocasionalmente la frecuencia de actualización.

### ¿La aplicación funciona en segundo plano?

Sí, VigilantEar está diseñada para monitorear eventos acústicos críticos mientras está en segundo plano, siempre que los permisos necesarios estén habilitados.

### ¿Qué controlan los interruptores de alerta?

Los interruptores de alerta principales en el **menú de configuración** controlan si VigilantEar le envía una notificación de alerta cuando detecta sonidos coincidentes.  

Estos interruptores solo afectan las notificaciones enviadas mientras la aplicación está en segundo plano o no está activamente abierta. **No** afectan la visualización de alertas en pantalla cuando la aplicación está abierta y en primer plano.

Los interruptores principales son:  
- **Alertas de Sirena** — Sirenas de vehículos de emergencia (policía, bomberos, ambulancias, etc.)  
- **Alarmas** — Detectores de humo y alarmas de incendio  
- **Golpes** — Golpes en la puerta y timbres
- **Alertas Meteorológicas** — Advertencias de clima severo de fuentes gubernamentales oficiales  
- **Alertas de Personas** — Personas cercanas (en entornos tranquilos)  

### ¿Cómo administro las Fuentes de Datos externas y Shazam?

Además de las alertas acústicas principales basadas en el micrófono, puede habilitar canales de datos externos adicionales en el menú de **Fuentes de Datos (Data Sources)**:
- **Shazam (Identificación de Música)** — Identificación de música ambiental en tiempo real mapeada dinámicamente en su radar espacial.
- **Canales Meteorológicos Externos** — Fuentes de datos meteorológicos internacionales adicionales como MeteoGate (Europa) y canales CMA/MEM (China).  

### ¿Cómo deshabilito el micrófono cuando la aplicación no está en primer plano?

La aplicación deja de usar el micrófono completamente en modo de segundo plano cuando *todos* los interruptores de alerta están apagados a través del panel de configuración de la aplicación. No escucha ni envía notificaciones en segundo plano cuando todos los interruptores están deshabilitados. Cuando al menos una alerta está habilitada, el micrófono está habilitado para la recopilación de sonido en segundo plano.

### ¿Por qué la aplicación no detecta constantemente *todos* los sonidos?

Los sonidos agudos como las alarmas y las sirenas de los camiones de bomberos son relativamente fáciles de detectar para el motor de procesamiento ML de sonido. Los sonidos de banda ancha (como motores de automóviles o neumáticos) son más difíciles, pero hacemos un trabajo adecuado (aunque imperfecto) teniendo en cuenta las capacidades limitadas del teléfono en sí. Los algoritmos de Diferencia de Tiempo de Llegada (TDOA) solo son precisos dada la corta distancia entre los micrófonos.

---

*VigilantEar es una herramienta de accesibilidad construida con cuidado. Por favor, úsela responsablemente.* 

Hecho con ❤️ para la comunidad S/HH y la investigación acústica.

© 2026 Wingdings, Inc.
Todos los derechos reservados
