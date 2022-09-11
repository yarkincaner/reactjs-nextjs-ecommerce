import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "react-hot-toast";

interface IStateContext {
  showCart: boolean;
  cartItems: any[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  increaseQty: () => void;
  decreaseQty: () => void;
}

const defaultStateContext = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 1,
  increaseQty: () => {},
  decreaseQty: () => {},
};

export const StateContext = createContext<IStateContext>(defaultStateContext);

interface IStateContextProvider {
  children: ReactNode;
}

export const StateContextProvider = ({ children }: IStateContextProvider) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty((prev) => prev + 1);
  };
  const decreaseQty = () => {
    setQty((prev) => {
      if (prev == 1) {
        return prev;
      }

      return prev - 1;
    });
  };

  const values = {
    showCart,
    cartItems,
    totalPrice,
    totalQuantities,
    qty,
    increaseQty,
    decreaseQty,
  };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
