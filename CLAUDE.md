# CLAUDE.md : portfolio evanbonhoure.me

Site portfolio d'Evan Bonhoure (étudiant admin systèmes, réseaux, cybersécurité ; fait aussi des jeux). Site perso, fait pour le plaisir et pour montrer ce qu'Evan sait faire et a fait : ce n'est pas un site de recherche d'emploi. Hébergé sur GitHub Pages, domaine `evanbonhoure.me` (fichier `CNAME`, ne pas le supprimer).

## Stack et règles

- HTML / CSS / JS statique. Pas de framework, pas de build, pas de backend, pas de dépendance npm.
- Bilingue FR / EN. Responsive avec un vrai menu mobile. Respecter `prefers-reduced-motion` : dans ce cas, pas de démarrage, pas de bulles, pas de parallaxe, tout s'affiche directement.
- Animations uniquement sur `transform` (y compris les propriétés `rotate`, `scale` et `translate`) et `opacity`. Exception assumée, à ne pas multiplier : la couleur du texte de la nav et des titres quand le fond change (sous l'eau, la nuit).
- Flou d'arrière-plan (`backdrop-filter`) limité à la nav et aux boutons posés sur le décor.
- Police : Source Sans 3 (hébergée dans `assets/fonts/`). Pas d'appel à Google Fonts ni à un CDN. Le terminal utilise la police à chasse fixe du système (aucun fichier à charger) ; l'écran de démarrage, lui, n'utilise que Source Sans 3.
- Pas d'emojis, pas de témoignages inventés, pas de compteur ou jauge, pas de poissons cartoon.
- Les textes affichés ne doivent jamais contenir de champ à remplir (`[...]`) : les pages sont publiques dès le push.

## Direction artistique

Frutiger Aero mélangé à du verre liquide : ciel, horizon, surface de l'eau, puis sous l'eau (descente au scroll). Boutons capsule en verre avec reflet, cartes en verre, nuages, montagnes, collines, vagues et bulles dessinés en SVG.

Premier écran : deux éléments seulement, le titre avec ses deux boutons et le terminal, plus les rayons du soleil (`.fa-sun`). Ne pas y rajouter de carte ni de liste : Evan trouvait la page éparpillée.

Goûts d'Evan (novembre 2026), à respecter :

- Pas de petits textes séparés par des points médians (« Réseau · Sécurité »), qu'il trouve « trop IA ». Dans les schémas, le sous-titre d'un nœud passe à la ligne (« vpn » puis « OpenVPN »).
- Pas de pastilles numérotées (« Lab 01 », « Jeu 03 »).
- Peu de texte : la ligne en majuscules et la phrase sous le titre, le compteur « 4 projets · 2 familles », la ligne « Contexte · Schéma · … » et la mention du pied de page ont été retirés à sa demande.
- Il veut un effet à l'arrivée, mais sobre : un seul effet fort plutôt qu'une accumulation (voir Démarrage).
- Pas de gabarit répété : des cartes identiques font « liste à lire ». Chaque projet a sa propre mise en scène, liée à son sujet, avec peu de texte.

À ne pas introduire : dégradé violet/noir, fond blanc pur, néon, arc-en-ciel, bande colorée en haut, grille bento, trois cartes de features identiques, étoiles scintillantes, flèches animées, hover animé partout (les effets de survol sont réservés aux boutons et aux cartes), puces à checks verts, paliers de pricing.

## Fichiers

- `index.html` : version française. `en/index.html` : version anglaise.
- `tout/index.html` et `en/all/index.html` : page « Tout le reste » (les autres projets). Une seule mise en page adaptative, sans `main.js` : un changement s'y fait donc à 2 endroits. Styles dans `assets/tout.css`, posés sur les composants de `assets/writeup.css`, comportement dans `assets/tout.js`.
- Chaque fichier contient deux mises en page : `<div class="desk">` (bureau) et `<div class="mob">` (mobile, affiché sous 760 px). Un changement de texte ou de contenu se fait donc à 4 endroits : FR bureau, FR mobile, EN bureau, EN mobile. Chaque mise en page tient sur une seule très longue ligne : pour une modification répétée, un petit script Python qui remplace des chaînes exactes aux 4 endroits est plus sûr qu'une édition à la main.
- Les ids de la version mobile sont préfixés par `m-` (`#m-labs`, etc.) pour éviter les doublons. Les ancres mobiles pointent vers ces ids.
- Hors des deux mises en page, donc une seule fois par fichier : le script en ligne du `<head>` et l'écran de démarrage `.fa-boot` juste après `<body>`.
- `assets/style.css` : les règles des composants sont préfixées `.desk` ou `.mob`, et une règle qui concerne les deux mises en page doit être écrite des deux côtés. Les keyframes d'origine ont le suffixe `-d` ou `-m` ; celles des blocs ajoutés ensuite (communs aux deux mises en page) n'en ont pas. Ne sont pas préfixés : le démarrage (`.fa-boot…`), les calques créés par le script (`.fa-fx`, `.fa-rip`), le décor créé par `sceneOn` (`.fa-birds`, `.fa-boat`, `.fa-jelly`, `.fa-cable`) et les règles `html[data-sky=…]`.
- `assets/main.js` : tout le comportement, sans dépendance. Sections numérotées dans le fichier.
- `assets/fonts.css`, `assets/writeup.css` : polices et styles du modèle de write-up.
- `_modeles/writeup.html` : modèle de page de write-up (contexte, schéma, étapes, galères, bilan). Le dossier commence par `_`, donc GitHub Pages ne le publie pas.

## Page, de haut en bas

- **Nav** : sur bureau, `main.js` injecte une pastille de verre (`.fa-nav-pill`) qui glisse vers le lien de la section en cours ; sur mobile, le lien actif du menu reçoit `aria-current`. Le lien de changement de langue garde la section en cours (`/en/#labs`), et le passage FR / EN se fait en fondu (`@view-transition`). La nav passe en verre sombre (`.fa-deep`) sous la surface de l'eau et la nuit.
- **Haut de page** : titre sur deux lignes, deux boutons, terminal.
- **Labs** : une scène par projet (classes `.st-*`, en fin de `style.css`), puis le bouton « Voir tout le reste ». Minecraft : île de blocs qui flotte sur le ciel, sans carte. RoboCat : panorama d'un champ avec le trajet radio, texte en bandeau dessous. Maquette réseau : salle sombre, schéma du pare-feu sur toute la largeur. Ce qui n'existe pas encore est en pointillés (`.fa-btn-off`, `.fa-ph`) : un bouton désactivé ne doit pas ressembler à un bouton de verre.
- **Surface de l'eau** : bloc des vagues (`.fa-heave`), entre le ciel et le fond.
- **Jeux** : jeu de zombies en mode cinéma, lecteur (`.fa-demo`) au centre ; RPG sur un écran de combat noir, avec un coeur qui esquive (illustration animée, pas une capture du jeu).
- **Page « Tout le reste »** : un lagon de bulles. Une bulle choisie affiche sa fiche dans un panneau à droite, ou dans un volet qui monte du bas sur mobile (`assets/tout.js`). Une nouvelle entrée s'ajoute en FR et en EN : bulle (`.t-bub`) et fiche (`.t-info`).
- **Fin de page** : à propos et contact dans une même carte de verre sombre (`.fa-pane-dark`), puis le bouton « Remonter à la surface ».

## Comportements (`main.js` et `style.css`)

### Démarrage

- `.fa-boot` : une ligne d'horizon se trace, le nom en sort et se pose dessus avec son reflet dans l'eau, puis l'écran s'ouvre en deux le long de la ligne (`.fa-boot-sky` monte, `.fa-boot-sea` descend). Durée : 3,8 s. Uniquement `transform` et `opacity`.
- Un seul texte (le nom), une seule police (Source Sans 3 en 300, comme le titre du site). Les couleurs suivent `data-sky` : jour, soir, nuit.
- Historique des essais, pour ne pas y revenir : la version à 2,7 s avec des lignes à lire était trop rapide ; la version avec rayons, voiles colorés et bulles autour de l'orbe a été jugée « super moche » ; la version « vieux moniteur » (faux journal système en chasse fixe, orbe, iris, 6,4 s) faisait « vibecode ». Rester sobre : pas de faux journal, pas d'orbe, pas de lueur.
- Le script en ligne du `<head>` pose `fa-booting` sur `<html>` une fois par session (`sessionStorage`, clé `fa-boot`), jamais si `prefers-reduced-motion`. Pas rejoué au rechargement ni au changement de langue.
- Toute l'animation est en CSS (repères de temps en tête du bloc). `main.js` gère « Passer » (bouton, clic, touche) et pose `fa-booted` à la fin. `--fa-b` retarde les apparitions `.fa-up` du haut de page jusqu'à l'ouverture.
- « Passer » ouvre l'écran tout de suite (classe `fa-boot-out`). Ses keyframes portent un autre nom (`…-out`) que celles du déroulé normal : avec le même nom, le navigateur garde l'animation en cours et coupe net.
- Le libellé du bouton est dans le HTML (FR et EN). Pas de barre de progression (règle « pas de jauge »).
- Attention aux noms de classes : une classe posée sur `<html>` ne doit pas porter le nom d'un composant. `fa-boot-skip` est le bouton ; l'état « on passe » s'appelle `fa-boot-out` (la confusion avait bloqué le défilement).

### Terminal en verre

- `<section data-term>` (`#terminal` et `#m-terminal`) dans le haut de page. Sur bureau il est posé en 3D (`.fa-hero-term`) et se remet à plat au survol ou à la saisie ; il est exclu de l'inclinaison des cartes.
- La coquille est dans le HTML aux 4 endroits, `termOn()` fait le reste. À l'arrivée à l'écran il tape tout seul `whoami` puis `ls`.
- Rien n'est inventé : les réponses sont lues dans la page (titre `h3`, paragraphe suivant, `.fa-tag`, `#apropos`, `#contact`). Un texte modifié dans le HTML change aussi dans le terminal.
- L'arborescence (`FILES` dans `termOn`) associe un nom à l'id d'une carte : une nouvelle carte doit y être ajoutée.
- Commandes : `help`, `whoami`, `ls`, `cat`, `cd` (fait défiler jusqu'à la carte), `play` (lance la démo), `contact`, `theme`, `clear`, `reboot` (rejoue le démarrage), plus `sudo`, `pwd`, `echo`. Tab complète, ↑ rappelle. Garder la liste courte et les boutons de commandes visibles : tout le monde ne tape pas.

### Apparitions et relief

- `.fa-up` : apparition au chargement (haut de page). `.fa-in` / `.fa-wait` : apparition au scroll, une seule fois. Les deux se font en 3D (`perspective` + `rotateX`).
- Cartes : un reflet traverse le verre une fois à l'apparition (`.fa-pane::after`), les étiquettes `.fa-tag` arrivent en cascade. Les grands titres de section sont découpés en lettres (`.fa-ch`) qui se redressent.
- Souris : `main.js` incline les cartes `.fa-win` (propriété `rotate`, classe `.fa-tilt`, reflet `.fa-glare` injecté), fait basculer les boutons `.fa-btn` (variables `--rx`, `--ry`, `--mx`, `--my`) et décale le décor selon le pointeur.
- Tactile : les cartes basculent selon leur place à l'écran pendant le défilement (`tilts` dans `motionOn`), le décor suit le gyroscope (`deviceorientation`, sans demande d'autorisation, donc pas sur iOS), le reflet d'un bouton naît sous le doigt.
- Boutons en verre : la couleur d'un `.fa-btn` est dans `--fa-fill` (posée sur `::before`) et s'efface à moitié au survol pour laisser voir le verre (`--fa-clear`). Un nouveau variant de bouton doit définir ces deux variables.
- Parallaxe lissée sur les éléments `data-px`, calculée sur le temps écoulé (même rendu à 60, 120 ou 144 Hz). Les boucles du décor (nuages, bulles, vagues, algues, rayons, particules) sont mises en pause hors écran (`.fa-off`).
- Ancres : un lien `#id` vers une carte pas encore apparue passe par `jump()`, qui vise sa place finale (sans le décalage de l'apparition).

### Schémas vivants

- Chaque fil d'un schéma est un `<span class="fa-wire fa-wire-h|fa-wire-v" data-pk="flux:étape:départ:arrivée">` (positions en % du fil, plusieurs flux séparés par un espace). Un nouveau schéma doit porter ces attributs dans les 4 mises en page.
- `flowsOn()` y fait circuler des paquets (`.fa-pk`, flux `a` bleu, les suivants verts) et fait pulser le nœud d'arrivée. Nœuds, zones et fils se montent un par un à l'apparition (`--fa-i`).
- Flux actuels : migration et connexion des joueurs (Minecraft) ; Internet vers la DMZ et LAN vers Internet (maquette réseau). Ces deux derniers sont une hypothèse de configuration classique, pas les vraies règles Shorewall d'Evan : à confirmer avec lui.

### Scènes des projets

- Règle pour garder des animations fluides : ce qui bouge est un élément à part (HTML ou `<svg>` entier), jamais une forme à l'intérieur d'un grand SVG, sinon le navigateur redessine tout à chaque image.
- Île (Minecraft) : calques empilés (`.st-lay`) qui se montent un par un à l'apparition, l'arbre et le serveur tombent dessus (`.st-drop`), puis les étiquettes (`.st-pin`). L'île flotte ensuite (`.st-bob`).
- Champ (RoboCat) : une seule ligne de temps de 8 s, le piège claque, le signal part, la passerelle le reçoit et le relaie, le nuage réagit. Tout changement de durée doit rester aligné sur ces 8 s. Les tailles sont en `cqw` pour suivre la largeur de la scène.
- Page « Tout le reste » : les bulles montent à l'arrivée, puis flottent sur deux axes à des rythmes différents (`.t-bub-x`, `.t-bub-y`). Le rebond au clic est posé sur `.t-bub-in`.

### Ciel selon l'heure

- Le script du `<head>` pose `data-sky` sur `<html>` selon l'heure du visiteur : `night` de 21 h à 6 h, `dusk` de 18 h à 21 h et de 6 h à 8 h, `day` sinon.
- `.fa-sky` remplace le ciel le soir. `.fa-tint` (trois calques : ciel, vagues, fond) teinte tout le décor par multiplication, le soir et la nuit. `.fa-stars` et `.fa-moon` n'apparaissent que la nuit ; les étoiles sont fixes, sans scintillement.
- La teinte du ciel s'arrête là où commence le bloc des vagues (84 px sur bureau, 58 px sur mobile) : sinon les deux teintes se superposent et font une bande sombre à l'horizon.
- La nuit, le titre et l'intro des labs passent en clair et la nav en verre sombre.
- Pour voir les trois ciels : commande `theme jour | soir | nuit | auto` du terminal (non mémorisée, un rechargement revient à l'heure réelle).

### Eau

- Bulles du décor : elles éclatent au clic puis se reforment (`.fa-drop` = gouttelettes).
- Surface : les trois plans de vagues glissent avec le pointeur, le passage du pointeur sur les vagues laisse de petites ondes, un clic fait partir trois anneaux et des gouttes (`ripple()`, calque `.fa-rip`).
- Bulles libres (`bubble()`, calque fixe `.fa-fx`) : gerbe quand la surface traverse le milieu de l'écran, sillage du pointeur ou du doigt sous l'eau (hors cartes et boutons), colonne de bulles au clic sur `[data-rise]`.
- `.fa-snow` : particules en suspension sous l'eau (un élément, des `box-shadow`).
- Lampe des profondeurs (`.fa-lamp`, dans le décor sous-marin ; seules les méduses et les lueurs du câble sont placées après elle) : voile sombre fixe percé d'un rond de lumière, au-dessus du décor et sous le contenu, donc les cartes restent lisibles. Son opacité suit la profondeur, le rond suit le pointeur ; sur tactile il reste au centre de l'écran.

### Faune et câble

- Décor créé par `sceneOn()` dans `main.js`, une fois, dans les deux mises en page : écrit dans le HTML, il faudrait le recopier à 4 endroits. Styles sans préfixe, en fin de `style.css`.
- Horizon : un vol d'oiseaux (`.fa-birds`) traverse devant les montagnes, un voilier (`.fa-boat`) traverse le lac en passant derrière les collines.
- Sous l'eau : méduses de verre (`.fa-jelly`, positions dans `JELLY`, une liste par mise en page) qui nagent par contractions ; un clic en fait filer une vers le haut. Parallaxe négative (`data-px`), donc elles semblent plus proches que le reste.
- Fond : un câble sous-marin (`.fa-cable`, tracé `CABLE`) parcouru par trois lueurs (`.fa-glow`, deux bleues et une verte à contresens, comme les flux des schémas). Les lueurs sont déplacées point par point le long du tracé, recalculé au redimensionnement.
- Méduses et lueurs sont au-dessus du voile de la lampe : elles restent visibles dans le noir du fond. Le câble, lui, est dessous et ne se voit qu'à la lampe.
- Boucles : `.fa-loop` est le support fixe surveillé (il reçoit `.fa-off` hors écran), `.fa-anim` ce qui bouge dedans. Ne pas surveiller directement un élément qui sort de l'écran sur le côté : il serait mis en pause et ne reviendrait pas.
- Plongée : quand on descend vite sous l'eau, des bulles filent vers le haut le long des bords (dans `tick`).
- Sans animation (`prefers-reduced-motion`), tout reste posé à sa place.
- Toujours pas de poissons : la faune reste du verre (méduses) ou des silhouettes lointaines (oiseaux).

### Démo jouable

- `data-demo` (`play`, `stop`, `restart`, `full`) dans le lecteur, `data-demo-go` pour un bouton placé hors du lecteur. Le jeu n'est chargé qu'au clic, et seulement si `jeux/zombie/index.html` existe ; sinon le lecteur affiche « Démo en préparation » (et la console signale un 404, c'est attendu).

## Journal

### Novembre 2026

- Relief 3D : cartes inclinées avec reflet, boutons en verre qui basculent, décor qui suit le pointeur.
- Retrait du jeu d'horreur DWELL (pages, README). La carte RPG prend toute la largeur sur bureau.
- Retrait de textes à la demande d'Evan (voir Goûts), des pastilles numérotées et de la carte « Projets » du haut de page.
- Schémas vivants, pastille de nav, changement de langue en fondu qui garde la section, bulles qui éclatent, reflet et cascades à l'apparition, pause du décor hors écran.
- Recherche sur ce qui fait un bon portfolio (une quinzaine de sources). À retenir : le premier écran décide ; en cybersécurité, c'est le write-up avec schéma et méthode qui compte ; une seule idée forte tenue partout ; une intro animée doit être passable et jouée une fois ; un terminal doit garder peu de commandes et rester doublé d'un site classique.
- Terminal en verre et écran de démarrage (quatre versions, voir Démarrage).
- Haut de page refait : titre agrandi et terminal côte à côte, rayons du soleil.
- Plongée : nav en verre sombre, gerbe de bulles à la surface, sillage, particules, carte de fin, bouton « Remonter à la surface ».
- Effets tactiles : cartes qui basculent au défilement, gyroscope, reflet sous le doigt.
- Ciel selon l'heure, lampe des profondeurs, surface de l'eau vivante.
- Démarrage refait de zéro (quatrième version) : horizon, nom et reflet, ouverture en deux. Plus de faux journal système ni de police à chasse fixe.
- Passe « verre et lumière » : schémas sur fond bleu vif (`.fa-fig`), nœuds en tuiles de verre avec ombre, reflet franc en biais sur le terminal et la carte de fin, boutons clairs opaques sous l'eau (ils viraient au gris), bouton désactivé en pointillés.
- Plus d'éléments à la descente : oiseaux et voilier à l'horizon, méduses de verre, câble sous-marin lumineux, bulles de plongée, fond marin un peu plus haut (voir Faune et câble).
- Corrections au passage : le second bouton « Lancer la démo » ne faisait rien ; un lien vers une carte pas encore apparue s'arrêtait environ 130 px trop bas.
- Contenu : carte RoboCat V2 avec schéma animé, carte Minecraft corrigée (Forge et Fabric), étiquette « TP de cours » sur la maquette, page « Tout le reste » en FR et en EN.

## À faire

Règles de contenu (validées avec Evan le 18 novembre 2026) :

- Accueil : les gros projets. Page « Tout le reste » : les TP de cours, les labs perso et l'IA.
- RoboCat : garder la mention du prototype (capteur et batterie simulés) et la part d'Evan, du piège jusqu'à The Things Network, dans une équipe de trois. Ne pas nommer les coéquipiers, ne pas publier le rapport PDF tel quel.
- Minecraft : ne pas annoncer de restauration de sauvegarde tant qu'elle n'a pas été testée.
- Ce dépôt est public : aucune IP, aucun identifiant, aucun mot de passe, ni ici ni dans les pages.

Contenu reporté (Evan le fournira plus tard) :

- Homelab : Proxmox sur un PC dédié chez Evan, encore en cours de montage. Carte d'accueil à écrire quand il sera terminé (machine, services, accès).
- Sites web : Evan montrera plus tard lesquels ajouter à la page « Tout », avec leurs liens.
- Jeu de zombies : Evan le montrera plus tard. Déposer ensuite le build dans `jeux/zombie/index.html`. Tant qu'il n'y est pas, le bouton principal « Lancer une démo » mène à « Démo en préparation ».
- Write-ups : Minecraft modé sur Oracle Cloud (Always Free, Crafty, migration depuis le PC portable), RoboCat V2 et maquette réseau VirtualBox (Shorewall, DMZ, OpenVPN, Squid). Copier le modèle dans `writeups/`, puis ajouter un bouton vers le write-up dans la scène du projet, en FR et en EN.
- RPG façon Undertale : Evan enverra le jeu plus tard. Build web à ajouter (l'écran de combat annonce qu'il arrive bientôt).
- Email pro : ajouter un bouton dans la section Contact des deux pages, bureau et mobile.
- Confirmer les flux du schéma réseau avec les vraies règles Shorewall.

Technique :

- Aucune image d'aperçu pour le partage du lien (`og:image`) : à générer à partir du premier écran.
- Page 404 : nue, sans icône d'onglet, hors du style du site.
- Jamais testé sur un vrai téléphone, ni dans Firefox ou Safari ; vitesse et accessibilité non mesurées. Tout a été vérifié dans Chrome, le mobile en simulation.
- CSS mort depuis les retraits : `.fa-chip`, `.fa-row`, `.fa-thumb`, `.fa-t1` à `.fa-t5`, `.fa-link-l`.
- Deux mises en page complètes par fichier : chaque changement se fait à 4 endroits et la page contient deux `h1`. Les fusionner en une seule page adaptative est un gros chantier, à faire avant d'ajouter beaucoup de contenu.

Idées gardées de côté : pare-feu interactif (un paquet passe ou éclate selon les vraies règles), commandes du terminal qui agissent sur la page (`ping`, `dive`), extinction (`shutdown`) en pendant du démarrage, tunnel VPN dans le schéma, aperçus de gameplay dans les cartes de jeux, son discret coupé par défaut.

## Tester

```
python -m http.server 8000
```

Ouvrir `http://localhost:8000` (ne pas ouvrir `index.html` en double-cliquant : les chemins `/assets/...` sont absolus). Vérifier à 1440, 900, 390 px, en FR et en EN, menu mobile ouvert, et sans erreur dans la console.

- Après une modification de `style.css` ou `main.js`, recharger avec Ctrl + F5 : le navigateur garde volontiers l'ancienne version en cache.
- Le démarrage ne joue qu'une fois par onglet. Pour le revoir : taper `reboot` dans le terminal du site, ou ouvrir un nouvel onglet.
- Les trois ciels : `theme jour`, `theme soir`, `theme nuit` dans le terminal du site.

## Publier

`git push` sur `main` : GitHub Pages met le site à jour en une à deux minutes.
