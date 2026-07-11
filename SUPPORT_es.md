# Soporte de Vigilant Ear 👂🛰️

Gracias por usar **Vigilant Ear**. Nuestra misión es proporcionar una mayor conciencia situacional mediante la detección avanzada de eventos acústicos y alertas de emergencia en tiempo real.

## Contáctanos

Si experimentas problemas técnicos, tienes preguntas sobre la precisión de las alertas o deseas enviar comentarios, contáctanos por correo electrónico en:

**Correo electrónico:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Preguntas frecuentes

### ¿Cómo funciona Vigilant Ear en segundo plano?

Vigilant Ear escucha cuando el monitoreo está activado y se han concedido los permisos necesarios. Funciona de manera eficiente en segundo plano y puede enviar hápticas, alertas en pantalla, notificaciones push opcionales y (cuando está emparejado) señales de dirección en Apple Watch cuando detecta sonidos importantes.

### ¿Vigilant Ear agota mi batería?

No. Vigilant Ear está diseñado para usar poca batería de modo que puedas dejarlo activado.

Así mantenemos bajo el consumo de batería:  
- Modelos eficientes de aprendizaje automático en el dispositivo que se ejecutan en el Neural Engine cuando está disponible.  
- La escucha en segundo plano hiberna cuando *todas* las categorías de alertas están desactivadas.  
- Casi todo el procesamiento permanece en tu teléfono; la red se limita a mapas, fuentes públicas de clima, ID musical opcional y compras.  
- El throttling inteligente reduce el trabajo cuando la escena acústica está en silencio.  
- La matemática pesada se ejecuta fuera del hilo de visualización y solo cuando se necesita.

### ¿Por qué la app no detecta sirenas?

Asegúrate de haber otorgado el permiso de **Micrófono** en Configuración de iOS. Vigilant Ear necesita el micrófono para procesar firmas acústicas. Confirma que **Sirena** (o la categoría correspondiente) esté activada en Preferencias, y que se hayan permitido las notificaciones si esperas alertas push. Las hápticas pueden ser más silenciosas si el dispositivo está en Modo Silencio según la configuración del sistema.

### ¿Qué tan precisas son las alertas meteorológicas?

Vigilant Ear consulta fuentes oficiales gubernamentales CAP (Common Alerting Protocol). Las alertas son tan precisas como los datos proporcionados por el National Weather Service y otras agencias internacionales (incluidas MeteoGate de Europa, CMA de China y KMA de Corea). La simulación de ubicación, las brechas de cobertura o los retrasos de red pueden afectar ocasionalmente la frecuencia de actualización.

### ¿La app funciona en segundo plano?

Sí. Vigilant Ear está diseñado para monitorear eventos acústicos críticos en segundo plano cuando los permisos necesarios están habilitados y al menos una categoría de alertas está activada.

### ¿Qué controlan los interruptores de alertas?

Los interruptores de categorías de alertas en **Preferencias** controlan si Vigilant Ear trata esos sonidos como dignos de alerta para **notificaciones** (y entrega relacionada) cuando se detectan sonidos coincidentes.

Estos interruptores afectan principalmente la entrega en **segundo plano / notificaciones**. **No** desactivan la visualización del mapa y el radar en pantalla cuando la app está abierta en primer plano.

Las categorías típicas incluyen:  
- **Alertas de sirena** — Sirenas de vehículos de emergencia (policía, bomberos, ambulancia, etc.)  
- **Alarmas** — Detectores de humo y alarmas de incendio  
- **Golpes** — Golpes en la puerta y timbres  
- **Bebé** — Llanto de bebé (cuando está activado)  
- **Alertas meteorológicas** — Advertencias de clima severo de fuentes CAP oficiales gubernamentales  
- **Alertas de personas** — Personas cercanas (a menudo mejor en entornos más silenciosos; puede permanecer como opt-in)

El **permiso de notificaciones** es el interruptor maestro a nivel del sistema. Si deniegas las notificaciones en la pantalla de verificación al inicio (o más tarde en Configuración de iOS), no recibirás alertas push aunque las categorías individuales estén activadas. Las alertas en pantalla mientras la app está abierta aún pueden aparecer.

### ¿Qué es gratis y qué es Power Pack+?

El núcleo de seguridad es **gratis, para siempre**:

- Alertas de sonido local (sirenas, alarmas, golpes/timbres, bebé, persona cercana) con entrega en pantalla y push opcional  
- Subtítulos en vivo de **Speaker Mode** (en el dispositivo; direccionales donde el hardware lo permite)  
- Fuentes CAP de clima severo para tu región — **NWS** de EE. UU., **MeteoGate** de Europa, **CMA** de China y **KMA** de Corea  
- Alertas de práctica de **Demo Mode** (con marca de agua para que nunca parezcan una emergencia en vivo)  
- Señales de dirección del compañero de **Apple Watch** y **Live Activity** (pantalla de bloqueo / Dynamic Island / Smart Stack del Watch), donde estén disponibles  

**Power Pack+** es un desbloqueo de un solo pago (**no es una suscripción**) con una **prueba gratuita de 90 días**. Añade:

- **Speaker Auto-Translate** — traducción en el dispositivo del habla cercana a tu idioma  
- **Constellation** — escucha compartida multiphone a través de Ultra-Wideband  
- **Music ID** — reconocimiento de canciones con ShazamKit  

Todo el reconocimiento sigue ejecutándose en tu dispositivo; Power Pack+ solo cambia qué funciones están desbloqueadas, nunca a dónde se envía el audio en bruto para análisis.

### ¿Cómo gestiono Shazam y la traducción?

Estas se encuentran bajo **Power Pack+** en la app (destellos / menú del abanico de acciones):

- **Shazam (Music ID)** — identificación de música ambiental en el radar espacial (Power Pack+)  
- **Speaker Auto-Translate** — traduce los subtítulos en vivo a tu idioma (Power Pack+)  

Las fuentes de clima severo son **gratis** y se gestionan con las preferencias de clima / alertas — no son un complemento de Power Pack+.

### ¿Cómo desactivo el micrófono cuando la app no está en primer plano?

La app deja de usar el micrófono para el monitoreo en segundo plano cuando *todos* los interruptores de categorías de alertas están desactivados en Preferencias. No escucha ni envía notificaciones de sonido en segundo plano cuando todas las categorías están deshabilitadas. Cuando al menos una alerta está activada, el micrófono puede usarse para la recolección de sonido en segundo plano.

También puedes revocar por completo el acceso al Micrófono en Configuración de iOS (eso detiene todas las funciones acústicas, incluida la escucha en primer plano).

### ¿Por qué la app no detecta de forma consistente *todos* los sonidos?

Los sonidos agudos como alarmas y sirenas de camiones de bomberos son relativamente fáciles de detectar para el motor de ML de sonido. Los sonidos de banda ancha (como motores de coche o neumáticos) son más difíciles; hacemos un trabajo adecuado pero imperfecto dadas las limitaciones del hardware del teléfono. Los algoritmos de diferencia temporal de llegada (TDOA) solo son tan precisos dada la corta distancia entre micrófonos. La dirección necesita un iPhone con mic estéreo; los iPads se centran en subtítulos sin rumbo completo.

### ¿Cómo funcionan Demo Mode y las alertas de práctica?

Abre **Demo Mode** (varita) para probar sonidos de práctica de Home y Street y otras vistas previas. Los eventos de práctica se marcan claramente con **DEMO:** para que nunca pretendan ser una emergencia real. Cerrar Demo Mode desmonta el estado de práctica (incluido el spoof temporal de GPS usado en algunas demos).

---

*Vigilant Ear es una herramienta de accesibilidad construida con cuidado. Úsala de forma responsable.* 

Hecho con ❤️ para la comunidad D/HH y la investigación acústica.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
