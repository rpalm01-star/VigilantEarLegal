# Support Vigilant Ear 👂🛰️

Merci d'utiliser **Vigilant Ear**. Notre mission est de fournir une conscience situationnelle renforcée grâce à une détection avancée d'événements acoustiques et des alertes d'urgence en temps réel.

## Nous contacter

Si vous rencontrez des problèmes techniques, avez des questions sur la précision des alertes, ou souhaitez faire part de vos commentaires, veuillez nous joindre par e-mail à :

**E-mail :** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Questions fréquemment posées

### Comment Vigilant Ear fonctionne-t-il en arrière-plan ?

Vigilant Ear écoute lorsque la surveillance est activée et que les permissions nécessaires sont accordées. Il s'exécute efficacement en arrière-plan et peut envoyer des retours haptiques, des alertes à l'écran, des notifications push optionnelles et (lorsqu'il est appairé) des indices de direction Apple Watch lorsqu'il détecte des sons importants.

### Vigilant Ear draine-t-il ma batterie ?

Non. Vigilant Ear est conçu pour utiliser peu de batterie afin que vous puissiez le laisser actif.

Voici comment nous maintenons une faible consommation de batterie :  
- Modèles d'apprentissage automatique efficaces sur l'appareil qui s'exécutent sur le Neural Engine lorsque disponible.  
- L'écoute en arrière-plan hiberne lorsque *toutes* les catégories d'alertes sont désactivées.  
- Presque tout le traitement reste sur votre téléphone ; le réseau se limite aux cartes, aux flux météo publics, à l'identification musicale optionnelle et aux achats.  
- Un throttling intelligent réduit le travail lorsque la scène acoustique est calme.  
- Les calculs lourds s'exécutent hors du fil d'affichage et uniquement lorsque nécessaire.

### Pourquoi l'application ne détecte-t-elle pas les sirènes ?

Assurez-vous d'avoir accordé la permission **Microphone** dans Réglages iOS. Vigilant Ear a besoin du micro pour traiter les signatures acoustiques. Confirmez que **Sirène** (ou la catégorie concernée) est activée dans Préférences, et que les notifications ont été autorisées si vous attendez des alertes push. Les haptiques peuvent être plus silencieuses si l'appareil est en mode Silencieux selon les réglages système.

### Quelle est la précision des alertes météo ?

Vigilant Ear interroge les flux CAP (Common Alerting Protocol) officiels des gouvernements. Les alertes sont aussi précises que les données fournies par le National Weather Service et d'autres agences internationales (y compris MeteoGate en Europe, CMA en Chine et KMA en Corée). La simulation de localisation, les lacunes de couverture ou les retards réseau peuvent occasionnellement affecter la fréquence des mises à jour.

### L'application fonctionne-t-elle en arrière-plan ?

Oui. Vigilant Ear est conçu pour surveiller les événements acoustiques critiques en arrière-plan lorsque les permissions nécessaires sont activées et qu'au moins une catégorie d'alerte est activée.

### Que contrôlent les bascules d'alerte ?

Les bascules de catégories d'alertes dans **Préférences** contrôlent si Vigilant Ear traite ces sons comme dignes d'alerte pour les **notifications** (et la diffusion associée) lorsque des sons correspondants sont détectés.

Ces bascules affectent principalement la diffusion en **arrière-plan / notification**. Elles **n'éteignent pas** l'affichage de la carte et du radar à l'écran lorsque l'application est ouverte au premier plan.

Les catégories typiques incluent :  
- **Alertes sirène** — Sirènes de véhicules d'urgence (police, pompiers, ambulance, etc.)  
- **Alarmes** — Détecteurs de fumée et alarmes incendie  
- **Coups** — Coups à la porte et sonnettes  
- **Bébé** — Pleurs de bébé (lorsqu'activé)  
- **Alertes météo** — Avertissements de météo sévère provenant de sources CAP gouvernementales officielles  
- **Alertes personnes** — Personnes à proximité (souvent mieux dans des environnements plus calmes ; peut rester en opt-in)

La **permission de notification** est l'interrupteur maître au niveau système. Si vous refusez les notifications sur l'écran de vérification au démarrage (ou plus tard dans Réglages iOS), vous ne recevrez pas d'alertes push même si des catégories individuelles sont activées. Les alertes à l'écran lorsque l'application est ouverte peuvent toujours apparaître.

### Qu'est-ce qui est gratuit, et qu'est-ce que Power Pack+ ?

Le cœur de la sécurité est **gratuit, pour toujours** :

- Alertes sonores locales (sirènes, alarmes, coups/sonnettes, bébé, personne à proximité) avec diffusion à l'écran et push optionnelle  
- Sous-titres en direct **Speaker Mode** (sur l'appareil ; directionnels lorsque le matériel le permet)  
- Flux CAP de météo sévère pour votre région — **NWS** des États-Unis, **MeteoGate** en Europe, **CMA** en Chine et **KMA** en Corée  
- Alertes d'entraînement **Demo Mode** (filigranées pour ne jamais ressembler à une urgence en direct)  
- Indices de direction du compagnon **Apple Watch** et **Live Activity** (écran de verrouillage / Dynamic Island / Watch Smart Stack), lorsque disponibles  

**Power Pack+** est un déblocage unique (**pas un abonnement**) avec un **essai gratuit de 90 jours**. Il ajoute :

- **Speaker Auto-Translate** — traduction sur l'appareil de la parole à proximité dans votre langue  
- **Constellation** — audition partagée multi-iPhone via Ultra-Wideband  
- **Music ID** — reconnaissance de chansons ShazamKit  

Tout pour la reconnaissance s'exécute toujours sur votre appareil ; Power Pack+ ne change que les fonctionnalités débloquées, jamais l'endroit où l'audio brut est envoyé pour analyse.

### Comment gérer Shazam et la traduction ?

Ces options se trouvent sous **Power Pack+** dans l'application (étincelles / menu du ventilateur d'actions) :

- **Shazam (Music ID)** — identification de la musique environnementale sur le radar spatial (Power Pack+)  
- **Speaker Auto-Translate** — traduire les sous-titres en direct dans votre langue (Power Pack+)  

Les flux de météo sévère sont **gratuits** et gérés avec les préférences météo / alertes — ce ne sont pas un module Power Pack+.

### Comment désactiver le microphone lorsque l'application n'est pas au premier plan ?

L'application cesse d'utiliser le microphone pour la surveillance en arrière-plan lorsque *toutes* les bascules de catégories d'alertes sont désactivées dans Préférences. Elle n'écoute pas et n'envoie pas de notifications sonores en arrière-plan lorsque toutes les catégories sont désactivées. Lorsqu'au moins une alerte est activée, le microphone peut être utilisé pour la collecte sonore en arrière-plan.

Vous pouvez aussi révoquer entièrement l'accès Microphone dans Réglages iOS (cela arrête toutes les fonctionnalités acoustiques, y compris l'écoute au premier plan).

### Pourquoi l'application ne détecte-t-elle pas de manière cohérente *tous* les sons ?

Les sons aigus comme les alarmes et les sirènes de camions de pompiers sont relativement faciles à détecter pour le moteur ML sonore. Les sons à large bande (comme les moteurs de voiture ou les pneus) sont plus difficiles ; nous faisons un travail adéquat mais imparfait compte tenu des limites du matériel téléphonique. Les algorithmes Time Difference of Arrival (TDOA) ne sont précis qu'à un certain point compte tenu de la courte distance entre les microphones. La direction nécessite un iPhone à micro stéréo ; les iPads sont axés sous-titres sans relèvement complet.

### Comment fonctionnent Demo Mode et les alertes d'entraînement ?

Ouvrez **Demo Mode** (baguette) pour essayer les sons d'entraînement Home & Street et d'autres aperçus. Les événements d'entraînement sont clairement marqués **DEMO :** pour qu'ils ne prétendent jamais être une véritable urgence. La fermeture de Demo Mode démonte l'état d'entraînement (y compris le spoof GPS temporaire utilisé dans certaines démos).

---

*Vigilant Ear est un outil d'accessibilité conçu avec soin. Veuillez l'utiliser de manière responsable.* 

Fait avec ❤️ pour la communauté D/HH et la recherche acoustique.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
