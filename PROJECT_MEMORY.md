# Mémoire du Projet : CV En Ligne & Imprimable

Ce document sert de référence pour maintenir le contexte du projet lors des futures sessions de développement.

## 1. Objectif du Projet
Créer un site web personnel doublé d'un CV moderne et interactif, avec une fonctionnalité d'export PDF optimisée pour le format A4.
**URL du site** : `https://jonathan-gatard.fr`
**URL du CV Imprimable** : `https://jonathan-gatard.fr/cv-print`

## 2. Stack Technique
- **Framework** : [Astro](https://astro.build/) (v5)
- **Styling** : Tailwind CSS
- **Hébergement** : GitHub Pages
- **Déploiement** : GitHub Actions (`.github/workflows/deploy.yml`)
- **Domaine** : Configuré via un fichier `CNAME` (`jonathan-gatard.fr`).

## 3. Architecture & Structure
### Pages Clés
- `src/pages/index.astro` : Page d'accueil. Contient le `Hero` (présentation) et `Experience` (parcours).
- `src/pages/cv-print.astro` : **CV Imprimable**. Une page isolée, optimisée pour l'impression (CSS `@media print`), format A4, sans header/footer du site.
- `src/pages/passions/` : Sous-pages détaillées pour chaque intérêt (Domotique, Aéromodélisme, etc.).

### Composants Principaux
- `src/components/Hero.astro` : Section d'intro avec animation "Tech Grid" et texte "Ingénieur Mainframe & Interopérabilité".
- `src/components/Navbar.astro` : Menu de navigation flottant (Glassmorphism). Disparaît à l'impression.
- `src/components/Experience.astro` : Liste des expériences + **Grille Formation** (ajoutée récemment).

## 4. Modifications Récentes & Décisions Métier
### Contenu CV (Février 2026)
- **Titre** : "Ingénieur Mainframe & Interopérabilité" (J'assure l'interopérabilité sécurisée...).
- **Expérience Stellantis** : Regroupée en une seule entrée "Manager Projets & Ingénieur DevOps" pour gagner de la place.
- **Formation** :
  - Ajout de **TU Graz (2022)** en Autodidacte (Network Security, RTOS).
  - Ajout de **ISAE-ENSMA** et **ISAE-Supaero**.
  - Suppression de la mention "CESI".
- **Intérêts** : Déplacés dans la colonne principale sur le CV imprimable pour permettre plus de détails (projet Domotique >100h).
- **Contact** : Ajout "Permis B", téléphone et email mis à jour.

### Design
- **Mode Sombre** : Site web principal (Dark Gray / Blue / Purple).
- **Mode Clair** : CV Imprimable (`bg-white`) pour économiser l'encre et faire pro (HR-friendly).
- **Favicon** : Support SVG + ICO pour compatibilité maximale.

## 5. Déploiement
Le déploiement est **automatique** à chaque push sur la branche `main`.
- Le workflow construit le site statique et le pousse sur la branche `gh-pages`.
- Le DNS est géré par GitHub Pages via le fichier `public/CNAME`.

## 6. Prochaines Étapes Possibles
- Ajouter des articles de blog ou des "Case Studies" détaillés pour les projets techniques.
- Améliorer le SEO (bien que déjà configuré avec sitemap et méta-descriptions).
- Mettre à jour la photo de profil (actuellement un placeholder sur le CV imprimable).
