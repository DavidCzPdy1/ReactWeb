import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
  <div className="footer">
    <div className="footer__copyright">
      <p>@{new Date().getFullYear()} {t("title")}</p>
    </div>
  </div>
)}

export default Footer;
