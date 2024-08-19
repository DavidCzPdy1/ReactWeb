import { useTranslation } from 'react-i18next';
import './farms.css';


const Farms = () => {
  const { t } = useTranslation()
  let data = localStorage.getItem("showData")
  console.log(data)

  if (data == null) {
    return (
      <div className="home__window"> {t("NODATA")} </div>
    );
  }
  data = JSON.parse(data)
console.log(data.type)

  return (
    <div className="home__window">
        {t(data.type)}
        <br></br>
        {t(data.name)}
        <br></br>
        {t(data.url)}
        <br></br>
        {t(data.schematics)}
      </div>
      
  );
};

export default Farms;