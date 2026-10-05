# Assistance Vigilant Ear 👂🛰️

Merci d'utiliser **Vigilant Ear**. Notre mission est de fournir une conscience situationnelle améliorée grâce à la détection avancée d'événements acoustiques et aux alertes d'urgence en temps réel.

## Nous contacter

Si vous rencontrez des problèmes techniques, avez des questions sur la précision des alertes, ou si vous souhaitez donner votre avis, veuillez nous contacter par e-mail à :

**E-mail :** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Vidéos

Courtes vidéos avec tout à l'écran — rien que vous ayez besoin d'entendre. Certaines ont aussi une narration, mais rien n'existe uniquement sous forme sonore.

- **[Changer la langue des sous-titres](https://youtu.be/bBTjlWnbFr4)** — changer la langue de l'app et activer **Auto-Translate**, y compris l'étape que la plupart manquent : les sous-titres continuent d'arriver dans l'ancienne langue jusqu'à ce que vous fermiez complètement l'app et la rouvriez.
- **[À quoi ressemblent les alertes](https://youtu.be/1NCXHqQ-BR8)** — détecteur de fumée, coup à la porte, pleurs de bébé, sirène, météo extrême et une confirmation de séisme, chacune avec sa direction.

Plus : **[Tutoriels](https://www.youtube.com/playlist?list=PLV5sYptGyafo)** · **[Exemples](https://www.youtube.com/playlist?list=PLYc8NrtyfisY)**

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

Vigilant Ear utilise les données gouvernementales officielles CAP (Common Alerting Protocol) : les alertes sont donc aussi précises que les avertissements publiés par les agences qui les émettent. Les sources officielles couvrent plus de 140 pays et territoires, et d'autres s'ajoutent régulièrement. Chaque alerte parvient à votre téléphone par le propre relais d'alertes de Vigilant Ear, qui consulte les flux officiels à quelques minutes d'intervalle. Le radar météo de la carte utilise les radars nationaux là où ils sont disponibles, et l'estimation des précipitations par satellite de la NOAA presque partout ailleurs dans le monde. La simulation de localisation, les lacunes de couverture ou les retards du réseau peuvent parfois affecter la fréquence de mise à jour.

### L'application fonctionne-t-elle en arrière-plan ?

Oui. Vigilant Ear est conçu pour surveiller les événements acoustiques critiques en arrière-plan lorsque les autorisations nécessaires sont activées et qu'au moins une catégorie d'alerte est allumée.

### Puis-je ressentir les alertes sur une montre ou un bracelet autre que l'Apple Watch ?

Oui. Les alertes de Vigilant Ear sont des notifications iPhone ordinaires : la plupart des montres et bracelets qui affichent les notifications de l'iPhone vibreront donc pour elles — avec leur propre vibration, et non avec les motifs distinctifs de Vigilant Ear, qui nécessitent une Apple Watch. Quelle que soit la marque, allez dans **Réglages → Bluetooth** sur votre iPhone, touchez ⓘ à côté de la montre ou du bracelet, vérifiez que **Share System Notifications** est activé, et gardez l'iPhone à portée Bluetooth (une table de chevet suffit). Les alertes urgentes de Vigilant Ear sont marquées **Time Sensitive** : elles passent donc même lorsque le **Sleep Focus** de l'iPhone est activé, sauf si vous avez désactivé les notifications **Time Sensitive**.

Si vous dormez avec votre montre ou votre bracelet, vérifiez ses propres réglages de sommeil et de Do Not Disturb : ils rendent tout silencieux, Vigilant Ear compris.

- **Garmin** — Dans l'app Garmin Connect, ouvrez les réglages de votre appareil et activez **Smart Notifications** (sous **Notifications & Alerts**). Garmin peut activer Do Not Disturb automatiquement pendant votre sommeil, ce qui empêche la montre de vibrer pour les notifications ; désactivez cette option pour ressentir les alertes la nuit. Le nom et l'emplacement du réglage varient selon le modèle : consultez le manuel de votre montre.
- **Fitbit** — Dans l'app Fitbit, ouvrez les réglages **Notifications** de votre appareil et activez les notifications d'application pour Vigilant Ear. **Sleep Mode** et **Do Not Disturb** de Fitbit coupent toutes les notifications : laissez-les tous deux désactivés la nuit.
- **Amazfit** — Dans l'app Zepp, ouvrez votre appareil, puis **Notifications and Reminder → App Alerts → Manage Apps**, et sélectionnez Vigilant Ear. Le mode Do Not Disturb de la montre elle-même bloque les alertes : désactivez-le la nuit.
- **Xiaomi Smart Band** — Dans l'app Mi Fitness, activez les notifications d'application et l'interrupteur de Vigilant Ear. Le bracelet reste silencieux en Do Not Disturb ou en Sleep Mode : désactivez les deux la nuit ; si **Notify only when worn** est activé, il reste aussi silencieux tant qu'il n'est pas à votre poignet.
- **Huawei** — Dans l'app HUAWEI Health, ouvrez votre appareil, touchez **Notifications** et activez l'interrupteur de Vigilant Ear. Do Not Disturb, réglé dans la même app, empêche le bracelet de vibrer pendant ses plages horaires : désactivez-le (ou excluez vos heures de sommeil de sa programmation) pour ressentir les alertes la nuit.
- **Pebble** — Dans l'app Pebble Core, vérifiez que Vigilant Ear est activé dans l'onglet **Notifications**. **Quiet Time** coupe les notifications et la vibration : laissez-le désactivé la nuit.

Les Samsung Galaxy Watch et Google Pixel Watch ne fonctionnent pas avec l'iPhone, et les bagues comme Oura ne peuvent pas vibrer pour les notifications.

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
- Flux météo extrêmes pour votre région — **sources officielles dans plus de 140 pays et territoires**, et d'autres s'ajoutent régulièrement  
- Alertes d'entraînement du **Terrain de jeu des fonctionnalités** (filigranées pour ne jamais ressembler à une urgence réelle)  
- Indications de direction du compagnon **Apple Watch** et **Live Activity** (Écran de verrouillage / Dynamic Island / Défilement intelligent de la Watch), là où c'est disponible  
- **Oscilloscope acoustique** — le visualiseur sonore en direct, gratuit pour tous (les outils de capture pour l'entraînement font partie de Power Pack+)  

Le **Power Pack+** est un déblocage unique (**pas un abonnement**) avec un **essai gratuit de 90 jours**. Il ajoute :

- **Auto-traduction (Auto-Translate)** — traduction sur l'appareil de la parole environnante vers votre langue  
- **Constellation** — audition partagée sur plusieurs iPhones via Ultra-Wideband  
- **Music ID** — reconnaissance de chansons via ShazamKit  

Tout ce qui concerne la reconnaissance s'exécute toujours sur votre appareil ; le Power Pack+ modifie uniquement les fonctionnalités débloquées, jamais l'endroit où l'audio brut est envoyé pour analyse.

### Comment gérer Shazam et la traduction ?

Ceux-ci se trouvent sous **Power Pack+** dans l'application (étincelles d'action / menu) :

- **Shazam (Music ID)** — identification de la musique environnementale sur le radar spatial (Power Pack+)  
- **Auto-traduction (Auto-Translate)** — traduire les sous-titres en direct dans votre langue (Power Pack+)  

Les flux de météo extrême sont **gratuits** et gérés avec les préférences de météo / d'alerte — ce ne sont pas des modules complémentaires du Power Pack+.

### Comment désactiver le microphone lorsque l'application n'est pas au premier plan ?

L'application cesse d'utiliser le microphone pour la surveillance en arrière-plan lorsque *tous* les interrupteurs de catégories d'alerte sont désactivés dans les Préférences. Elle n'écoute pas ou n'envoie pas de notifications sonores en arrière-plan lorsque toutes les catégories sont désactivées. Lorsqu'au moins une alerte est activée, le microphone peut être utilisé pour la collecte sonore en arrière-plan.

Vous pouvez également révoquer complètement l'accès au Microphone dans les paramètres d'iOS (cela arrête toutes les fonctionnalités acoustiques, y compris l'écoute au premier plan).

### Pourquoi l'application ne détecte-t-elle pas systématiquement *tous* les sons ?

Les sons aigus comme les alarmes et les sirènes de camions de pompiers sont relativement faciles à détecter pour le moteur d'apprentissage automatique sonore. Les sons à large bande (comme les moteurs de voiture ou les pneus) sont plus difficiles ; nous faisons un travail adéquat mais imparfait compte tenu des limites matérielles du téléphone. Les algorithmes de Différence de Temps d'Arrivée (TDOA) n'ont qu'une précision limitée compte tenu de la courte distance entre les microphones. La direction nécessite un iPhone à microphone stéréo ; les iPads sont axés sur les sous-titres sans relèvement complet.

### Comment fonctionnent le Terrain de jeu des fonctionnalités et les alertes d'entraînement ?

Ouvrez le **Terrain de jeu des fonctionnalités** (baguette) pour essayer les sons d'entraînement Maison et Rue et d'autres aperçus. Les événements d'entraînement sont clairement marqués **PREVIEW** afin qu'ils ne prétendent jamais être une véritable urgence. La fermeture du Terrain de jeu des fonctionnalités met fin à l'état d'entraînement (y compris la fausse position GPS temporaire utilisée dans certaines démos).

### Pourquoi un sous-titre a-t-il changé juste après son apparition ?

C'est l'app qui se vérifie elle-même. Juste après la finalisation d'une phrase, Vigilant Ear relit les dernières secondes d'audio avec le contexte complet et peut — en deux secondes environ — restaurer un mot manqué ou corriger un mot mal entendu. Ensuite, le texte ne change plus jamais. Tout se passe sur votre appareil, comme toujours.

---

*Vigilant Ear est un outil d'accessibilité construit avec soin. Veuillez l'utiliser de manière responsable.* 

Fait avec ❤️ pour la communauté sourde/malentendante et la recherche acoustique.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Tous droits réservés.<br />
  Brevet en instance
</p>
