import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {

	const {totalCant} = useCartContext ()
	return (
		<div>
			{totalCant ()!== 0 && totalCant ()}
			<img
				className="logocarro"
				src="https://media.tenor.com/567jieqh1aYAAAAi/pusheen.gif"
				alt="logo"
			/>
		</div>
	);
};
export default CartWidget;
