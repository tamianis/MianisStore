import { addDoc, collection, getFirestore, } from "firebase/firestore";
import { useState } from "react"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function CartContainer()  {
	const [ dataForm, setFormData ] =  useState({
		name: '',
		email: '',
		phone: ''
	  })

	const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext();

	//Formulario
	const addOrder = () => {
		const order = {}
		order.buyer = { name: '', phone: '', email: '' }
		order.price = totalPrice()
		order.items = cartList.map(product => ({ id: product.id, price: product.price, name: product.name }))

		const db = getFirestore()
		const queryCollection = collection(db, 'orders')

		addDoc(queryCollection, order)
			.then(resp => console.log(resp))
			.catch(err => console.log(err))
			.finally(() => emptyCart())

	}
	const handleOnChange = (e) => {
		setFormData({
			...dataForm,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div>
			{cartList.length !== 0 ?

				<>
					{cartList.map(prod => <div key={prod.id}>
						<div className="w-50">
							<img src={prod.image} alt="Foto del Producto." className="w-25" />
						</div>

						<h2>Categoría: {prod.category}</h2>
						<h3>Nombre: {prod.name}</h3>
						<h3>- Precio: $ {prod.price} - cantidad: {prod.cant}</h3>
						<h5>Descripción: {prod.description} </h5>
						<button onClick={() => deleteItem(prod.id)} className="btn btn-danger"> X </button>
					</div>
					)}

					<h4>El precio total es: {totalPrice()}</h4>

					<form onSubmit={addOrder} >
						<input type="text" onChange={handleOnChange} name='name' value={dataForm.name}
							placeholder="Ingrese el nombre" />

						<input type="text" onChange={handleOnChange} name='phone'
							value={dataForm.phone} placeholder="Ingrese el telefono" />

						<input type="text" onChange={handleOnChange} name='email'
							value={dataForm.email} placeholder="Ingrese el email" />
						<button className="btnFinish">Terminar compra</button>
					</form>
					<button className="btnEmpty" onClick={emptyCart}> Vaciar Carrito</button>
				</>
				:
				<>
					<h2>Compren algo a su Michi.</h2>
					<Link to='/' ><img src="https://media.tenor.com/uneqmK1ERo8AAAAj/tkthao219-bubududu.gif" /></Link>
				</>
			}
		</div>
	);
}

export default CartContainer;
