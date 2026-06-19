// src/pages/project/street/Street.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import StoryScroll from '../../../components/StoryScroll';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import useTranslate from '../../../hooks/useTranslate';
import { street } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import { StoryBlock } from '../../../types/story.types';
import styles from '../../../styles/projectPage.module.css';

// Agencement éditorial propre à Street (14 images, indices 0–13).
// Texte Lorem — à remplacer par le contenu définitif.
const blocks: StoryBlock[] = [
  { kind: 'hero', imageIndex: 0 },
  {
    kind: 'text',
    variant: 'paragraph',
    content:
      'Paris, New York, Montréal, Londres. La rue est partout la même — et partout différente. Ces images ont été faites dans l\'urgence et le désir, au rythme de la marche et de la curiosité, sans autre projet que celui de regarder.',
  },
  { kind: 'pair', imageIndices: [1, 2] },
  { kind: 'full', imageIndex: 3 },
  {
    kind: 'text',
    variant: 'short',
    content: 'On ne photographie pas une rue. On photographie une seconde.',
  },
  { kind: 'single', imageIndex: 4 },
  {
    kind: 'text',
    variant: 'paragraph',
    content:
      "La photographie de rue est une discipline du hasard consenti. On choisit l'endroit, l'heure, la lumière — et on attend que quelque chose arrive. Ou on marche et on ne choisit rien du tout. Les deux fonctionnent.",
  },
  { kind: 'trio', imageIndices: [5, 6, 7] },
  { kind: 'quote', content: '« La foule rend invisible. C\'est là que tout se passe. »' },
  { kind: 'wide', imageIndex: 8 },
  { kind: 'pair', imageIndices: [9, 10] },
  { kind: 'full', imageIndex: 11 },
  {
    kind: 'text',
    variant: 'short',
    content: 'La rue ne se souvient pas. C\'est pour ça qu\'il faut photographier.',
  },
  { kind: 'pair', imageIndices: [12, 13] },
];

const Street = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[2].street
    : projects.en[2].street;

  const images = Object.values(street.projectImages);

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{street.title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <StoryScroll images={images} blocks={blocks} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default Street;
