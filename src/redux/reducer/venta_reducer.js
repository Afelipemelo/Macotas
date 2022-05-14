import { TODAS_MASCOTA_VENTA  } from "../types";

const incialState = {
  todasMascotasVenta: []
};

export default (state = incialState, action) => {
  switch (action.type) {
    case TODAS_MASCOTA_VENTA:
      return  {
        ...state,
        todasMascotasVenta: action.payload
      };
    default:
      return state;
  }
};
