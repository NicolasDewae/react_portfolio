// src/pages/project/confinement/Confinement.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import StoryScroll from '../../../components/StoryScroll';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import useTranslate from '../../../hooks/useTranslate';
import { confinement } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import { StoryBlock } from '../../../types/story.types';
import styles from '../../../styles/projectPage.module.css';

// Agencement éditorial propre à Confinement (19 images, indices 0–18).
// Texte Lorem — à remplacer par le contenu définitif.
const blocks: StoryBlock[] = [
  { kind: 'hero', imageIndex: 0 },
  {
    kind: 'text',
    variant: 'paragraph',
    content:
      "Le premier confinement a transformé l'espace domestique en seul territoire possible. Cent mètres carrés, une fenêtre, la même lumière chaque matin. Photographier depuis chez soi, c'est accepter de ne montrer que ça — et découvrir que c'est déjà beaucoup.",
  },
  { kind: 'full', imageIndex: 1 },
  {
    kind: 'text',
    variant: 'short',
    content: 'Cent mètres carrés. Une ville entière dehors, silencieuse.',
  },
  { kind: 'pair', imageIndices: [2, 3] },
  {
    kind: 'text',
    variant: 'paragraph',
    content:
      "Filmer depuis sa fenêtre, son balcon, son couloir — c'est habiter autrement un espace devenu à la fois refuge et prison. Les rues désertes, les balcons animés, les regards perdus : autant de fragments d'une histoire collective vécue dans la solitude.",
  },
  { kind: 'single', imageIndex: 4 },
  { kind: 'quote', content: '« L\'ordinaire révèle ce qu\'on ne remarquait plus. »' },
  { kind: 'trio', imageIndices: [5, 6, 7] },
  { kind: 'full', imageIndex: 8 },
  {
    kind: 'text',
    variant: 'short',
    content: 'Le silence avait une texture. On apprenait à l\'entendre.',
  },
  { kind: 'pair', imageIndices: [9, 10] },
  { kind: 'wide', imageIndex: 11 },
  { kind: 'pair', imageIndices: [12, 13] },
  { kind: 'full', imageIndex: 14 },
  { kind: 'pair', imageIndices: [15, 16] },
  { kind: 'pair', imageIndices: [17, 18] },
];

const Confinement = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[1].confinement
    : projects.en[1].confinement;

  const images = Object.values(confinement.projectImages);

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{confinement.title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <StoryScroll images={images} blocks={blocks} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default Confinement;
