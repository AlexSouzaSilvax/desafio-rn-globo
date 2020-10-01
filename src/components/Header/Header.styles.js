import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${colors.cinzaEscuro};  
`;

export const Title = styled.Text`
  color: ${colors.branco2};
  font-size: 18px;
  font-weight: 500;
  align-self: center;
`;
