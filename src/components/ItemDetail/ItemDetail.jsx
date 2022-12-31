import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({product}) =>{

    const [purchase, setPurchase] = useState(false)

    const {addCart} = useCartContext()

    const onAdd = (cant) => {
        addCart ({ ...product, cant})
        setPurchase(true)
    }
console.log (product)
    return (
		<div
			className="container border border-3 rounded"
		>
			<div className="row">
				<div className="col">
					<img
						className="w-50"
						src={product.image}
						alt="image producto"
					/>
					<h2>Categoría: {product.category}</h2>
					<h3>Nombre: {product.name}</h3>
					<h4>Precio: $ {product.price}</h4>
                    <h4>Stock: {product.stock}</h4>
					<h5>Descripción: {product.description} </h5>

				</div>
				<div className="col">
                {purchase ?
                    
                    <>
                        <Link to="/carrito"><button className='btn btn-outline-primary'>Ir al carro</button></Link>
                        <Link to="/"><button className='btn btn-outline-success'>Seguir comprando </button></Link>
                    </>
                
                :
                    <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                } 
				</div>
			</div>
		</div>
    )

}
 export default ItemDetail;
