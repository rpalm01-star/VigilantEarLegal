# Politique de confidentialité de Vigilant Ear 👂🛰️

**Date d'entrée en vigueur :** 28 août 2026

## Introduction

Vigilant Ear (« nous », « notre » ou « nos ») s'engage à protéger votre vie privée. Cette Politique de confidentialité explique quelles informations l'application traite, ce qui reste sur votre appareil, et quand des données limitées peuvent être envoyées sur Internet pour fournir des fonctionnalités spécifiques.

## La confidentialité en un coup d'œil

- **La détection acoustique principale s'exécute sur votre appareil.** La classification des sons, le suivi directionnel, les sous-titres en direct et la logique d'alerte sont conçus pour fonctionner localement en utilisant le microphone et les capteurs de votre téléphone.
- **Nous ne vendons pas vos données** et nous n'utilisons pas de SDK publicitaires ou d'analyse comportementale.
- **Nous ne stockons ni ne téléversons d'enregistrements audio.** L'audio du micro est traité en temps réel pour la détection et (si activés) les sous-titres ; il n'est jamais enregistré comme fichier son ni envoyé pour analyse dans le cloud. Jusqu'à une vingtaine de secondes de son sont retenues brièvement dans la mémoire de travail du téléphone pendant leur transcription — ce court tampon est ce qui permet aux sous-titres de saisir les premiers mots d'un locuteur au lieu de les perdre — et il ne touche jamais le stockage, n'est transmis nulle part et disparaît dès la fermeture de l'app. La fonction Rewind ne restitue que le **texte** des sous-titres récents ; aucun son n'est conservé pour la relecture.
- **Certaines fonctionnalités utilisent Internet** — cartes, flux météo extrêmes, identification de musique optionnelle, données routières, achats sur la boutique d'applications (app-store), trafic de maillage multi-téléphones optionnel entre *vos* appareils, le chargement des pages légales dans l'application et (uniquement si vous choisissez d'y participer) les rapports du Research Array (réseau de recherche). Ceux-ci sont décrits ci-dessous.
- **Vous gardez le contrôle.** Vous pouvez désactiver l'identification musicale Shazam, désactiver des catégories d'alerte, laisser Constellation désactivé, laisser le **Research Array** désactivé (il l'est par défaut), révoquer les autorisations dans les paramètres du système ou arrêter l'écoute en arrière-plan à tout moment.

## Informations traitées sur votre appareil

Avec votre permission, Vigilant Ear accède aux éléments suivants **localement** :

- **Audio du microphone** — Utilisé en temps réel pour détecter les sons environnementaux (sirènes, véhicules, sonnettes, pleurs de bébé, personnes à proximité, etc.), estimer la direction et (lorsque le Mode Locuteur est activé) produire des sous-titres en direct et une traduction optionnelle sur l'appareil.
- **Reconnaissance vocale (sur l'appareil)** — Lorsque les sous-titres sont activés, les frameworks vocaux de votre appareil transcrivent la parole environnante en texte sur le téléphone. Le texte des sous-titres est affiché en direct et n'est pas archivé par Vigilant Ear en tant qu'historique de transcription permanent ; les journaux de débogage n'incluent pas le contenu des sous-titres.
- **Localisation** — Utilisée pour placer les sons détectés et les zones d'alerte météo sur la carte et pour améliorer le guidage directionnel.
- **Orientation et mouvement de l'appareil** — Utilisés pour améliorer la précision de l'orientation.
- **Caméra (optionnelle)** — Utilisée uniquement si vous ouvrez la vue AR de la caméra « voir le son », afin que des marqueurs puissent être épinglés dans l'aperçu en direct de la caméra. Les images de la caméra sont utilisées pour l'affichage sur l'appareil ; elles ne sont pas téléchargées par Vigilant Ear pour la reconnaissance vocale.
- **Apple Watch (optionnelle)** — Lorsqu'une application Watch compagnon est disponible, les étiquettes d'alerte et les indications de direction peuvent être relayées vers la montre appairée pour que vous puissiez jeter un coup d'œil à votre poignet.
- **Journal sonore Witness Ear (optionnel, désactivé par défaut)** — Lorsque vous activez Witness Ear, l'application conserve un journal glissant de **24 heures, sur l'appareil**, des classifications sonores (heure, étiquette, confiance, niveau de crête, direction lorsqu'elle a été mesurée, et la position du téléphone à ce moment-là ; plus les entrées partagées par vos téléphones Constellation liés). Le journal est stocké uniquement dans le bac à sable (sandbox) privé de l'application sur ce téléphone et n'est jamais téléversé par Vigilant Ear. Il ne quitte le téléphone que dans un rapport PDF que **vous** choisissez d'exporter et de partager. Les entrées de plus de 24 heures sont supprimées automatiquement ; désactiver Witness Ear met la journalisation en pause (les entrées conservées continuent d'expirer), et la commande corbeille dans l'application supprime le journal immédiatement. Consultez le guide Witness Ear pour plus de détails.

Ce traitement sur l'appareil est le cœur de l'application. Les applications concurrentes diffusent souvent l'audio dans le cloud pour l'analyser et le monétiser. Vigilant Ear est conçu différemment : votre pipeline de conscience acoustique est conçu pour fonctionner sur le téléphone lui-même.

## Réseau et services tiers

Lorsque vous utilisez certaines fonctionnalités — ou lorsque l'application en a besoin pour fonctionner — **des données limitées peuvent quitter votre appareil** et être traitées par des services tiers selon leurs propres politiques de confidentialité :

*   **Affichage de la carte**
    *   *Ce qui est envoyé :* Demandes de tuiles de carte ; votre zone d'affichage cartographique et votre emplacement approximatif tel que nécessaire pour rendre la carte
    *   *Fournisseur :* Apple Maps / MapKit
*   **Alertes de météo violente (via notre propre service)**
    *   *Pourquoi cela existe :* Les alertes officielles proviennent des agences météorologiques nationales du monde entier. Auparavant, chaque téléphone contactait ces agences directement — chacune pouvait donc voir l'adresse réseau de votre appareil et la fréquence de vos consultations — et les flux publics partagés soumis à des limites de requêtes ont commencé à perdre des alertes à mesure que notre base d'utilisateurs grandissait. Notre serveur récupère désormais les données officielles une seule fois, pour tout le monde, et les conserve environ **15 minutes**. Les mêmes alertes officielles, de façon plus fiable — et **votre téléphone ne contacte jamais les serveurs d'un gouvernement étranger.** À partir de la version 1.1.0 uniquement.
    *   *Ce qui est envoyé :* Une requête à notre service ne comporte que le code de pays/région, la langue de l'app et, tout au plus, une cellule de localisation que votre téléphone arrondit à environ **50 km (0,5°)** avant tout envoi, utilisée uniquement pour restreindre la réponse aux alertes proches. Le test précis « suis-je dans cette zone d'alerte ? » s'effectue **sur votre téléphone** et n'en sort jamais. Aucun nom, compte ni identifiant d'appareil n'y est joint. Comme pour tout service HTTPS, des journaux d'hébergement standard et de courte durée existent pour l'exploiter ; ce n'est pas une fonction de suivi et nous ne les vendons pas.
    *   *Fournisseur :* Données officielles du National Weather Service américain (NWS), de MeteoAlarm / MeteoGate (Europe), de l'Administration météorologique chinoise (CMA), de l'Administration météorologique coréenne (KMA), de l'Agence météorologique japonaise (JMA), d'Environment and Climate Change Canada (ECCC), de l'INMET brésilien et du Bureau of Meteorology australien (BoM) — acheminées vers votre téléphone par une infrastructure que nous exploitons.
*   **Alertes sismiques**
    *   *Ce qui est envoyé :* Des requêtes vers un unique flux public mondial de synthèse des séismes — la requête ne contient aucune information de localisation ou de région ; la position de votre appareil n'est utilisée que sur l'appareil pour déterminer si un séisme signalé est proche de vous
    *   *Fournisseur :* Flux public de séismes de l'U.S. Geological Survey (USGS)
*   **Identification musicale (optionnelle, Power Pack+)**
    *   *Ce qui est envoyé :* Courtes empreintes audio — jamais d'audio brut — lorsque de la musique est détectée et que Shazam est activé (peut être désactivé dans les paramètres)
    *   *Fournisseur :* Apple Shazam / ShazamKit
*   **Contexte routier**
    *   *Ce qui est envoyé :* Requêtes Overpass API anonymes basées sur le secteur de la carte autour de votre emplacement
    *   *Fournisseur :* Contributeurs OpenStreetMap via l'API Overpass
*   **Achats et droits**
    *   *Ce qui est envoyé :* Jetons d'achat et état des droits / de l'essai pour le déverrouillage unique optionnel Power Pack+ (pas un abonnement)
    *   *Fournisseur :* Apple App Store
*   **Réseau mesh Constellation (optionnel, Power Pack+)**
    *   *Ce qui est envoyé :* Lorsque vous activez Constellation multi-téléphones, les appareils participants échangent les métadonnées acoustiques nécessaires pour une image partagée — par exemple, la pose relative / la télémétrie Ultra-Wideband lorsqu'elle est disponible, les directions, les étiquettes sonores et le texte des sous-titres éphémères. Le trafic se fait de pair à pair (peer-to-peer) **uniquement entre les téléphones qui exécutent Vigilant Ear et que vous liez pour Constellation**. Les téléphones sans l'application ne peuvent pas rejoindre ce maillage ni recevoir ces métadonnées. Wingdings n'exploite pas de relais mesh cloud pour ce pipeline audio.
    *   *Fournisseur :* Frameworks Apple (par ex. Network / Nearby Interaction) entre vos appareils Vigilant Ear
*   **Documents légaux intégrés à l'application**
    *   *Ce qui est envoyé :* Requêtes web standards lorsque vous ouvrez la Politique de confidentialité, les Conditions d'utilisation, le Support ou les pages README du produit dans l'application
    *   *Fournisseur :* GitHub (hébergement de documents)
*   **Carte en direct du Research Array (consultation seule)**
    *   *Ce qui est envoyé :* Requêtes web standards lorsque vous touchez **Map** (Carte) pour ouvrir le tableau de bord public du réseau dans votre navigateur — comme pour visiter n'importe quel site web. La consultation n'envoie rien de votre journal ni de vos détections.
    *   *Fournisseur :* Service de recherche Wingdings (hébergement de l'application web)
*   **Research Array (optionnel — désactivé par défaut)**
    *   *Ce qui est envoyé :* Uniquement si vous activez la fonctionnalité : de petits rapports de détection composés uniquement de métadonnées lorsqu'un événement admissible est enregistré (heure, position approximative, caractéristiques de base du signal, version de l'application). Voir **Research Array** ci-dessous.
    *   *Fournisseur :* Une infrastructure que nous exploitons (hébergeurs de l'application et de la base de données, comme nos hébergeurs web et Postgres). Les détails et les limites figurent dans la section Research Array.

Nous choisissons ces services pour fournir des fonctionnalités de carte, de météo, d'étiquetage musical, d'achat, multi-appareils et (lorsque vous choisissez d'y participer) de réseau de recherche (Research Array). **Wingdings ne reçoit pas l'audio de votre microphone, l'historique de localisation continu ou les informations de contact de ces fournisseurs.**

## Ce que Wingdings collecte

### Pas de télémétrie ni de diagnostics à distance

Vigilant Ear est conçu pour que les fonctionnalités principales d'écoute et de sous-titrage s'exécutent sur votre appareil. Nous ne collectons **pas** d'analyses de plantage à distance, de télémétrie publicitaire ni de SDK d'analyse d'utilisation générale.

Des journaux de débogage **locaux** optionnels peuvent être écrits sur l'appareil à des fins de dépannage ; ils ne sont pas téléchargés par l'application en tant que pipeline de télémétrie, et le texte des sous-titres n'est pas inclus dans le contenu de débogage exporté.

**Exception — Research Array et le cache météo européen :** si vous choisissez de participer à Research Array (voir ci-dessous), Wingdings peut recevoir les rapports d'événements limités que vous choisissez de contribuer. Séparément, quand les alertes météo européennes sont activées, votre téléphone les lit depuis le cache météo que nous exploitons (décrit ci-dessus) ; ces requêtes contiennent une cellule de localisation grossière d'environ 50 km et aucun identifiant personnel ou d'appareil. Aucune de ces voies n'est de l'analyse publicitaire — les deux existent pour faire fonctionner une fonctionnalité précise, pas pour établir votre profil.

## Research Array (optionnel, désactivé par défaut)

Vigilant Ear peut, en option, contribuer des rapports de détection composés **uniquement de métadonnées** à un réseau de recherche qui aide à construire une image partagée des séismes et d'autres événements à basse fréquence / liés aux infrasons. **Cette fonctionnalité est désactivée par défaut et ne fonctionne que si vous l'activez** — là où l'interrupteur **Research Array** apparaît dans les préférences de l'application (ou l'étiquette équivalente dans votre langue), vous pouvez l'activer ou le désactiver à tout moment. Consulter la page publique **Map** (Carte) du réseau est distinct de la contribution et ne partage rien de votre journal.

Lorsqu'elle est activée — et uniquement lorsque votre appareil enregistre un événement **admissible** (par exemple un candidat infrasonore non local ou lié à une activité sismique suffisamment fort, ou certains signaux d'audit liés aux séismes là où cette voie est activée) — l'application peut envoyer un petit rapport contenant :

- l'heure de l'événement (selon l'horloge de l'appareil dans un domaine temporel global)
- une position approximative, arrondie à environ **1 kilomètre** (pas votre adresse exacte ni une trace continue)
- les caractéristiques de base de l'événement, comme le canal du capteur, si la voie est aérienne ou terrestre, la fréquence de crête le cas échéant, et une mesure d'intensité sans dimension (par exemple STA/LTA)
- le type de rapport (par exemple début d'infrason, candidat sismique ou audit de confirmation de séisme)
- la version de l'application

**Ce qui n'est jamais envoyé pour le Research Array :** audio, formes d'onde, enregistrements, transcriptions, sous-titres, contacts, identifiants que l'application inventerait pour vous étiqueter, *vous*, en tant que personne ou installation, votre position GPS précise (au-delà de l'arrondi grossier ci-dessus), ni aucun enregistrement continu de vos déplacements. L'audio ne quitte jamais votre appareil, ni pour cela ni pour aucun autre usage.

### Où vont les rapports

Les rapports ne sont envoyés que par un **canal chiffré (HTTPS)** vers un service de recherche Wingdings que nous exploitons (hébergement de l'application et base de données). L'application ne joint **aucun identifiant de recherche par utilisateur ou par appareil** ni **aucun identifiant de compte Apple** dans la charge utile. Un secret d'application partagé peut être utilisé afin que seule notre application puisse écrire dans le service ; ce secret n'est **pas** un identifiant personnel. Des journaux standards d'hébergement et de sécurité (par exemple des métadonnées réseau de courte durée utilisées pour exploiter le service) peuvent exister comme pour tout service HTTPS ; ils ne constituent pas une fonctionnalité produit destinée à vous suivre, et nous ne les vendons pas.

Désactiver le **Research Array** arrête immédiatement **tous les rapports futurs**. Cela ne supprime **pas** les rapports déjà envoyés. Comme les rapports ne portent **aucun identifiant par utilisateur ou par appareil**, nous ne pouvons pas rechercher ni effacer « tout ce que vous avez contribué » après coup — nous n'avons aucun moyen fiable de savoir quels rapports passés venaient de vous. C'est intentionnel : cela empêche le flux de recherche de devenir un historique personnel sous notre contrôle.

## Ce que nous ne faisons pas

Nous ne faisons **pas** :

- Vendre ou louer vos informations personnelles
- Stocker d'enregistrements audio environnementaux sur nos serveurs
- Exécuter de réseaux publicitaires, de traqueurs inter-applications ou de SDK de profilage comportemental
- Télécharger votre historique de localisation continu chez Wingdings
- Télécharger d'audio brut de microphone pour la reconnaissance vocale ou sonore dans le cloud
- Exiger le Research Array pour les fonctionnalités principales de l'application — il est optionnel et désactivé par défaut

## Vos choix et contrôles

Vous pouvez :

- **Révoquer les autorisations** (microphone, localisation, caméra, notifications, reconnaissance vocale) dans les paramètres d'iOS
- **Désactiver l'identification musicale Shazam** dans Power Pack+ / préférences
- **Désactiver des catégories d'alerte individuelles** (sirènes, météo, sonnettes, bébé, etc.)
- **Arrêter l'écoute en arrière-plan** lorsque toutes les catégories d'alerte sont désactivées
- **Laisser Constellation désactivé** pour qu'aucune métadonnée mesh ne soit partagée avec d'autres téléphones exécutant Vigilant Ear. Les téléphones sans l'application ne peuvent pas partager ces métadonnées.
- **Laisser le Research Array désactivé** (par défaut), ou le désactiver à tout moment dans les Réglages pour cesser de contribuer des rapports
- **Utiliser le Terrain de jeu des fonctionnalités** pour prévisualiser les alertes et les fonctionnalités localement avec un filigrane PREVIEW clair, sans impliquer de véritable urgence

## Directives de la plateforme

Vigilant Ear suit les exigences de confidentialité de l'Apple App Store et les directives d'Apple concernant les applications destinées aux personnes ayant des besoins d'accessibilité. Nous mettons à jour cette politique lorsque nos pratiques ou nos obligations en matière de plateforme changent.

## Modifications de cette politique

Nous pouvons mettre à jour cette Politique de confidentialité de temps en temps. Les modifications importantes seront reflétées en mettant à jour la **Date d'entrée en vigueur** en haut de cette page.

## Nous contacter

Si vous avez des questions concernant cette Politique de confidentialité, contactez-nous à :

**E-mail :** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear est construit avec amour et respect pour la communauté sourde, malentendante et CODA. Votre confiance est importante pour nous.

*Vigilant Ear est un outil d'accessibilité construit avec soin. Veuillez l'utiliser de manière responsable.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Tous droits réservés.<br />
  Brevet en instance
</p>
