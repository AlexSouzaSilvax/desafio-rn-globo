import React, { useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import colors from "../../styles/colors";

import {
  Wrapper,
  ViewBoasVindas,
  TextBoasVindas,
  TextBoasVindas2,
  ViewInput,
  BtnProblemaLogin,
  TextProblemaLogin,
  ViewBtn,
} from "./Login.styles";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Wrapper>
      <ViewBoasVindas>
        <TextBoasVindas>Bem-vindos à</TextBoasVindas>
        <TextBoasVindas2>WeTube</TextBoasVindas2>
      </ViewBoasVindas>
      <ViewInput>
        <Input label="Usuário" value={usuario} setValue={setUsuario} />
        <Input label="Senha" value={senha} setValue={setSenha} />
      </ViewInput>
      <BtnProblemaLogin onPress={() => navigation.navigate("MainTab")}>
        <TextProblemaLogin>Problemas ao efetuar login ?</TextProblemaLogin>
      </BtnProblemaLogin>
      <ViewBtn>
        <Button
          titulo="Fazer login"
          color={colors.cinza}
          background={colors.verdeEscuro}
          onPress={() => navigation.navigate("MainTab")}
        />
        <Button
          titulo="Cadastrar-se"
          color={colors.cinzaClaro2}
          background={colors.cinzaEscuro}
          onPress={() => navigation.navigate("MainTab")}
        />
      </ViewBtn>
    </Wrapper>
  );
}
