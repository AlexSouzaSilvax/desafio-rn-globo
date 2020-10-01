export const selectAllFilmes = (state) => state.filmes;

export const selectFavoritedFilmes = (state) =>
  state.filmes.filter((filme) => filme.favorito);

  export const selectQtdFavoritedFilmes = (state) =>
  state.filmes.filter((filme) => filme.favorito).length;