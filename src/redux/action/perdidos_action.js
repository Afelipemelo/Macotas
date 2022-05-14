import axios from "axios";
import { TODAS_MASCOTAS_PERDIDAS} from "../types";

const mascotasAdopcion = ()=>{
    return async (dispatch) =>{
            try {
                const res = await axios.get('http://localhost:4001/consulta-mascotas-perdidas')
                // res.data.mascotasAdopcion
                dispatch(mostrarMascotasAdopccion(res.data.mascotasPerdidas))
            }catch(error){

            }
    
    }
}
export default mascotasAdopcion;
const mostrarMascotasAdopccion = (data) =>({
    type: TODAS_MASCOTAS_PERDIDAS,
    payload: data
})
