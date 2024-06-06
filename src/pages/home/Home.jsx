import { useTranslation } from 'react-i18next';
import './home.css';
import bedrock from '../../resources/mc_bedrock.jpeg';
import java from '../../resources/mc_java.jpg';

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="home__content">
      <div className="box_bedrock" >
        <button type="button" onClick={(e) => {}} >
          <p>{t("Bedrock Farms")}</p>
        </button>
      </div>

      <div className="box_java" >
        <button type="button"  onClick={(e) => {}} >
          <p>{t("Java Farms")}</p>
        </button>
      </div>
    </div>
  );
};

export default Home;