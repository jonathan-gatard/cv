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

## 6. Mémoire Détaillée (CV & Parcours)

Cette section contient l'intégralité des informations du CV pour référence future (Prompt Context).

### 👤 Informations Personnelles
- **Nom** : Jonathan Gatard
- **Titre** : Ingénieur Mainframe & Interopérabilité
- **Accroche** : "J'assure l'interopérabilité sécurisée entre les environnements Mainframe et les architectures Open."
- **Email** : jonathan.gatard@gmail.com
- **Téléphone** : 06 13 54 83 19
- **Site** : jonathan-gatard.fr
- **Divers** : Permis B

### 💼 Expériences Professionnelles

#### **Ingénieur Mainframe & AppOps** | *Prestataire Aubay Solutec - Mission CAGIP* (Sept 2023 - Présent)
> Modernisation des écosystèmes mainframe et interopérabilité.
- Assurer le MCO et la stabilité des environnements critiques (CATS).
- Développement d'outils Python pour l'automatisation et l'appel d'API depuis z/OS (USS).
- Mise en place de Zowe et VSCode pour moderniser l'environnement de développement.
- AppOps : Pont technique entre les équipes études et la production.

#### **Manager Projets & Ingénieur DevOps** | *Stellantis (Slovaquie)* (2021 - 2023)
> Double casquette : Pilotage de l'innovation industrielle et développement technique.
- **Management** : Gestion d'une équipe de 4 personnes et pilotage de projets digitaux industriels.
- **Technique** : 6 mois de développement web fullstack (React, Node) et scripts d'automatisation.
- **Outils** : Mise en place de monitoring (Grafana, Node-Red) et Business Intelligence (PowerBI).

#### **Ingénieur Projets Logistique & Amélioration Continue** | *LISI Aerospace* (2016 - 2020)
> Optimisation des flux et gestion de projets industriels.
- Gestion de projets logistiques pour la construction de deux nouvelles usines.
- Amélioration de la satisfaction client et mise en place d'outils Lean (5S, VSM, PDCA).

### 🎓 Formation

- **Network Security & Real Time OS** (2022) | *TU Graz (Autriche) - Autodidacte*
  - Suivi en parallèle de l'activité professionnelle.
- **Approfondissement Matériaux** (2019) | *ISAE-ENSMA*
- **Formation Spécialisée** (2018) | *ISAE-Supaero*
- **Parcours Ingénieur** (2016-2019) | *École d'Ingénieurs (CNAM Poitiers)*
  - Génie Industriel, Performance et Amélioration Continue.
- **DUT Science et Génie des Matériaux** (2014 - 2016) | *IUT*

### 🛠 Compétences Techniques
- **Mainframe** : z/OS, USS, JCL, CICS, DB2, Zowe
- **Open & DevOps** : Python, Docker, Ansible, Linux, Git, Rest API
- **Méthodologie** : Agile/Scrum, DevOps, ITIL 4, Lean Management

### 🗣 Langues
- **Français** : Natif
- **Anglais** : Courant
- **Espagnol** : Scolaire
- **Slovaque** : Notions

### 🌟 Projets & Passions
- **Domotique** : Projet >100h. Écosystème complet Home Assistant, ZigBee, MQTT, Sniffeur réseau, RPi & Docker.
- **Aéromodélisme** : Construction et pilotage d'avions thermiques. Sauvegarde du patrimoine.
- **Maker / Hardware** : Conception et amélioration d'imprimantes 3D. Transformation en découpeuse laser.
- **Terrariophilie** : Création de biotopes automatisés (Tourbière artificielle, plantes carnivores).

## 7. Prochaines Étapes Possibles
- Ajouter des articles de blog ou des "Case Studies".
- Mettre à jour la photo de profil.
