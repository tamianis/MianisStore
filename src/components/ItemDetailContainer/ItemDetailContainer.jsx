import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../helper/gFetch";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});

	const { productId } = useParams();
	console.log(productId);

	useEffect(() => {
		gFetch()
			.then((respProd) =>
				setProduct(respProd.find((prod) => prod.id === productId))
			)
			.catch((err) => console.log(err));
	});

	const onAdd = (cant) => {
		console.log(cant);
        return 2
	};

	if (!product) {
		console.log(product);
		return <div>loading</div>;
	}

	return (
		<div
			className="container border border-3 rounded"
			style={{ marginTop: "120px" }}
		>
			<div className="row">
				<div className="col">
					<img
						className="w-50"
						src={product.imagen}
						alt="Imagen producto"
					/>
					<h2>Categoria: {product.categoria}</h2>
					<h3>Nombre: {product.name}</h3>
					<h4>Precio: $ {product.precio}</h4>
					<h5>Descripcion: {product.descripcion} </h5>
				</div>
				<div className="col">
					<ItemCount stock={5} initial={1} onAdd={onAdd} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetailContainer;
