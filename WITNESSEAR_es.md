# Witness Ear — Diario de Sonidos Opcional de 24 Horas e Informe en PDF

**Witness Ear** es una función opcional de **Vigilant Ear**. Mantiene un registro breve, en el dispositivo, de los sonidos que la aplicación ha clasificado a su alrededor, para que pueda exportar un sencillo **informe resumen en PDF** cuando necesite una constancia escrita, y no solo un mapa en vivo.

Viene **desactivado de forma predeterminada**, es **gratuito** y está diseñado para no estorbar hasta que lo necesite.

---

## Qué es

Mientras Vigilant Ear está monitorizando, ya clasifica sonidos ambientales (sirenas, alarmas, vehículos, categorías próximas al habla y más). Witness Ear hace una sola cosa adicional cuando usted lo activa:

- **Almacena las clasificaciones recientes** en este teléfono durante un máximo de **24 horas**.
- Puede **exportar** esos eventos como un **PDF Summary Report** (informe resumen en PDF) y compartirlo (Mail, Archivos, AirDrop, etc.).
- Puede **eliminar** el registro en cualquier momento con el control de papelera. Desactivar Witness Ear solo **pausa** el registro: lo ya grabado se conserva (y sigue caducando a las 24 horas), así que puede suspenderlo un rato sin perder el día.

Todavía **no existe un "modo de aplicación" Witness Ear** independiente ni un panel completo. El control está en **Preferences → SOUND JOURNAL** (Ajustes → diario de sonidos): un interruptor **Witness Ear** (con un pequeño control de **papelera** al lado mientras el registro contenga eventos), además de una fila **PDF Summary Report** con **Export** (exportar).

El informe enumera datos como la **hora**, la **confianza**, el **nivel máximo (dBFS)**, la **dirección cuando se midió**, **qué teléfono lo oyó** (este dispositivo o un par Constellation vinculado) y la **etiqueta del sonido**, agrupada por familia de sonidos. Es una **ayuda de patrones y conciencia**, no un sonómetro certificado.

---

## Por qué podría necesitarlo

La gente recurre a un registro escrito breve cuando la memoria y los puntos en vivo no bastan:

| Situación | Cómo ayuda Witness Ear |
|-----------|------------------------|
| **Conversación con un vecino / comunidad de propietarios / arrendador** | Una lista fechada de *qué etiquetó la aplicación y cuándo*, a lo largo de una noche o un día, como punto de partida para conversar, no como metrología con validez judicial. |
| **"¿Fue todas las noches o solo una vez?"** | 24 horas continuas para comprobar qué tan reciente es algo sin conservar un archivo permanente. |
| **Hogar con varios teléfonos (Constellation)** | Los teléfonos vinculados comparten lo que oyen por su **malla local**. Las detecciones compartidas también pueden entrar en el diario, de modo que el informe puede mostrar **qué teléfono** oyó un evento, no solo este micrófono. |
| **Registro de accesibilidad / conciencia** | Una exportación sencilla que puede enviar a un familiar o a un contacto de apoyo después de un rato ruidoso. |
| **Sus propias notas** | Exporte, anote sin conexión y descarte el registro cuando termine. |

Si nunca necesita un PDF, deje Witness Ear **desactivado**. La detección y las alertas siguen funcionando exactamente igual que antes.

---

## Cómo usarlo (iPhone / iPad)

### 1. Actívelo

1. Abra los **Ajustes** (ruta de la campana / Personalizaciones desde el abanico de acciones o el menú).
2. Busque la sección **SOUND JOURNAL** (diario de sonidos).
3. **Active** **Witness Ear**.  
   - Toque la **ⓘ** junto al nombre para ver la breve explicación dentro de la aplicación.
4. Deje Vigilant Ear monitorizando como de costumbre (micrófono activo para los sonidos que le importan).

Mientras está activado, las clasificaciones que alcanzan el umbral de confianza de la aplicación se añaden a un registro **local** (con un pequeño intervalo por etiqueta para que el archivo no se inunde de duplicados).

### 2. Exporte un PDF

1. Permanezca en **SOUND JOURNAL**.
2. En la fila **PDF Summary Report**, toque **Export** (exportar).  
   - Toque la **ⓘ** de esa fila para saber qué contiene el PDF.
3. Espere a la **hoja para compartir** del sistema y luego guarde o envíe el archivo (`WitnessEar-Report-….pdf`).

Si el registro está vacío, la exportación indicará que no hay eventos en las últimas 24 horas: active Witness Ear y espere hasta que el clasificador se haya disparado al menos una vez.

### 3. Pause o elimine el registro

- **Pausar:** desactive el interruptor **Witness Ear**. El registro se detiene; lo ya grabado **se conserva** y sigue caducando a las 24 horas. Vuelva a activarlo para reanudar.
- **Eliminar:** toque la pequeña **papelera roja** de la fila **Witness Ear** (solo aparece mientras el registro contiene eventos). Se arma una breve cuenta atrás **Cancel (5)…(1)** (cancelar): toque de nuevo para cancelar, o déjela terminar para borrarlo todo de inmediato.

### 4. Constellation (opcional)

Si **Constellation** está vinculado con otros teléfonos de su malla:

- Los teléfonos ya **comparten muchas detecciones que no son de habla** para el mapa en vivo y la imagen de varios teléfonos.
- Con Witness Ear **activado**, las detecciones **compartidas por pares** pueden **fusionarse en el diario de este teléfono** y aparecer en el PDF bajo **Heard by** (oído por: nombre del par) frente a **this phone** (este teléfono).

Cada teléfono sigue conservando **su propio** archivo de diario en el dispositivo. **No existe un archivo Witness Ear en la nube.** Para obtener el PDF multiteléfono más completo en un dispositivo, ese dispositivo debe haber estado vinculado y registrando mientras los demás compartían.

---

## Qué contiene el PDF (forma de ejemplo)

El diseño exacto puede evolucionar; la intención es que sea legible en papel y en Mail. (El informe en sí se genera en inglés; el ejemplo siguiente se muestra textualmente.)

```
WITNESS EAR — 24-Hour Sound Journal
Generated Aug 7, 09:30  ·  Window Aug 6, 10:00 – Aug 7, 09:30
Sources: this phone + Constellation peers.  Repeats within 30 s are logged once.

[summary tiles]  classifier samples · episodes (60 s gap) · sound groups · span covered
[Activity by hour]      bar chart of samples per hour
[Sound groups]          raw labels coalesced by profile family (Music, Vehicles, …)
[Locations]             L1, L2, … — positions grouped within ~110 m, with accuracy notes
[Devices]               P1 (this phone, model · iOS · app build), P2 … (linked peers + model)

Episodes
#   Start         Length   Samples   Peak     Sounds              By
1   Aug 7, 01:44  10m 40s  17        −12 dB   Music, Animals +4   P1, P2

Episode Source Feeds (oldest first)
Time        Conf   dBFS   Dir    By   Sound
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Method & Limits …

Integrity
SHA-256 of the N journal rows exported in this window (JSON, sorted keys):
a1b2c3… (full hex digest)
Location accuracy / simulated-GPS flags / device-state notes / exporting device / time base…

Attestation
I, _______________, attest that … Signature / Date lines for ink after print.
```

Cada página lleva una tenue marca de agua de Wingdings detrás del contenido y un pie de página con el distintivo de Wingdings, la leyenda "© 2026 Wingdings, Inc. All rights reserved. · Patent Pending" y el número de página: una primera comprobación fácil de que un PDF que alguien le entrega parece una exportación genuina.

**Cómo leerlo**

- **Classifier samples** (muestras del clasificador) — número de ventanas almacenadas (no "número de sirenas en la ciudad").
- **Distinct episodes** (episodios distintos) — series de muestras separadas por alrededor de un minuto de silencio; un sonido largo y continuo puede dar muchas muestras pero pocos episodios.
- **Conf** — confianza del modelo (0–100 %), **no** decibelios SPL.
- **dBFS** — nivel máximo del micrófono cerca del evento, relativo a la escala digital completa de ese teléfono (0 = lo más fuerte que el micrófono puede grabar). Útil para comparar momentos; **no** son dB SPL calibrados.
- **Dir** — el rumbo absoluto de brújula del sonido (0° = norte), mostrado **solo** cuando una resolución con dos micrófonos lo midió realmente; "—" significa no medido. Nunca se infiere de hacia dónde apuntaba el teléfono.
- **By** — identificador de dispositivo de la sección **Devices** (P1 = el teléfono que exporta, P2… = pares vinculados), que se corresponde con los identificadores L de **Locations**.
- **Integrity hash** (hash de integridad) — huella digital del diario en el dispositivo usado para construir el PDF; ayuda a detectar ediciones de la tabla de eventos posteriores a la exportación.
- **Attestation** (declaración) — bloque opcional de firma manuscrita después de imprimir (usted da fe de la posesión/ubicación).

---

## Privacidad de los datos

| Tema | Política |
|-------|--------|
| **Predeterminado** | **Desactivado.** No hay registro de Witness Ear hasta que usted decida activarlo. |
| **Dónde residen los datos** | Solo en **este dispositivo**, en el espacio aislado (sandbox) privado **Application Support** de la aplicación (véase más abajo). |
| **Qué se almacena** | Metadatos de clasificación: hora, etiqueta, confianza, ubicación/rumbo opcionales si la aplicación ya los tiene, identificador de par opcional cuando se fusiona un evento de la malla. **No** una grabación de audio continua del día para el diario. |
| **Conservación** | **24 horas continuas.** Las filas más antiguas se eliminan. |
| **Cuando lo desactiva** | El registro se **pausa**; las entradas almacenadas se conservan y siguen caducando a las 24 horas. |
| **Control de eliminación** | Papelera en la fila de Witness Ear (visible mientras el registro contenga eventos), con una cuenta atrás cancelable. |
| **Subida** | Witness Ear **no** sube el diario a Wingdings ni a ninguna nube de Witness Ear. |
| **Exportación** | **Usted** decide compartir el PDF (Mail, Archivos, AirDrop, etc.). Una vez compartida, esa copia queda fuera del control de la aplicación. |
| **Constellation** | El uso compartido en malla de detecciones en vivo es una función de producto de **red local** entre sus teléfonos vinculados. Las filas de diario fusionadas siguen quedándose en el teléfono que las recibió hasta que usted exporte o borre. |
| **Menores / uso sensible** | No use el registro para identificar o rastrear personas. Sirve para **lugares, horas y categorías de sonido**, no para expedientes personales. |

### Qué significa "Application Support"

**Application Support** es una carpeta privada que pertenece únicamente a Vigilant Ear en este teléfono. **No** es una unidad en la nube, **no** es un álbum público de "Archivos" y **no** es un correo al soporte. Otras aplicaciones no pueden leerla bajo las reglas normales de iOS.

En un iPhone con **código del dispositivo** (o biometría), iOS **cifra los datos de la aplicación en reposo** con protección respaldada por hardware. Witness Ear **no** sube el diario y **no** añade una segunda capa de cifrado gestionada por la aplicación encima de eso. Cuando el dispositivo está bloqueado, el acceso sigue las clases estándar de protección de datos de Apple (normalmente protegido hasta el primer desbloqueo tras el arranque, salvo que se apliquen ajustes más estrictos). Las copias de seguridad (reglas de copia cifrada en el ordenador / copia en iCloud) son algo distinto de "estar en el disco del teléfono".

---

## Uso de este informe en disputas

Witness Ear puede producir un **libro digital autenticado de metadatos acústicos** (qué etiquetaron los clasificadores del dispositivo, cuándo y qué teléfono contribuyó), útil para conversaciones **informales** con vecinos, arrendadores, comunidades de propietarios o mediadores. **No** sustituye a un estudio certificado de Clase 1/2 ni al asesoramiento jurídico.

**Pasos prácticos:**

1. Deje **Witness Ear activado** durante el periodo que le interese (se conservan hasta 24 horas).
2. **Exporte** el PDF; conserve el archivo original sin volver a guardarlo con un editor que reescriba PDF.
3. **Imprima** una copia si le sirve un rastro en papel; complete el bloque **Attestation** (declaración: nombre, ubicación, firma, fecha) a bolígrafo.
4. Señale a los destinatarios la sección **Integrity** (integridad): la huella **SHA-256** de las filas del diario. Una reexportación posterior desde el **mismo registro inalterado del dispositivo** debería coincidir; editar la tabla de eventos en un editor de PDF no actualizará correctamente ese hash, salvo que el atacante reconstruya además el informe a partir de datos de origen coincidentes.
5. Sea explícito: se trata de **metadatos generados por la aplicación**, la hora es la del **reloj del dispositivo**, los niveles **no son SPL con validez legal** y las etiquetas pueden estar equivocadas.
6. Actualmente **no** operamos ningún sitio web público del tipo "suba el PDF para verificar la firma". El hash es una **nota de integridad autocontenida**, no una certificación en la nube de Wingdings.

**No** invente eventos, no recorte el bloque de integridad ni afirme que el PDF es una medición de ruido certificada.

---

## Descargos de responsabilidad (léalos, por favor)

1. **No es un instrumento certificado.** Los micrófonos de los teléfonos **no** son sonómetros de Clase 1/2. Las puntuaciones de confianza y cualquier nivel relacionado son **relativos**, no están calibrados y **no deben** presentarse como dBA/dBC absolutos para fines de fiscalización, multas o metrología legal. Aun así, el informe puede resultar útil como **libro digital autenticado de metadatos acústicos** cuando se usa con honestidad.

2. **No es una garantía de exhaustividad.** El registro solo incluye lo que los **clasificadores del dispositivo** etiquetaron mientras la monitorización estaba activa y Witness Ear **activado**. Los periodos silenciosos, el micrófono silenciado, la aplicación cerrada, la baja confianza o los duplicados limitados pueden dejar huecos. La ausencia de una fila **no** es prueba de que un sonido nunca ocurriera.

3. **Las etiquetas pueden estar equivocadas.** El aprendizaje automático clasifica mal a veces. Una fila "Siren" (sirena) significa la mejor conjetura del modelo en ese momento, no un vehículo de emergencia garantizado. Trate el PDF como **notas de apoyo**, no como verdad establecida.

4. **No es un dispositivo de seguridad.** Vigilant Ear / Witness Ear son **ayudas de conciencia y accesibilidad**. No sustituyen al criterio humano, a las alarmas certificadas ni a los servicios oficiales de emergencia.

5. **Pruebas y disputas.** Si comparte un PDF con un arrendador, una comunidad de propietarios o un organismo, sea honesto sobre lo que es: un **registro de clasificación generado por una aplicación**, con conservación limitada, exportado por el usuario y con un hash de integridad del dispositivo. No altere la tabla de eventos ni invente eventos. No ofrecemos asesoramiento jurídico; las normas locales sobre grabaciones y pruebas varían: ante la duda, consulte a un profesional cualificado.

6. **Informes con varios teléfonos.** Las filas de los pares dependen de la conectividad de Constellation y de las reglas de uso compartido (por ejemplo, fuentes que no son de habla). Los relojes y el GPS de los teléfonos de consumo tienen error; la coincidencia entre varios teléfonos "la misma noche" es contexto útil, no cronometraje de laboratorio.

7. **Base de tiempo.** Las marcas de tiempo usan el **reloj del dispositivo**, que el usuario puede cambiar. El PDF lo advierte; en el producto actual no se contrasta automáticamente con la hora de red.

8. **Su responsabilidad al compartir.** Una vez que envía un informe por AirDrop o correo, los destinatarios pueden conservar copias. Exporte solo lo que tenga intención de compartir.

---

## Notas de plataforma

- **iOS / iPadOS:** los controles de Witness Ear se distribuyen en **Preferences → SOUND JOURNAL**, como se describe arriba.
- **Android:** más adelante puede aparecer una superficie "Witness Ear" más completa (incluidos gráficos de PDF más ricos, en desarrollo); la presentación del producto puede diferir según la plataforma. La idea central se mantiene: **activación voluntaria, conservación breve, en el dispositivo, exportación iniciada por el usuario.**

---

## Conviene saber

- Dejar Witness Ear **desactivado** no cuesta prácticamente nada más allá de la monitorización normal.
- **Activarlo** añade un almacenamiento local ligero y escrituras ocasionales, no una segunda interfaz completa.
- **Export** construye el PDF sin necesidad de una pantalla independiente de Witness Ear.
- Para las alertas y la dirección del día a día, use el mapa principal y los HUD de Vigilant Ear; use Witness Ear cuando necesite una **instantánea escrita y portátil** del último día.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
