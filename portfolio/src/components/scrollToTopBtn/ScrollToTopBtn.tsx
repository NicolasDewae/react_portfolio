// src/components/scrollToTopBtn/ScrollToTopBtn.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollToTopBtn.css';

const ScrollToTopBtn = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <button className="scroll" onClick={handleScrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default ScrollToTopBtn;
