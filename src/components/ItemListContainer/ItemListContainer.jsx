import Titulo from "../Titulo/Titulo";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { gFetch } from "../../helper/gFetch";
import { Link, useParams } from "react-router-dom";


const ItemListContainer = ({ greetings }) => {
	const [products, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);

	const {id} = useParams ()

	useEffect(() => {
		if(id){
			gFetch()
			.then((data) => setProduct(data.filter (prod => prod.categoria === id)))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
		}else{
			gFetch()
			.then((data) => setProduct(data))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
		}
		
	}, [id]);

	console.log(products);

	return (
		<section className="sectionList">
			{loading ? (
				<h2>loading...</h2>
			) : (
				products.map((product) => (
					<div
						style={{ marginLeft: 100 }}
						className="col-md-3"
						key={product.id}
					>
						<div className="card w-100 mt-5">
							<div className="card-header">
								{`${product.name}`}
							</div>
							<div className="card-body">
								<img src={product.imagen} className="w-50" />
							</div>
							${product.precio}
							<div className="card-footer">
								<Link to={`/detail/${product.id}`}>
									<button className="btnlist">
										Detalles del producto
									</button>
								</Link>
							</div>
						</div>
					</div>
				))
			)}
		</section>
	);
};

// 	return (
// 		<section className="section">
// 			<Titulo  titulo={greetings} subTitulo="Bienvenido!" />
// 		</section>
// 	);
// };
export default ItemListContainer;
