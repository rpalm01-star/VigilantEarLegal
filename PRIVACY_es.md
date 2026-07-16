# Política de Privacidad para Vigilant Ear 👂🛰️

**Fecha de vigencia:** 11 de julio de 2026

## Introducción

Vigilant Ear ("nosotros", "nuestro" o "nos") está comprometido a proteger su privacidad. Esta Política de Privacidad explica qué información procesa la aplicación, qué se queda en su dispositivo y cuándo se pueden enviar datos limitados a través de Internet para proporcionar funciones específicas.

## Privacidad de un Vistazo

- **La detección acústica principal se ejecuta en su dispositivo.** La clasificación de sonido, el seguimiento direccional, los subtítulos en vivo y la lógica de alertas están diseñados para funcionar localmente utilizando el micrófono y los sensores de su teléfono.
- **No vendemos sus datos** y no utilizamos SDK de análisis publicitario o de comportamiento.
- **No almacenamos ni subimos grabaciones de audio.** El audio del micrófono se procesa en tiempo real para la detección y (cuando está habilitado) para los subtítulos; Vigilant Ear no lo guarda como un archivo de sonido para su posterior reproducción o análisis en la nube.
- **Algunas funciones utilizan Internet** — mapas, fuentes de clima severo, identificación de música opcional, datos de carreteras, compras en la tienda de aplicaciones, tráfico opcional de malla de múltiples teléfonos entre *sus* dispositivos y la carga de páginas legales en la aplicación. Estas se describen a continuación.
- **Usted mantiene el control.** Puede deshabilitar la identificación de música Shazam, desactivar las categorías de alertas, dejar Constellation apagado, revocar permisos en la configuración del sistema o detener la escucha en segundo plano en cualquier momento.

## Información Procesada en Su Dispositivo

Con su permiso, Vigilant Ear accede a lo siguiente **localmente**:

- **Audio del micrófono** — Se usa en tiempo real para detectar sonidos ambientales (sirenas, vehículos, timbres, llanto de bebé, personas cercanas, etc.), estimar la dirección y (cuando el Modo Orador está activado) producir subtítulos en vivo y traducción opcional en el dispositivo.
- **Reconocimiento de voz (en el dispositivo)** — Cuando los subtítulos están habilitados, los marcos de voz de su dispositivo transcriben el habla cercana a texto en el teléfono. El texto de los subtítulos se muestra en vivo y Vigilant Ear no lo archiva como un historial permanente de transcripciones; los registros de depuración no incluyen el contenido de los subtítulos.
- **Ubicación** — Se utiliza para ubicar los sonidos detectados y las áreas de alerta meteorológica en el mapa y para mejorar la orientación direccional.
- **Orientación y movimiento del dispositivo** — Se utilizan para mejorar la precisión del rumbo.
- **Cámara (opcional)** — Se utiliza solo si abre la vista de "ver el sonido" de cámara AR, para que los marcadores se puedan fijar en la vista previa de la cámara en vivo. Los cuadros de la cámara se utilizan para su visualización en el dispositivo; Vigilant Ear no los sube para el reconocimiento de sonido.
- **Apple Watch (opcional)** — Cuando hay un dispositivo complementario Watch disponible, las etiquetas de alerta y las señales de dirección se pueden transmitir al Watch emparejado para que pueda echar un vistazo a su muñeca.

Este procesamiento en el dispositivo es el corazón de la aplicación. Las aplicaciones de la competencia a menudo transmiten audio a la nube para su análisis y monetización. Vigilant Ear se construye de manera diferente: su conducto de conciencia acústica está diseñado para ejecutarse en el propio teléfono.

## Red y Servicios de Terceros

Cuando utiliza ciertas funciones — o cuando la aplicación las necesita para funcionar — **los datos limitados pueden salir de su dispositivo** y ser manejados por servicios de terceros bajo sus propias políticas de privacidad:

*   **Visualización de mapas**
    *   *Qué se envía:* Solicitudes de mosaicos de mapa; su vista del mapa y su ubicación aproximada según sea necesario para renderizar el mapa
    *   *Proveedor:* Apple Maps / MapKit
*   **Alertas de clima severo**
    *   *Qué se envía:* Solicitudes a fuentes meteorológicas públicas CAP/Atom; se puede inferir su región general a partir de la selección de fuentes y la ubicación del dispositivo
    *   *Proveedor:* Servicio Meteorológico Nacional de EE. UU., MeteoGate (Europa), Administración Meteorológica de China (CMA), Administración Meteorológica de Corea (KMA), fuentes públicas relacionadas con la OMM y fuentes similares de alertas públicas
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
    *   *Qué se envía:* Cuando habilita Constellation para múltiples teléfonos, los dispositivos participantes intercambian los metadatos acústicos necesarios para obtener una imagen compartida — por ejemplo, el rango relativo / banda ultraancha donde esté disponible, rumbos, etiquetas de sonido y texto de subtítulos efímero. El tráfico es de igual a igual (peer-to-peer) entre los teléfonos que usted vincula; Wingdings no opera un relé de malla en la nube para este conducto de audio.
    *   *Proveedor:* Marcos de Apple (por ejemplo, Network / Nearby Interaction) entre sus dispositivos
*   **Documentos legales en la aplicación**
    *   *Qué se envía:* Solicitudes web estándar cuando abre las páginas de Política de Privacidad, Términos, Soporte o páginas README de productos en la aplicación
    *   *Proveedor:* GitHub (alojamiento de documentos)

Elegimos estos servicios para ofrecer mapas, clima, etiquetas de música, compras y funcionalidad multidioma. **Wingdings no recibe el audio de su micrófono, su historial de ubicación continuo ni información de contacto de estos proveedores.**

## Qué Recopila Wingdings

### Sin Telemetría o Diagnóstico Remoto

Vigilant Ear está diseñado para funcionar de manera completamente local en su dispositivo. No recopilamos, transmitimos ni almacenamos telemetría remota, registros de fallas, registros de diagnóstico o análisis de uso en los servidores de Wingdings. Se pueden escribir registros de depuración **locales** opcionales en el dispositivo para la resolución de problemas; la aplicación no los sube como una canalización de telemetría y el texto de los subtítulos no se incluye en el contenido de depuración exportado.

## Lo Que No Hacemos

Nosotros **no**:

- Vendemos ni alquilamos su información personal
- Almacenamos grabaciones de audio ambiental en nuestros servidores
- Ejecutamos redes publicitarias, rastreadores de aplicaciones cruzadas o SDK de perfiles de comportamiento
- Subimos su rastro continuo de ubicación a Wingdings
- Subimos audio de micrófono sin procesar para reconocimiento de voz o sonido en la nube

## Sus Opciones y Controles

Usted puede:

- **Revocar permisos** (micrófono, ubicación, cámara, notificaciones, reconocimiento de voz) en la Configuración de iOS
- **Desactivar la identificación de música Shazam** en Power Pack+ / preferencias
- **Apagar categorías de alertas individuales** (sirenas, clima, timbres, bebé, etc.)
- **Detener la escucha en segundo plano** cuando todas las categorías de alerta están desactivadas
- **Dejar Constellation apagado** para que no se compartan metadatos de la malla con otros teléfonos
- **Usar el Modo Demo** para obtener una vista previa de las alertas y funciones localmente con una clara marca de agua DEMO, sin implicar una emergencia real

## Pautas de la Plataforma

Vigilant Ear sigue los requisitos de privacidad de la App Store de Apple y las pautas de Apple para aplicaciones que atienden a personas con necesidades de accesibilidad. Actualizamos esta política cuando cambian nuestras prácticas o nuestras obligaciones con la plataforma.

## Cambios a Esta Política

Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios sustanciales se reflejarán actualizando la **Fecha de vigencia** en la parte superior de esta página.

## Contáctenos

Si tiene preguntas sobre esta Política de Privacidad, contáctenos en:

**Correo electrónico:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear está construido con amor y respeto por la comunidad Sorda y con problemas de audición. Su confianza es importante para nosotros.

*Vigilant Ear es una herramienta de accesibilidad construida con cuidado. Por favor, úsela de manera responsable.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Todos los derechos reservados.<br />
  Patente Pendiente
</p>
