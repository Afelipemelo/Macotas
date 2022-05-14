import axios from "axios";
import { TODAS_MASCOTA_VENTA} from "../types";

const mascotasVenta = ()=>{
    return async (dispatch) =>{
            try {
                const res = await axios.get('http://localhost:4001/consulta-mascotas-venta')
                // res.data.mascotasAdopcion
                dispatch(mostrarMascotasVenta(res.data.mascotasVenta))
            }catch(error){

            }
    
    }
}
export default mascotasVenta;
const mostrarMascotasVenta = (data) =>({
    type: TODAS_MASCOTA_VENTA,
    payload: data
})
