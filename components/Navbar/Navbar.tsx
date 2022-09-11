import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">E-commerce</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => {}}>
        <AiOutlineShopping />
        <span className="cart-item-qty"> {/**qty = quantity*/}1</span>
      </button>
    </div>
  );
};

export default Navbar;
