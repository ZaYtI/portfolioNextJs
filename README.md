# Mémoire Antonin Riquart

## En quoi Next.js permet de réaliser des sites internet éco-conçus

### Gestion des images

Next.js propose un composant "Image" spécifique au framework, qui ajuste automatiquement la taille de l'image en fonction de l'écran. Ce composant permet de définir une taille par défaut, contribuant ainsi à réduire le temps de chargement.

### Les routes

Pour la gestion des routes, Next.js offre un mécanisme plus simple et moins encombrant. La création d'une route nécessite simplement la création d'un dossier, par exemple "dashboard", contenant un fichier "page.tsx". Cela crée une route accessible depuis http://localhost:3000/dashboard, évitant la déclaration manuelle de chaque route.

### Gestion des liens

Next.js propose le composant "Link", permettant le chargement asynchrone des pages. Cela réduit le besoin de recharger la page entièrement, offrant une expérience utilisateur plus fluide.

### Optimisation des images avec SVG :

L'utilisation d'images SVG pour les icônes et les éléments graphiques peut contribuer à réduire la taille des fichiers images et à permettre un redimensionnement sans perte de qualité, ce qui peut améliorer l'efficacité énergétique du sit

## Mise en place lors de mon projet

### Réduction des images

Étant donné que nos projets sont souvent très visuels, présenter chaque projet individuellement aurait nécessité beaucoup d'images, contrevenant aux principes d'écoconception. J'ai donc décidé de mettre des liens vers mes profils GitLab et GitHub pour réduire le nombre d'images sur le site.

### Utilisation des modules CSS de Next.js

Plutôt que d'utiliser Tailwind, j'ai préféré utiliser les modules CSS fournis par Next.js. Cela permet une modularité simple pour chaque composant, évitant l'importation de classes potentiellement inutiles et améliorant la lisibilité du code.

### Images

J'ai utilisé le composant "Image" de Next.js pour réduire l'impact des images sur le site. L'utilisation de SVG permet un redimensionnement sans perte de qualité.

### Navbar

J'ai décidé pour la navbar d'utiliser seulement 2 liens, car le site n'en demande pas plus, et l'utilisation aurait nécessité l'utilisation d'un menu burger, ce qui aurait aussi nécessité l'utilisation de JavaScript et comme vu dans votre slide (pas de JS).

### Les liens

En effet, pour ce qui s'agit des liens comme présenté dans la partie ci-dessus, j'ai utilisé le composant "Link" fourni par Next.js qui permet un chargement asynchrone de la page et donc fluidifie l'expérience utilisateur.

(utilisation de chatgpt pour les fautes)
