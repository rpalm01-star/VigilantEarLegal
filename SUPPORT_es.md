# Soporte de Vigilant Ear 👂🛰️

Gracias por usar **Vigilant Ear**. Nuestra misión es proporcionar una mayor conciencia situacional a través de la detección avanzada de eventos acústicos y alertas de emergencia en tiempo real.

## Contáctenos

Si tiene problemas técnicos, tiene preguntas sobre la precisión de las alertas o desea dar su opinión, comuníquese con nosotros por correo electrónico a:

**Correo electrónico:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Preguntas Frecuentes

### ¿Cómo funciona Vigilant Ear en segundo plano?

Vigilant Ear escucha cuando el monitoreo está activado y se otorgan los permisos necesarios. Funciona de manera eficiente en segundo plano y puede enviar hápticos, alertas en pantalla, notificaciones automáticas opcionales y (cuando está emparejado) indicaciones de dirección de Apple Watch cuando detecta sonidos importantes.

### ¿Vigilant Ear agota mi batería?

No. Vigilant Ear está diseñado para usar poca batería para que pueda dejarlo encendido.

Así es como mantenemos bajo el uso de la batería:  
- Modelos eficientes de aprendizaje automático en el dispositivo que se ejecutan en el Neural Engine cuando está disponible.  
- La escucha en segundo plano hiberna cuando *todas* las categorías de alerta están apagadas.  
- Casi todo el procesamiento permanece en su teléfono; la red se limita a mapas, fuentes públicas de clima, identificación de música opcional y compras.  
- La limitación inteligente reduce el trabajo cuando el entorno acústico es silencioso.  
- Las matemáticas pesadas se ejecutan fuera del hilo de visualización y solo cuando es necesario.

### ¿Por qué la aplicación no detecta las sirenas?

Asegúrese de haber otorgado permiso de **Micrófono** en la Configuración de iOS. Vigilant Ear necesita el micrófono para procesar firmas acústicas. Confirme que la **Sirena** (o la categoría correspondiente) esté habilitada en Preferencias, y que se permitieron las notificaciones si espera alertas automáticas. Los hápticos pueden ser más silenciosos si el dispositivo está en Modo Silencioso dependiendo de la configuración del sistema.

### ¿Qué tan precisas son las alertas meteorológicas?

Vigilant Ear consulta fuentes oficiales del gobierno CAP (Common Alerting Protocol). Las alertas son tan precisas como los datos proporcionados por el Servicio Meteorológico Nacional y otras agencias internacionales (incluyendo MeteoGate de Europa, CMA de China y KMA de Corea). La simulación de ubicación, las brechas de cobertura o los retrasos de la red pueden afectar ocasionalmente la frecuencia de actualización.

### ¿La aplicación funciona en segundo plano?

Sí. Vigilant Ear está diseñado para monitorear eventos acústicos críticos mientras está en segundo plano cuando los permisos necesarios están habilitados y al menos una categoría de alerta está activada.

### ¿Qué controlan los interruptores de alerta?

Los interruptores de categorías de alertas en **Preferencias** controlan si Vigilant Ear trata esos sonidos como dignos de alerta para la **entrega de notificaciones** (y entrega relacionada) cuando se detectan sonidos coincidentes.

Estos interruptores afectan principalmente la entrega en **segundo plano / notificaciones**. **No** desactivan la visualización del mapa y el radar en pantalla cuando la aplicación está abierta en primer plano.

Las categorías típicas incluyen:  
- **Alertas de Sirena** — Sirenas de vehículos de emergencia (policía, bomberos, ambulancia, etc.)  
- **Alarmas** — Detectores de humo y alarmas de incendio  
- **Golpes** — Golpes en la puerta y timbres  
- **Bebé** — Llanto de bebé (cuando está habilitado)  
- **Alertas Meteorológicas** — Advertencias de clima severo de fuentes oficiales del gobierno CAP  
- **Alertas de Personas** — Personas cercanas (a menudo es mejor en entornos más silenciosos; puede permanecer como opción voluntaria)

El **permiso de notificación** es el interruptor maestro a nivel del sistema. Si deniega las notificaciones en la pantalla de verificación de inicio (o más tarde en la Configuración de iOS), no recibirá alertas automáticas incluso si las categorías individuales están activadas. Las alertas en pantalla mientras la aplicación está abierta aún pueden aparecer.

### ¿Qué es gratis y qué es Power Pack+?

El núcleo de seguridad es **gratis, para siempre**:

- Alertas locales de sonido (sirenas, alarmas, golpes/timbres, bebé, persona cercana) con entrega en pantalla y notificación automática opcional  
- Subtítulos en vivo del **Modo Orador** (en el dispositivo; direccional donde el hardware lo permita)  
- Fuentes CAP de clima severo para su región — **NWS** de EE. UU., **MeteoGate** de Europa, **CMA** de China y **KMA** de Corea  
- Alertas de práctica de la **Zona de Pruebas** (con marca de agua para que nunca parezcan una emergencia real)  
- Señales de dirección en la aplicación complementaria de **Apple Watch** y **Live Activity** (Pantalla de bloqueo / Dynamic Island / Smart Stack del Watch), donde estén disponibles  

**Power Pack+** es un desbloqueo único (**no una suscripción**) con una **prueba gratuita de 90 días**. Agrega:

- **Speaker Auto-Translate** — traducción en el dispositivo del habla cercana a su idioma  
- **Constellation** — audición compartida de múltiples iPhone a través de Ultra-Wideband  
- **Identificación de Música** — reconocimiento de canciones ShazamKit  

Todo para el reconocimiento aún se ejecuta en su dispositivo; Power Pack+ solo cambia qué funciones están desbloqueadas, nunca a dónde se envía el audio sin procesar para su análisis.

### ¿Cómo administro Shazam y la traducción?

Estos se encuentran bajo **Power Pack+** en la aplicación (destellos del ventilador de acción / menú):

- **Shazam (Identificación de Música)** — identificación de música ambiental en el radar espacial (Power Pack+)  
- **Speaker Auto-Translate** — traduce los subtítulos en vivo a su idioma (Power Pack+)  

Las fuentes de clima severo son **gratuitas** y se gestionan con las preferencias de clima / alerta — no son un complemento de Power Pack+.

### ¿Cómo desactivo el micrófono cuando la aplicación no está en primer plano?

La aplicación deja de usar el micrófono para el monitoreo en segundo plano cuando *todos* los interruptores de categorías de alerta están apagados en Preferencias. No escucha ni envía notificaciones de sonido en segundo plano cuando todas las categorías están deshabilitadas. Cuando al menos una alerta está habilitada, el micrófono puede usarse para la recolección de sonido en segundo plano.

También puede revocar el acceso al Micrófono por completo en la Configuración de iOS (eso detiene todas las funciones acústicas, incluida la escucha en primer plano).

### ¿Por qué la aplicación no detecta consistentemente *todos* los sonidos?

Los sonidos agudos como las alarmas y las sirenas de los camiones de bomberos son relativamente fáciles de detectar para el motor de ML de sonido. Los sonidos de banda ancha (como los motores de los automóviles o los neumáticos) son más difíciles; hacemos un trabajo adecuado pero imperfecto dados los límites de hardware del teléfono. Los algoritmos de diferencia de tiempo de llegada (TDOA) son solo un poco precisos dada la corta distancia entre los micrófonos. La dirección necesita un iPhone con micrófono estéreo; los iPads están enfocados en subtítulos sin dirección completa.

### ¿Cómo funcionan la Zona de Pruebas y las alertas de práctica?

Abra la **Zona de Pruebas** (varita) para probar los sonidos de práctica de Hogar y Calle y otras vistas previas. Los eventos de práctica están claramente marcados como **PREVIEW** para que nunca pretendan ser una emergencia real. Cerrar la Zona de Pruebas elimina el estado de práctica (incluida la suplantación temporal de GPS utilizada en algunas demostraciones).

---

*Vigilant Ear es una herramienta de accesibilidad construida con cuidado. Por favor, úsela de manera responsable.* 

Hecho con ❤️ para la comunidad Sorda / con pérdida auditiva y la investigación acústica.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Todos los derechos reservados.<br />
  Patente Pendiente
</p>
