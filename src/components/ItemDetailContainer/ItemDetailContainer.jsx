import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true)
	const { productId } = useParams();

	useEffect(() => {
		const db = getFirestore()
		const queryDoc = doc(db, 'productos', productId)
		getDoc(queryDoc)
		.then(resp => setProduct({id: resp.id, ...resp.data()}))
		.catch(err => console.log(err))
		.finally(() => setLoading(false))
	}, [])

	if (!product) {
		return <div>loading</div>;
	}

	return (
        <>
           {loading ? 
				<h2>loading...</h2> : <ItemDetail product={product}/>} 
            

        </>
    )
}


export default ItemDetailContainer;
