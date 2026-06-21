# Refactoring du portfolio — Guide détaillé pour dev junior

Ce document explique **toutes les modifications** apportées au projet lors du refactoring, **pourquoi** elles étaient nécessaires, et **comment réutiliser ces logiques** dans tes futurs projets.

---

## Table des matières

1. [Migration vers TypeScript](#1-migration-vers-typescript)
2. [Interfaces de props](#2-interfaces-de-props)
3. [Structure des dossiers — `index.ts` de re-export](#3-structure-des-dossiers--indexts-de-re-export)
4. [Hook custom `useTranslate`](#4-hook-custom-usetranslate)
5. [Composant `TranslateButton`](#5-composant-translatebutton)
6. [Simplification du système de traduction](#6-simplification-du-système-de-traduction)
7. [Clés (`key`) dans les listes React](#7-clés-key-dans-les-listes-react)
8. [Correction du `<Link><a>` doublon](#8-correction-du-linka-doublon)
9. [Conversion de `MoviesService` — fin des class components](#9-conversion-de-moviesservice--fin-des-class-components)
10. [Nommage des constantes — `SCREAMING_SNAKE_CASE`](#10-nommage-des-constantes--screaming_snake_case)
11. [Correction du Carousel — props individuelles → tableau](#11-correction-du-carousel--props-individuelles--tableau)
12. [Nommage interne de `CardProject`](#12-nommage-interne-de-cardproject)
13. [Sécurité — `rel="noreferrer"` sur les liens externes](#13-sécurité--relnoreferrer-sur-les-liens-externes)
14. [Attribut HTML `frameborder` → `frameBorder`](#14-attribut-html-frameborder--frameborder)
15. [`console.log` en production](#15-consolelog-en-production)
16. [`var` → `const`](#16-var--const)
17. [Suppression des imports `React` inutiles](#17-suppression-des-imports-react-inutiles)
18. [Types pour les données i18n et projets](#18-types-pour-les-données-i18n-et-projets)

---

## 1. Migration vers TypeScript

### Avant
```js
// App.js
function App() {
  const [translate, setTranslate] = useState(defaultValueTranslate);
  // ...
}
```

### Après
```tsx
// App.tsx
const App = () => {
  const { translate, handleTranslate } = useTranslate();
  // ...
};
```

### Pourquoi ?

**TypeScript est un sur-ensemble typé de JavaScript.** Il ajoute un système de types qui permet de détecter des erreurs *avant* que le code ne s'exécute, directement dans ton éditeur.

Sans TypeScript, si tu appelles `<Navbar data="true" />` en passant une *string* au lieu d'un *boolean*, JavaScript s'en fout — le bug n'apparaîtra qu'au runtime, potentiellement en production. Avec TypeScript :

```tsx
interface NavbarProps {
  data: boolean; // ← TypeScript sait que data doit être un boolean
}
// Si tu écris <Navbar data="true" />, l'éditeur te crie dessus immédiatement.
```

**Pourquoi c'est important dans un contexte pro ?**

- Les bugs détectés à la compilation coûtent 10× moins cher que les bugs en production.
- Dans une équipe, TypeScript sert de *documentation vivante* : quand tu lis `NavbarProps`, tu sais exactement ce que le composant attend, sans avoir à lire son code.
- Tous les grands projets React (Meta, Airbnb, Microsoft) utilisent TypeScript. C'est le standard du marché.

**Ce qu'il a fallu faire concrètement :**
1. Installer `typescript`, `@types/react`, `@types/react-dom`, `@types/node`, `@types/react-helmet`
2. Créer `tsconfig.json` avec `"strict": true` (le mode le plus rigoureux)
3. Renommer chaque `.jsx` en `.tsx` et `.js` en `.ts`
4. Ajouter une déclaration pour les modules sans types (`declare module '*.css'` et `react-mailchimp-subscribe`)

**La règle `"strict": true` dans `tsconfig.json` active notamment :**
- `strictNullChecks` : `null` et `undefined` ne sont plus des valeurs valides partout par défaut
- `noImplicitAny` : TypeScript refuse que tu aies un type `any` implicite
- `strictFunctionTypes` : vérification stricte des types de fonctions

---

## 2. Interfaces de props

### Avant
```jsx
// Aucun typage — on ne sait pas ce que le composant attend
const Navbar = (translate) => { ... }
// Appel dans App.js
<Navbar data={translate} />
// Qu'est-ce que `translate` est censé être ? Un bool ? Un string ? Un objet ?
```

### Après
```tsx
interface NavbarProps {
  data: boolean;
}

const Navbar = ({ data }: NavbarProps) => { ... }
```

### Pourquoi ?

**Le problème de l'ancien code** : `const Navbar = (translate)` reçoit les props comme un objet entier. Le développeur devait écrire `translate.data` à l'intérieur pour accéder à la vraie valeur. C'est opaque et error-prone.

**La bonne pratique React** : déstructurer les props directement dans la signature de la fonction. `({ data }: NavbarProps)` dit :
- Je reçois un objet de type `NavbarProps`
- Je veux juste la propriété `data` de cet objet
- `data` est un `boolean`

**L'interface TypeScript sert de contrat** : si quelqu'un utilise `<Navbar data={42} />` (un nombre au lieu d'un booléen), TypeScript signale l'erreur immédiatement.

**Convention CLAUDE.md :** une interface par composant, nommée `NomComposantProps`. Jamais de type `any`.

---

## 3. Structure des dossiers — `index.ts` de re-export

### Avant
```
src/components/navbar/Navbar.jsx
```

Import dans d'autres fichiers :
```js
import Navbar from '../../components/navbar/Navbar';
//                                              ^^^^^^ chemin répété deux fois
```

### Après
```
src/components/navbar/
  ├── Navbar.tsx
  ├── Navbar.css
  └── index.ts       ← nouveau fichier
```

`index.ts` contient :
```ts
export { default } from './Navbar';
```

Import dans d'autres fichiers :
```ts
import Navbar from '../../components/navbar';
//                                   ^^^^^^ plus propre, chemin plus court
```

### Pourquoi ?

**Le pattern `index.ts`** est une convention universelle en TypeScript/JavaScript. Quand Node.js (et webpack/CRA) voient `import from './navbar'`, ils cherchent automatiquement `./navbar/index.ts` s'il existe.

**Avantages concrets :**

1. **Encapsulation** : le fichier `index.ts` est la *façade publique* du composant. Si demain tu renommes `Navbar.tsx` en `NavbarComponent.tsx`, tu changes juste `index.ts` — tous les imports ailleurs restent identiques.

2. **Imports plus propres** : `import Navbar from '../../components/navbar'` est plus lisible que `import Navbar from '../../components/navbar/Navbar'`.

3. **Scalabilité** : si un composant grandit et se divise en sous-composants, `index.ts` reste l'unique point d'entrée public. Les détails internes sont cachés.

**Analogie** : c'est comme la réception d'un hôtel. Peu importe comment l'hôtel est organisé à l'intérieur, tu passes toujours par la réception. Si l'hôtel réorganise ses étages, la réception reste au même endroit.

---

## 4. Hook custom `useTranslate`

### Avant — code dupliqué dans CHAQUE page

```jsx
// About.jsx
const About = () => {
  let defaultValueTranslate = localStorage.getItem('defaultValueTranslate');
  defaultValueTranslate = defaultValueTranslate === "false" ? false : true;
  const [translate, setTranslate] = useState(defaultValueTranslate);
  const handleTranslate = () => {
    localStorage.setItem('defaultValueTranslate', !translate);  
    setTranslate(!translate);
  }
  // ...
}

// Works.jsx — MÊME code copié-collé
// Contact.jsx — MÊME code copié-collé
// Blog.jsx — MÊME code copié-collé
// ... x8 pages
```

### Après — un seul endroit

```ts
// src/hooks/useTranslate.ts
interface UseTranslateReturn {
  translate: boolean;
  handleTranslate: () => void;
}

const useTranslate = (): UseTranslateReturn => {
  const raw = localStorage.getItem('defaultValueTranslate');
  const defaultValue = raw !== 'false';
  const [translate, setTranslate] = useState<boolean>(defaultValue);

  const handleTranslate = () => {
    setTranslate((prev) => {
      localStorage.setItem('defaultValueTranslate', String(!prev));
      return !prev;
    });
  };

  return { translate, handleTranslate };
};
```

Usage dans chaque page :
```tsx
const About = () => {
  const { translate, handleTranslate } = useTranslate();
  // 1 ligne au lieu de 6
}
```

### Pourquoi ?

**Principe DRY (Don't Repeat Yourself)** : le code dupliqué est l'ennemi numéro un de la maintenabilité.

**Problème du code dupliqué :**
- Si tu dois changer la logique (par exemple, utiliser `sessionStorage` au lieu de `localStorage`), tu dois modifier 8 fichiers. Tu en oublies un → bug.
- Les bugs se multiplient × 8.
- Le code est plus long à lire.

**Un hook custom en React, c'est quoi ?**

Un hook custom est une *fonction JavaScript/TypeScript ordinaire* dont le nom commence par `use` et qui peut appeler d'autres hooks React (`useState`, `useEffect`, etc.). C'est le mécanisme officiel de React pour extraire et partager de la logique avec état.

**Règles des hooks (Rules of Hooks — obligatoires) :**
1. N'appelle les hooks qu'au niveau supérieur d'un composant ou d'un hook custom (jamais dans une condition `if`, une boucle `for`, ou une fonction imbriquée)
2. N'appelle les hooks que depuis des composants React ou des hooks customs

**Détail important dans le hook :**
```ts
// AVANT (code original — bug subtil)
const handleTranslate = () => {
  localStorage.setItem('defaultValueTranslate', !translate);  // ← stocke un boolean, pas une string
  setTranslate(!translate); // ← closure sur `translate`, risque de stale state
}

// APRÈS — correctif
const handleTranslate = () => {
  setTranslate((prev) => {    // ← forme fonctionnelle : lit l'état le plus récent
    localStorage.setItem('defaultValueTranslate', String(!prev)); // ← String() pour stocker "true"/"false"
    return !prev;
  });
};
```

La **forme fonctionnelle de `setState`** (`setTranslate(prev => ...)`) garantit qu'on lit toujours la valeur la plus récente de l'état, même si plusieurs mises à jour sont en cours. C'est la bonne pratique quand le nouvel état dépend de l'ancien.

---

## 5. Composant `TranslateButton`

### Avant — dupliqué dans chaque page

```jsx
// Dans About.jsx, Works.jsx, Contact.jsx... (x8 fois)
<button className='translateBtn' onClick={handleTranslate}>
    <p className='translate'>
        {translate ? 'Fr' : 'En'}
    </p>
</button>
```

### Après — composant réutilisable

```tsx
// src/components/translateButton/TranslateButton.tsx
interface TranslateButtonProps {
  translate: boolean;
  onTranslate: () => void;
}

const TranslateButton = ({ translate, onTranslate }: TranslateButtonProps) => (
  <button className="translateBtn" onClick={onTranslate}>
    <p className="translate">{translate ? 'Fr' : 'En'}</p>
  </button>
);
```

Usage :
```tsx
<TranslateButton translate={translate} onTranslate={handleTranslate} />
```

### Pourquoi ?

**Principe "Un composant = une seule responsabilité"** (Single Responsibility Principle). Le bouton de traduction est une UI indépendante qui mérite son propre composant.

**Convention de nommage des props :**
- La prop s'appelle `onTranslate` (préfixe `on`) → c'est une convention pour les *handlers de props* (ce qu'un parent passe à un enfant)
- La fonction locale dans le parent s'appelle `handleTranslate` (préfixe `handle`) → c'est l'implémentation réelle

```tsx
// Parent
const handleTranslate = () => { ... }; // handle = implémentation
<TranslateButton onTranslate={handleTranslate} /> // on = prop handler

// Enfant
const TranslateButton = ({ onTranslate }) => (
  <button onClick={onTranslate}>...</button>
);
```

Cette convention est universelle en React. Elle rend le code immédiatement lisible : `onXxx` = "ce composant peut déclencher cet événement", `handleXxx` = "voici ce qui se passe quand il se déclenche".

---

## 6. Simplification du système de traduction

### Avant — structure de données inutilement complexe

```js
// i18n.js
export const navLink = [    // ← tableau avec UN seul élément ???
  {
    fr: [ {id: 2, title: 'Projets', ...}, ... ],
    en: [ {id: 2, title: 'Works', ...}, ... ],
  }
]

// Usage dans les composants — double .map() illisible
{navLink.map((link) => {
  link = translate.data ? link.fr : link.en; // ← réassignation de la variable du map !
  return (
    link.map((item) => {
      return <li><a href={item.pathway}>{item.title}</a></li>
    })
  )
})}
```

**Problèmes identifiés :**
1. Un tableau `[{...}]` avec un seul élément — pourquoi un tableau ?
2. `link = translate.data ? link.fr : link.en` réassigne la variable de boucle — mauvaise pratique
3. Double `.map()` imbriqué — très difficile à lire
4. Aucune `key` sur les éléments de la liste

### Après — structure directe et logique claire

```ts
// i18n.ts
export const navLink: NavLinkData = {
  fr: [
    { id: 2, title: 'Projets', pathway: '/works' },
    // ...
  ],
  en: [
    { id: 2, title: 'Works', pathway: '/works' },
    // ...
  ],
};
```

```tsx
// Usage dans Navbar.tsx — lisible et direct
const items = data ? navLink.fr : navLink.en;

return (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <a href={item.pathway}>{item.title}</a>
      </li>
    ))}
  </ul>
);
```

### Pourquoi ?

**Règle CLAUDE.md** : "Pas de logique complexe dans le JSX, extraire dans des variables ou fonctions."

La ligne `const items = data ? navLink.fr : navLink.en;` sort la logique de sélection du JSX. Le JSX ne fait plus qu'itérer et afficher — c'est son seul rôle.

**La réassignation de variable de boucle** (`link = ...` dans le `.map()`) est une mauvaise pratique :
- Elle rend le code imprévisible — `link` change de type en cours de route
- Elle viole le principe d'immutabilité (on ne devrait pas modifier les variables qu'on reçoit)
- TypeScript refuse ce pattern en mode strict

---

## 7. Clés (`key`) dans les listes React

### Avant — clés manquantes ou incorrectes

```jsx
// Navbar.jsx — aucune key
{link.map((item) => {
  return (
    <li>           // ← Warning React : "Each child in a list should have a unique key prop"
      <a href={item.pathway}>{item.title}</a>
    </li>
  )
})}

// StreetView.jsx — key incorrecte
{streetview.projectImages.map((picture) => {
  return (
    <div key={picture}>   // ← key est l'objet entier, pas un identifiant stable
      <img src={picture.image} alt={picture.alt} />
    </div>
  )
})}
```

### Après — clés stables et uniques

```tsx
// Navbar.tsx
{items.map((item) => (
  <li key={item.id}>  // ← l'id est stable et unique
    <a href={item.pathway}>{item.title}</a>
  </li>
))}

// StreetView.tsx
{streetview.projectImages.map((picture) => (
  <div key={picture.image}>  // ← le chemin de l'image est stable et unique
    <img src={picture.image} alt={picture.alt} />
  </div>
))}
```

### Pourquoi c'est critique ?

**La `key` est le mécanisme par lequel React identifie chaque élément d'une liste.** Sans elle, React ne peut pas savoir lequel a changé, été ajouté, ou supprimé lors d'un re-render.

**Ce qui se passe sans `key` :**
- React est obligé de re-render TOUS les éléments de la liste à chaque mise à jour
- Des bugs visuels apparaissent (état interne d'un élément "saute" vers un autre élément)
- Performance dégradée sur les longues listes

**Exemple concret du bug :**
```
Liste initiale : [A, B, C]
On supprime B → [A, C]

Sans key : React pense que C a changé en B (il compare par position), comportement inattendu
Avec key : React sait exactement que B a été supprimé, A et C sont inchangés
```

**Pourquoi jamais l'index comme `key` ?**

```jsx
// À éviter
{items.map((item, index) => <li key={index}>{item.name}</li>)}
```

Si la liste se réordonne ou si un élément est supprimé au milieu, les index changent. L'élément à l'index 2 n'est plus le même — React va être confus et créer des bugs. Toujours utiliser un identifiant **stable** (id en base de données, slug, chemin de fichier, etc.).

---

## 8. Correction du `<Link><a>` doublon

### Avant — HTML invalide

```jsx
// Blog.jsx
<Link to={`/blog/${post.slug}`}>
  <a className="button">Lire l'article</a>   // ← <a> dans un <Link> qui génère déjà un <a> !
</Link>

// NotFound.jsx
<Link to="/">
  <a className="button">{item.button}</a>    // ← même problème
</Link>

// PreviewProjectHome.jsx
<Link to={`/project/${projects.pathway}`}>
  <a className="button">{data[0].button}</a> // ← idem
</Link>
```

### Après — élément unique

```tsx
// Blog.tsx
<Link className="button" to={`/blog/${post.slug}`}>
  Lire l'article
</Link>

// NotFound.tsx
<Link className="button" to="/">
  {item.button}
</Link>
```

### Pourquoi ?

**`<Link>` de React Router génère déjà un élément `<a>` dans le DOM.** Mettre un `<a>` à l'intérieur crée un `<a>` imbriqué dans un `<a>` — c'est du HTML invalide selon les spécifications W3C.

**Conséquences concrètes :**
1. Le navigateur doit "réparer" le HTML invalide, avec un comportement non standardisé
2. Les lecteurs d'écran (accessibilité) peuvent mal interpréter la structure
3. Les moteurs de recherche peuvent dévaloriser la page (SEO)
4. En React, des warnings apparaissent dans la console

**La solution** : `<Link>` accepte une prop `className` directement, donc tu peux appliquer le style sans avoir besoin du `<a>` interne.

---

## 9. Conversion de `MoviesService` — fin des class components

### Avant — class component utilisée comme service

```jsx
// services/MoviesService.jsx
export default class MovieService extends React.Component {
  // Ce n'est pas un composant React !
  // C'est un service métier qui fait des appels API
  // Mais il étend React.Component — c'est une erreur architecturale

  getMoviesById(id, setMovies) {
    axios.get(API_BASE_URL + "/movie/" + id)
      .then(response => setMovies(response.data))
      .catch(error => console.log(error));
  }
}
```

### Après — fonction pure asynchrone

```ts
// services/moviesService.ts
export const getMovieById = async (id: string): Promise<Movie> => {
  const response = await axios.get<Movie>(
    `${API_BASE_URL}/movie/${id}?language=fr-FR`,
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );
  return response.data;
};
```

### Pourquoi ?

**Deux problèmes distincts :**

**Problème 1 — Class component dans un service**

`MovieService` n'est pas un composant React (il n'affiche rien à l'écran), mais il hérite de `React.Component`. C'est une confusion architecturale grave. Un service métier est une fonction ordinaire — pas un composant UI.

**Problème 2 — Class components vs composants fonctionnels**

Depuis React 16.8 (2019), les hooks ont rendu les class components obsolètes. La communauté React, Meta et tous les frameworks modernes utilisent exclusivement les composants fonctionnels.

**Pourquoi les composants fonctionnels sont meilleurs :**
- Plus courts et plus lisibles
- Les hooks (`useState`, `useEffect`, etc.) remplacent `this.state`, `componentDidMount`, etc.
- Pas de `this` — source majeure de bugs en JavaScript
- Meilleures performances (optimisations internes React)
- Meilleure composition avec les hooks customs

**La migration `async/await` :**

```js
// Ancien style — callbacks imbriqués ("callback hell")
axios.get(url)
  .then(response => { setMovies(response.data); })
  .catch(error => { console.log(error); });

// Style moderne — async/await, plus lisible
const response = await axios.get<Movie>(url);
return response.data;
// Les erreurs sont gérées avec try/catch là où la fonction est appelée
```

---

## 10. Nommage des constantes — `SCREAMING_SNAKE_CASE`

### Avant

```js
// i18n.js
export const authorName = "Nicolas De Wagner";  // camelCase pour une constante globale
export const year = "2026";
```

### Après

```ts
// i18n.ts
export const AUTHOR_NAME = 'Nicolas De Wagner';  // SCREAMING_SNAKE_CASE
export const YEAR = '2026';
```

### Pourquoi ?

C'est une **convention universelle** dans tous les langages de programmation (JavaScript, Python, Java, C...) :

- `camelCase` → variables locales et fonctions (`const isLoading = true`)
- `PascalCase` → composants React, classes, types, interfaces (`const MyComponent = ...`)
- `SCREAMING_SNAKE_CASE` → constantes globales immuables (`const MAX_ITEMS = 10`)

**Pourquoi cette distinction est utile ?**

Quand tu lis du code, tu sais immédiatement à quoi tu as affaire :
```ts
const API_BASE_URL = '...';  // → constante globale, ne changera jamais
const isLoading = true;       // → variable locale, peut changer
const MyComponent = () => {}; // → composant React
```

C'est explicitement demandé dans CLAUDE.md : "Constantes globales : SCREAMING_SNAKE_CASE".

---

## 11. Correction du Carousel — props individuelles → tableau

### Avant — couplage fort et rigidité

```jsx
// Carousel.jsx
const Carousel = ({ picture1, picture2, picture3, picture4 }) => {
  // Fixé à 4 images exactement
}

// Works.jsx
<Carousel 
  picture1={projectsData[0].projectImages[0]} 
  picture2={projectsData[0].projectImages[1]} 
  picture3={projectsData[0].projectImages[2]}
  picture4={projectsData[0].projectImages[3]} 
/>
```

### Après — flexible et générique

```tsx
// Carousel.tsx
interface CarouselProps {
  images: string[];  // N'importe quel nombre d'images
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () =>
    setCurrentIndex((prev) => (prev + images.length - 1) % images.length);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  // ...
}

// Works.tsx
<Carousel images={projectsData[0].projectImages} />  // Passe tout le tableau
```

### Pourquoi ?

**L'ancien composant était rigide** : exactement 4 images, ni plus, ni moins. Si tu voulais 5 images ou 3, il fallait modifier le composant.

**Avec `images: string[]`** :
- Le composant fonctionne avec n'importe quel nombre d'images
- Un seul point d'entrée clair (`images`) au lieu de 4 props séparées
- Le composant est **réutilisable** dans d'autres contextes

**La formule de navigation circulaire :**
```ts
// Aller à l'image précédente (avec retour au début si on est au début)
(prev + images.length - 1) % images.length

// Exemple avec 5 images (index 0 à 4) :
// Si prev = 0 → (0 + 5 - 1) % 5 = 4 → on va à la dernière image ✓
// Si prev = 3 → (3 + 5 - 1) % 5 = 2 → on va à l'image précédente ✓
```

**La forme fonctionnelle de `setState`** est utilisée ici : `setCurrentIndex((prev) => ...)`. C'est la bonne pratique quand le nouvel état dépend de l'ancien — ça évite les bugs avec les closures obsolètes.

---

## 12. Nommage interne de `CardProject`

### Avant — incohérence nom fichier / nom composant

```jsx
// Fichier : CardProject.jsx
const Projects = ({ pathway, title, picture }) => { // ← nommé "Projects" en interne !
  // ...
}

export default Projects;
```

### Après — cohérence totale

```tsx
// Fichier : CardProject.tsx
const CardProject = ({ pathway, title, picture }: CardProjectProps) => {
  // ...
}

export default CardProject;
```

### Pourquoi ?

**La règle est simple** : le nom du composant doit correspondre au nom du fichier. C'est une convention universelle en React.

**Conséquences du non-respect :**
- Dans les DevTools React, le composant apparaît sous le nom `Projects` — confus
- Un développeur qui lit `CardProject.jsx` s'attend à trouver `CardProject` à l'intérieur
- Les outils d'analyse de code (linters, bundlers) peuvent se comporter de manière inattendue

En TypeScript avec CLAUDE.md : "Nommage PascalCase pour les composants et leurs fichiers".

---

## 13. Sécurité — `rel="noreferrer"` sur les liens externes

### Avant — vulnérabilité de sécurité

```jsx
// Footer.jsx
<a href="https://www.instagram.com/nicolasdwphoto/" target="_blank">
  <FontAwesomeIcon icon={faInstagram} />
</a>
```

### Après — sécurisé

```tsx
// Footer.tsx
<a href="https://www.instagram.com/nicolasdwphoto/" target="_blank" rel="noreferrer">
  <FontAwesomeIcon icon={faInstagram} />
</a>
```

### Pourquoi ?

**L'attribut `target="_blank"` ouvre le lien dans un nouvel onglet.** Sans `rel="noreferrer"`, le site ouvert dans le nouvel onglet peut accéder à la page d'origine via `window.opener`. C'est une vulnérabilité connue appelée **"reverse tabnapping"**.

**Ce qu'un site malveillant pourrait faire avec `window.opener`** :
- Modifier l'URL de la page d'origine (`window.opener.location = 'faux-site.com'`)
- Faire croire à l'utilisateur qu'il est toujours sur ton portfolio alors qu'il est sur un site de phishing

**`rel="noreferrer"` fait deux choses :**
1. Empêche le site destination d'accéder à `window.opener`
2. N'envoie pas l'en-tête HTTP `Referer` (vie privée)

C'est une règle ESLint standard (`jsx-a11y/anchor-is-valid` et `react/jsx-no-target-blank`). Les navigateurs modernes affichent même des avertissements dans la console quand cette attribute manque.

---

## 14. Attribut HTML `frameborder` → `frameBorder`

### Avant

```jsx
// SidebarMovie.jsx
<iframe
  frameborder="0"    // ← attribut HTML natif, pas JSX
  allowfullscreen    // ← idem
/>
```

### Après

```tsx
// SidebarMovie.tsx
<iframe
  frameBorder="0"    // ← camelCase JSX
  allowFullScreen    // ← idem
/>
```

### Pourquoi ?

**JSX n'est pas du HTML.** C'est une syntaxe JavaScript qui ressemble à du HTML. React traduit ensuite le JSX en appels `React.createElement()`.

Les attributs HTML en JSX suivent la convention **camelCase** pour être cohérents avec les propriétés DOM de JavaScript :
- `class` → `className` (car `class` est un mot réservé JS)
- `for` → `htmlFor` (car `for` est un mot réservé JS)
- `frameborder` → `frameBorder`
- `allowfullscreen` → `allowFullScreen`
- `tabindex` → `tabIndex`
- `readonly` → `readOnly`

En mode strict TypeScript, utiliser `frameborder` (minuscule) génère une erreur de type car React ne reconnaît pas cet attribut.

---

## 15. `console.log` en production

### Avant

```jsx
// ArticleDetail.jsx
useEffect(() => {
  const fetchArticle = async () => {
    const response = await axios.get(...);
    console.log("log = ", response.data);      // ← log de débogage laissé par erreur
    // ...
  };
}, [slug]);

console.log("Article dans le state :", article); // ← log à chaque render !
```

### Après

```tsx
// ArticleDetail.tsx — plus de console.log
useEffect(() => {
  const fetchArticle = async () => {
    const response = await axios.get(...);
    setArticle(response.data.length > 0 ? response.data[0] : null);
    setLoading(false);
  };
}, [slug]);
```

### Pourquoi ?

1. **Performance** : `console.log("Article dans le state :", article)` était placé dans le corps du composant, donc exécuté à *chaque render*. Si le composant re-render 10 fois, tu as 10 logs.

2. **Sécurité** : les logs peuvent exposer des données sensibles (tokens, données utilisateur) dans les DevTools accessibles à n'importe quel développeur qui ouvre l'inspecteur.

3. **Propreté** : les `console.log` sont des outils de débogage temporaires. Les laisser en production indique un manque de rigueur.

**Bonne pratique** : utilise les outils de débogage de ton éditeur (breakpoints dans VS Code) plutôt que des `console.log`. Si tu en as besoin temporairement, utilise une convention comme `// TODO: remove` ou configure ESLint pour interdire les `console.log` en production (`no-console`).

---

## 16. `var` → `const`

### Avant

```jsx
// Works.jsx
{previewProject.map((text) => {
  var btn = translate ? text.fr : text.en;  // ← var : hoisting, portée de fonction
  // ...
})}
```

### Après

```tsx
// Works.tsx
const buttonLabel = translate
  ? previewProject.fr[0].button
  : previewProject.en[0].button;
```

### Pourquoi ?

**`var` est obsolète depuis ES6 (2015).** Il a trois problèmes majeurs :

1. **Hoisting (remontée)** : les déclarations `var` sont "remontées" en haut de leur fonction englobante, ce qui crée des comportements surprenants.

2. **Portée de fonction** (et non de bloc) : un `var` dans un `if` ou un `for` est accessible en dehors — à l'opposé de `let` et `const` qui sont limités au bloc `{}`.

3. **Réassignable et redéclarable** : tu peux faire `var x = 1; var x = 2;` sans erreur — source de bugs silencieux.

**Règle générale en JavaScript/TypeScript moderne :**
- Utilise `const` par défaut (variable qui ne sera pas réassignée)
- Utilise `let` si tu as besoin de réassigner (rarement)
- N'utilise jamais `var`

**Dans le cas précis :** `var btn` a été extrait entièrement du JSX en `const buttonLabel` défini avant le `return`. Le JSX est plus propre.

---

## 17. Suppression des imports `React` inutiles

### Avant

```jsx
// Chaque fichier .jsx commençait par
import React from 'react';
```

### Après — fichiers sans l'import

```tsx
// Aucun import React nécessaire pour le JSX
import { useState } from 'react';
// ...
```

### Pourquoi ?

**Avant React 17 (2020)**, le compilateur JSX transformait le JSX en appels `React.createElement(...)`. Il fallait donc que `React` soit en scope (importé) pour que ça fonctionne, même si tu ne l'utilisais pas explicitement.

```jsx
// Ce que tu écrivais
const MyComponent = () => <div>Hello</div>;

// Ce que le compilateur générait (React 16 et avant)
const MyComponent = () => React.createElement('div', null, 'Hello');
// → React doit être importé !
```

**Depuis React 17**, avec le nouveau "JSX Transform" (configuré par `"jsx": "react-jsx"` dans `tsconfig.json`), le compilateur importe automatiquement ce dont il a besoin en coulisse :

```jsx
// Ce que le compilateur génère maintenant (React 17+)
import { jsx as _jsx } from 'react/jsx-runtime';
const MyComponent = () => _jsx('div', { children: 'Hello' });
// → Pas besoin d'importer React manuellement !
```

**Résultat :** supprimer `import React from 'react'` quand on n'utilise pas `React` directement (ex: `React.StrictMode`, `React.ReactNode`) allège le code et évite le warning TypeScript `'React' is declared but its value is never read`.

---

## 18. Types pour les données i18n et projets

### Avant — aucune structure définie

```js
// projectsData.js — on ne sait pas ce que contient la donnée
export const streetview = {
  id: 1,
  pathway: 'streetview',
  title: 'Street View',
  picture: '...',
  projectImages: [ { image: '...', alt: '...' } ]
}
```

### Après — types explicites

```ts
// src/types/project.types.ts
export interface ProjectImage {
  image: string;
  alt: string;
}

export interface StreetViewDetail {
  id: number;
  pathway: string;
  title: string;
  picture: string;
  projectImages: ProjectImage[];  // ← tableau d'objets avec image ET alt
}

// projectsData.ts
export const streetview: StreetViewDetail = { ... };
```

### Pourquoi ?

**Les types centralisés dans `src/types/` servent de documentation auto-maintenue.**

Sans types, si tu accèdes à `streetview.projectImages[0].imge` (faute de frappe), tu n'as l'erreur qu'à l'exécution. Avec les types, TypeScript te crie dessus immédiatement : `Property 'imge' does not exist on type 'ProjectImage'. Did you mean 'image'?`

**Choix architecturaux importants :**

- `StreetViewDetail` utilise `projectImages: ProjectImage[]` (tableau) car StreetView itère sur les images
- `ProjectDetail` utilise `projectImages: Record<string, ProjectImage>` (objet avec clés nommées) car Confinement, Canaries et Street accèdent aux images par nom (`imgs.un`, `imgs.deux`, etc.)
- `ProjectListItem` utilise `projectImages: string[]` (tableau de chemins) car c'est le format utilisé par la page d'accueil et le Carousel

Ces trois types distincts reflètent trois usages différents des mêmes données — c'est une modélisation honnête de la réalité.

---

## Récapitulatif — les principes à retenir

| Principe | Application dans ce projet |
|---|---|
| **TypeScript strict** | Zéro `any`, interfaces pour toutes les props |
| **DRY** | `useTranslate` remplace 8× le même code |
| **Single Responsibility** | `TranslateButton` = 1 composant, 1 rôle |
| **Encapsulation** | `index.ts` dans chaque dossier composant |
| **Immutabilité** | Pas de réassignation de variables de boucle |
| **Clés stables** | `key={item.id}` jamais `key={index}` |
| **HTML valide** | `<Link>` sans `<a>` imbriqué |
| **Sécurité** | `rel="noreferrer"` sur tous les `target="_blank"` |
| **Conventions** | `SCREAMING_SNAKE_CASE`, `on`/`handle`, PascalCase |
| **Pas de `var`** | `const` par défaut, `let` si besoin de réassigner |
| **JSX propre** | Logique extraite avant le `return`, pas dans le JSX |

---

## Exemple complet — avant / après d'une page

### `About.jsx` avant le refactoring

```jsx
import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './About.css';
import Split from '../../components/split/Split';
import { about } from '../../data/i18n';
import ScrollToTopBtn from '../../components/scrollToTopBtn/ScrollToTopBtn';

const About = () => {
    // Code dupliqué dans 8 pages
    let defaultValueTranslate = localStorage.getItem('defaultValueTranslate');
    defaultValueTranslate = defaultValueTranslate === "false" ? false : true;
    const [translate, setTranslate] = useState(defaultValueTranslate);
    const handleTranslate = () => {
        localStorage.setItem('defaultValueTranslate', !translate);  // bug : stocke un boolean  
        setTranslate(!translate);
    }
    
    return (
        <>
            {/* Bouton de traduction copié-collé dans chaque page */}
            <button className='translateBtn' onClick={handleTranslate}>
                <p className='translate'>
                    {translate ? 'Fr' : 'En'}
                </p>
            </button>
            <Navbar data={translate} />
            {/* Double map illisible, clé manquante */}
            {about.map((text) => {
                text = translate ? text.fr : text.en;  // réassignation !
                return (
                    text.map((item) => {  // double map pour UN seul élément
                        return (
                            <div className="about">  {/* pas de key */}
                                <h1>{item.title2}</h1>
                                <p>{item.message[0]}</p>
                                <p>{item.message[1]}</p>
                                <p>{item.message[2]}</p>
                                <p>{item.message[3]}</p>
                            </div>
                        )
                    })
                )
            })}
            <Split data={translate} />  {/* Split n'utilise pas cette prop */}
            <ScrollToTopBtn />
            <Footer data={translate} />
        </>
    );
}
```

### `About.tsx` après le refactoring

```tsx
// src/pages/about/About.tsx
import Navbar from '../../components/navbar';          // import via index.ts
import Footer from '../../components/footer';
import Split from '../../components/split';
import ScrollToTopBtn from '../../components/scrollToTopBtn';
import TranslateButton from '../../components/translateButton';  // composant extrait
import useTranslate from '../../hooks/useTranslate';            // hook extrait
import { about } from '../../data/i18n';
import './About.css';

const About = () => {
  const { translate, handleTranslate } = useTranslate();  // 1 ligne remplace 6
  const item = translate ? about.fr[0] : about.en[0];     // logique hors JSX

  return (
    <>
      <TranslateButton translate={translate} onTranslate={handleTranslate} />
      <Navbar data={translate} />
      <div className="about">
        <h1>{item.title2}</h1>
        <p>{item.message[0]}</p>
        <p>{item.message[1]}</p>
        <p>{item.message[2]}</p>
        <p>{item.message[3]}</p>
      </div>
      <Split />           {/* Split sans prop inutile */}
      <ScrollToTopBtn />
      <Footer data={translate} />
    </>
  );
};

export default About;
```

**Bilan :**
- 42 lignes → 26 lignes (-38%)
- 0 code dupliqué (logique dans `useTranslate` et `TranslateButton`)
- 0 double `.map()` (accès direct à `about.fr[0]`)
- Props typées (TypeScript)
- Import via `index.ts` (chemin plus court)
- Imports ordonnés : libs externes → composants → hooks → types → styles

---

*Document généré le 2026-06-19 — Portfolio de Nicolas De Wagner*
