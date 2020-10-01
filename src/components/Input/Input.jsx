import React from "react";
import colors from "../../styles/colors";
import { Wrapper, Label, TextInput } from "./Input.styles";

export default function Input({ label, value, setValue }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <TextInput
        value={value}
        onChangeText={setValue}
        selectionColor={colors.branco2}
      />
    </Wrapper>
  );
}
