import Titulo from "../Titulo/Titulo";
import "./ItemListContainer.css";

const ItemListContainer = ({ greetings }) => {
	return (
		<section className="section">
			<Titulo  titulo={greetings} subTitulo="Bienvenido!" />
		</section>
	);
};
export default ItemListContainer;
