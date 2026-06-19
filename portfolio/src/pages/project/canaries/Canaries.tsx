// src/pages/project/canaries/Canaries.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import StoryScroll from '../../../components/StoryScroll';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import useTranslate from '../../../hooks/useTranslate';
import { canaries } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import { StoryBlock } from '../../../types/story.types';
import styles from '../../../styles/projectPage.module.css';

// Agencement éditorial propre à Canaries (12 images, indices 0–11).
// Texte Lorem — à remplacer par le contenu définitif.
const blocks: StoryBlock[] = [
  { kind: 'hero', imageIndex: 0 },
  {
    kind: 'text',
    variant: 'paragraph',
    content:
      "Tenerife, dans sa lumière de fin d'après-midi, dépose sur les murs une géographie de couleurs. Les chats prennent le soleil, les motos attendent, les femmes balaient. La vie ordinaire sous un éclairage qui transfigure tout ce qu'il touche.",
  },
  { kind: 'wide', imageIndex: 1 },
  {
    kind: 'text',
    variant: 'short',
    content: 'La chaleur change les couleurs. Les couleurs changent tout.',
  },
  { kind: 'trio', imageIndices: [2, 3, 4] },
  { kind: 'pair', imageIndices: [5, 6] },
  { kind: 'quote', content: '« Le voyage commence quand on arrête de chercher l\'exceptionnel. »' },
  { kind: 'full', imageIndex: 7 },
  {
    kind: 'text',
    variant: 'paragraph',
    content:
      "Ces images ont été faites au fil de la marche, sans itinéraire, en acceptant que la rue décide. Ce que l'on rapporte d'un voyage, ce ne sont pas les monuments — c'est la façon dont les gens habitent leur quotidien.",
  },
  { kind: 'single', imageIndex: 8 },
  { kind: 'pair', imageIndices: [9, 10] },
  { kind: 'full', imageIndex: 11 },
];

const Canaries = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[3].canaries
    : projects.en[3].canaries;

  const images = Object.values(canaries.projectImages);

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{canaries.title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <StoryScroll images={images} blocks={blocks} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default Canaries;
