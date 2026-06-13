# Support VigilantEar 👂🛰️

Merci d'utiliser **VigilantEar**. Notre mission est de fournir une conscience situationnelle améliorée grâce à la détection avancée d'événements acoustiques et des alertes d'urgence en temps réel.

## Nous contacter

Si vous rencontrez des problèmes techniques, avez des questions sur la précision des alertes, ou souhaitez faire part de vos commentaires, veuillez nous contacter par e-mail à :

**Email :** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Foire aux questions

### Comment VigilantEar fonctionne-t-il en arrière-plan ?

VigilantEar écoute uniquement lorsque vous activez la surveillance. Il fonctionne efficacement en arrière-plan et envoie des vibrations ou des alertes visuelles lorsqu'il détecte des sons importants.

### Est-ce que VigilantEar vide ma batterie ?

Non. VigilantEar utilise très peu de batterie. Nous avons optimisé l'application avec soin afin que vous puissiez l'exécuter toute la journée sans souci.

Voici exactement comment nous maintenons l'utilisation de la batterie faible :  
- Nous utilisons des modèles d'apprentissage automatique sur l'appareil efficaces qui n'ont besoin de presque aucune énergie.  
- Nous arrêtons l'écoute automatiquement lorsque l'application n'est pas au premier plan si vous désactivez toutes les alertes dans le panneau des paramètres.
- Nous évitons presque tous les appels de données dans le cloud et gardons le traitement sur votre téléphone.  
- Nous avons ajouté un système intelligent d'étranglement pour réduire les exigences de traitement.
- Nos algorithmes sont basés sur des mathématiques de précision qui fonctionnent hors du fil d'affichage (display thread) et ne s'exécutent que lorsque c'est nécessaire.

### Pourquoi l'application ne détecte-t-elle pas les sirènes ?

Assurez-vous d'avoir accordé les autorisations de **Microphone** dans les Paramètres de votre téléphone. VigilantEar nécessite un accès actif au microphone pour traiter les signatures acoustiques. De plus, assurez-vous que votre appareil n'est pas en "Mode silencieux" si vous souhaitez un retour haptique.

### Quelle est la précision des alertes météorologiques ?

VigilantEar interroge les flux gouvernementaux officiels CAP (Common Alerting Protocol). Les alertes sont aussi précises que les données fournies par le National Weather Service et d'autres agences internationales. La simulation de localisation ou les retards du réseau peuvent occasionnellement affecter la fréquence de mise à jour.

### L'application fonctionne-t-elle en arrière-plan ?

Oui, VigilantEar est conçu pour surveiller les événements acoustiques critiques tout en étant en arrière-plan, à condition que les autorisations nécessaires soient activées.

### Que contrôlent les interrupteurs d'alerte ?

Les principaux interrupteurs d'alerte dans le **menu des paramètres** contrôlent si VigilantEar vous envoie une notification d'alerte lorsqu'il détecte des sons correspondants.  

Ces interrupteurs n'affectent que les notifications envoyées lorsque l'application est en arrière-plan ou n'est pas activement ouverte. Ils n'affectent **pas** l'affichage des alertes à l'écran lorsque l'application est ouverte et au premier plan.

Les interrupteurs principaux sont :  
- **Alertes de sirène** — Sirènes des véhicules d'urgence (police, pompiers, ambulances, etc.)  
- **Alarmes** — Détecteurs de fumée et alarmes incendie  
- **Coups** — Coups à la porte et sonnettes
- **Alertes météorologiques** — Avertissements de temps violent provenant de sources gouvernementales officielles  
- **Alertes de personnes** — Personnes à proximité (dans des environnements calmes)  

### Comment puis-je gérer les sources de données externes et Shazam ?

En plus des principales alertes acoustiques basées sur le microphone, vous pouvez activer des flux de données externes supplémentaires dans le menu **Sources de données** :
- **Shazam (ID Musical)** — Identification de musique environnementale en temps réel cartographiée dynamiquement sur votre radar spatial.
- **Flux météorologiques externes** — Sources de données météorologiques internationales supplémentaires comme MeteoGate (Europe) et les flux CMA/MEM (Chine).  

### Comment puis-je désactiver le microphone lorsque l'application n'est pas au premier plan ?

L'application cesse complètement d'utiliser le microphone en mode arrière-plan lorsque *tous* les interrupteurs d'alerte sont désactivés via le panneau des paramètres de l'application. Elle n'écoute pas et n'envoie pas de notifications en arrière-plan lorsque tous les interrupteurs sont désactivés. Lorsqu'au moins une alerte est activée, le microphone est activé pour la collecte de sons en arrière-plan.

### Pourquoi l'application ne détecte-t-elle pas systématiquement *tous* les sons ?

Les sons aigus comme les alarmes et les sirènes de camions de pompiers sont relativement faciles à détecter pour le moteur de traitement ML des sons. Les sons à large bande (comme les moteurs de voiture ou les pneus) sont plus difficiles, mais nous faisons un travail adéquat (bien qu'imparfait) en tenant compte des capacités limitées du téléphone lui-même. Les algorithmes de différence de temps d'arrivée (TDOA) ne sont précis que dans la mesure de la courte distance entre les microphones.

---

*VigilantEar est un outil d'accessibilité conçu avec soin. Veuillez l'utiliser de manière responsable.* 

Fait avec ❤️ pour la communauté des sourds et malentendants et la recherche acoustique.

© 2026 Wingdings, Inc.
Tous droits réservés
