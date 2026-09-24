# Acoustic Scope — La vista profesional de análisis de sonido

El **Acoustic Scope** convierte Vigilant Ear en un instrumento de análisis de sonido de bolsillo: una vista en vivo de todo lo que oye el micrófono, de seis formas distintas. Úsalo para *ver* la forma de un sonido, medir su tono y su nivel, congelar y recorrer el último medio minuto, y capturar clips para entrenar tu propio paquete de sonidos personalizado.

Ábrelo desde el **abanico de acciones** (la ráfaga giratoria de la barra superior): toca la ráfaga y luego el **ecualizador** (las barras animadas verdes y cian). El Acoustic Scope es **gratis para todos**: las vistas en vivo de abajo no requieren ninguna compra. Solo las herramientas de captura de **Train** (más abajo), que graban clips para tus paquetes de sonidos personalizados, forman parte de Power Pack+.

---

## La cabecera

- **Casilla dB** — el nivel de banda ancha en vivo. Los cuadros **A / C / Z** eligen la ponderación de frecuencia (A ≈ cómo de fuerte suena para un oído humano; C conserva más graves; Z es plana/sin ponderar). La ponderación también rige la vista de ⅓ de octava.
- **root** (solo en la vista Croma) — la clase de altura musical más fuerte de la sala, actualizada en vivo.
- **✕** cierra el scope. La detección y las alertas siguen funcionando todo el tiempo que el scope esté abierto: es una ventana, no un modo.

## Las seis vistas

Cambia con la barra inferior.

| Vista | Qué muestra |
|---|---|
| **Espectro** | Nivel por frecuencia, ahora mismo: una curva en vivo con una línea blanca de retención de picos. |
| **Espectrograma** | Frecuencia a lo largo del **tiempo**: pasan los últimos ~24 segundos, el color = nivel. La mayoría de los sonidos tienen aquí una forma visual reconocible. |
| **RTA de ⅓ de octava** | Las 28 bandas ISO estándar, como un analizador en tiempo real de hardware. Las marcas naranjas son la retención de picos. |
| **Croma** | Las 12 clases de altura musical: qué notas están presentes, con la más fuerte destacada. |
| **Parciales** | Los tonos prominentes seguidos en el tiempo como líneas de colores, cada una etiquetada con su nota musical. Los nombres de las notas y la serie armónica tienen sus propias columnas, y los sonidos más agudos, como las alarmas de humo, se etiquetan con su altura real. Fija una **nota objetivo** y se dibuja como una línea de referencia para cantar o afinar. Ideal para silbidos, sirenas, cantos de pájaros y zumbidos de maquinaria. |
| **Visualizador** | La música de la sala como un espectáculo de luces en vivo: los golpes detonan anillos, los graves hinchan la escena, los agudos llueven destellos. Tiene su propia sección completa más abajo. |

Las **banderas** naranjas del Espectrograma marcan los momentos en que se disparó el clasificador de sonidos, con su etiqueta y su confianza, para que veas exactamente a qué forma reaccionó el modelo.

## Leer y medir

- **Control deslizante izquierdo** — escala de visualización. Baja una vista saturada o sube una silenciosa (solo visualización; nunca afecta a la detección).
- **Toca** el Espectrograma — una lectura en cruz: frecuencia, nivel y hace cuánto tiempo.
- **Arrastra** un recuadro — estadísticas de esa región: rango de frecuencia, duración, pico, centroide, energía, factor de cresta.
- **Pellizca** — amplía el eje de frecuencia. El botón ⤢ lo restablece.
- **ⓘ** — el panel de telemetría (detalles de la FFT, frecuencia dominante, centroide espectral) más un ajuste de **calibración** que desplaza todas las lecturas de nivel si las has comparado con un medidor de referencia.

## Congelar y revisar

El botón de **pausa** congela la imagen (el micrófono y las alertas siguen funcionando). Mientras está congelada aparece una barra de transporte:

- **▶** reproduce el búfer visualmente; el botón de velocidad alterna 1× / 2× / 0,5×.
- **🔍− / 🔍+** amplían la ventana de tiempo; el **minimapa** de la derecha muestra todo el búfer: arrástralo para recorrerlo.
- Espectrograma y Parciales comparten un mismo reloj, así que puedes alternar entre ellos en el mismo instante congelado.

## Capturar sonidos para un paquete personalizado

Este es el superpoder del scope: conseguir ejemplos reales de un sonido *tal como lo oyes*, directamente desde la vista en vivo.

1. Toca el botón magenta **Train** (cuadrado discontinuo). La vista se congela y aparece una **banda** magenta.
2. Arrastra los bordes de la banda alrededor de un ejemplo limpio de tu sonido: la etiqueta muestra la duración seleccionada. Un par de segundos alrededor del sonido es lo ideal.
3. Toca **Guardar** (el botón de flecha hacia la bandeja). El audio bajo la banda se escribe en un clip y aparece un recuadro numerado. La banda sigue armada: recorre hasta el siguiente ejemplo y vuelve a guardar (hasta 6 por sesión). Toca dos veces un recuadro numerado para borrar ese clip.
4. Toca el **martillo** para abrir el panel **Build**:
   - **Nombre del modelo** — el paquete (por ejemplo, *Búhos del patio*).
   - **Nombre del sonido** — lo que ven los usuarios en el mapa.
   - **Etiqueta de clase** — la etiqueta exacta que emitirá el modelo entrenado (derivada automáticamente; minúsculas y guiones bajos).
   - **Cuando se detecta** — *solo mapa* (un punto, identificación) o *en movimiento* (seguido como un vehículo). Los sonidos personalizados identifican; no generan alertas de emergencia: de eso se encarga siempre la detección de seguridad integrada.
   - Icono, color, umbral de confianza y alcance máximo: la tarjeta de vista previa en vivo muestra exactamente cómo se verá una detección.
5. Toca **Build & Export**. Obtienes un zip con tus clips (ya en la estructura de carpetas de Create ML) más los archivos del paquete, listos para enviar a un Mac.
6. En el Mac, entrena un **Sound Classifier** en Create ML a partir de la carpeta `clips/`, coloca el `model.mlpackage` exportado en la carpeta del paquete, vuelve a comprimirlo e impórtalo en el teléfono desde **Fuentes de alerta → Paquetes de sonidos personalizados**.

La mitad de entrenamiento e importación —incluida la **clase Background obligatoria** y el control que evita las falsas alarmas— se explica paso a paso en la **[guía de Paquetes de Sonidos Personalizados](https://vigilantear.com/es/byom/)**.

## La pestaña Visualizador — la música como luz

La pestaña **Visualizador** convierte la música de la sala en un espectáculo de luces que una
persona Sorda, con pérdida auditiva o CODA puede *sentir con los ojos*. Nada en ella es decoración:
cada elemento lo mueve una característica acústica real, en vivo, desde los micrófonos:

- **Cada golpe detona un anillo** — un detector de ataques dispara explosiones de anillos y un
  destello de pantalla justo cuando una persona oyente sentiría el bombo.
- **Los graves respiran** — el anillo ancla del centro y los anillos texturizados a la deriva se
  hinchan con la energía de baja frecuencia.
- **Los agudos llueven destellos** — platillos y charles caen como gotas brillantes.
- **El título de la canción recorre un globo** — una vez reconocida la canción, su título envuelve
  el ecuador de un globo invisible que atraviesa la escena, y el artista ocupa la esquina superior derecha.

Define tu **nombre de DJ** (y su color) en **Preferencias → Acoustic Visualizer**: ocupa la esquina
superior izquierda, con el mismo estilo que la etiqueta del artista.

**Ponlo en un televisor:** toca el **botón tv** de la cabecera del scope, conecta con un cable
USB-C–HDMI o Duplicado de pantalla AirPlay y pulsa **Mirror**: la pantalla grande muestra solo los
gráficos, mientras este teléfono sigue siendo los controles y el micrófono. Cambia de pestaña del
scope en el teléfono y el televisor lo sigue, así que el mismo Mirror pone el Espectrograma o el Visualizador en la pared.

## Conviene saber

- El scope no cuesta nada cuando está cerrado: el análisis extra solo se ejecuta mientras está en pantalla.
- Dejarlo abierto también sale barato: el Espectrograma no cuesta casi nada, así que no calentará tu teléfono por mucho tiempo que lo mires, y tanto Espectrograma como Parciales se redibujan a un ritmo constante y legible sin perderse nada de lo que oyen.
- Los valores absolutos de dB no están calibrados por defecto; son consistentes y comparables, y el ajuste de calibración de ⓘ te permite alinearlos con un medidor de referencia.
- El scope lee el canal del micrófono principal. La detección, la localización de dirección y las alertas no se ven afectadas por nada de lo que hagas aquí.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
