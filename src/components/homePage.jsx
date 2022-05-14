import React,{Fragment, useEffect} from 'react';
import "../Style/Card.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import mascotas_action from "../redux/action/mascotas_action"
const HomePage = () => {
    const dispatch = useDispatch()
    const mascotas = useSelector((state)=>state.mostrar_mascotas.todasMascotas)
    console.log(mascotas)
    useEffect(()=>{
        dispatch(mascotas_action())
    },[])

    return ( 
        <Fragment>
           <div className='card-mascotas'>
            {mascotas.map(item=>(
               <Card key={item.id_mascota}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://imgs.search.brave.com/t9341bk2U3B7V9td5pFUgK2PjEc4iUvkSkeoMjJvWXU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/TXdHNmVzNm5qTzV4/bkgyNTNPZEdnSGFI/YSZwaWQ9QXBp"
                    alt="green iguana"
                    />
                <CardContent>
                    <h2>
                    {item.nombre}
                    </h2>
                    <h2>
                    {item.edad} - Años
                    </h2>
                    <h2 >
                    precio <br/>
                    {item.precio}
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
 
export default HomePage;