# Política de Privacidad de Vigilant Ear 👂🛰️

**Fecha de entrada en vigor:** 11 de julio de 2026

## Introducción

Vigilant Ear («nosotros», «nos» o «nuestro») está comprometido con la protección de tu privacidad. Esta Política de Privacidad explica qué información procesa la app, qué permanece en tu dispositivo y cuándo se pueden enviar datos limitados a través de Internet para proporcionar funciones específicas.

## Privacidad de un vistazo

- **La detección acústica principal se ejecuta en tu dispositivo.** La clasificación de sonido, el seguimiento direccional, los subtítulos en vivo y la lógica de alertas están diseñados para funcionar localmente utilizando el micrófono y los sensores de tu teléfono.
- **No vendemos tus datos** y no utilizamos publicidad ni SDKs de análisis de comportamiento.
- **No almacenamos ni subimos grabaciones de audio.** El audio del micrófono se procesa en tiempo real para la detección y (cuando está activado) los subtítulos; Vigilant Ear no lo guarda como archivo de sonido para reproducción posterior ni para análisis en la nube.
- **Algunas funciones usan Internet** — mapas, fuentes de clima severo, identificación musical opcional, datos de carreteras, compras en la tienda de aplicaciones, tráfico opcional de malla multiphone entre *tus* dispositivos y carga de páginas legales en la app. Estas se describen a continuación.
- **Tú tienes el control.** Puedes desactivar la identificación musical de Shazam, desactivar categorías de alertas, dejar Constellation desactivado, revocar permisos en la configuración del sistema o detener la escucha en segundo plano en cualquier momento.

## Información procesada en tu dispositivo

Con tu permiso, Vigilant Ear accede a lo siguiente de forma **local**:

- **Audio del micrófono** — Se usa en tiempo real para detectar sonidos ambientales (sirenas, vehículos, timbres, llanto de bebé, personas cercanas, etc.), estimar la dirección y (cuando Speaker Mode está activado) producir subtítulos en vivo y traducción opcional en el dispositivo.
- **Reconocimiento de voz (en el dispositivo)** — Cuando los subtítulos están activados, los frameworks de voz de tu dispositivo transcriben el habla cercana a texto en el teléfono. El texto de los subtítulos se muestra en vivo y Vigilant Ear no lo archiva como un historial permanente de transcripciones; los registros de depuración no incluyen el contenido de los subtítulos.
- **Ubicación** — Se usa para situar los sonidos detectados y las áreas de alertas meteorológicas en el mapa y para mejorar la orientación direccional.
- **Orientación y movimiento del dispositivo** — Se usa para mejorar la precisión del rumbo.
- **Cámara (opcional)** — Se usa solo si abres la vista AR de cámara «ver el sonido», para que los marcadores puedan fijarse en la vista previa de cámara en vivo. Los fotogramas de la cámara se usan para visualización en el dispositivo; Vigilant Ear no los sube para reconocimiento de sonido.
- **Apple Watch (opcional)** — Cuando hay un compañero de Watch disponible, las etiquetas de alerta y las señales de dirección pueden retransmitirse al Watch emparejado para que puedas echar un vistazo a tu muñeca.

Este procesamiento en el dispositivo es el corazón de la app. Las apps de la competencia a menudo transmiten audio a la nube para análisis y monetización. Vigilant Ear está construido de manera diferente: tu pipeline de conciencia acústica está diseñado para ejecutarse en el propio teléfono.

## Servicios de red y de terceros

Cuando usas ciertas funciones — o cuando la app las necesita para funcionar — **datos limitados pueden salir de tu dispositivo** y ser gestionados por servicios de terceros bajo sus propias políticas de privacidad:

*   **Visualización de mapas**
    *   *Qué se envía:* Solicitudes de teselas de mapa; tu viewport del mapa y ubicación aproximada según sea necesario para renderizar el mapa
    *   *Proveedor:* Apple Maps / MapKit
*   **Alertas de clima severo**
    *   *Qué se envía:* Solicitudes a fuentes públicas CAP/Atom de clima; tu región general puede inferirse a partir de la selección de fuentes y la ubicación del dispositivo
    *   *Proveedor:* National Weather Service de EE. UU., MeteoGate (Europa), China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), fuentes públicas relacionadas con la OMM y fuentes de alerta públicas similares
*   **Identificación musical (opcional, Power Pack+)**
    *   *Qué se envía:* Huellas de audio cortas — nunca audio en bruto — cuando se detecta música y Shazam está activado (puede desactivarse en la configuración)
    *   *Proveedor:* Apple Shazam / ShazamKit
*   **Contexto de carreteras**
    *   *Qué se envía:* Consultas anónimas a la API Overpass basadas en el sector del mapa alrededor de tu ubicación
    *   *Proveedor:* Colaboradores de OpenStreetMap a través de la API Overpass
*   **Compras y entitlements**
    *   *Qué se envía:* Tokens de compra y estado de entitlement / prueba del desbloqueo opcional de un solo pago de Power Pack+ (no es una suscripción)
    *   *Proveedor:* Apple App Store
*   **Malla Constellation (opcional, Power Pack+)**
    *   *Qué se envía:* Cuando activas Constellation multiphone, los dispositivos participantes intercambian metadatos acústicos necesarios para una imagen compartida — por ejemplo pose relativa / ranging de Ultra-Wideband donde esté disponible, rumbos, etiquetas de sonido y texto efímero de subtítulos. El tráfico es peer-to-peer entre los teléfonos que vinculas; Wingdings no opera un retransmisor de malla en la nube para este pipeline de audio.
    *   *Proveedor:* Frameworks de Apple (p. ej. Network / Nearby Interaction) entre tus dispositivos
*   **Documentos legales en la app**
    *   *Qué se envía:* Solicitudes web estándar cuando abres las páginas de Política de Privacidad, Términos, Soporte o README del producto en la app
    *   *Proveedor:* GitHub (alojamiento de documentos)

Elegimos estos servicios para ofrecer funcionalidad de mapas, clima, etiquetas musicales, compras y multidipositivo. **Wingdings no recibe tu audio del micrófono, historial continuo de ubicación ni información de contacto de estos proveedores.**

## Qué recopila Wingdings

### Sin telemetría remota ni diagnósticos

Vigilant Ear está diseñado para operar por completo de forma local en tu dispositivo. No recopilamos, transmitimos ni almacenamos telemetría remota, registros de fallos, registros de diagnóstico ni analítica de uso en servidores de Wingdings. Opcionalmente pueden escribirse registros de depuración **locales** en el dispositivo para resolución de problemas; la app no los sube como pipeline de telemetría, y el texto de los subtítulos no se incluye en el contenido de depuración exportado.

## Qué no hacemos

**No**:

- Vendemos ni alquilamos tu información personal
- Almacenamos grabaciones de audio ambiental en nuestros servidores
- Ejecutamos redes publicitarias, rastreadores entre apps ni SDKs de perfilado de comportamiento
- Subimos tu rastro continuo de ubicación a Wingdings
- Subimos audio en bruto del micrófono para reconocimiento de voz o de sonido en la nube

## Tus opciones y controles

Puedes:

- **Revocar permisos** (micrófono, ubicación, cámara, notificaciones, reconocimiento de voz) en Configuración de iOS
- **Desactivar la identificación musical de Shazam** en Power Pack+ / preferencias
- **Desactivar categorías de alertas individuales** (sirenas, clima, timbres, bebé, etc.)
- **Detener la escucha en segundo plano** cuando todas las categorías de alertas están desactivadas
- **Dejar Constellation desactivado** para que no se compartan metadatos de malla con otros teléfonos
- **Usar Demo Mode** para previsualizar alertas y funciones localmente con una clara marca de agua DEMO, sin implicar una emergencia real

## Directrices de la plataforma

Vigilant Ear sigue los requisitos de privacidad de Apple App Store y las directrices de Apple para apps que sirven a personas con necesidades de accesibilidad. Actualizamos esta política cuando cambian nuestras prácticas o las obligaciones de la plataforma.

## Cambios a esta política

Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios materiales se reflejarán actualizando la **Fecha de entrada en vigor** en la parte superior de esta página.

## Contáctanos

Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:

**Correo electrónico:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear está construido con amor y respeto por la comunidad Sorda y con dificultades auditivas. Tu confianza nos importa.

*Vigilant Ear es una herramienta de accesibilidad construida con cuidado. Úsala de forma responsable.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
