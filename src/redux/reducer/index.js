import { combineReducers } from "redux";
import mascotas_reducer from "./mascotas_reducer";
import adopcion_reducer from "./adopcion_reducer";
import venta_reducer from "./venta_reducer"
import perdidos_reducer from "./perdidos_reducer"

export default combineReducers({
    mostrar_mascotas:mascotas_reducer,
    mostrar_mascotas_adopcion:adopcion_reducer,
    mostrar_mascota_venta:venta_reducer,
    mostrar_mascota_peridida:perdidos_reducer

})