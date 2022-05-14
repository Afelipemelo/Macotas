import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "../Style/perdidos.css"
import perdidos_action from "../redux/action/perdidos_action"
const Perdidos = () => {
    const dispatch = useDispatch()
    const mascotasPerdidas = useSelector((state)=>state.mostrar_mascota_peridida.todasMascotasPeridios)
    console.log(mascotasPerdidas)
    useEffect(()=>{
        dispatch(perdidos_action())
    },[])
    return (
    <Fragment> 
        <div className='boton'>
        <Button href='./formuPerdidos' variant="contained" disableElevation>
        Ayudame a encontrar mi hogar
        </Button>
        </div>
        <div className='container-perdidos'>
             <div className='card-mascotas-perdidas'>
             {mascotasPerdidas.map(item=>(
               <Card key={item.id_mascota}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://imgs.search.brave.com/jQFX-5o1SEnieWp2rhojt3tH_ABn8c0ClAf38zzJXDA/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/eE4tR29BTHRWTjZD/cTBENWFIWk5nSGFF/byZwaWQ9QXBp"
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
        </div>
   </Fragment> 
   );
}
 
export default Perdidos;