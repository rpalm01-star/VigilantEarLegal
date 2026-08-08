# Witness Ear — Diario de sonidos opcional de 24 horas e informe PDF

**Witness Ear** es una función opcional de **Vigilant Ear**. Mantiene un registro breve, en el dispositivo, de los sonidos que la aplicación ha clasificado a su alrededor, para que pueda exportar un sencillo **informe resumen en PDF** cuando necesite una constancia escrita, no solo un mapa en vivo.  Registra **eventos** de sonido, no audio ni conversaciones.

Viene **desactivado de forma predeterminada**, es **gratuito** y está diseñado para no estorbar hasta que lo necesite.

---

## Qué es

Mientras Vigilant Ear está monitorizando, ya clasifica sonidos ambientales (sirenas, alarmas, vehículos, categorías próximas al habla y más). Witness Ear hace una sola cosa adicional cuando usted lo activa:

- **Almacena las clasificaciones recientes** en su teléfono durante un máximo de **24 horas**.
- Puede **exportar** esos eventos como un **PDF Summary Report** para compartirlo por Mail, Files, AirDrop, etc.
- Puede **eliminar** el registro en cualquier momento con el control de papelera. Desactivar Witness Ear solo **pausa** el registro: lo ya grabado se **conserva** (y sigue caducando a las 24 horas), así que puede suspenderlo un rato sin perder el día.

**No existe un «modo de aplicación» Witness Ear** independiente ni una pantalla propia. El control está en **Preferences → SOUND JOURNAL**: un interruptor **Witness Ear** (con un pequeño control de **papelera** al lado mientras el registro contenga eventos), además de una fila **PDF Summary Report** con **Export**.

El informe enumera datos como la **hora**, la **confianza**, el **nivel máximo (dBFS)**, la **dirección cuando se midió**, **qué teléfono lo oyó** (este dispositivo o un par Constellation vinculado) y la **etiqueta del sonido**, agrupada por familia de sonidos. Es una **ayuda de patrones y conciencia**, no un sonómetro certificado.

---

## Por qué podría necesitarlo

La gente recurre a un registro escrito breve cuando la memoria y los puntos en vivo no bastan:

| Situación | Cómo ayuda Witness Ear |
|-----------|------------------------|
| **Conversación con un vecino / HOA / arrendador** | Una lista fechada de *qué etiquetó la aplicación y cuándo*, a lo largo de una noche o un día, como punto de partida para conversar, no como metrología con validez judicial. |
| **«¿Fue todas las noches o solo una vez?»** | 24 horas continuas (ventana deslizante) para comprobar qué tan reciente es algo sin conservar un archivo permanente. |
| **Hogar con varios teléfonos (Constellation)** | Los teléfonos vinculados comparten lo que oyen por su **malla local**. Las detecciones compartidas también pueden entrar en el diario, de modo que el informe puede mostrar **qué teléfono** oyó un evento, no solo este micrófono. |
| **Registro de accesibilidad / conciencia** | Una exportación sencilla que puede enviar a un familiar o a un contacto de apoyo después de un rato ruidoso. |

Si nunca necesita un PDF, deje Witness Ear **desactivado**. La detección y las alertas siguen funcionando exactamente igual que antes.

---

## Cómo usarlo (iPhone / iPad)

### 1. Actívelo

1. Abra **Preferences** (ruta de la campana / Customizations desde el abanico de acciones o el menú).
2. Busque la sección **SOUND JOURNAL**.
3. Active **Witness Ear**.  
   - Toque la **ⓘ** junto al nombre para ver la breve explicación dentro de la aplicación.
4. Deje Vigilant Ear monitorizando como de costumbre (micrófono activo para los sonidos que le importan).

Mientras está activado, las clasificaciones que alcanzan el umbral de confianza de la aplicación se añaden a un registro **local** (con un pequeño intervalo por etiqueta para que el archivo no se inunde de duplicados).

### 2. Exporte un PDF

1. Permanezca en **SOUND JOURNAL**.
2. En la fila **PDF Summary Report**, toque **Export**.  
   - Toque **ⓘ** en esa fila para ver qué contiene el PDF.
3. Espere la **hoja de compartir** del sistema y luego guarde o envíe el archivo (`WitnessEar-Report-….pdf`).

Si el registro está vacío, Export indicará que no hay eventos en las últimas 24 horas: active Witness Ear y espere a que el clasificador se dispare al menos una vez.

### 3. Pause o elimine el registro

- **Pausar:** desactive el interruptor **Witness Ear**. El registro se detiene; lo ya grabado se **conserva** y sigue caducando a las 24 horas. Vuelva a activarlo para reanudar.
- **Eliminar:** toque la pequeña **papelera roja** en la fila **Witness Ear** (solo aparece mientras el registro contenga eventos). Se arma una breve cuenta atrás **Cancel (5)…(1)** — toque de nuevo para cancelar, o espere a que termine para borrar todo de inmediato.

### 4. Constellation (opcional)

Si **Constellation** está vinculado con otros teléfonos en su malla:

- Los teléfonos ya **comparten muchas detecciones no relacionadas con el habla** para el mapa en vivo y la imagen multipantalla.
- Con Witness Ear **activado**, las detecciones **compartidas por pares** pueden **fusionarse en el diario de este teléfono** y aparecer en el PDF bajo **Heard by** (nombre del par) frente a **this phone**.

Cada teléfono conserva **su propio** archivo de diario en el dispositivo. **No hay un archivo Witness Ear en la nube**. Para el PDF multipantalla más completo en un solo dispositivo, ese dispositivo debe haber estado vinculado y registrando mientras los demás compartían.

---

## Qué contiene el PDF (forma de ejemplo)

El diseño exacto puede evolucionar; la intención es un informe legible en PDF o en papel impreso.

```
WITNESS EAR — Diario de sonidos de 24 horas
Generado 7 ago, 09:30  ·  Ventana 6 ago, 10:00 – 7 ago, 09:30
Fuentes: este teléfono + pares Constellation.  Las repeticiones en 30 s se registran una sola vez.

[mosaicos resumen]     muestras del clasificador · episodios (hueco de 60 s) · grupos de sonido · intervalo cubierto
[Actividad por hora]   gráfico de barras de muestras por hora
[Grupos de sonido]     etiquetas en bruto unificadas por familia de perfil (Music, Vehicles, …)
[Ubicaciones]          L1, L2, … — posiciones agrupadas a ~110 m, con notas de precisión
[Dispositivos]         P1 (este teléfono, modelo · iOS · build de la app), P2 … (pares vinculados + modelo)

Episodios
#   Inicio        Duración  Muestras  Pico      Sonidos             Por
1   7 ago, 01:44  10m 40s   17        −12 dB    Music, Animals +4   P1, P2

Fuentes de episodio (del más antiguo al más reciente)
Hora        Conf   dBFS   Dir    Por  Sonido
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Método y límites …

Integridad
SHA-256 de las N filas del diario exportadas en esta ventana (JSON, claves ordenadas):
a1b2c3… (resumen hex completo)
Precisión de ubicación / indicadores de GPS simulado / notas del estado del dispositivo / dispositivo exportador / base temporal…

Atestación

Yo, _______________, atestiguo que … Líneas de firma / fecha para rellenar a mano tras imprimir.
```

Cada página lleva una marca de agua sutil de Wingdings detrás del contenido y un pie con la marca Wingdings, «© 2026 Wingdings, Inc. All rights reserved. · Patent Pending», y el número de página: una primera comprobación sencilla de que un PDF que alguien le entregue parece una exportación genuina.

**Cómo leerlo**

- **Muestras del clasificador** — número de ventanas almacenadas (no «número de sirenas en la ciudad»).
- **Episodios distintos** — series de muestras separadas por aproximadamente un minuto de silencio; un sonido continuo largo puede ser muchas muestras pero pocos episodios.
- **Conf** — confianza del modelo (0–100%), **no** decibelios SPL.
- **dBFS** — nivel máximo del micrófono cerca del evento, relativo a la escala digital completa de ese teléfono (0 = lo más alto que el micrófono puede registrar). Útil para comparar momentos; **no** es dB SPL calibrado.
- **Dir** — rumbo/dirección absoluta de la brújula del sonido (0° = norte), mostrada **solo** cuando una resolución con dos micrófonos midió realmente una; «—» significa no medida. Nunca se infiere de hacia dónde apuntaba el teléfono.
- **By** — identificador de dispositivo de la sección **Devices** (P1 = el teléfono que exporta, P2… = pares vinculados), que coincide con los L-ids en **Locations**.
- **Hash de integridad** — huella del diario en el dispositivo usada para generar el PDF; ayuda a detectar ediciones posteriores de la tabla de eventos tras la exportación.
- **Atestación** — bloque opcional de firma humana tras imprimir (usted atestigua la posesión/ubicación).

---

## Privacidad de los datos

| Tema | Política |
|------|----------|
| **Predeterminado** | **Desactivado.** No hay registro Witness Ear hasta que usted opte por activarlo. |
| **Dónde viven los datos** | Solo en **este dispositivo**, en el espacio privado **Application Support** de la aplicación (véase más abajo). |
| **Qué se almacena** | Metadatos de clasificación: hora, etiqueta, confianza, ubicación/rumbo opcionales si la aplicación ya los tiene, id de par opcional cuando se fusiona un evento de malla. **No** es una grabación de audio continua del día para el diario, ni palabras habladas transcritas (o traducidas). |
| **Retención** | **24 horas continuas (ventana deslizante).** Las filas más antiguas se eliminan. |
| **Cuando lo desactiva** | El registro se **pausa**; las entradas almacenadas se conservan y siguen caducando a las 24 horas. |
| **Control de eliminación** | Papelera en la fila Witness Ear (visible mientras el registro contenga eventos), con cuenta atrás cancelable. |
| **Carga** | Witness Ear **no** sube el diario a Wingdings ni a una nube de Witness Ear. |
| **Exportación** | **Usted** elige compartir el PDF (Mail, Files, AirDrop, etc.). Una vez compartida, esa copia queda fuera del control de la aplicación. |
| **Constellation** | El uso compartido por malla de detecciones en vivo es una función de producto de **red local** entre sus teléfonos vinculados. Las filas del diario fusionadas siguen en el teléfono que las recibió hasta que exporte o borre. |
| **Menores / uso sensible** | No use el registro para identificar o rastrear a personas. Es para **lugares, momentos y categorías de sonido**, no para expedientes personales. |

### Qué significa «Application Support»

**Application Support** es una carpeta privada que pertenece solo a Vigilant Ear en este teléfono. **No** es una unidad en la nube, **no** es un álbum público de «Files» y **no** es un correo al soporte. Otras aplicaciones no pueden leerla bajo las reglas normales de iOS.

En un iPhone con **código de acceso del dispositivo** (o biometría), iOS **cifra los datos de la aplicación en reposo** con protección respaldada por hardware. Witness Ear **no** sube el diario y **no** añade una segunda capa de cifrado gestionada por la aplicación por encima de eso. Cuando el dispositivo está bloqueado, el acceso sigue las clases estándar de protección de datos de Apple (normalmente protegidos hasta el primer desbloqueo tras el arranque, salvo que se apliquen ajustes más estrictos). Las copias de seguridad (copia cifrada al ordenador / reglas de copia de iCloud) son distintas de «estar en el disco del teléfono».

---

## Uso de este informe en disputas

Witness Ear puede producir un **libro mayor digital autenticado de metadatos acústicos** (qué etiquetaron los clasificadores en el dispositivo, cuándo y qué teléfono contribuyó): útil para conversaciones **informales** con vecinos, arrendadores, HOA o mediadores. **No** sustituye un estudio certificado de Clase 1/2 ni el asesoramiento legal.

**Pasos prácticos:**

1. Deje **Witness Ear activado** durante el periodo que le interese (hasta 24 horas de retención).
2. **Exporte** el PDF; conserve el archivo original sin volver a guardarlo con un editor que reescriba PDFs.
3. **Imprima** una copia si un rastro en papel ayuda; complete el bloque de **Atestación** (nombre, ubicación, firma, fecha) a mano.
4. Señale a los destinatarios la sección **Integrity**: la huella **SHA-256** de las filas del diario. Una reexportación posterior desde el **mismo registro en el dispositivo sin alterar** debería coincidir; editar la tabla de eventos en un editor de PDF no actualizará ese hash correctamente a menos que el atacante también reconstruya a partir de datos fuente coincidentes.
5. Sea explícito: se trata de **metadatos generados por la aplicación**, la hora es el **reloj del dispositivo**, los niveles **no son SPL legal** y las etiquetas pueden ser incorrectas.
6. Actualmente **no** operamos un sitio web público de «subir el PDF para verificar la firma». El hash es una **nota de integridad autónoma**, no una atestación en la nube de Wingdings.

**No** invente eventos, recorte el bloque de integridad ni afirme que el PDF es una medición de ruido certificada.

---

## Avisos legales

1. **No es un instrumento certificado.** Los micrófonos de los teléfonos **no** son sonómetros de Clase 1/2. Las puntuaciones de confianza y cualquier nivel relacionado son **relativos**, no calibrados, y **no deben** presentarse como dBA/dBC absolutos para sanciones, multas o metrología legal. El informe aún puede ser útil como **libro mayor digital autenticado de metadatos acústicos** cuando se use con honestidad.

2. **No garantiza la exhaustividad.** El registro solo incluye lo que los **clasificadores en el dispositivo** etiquetaron mientras la monitorización estaba activa y Witness Ear estaba **activado**. Periodos de silencio, micrófono silenciado, aplicación no en ejecución, baja confianza o duplicados limitados pueden dejar huecos. La ausencia de una fila **no** es prueba de que un sonido nunca ocurrió.

3. **Las etiquetas pueden ser incorrectas.** Los motores de aprendizaje automático pueden clasificar mal. Una fila «Siren» significa la mejor conjetura del modelo en ese momento, no un vehículo de emergencia garantizado. Trate el PDF como **notas de apoyo**, no como verdad absoluta.

4. **No es un dispositivo de seguridad.** Vigilant Ear / Witness Ear son **ayudas de conciencia y accesibilidad**. No sustituyen el criterio humano, las alarmas certificadas ni los servicios de emergencia oficiales.

5. **Pruebas y disputas.** Si comparte un PDF con un arrendador, HOA o agencia, sea honesto sobre lo que es: un **registro de clasificación generado por la aplicación**, con retención limitada, exportado por el usuario y con un hash de integridad en el dispositivo. No altere la tabla de eventos ni invente eventos. No ofrecemos asesoramiento legal; las normas locales sobre grabaciones y pruebas varían: en caso de duda, consulte a un profesional cualificado.

6. **Informes multipantalla.** Las filas de pares dependen de la conectividad de Constellation y de las reglas de uso compartido (p. ej., fuentes no relacionadas con el habla). Los relojes y el GPS de los teléfonos de consumo tienen error; la coincidencia multipantalla de «la misma noche» es contexto útil, no sincronización de laboratorio.

7. **Base temporal.** Las marcas de tiempo usan el **reloj del dispositivo**, que el usuario puede cambiar. El PDF lo indica; en el producto actual no se contrasta automáticamente con la hora de red.

8. **Su responsabilidad al compartir.** Una vez que haga AirDrop o envíe un informe por correo, los destinatarios pueden conservar copias. Exporte solo lo que pretenda compartir.

---

## Notas de plataforma

- **iOS / iPadOS:** Los controles de Witness Ear se ofrecen en **Preferences → SOUND JOURNAL** como se describe arriba.

---

## Bueno saber

- Dejar Witness Ear **desactivado** no cuesta nada en CPU ni en batería del teléfono.
- Activarlo añade un poco de almacenamiento local y escrituras ocasionales de eventos para construir el informe.
- **Export** genera el PDF sin necesidad de un menú de usuario aparte.
- Para alertas y dirección del día a día, use el mapa principal de Vigilant Ear y los HUD; use Witness Ear cuando necesite una **instantánea escrita portátil** de los eventos de sonido del último día.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
