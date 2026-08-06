> ⚠️ **Projet personnel en cours de développement**
>
> Carnet2Bivouac est développé progressivement afin d'apprendre et d'appliquer les bonnes pratiques du développement web moderne.
> Chaque fonctionnalité est pensée, documentée et intégrée avant de passer à la suivante.

# 🏕️ Carnet2Bivouac

> *Les aventures ne se rêvent pas, elles se vivent.*

Carnet2Bivouac est une application web dédiée aux passionnés de randonnée et de bivouac.

Son objectif est simple : partager des récits authentiques, rassurer les personnes qui souhaitent se lancer dans leur premier bivouac, transmettre des conseils pratiques et donner envie d'explorer les plus beaux sentiers de France, toujours dans le respect de la nature.

---

## 🌲 La philosophie

Chaque bivouac est une histoire.

Derrière une trace GPS se cachent une météo capricieuse, une rencontre inattendue, un lever de soleil ou parfois une nuit compliquée.

Carnet2Bivouac ne cherche pas à collectionner les kilomètres.

Il cherche à raconter ces histoires.

---

## ✨ Fonctionnalités

- 🗺️ Carte interactive des bivouacs
- 📖 Récits détaillés de chaque aventure
- 🎒 Conseils et fiches matériel
- 📊 Statistiques des bivouacs
- 🔍 Recherche par région ou massif
- ⚙️ Tableau de bord d'administration *(en cours de développement)*

---

## 🛠️ Stack technique

### Front-end

- Next.js
- React
- CSS
- Tailwind (prévu)

### Back-end *(prévu)*

- Express.js
- PostgreSQL

---

## 📁 Architecture

Le projet est construit autour de composants React réutilisables.

```
app/
│
├── components/
│   ├── home/
│   ├── layout/
│   ├── shared/
│   └── article/
│
├── data/
│
├── globals.css
├── layout.js
└── page.js
```

Les données, la logique métier et les composants sont volontairement séparés afin de faciliter la maintenance et l'évolution du projet.

---

## 🚀 Installation

```bash
npm install
npm run dev
```

Puis ouvrir :

```
http://localhost:3000
```

---

## 📖 Documentation

Le projet est documenté dès sa conception :

- `VISION.md`
- `ARCHITECTURE.md`
- *(bientôt)* `CONVENTIONS.md`

---

## 🌿 État du projet

🚧 En cours de développement.

Les fonctionnalités sont ajoutées progressivement en suivant des User Stories et un historique Git documenté.

---

## ❤️ Pourquoi ce projet ?

Parce qu'un bivouac ne se résume pas à un point sur une carte.

C'est une aventure, une expérience et souvent un souvenir que l'on garde longtemps.

Si Carnet2Bivouac peut donner envie à une seule personne de préparer son sac, respecter la montagne et partir explorer un nouveau sentier... alors le projet aura atteint son objectif.