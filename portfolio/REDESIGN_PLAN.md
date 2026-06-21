# Plan d'action — Nouveau design du portfolio

> Référence unique : **https://sonsanddaughters.xyz/**
> Toute décision stylistique s'aligne sur ce site.

---

## Décisions validées

| Sujet | Choix retenu |
|---|---|
| Référence | Sons & Daughters uniquement |
| Page d'accueil | Grand titre + grille éditoriale 2 colonnes |
| Pages projet | Grille masonry + lightbox |
| Fond | Blanc cassé / crème (`#F9F8F6`) |
| Typographie | Option B — Playfair Display (display) + DM Sans (body) |
| Animations | ScrollReveal (fade + translateY) via IntersectionObserver |
| CSS | CSS Modules uniquement (pas de sélecteurs globaux) |
| Scope | Toutes les pages (Works, About, Contact, Blog) |
| Contenu | Textes et images inchangés |

---

## Analyse de la référence — Sons & Daughters

### Ce qui définit ce site visuellement

1. **Typographie comme architecture** — les titres sont énormes, en pleine largeur, ils structurent la page avant même les images.

2. **Scroll narratif** — la page se déroule comme un récit. Les images et blocs de texte apparaissent avec un léger fade/translate-Y.

3. **Grille éditoriale** — projets en grille irrégulière, impression de magazine plutôt que de galerie.

4. **Palette neutre + images chaudes** — fond clair quasi-blanc, texte noir/anthracite, aucune couleur d'accent artificielle.

5. **Navigation minimaliste** — transparente sur le hero, sticky après scroll, underline au hover.

6. **Whitespace généreux** — marges internes larges.

---

## Palette de couleurs

```css
:root {
  --color-bg:        #F9F8F6;  /* crème chaud */
  --color-bg-alt:    #F0EEEA;  /* crème légèrement plus foncé */
  --color-text:      #1A1A1A;  /* quasi-noir */
  --color-text-muted:#6B6560;  /* gris chaud */
  --color-border:    #D9D4CB;  /* séparateurs discrets */
}
```

---

## État d'avancement

### Phase 1 — Socle ✅ TERMINÉ
- [x] `src/styles/variables.css`
- [x] `src/styles/reset.css`
- [x] `src/styles/reveal.css`
- [x] Google Fonts Playfair Display + DM Sans dans `index.css`

### Phase 2 — Navbar & Footer ✅ TERMINÉ
- [x] Navbar transparente → sticky au scroll, burger mobile
- [x] Footer minimaliste (newsletter + social + copyright)

### Phase 3 — Page d'accueil ✅ TERMINÉ
- [x] `HeroHome` — titre hero pleine hauteur, tagline
- [x] `ScrollReveal` — hook IntersectionObserver + wrapper composant
- [x] `ProjectCard` — image 3:4 + hover scale + meta (index, titre, label)
- [x] Grille 2 colonnes avec décalage vertical alterné

### Phase 4 — Pages projet ✅ TERMINÉ
- [x] `MasonryGrid` — CSS columns + lightbox keyboard-navigable
- [x] `projectPage.module.css` — hero (titre hero + description) partagé
- [x] Pages StreetView, Confinement, Canaries, Street migrées

### Phase 5 — Pages secondaires ✅ TERMINÉ
- [x] `About` — hero + paragraphes ScrollReveal
- [x] `Blog` — liste articles en grille 2 colonnes + pagination
- [x] `ArticleDetail` — layout éditorial (image + body typographique)
- [x] `Contact` — hero + formulaire

### Phase 5bis — Corrections CSS ❌ À FAIRE
- [ ] **`InputMail.css`** — sélecteurs globaux `input` et `button` polluent tout le site → convertir en styles scoped
- [ ] **`ContactForm.css`** — CSS hors-système (ancienne version) → réécrire pour correspondre au design Tamaki

### Phase 6 — Finitions (en cours)
- [ ] Responsive mobile testé (375px, 768px, 1024px)
- [ ] Test bilinguisme FR/EN sur toutes les pages
- [ ] Audit contrastes WCAG AA

---

## Ce qui NE change pas

- Contenu textuel (titres, descriptions, bios)
- Images et assets
- Structure des routes React Router
- Système i18n (`useTranslate` + `localStorage`)
- Données projets (`projectsData`)
- TypeScript strict, composants fonctionnels, CSS Modules
