import styled from "styled-components/native";
import colors from "../../styles/colors";
import Constants from "expo-constants";

export const Wrapper = styled.View`
  padding-top: ${Constants.statusBarHeight};
  background-color: ${colors.cinzaEscuro};
`;

export const Body = styled.View`
  background-color: ${colors.cinzaClaro3};
  flex: 1;
  border-width: 0;  
`;

export const Lista = styled.FlatList`
  /*  justify-content: center;
  align-items: center;*/
`;
