# Politique de confidentialité pour Vigilant Ear 👂🛰️

**Date d'entrée en vigueur :** 11 juillet 2026

## Introduction

Vigilant Ear (« nous », « notre » ou « nos ») s'engage à protéger votre confidentialité. Cette politique de confidentialité explique quelles informations l'application traite, ce qui reste sur votre appareil et quand des données limitées peuvent être envoyées sur Internet pour fournir des fonctionnalités spécifiques.

## La confidentialité en un coup d'œil

- **La détection acoustique de base s'exécute sur votre appareil.** La classification des sons, le suivi directionnel, les sous-titres en direct et la logique des alertes sont conçus pour fonctionner localement en utilisant le microphone et les capteurs de votre téléphone.
- **Nous ne vendons pas vos données** et nous n'utilisons pas de SDK de publicité ou d'analyse comportementale.
- **Nous ne stockons ni ne téléversons d'enregistrements audio.** L'audio du microphone est traité en temps réel pour la détection et (lorsqu'ils sont activés) les sous-titres ; il n'est pas sauvegardé sous forme de fichier sonore par Vigilant Ear pour une lecture ultérieure ou une analyse dans le cloud.
- **Certaines fonctionnalités utilisent Internet** — les cartes, les flux de météo sévère, l'identification musicale optionnelle, les données routières, les achats sur la boutique d'applications, le trafic maillé multi-téléphones optionnel entre *vos* appareils, et le chargement des pages juridiques dans l'application. Celles-ci sont décrites ci-dessous.
- **Vous gardez le contrôle.** Vous pouvez désactiver l'identification musicale Shazam, désactiver des catégories d'alertes, laisser Constellation désactivé, révoquer des permissions dans les paramètres du système ou arrêter l'écoute en arrière-plan à tout moment.

## Informations traitées sur votre appareil

Avec votre permission, Vigilant Ear accède **localement** aux éléments suivants :

- **Audio du microphone** — Utilisé en temps réel pour détecter les sons environnementaux (sirènes, véhicules, sonnettes, pleurs de bébé, personnes à proximité, etc.), estimer la direction, et (lorsque Speaker Mode est activé) produire des sous-titres en direct et une traduction optionnelle sur l'appareil.
- **Reconnaissance vocale (sur l'appareil)** — Lorsque les sous-titres sont activés, les frameworks de parole de votre appareil transcrivent la parole à proximité en texte sur le téléphone. Le texte des sous-titres s'affiche en direct et n'est pas archivé par Vigilant Ear comme un historique permanent de transcriptions ; les journaux de débogage n'incluent pas le contenu des sous-titres.
- **Localisation** — Utilisée pour placer les sons détectés et les zones d'alerte météo sur la carte et pour améliorer le guidage directionnel.
- **Orientation et mouvement de l'appareil** — Utilisés pour améliorer la précision du relèvement.
- **Caméra (optionnelle)** — Utilisée uniquement si vous ouvrez la vue AR caméra « voir le son », afin que les marqueurs puissent être épinglés dans l'aperçu caméra en direct. Les images de la caméra sont utilisées pour l'affichage sur l'appareil ; elles ne sont pas téléversées par Vigilant Ear pour la reconnaissance sonore.
- **Apple Watch (optionnelle)** — Lorsqu'un compagnon Watch est disponible, les libellés d'alerte et les indices de direction peuvent être relayés vers la Watch appairée afin que vous puissiez jeter un coup d'œil à votre poignet.

Ce traitement sur l'appareil est le cœur de l'application. Les applications concurrentes diffusent souvent de l'audio vers le cloud pour analyse et monétisation. Vigilant Ear est conçu différemment : votre pipeline de conscience acoustique est conçu pour s'exécuter sur le téléphone lui-même.

## Réseau et services tiers

Lorsque vous utilisez certaines fonctionnalités — ou lorsque l'application en a besoin pour fonctionner — **des données limitées peuvent quitter votre appareil** et être gérées par des services tiers selon leurs propres politiques de confidentialité :

*   **Affichage de la carte**
    *   *Ce qui est envoyé :* Requêtes de tuiles de carte ; votre fenêtre de carte et votre localisation approximative selon les besoins pour afficher la carte
    *   *Fournisseur :* Apple Maps / MapKit
*   **Alertes météo sévère**
    *   *Ce qui est envoyé :* Requêtes vers des flux météo CAP/Atom publics ; votre région générale peut être déduite de la sélection des flux et de la localisation de l'appareil
    *   *Fournisseur :* U.S. National Weather Service, MeteoGate (Europe), China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), sources publiques liées à l'OMM, et flux d'alertes publics similaires
*   **Identification musicale (optionnelle, Power Pack+)**
    *   *Ce qui est envoyé :* Courtes empreintes audio — jamais l'audio brut — lorsque de la musique est détectée et que Shazam est activé (peut être désactivé dans les réglages)
    *   *Fournisseur :* Apple Shazam / ShazamKit
*   **Contexte routier**
    *   *Ce qui est envoyé :* Requêtes anonymes Overpass API basées sur le secteur de carte autour de votre localisation
    *   *Fournisseur :* Contributeurs OpenStreetMap via Overpass API
*   **Achats et droits**
    *   *Ce qui est envoyé :* Jetons d'achat et statut d'entitlement / d'essai pour le déblocage unique optionnel Power Pack+ (pas un abonnement)
    *   *Fournisseur :* Apple App Store
*   **Maillage Constellation (optionnel, Power Pack+)**
    *   *Ce qui est envoyé :* Lorsque vous activez Constellation multi-téléphones, les appareils participants échangent les métadonnées acoustiques nécessaires à une image partagée — par exemple pose relative / télémétrie Ultra-Wideband lorsque disponible, relèvements, libellés de sons et texte de sous-titres éphémère. Le trafic est de pair à pair entre les téléphones que vous reliez ; Wingdings n'exploite pas de relais maillé cloud pour ce pipeline audio.
    *   *Fournisseur :* Frameworks Apple (p. ex. Network / Nearby Interaction) entre vos appareils
*   **Documents juridiques dans l'application**
    *   *Ce qui est envoyé :* Requêtes web standard lorsque vous ouvrez les pages Politique de confidentialité, Conditions, Support ou README produit dans l'application
    *   *Fournisseur :* GitHub (hébergement des documents)

Nous choisissons ces services pour fournir les fonctionnalités de carte, météo, étiquetage musical, achat et multi-appareils. **Wingdings ne reçoit pas votre audio de microphone, votre historique de localisation continue ni vos coordonnées de contact de la part de ces fournisseurs.**

## Ce que Wingdings collecte

### Pas de télémétrie ni de diagnostics à distance

Vigilant Ear est conçu pour fonctionner entièrement en local sur votre appareil. Nous ne collectons, ne transmettons ni ne stockons de télémétrie à distance, journaux de plantage, enregistrements de diagnostic ou analyses d'utilisation sur les serveurs Wingdings. Des journaux de débogage **locaux** optionnels peuvent être écrits sur l'appareil pour le dépannage ; ils ne sont pas téléversés par l'application comme un pipeline de télémétrie, et le texte des sous-titres n'est pas inclus dans le contenu de débogage exporté.

## Ce que nous ne faisons pas

Nous ne :

- Vendons ni ne louons vos informations personnelles
- Stockons d'enregistrements audio environnementaux sur nos serveurs
- Exécutons de réseaux publicitaires, de trackers inter-applications ni de SDK de profilage comportemental
- Téléversons votre trajectoire de localisation continue vers Wingdings
- Téléversons l'audio brut du microphone pour la reconnaissance vocale ou sonore dans le cloud

## Vos choix et contrôles

Vous pouvez :

- **Révoquer les permissions** (microphone, localisation, caméra, notifications, reconnaissance vocale) dans Réglages iOS
- **Désactiver l'identification musicale Shazam** dans Power Pack+ / préférences
- **Désactiver des catégories d'alertes individuelles** (sirènes, météo, sonnettes, bébé, etc.)
- **Arrêter l'écoute en arrière-plan** lorsque toutes les catégories d'alertes sont désactivées
- **Laisser Constellation désactivé** pour qu'aucune métadonnée maillée ne soit partagée avec d'autres téléphones
- **Utiliser Demo Mode** pour prévisualiser localement les alertes et fonctionnalités avec un filigrane DEMO clair, sans laisser entendre une véritable urgence

## Directives de la plateforme

Vigilant Ear suit les exigences de confidentialité de l'Apple App Store et les directives d'Apple pour les applications servant les personnes ayant des besoins d'accessibilité. Nous mettons à jour cette politique lorsque nos pratiques ou nos obligations de plateforme changent.

## Modifications de cette politique

Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Les changements importants seront reflétés par la mise à jour de la **Date d'entrée en vigueur** en haut de cette page.

## Nous contacter

Si vous avez des questions sur cette politique de confidentialité, contactez-nous à :

**E-mail :** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear est conçu avec amour et respect pour la communauté Sourde et malentendante. Votre confiance compte pour nous.

*Vigilant Ear est un outil d'accessibilité conçu avec soin. Veuillez l'utiliser de manière responsable.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
