import React, { useState, useEffect } from "react";
import { Product } from "../types/product";
import { CartProps } from "../types/cart";

function WithCart<P extends CartProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithCartComponent(props: Omit<P, keyof CartProps>) {
    const [cartItems, setCartItems] = useState<Product[]>(() => {
      // Carregar itens do localStorage
      const storedItems = localStorage.getItem("cartItems");
      return storedItems ? JSON.parse(storedItems) : [];
    });

    // Sincronizar localStorage sempre que cartItems mudar
    useEffect(() => {
      console.log("adicionou");
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Adicionar produto ao carrinho
    const addToCart = (product: Product) => {
      const existingProduct = cartItems.find((item) => item.id === product.id);
      if (!existingProduct) {
        setCartItems((prevItems) => [...prevItems, product]);
      } else {
        alert("Este produto já está no carrinho!");
      }
    };

    // Remover produto do carrinho
    const removeFromCart = (id: number) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Quantidade de itens no carrinho
    const cartCount = cartItems.length;

    // Forçar re-render do WrappedComponent quando o cartItems mudar
    return (
      <WrappedComponent
        {...(props as P)}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartCount={cartCount}
      />
    );
  };
}

export default WithCart;