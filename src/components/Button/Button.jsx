import React from "react";

import { Wrapper, TituloBtn } from "./Button.styles";

export default function Button({ titulo, color, background, onPress }) {
  return (
    <Wrapper background={background} onPress={onPress}>
      <TituloBtn color={color}>{titulo}</TituloBtn>
    </Wrapper>
  );
}
