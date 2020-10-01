import React from "react";
import TagVideo from "../TagVideo";
import {
  Wrapper,
  Titulo,
  Top,
  Tags,
  Favoritar,
  Middle,
  Bottom,
  Descricao,
  Thumb,
} from "./CardFilme.styles";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../styles/colors";

export default function CardFilme({ filme, favoritar }) {
  var listaTag = filme.tags.map((e) => <TagVideo key={e} name={e} />);

  return (
    <Wrapper>
      <Top>
        <Tags>{listaTag}</Tags>
        <Favoritar onPress={favoritar}>
          <IconAntDesign
            name={filme.favorito ? "star" : "staro"}
            color={
              filme.favorito ? `${colors.amarelo}` : `${colors.amareloClaro}`
            }
            size={filme.favorito ? 24 : 23}
          />
        </Favoritar>
      </Top>
      <Middle>
        <Thumb source={filme.thumb} />
      </Middle>
      <Bottom>
        <Titulo numberOfLines={2}>{filme.titulo}</Titulo>
        <Descricao numberOfLines={3}>{filme.descricao}</Descricao>
      </Bottom>
    </Wrapper>
  );
}
