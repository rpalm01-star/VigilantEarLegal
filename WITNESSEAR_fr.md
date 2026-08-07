# Witness Ear — Journal sonore optionnel de 24 heures et rapport PDF

**Witness Ear** est une fonctionnalité optionnelle de **Vigilant Ear**. Elle conserve un court journal, sur l'appareil, des sons que l'application a classés autour de vous, afin que vous puissiez exporter un simple **rapport de synthèse PDF** lorsque vous avez besoin d'une trace écrite — et pas seulement d'une carte en direct.

Elle est **désactivée par défaut**, **gratuite**, et conçue pour rester discrète jusqu'à ce que vous en ayez besoin.

---

## Ce que c'est

Pendant que Vigilant Ear surveille, il classe déjà les sons de l'environnement (sirènes, alarmes, véhicules, catégories proches de la parole, et bien d'autres). Witness Ear fait une chose de plus lorsque vous l'activez :

- Il **stocke les classifications récentes** sur ce téléphone pendant jusqu'à **24 heures**.
- Vous pouvez **exporter** ces événements sous forme de **rapport de synthèse PDF** (à partager via Mail, Fichiers, AirDrop, etc.).
- Vous pouvez **supprimer** le journal à tout moment avec la commande corbeille. Désactiver Witness Ear ne fait que **mettre en pause** la journalisation — ce qui est déjà enregistré est conservé (et expire toujours après 24 heures), vous pouvez donc la suspendre un moment sans perdre la journée.

Il n'existe **pas encore de « mode application » Witness Ear distinct** ni de tableau de bord complet. La commande se trouve sous **Preferences → SOUND JOURNAL** (Préférences → journal sonore) : un interrupteur **Witness Ear** (avec une petite commande **corbeille** à côté tant que le journal contient des événements), ainsi qu'une ligne **PDF Summary Report** (rapport de synthèse PDF) avec **Export** (exporter).

Le rapport liste des éléments comme l'**heure**, la **confiance**, le **niveau de crête (dBFS)**, la **direction lorsqu'elle a été mesurée**, **quel téléphone l'a entendu** (cet appareil ou un pair Constellation lié) et l'**étiquette sonore** regroupée par famille de sons. C'est une **aide à la mise en évidence de tendances et à la prise de conscience**, pas un sonomètre certifié.

---

## Pourquoi vous pourriez en avoir besoin

On utilise un court journal écrit lorsque la mémoire et les points affichés en direct ne suffisent plus :

| Situation | Comment Witness Ear aide |
|-----------|------------------------|
| **Conversation avec un voisin / un syndic de copropriété / un propriétaire** | Une liste datée de *ce que l'application a étiqueté et quand*, sur une nuit ou une journée, comme point de départ de discussion — pas comme une métrologie recevable en justice. |
| **« C'était toutes les nuits ou une seule fois ? »** | 24 heures glissantes pour vérifier ce qui est récent sans conserver d'archive permanente. |
| **Foyer à plusieurs téléphones (Constellation)** | Les téléphones liés partagent ce qu'ils entendent via votre **maillage local**. Les détections partagées peuvent elles aussi entrer dans le journal, de sorte que le rapport peut indiquer **quel téléphone** a entendu un événement — et pas seulement ce micro. |
| **Journal d'accessibilité / de vigilance** | Une exportation simple que vous pouvez envoyer à un proche ou à un contact de soutien après une période bruyante. |
| **Vos propres notes** | Exportez, annotez hors ligne, supprimez le journal une fois terminé. |

Si vous n'avez jamais besoin d'un PDF, laissez Witness Ear **désactivé**. La détection et les alertes continuent de fonctionner exactement comme avant.

---

## Comment l'utiliser (iPhone / iPad)

### 1. Activez-le

1. Ouvrez les **Preferences** (Préférences ; chemin cloche / Customizations depuis l'éventail d'actions ou le menu).
2. Trouvez la section **SOUND JOURNAL** (journal sonore).
3. Activez **Witness Ear**.  
   - Touchez le **ⓘ** à côté du nom pour la brève explication dans l'application.
4. Laissez Vigilant Ear surveiller comme d'habitude (micro actif pour les sons qui vous intéressent).

Tant qu'il est activé, les classifications qui atteignent le seuil de confiance de l'application sont ajoutées à un journal **local** (avec un court intervalle par étiquette pour que le fichier ne soit pas inondé de doublons).

### 2. Exportez un PDF

1. Restez dans **SOUND JOURNAL**.
2. Sur la ligne **PDF Summary Report**, touchez **Export** (exporter).  
   - Touchez le **ⓘ** de cette ligne pour savoir ce que contient le PDF.
3. Attendez la **feuille de partage** du système, puis enregistrez ou envoyez le fichier (`WitnessEar-Report-….pdf`).

Si le journal est vide, Export indiquera qu'il n'y a aucun événement au cours des 24 dernières heures — activez Witness Ear et attendez que le classificateur se soit déclenché au moins une fois.

### 3. Mettez en pause ou supprimez le journal

- **Pause :** désactivez l'interrupteur **Witness Ear**. La journalisation s'arrête ; ce qui est déjà enregistré est **conservé** et expire toujours après 24 heures. Réactivez-le pour reprendre.
- **Suppression :** touchez la petite **corbeille rouge** sur la ligne **Witness Ear** (elle n'apparaît que tant que le journal contient des événements). Cela arme un bref compte à rebours **Cancel (5)…(1)** (annuler) — touchez à nouveau pour annuler, ou laissez-le s'écouler pour tout supprimer immédiatement.

### 4. Constellation (optionnel)

Si **Constellation** est lié à d'autres téléphones de votre maillage :

- Les téléphones **partagent déjà de nombreuses détections non vocales** pour la carte en direct et l'image multi-téléphones.
- Avec Witness Ear **activé**, les détections **partagées par les pairs** peuvent être **fusionnées dans le journal de ce téléphone** et apparaître dans le PDF sous **Heard by** (entendu par : nom du pair) par opposition à **this phone** (ce téléphone).

Chaque téléphone conserve toujours **son propre** fichier de journal sur l'appareil. **Il n'existe aucune archive Witness Ear dans le cloud.** Pour obtenir le PDF multi-téléphones le plus complet sur un appareil, cet appareil doit avoir été lié et en train de journaliser pendant que les autres partageaient.

---

## Ce que contient le PDF (forme d'exemple)

La mise en page exacte peut évoluer ; l'objectif est qu'il soit lisible sur papier et dans Mail. (Le rapport lui-même est généré en anglais ; l'exemple ci-dessous est reproduit tel quel.)

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

Chaque page porte un discret filigrane Wingdings derrière le contenu et un pied de page avec la marque Wingdings, « © 2026 Wingdings, Inc. All rights reserved. · Patent Pending » et le numéro de page — une première vérification facile pour voir si un PDF qu'on vous remet ressemble à une exportation authentique.

**Comment le lire**

- **Classifier samples** (échantillons du classificateur) — nombre de fenêtres stockées (et non « nombre de sirènes dans la ville »).
- **Distinct episodes** (épisodes distincts) — séries d'échantillons séparées par environ une minute de silence ; un son continu et long peut représenter beaucoup d'échantillons mais peu d'épisodes.
- **Conf** — confiance du modèle (0–100 %), **pas** des décibels SPL.
- **dBFS** — niveau de crête du microphone au moment de l'événement, par rapport à la pleine échelle numérique de ce téléphone (0 = le plus fort que le micro peut enregistrer). Utile pour comparer des instants ; **pas** des dB SPL étalonnés.
- **Dir** — l'azimut absolu du son au compas (0° = nord), affiché **uniquement** lorsqu'une résolution à deux microphones l'a réellement mesuré ; « — » signifie non mesuré. Jamais déduit de la direction dans laquelle le téléphone était pointé.
- **By** — identifiant d'appareil issu de la section **Devices** (P1 = le téléphone qui exporte, P2… = pairs liés), correspondant aux identifiants L de **Locations**.
- **Integrity hash** (empreinte d'intégrité) — empreinte du journal sur l'appareil ayant servi à construire le PDF ; aide à détecter des modifications du tableau des événements après l'exportation.
- **Attestation** — bloc de signature manuscrite optionnel après impression (vous attestez de la possession / du lieu).

---

## Confidentialité des données

| Sujet | Politique |
|-------|--------|
| **Par défaut** | **Désactivé.** Aucun journal Witness Ear tant que vous n'y consentez pas explicitement. |
| **Où vivent les données** | Uniquement sur **cet appareil**, dans le bac à sable (sandbox) privé **Application Support** de l'application (voir ci-dessous). |
| **Ce qui est stocké** | Des métadonnées de classification : heure, étiquette, confiance, localisation/cap optionnels si l'application en dispose déjà, identifiant de pair optionnel lorsqu'un événement du maillage est fusionné. **Pas** un enregistrement audio continu de la journée pour le journal. |
| **Conservation** | **24 heures glissantes.** Les lignes plus anciennes sont purgées. |
| **Quand vous le désactivez** | La journalisation **se met en pause** ; les entrées stockées sont conservées et expirent toujours après 24 heures. |
| **Commande de suppression** | Corbeille sur la ligne Witness Ear (affichée tant que le journal contient des événements), avec un compte à rebours annulable. |
| **Téléversement** | Witness Ear ne téléverse **pas** le journal vers Wingdings ni vers un cloud Witness Ear. |
| **Exportation** | **C'est vous** qui choisissez de partager le PDF (Mail, Fichiers, AirDrop, etc.). Une fois partagée, cette copie échappe au contrôle de l'application. |
| **Constellation** | Le partage en maillage des détections en direct est une fonctionnalité produit de **réseau local** entre vos téléphones liés. Les lignes de journal fusionnées restent malgré tout sur le téléphone qui les a reçues jusqu'à ce que vous exportiez ou effaciez. |
| **Enfants / usages sensibles** | N'utilisez pas le journal pour identifier ou suivre des personnes. Il porte sur des **lieux, des horaires et des catégories de sons**, pas sur des dossiers personnels. |

### Ce que signifie « Application Support »

**Application Support** est un dossier privé qui n'appartient qu'à Vigilant Ear sur ce téléphone. Ce n'est **pas** un disque dans le cloud, **pas** un album public de l'app « Fichiers », et **pas** un e-mail vers le support. Les autres applications ne peuvent pas le lire dans les règles normales d'iOS.

Sur un iPhone doté d'un **code d'accès** (ou de la biométrie), iOS **chiffre les données des applications au repos** avec une protection ancrée dans le matériel. Witness Ear ne téléverse **pas** le journal et n'ajoute **pas** par-dessus une seconde couche de chiffrement gérée par l'application. Lorsque l'appareil est verrouillé, l'accès suit les classes standard de protection des données d'Apple (généralement protégé jusqu'au premier déverrouillage après démarrage, sauf si des réglages plus stricts s'appliquent). Les sauvegardes (règles de sauvegarde chiffrée sur ordinateur / de sauvegarde iCloud) sont un sujet distinct du fait d'« être posé sur le disque du téléphone ».

---

## Utiliser ce rapport en cas de litige

Witness Ear peut produire un **registre numérique authentifié de métadonnées acoustiques** (ce que les classificateurs sur l'appareil ont étiqueté, quand, et quel téléphone y a contribué) — utile pour des échanges **informels** avec des voisins, des propriétaires, des syndics de copropriété ou des médiateurs. Il ne remplace **pas** une étude certifiée de Classe 1/2 ni un conseil juridique.

**Étapes pratiques :**

1. Laissez **Witness Ear activé** pendant la période qui vous intéresse (jusqu'à 24 heures conservées).
2. **Exportez** le PDF ; conservez le fichier d'origine sans le réenregistrer via un éditeur qui réécrit les PDF.
3. **Imprimez** une copie si une trace papier est utile ; complétez le bloc **Attestation** (nom, lieu, signature, date) à l'encre.
4. Renvoyez les destinataires à la section **Integrity** (intégrité) : l'empreinte **SHA-256** des lignes du journal. Une réexportation ultérieure à partir du **même journal inchangé sur l'appareil** doit correspondre ; modifier le tableau des événements dans un éditeur PDF ne mettra pas correctement à jour cette empreinte, à moins que l'attaquant ne reconstruise aussi le rapport à partir de données sources concordantes.
5. Soyez explicite : il s'agit de **métadonnées générées par une application**, l'heure est celle de l'**horloge de l'appareil**, les niveaux **ne sont pas des SPL au sens légal**, et les étiquettes peuvent être erronées.
6. Nous n'exploitons **pas** actuellement de site public de type « téléversez le PDF pour vérifier la signature ». L'empreinte est une **note d'intégrité autonome**, pas une attestation cloud de Wingdings.

**N'inventez pas** d'événements, ne rognez pas le bloc d'intégrité et ne prétendez pas que le PDF est une mesure de bruit certifiée.

---

## Avertissements (à lire, s'il vous plaît)

1. **Ce n'est pas un instrument certifié.** Les microphones de téléphone ne sont **pas** des sonomètres de Classe 1/2. Les scores de confiance et les niveaux associés sont **relatifs**, non étalonnés, et **ne doivent pas** être présentés comme des dBA/dBC absolus à des fins de contrôle, d'amendes ou de métrologie légale. Le rapport peut néanmoins être utile comme **registre numérique authentifié de métadonnées acoustiques** s'il est utilisé honnêtement.

2. **Ce n'est pas une garantie d'exhaustivité.** Le journal ne contient que ce que les **classificateurs sur l'appareil** ont étiqueté pendant que la surveillance était active et que Witness Ear était **activé**. Des périodes de silence, un micro coupé, l'application non lancée, une confiance faible ou des doublons filtrés peuvent laisser des trous. L'absence d'une ligne n'est **pas** la preuve qu'un son n'a jamais eu lieu.

3. **Les étiquettes peuvent être erronées.** L'apprentissage automatique se trompe de classe. Une ligne « Siren » (sirène) signifie la meilleure hypothèse du modèle à cet instant — pas un véhicule d'urgence garanti. Traitez le PDF comme des **notes d'appui**, pas comme une vérité terrain.

4. **Ce n'est pas un dispositif de sécurité.** Vigilant Ear / Witness Ear sont des **aides à la vigilance et à l'accessibilité**. Ils ne remplacent ni le jugement humain, ni des alarmes certifiées, ni les services d'urgence officiels.

5. **Preuves et litiges.** Si vous partagez un PDF avec un propriétaire, un syndic de copropriété ou une administration, soyez honnête sur ce qu'il est : un **journal de classification généré par une application**, à conservation limitée, exporté par l'utilisateur, avec une empreinte d'intégrité calculée sur l'appareil. Ne modifiez pas le tableau des événements et n'inventez pas d'événements. Nous ne fournissons pas de conseil juridique ; les règles locales sur les enregistrements et les preuves varient — en cas de doute, consultez un professionnel qualifié.

6. **Rapports multi-téléphones.** Les lignes des pairs dépendent de la connectivité Constellation et des règles de partage (par ex. les sources non vocales). Les horloges et le GPS des téléphones grand public comportent des erreurs ; une concordance entre plusieurs téléphones « la même nuit » est un contexte utile, pas une datation de laboratoire.

7. **Base de temps.** Les horodatages utilisent l'**horloge système de l'appareil**, que l'utilisateur peut modifier. Le PDF le signale ; dans le produit actuel, elle n'est pas recoupée automatiquement avec l'heure réseau.

8. **Votre responsabilité en cas de partage.** Une fois que vous avez envoyé un rapport par AirDrop ou par e-mail, les destinataires peuvent en conserver des copies. N'exportez que ce que vous avez l'intention de partager.

---

## Notes sur les plateformes

- **iOS / iPadOS :** les commandes de Witness Ear sont proposées sous **Preferences → SOUND JOURNAL**, comme décrit ci-dessus.
- **Android :** une surface « Witness Ear » plus complète (avec des graphiques PDF plus riches en cours de développement) pourra apparaître plus tard ; la présentation du produit peut différer selon la plateforme. L'idée centrale reste la même : **activation volontaire, conservation courte, sur l'appareil, exportation à l'initiative de l'utilisateur.**

---

## Bon à savoir

- Laisser Witness Ear **désactivé** ne coûte pratiquement rien au-delà de la surveillance normale.
- L'**activer** ajoute un stockage local léger et des écritures occasionnelles — pas une seconde interface complète.
- **Export** construit le PDF sans nécessiter d'écran Witness Ear distinct.
- Pour les alertes et la direction au quotidien, utilisez la carte principale et les HUD de Vigilant Ear ; utilisez Witness Ear lorsque vous avez besoin d'un **instantané écrit et transportable** de la dernière journée.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Tous droits réservés.<br />
  Brevet en instance
</p>
