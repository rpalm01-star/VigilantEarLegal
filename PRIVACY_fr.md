# Politique de confidentialité de Vigilant Ear 👂🛰️

**Date d'entrée en vigueur :** 11 juillet 2026

## Introduction

Vigilant Ear (« nous », « notre » ou « nos ») s'engage à protéger votre vie privée. Cette Politique de confidentialité explique quelles informations l'application traite, ce qui reste sur votre appareil, et quand des données limitées peuvent être envoyées sur Internet pour fournir des fonctionnalités spécifiques.

## La confidentialité en un coup d'œil

- **La détection acoustique principale s'exécute sur votre appareil.** La classification des sons, le suivi directionnel, les sous-titres en direct et la logique d'alerte sont conçus pour fonctionner localement en utilisant le microphone et les capteurs de votre téléphone.
- **Nous ne vendons pas vos données** et nous n'utilisons pas de SDK publicitaires ou d'analyse comportementale.
- **Nous ne stockons ni ne téléchargeons d'enregistrements audio.** L'audio du microphone est traité en temps réel pour la détection et (lorsque cela est activé) les sous-titres ; il n'est pas sauvegardé sous forme de fichier sonore par Vigilant Ear pour une lecture ultérieure ou une analyse dans le cloud.
- **Certaines fonctionnalités utilisent Internet** — cartes, flux météo extrêmes, identification de musique optionnelle, données routières, achats sur la boutique d'applications (app-store), trafic de maillage multi-téléphones optionnel entre *vos* appareils, et le chargement des pages légales dans l'application. Ceux-ci sont décrits ci-dessous.
- **Vous gardez le contrôle.** Vous pouvez désactiver l'identification musicale Shazam, désactiver des catégories d'alerte, laisser Constellation désactivé, révoquer les autorisations dans les paramètres du système ou arrêter l'écoute en arrière-plan à tout moment.

## Informations traitées sur votre appareil

Avec votre permission, Vigilant Ear accède aux éléments suivants **localement** :

- **Audio du microphone** — Utilisé en temps réel pour détecter les sons environnementaux (sirènes, véhicules, sonnettes, pleurs de bébé, personnes à proximité, etc.), estimer la direction et (lorsque le Mode Locuteur est activé) produire des sous-titres en direct et une traduction optionnelle sur l'appareil.
- **Reconnaissance vocale (sur l'appareil)** — Lorsque les sous-titres sont activés, les frameworks vocaux de votre appareil transcrivent la parole environnante en texte sur le téléphone. Le texte des sous-titres est affiché en direct et n'est pas archivé par Vigilant Ear en tant qu'historique de transcription permanent ; les journaux de débogage n'incluent pas le contenu des sous-titres.
- **Localisation** — Utilisée pour placer les sons détectés et les zones d'alerte météo sur la carte et pour améliorer le guidage directionnel.
- **Orientation et mouvement de l'appareil** — Utilisés pour améliorer la précision de l'orientation.
- **Caméra (optionnelle)** — Utilisée uniquement si vous ouvrez la vue AR de la caméra « voir le son », afin que des marqueurs puissent être épinglés dans l'aperçu en direct de la caméra. Les images de la caméra sont utilisées pour l'affichage sur l'appareil ; elles ne sont pas téléchargées par Vigilant Ear pour la reconnaissance vocale.
- **Apple Watch (optionnelle)** — Lorsqu'une application Watch compagnon est disponible, les étiquettes d'alerte et les indications de direction peuvent être relayées vers la montre appairée pour que vous puissiez jeter un coup d'œil à votre poignet.

Ce traitement sur l'appareil est le cœur de l'application. Les applications concurrentes diffusent souvent l'audio dans le cloud pour l'analyser et le monétiser. Vigilant Ear est conçu différemment : votre pipeline de conscience acoustique est conçu pour fonctionner sur le téléphone lui-même.

## Réseau et services tiers

Lorsque vous utilisez certaines fonctionnalités — ou lorsque l'application en a besoin pour fonctionner — **des données limitées peuvent quitter votre appareil** et être traitées par des services tiers selon leurs propres politiques de confidentialité :

*   **Affichage de la carte**
    *   *Ce qui est envoyé :* Demandes de tuiles de carte ; votre zone d'affichage cartographique et votre emplacement approximatif tel que nécessaire pour rendre la carte
    *   *Fournisseur :* Apple Maps / MapKit
*   **Alertes météo extrêmes**
    *   *Ce qui est envoyé :* Demandes de flux météo publics CAP/Atom ; votre région générale peut être déduite de la sélection de flux et de l'emplacement de l'appareil
    *   *Fournisseur :* U.S. National Weather Service, MeteoGate (Europe), China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), sources publiques liées à l'OMM (WMO) et flux d'alertes publics similaires
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
    *   *Ce qui est envoyé :* Lorsque vous activez Constellation multi-téléphones, les appareils participants échangent les métadonnées acoustiques nécessaires pour une image partagée — par exemple, la pose relative / la télémétrie Ultra-Wideband lorsqu'elle est disponible, les directions, les étiquettes sonores et le texte des sous-titres éphémères. Le trafic se fait de pair à pair (peer-to-peer) entre les téléphones que vous liez ; Wingdings n'exploite pas de relais mesh cloud pour ce pipeline audio.
    *   *Fournisseur :* Frameworks Apple (par ex. Network / Nearby Interaction) entre vos appareils
*   **Documents légaux intégrés à l'application**
    *   *Ce qui est envoyé :* Requêtes web standards lorsque vous ouvrez la Politique de confidentialité, les Conditions d'utilisation, le Support ou les pages README du produit dans l'application
    *   *Fournisseur :* GitHub (hébergement de documents)

Nous choisissons ces services pour fournir des fonctionnalités de carte, de météo, d'étiquetage musical, d'achat et multi-appareils. **Wingdings ne reçoit pas l'audio de votre microphone, l'historique de localisation continu ou les informations de contact de ces fournisseurs.**

## Ce que Wingdings collecte

### Pas de télémétrie ni de diagnostics à distance

Vigilant Ear est conçu pour fonctionner entièrement localement sur votre appareil. Nous ne collectons, ne transmettons ni ne stockons de données de télémétrie à distance, de journaux de plantage, de dossiers de diagnostic ou d'analyses d'utilisation sur les serveurs de Wingdings. Des journaux de débogage **locaux** optionnels peuvent être écrits sur l'appareil à des fins de dépannage ; ils ne sont pas téléchargés par l'application en tant que pipeline de télémétrie, et le texte des sous-titres n'est pas inclus dans le contenu de débogage exporté.

## Ce que nous ne faisons pas

Nous ne faisons **pas** :

- Vendre ou louer vos informations personnelles
- Stocker d'enregistrements audio environnementaux sur nos serveurs
- Exécuter de réseaux publicitaires, de traqueurs inter-applications ou de SDK de profilage comportemental
- Télécharger votre historique de localisation continu chez Wingdings
- Télécharger d'audio brut de microphone pour la reconnaissance vocale ou sonore dans le cloud

## Vos choix et contrôles

Vous pouvez :

- **Révoquer les autorisations** (microphone, localisation, caméra, notifications, reconnaissance vocale) dans les paramètres d'iOS
- **Désactiver l'identification musicale Shazam** dans Power Pack+ / préférences
- **Désactiver des catégories d'alerte individuelles** (sirènes, météo, sonnettes, bébé, etc.)
- **Arrêter l'écoute en arrière-plan** lorsque toutes les catégories d'alerte sont désactivées
- **Laisser Constellation désactivé** pour qu'aucune métadonnée mesh ne soit partagée avec d'autres téléphones
- **Utiliser le Mode Démo** pour prévisualiser les alertes et les fonctionnalités localement avec un filigrane DEMO clair, sans impliquer de véritable urgence

## Directives de la plateforme

Vigilant Ear suit les exigences de confidentialité de l'Apple App Store et les directives d'Apple concernant les applications destinées aux personnes ayant des besoins d'accessibilité. Nous mettons à jour cette politique lorsque nos pratiques ou nos obligations en matière de plateforme changent.

## Modifications de cette politique

Nous pouvons mettre à jour cette Politique de confidentialité de temps en temps. Les modifications importantes seront reflétées en mettant à jour la **Date d'entrée en vigueur** en haut de cette page.

## Nous contacter

Si vous avez des questions concernant cette Politique de confidentialité, contactez-nous à :

**E-mail :** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear est construit avec amour et respect pour la communauté sourde et malentendante. Votre confiance est importante pour nous.

*Vigilant Ear est un outil d'accessibilité construit avec soin. Veuillez l'utiliser de manière responsable.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Tous droits réservés.<br />
  Brevet en instance
</p>
