import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


const ItemListContainer = ({ greetings }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const {id} = useParams ()

	useEffect(() => {
		if(id){
			const db = getFirestore()
			const queryCollection = collection (db, 'productos')
	
			const queryFiltered = query(queryCollection, where('category','==', id))
			getDocs(queryFiltered)
			.then(data => setProducts( data.docs.map(product => ({id: product.id, ...product.data()}))))
			.catch(err => console.log(err))
			.finally(() => setLoading(false))
		}else{
			const db = getFirestore()
			const queryCollection = collection (db, 'productos')
			getDocs(queryCollection)
			.then(data => setProducts( data.docs.map(product => ({id: product.id, ...product.data()}))))
			.catch(err => console.log(err))
			.finally(() => setLoading(false))
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
						className="col-md-3"
						key={product.id}
					>
						<div className="card w-100 mt-5">
							<div className="card-header">
								{`${product.name}`}
							</div>
							<div className="card-body">
								<img src={product.image} className="w-50" />
							</div>
							${product.price}
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

export default ItemListContainer;
