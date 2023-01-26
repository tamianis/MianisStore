import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../context/CartContext";
import './CartWidget.css'

export const CartWidget = () => {

	const {totalCant} = useCartContext ()
	return (
		<div className="cartTotal">
			<p>{totalCant ()!== 0 && totalCant ()}</p>
			<img
				className="logocarro"
				src="https://media.tenor.com/567jieqh1aYAAAAi/pusheen.gif"
				alt="logo"
			/>
		</div>
	);
};
export default CartWidget;
