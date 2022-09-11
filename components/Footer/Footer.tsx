import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-container">
      <p>2022 E-commerce All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
