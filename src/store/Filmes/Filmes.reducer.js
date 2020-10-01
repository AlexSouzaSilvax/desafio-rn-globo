import { filmes } from "../../mocks/Filmes";

export default function (state = filmes, action) {
  switch (action.type) {
    case "FAVORITAR":
      return state.map((filme) =>
        filme.id === action.payload
          ? { ...filme, favorito: !filme.favorito }
          : filme
      );
    default:
      return state;
  }
}
