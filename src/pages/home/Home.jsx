import { useTranslation } from 'react-i18next';
import './home.css';
import bedrock from '../../resources/mc_bedrock.jpeg';
import java from '../../resources/mc_java.jpg';
import { NavLink } from "react-router-dom";
import { MdOutlineSearch, MdClose } from "react-icons/md";

import http from "../../functions/Utils/http";


const sendMessage = async () => {
  let type = "farm"

  let parms = ["type", "name", "id", "version", "structure", "special", "item"]

  let res = await http.get(`findFarm`, {params: {type: type}}).then(n => n.data)
  console.log(res)
}

const Home = () => {
  const { t } = useTranslation()
  //<MdOutlineSearch size={27} className="search-icon" />
  //<MdClose size={27} className="clear-icon"/>
  return (
    <div className="home__window">
      <div className="home__search">

        <input

          id="search_total"
          name="search_total"
          className="search_total"
          placeholder={t("Search a farm!")}
          onChange={(e) => console.log(e.target.value)}
        />

      </div>
      <div className="box_bedrock" >
        <button type="button" onClick={(e) => sendMessage()}>
          <img src={bedrock} />
          <p>{t("Bedrock Farms")}</p>
        </button>
      </div>

      <div className="box_java" >
        <button type="button" >
          <img src={java} />
          <p>{t("Java Farms")}</p>
        </button>
      </div>
    </div>
  );
};

export default Home;