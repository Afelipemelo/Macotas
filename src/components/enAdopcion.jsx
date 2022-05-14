import React,{Fragment, useEffect} from 'react';
import "../Style/Card.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';
import adopcion_action from "../redux/action/adopcion_action"
const EnAdopcion = () => {
    const dispatch = useDispatch()
    const mascotasVenta = useSelector((state)=>state. mostrar_mascotas_adopcion.todasMascotasAdopcion)
    useEffect(()=>{
        dispatch(adopcion_action())
    },[])
    return ( 
        <Fragment>
           <div className='card-mascotas'>
            {mascotasVenta.map(item=>(
               <Card key={item.id_mascota}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://imgs.search.brave.com/b-0oGkhKm4PuXIJVnCQjVjuOMVFnJNtGP9zOGDgD4Ts/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/S3NOcUoxTnhsVTVJ/ZGdaMkl5cE9BSGFF/byZwaWQ9QXBp"
                    alt="green iguana"
                    />
                <CardContent>
                    <h2>
                    {item.nombre}
                    </h2>
                    <h2>
                    {item.edad} - Años
                    </h2>
                    <h4>
                    {item.estado}
                    </h4>
                </CardContent>
                    <Button 
                   href='./infoAnimales'
                   sx={{ml: 14}}
                  
                    >Editar</Button> 
                   
            </Card>
             ))} 
            </div>
        </Fragment>
     );
}
 
export default EnAdopcion;