import "./NavBar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg" fixed="top">
			<Container>
				
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<img
					className="logo"
					src=".\src\components\Img\catlogo.webp"
					alt="logo"
				/>
				<Navbar.Brand href="">Mianis store</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="">Comidas</Nav.Link>
						<Nav.Link href="" >
							Juguetes
						</Nav.Link>
						<Nav.Link href="" >
							Rascadores
						</Nav.Link>
						<Nav.Link href="" >
							Areneros
						</Nav.Link>
						<Nav.Link href="" >
							Extras
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<div>
				<a className="nav_link" href="">
			<CartWidget /></a>
					<Badge bg="secondary" className='medalla'>6</Badge>
				</div>
			</Container>
		</Navbar>
		
	);
};

export default NavBar;
