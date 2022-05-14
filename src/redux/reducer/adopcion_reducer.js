import { TODAS_MASCOTAS_ADOPCION } from "../types";

const incialState = {
  todasMascotasAdopcion: []
};

export default (state = incialState, action) => {
  switch (action.type) {
    case TODAS_MASCOTAS_ADOPCION:
      return  {
        ...state,
        todasMascotasAdopcion: action.payload
      };
    default:
      return state;
  }
};
