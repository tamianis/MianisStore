import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../NavBar/NavBar";
import Titulo from "../Titulo/Titulo";

function ComponenteContainer() {
	let tituloApp = "Mianis Store";

	return (
		<div style={{marginTop:'100px'}}>
			<Titulo titulo={tituloApp}/>
			<NavBar />
			<ItemListContainer greetings={"Bienvenidos a la tienda"} />
		</div>
	);
}

export default ComponenteContainer;
