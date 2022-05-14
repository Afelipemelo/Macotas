import { TODAS_MASCOTAS } from "../types";

const incialState = {
  todasMascotas: []
};

export default (state = incialState, action) => {
  switch (action.type) {
    case TODAS_MASCOTAS:
      return  {
        ...state,
        todasMascotas: action.payload
      };
    default:
      return state;
  }
};
