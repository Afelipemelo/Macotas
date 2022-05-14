import { TODAS_MASCOTAS_PERDIDAS } from "../types";

const incialState = {
  todasMascotasPeridios: []
};

export default (state = incialState, action) => {
  switch (action.type) {
    case TODAS_MASCOTAS_PERDIDAS:
      return  {
        ...state,
        todasMascotasPeridios: action.payload
      };
    default:
      return state;
  }
};
