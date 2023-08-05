import { createContext, useState } from "react";

// contexto
export const CartContext = createContext();

// proveedor
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // aca se agregan los valores
  const addToCart = (item) => {
    const existe = isInCart(item.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return { ...elemento, quantity: elemento.quantity + item.quantity };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, item]); //esto es la alternativa a un push a través del setter
      console.log("Added to cart", item.id);
    }
  };
  const clearCart = () => {
    setCart([]);
    console.log("Cart cleared");
  };

  const deleteById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
    console.log("Deleted:", id);
  };

  // verifica si el producto esta en el carrito
  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  let data = { cart, addToCart, clearCart, deleteById };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
