import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

/* ---------------- TYPES ---------------- */

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  removeItem: (id: string) => void;
  getGrandTotal: () => number;
}

/* ---------------- CONTEXT ---------------- */

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

/* ---------------- PROVIDER ---------------- */

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  /* -------- Load cart from localStorage -------- */
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  /* -------- Save cart to localStorage -------- */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /* -------- Add To Cart -------- */
  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // Increase quantity if already exists
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new product
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  /* -------- Increase Quantity -------- */
  const increaseQty = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /* -------- Decrease Quantity -------- */
  const decreaseQty = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if 0
    );
  };

  /* -------- Remove Item Completely -------- */
  const removeItem = (id: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  /* -------- Grand Total -------- */
  const getGrandTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        getGrandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};