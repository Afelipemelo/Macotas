import React,{Fragment} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link, Outlet } from 'react-router-dom';
import "../Style/menu.css"
const Menu = () => {

    return ( 
        <Fragment>
			<header className="header">
					<div className="container">
					<div className="btn-menu">
						<label htmlFor="btn-menu">
							<DensityMediumIcon/>
						</label>
					</div>
						<div className="logo">
							<h1>Mi Mascota</h1>
						</div>
					</div>
				</header>
				<div className="capa"></div>
			<input type="checkbox" id="btn-menu" />
			<div className="container-menu">
				<div className="cont-menu">
					<nav>
						<Link to="./homePage">Inicio</Link>
						<Link to="./formuEnAdopcion">Dar En Adopccion</Link>
						<Link to="./enAdopcion">En Adopccion</Link>
						<Link to="./formuEnVenta">Dar En Venta</Link>
						<Link to="./enVenta">En Venta</Link>
						<Link to="./perdidos">Perdidos</Link>
					</nav>
					<label htmlFor="btn-menu">
							<ArrowBackIosNewIcon/>
						</label>
				</div>
			</div>
			<section>
				<Outlet/>
			</section>
        </Fragment>
     );
}
 
export default Menu;
