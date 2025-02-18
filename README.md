# 🍕 ATELIER CROÛTE DORÉE
Site vitrine d'une enseigne de pizzeria fictive.

## ▶️ DESCRIPTION
**📄 Présentation**
- Cours suivie pour la réalisation de ce projet **[Bedimcode](https://www.youtube.com/@Bedimcode)**.
- Développé dans un premier temps avec **HTML**, **CSS** et **JavaScript** qui constitue ma maquette.
- Puis dans un second temps, adaptation avec **React**, **TypeScript** & **SASS** et dépoiement du projet sur **Firebase**
- Contient des animations lors du défilement.
- Défilement fluide dans chaque section.
- Développé d'abord avec la méthodologie Mobile First, puis pour les ordinateurs de bureau.
- Compatible avec tous les appareils mobiles et doté d'une interface utilisateur belle et agréable.

**🔗 Resources**
#####
Dans un premier temps :
- **[CDN Icons - *"Remixicon"*](https://cdnjs.com/libraries/remixicon)**
- **[Icons](https://remixicon.com/)**
- **[Google Fonts - *"Carter One"*](https://fonts.google.com/specimen/Carter+One?query=Carter)**
- **[Google Fonts - *"Montserrat"*](https://fonts.google.com/specimen/Montserrat)**
- **[JS Functions](https://github.com/bedimcode/responsive-watches-website/blob/main/assets/js/main.js)**
- **[Swiperjs](https://swiperjs.com/get-started)**
- **[ScrollReveal](https://scrollrevealjs.org/)**
- **[Original Images](https://fr.freepik.com/)**
#####
Dans un second temps :
- **[Vite.js](https://vite.dev/)**
- **[SASS](https://sass-lang.com/)**
- **[React-router](https://reactrouter.com/)**
- **[Remixicon - *"utilisation avec React"*](https://github.com/Remix-Design/RemixIcon?tab=readme-ov-file#react)**
- **[React-Toastify](https://www.npmjs.com/package/react-toastify)**
- **[Swiper - *"utilisation avec React"*](https://swiperjs.com/react)**
- **[Firebase](https://firebase.google.com/)**

# **📂 Architecture**
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

## 🔎 Accès au projet - **[Atelier Croûte Dorée](https://atelier-croute-doree-2db48.web.app/)**

![preview](https://github.com/user-attachments/assets/88d26278-7157-499c-bdda-b44640b82a8e)

