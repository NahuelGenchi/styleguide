import { LinkIcon } from "../index";

import "./Footer.scss";

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-container">
        <div className="fc-links">
          <LinkIcon link="https://github.com/NahuelGenchi" iconName="logo-github"/>
          <LinkIcon link="https://www.linkedin.com/in/nahuel-genchi/" iconName="logo-linkedin"/>
          <LinkIcon link="mailto:nahuelgenchi@gmail.com" iconName="mail"/>
        </div>
        <div className="fc-info">
          <span>© 2022 Nahuel Genchi</span>
          <span>Color data provided by Tailwind docs.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;