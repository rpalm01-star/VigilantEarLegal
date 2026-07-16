# Assistance Vigilant Ear 👂🛰️

Merci d'utiliser **Vigilant Ear**. Notre mission est de fournir une conscience situationnelle améliorée grâce à la détection avancée d'événements acoustiques et aux alertes d'urgence en temps réel.

## Nous contacter

Si vous rencontrez des problèmes techniques, avez des questions sur la précision des alertes, ou si vous souhaitez donner votre avis, veuillez nous contacter par e-mail à :

**E-mail :** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Foire Aux Questions (FAQ)

### Comment Vigilant Ear fonctionne-t-il en arrière-plan ?

Vigilant Ear écoute lorsque la surveillance est activée et que les autorisations nécessaires sont accordées. Il s'exécute efficacement en arrière-plan et peut envoyer des retours haptiques, des alertes à l'écran, des notifications push optionnelles, et (lorsqu'elle est appairée) des indications de direction Apple Watch lorsqu'il détecte des sons importants.

### Vigilant Ear vide-t-il ma batterie ?

Non. Vigilant Ear est conçu pour utiliser peu de batterie afin que vous puissiez le laisser allumé.

Voici comment nous maintenons l'utilisation de la batterie faible :  
- Modèles d'apprentissage automatique efficaces sur l'appareil qui s'exécutent sur le Neural Engine là où il est disponible.  
- L'écoute en arrière-plan hiberne lorsque *toutes* les catégories d'alerte sont désactivées.  
- Presque tout le traitement reste sur votre téléphone ; le réseau est limité aux cartes, aux flux météo publics, à l'identification musicale optionnelle, et aux achats.  
- La limitation intelligente réduit le travail lorsque la scène acoustique est calme.  
- Les calculs lourds s'exécutent en dehors du thread d'affichage et uniquement lorsque cela est nécessaire.

### Pourquoi l'application ne détecte-t-elle pas les sirènes ?

Assurez-vous d'avoir accordé l'autorisation du **Microphone** dans les paramètres d'iOS. Vigilant Ear a besoin du micro pour traiter les signatures acoustiques. Confirmez que la catégorie **Sirène (Siren)** (ou la catégorie pertinente) est activée dans les Préférences, et que les notifications ont été autorisées si vous attendez des alertes push. Les retours haptiques peuvent être plus silencieux si l'appareil est en Mode silencieux, selon les paramètres du système.

### Quelle est la précision des alertes météo ?

Vigilant Ear interroge les flux gouvernementaux officiels CAP (Common Alerting Protocol). Les alertes sont aussi précises que les données fournies par le National Weather Service et d'autres agences internationales (y compris MeteoGate en Europe, CMA en Chine, et KMA en Corée). La simulation de localisation, les lacunes de couverture ou les retards du réseau peuvent parfois affecter la fréquence de mise à jour.

### L'application fonctionne-t-il en arrière-plan ?

Oui. Vigilant Ear est conçu pour surveiller les événements acoustiques critiques en arrière-plan lorsque les autorisations nécessaires sont activées et qu'au moins une catégorie d'alerte est allumée.

### Que contrôlent les interrupteurs d'alerte ?

Les interrupteurs de catégories d'alerte dans les **Préférences** contrôlent si Vigilant Ear traite ces sons comme méritant une alerte pour les **notifications** (et la livraison associée) lorsque des sons correspondants sont détectés.

Ces interrupteurs affectent principalement la livraison **en arrière-plan / par notification**. Ils ne désactivent **pas** l'affichage de la carte et du radar à l'écran lorsque l'application est ouverte au premier plan.

Les catégories typiques incluent :  
- **Alertes sirène (Siren Alerts)** — Sirènes des véhicules d'urgence (police, pompiers, ambulance, etc.)  
- **Alarmes (Alarms)** — Détecteurs de fumée et alarmes incendie  
- **Coups (Knocks)** — Coups à la porte et sonnettes  
- **Bébé (Baby)** — Pleurs de bébé (lorsqu'activé)  
- **Alertes météo (Weather Alerts)** — Avertissements de conditions météorologiques extrêmes provenant de sources CAP gouvernementales officielles  
- **Alertes de personnes (People Alerts)** — Personnes à proximité (souvent préférable dans des environnements plus calmes ; peut rester sur adhésion)

**L'autorisation de notification** est l'interrupteur principal au niveau du système. Si vous refusez les notifications sur l'écran de vérification au démarrage (ou plus tard dans les paramètres d'iOS), vous ne recevrez pas d'alertes push même si les catégories individuelles sont activées. Les alertes à l'écran lorsque l'application est ouverte peuvent toujours apparaître.

### Qu'est-ce qui est gratuit et qu'est-ce que le Power Pack+ ?

Le cœur de la sécurité est **gratuit, pour toujours** :

- Alertes sonores locales (sirènes, alarmes, coups/sonnettes, bébé, personne à proximité) avec notification à l'écran et push en option  
- Sous-titres en direct **Mode Locuteur (Speaker Mode)** (sur l'appareil ; directionnels là où le matériel le permet)  
- Flux météo extrêmes CAP pour votre région — **NWS** aux États-Unis, **MeteoGate** en Europe, **CMA** en Chine, et **KMA** en Corée  
- Alertes d'entraînement du **Mode Démo** (filigranées pour ne jamais ressembler à une urgence réelle)  
- Indications de direction du compagnon **Apple Watch** et **Live Activity** (Écran de verrouillage / Dynamic Island / Défilement intelligent de la Watch), là où c'est disponible  

Le **Power Pack+** est un déblocage unique (**pas un abonnement**) avec un **essai gratuit de 90 jours**. Il ajoute :

- **Auto-traduction des locuteurs (Speaker Auto-Translate)** — traduction sur l'appareil de la parole environnante vers votre langue  
- **Constellation** — audition partagée sur plusieurs iPhones via Ultra-Wideband  
- **Music ID** — reconnaissance de chansons via ShazamKit  

Tout ce qui concerne la reconnaissance s'exécute toujours sur votre appareil ; le Power Pack+ modifie uniquement les fonctionnalités débloquées, jamais l'endroit où l'audio brut est envoyé pour analyse.

### Comment gérer Shazam et la traduction ?

Ceux-ci se trouvent sous **Power Pack+** dans l'application (étincelles d'action / menu) :

- **Shazam (Music ID)** — identification de la musique environnementale sur le radar spatial (Power Pack+)  
- **Auto-traduction des locuteurs (Speaker Auto-Translate)** — traduire les sous-titres en direct dans votre langue (Power Pack+)  

Les flux de météo extrême sont **gratuits** et gérés avec les préférences de météo / d'alerte — ce ne sont pas des modules complémentaires du Power Pack+.

### Comment désactiver le microphone lorsque l'application n'est pas au premier plan ?

L'application cesse d'utiliser le microphone pour la surveillance en arrière-plan lorsque *tous* les interrupteurs de catégories d'alerte sont désactivés dans les Préférences. Elle n'écoute pas ou n'envoie pas de notifications sonores en arrière-plan lorsque toutes les catégories sont désactivées. Lorsqu'au moins une alerte est activée, le microphone peut être utilisé pour la collecte sonore en arrière-plan.

Vous pouvez également révoquer complètement l'accès au Microphone dans les paramètres d'iOS (cela arrête toutes les fonctionnalités acoustiques, y compris l'écoute au premier plan).

### Pourquoi l'application ne détecte-t-elle pas systématiquement *tous* les sons ?

Les sons aigus comme les alarmes et les sirènes de camions de pompiers sont relativement faciles à détecter pour le moteur d'apprentissage automatique sonore. Les sons à large bande (comme les moteurs de voiture ou les pneus) sont plus difficiles ; nous faisons un travail adéquat mais imparfait compte tenu des limites matérielles du téléphone. Les algorithmes de Différence de Temps d'Arrivée (TDOA) n'ont qu'une précision limitée compte tenu de la courte distance entre les microphones. La direction nécessite un iPhone à microphone stéréo ; les iPads sont axés sur les sous-titres sans relèvement complet.

### Comment fonctionnent le Mode Démo et les alertes d'entraînement ?

Ouvrez le **Mode Démo (Demo Mode)** (baguette) pour essayer les sons d'entraînement Maison et Rue et d'autres aperçus. Les événements d'entraînement sont clairement marqués **DEMO:** afin qu'ils ne prétendent jamais être une véritable urgence. La fermeture du Mode Démo met fin à l'état d'entraînement (y compris la fausse position GPS temporaire utilisée dans certaines démos).

---

*Vigilant Ear est un outil d'accessibilité construit avec soin. Veuillez l'utiliser de manière responsable.* 

Fait avec ❤️ pour la communauté sourde/malentendante et la recherche acoustique.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Tous droits réservés.<br />
  Brevet en instance
</p>
