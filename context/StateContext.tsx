import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "react-hot-toast";
import { IProduct } from "../dto";

interface IStateContext {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
  cartItems: any[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  increaseQty: () => void;
  decreaseQty: () => void;
  onAdd: (product: IProduct, quantity: number) => void;
}

const defaultStateContext = {
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 1,
  increaseQty: () => {},
  decreaseQty: () => {},
  onAdd: () => {},
};

export const StateContext = createContext<IStateContext>(defaultStateContext);

interface IStateContextProvider {
  children: ReactNode;
}

export const StateContextProvider = ({ children }: IStateContextProvider) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product: IProduct, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item: IProduct) => item._id === product._id
    );

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart!`);
  };

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
    setShowCart,
    cartItems,
    totalPrice,
    totalQuantities,
    qty,
    increaseQty,
    decreaseQty,
    onAdd,
  };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
