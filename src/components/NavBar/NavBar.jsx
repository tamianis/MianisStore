import "./NavBar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg" fixed="top">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Link to="/">
					<img
						className="logo linknav"
						to="/home"
						src="https://cdn.pixabay.com/photo/2016/10/11/18/17/calico-cat-1732370_960_720.png"
						alt="logo"
					/>
				</Link>
				<Navbar.Brand href="">Mianis store</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink className="linknav" to="/category/comida">
							Comidas
						</NavLink>
						<NavLink className="linknav" to="/category/juguete">
							Juguetes
						</NavLink>
						<NavLink className="linknav" to="/category/rascador">
							Rascadores
						</NavLink>
						<NavLink className="linknav" to="/category/arena">
							Arenas
						</NavLink>
					</Nav>
				
				<div>
					<Link to="/carrito">
						<CartWidget />
					</Link>

				</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
