# Acoustic Scope — La vue professionnelle d'analyse sonore

L'**Acoustic Scope** transforme Vigilant Ear en instrument d'analyse sonore de poche : une vue en direct de tout ce que le microphone entend, de six façons différentes. Utilisez-le pour *voir* la forme d'un son, mesurer sa hauteur et son niveau, figer et parcourir la dernière demi-minute, et capturer des extraits pour entraîner votre propre pack de sons personnalisé.

Ouvrez-le depuis l'**éventail d'actions** (la rafale tournante de la barre supérieure) : touchez la rafale, puis l'**égaliseur** (les barres animées vertes et cyan). L'Acoustic Scope est **gratuit pour tout le monde** — les vues en direct ci-dessous ne nécessitent aucun achat. Seuls les outils de capture **Train** (ci-dessous), qui enregistrent des extraits pour vos packs de sons personnalisés, font partie du Power Pack+.

---

## L'en-tête

- **Case dB** — le niveau large bande en direct. Les carrés **A / C / Z** choisissent la pondération fréquentielle (A ≈ le volume perçu par une oreille humaine ; C conserve plus de graves ; Z est plate/sans pondération). La pondération pilote aussi la vue au ⅓ d'octave.
- **root** (vue Chroma uniquement) — la classe de hauteur musicale la plus forte dans la pièce, mise à jour en direct.
- **✕** ferme le scope. La détection et les alertes continuent de fonctionner tant que le scope est ouvert — c'est une fenêtre, pas un mode.

## Les six vues

Changez avec la barre du bas.

| Vue | Ce qu'elle montre |
|---|---|
| **Spectre** | Le niveau par fréquence, à l'instant — une courbe en direct avec une ligne blanche de maintien de crête. |
| **Spectrogramme** | La fréquence dans le **temps** — les ~24 dernières secondes défilent, la couleur = le niveau. La plupart des sons y ont une forme visuelle reconnaissable. |
| **RTA au ⅓ d'octave** | Les 28 bandes ISO standard, comme un analyseur temps réel matériel. Les repères orange sont le maintien de crête. |
| **Chroma** | Les 12 classes de hauteur musicale — quelles notes sont présentes, la plus forte étant mise en évidence. |
| **Partiels** | Les sons purs proéminents suivis dans le temps sous forme de lignes colorées, chacune étiquetée avec sa note musicale. Les noms des notes et la série harmonique ont leurs propres colonnes, et les sons plus aigus, comme ceux des détecteurs de fumée, sont étiquetés à leur hauteur réelle. Définissez une **note cible** : elle s'affiche comme une ligne de référence pour chanter ou s'accorder. Idéal pour les sifflements, les sirènes, les chants d'oiseaux et les ronronnements de machines. |
| **Visualiseur** | La musique de la pièce en spectacle lumineux en direct — les temps font détoner des anneaux, les graves gonflent la scène, les aigus font pleuvoir des étincelles. Il a sa propre section complète ci-dessous. |

Les **drapeaux** orange du Spectrogramme marquent les moments où le classificateur de sons s'est déclenché, avec son étiquette et sa confiance — vous voyez ainsi exactement à quelle forme le modèle a réagi.

## Lire et mesurer

- **Curseur de gauche** — l'échelle d'affichage. Baissez une vue saturée ou remontez une vue silencieuse (affichage seulement ; n'affecte jamais la détection).
- **Touchez** le Spectrogramme — un relevé en réticule : fréquence, niveau et il y a combien de temps.
- **Faites glisser** un cadre — les statistiques de cette zone : plage de fréquences, durée, crête, centroïde, énergie, facteur de crête.
- **Pincez** — zoomez sur l'axe des fréquences. Le bouton ⤢ réinitialise.
- **ⓘ** — le panneau de télémétrie (détails de la FFT, fréquence dominante, centroïde spectral) ainsi qu'un réglage de **calibration** qui décale tous les relevés de niveau si vous les avez comparés à un sonomètre de référence.

## Figer et revoir

Le bouton **pause** fige l'image (le micro et les alertes continuent de fonctionner). Pendant que c'est figé, une barre de transport apparaît :

- **▶** lit la mémoire tampon visuellement ; le bouton de vitesse alterne 1× / 2× / 0,5×.
- **🔍− / 🔍+** zooment sur la fenêtre temporelle ; la **minicarte** à droite montre toute la mémoire tampon — faites-la glisser pour parcourir.
- Le Spectrogramme et les Partiels partagent une même horloge : vous pouvez donc passer de l'un à l'autre sur exactement le même instant figé.

## Capturer des sons pour un pack personnalisé

C'est le super-pouvoir du scope : saisir de vrais exemples d'un son *au moment où vous l'entendez*, directement depuis la vue en direct.

1. Touchez le bouton magenta **Train** (carré en pointillés). La vue se fige et une **bande** magenta apparaît.
2. Faites glisser les bords de la bande autour d'un exemple net de votre son — l'étiquette affiche la durée sélectionnée. Quelques secondes autour du son sont idéales.
3. Touchez **Enregistrer** (le bouton flèche vers le bac). L'audio sous la bande est écrit dans un extrait et un cadre numéroté apparaît. La bande reste armée — parcourez jusqu'à l'exemple suivant et enregistrez de nouveau (jusqu'à 6 par session). Touchez deux fois un cadre numéroté pour supprimer cet extrait.
4. Touchez le **marteau** pour ouvrir le panneau **Build** :
   - **Nom du modèle** — le pack (par exemple *Chouettes du jardin*).
   - **Nom du son** — ce que les utilisateurs voient sur la carte.
   - **Étiquette de classe** — l'étiquette exacte que le modèle entraîné émettra (dérivée automatiquement ; minuscules et traits de soulignement).
   - **Quand détecté** — *carte seulement* (un point, une identification) ou *en mouvement* (suivi comme un véhicule). Les sons personnalisés identifient ; ils ne déclenchent pas d'alertes d'urgence — la détection de sécurité intégrée s'en charge toujours.
   - Icône, couleur, seuil de confiance et portée maximale — la carte d'aperçu en direct montre exactement l'allure qu'aura une détection.
5. Touchez **Build & Export**. Vous obtenez un zip contenant vos extraits (déjà dans l'arborescence de Create ML) plus les fichiers du pack, prêts à être envoyés sur un Mac.
6. Sur le Mac, entraînez un **Sound Classifier** dans Create ML à partir du dossier `clips/`, déposez le `model.mlpackage` exporté dans le dossier du pack, recompressez-le et importez-le sur le téléphone dans **Sources d'alerte → Packs de sons personnalisés**.

La partie entraînement et import — y compris la **classe Background obligatoire** et le garde-fou qui évite les fausses alertes — est détaillée pas à pas dans le **[guide des Packs de Sons Personnalisés](https://vigilantear.com/fr/byom/)**.

## L'onglet Visualiseur — la musique en lumière

L'onglet **Visualiseur** transforme la musique de la pièce en spectacle lumineux qu'un spectateur
Sourd, malentendant ou CODA peut *ressentir avec les yeux*. Rien n'y est décoratif — chaque élément
est piloté par une caractéristique acoustique réelle, en direct depuis les microphones :

- **Chaque temps fait détoner un anneau** — un détecteur d'attaque déclenche des explosions
  d'anneaux et un flash d'écran exactement au moment où une personne entendante sentirait la grosse caisse.
- **Les graves respirent** — l'anneau d'ancrage au centre et les anneaux texturés à la dérive
  gonflent avec l'énergie des basses fréquences.
- **Les aigus font pleuvoir des étincelles** — cymbales et charlestons tombent en gouttes lumineuses.
- **Le titre du morceau chevauche un globe** — une fois le morceau reconnu, son titre enveloppe
  l'équateur d'un globe invisible qui traverse la scène, et l'artiste occupe le coin supérieur droit.

Définissez votre **nom de DJ** (et sa couleur) dans **Préférences → Acoustic Visualizer** — il
occupe le coin supérieur gauche, dans le style de l'étiquette de l'artiste.

**Mettez-le sur un téléviseur :** touchez le **bouton tv** dans l'en-tête du scope, connectez-vous
avec un câble USB-C–HDMI ou la Recopie de l'écran AirPlay, puis appuyez sur **Mirror** — le grand
écran n'affiche que les graphismes, tandis que ce téléphone reste les commandes et le microphone.
Changez d'onglet du scope sur le téléphone et le téléviseur suit : le même Mirror met donc le Spectrogramme ou le Visualiseur sur le mur.

## Bon à savoir

- Le scope ne coûte rien quand il est fermé — l'analyse supplémentaire ne tourne que lorsqu'il est à l'écran.
- Le laisser ouvert ne coûte pas grand-chose non plus : le Spectrogramme ne coûte presque rien, il ne fera donc pas chauffer votre téléphone même si vous le regardez longtemps, et le Spectrogramme comme les Partiels se redessinent à un rythme régulier et lisible sans rien manquer de ce qu'ils entendent.
- Les valeurs absolues en dB ne sont pas calibrées par défaut ; elles sont cohérentes et comparables, et le réglage de calibration de ⓘ permet de les aligner sur un sonomètre de référence.
- Le scope lit le canal du microphone principal. La détection, la localisation directionnelle et les alertes ne sont affectées par rien de ce que vous faites ici.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
