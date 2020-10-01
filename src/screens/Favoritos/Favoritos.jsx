import React from "react";
import { Body, Wrapper, Lista, ListaVazia, TextoListaVazia } from "./Favoritos.styles";
import Header from "../../components/Header";
import CardFilme from "../../components/CardFilme";
import { useDispatch, useSelector } from "react-redux";
import { favoritar } from "../../store/Filmes/Filmes.actions";
import { selectFavoritedFilmes } from "../../store/Filmes/Filmes.selectors";
export default function Favoritos({ navigation }) {
  const dispatch = useDispatch();
  const filmes = useSelector(selectFavoritedFilmes);

  return (
    <Body>
      <Wrapper />
      <Header title="Favoritos" />
      <Lista
        data={filmes}
        keyExtractor={(f) => f.id.toString()}
        renderItem={({ item }) => (
          <CardFilme
            key={item.id}
            filme={item}
            favoritar={() => dispatch(favoritar(item.id))}
          />
        )}
        ListEmptyComponent={<ListaVazia><TextoListaVazia>Nenhum vídeo favorito</TextoListaVazia></ListaVazia>}
      />
    </Body>
  );
}
