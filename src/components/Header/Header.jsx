import React from "react";
import { Wrapper, Title } from "./Header.styles";

export default function Header({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}
