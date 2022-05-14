import axios from "axios";
import { TODAS_MASCOTAS} from "../types";

const mascotas = ()=>{
    return async (dispatch) =>{
            try {
                const res = await axios.get('http://localhost:4001/consulta-mascotas')
                // res.data.mascotasAdopcion
                dispatch(mostrarMascotas(res.data.mascotas))
            }catch(error){

            }
    
    }
}
export default mascotas;
const mostrarMascotas = (data) =>({ 
    type: TODAS_MASCOTAS,
    payload: data
})

