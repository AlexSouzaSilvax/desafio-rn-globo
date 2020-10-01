import React from "react";
import { Body, Wrapper, Lista } from "./Home.styles";
import Header from "../../components/Header";
import CardFilme from "../../components/CardFilme";
import { useDispatch, useSelector } from "react-redux";
import { favoritar } from "../../store/Filmes/Filmes.actions";
import { selectAllFilmes } from "../../store/Filmes/Filmes.selectors";
export default function Home({ navigation }) {

  const dispatch = useDispatch();
  const filmes = useSelector(selectAllFilmes);  

  return (
    <Body>
      <Wrapper />
      <Header title="Home" />
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
      />
    </Body>
  );
}
