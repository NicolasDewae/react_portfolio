# Rapport SEO — Nicolas De Wagner Portfolio

> Audit réalisé le 20 juin 2026 · Base : CRA (Create React App) · Déploiement actuel inconnu

---

## État actuel

| Signal | Valeur actuelle | Impact |
|---|---|---|
| Meta description | `"Web site created using create-react-app"` | ❌ Catastrophique |
| Titre par page | `Nicolas De Wagner` (identique partout) | ❌ Mauvais |
| Open Graph | Absent | ❌ Aucun aperçu réseaux sociaux |
| Sitemap | Absent | 🟠 Pages non déclarées |
| `lang` HTML | `en` (site principalement FR) | 🟠 Signal linguistique incorrect |
| Rendu | Client-side (JavaScript) | 🟠 Crawling partiel |
| Attributs `alt` | Présents sur toutes les images | ✅ Bon |
| Google Analytics | GA4 configuré | ✅ Bon |
| `robots.txt` | Autorisation totale | ✅ OK |

---

## Option A — Corrections rapides (sans changement d'architecture)

### Ce qu'on corrige

1. **`public/index.html`** — vraie description, balises Open Graph, `lang="fr"`, `theme-color` cohérent
2. **`react-helmet-async`** — titre et description uniques injectés par chaque page React
3. **`public/sitemap.xml`** — déclaration manuelle des 9 routes du site
4. **JSON-LD `Person`** — données structurées Schema.org dans `index.html`

### Gains attendus

#### Résultats de recherche Google (SERP)

Avant correction, un résultat Google ressemble à :

```
Nicolas De Wagner
Web site created using create-react-app
```

Après correction :

```
Street View — Nicolas De Wagner · Photographe à Lille
Série photographique inspirée du travail de Doug Rickard et Jon Rafman.
Images capturées depuis Google Street View, Lille.
```

- **Taux de clic (CTR)** : +20 à +40 % estimé — un snippet lisible et différencié incite bien plus au clic qu'une description générique.
- **Indexation des pages** : le sitemap permet à Google de découvrir et indexer `/project/streetview`, `/project/confinement`, etc. sans attendre qu'un lien externe pointe dessus.
- **Classement linguistique** : corriger `lang="fr"` améliore le ciblage géographique FR (recherches depuis la France et la Belgique).

#### Réseaux sociaux & partage

Sans Open Graph, partager un lien vers le portfolio sur Instagram, Facebook ou iMessage affiche un aperçu vide ou le favicon seul. Avec les balises OG :

- Affichage d'une **photo de couverture** (ta meilleure image)
- **Titre** et **description** lisibles dans la preview
- Impact direct sur la visibilité organique via les partages — particulièrement pertinent pour un photographe

#### Données structurées (JSON-LD)

Le balisage `Person` permet à Google d'afficher un **Knowledge Panel** à droite des résultats pour une recherche nominative ("Nicolas De Wagner photographe"). Ce n'est pas garanti mais la probabilité augmente significativement avec le balisage.

### Ce que ces corrections ne résolvent pas

Le problème structurel reste entier : **Google reçoit une page HTML vide** et doit exécuter le JavaScript pour voir le contenu. Googlebot le fait, mais :

- Le crawl est plus lent (délai de rendu JS)
- Les contenus chargés dynamiquement peuvent être manqués ou mal indexés
- Le **Largest Contentful Paint (LCP)** — signal de performance qui influence le classement — reste pénalisé car les images ne s'affichent qu'après hydratation JS

### Estimation de l'impact global

| Métrique | Avant | Après Option A | Gain estimé |
|---|---|---|---|
| Indexation des pages | ~1 page (home) | 9 pages | +800 % |
| CTR moyen (SERP) | ~0.5 % | ~2–4 % | ×4–8 |
| Partages sociaux avec preview | 0 | Toutes les pages | — |
| Score SEO technique (Lighthouse) | ~30/100 | ~65–75/100 | +35–45 pts |

### Effort & délai

- **Temps de développement** : 2–3 heures
- **Délai avant effet** : 2–6 semaines (délai de re-crawl Google)

---

## Option B — Migration vers Next.js (SSG)

### Ce que ça change fondamentalement

Next.js en mode **Static Site Generation (SSG)** pre-génère chaque page en HTML pur au moment du build. Quand Google crawle `/project/streetview`, il reçoit immédiatement le HTML complet avec les images, le texte et les meta tags — sans avoir à exécuter du JavaScript.

C'est le passage d'une **application** (que Google doit interpréter) à un **site** (que Google lit directement).

### Gains techniques

#### Performance (Core Web Vitals)

Les Core Web Vitals sont un facteur de classement Google depuis 2021.

| Métrique | CRA actuel | Next.js SSG | Impact classement |
|---|---|---|---|
| **LCP** (chargement image principale) | 3–5s | 1–2s | Fort |
| **FID / INP** (réactivité) | Moyen | Bon | Modéré |
| **CLS** (stabilité visuelle) | Variable | Stable | Modéré |

Le LCP est particulièrement critique pour un portfolio photo : la première grande image visible est souvent l'image la plus lourde de la page. En SSG, elle peut être déclarée avec `priority` et préchargée, ce qui est impossible en CRA.

#### Crawlabilité

- **0 ms de délai de rendu** pour Googlebot — le HTML est déjà là
- **Chaque page est un fichier HTML distinct** — l'indexation est plus fiable et plus rapide
- Les **images de chaque projet** sont dans le HTML source et peuvent être indexées par Google Images — ce qui représente un canal de trafic important pour un photographe

#### SEO des images (Google Images)

Google Images peut générer du trafic significatif pour un portfolio photo. En CRA, les images sont injectées par JS et souvent mal indexées. En Next.js SSG avec le composant `<Image>` :

- Format WebP automatique (fichiers 30–70 % plus légers)
- Dimensions déclarées dans le HTML (pas de CLS)
- Lazy loading natif géré proprement
- Sitemap d'images possible (`next-sitemap`)

#### Internationalisation (FR/EN)

Next.js a un système i18n natif (`i18n` dans `next.config.js`) qui génère des URLs distinctes par langue (`/fr/about`, `/en/about`). Google peut alors indexer séparément les deux versions et les servir aux bons utilisateurs selon leur langue/localisation.

Actuellement, le switch FR/EN via `localStorage` est **invisible pour Google** — il ne voit qu'une seule version de la page.

### Ce que la migration implique

| Aspect | Détail |
|---|---|
| **Refonte du routing** | `react-router-dom` → système de fichiers Next.js (`/pages` ou `/app`) |
| **CSS Modules** | Compatibles nativement — peu ou pas de travail |
| **Hooks personnalisés** | Compatibles — `useTranslate`, `useScrollReveal` fonctionnent tels quels |
| **Composants** | Compatibles — tous les composants fonctionnels restent valides |
| **Assets** | À déplacer dans `/public` Next.js (déjà là) |
| **GA4** | Remplacement de `react-ga4` par `next/script` |
| **`react-helmet-async`** | Remplacé par `next/head` ou les metadata API (App Router) |

Le plus gros travail est la migration du routing et la configuration i18n. Les composants, hooks et styles ne changent quasiment pas.

### Estimation de l'impact global

| Métrique | Option A | Option B (Next.js) | Gain vs Option A |
|---|---|---|---|
| Score Lighthouse SEO | 65–75/100 | 95–100/100 | +25 pts |
| Score Lighthouse Performance | 50–65/100 | 85–95/100 | +30 pts |
| Indexation contenu | HTML vide indexé | HTML complet indexé | Fiabilité ×3 |
| Google Images | Indexation partielle | Indexation complète | Trafic image |
| i18n indexé | Non (une seule URL) | Oui (URLs distinctes) | Double surface |
| Délai avant effet | 2–6 semaines | 4–8 semaines (re-crawl) | — |

### Effort & délai

- **Temps de développement** : 3–5 jours
- **Risque** : Faible — l'architecture du portfolio est simple (pages statiques, pas de base de données)
- **Délai avant effet** : 4–8 semaines après déploiement

---

## Comparaison synthétique

```
                    │ Option A    │ Option B    │
                    │ Quick wins  │ Next.js SSG │
────────────────────┼─────────────┼─────────────┤
Effort              │ 2–3 heures  │ 3–5 jours   │
Risque              │ Nul         │ Faible       │
SEO meta/snippets   │ ✅ Résolu   │ ✅ Résolu   │
Open Graph          │ ✅ Résolu   │ ✅ Résolu   │
Crawlabilité HTML   │ 🟠 Partiel  │ ✅ Complet  │
Core Web Vitals     │ 🟠 Partiel  │ ✅ Complet  │
Google Images       │ 🟠 Partiel  │ ✅ Complet  │
i18n indexé         │ ❌ Non      │ ✅ Oui      │
Lighthouse SEO      │ ~70/100     │ ~98/100     │
Lighthouse Perf.    │ ~60/100     │ ~90/100     │
```

---

## Recommandation

**Commencer par l'Option A.** Elle corrige les erreurs les plus visibles (description CRA, OG tags, sitemap) avec un effort minimal. L'impact sur le CTR et les partages sociaux est immédiat et mesurable.

**Planifier l'Option B à moyen terme.** La migration Next.js est la seule façon d'atteindre un score technique optimal et d'indexer correctement les images — canal particulièrement stratégique pour un portfolio photo. L'architecture actuelle du site est suffisamment simple pour que la migration soit peu risquée.

L'Option A seule suffit si l'objectif est d'être trouvé sur des recherches nominatives ("Nicolas De Wagner photographe Lille"). L'Option B devient nécessaire si l'objectif est d'apparaître sur des recherches thématiques ("photographe street Lille", "photographie confinement") où la concurrence est plus forte et où la qualité technique du contenu indexé fait la différence.
