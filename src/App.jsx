import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useState } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartContainer from "./components/CartContainer/CartContainer";


import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/category/:id' element={<ItemListContainer />} />
				<Route path='/detail/:productId' element={<ItemDetailContainer />} />
				<Route path='/carrito' element={<CartContainer />} />

				<Route path="*" element= {<Navigate to='/' />} />
			</Routes>

		</BrowserRouter>
	);
}

export default App;
