// src/components/main/Main.tsx
import { mainContent } from '../../data/i18n';
import './Main.css';

interface MainProps {
  data: boolean;
}

const Main = ({ data }: MainProps) => {
  const items = data ? mainContent.fr : mainContent.en;

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="main">
          <h1>{item.message}</h1>
        </div>
      ))}
    </>
  );
};

export default Main;
