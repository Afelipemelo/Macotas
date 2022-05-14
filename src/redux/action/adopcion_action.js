import axios from "axios";
import { TODAS_MASCOTAS_ADOPCION} from "../types";

const mascotasAdopcion = ()=>{
    return async (dispatch) =>{
            try {
                const res = await axios.get('http://localhost:4001/consulta-mascotas-adopcion')
                // res.data.mascotasAdopcion
                dispatch(mostrarMascotasAdopccion(res.data.mascotasAdopcion))
            }catch(error){

            }
    
    }
}
export default mascotasAdopcion;
const mostrarMascotasAdopccion = (data) =>({
    type: TODAS_MASCOTAS_ADOPCION,
    payload: data
})
