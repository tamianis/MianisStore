import { useState,useCallback } from "react";
import "./ItemCount.css";

const ItemCount = ({stock = 10, initial = 0, onAdd}) => {
	const [count, setCount] = useState(0);

	const restar = () => {
		if (count >= initial) {
			setCount(count - 1);
		}
	};
	const sumar = () => {
        if (count < stock) {
		setCount(count + 1);
        }
	};

	const handleOnAdd = useCallback(() => {
		onAdd(count);
	}, [count]);

	return (
		<div className="card m-5">
			<div className="card-header">
				<label htmlFor="">{count}</label>
			</div>
			<div className="card-body">
				<button onClick={sumar} className="btn">
					+
				</button>
				<button onClick={restar} className="btn">
					-
				</button>
				<div className="card-footer">
				{count<1 ? 'LA CANTIDAD MINIMA DEBE SER MAYOR A 0' : <button className="btnAdd" onClick={handleOnAdd}>
						Agregar
					</button>}	
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
