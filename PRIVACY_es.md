# Política de Privacidad para Vigilant Ear 👂🛰️

**Fecha de vigencia:** 28 de agosto de 2026

## Introducción

Vigilant Ear ("nosotros", "nuestro" o "nos") está comprometido a proteger su privacidad. Esta Política de Privacidad explica qué información procesa la aplicación, qué se queda en su dispositivo y cuándo se pueden enviar datos limitados a través de Internet para proporcionar funciones específicas.

## Privacidad de un Vistazo

- **La detección acústica principal se ejecuta en su dispositivo.** La clasificación de sonido, el seguimiento direccional, los subtítulos en vivo y la lógica de alertas están diseñados para funcionar localmente utilizando el micrófono y los sensores de su teléfono.
- **No vendemos sus datos** y no utilizamos SDK de análisis publicitario o de comportamiento.
- **No almacenamos ni subimos grabaciones de audio.** El audio del micrófono se procesa en tiempo real para la detección y (cuando está habilitado) para los subtítulos; Vigilant Ear no lo guarda como un archivo de sonido para su posterior reproducción o análisis en la nube.
- **Algunas funciones utilizan Internet** — mapas, fuentes de clima severo, identificación de música opcional, datos de carreteras, compras en la tienda de aplicaciones, tráfico opcional de malla de múltiples teléfonos entre *sus* dispositivos, la carga de páginas legales en la aplicación y (solo si usted decide participar) los informes del Research Array (matriz de investigación). Estas se describen a continuación.
- **Usted mantiene el control.** Puede deshabilitar la identificación de música Shazam, desactivar las categorías de alertas, dejar Constellation apagado, dejar **Research Array** apagado (viene desactivado de forma predeterminada), revocar permisos en la configuración del sistema o detener la escucha en segundo plano en cualquier momento.

## Información Procesada en Su Dispositivo

Con su permiso, Vigilant Ear accede a lo siguiente **localmente**:

- **Audio del micrófono** — Se usa en tiempo real para detectar sonidos ambientales (sirenas, vehículos, timbres, llanto de bebé, personas cercanas, etc.), estimar la dirección y (cuando el Modo Orador está activado) producir subtítulos en vivo y traducción opcional en el dispositivo.
- **Reconocimiento de voz (en el dispositivo)** — Cuando los subtítulos están habilitados, los marcos de voz de su dispositivo transcriben el habla cercana a texto en el teléfono. El texto de los subtítulos se muestra en vivo y Vigilant Ear no lo archiva como un historial permanente de transcripciones; los registros de depuración no incluyen el contenido de los subtítulos.
- **Ubicación** — Se utiliza para ubicar los sonidos detectados y las áreas de alerta meteorológica en el mapa y para mejorar la orientación direccional.
- **Orientación y movimiento del dispositivo** — Se utilizan para mejorar la precisión del rumbo.
- **Cámara (opcional)** — Se utiliza solo si abre la vista de "ver el sonido" de cámara AR, para que los marcadores se puedan fijar en la vista previa de la cámara en vivo. Los cuadros de la cámara se utilizan para su visualización en el dispositivo; Vigilant Ear no los sube para el reconocimiento de sonido.
- **Apple Watch (opcional)** — Cuando hay un dispositivo complementario Watch disponible, las etiquetas de alerta y las señales de dirección se pueden transmitir al Watch emparejado para que pueda echar un vistazo a su muñeca.
- **Diario de sonidos Witness Ear (opcional, desactivado de forma predeterminada)** — Cuando activa Witness Ear, la aplicación mantiene un registro continuo, **en el dispositivo y de 24 horas**, de las clasificaciones de sonido (hora, etiqueta, confianza, nivel máximo, dirección cuando se midió y la ubicación del teléfono en ese momento; además de las entradas compartidas por sus teléfonos Constellation vinculados). El diario se almacena únicamente en el espacio aislado (sandbox) privado de la aplicación en este teléfono y Vigilant Ear nunca lo sube. Solo sale del teléfono dentro de un informe PDF que **usted** decide exportar y compartir. Las entradas con más de 24 horas se eliminan automáticamente; desactivar Witness Ear pausa el registro (las entradas conservadas siguen caducando) y el control de papelera de la aplicación elimina el registro de inmediato. Consulte la guía de Witness Ear para más detalles.

Este procesamiento en el dispositivo es el corazón de la aplicación. Las aplicaciones de la competencia a menudo transmiten audio a la nube para su análisis y monetización. Vigilant Ear se construye de manera diferente: su conducto de conciencia acústica está diseñado para ejecutarse en el propio teléfono.

## Red y Servicios de Terceros

Cuando utiliza ciertas funciones — o cuando la aplicación las necesita para funcionar — **los datos limitados pueden salir de su dispositivo** y ser manejados por servicios de terceros bajo sus propias políticas de privacidad:

*   **Visualización de mapas**
    *   *Qué se envía:* Solicitudes de mosaicos de mapa; su vista del mapa y su ubicación aproximada según sea necesario para renderizar el mapa
    *   *Proveedor:* Apple Maps / MapKit
*   **Alertas de clima severo**
    *   *Qué se envía:* Solicitudes a fuentes meteorológicas públicas CAP/Atom; se puede inferir su región general a partir de la selección de fuentes y la ubicación del dispositivo
    *   *Proveedor:* Servicio Meteorológico Nacional de EE. UU., Administración Meteorológica de China (CMA), Administración Meteorológica de Corea (KMA), Agencia Meteorológica de Japón (JMA), Medio Ambiente y Cambio Climático de Canadá (ECCC), fuentes públicas relacionadas con la OMM y fuentes similares de alertas públicas
*   **Avisos meteorológicos europeos (a través de nuestra caché de alertas)**
    *   *Por qué existe:* Los avisos europeos provienen de MeteoGate, un feed público compartido con límites de peticiones. Al crecer nuestra base de usuarios, los teléfonos que lo consultaban directamente empezaron a superar esos límites — lo que significaba avisos perdidos. Por eso nuestro servidor obtiene los datos oficiales de MeteoGate una sola vez y los conserva unos **15 minutos**, y todos los teléfonos leen de esa copia compartida. Los mismos datos oficiales, más frescos y fiables para todos, y mucho más respetuosos con el feed público.
    *   *Qué se envía:* Una petición a nuestra caché lleva solo el código de país/región, el idioma de su app y una celda de ubicación que su teléfono redondea a unos **50 km (0,5°)** antes de enviarla — usada únicamente para limitar la respuesta a los avisos cercanos. No se adjunta nombre, cuenta ni identificador de dispositivo. Como en cualquier servicio HTTPS, existen registros estándar de alojamiento de corta duración para operarlo; no son una herramienta de seguimiento y no los vendemos. Las versiones antiguas de la app contactan los feeds públicos directamente.
    *   *Proveedor:* Datos de MeteoGate (Europa), servidos a través de infraestructura que operamos nosotros
*   **Alertas de terremoto**
    *   *Qué se envía:* Solicitudes a un único feed público mundial de resumen de terremotos — la solicitud no incluye ninguna información de ubicación o región; la ubicación de su dispositivo se usa solo en el dispositivo para decidir si un terremoto reportado está cerca de usted
    *   *Proveedor:* Feed público de terremotos del Servicio Geológico de EE. UU. (USGS)
*   **Identificación de música (opcional, Power Pack+)**
    *   *Qué se envía:* Huellas dactilares de audio cortas — nunca audio sin procesar — cuando se detecta música y Shazam está habilitado (se puede apagar en la configuración)
    *   *Proveedor:* Apple Shazam / ShazamKit
*   **Contexto de carreteras**
    *   *Qué se envía:* Consultas anónimas de API de Overpass basadas en el sector del mapa alrededor de su ubicación
    *   *Proveedor:* Colaboradores de OpenStreetMap a través de la API de Overpass
*   **Compras y derechos**
    *   *Qué se envía:* Tokens de compra y estado de derecho / prueba para el desbloqueo único opcional de Power Pack+ (no una suscripción)
    *   *Proveedor:* Apple App Store
*   **Malla Constellation (opcional, Power Pack+)**
    *   *Qué se envía:* Cuando habilita Constellation para múltiples teléfonos, los dispositivos participantes intercambian los metadatos acústicos necesarios para obtener una imagen compartida — por ejemplo, el rango relativo / banda ultraancha donde esté disponible, rumbos, etiquetas de sonido y texto de subtítulos efímero. El tráfico es de igual a igual (peer-to-peer) **solo entre teléfonos que ejecutan Vigilant Ear y que usted vincula para Constellation**. Los teléfonos sin la aplicación no pueden unirse a esa malla ni recibir esos metadatos. Wingdings no opera un relé de malla en la nube para este conducto de audio.
    *   *Proveedor:* Marcos de Apple (por ejemplo, Network / Nearby Interaction) entre sus dispositivos con Vigilant Ear
*   **Documentos legales en la aplicación**
    *   *Qué se envía:* Solicitudes web estándar cuando abre las páginas de Política de Privacidad, Términos, Soporte o páginas README de productos en la aplicación
    *   *Proveedor:* GitHub (alojamiento de documentos)
*   **Mapa en vivo del Research Array (solo visualización)**
    *   *Qué se envía:* Solicitudes web estándar cuando toca **Map** (Mapa) para abrir el panel público de la matriz en su navegador — como al visitar cualquier sitio web. Ver el mapa no envía nada de su diario ni de sus detecciones.
    *   *Proveedor:* Servicio de investigación de Wingdings (alojamiento de la aplicación web)
*   **Research Array (opcional — desactivado de forma predeterminada)**
    *   *Qué se envía:* Solo si usted activa la función: pequeños informes de detección de solo metadatos cuando se registra un evento que cumple los requisitos (hora, ubicación aproximada, características básicas de la señal, versión de la aplicación). Consulte **Research Array** más abajo.
    *   *Proveedor:* Infraestructura que operamos nosotros (proveedores de alojamiento de la aplicación y de base de datos, como nuestros hosts web y Postgres). Los detalles y límites están en la sección Research Array.

Elegimos estos servicios para ofrecer funcionalidad de mapas, clima, etiquetas de música, compras, múltiples dispositivos y (cuando usted decide participar) de la matriz de investigación (Research Array). **Wingdings no recibe el audio de su micrófono, su historial de ubicación continuo ni información de contacto de estos proveedores.**

## Qué Recopila Wingdings

### Sin Telemetría o Diagnóstico Remoto

Vigilant Ear está diseñado para que las funciones principales de escucha y subtítulos se ejecuten en su dispositivo. **No** recopilamos análisis remotos de fallas, telemetría publicitaria ni SDK de análisis de uso general.

Se pueden escribir registros de depuración **locales** opcionales en el dispositivo para la resolución de problemas; la aplicación no los sube como una canalización de telemetría y el texto de los subtítulos no se incluye en el contenido de depuración exportado.

**Excepción — Research Array y la caché meteorológica europea:** si usted opta por Research Array (vea más abajo), Wingdings puede recibir los informes limitados de eventos que usted elija contribuir. Por separado, cuando los avisos meteorológicos europeos están activados, su teléfono los lee de la caché meteorológica que operamos (descrita arriba); esas peticiones llevan una celda de ubicación aproximada de ~50 km y ningún identificador personal ni de dispositivo. Ninguna de las dos vías es análisis publicitario — ambas existen para que funcione una función concreta, no para construir un perfil de usted.

## Research Array (opcional, desactivado de forma predeterminada)

Vigilant Ear puede contribuir opcionalmente informes de detección de **solo metadatos** a una matriz de investigación que ayuda a construir una imagen compartida de terremotos y otros eventos de baja frecuencia / relacionados con infrasonidos. **Esto viene desactivado de forma predeterminada y solo funciona si usted lo activa** — donde aparezca el interruptor **Research Array** en las preferencias de la aplicación (o la etiqueta equivalente en su idioma), puede activarlo o desactivarlo en cualquier momento. Ver la página pública **Map** (Mapa) de la matriz es independiente de contribuir y no comparte nada de su registro.

Cuando está activado — y solo cuando su dispositivo registra un evento **que cumple los requisitos** (por ejemplo, un candidato de infrasonido no local o relacionado con actividad sísmica lo suficientemente fuerte, o ciertas señales de auditoría relacionadas con terremotos donde esa vía esté habilitada) — la aplicación puede enviar un pequeño informe que contiene:

- la hora del evento (usando el reloj del dispositivo en un dominio de tiempo global)
- una ubicación aproximada, redondeada a alrededor de **1 kilómetro** (no su dirección exacta ni un rastro continuo)
- características básicas del evento, como el canal del sensor, si la vía es aérea o terrestre, la frecuencia pico cuando corresponda y una medida de intensidad adimensional (por ejemplo, STA/LTA)
- el tipo de informe (por ejemplo, inicio de infrasonido, candidato sísmico o auditoría de confirmación de terremoto)
- la versión de la aplicación

**Lo que nunca se envía para Research Array:** audio, formas de onda, grabaciones, transcripciones, subtítulos, contactos, identificadores que la aplicación invente para etiquetarlo a *usted* como persona o instalación, su posición GPS precisa (más allá del redondeo grueso anterior) ni ningún registro continuo de dónde va usted. El audio nunca sale de su dispositivo ni para este ni para ningún otro propósito.

### A dónde van los informes

Los informes se envían únicamente a través de un **canal cifrado (HTTPS)** a un servicio de investigación de Wingdings que operamos nosotros (alojamiento de la aplicación y base de datos). La aplicación no adjunta **ningún ID de investigación por usuario o por dispositivo** ni **ningún identificador de Cuenta de Apple** en la carga útil. Se puede usar un secreto de aplicación compartido para que solo nuestra aplicación pueda escribir en el servicio; ese secreto **no** es un identificador personal. Pueden existir registros estándar de alojamiento y seguridad (por ejemplo, metadatos de red de corta duración utilizados para operar el servicio), como con cualquier servicio HTTPS; no son una función del producto para rastrearlo a usted, y no los vendemos.

Desactivar **Research Array** detiene de inmediato **todos los informes futuros**. **No** elimina los informes ya enviados. Debido a que los informes no llevan **ningún identificador por usuario o por dispositivo**, no podemos buscar ni borrar "todo lo que usted contribuyó" a posteriori — no tenemos una forma fiable de saber qué informes pasados vinieron de usted. Eso es intencional: evita que el flujo de investigación se convierta en un historial personal bajo nuestro control.

## Lo Que No Hacemos

Nosotros **no**:

- Vendemos ni alquilamos su información personal
- Almacenamos grabaciones de audio ambiental en nuestros servidores
- Ejecutamos redes publicitarias, rastreadores de aplicaciones cruzadas o SDK de perfiles de comportamiento
- Subimos su rastro continuo de ubicación a Wingdings
- Subimos audio de micrófono sin procesar para reconocimiento de voz o sonido en la nube
- Exigimos Research Array para las funciones principales de la aplicación — es opcional y viene desactivado de forma predeterminada

## Sus Opciones y Controles

Usted puede:

- **Revocar permisos** (micrófono, ubicación, cámara, notificaciones, reconocimiento de voz) en la Configuración de iOS
- **Desactivar la identificación de música Shazam** en Power Pack+ / preferencias
- **Apagar categorías de alertas individuales** (sirenas, clima, timbres, bebé, etc.)
- **Detener la escucha en segundo plano** cuando todas las categorías de alerta están desactivadas
- **Dejar Constellation apagado** para que no se compartan metadatos de la malla con otros teléfonos que ejecutan Vigilant Ear. Los teléfonos sin la aplicación no pueden compartir esos metadatos.
- **Dejar Research Array apagado** (opción predeterminada), o desactivarlo en cualquier momento en Ajustes para dejar de contribuir informes
- **Usar la Zona de Pruebas** para obtener una vista previa de las alertas y funciones localmente con una clara marca de agua PREVIEW, sin implicar una emergencia real

## Pautas de la Plataforma

Vigilant Ear sigue los requisitos de privacidad de la App Store de Apple y las pautas de Apple para aplicaciones que atienden a personas con necesidades de accesibilidad. Actualizamos esta política cuando cambian nuestras prácticas o nuestras obligaciones con la plataforma.

## Cambios a Esta Política

Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios sustanciales se reflejarán actualizando la **Fecha de vigencia** en la parte superior de esta página.

## Contáctenos

Si tiene preguntas sobre esta Política de Privacidad, contáctenos en:

**Correo electrónico:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear está construido con amor y respeto por la comunidad Sorda, con problemas de audición y CODA. Su confianza es importante para nosotros.

*Vigilant Ear es una herramienta de accesibilidad construida con cuidado. Por favor, úsela de manera responsable.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Todos los derechos reservados.<br />
  Patente Pendiente
</p>
