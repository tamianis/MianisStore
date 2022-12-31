import { useContext, createContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const addCart = (product) => {
		const idx = cartList.findIndex(prod => prod.id === product.id)

		if(idx !== -1){
			cartList[idx].cant += product.cant
			setCartList([ ...cartList])
		}else{
			setCartList([...cartList, product]);
		}
		
	}

	const totalPrice = () => cartList.reduce((contador, producto) => contador += (producto.price * producto.cant) , 0)

	const totalCant = () => cartList.reduce((contador, producto) => contador += producto.cant , 0)

	//Vaciar carro
    const emptyCart = () => {
        setCartList([])
    }

	//Elimina por item
	const deleteItem = (id) => setCartList(cartList.filter(prod => prod.id !== id))


	return (
		<CartContext.Provider
			value={{
				cartList,
				addCart,
                emptyCart,
				totalPrice,
				totalCant,
				deleteItem
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
