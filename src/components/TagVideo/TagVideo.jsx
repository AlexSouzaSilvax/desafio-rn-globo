import React from "react";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../styles/colors";
import { Wrapper, Name } from "./TagVideo.styles";

export default function TagVideo({ name }) {
  return (
    <Wrapper>
      <IconAntDesign name="tagso" color={colors.cinzaClaro2} />
      <Name>{name}</Name>
    </Wrapper>
  );
}
