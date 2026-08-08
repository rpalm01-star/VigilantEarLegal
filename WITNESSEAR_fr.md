# Witness Ear — Journal sonore optionnel de 24 heures et rapport PDF

**Witness Ear** est une fonctionnalité optionnelle de **Vigilant Ear**. Elle conserve un court journal, sur l'appareil, des sons que l'application a classés autour de vous, afin que vous puissiez exporter un simple **rapport de synthèse PDF** lorsque vous avez besoin d'une trace écrite — et pas seulement d'une carte en direct.  Elle enregistre des **événements** sonores, pas de l'audio ni des conversations.

Elle est **désactivée par défaut**, **gratuite**, et conçue pour rester discrète jusqu'à ce que vous en ayez besoin.

---

## Ce que c'est

Pendant que Vigilant Ear surveille, il classe déjà les sons de l'environnement (sirènes, alarmes, véhicules, catégories proches de la parole, et bien d'autres). Witness Ear fait une chose de plus lorsque vous l'activez :

- Il **stocke les classifications récentes** sur votre téléphone pendant jusqu'à **24 heures**.
- Vous pouvez **exporter** ces événements sous forme de **PDF Summary Report** pour les partager via Mail, Files, AirDrop, etc.
- Vous pouvez **supprimer** le journal à tout moment avec la commande corbeille. Désactiver Witness Ear ne fait que **mettre en pause** la journalisation — ce qui est déjà enregistré est **conservé** (et expire toujours après 24 heures), vous pouvez donc la suspendre un moment sans perdre la journée.

Il n'existe **pas de « mode application » Witness Ear distinct** ni d'affichage dédié. La commande se trouve sous **Preferences → SOUND JOURNAL** : un interrupteur **Witness Ear** (avec une petite commande **corbeille** à côté tant que le journal contient des événements), ainsi qu'une ligne **PDF Summary Report** avec **Export**.

Le rapport liste des éléments comme l'**heure**, la **confiance**, le **niveau de crête (dBFS)**, la **direction lorsqu'elle a été mesurée**, **quel téléphone l'a entendu** (cet appareil ou un pair Constellation lié) et l'**étiquette sonore** regroupée par famille de sons. C'est une **aide à la mise en évidence de tendances et à la prise de conscience**, pas un sonomètre certifié.

---

## Pourquoi vous pourriez en avoir besoin

On utilise un court journal écrit lorsque la mémoire et les points affichés en direct ne suffisent plus :

| Situation | Comment Witness Ear aide |
|-----------|------------------------|
| **Discussion avec un voisin / HOA / propriétaire** | Une liste datée de *ce que l'application a étiqueté et quand*, sur une nuit ou une journée, comme point de départ de discussion — pas comme une métrologie recevable en justice. |
| **« C'était toutes les nuits ou une seule fois ? »** | 24 heures glissantes pour vérifier ce qui est récent sans conserver d'archive permanente. |
| **Foyer multi-téléphones (Constellation)** | Les téléphones liés partagent ce qu'ils entendent sur votre **maillage local**. Les détections partagées peuvent aussi entrer dans le journal, de sorte que le rapport peut indiquer **quel téléphone** a entendu un événement — pas seulement ce micro. |
| **Journal d'accessibilité / de prise de conscience** | Une exportation simple à envoyer à un proche ou à un contact d'accompagnement après un moment bruyant. |

Si vous n'avez jamais besoin d'un PDF, laissez Witness Ear **désactivé**. La détection et les alertes fonctionnent exactement comme avant.

---

## Comment l'utiliser (iPhone / iPad)

### 1. Activez-le

1. Ouvrez **Preferences** (chemin cloche / Customizations depuis l'éventail d'actions ou le menu).
2. Trouvez la section **SOUND JOURNAL**.
3. Activez **Witness Ear**.  
   - Touchez le **ⓘ** à côté du nom pour la courte explication dans l'application.
4. Laissez Vigilant Ear surveiller comme d'habitude (micro actif pour les sons qui vous intéressent).

Tant qu'il est activé, les classifications qui atteignent le seuil de confiance de l'application sont ajoutées à un journal **local** (avec un court intervalle par étiquette pour ne pas saturer le fichier de doublons).

### 2. Exportez un PDF

1. Restez dans **SOUND JOURNAL**.
2. Sur la ligne **PDF Summary Report**, touchez **Export**.  
   - Touchez **ⓘ** sur cette ligne pour savoir ce que contient le PDF.
3. Attendez la **feuille de partage** du système, puis enregistrez ou envoyez le fichier (`WitnessEar-Report-….pdf`).

Si le journal est vide, Export indiquera qu'il n'y a aucun événement sur les 24 dernières heures — activez Witness Ear et attendez que le classificateur se soit déclenché au moins une fois.

### 3. Mettez en pause ou supprimez le journal

- **Pause :** désactivez l'interrupteur **Witness Ear**. La journalisation s'arrête ; ce qui est déjà enregistré est **conservé** et continue d'expirer après 24 heures. Réactivez pour reprendre.
- **Suppression :** touchez la petite **corbeille rouge** sur la ligne **Witness Ear** (elle n'apparaît que tant que le journal contient des événements). Elle lance un court compte à rebours **Cancel (5)…(1)** — touchez à nouveau pour annuler, ou attendez la fin pour tout supprimer immédiatement.

### 4. Constellation (optionnel)

Si **Constellation** est lié à d'autres téléphones sur votre maillage :

- Les téléphones **partagent déjà de nombreuses détections non vocales** pour la carte en direct et la vue multi-téléphones.
- Avec Witness Ear **activé**, les détections **partagées par les pairs** peuvent être **fusionnées dans le journal de ce téléphone** et apparaître dans le PDF sous **Heard by** (nom du pair) par rapport à **this phone**.

Chaque téléphone conserve **son propre** fichier journal sur l'appareil. Il n'existe **pas d'archive Witness Ear dans le cloud**. Pour le PDF multi-téléphones le plus complet sur un appareil, cet appareil doit avoir été lié et en train de journaliser pendant que les autres partageaient.

---

## Ce que contient le PDF (forme d'exemple)

La mise en page exacte peut évoluer ; l'intention est un rapport lisible en PDF ou sur papier imprimé.

```
WITNESS EAR — Journal sonore de 24 heures
Généré 7 août, 09:30  ·  Fenêtre 6 août, 10:00 – 7 août, 09:30
Sources : ce téléphone + pairs Constellation.  Les répétitions en 30 s sont enregistrées une seule fois.

[tuiles résumé]        échantillons du classifieur · épisodes (écart de 60 s) · groupes sonores · plage couverte
[Activité par heure]   histogramme des échantillons par heure
[Groupes sonores]      étiquettes brutes regroupées par famille de profil (Music, Vehicles, …)
[Emplacements]         L1, L2, … — positions regroupées à ~110 m, avec notes de précision
[Appareils]            P1 (ce téléphone, modèle · iOS · build de l'app), P2 … (pairs liés + modèle)

Épisodes
#   Début         Durée    Échant.   Crête     Sons                Par
1   7 août, 01:44 10m 40s  17        −12 dB    Music, Animals +4   P1, P2

Sources d'épisode (du plus ancien au plus récent)
Heure       Conf   dBFS   Dir    Par  Son
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Méthode et limites …

Intégrité
SHA-256 des N lignes du journal exportées dans cette fenêtre (JSON, clés triées) :
a1b2c3… (empreinte hex complète)
Précision de localisation / indicateurs GPS simulé / notes d'état de l'appareil / appareil exportateur / base temporelle…

Attestation

Je, _______________, atteste que … Lignes Signature / Date à remplir à l'encre après impression.
```

Chaque page porte un filigrane discret Wingdings derrière le contenu et un pied de page avec la marque Wingdings, « © 2026 Wingdings, Inc. All rights reserved. · Patent Pending », et le numéro de page — un premier contrôle simple qu'un PDF qu'on vous tend ressemble à une exportation authentique.

**Comment le lire**

- **Échantillons du classifieur** — nombre de fenêtres stockées (pas le « nombre de sirènes dans la ville »).
- **Épisodes distincts** — suites d'échantillons séparées par environ une minute de calme ; un son long et continu peut donner beaucoup d'échantillons mais peu d'épisodes.
- **Conf** — confiance du modèle (0–100 %), **pas** des décibels SPL.
- **dBFS** — niveau de crête du micro près de l'événement, relatif à la pleine échelle numérique de ce téléphone (0 = le plus fort que le micro peut enregistrer). Utile pour comparer des moments ; **pas** du dB SPL calibré.
- **Dir** — gisement/direction absolue de la boussole du son (0° = nord), affiché **uniquement** lorsqu'une résolution à deux microphones en a réellement mesuré un ; « — » signifie non mesuré. Jamais déduit de l'orientation du téléphone.
- **By** — identifiant d'appareil de la section **Devices** (P1 = le téléphone qui exporte, P2… = pairs liés), correspondant aux L-ids dans **Locations**.
- **Empreinte d'intégrité** — empreinte du journal sur l'appareil utilisée pour construire le PDF ; aide à détecter les modifications post-export de la table d'événements.
- **Attestation** — bloc de signature humaine optionnel après impression (vous attestez de la possession/localisation).

---

## Confidentialité des données

| Sujet | Politique |
|-------|-----------|
| **Par défaut** | **Désactivé.** Aucun journal Witness Ear tant que vous n'optez pas pour l'activer. |
| **Où vivent les données** | Uniquement sur **cet appareil**, dans le bac à sable privé **Application Support** de l'application (voir ci-dessous). |
| **Ce qui est stocké** | Métadonnées de classification : heure, étiquette, confiance, localisation/cap optionnels si l'application les a déjà, id de pair optionnel lorsqu'un événement de maillage est fusionné. **Pas** un enregistrement audio continu de la journée pour le journal, ni des paroles transcrites (ou traduites). |
| **Conservation** | **24 heures glissantes.** Les lignes plus anciennes sont purgées. |
| **Lorsque vous le désactivez** | La journalisation **se met en pause** ; les entrées stockées sont conservées et continuent d'expirer après 24 heures. |
| **Commande de suppression** | Corbeille sur la ligne Witness Ear (affichée tant que le journal contient des événements), avec compte à rebours annulable. |
| **Téléversement** | Witness Ear **ne** téléverse **pas** le journal vers Wingdings ni vers un cloud Witness Ear. |
| **Exportation** | **Vous** choisissez de partager le PDF (Mail, Files, AirDrop, etc.). Une fois partagée, cette copie est hors du contrôle de l'application. |
| **Constellation** | Le partage par maillage des détections en direct est une fonction produit de **réseau local** entre vos téléphones liés. Les lignes de journal fusionnées restent sur le téléphone qui les a reçues jusqu'à exportation ou effacement. |
| **Enfants / usage sensible** | N'utilisez pas le journal pour identifier ou suivre des personnes. Il est destiné aux **lieux, moments et catégories de sons**, pas aux dossiers personnels. |

### Ce que signifie « Application Support »

**Application Support** est un dossier privé qui n'appartient qu'à Vigilant Ear sur ce téléphone. Ce n'est **pas** un disque cloud, **pas** un album public « Files », et **pas** un e-mail au support. Les autres applications ne peuvent pas le lire selon les règles normales d'iOS.

Sur un iPhone avec un **code d'accès de l'appareil** (ou biométrie), iOS **chiffre les données de l'application au repos** avec une protection matérielle. Witness Ear **ne** téléverse **pas** le journal et **n'ajoute pas** une seconde couche de chiffrement gérée par l'application par-dessus. Lorsque l'appareil est verrouillé, l'accès suit les classes de protection des données standard d'Apple (généralement protégées jusqu'au premier déverrouillage après le démarrage, sauf paramètres plus stricts). Les sauvegardes (sauvegarde chiffrée sur ordinateur / règles de sauvegarde iCloud) sont distinctes de « ce qui se trouve sur le disque du téléphone ».

---

## Utiliser ce rapport dans les litiges

Witness Ear peut produire un **registre numérique authentifié de métadonnées acoustiques** (ce que les classificateurs sur l'appareil ont étiqueté, quand, et quel téléphone a contribué) — utile pour des conversations **informelles** avec voisins, propriétaires, HOA ou médiateurs. Ce n'est **pas** un substitut à une étude certifiée de Classe 1/2 ni à un conseil juridique.

**Étapes pratiques :**

1. Laissez **Witness Ear activé** pendant la période qui vous intéresse (jusqu'à 24 heures de conservation).
2. **Exportez** le PDF ; conservez le fichier d'origine sans le réenregistrer via un éditeur qui réécrit les PDF.
3. **Imprimez** une copie si une trace papier aide ; remplissez le bloc **Attestation** (nom, lieu, signature, date) à l'encre.
4. Orientez les destinataires vers la section **Integrity** : l'empreinte **SHA-256** des lignes du journal. Une réexportation ultérieure depuis le **même journal sur l'appareil non modifié** devrait correspondre ; modifier la table d'événements dans un éditeur PDF ne mettra pas à jour ce hash correctement, sauf si l'attaquant reconstruit aussi à partir de données source correspondantes.
5. Soyez explicite : il s'agit de **métadonnées générées par l'application**, l'heure est l'**horloge de l'appareil**, les niveaux **ne sont pas un SPL légal**, et les étiquettes peuvent être fausses.
6. Nous n'exploitons **pas** actuellement un site public « téléverser le PDF pour vérifier la signature ». Le hash est une **note d'intégrité autonome**, pas une attestation cloud Wingdings.

**Ne** inventez **pas** d'événements, ne rognez pas le bloc d'intégrité, et ne prétendez pas que le PDF est une mesure de bruit certifiée.

---

## Avertissements

1. **Pas un instrument certifié.** Les microphones de téléphone **ne sont pas** des sonomètres de Classe 1/2. Les scores de confiance et tout niveau associé sont **relatifs**, non calibrés, et **ne doivent pas** être présentés comme des dBA/dBC absolus pour l'application de règles, des amendes ou une métrologie légale. Le rapport peut néanmoins être utile comme **registre numérique authentifié de métadonnées acoustiques** lorsqu'il est utilisé honnêtement.

2. **Pas de garantie d'exhaustivité.** Le journal n'inclut que ce que les **classificateurs sur l'appareil** ont étiqueté pendant que la surveillance était active et que Witness Ear était **activé**. Périodes calmes, micro coupé, application non en cours d'exécution, faible confiance ou doublons limités peuvent laisser des trous. L'absence d'une ligne n'est **pas** la preuve qu'un son n'a jamais eu lieu.

3. **Les étiquettes peuvent être fausses.** Les moteurs d'apprentissage automatique peuvent mal classer. Une ligne « Siren » signifie la meilleure estimation du modèle à ce moment — pas un véhicule d'urgence garanti. Traitez le PDF comme des **notes de soutien**, pas comme une vérité terrain.

4. **Pas un dispositif de sécurité.** Vigilant Ear / Witness Ear sont des **aides à la prise de conscience et à l'accessibilité**. Ils ne remplacent pas le jugement humain, les alarmes certifiées ni les services d'urgence officiels.

5. **Preuves et litiges.** Si vous partagez un PDF avec un propriétaire, une HOA ou une administration, soyez honnête sur ce que c'est : un **journal de classification généré par l'application**, à conservation limitée, exporté par l'utilisateur, avec un hash d'intégrité sur l'appareil. N'altérez pas la table d'événements et n'inventez pas d'événements. Nous ne donnons pas de conseil juridique ; les règles locales sur les enregistrements et les preuves varient — en cas de doute, consultez un professionnel qualifié.

6. **Rapports multi-téléphones.** Les lignes des pairs dépendent de la connectivité Constellation et des règles de partage (p. ex. sources non vocales). Les horloges et le GPS des téléphones grand public ont une erreur ; l'accord multi-téléphones sur « la même nuit » est un contexte utile, pas une synchronisation de laboratoire.

7. **Base temporelle.** Les horodatages utilisent l'**horloge murale de l'appareil**, que l'utilisateur peut modifier. Le PDF le note ; ce n'est pas automatiquement recoupé avec l'heure réseau dans le produit actuel.

8. **Votre responsabilité en cas de partage.** Une fois que vous AirDrop ou envoyez un rapport par e-mail, les destinataires peuvent en conserver des copies. N'exportez que ce que vous avez l'intention de partager.

---

## Notes de plateforme

- **iOS / iPadOS :** Les commandes Witness Ear sont livrées sous **Preferences → SOUND JOURNAL** comme décrit ci-dessus.

---

## Bon à savoir

- Laisser Witness Ear **désactivé** ne coûte rien en termes de CPU ou de batterie du téléphone.
- L'**activer** ajoute un stockage local léger et des écritures occasionnelles d'événements pour construire le rapport.
- **Export** construit le PDF sans exiger un menu utilisateur séparé.
- Pour les alertes et la direction au quotidien, utilisez la carte principale Vigilant Ear et les HUD ; utilisez Witness Ear lorsque vous avez besoin d'un **instantané écrit portable** des événements sonores de la dernière journée.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
