# 🏗️ Architecture - Carnet2Bivouac

> Ce document décrit l'architecture générale du projet.
> Il ne contient aucune logique métier ni aucun détail technique d'implémentation.
> Son objectif est de comprendre rapidement l'organisation de l'application.

---

# Arborescence générale

Layout
│
├── Navbar
│
├── Toutes les pages
│
└── Footer

Toutes les pages héritent automatiquement du Layout.

---

# Pages

## Home

La page d'accueil présente l'univers de Carnet2Bivouac.

Elle est composée des sections suivantes :

- Hero
- BivouacMap
- AboutSection
- LatestBivouacs
- Footer (hérité du Layout)

---

## Bivouac Page

Affiche un bivouac dans son intégralité.

Composition :

- HeroImage
- BivouacTitle
- BivouacStats
- Story
- LocationMap
- EquipmentList
- Comments (version future)

---

## Equipment Page

Présente le matériel utilisé.

Catégories :

- Shelter
- Cooking
- Hiking
- Clothing

Chaque catégorie contient plusieurs EquipmentCard.

---

# Components

## Layout

Responsable des éléments présents sur toutes les pages.

Contient :

- Navbar
- Footer

---

## Hero

Présent uniquement sur la page d'accueil.

Contient :

- HeroTitle
- HeroQuote
- HeroCounter
- ScrollIndicator

Le fond (image) est géré directement par le Hero.

---

## BivouacMap

Carte interactive affichant les bivouacs réalisés.

Composants :

- LeafletMap
- BivouacMarker

Le clic sur un marqueur met à jour le panneau de droite.

---

## AboutSection

Par défaut :

Affiche une présentation de Carnet2Bivouac.

Après sélection d'un marqueur :

Affiche un BivouacSummary.

---

## BivouacSummary

Résumé d'un bivouac.

Contient :

- Title
- Date
- Location
- Summary
- Stats
- ReadMoreButton

---

## LatestBivouacs

Affiche les trois derniers bivouacs.

Composition :

- BivouacCard
- BivouacCard
- BivouacCard

À terme, le nombre de cartes sera dynamique.

---

## BivouacCard

Résumé visuel d'un bivouac.

Contient :

- BackgroundImage
- Title
- Date
- Location
- Summary
- Stats
- ReadMoreButton

L'image d'arrière-plan change automatiquement selon le bivouac.

---

## EquipmentCard

Fiche technique d'un équipement.

Contient notamment :

- Photo
- Name
- Category
- Weight
- Rating
- Review

---

# Objet principal

Le cœur de l'application est le **Bivouac**.

Toutes les pages utilisent les informations d'un bivouac pour les afficher sous différentes formes.

Un bivouac possède notamment :

- Title
- Date
- Location
- Summary
- Story
- Photos
- GPX
- Stats
- Equipment
- Comments (future)

Les différents composants affichent uniquement la partie des informations dont ils ont besoin.

---

# Règles d'architecture

- Les composants ont une responsabilité unique.
- Un composant doit être réutilisable lorsque cela est pertinent.
- Les données sont séparées de l'affichage.
- Le Layout contient uniquement les éléments communs à toutes les pages.
- Les noms des composants sont en anglais.
- Les commentaires de code sont rédigés en français afin de faciliter l'apprentissage.

---

# Évolutions prévues

Version 1

- Accueil
- Carte interactive
- Pages bivouacs
- Page matériel

Version 2

- Commentaires
- Recherche
- Filtres

Version 3

- Comptes utilisateurs
- Favoris
- Statistiques avancées

Version 4

- Nouvelles catégories d'aventures
- (Kayak, Packraft, etc.)

Cette évolution ne devra jamais remettre en cause le fonctionnement des bivouacs.

components/
│
├── layout/
│   ├── Navbar.js
│   └── Footer.js
│
├── hero/
│   ├── Hero.js
│   ├── HeroTitle.js
│   ├── HeroQuote.js
│   ├── HeroCounter.js
│   └── ScrollIndicator.js
│
├── map/
│   └── Map.js
│
├── bivouacs/
│   ├── BivouacCard.js
│   ├── BivouacSummary.js
│   └── BivouacStats.js
│
├── equipment/
│   └── EquipmentCard.js
│
└── shared/
    ├── Button.js
    ├── Container.js
    ├── SectionTitle.js
    └── Card.js