import { useTranslation } from 'react-i18next';
import './home.css';

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="home__content">
      <div className="home__filter">
        <div className="box_bedrock filter__box" onClick={(e) => {}} >
            <p>{t("Bedrock Farms")}</p>
        </div>

        <div className="box_java filter__box" onClick={(e) => {}} >
            <p>{t("Java Farms")}</p>
        </div>

        <div className="box_type filter__box" onClick={(e) => {}} >
          <p>{t("All Types")}</p>
        </div>
        <div className="box_name filter__box" onClick={(e) => {}} >
          <p>{t("All names")}</p>
        </div>
        <div className="box_item filter__box" onClick={(e) => {}} >
          <p>{t("All Items")}</p>
        </div>
        <div className="box_version filter__box" onClick={(e) => {}} >
          <p>{t("All Versions")}</p>
        </div>
        <div className="box_difficulty filter__box" onClick={(e) => {}} >
          <p>{t("All Difficulties")}</p>
        </div>
      </div>

      <div className="home__farms" >

      </div>
    </div>
  );
};

export default Home;