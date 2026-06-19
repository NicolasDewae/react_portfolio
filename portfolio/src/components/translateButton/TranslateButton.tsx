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

export default TranslateButton;
