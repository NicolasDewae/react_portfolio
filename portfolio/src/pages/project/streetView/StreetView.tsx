// src/pages/project/streetView/StreetView.tsx
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import StoryScroll from '../../../components/StoryScroll';
import ScrollToTopBtn from '../../../components/scrollToTopBtn';
import useTranslate from '../../../hooks/useTranslate';
import { streetview } from '../../../data/projectsData';
import { projects } from '../../../data/i18n';
import { StoryBlock } from '../../../types/story.types';
import styles from '../../../styles/projectPage.module.css';

// Agencement éditorial propre à Street View.
// Texte Lorem — à remplacer par le contenu définitif.
const blocks: StoryBlock[] = [
  { kind: 'hero', imageIndex: 0 },
  {
    kind: 'text',
    variant: 'paragraph',
    content:
      "Street View naît d'une errance numérique — ces captures faites depuis une voiture automatisée, traversant les rues que personne n'a choisies de photographier. Il y a dans ces images une vérité non voulue, une présence involontaire du monde.",
  },
  { kind: 'pair', imageIndices: [1, 2] },
  {
    kind: 'text',
    variant: 'short',
    content: 'Un seul clic de souris. Un nouvel instant, une nouvelle rue.',
  },
  { kind: 'full', imageIndex: 3 },
  {
    kind: 'text',
    variant: 'paragraph',
    content:
      "Il y a dans l'archive numérique une démesure qui fascine et écrase à la fois. Des milliards d'images prises sans intention, sans regard — et pourtant, parfois, une composition, une lumière, un geste captés par accident.",
  },
  { kind: 'trio', imageIndices: [4, 5, 6] },
  { kind: 'quote', content: '« Ces rues n\'ont pas été choisies. C\'est peut-être pour ça qu\'elles disent la vérité. »' },
  { kind: 'single', imageIndex: 7 },
  { kind: 'pair', imageIndices: [8, 9] },
  {
    kind: 'text',
    variant: 'short',
    content: "L'archive ne dort jamais. Elle accumule, silencieuse.",
  },
  { kind: 'full', imageIndex: 10 },
  { kind: 'pair', imageIndices: [11, 12] },
];

const StreetView = () => {
  const { translate, handleTranslate } = useTranslate();
  const description = translate
    ? projects.fr[0].streetview
    : projects.en[0].streetview;

  return (
    <div className={styles.page}>
      <Navbar translate={translate} onTranslate={handleTranslate} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{streetview.title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <StoryScroll images={streetview.projectImages} blocks={blocks} />
      <ScrollToTopBtn />
      <Footer data={translate} />
    </div>
  );
};

export default StreetView;
