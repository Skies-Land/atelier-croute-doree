
# 🍕 ATELIER CROÛTE DORÉE

## 📜 Table des matières
- **[📖 Description](#-description)**
- **[🔗 Technologies](#-technologies)**
- **[📂 Architecture du projet](#-architecture-du-projet)**
- **[🚀 Installation et exécution](#-installation-et-exécution)**
- **[📌 Améliorations possibles](#-améliorations-possibles)**
- **[👤 Skies-Land - Jonathan Araldi](#-skies-land---jonathan-araldi)**
- **[📷 Image de preview](#-image-de-preview)**
---

## 📖 Description
Projet développé en suivant un cours de **[Bedimcode](https://www.youtube.com/@Bedimcode)**.

- Site vitrine d'une enseigne de pizzeria fictive.
- Projet initialement développé en **HTML**, **CSS** et **JavaScript**.
- Adaptation avec **React**, **TypeScript** & **SASS**.
- Déploiement du projet sur **Firebase**.
- Animations lors du défilement et transitions fluides.
- Approche Mobile First, optimisée pour les bureaux.
- Interface utilisateur réactive et moderne.
### 🔎 Accès au projet : **[Atelier Croûte Dorée](https://atelier-croute-doree-2db48.web.app/)**

## 🔗 Technologies
#### Phase 1 :
- **[CDN Icons - *"Remixicon"*](https://cdnjs.com/libraries/remixicon)**
- **[Icons](https://remixicon.com/)**
- **[Google Fonts - *"Carter One"*](https://fonts.google.com/specimen/Carter+One?query=Carter)**
- **[Google Fonts - *"Montserrat"*](https://fonts.google.com/specimen/Montserrat)**
- **[JS Functions](https://github.com/bedimcode/responsive-watches-website/blob/main/assets/js/main.js)**
- **[Swiperjs](https://swiperjs.com/get-started)**
- **[ScrollReveal](https://scrollrevealjs.org/)**
- **[Original Images](https://fr.freepik.com/)**

#### Phase 2 :
- **[Vite.js](https://vite.dev/)**
- **[SASS](https://sass-lang.com/)**
- **[React-router](https://reactrouter.com/)**
- **[Remixicon - *"utilisation avec React"*](https://github.com/Remix-Design/RemixIcon?tab=readme-ov-file#react)**
- **[React-Toastify](https://www.npmjs.com/package/react-toastify)**
- **[Swiper - *"utilisation avec React"*](https://swiperjs.com/react)**
- **[Firebase](https://firebase.google.com/)**

## 📂 Architecture du projet
```
src/
│   App.tsx                     # Composant principal de l'application
│   Main.tsx                    # Point d'entrée React
│   Router.tsx                  # Configuration des routes de l'application
│   vite-env.d.ts               # Types pour l'environnement Vite.js
│
├── components/            	# Composants réutilisables
│   ├── elements/               # Composants UI basiques (boutons, images, notification)
│   ├── features/               # Composants spécifiques avec logique (active-link, scroll, shadow-header)
│   └── page-sections/     	# Sections de pages organisées par feature (header, footer, home, etc.)
│
├── hook/                  	# Hooks personnalisés
│   └── useMenuToggle.tsx       # pour gérer ouverture, fermeture et navigation de la navbar en appareil mobile
│
├── medias/               	# Médias du projet (images, SVG)
│   ├── img/              	# Images PNG et JPG
│   └── svg/              	# Fichiers SVG
│   └── ingrédients.tsx		# Un tableau d'objets pour les images PNG  
│
├── pages/                	# Pages principales de l'application
│   └── home-page.tsx		# Intégration des élément de page-sections/
│
├── scss/                 	# Styles globaux du projet
│   ├── base.scss         	# Styles de base
│   └── variables.scss    	# Variables globales (couleurs, polices)
│
└── types/                	# Types TypeScript

```
## 🚀 Installation et exécution
1 - Cloner le projet

```bash
  git clone https://github.com/Skies-Land/atelier-croute-doree.git
```
2 - Installer les dépendances

```bash
  npm install
```
3 - Lancer l'application

```bash
  npm run dev
```

## 📌 Améliorations possibles
- ✅ Ajouter des tests unitaires avec Jest & React Testing Library
- ✅ Ajouter une API pour récupérer les produits dynamiquement
- ✅ Authentification utilisateur : Intégration de Firebase Auth pour permettre la connexion et l'inscription des clients.
- ✅ Ajout d'un panier dynamique : Permettre aux utilisateurs d'ajouter des pizzas au panier avec un affichage en temps réel.
- ✅ Gestion des commandes : Mise en place d'un système de gestion des commandes avec suivi en temps réel.

## 👤 Skies-Land - Jonathan Araldi

- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**

## 📷 Image de preview
![preview](https://github.com/user-attachments/assets/88d26278-7157-499c-bdda-b44640b82a8e)
